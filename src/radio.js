// Procedural radio: original Funk carioca and Pagodão baiano beats synthesized
// in real time with WebAudio (no samples, no copyrighted material).
import { rng } from './util.js';

const NOTE = (n) => 440 * Math.pow(2, (n - 69) / 12);

const STATIONS = {
  funk: { name: 'Rádio Baile Funk', bpm: [128, 132], names: ['Baile da Quebrada', 'Tamborzão do Morro', 'Grau no Asfalto', 'Mandelão 150', 'Rolê de Domingo', 'Beat da Favela'] },
  pagodao: { name: 'Rádio Pagodão Baiano', bpm: [136, 142], names: ['Swing da Praia', 'Pagodão do Grau', 'Timbau na Ladeira', 'Arrocha no Rolê', 'Batidão de Salvador', 'Paredão do Verão'] },
};
export const STATION_ORDER = ['funk', 'pagodao', 'off'];

export class Radio {
  constructor(audio) {
    this.audio = audio;
    this.station = 'off';
    this.vol = 0.35;
    this.timer = null;
    this.trackN = Math.floor(Math.random() * 100);
  }
  get label() { return this.station === 'off' ? 'Rádio desligada' : STATIONS[this.station].name; }
  setVolume(v) { this.vol = v; if (this.out) this.out.gain.setTargetAtTime(v, this.audio.ctx.currentTime, 0.3); }

  setStation(st) {
    if (st === this.station && this.timer) return;
    this.station = st;
    this.stop();
    if (st === 'off') return;
    const a = this.audio; a.unlock(); if (!a.ctx) return;
    const c = a.ctx;
    if (!this.out) {
      this.out = c.createGain(); this.out.gain.value = this.vol;
      const comp = c.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 4;
      this.out.connect(comp); comp.connect(a.master);
      // short room reverb for the percussion
      this.verb = c.createConvolver();
      const len = c.sampleRate * 0.9, ir = c.createBuffer(2, len, c.sampleRate);
      for (let ch = 0; ch < 2; ch++) { const d = ir.getChannelData(ch); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3); }
      this.verb.buffer = ir;
      this.verbG = c.createGain(); this.verbG.gain.value = 0.18;
      this.verb.connect(this.verbG); this.verbG.connect(this.out);
    }
    this.newTrack();
    this.next = c.currentTime + 0.1;
    this.timer = setInterval(() => this.schedule(), 25);
  }
  stop() { if (this.timer) clearInterval(this.timer); this.timer = null; }
  cycle() {
    const i = STATION_ORDER.indexOf(this.station);
    this.setStation(STATION_ORDER[(i + 1) % STATION_ORDER.length]);
    return this.station;
  }

  newTrack() {
    const S = STATIONS[this.station];
    this.trackN++;
    const R = rng(this.trackN * 7919 + (this.station === 'funk' ? 1 : 2));
    this.R = R;
    this.bpm = S.bpm[0] + Math.floor(R() * (S.bpm[1] - S.bpm[0] + 1));
    this.step16 = 60 / this.bpm / 4;
    this.key = 45 + Math.floor(R() * 7); // A2..D#3
    this.minor = this.station === 'funk' ? true : R() < 0.3;
    const prog = this.minor ? [[0, 3, 7], [-4, 0, 3], [-7, -3, 0], [-2, 2, 5]] : [[0, 4, 7], [-5, -1, 2], [-3, 0, 4], [-7, -3, 0]];
    this.prog = R() < 0.5 ? prog : [prog[0], prog[2], prog[1], prog[3]];
    const scale = this.minor ? [0, 3, 5, 7, 10, 12, 15] : [0, 2, 4, 7, 9, 12, 14];
    this.motif = Array.from({ length: 16 }, () => (R() < 0.42 ? scale[Math.floor(R() * scale.length)] : null));
    this.motif2 = this.motif.map((n) => (n != null && R() < 0.4 ? scale[Math.floor(R() * scale.length)] : n));
    this.bar = 0; this.step = 0;
    this.trackName = `${S.names[this.trackN % S.names.length]} ${1 + (this.trackN % 9)}`;
    if (this.onTrack) this.onTrack(this.trackName, S.name);
  }

  schedule() {
    const c = this.audio.ctx;
    if (!c || c.state !== 'running') return;
    while (this.next < c.currentTime + 0.12) {
      this.play(this.step, this.bar, this.next);
      this.next += this.step16 * (this.station === 'pagodao' && this.step % 2 ? 0.92 : this.station === 'pagodao' ? 1.08 : 1); // swing
      this.step++;
      if (this.step === 16) { this.step = 0; this.bar++; if (this.bar >= 48) this.newTrack(); }
    }
  }

  // --------------------------------------------------------------- instruments
  env(t, g0, dur, dest, attack = 0.002) {
    const c = this.audio.ctx, g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(g0, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    g.connect(dest || this.out);
    return g;
  }
  osc(type, f0, f1, t, dur, g0, dest, glide = 0.08) {
    const c = this.audio.ctx, o = c.createOscillator();
    o.type = type; o.frequency.setValueAtTime(f0, t);
    if (f1) o.frequency.exponentialRampToValueAtTime(f1, t + glide);
    o.connect(this.env(t, g0, dur, dest)); o.start(t); o.stop(t + dur + 0.05);
  }
  noise(t, dur, g0, type, freq, q = 1, dest) {
    const c = this.audio.ctx, s = c.createBufferSource(); s.buffer = this.audio.noise;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    s.connect(f); f.connect(this.env(t, g0, dur, dest)); s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.05);
  }
  kick(t, g = 0.9) { this.osc('sine', 160, 42, t, 0.35, g, null, 0.07); }
  bass808(t, n, dur = 0.5, g = 0.55) { this.osc('sine', NOTE(n + 12) * 1.6, NOTE(n), t, dur, g, null, 0.05); this.osc('triangle', NOTE(n), 0, t, dur * 0.6, g * 0.25); }
  clap(t, g = 0.45) { for (const d of [0, 0.011, 0.022]) this.noise(t + d, 0.12, g, 'bandpass', 1400, 1.2); this.noise(t + 0.03, 0.25, g * 0.4, 'bandpass', 1200, 1, this.verb); }
  hat(t, g = 0.12, open = false) { this.noise(t, open ? 0.18 : 0.04, g, 'highpass', 8000, 0.7); }
  tom(t, f = 210, g = 0.5) { this.osc('sine', f * 1.5, f, t, 0.22, g, null, 0.04); this.noise(t, 0.03, g * 0.3, 'bandpass', 2500, 2); }
  surdo(t, g = 0.7) { this.osc('sine', 110, 58, t, 0.6, g, null, 0.12); }
  timbau(t, high = true, g = 0.4) { this.osc('sine', high ? 520 : 330, high ? 380 : 240, t, 0.14, g, null, 0.03); this.noise(t, 0.05, g * 0.5, 'bandpass', high ? 3200 : 1800, 3, this.verb); }
  agogo(t, high) { this.osc('square', high ? 920 : 690, 0, t, 0.12, 0.07); this.osc('sine', high ? 1840 : 1380, 0, t, 0.08, 0.05); }
  pluck(t, n, g = 0.12, dur = 0.22) {
    const c = this.audio.ctx, o = c.createOscillator(), f = c.createBiquadFilter();
    o.type = 'sawtooth'; o.frequency.value = NOTE(n);
    f.type = 'lowpass'; f.frequency.setValueAtTime(3200, t); f.frequency.exponentialRampToValueAtTime(500, t + dur);
    o.connect(f); f.connect(this.env(t, g, dur)); o.start(t); o.stop(t + dur + 0.05);
  }
  lead(t, n, dur, g = 0.08) {
    const c = this.audio.ctx, o = c.createOscillator(), f = c.createBiquadFilter();
    o.type = 'square'; o.frequency.value = NOTE(n);
    f.type = 'lowpass'; f.frequency.value = 1800;
    o.connect(f); f.connect(this.env(t, g, dur, null, 0.01)); o.start(t); o.stop(t + dur + 0.05);
  }
  siren(t) { this.osc('sawtooth', 600, 1400, t, 0.9, 0.05, this.verb, 0.8); }

  play(st, bar, t) {
    const chord = this.prog[Math.floor(bar / 2) % 4];
    const sec = Math.floor(bar / 8) % 6; // 0 intro, 1-2 verse, 3 drop, 4 break, 5 verse
    const k = this.key;
    if (this.station === 'funk') {
      const breakdown = sec === 4;
      // tamborzão pattern
      if (!breakdown && [0, 3, 6, 10].includes(st)) this.kick(t, st === 0 ? 1 : 0.8);
      if ([0, 3, 6, 8, 11, 14].includes(st)) this.tom(t, st % 2 ? 180 : 230, breakdown ? 0.25 : 0.42);
      if (st === 4 || st === 12) this.clap(t);
      if (sec > 0 && st % 2 === 0) this.hat(t, st % 4 === 2 ? 0.14 : 0.07);
      if (!breakdown && sec > 0 && [0, 3, 6, 10].includes(st)) this.bass808(t, k - 12 + chord[0], st === 6 ? 0.35 : 0.5);
      const m = (bar % 4 === 3 ? this.motif2 : this.motif)[st];
      if (sec >= 2 && sec !== 4 && m != null) this.lead(t, k + 24 + m, this.step16 * 1.6);
      if (sec === 3 && st === 0 && bar % 4 === 0) this.siren(t);
    } else {
      const breakdown = sec === 4;
      if (!breakdown && (st === 0 || st === 8)) this.surdo(t, 0.75);
      if (!breakdown && (st === 7 || st === 15)) this.surdo(t, 0.35);
      if ([0, 2, 3, 6, 8, 10, 11, 14].includes(st)) this.timbau(t, st % 4 !== 0, breakdown ? 0.25 : 0.38);
      if ([0, 3, 6, 10, 12].includes(st)) this.agogo(t, st === 0 || st === 10);
      if (st === 4 || st === 12) this.clap(t, 0.35);
      if (sec > 0 && st % 2 === 1) this.hat(t, 0.06);
      if (sec > 0 && !breakdown && [0, 7, 8, 12].includes(st)) this.bass808(t, k - 12 + chord[0] + (st === 7 ? 7 : 0), 0.3, 0.45);
      if (sec > 0 && [2, 6, 10, 14].includes(st)) for (const n of chord) this.pluck(t + Math.random() * 0.012, k + 12 + n, 0.06);
      const m = (bar % 4 === 3 ? this.motif2 : this.motif)[st];
      if (sec >= 2 && sec !== 4 && m != null) this.pluck(t, k + 24 + m, 0.1, 0.3);
    }
  }
}
