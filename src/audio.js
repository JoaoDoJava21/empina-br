// Fully synthesized audio (no asset files): engine, electric whine, effects
export class Audio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.vol = 0.8;
  }
  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const c = (this.ctx = new AC());
    this.master = c.createGain();
    this.master.gain.value = this.enabled ? this.vol : 0;
    this.master.connect(c.destination);
    // engine chain: two oscillators -> shaper -> lowpass -> gain
    this.eGain = c.createGain(); this.eGain.gain.value = 0;
    this.lp = c.createBiquadFilter(); this.lp.type = 'lowpass'; this.lp.frequency.value = 900; this.lp.Q.value = 3;
    const shaper = c.createWaveShaper();
    const curve = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) { const x = (i / 1023) * 2 - 1; curve[i] = Math.tanh(x * 3.2); }
    shaper.curve = curve;
    this.o1 = c.createOscillator(); this.o1.type = 'sawtooth';
    this.o2 = c.createOscillator(); this.o2.type = 'square';
    this.o3 = c.createOscillator(); this.o3.type = 'sine';
    const g1 = c.createGain(); g1.gain.value = 0.5;
    const g2 = c.createGain(); g2.gain.value = 0.25;
    const g3 = c.createGain(); g3.gain.value = 0.0;
    this.g3 = g3;
    // "chop" LFO to give the single-cylinder thump
    this.lfo = c.createOscillator(); this.lfo.type = 'square';
    const lfoG = c.createGain(); lfoG.gain.value = 0.35;
    this.chop = c.createGain(); this.chop.gain.value = 0.65;
    this.lfo.connect(lfoG); lfoG.connect(this.chop.gain);
    this.o1.connect(g1); this.o2.connect(g2); g1.connect(shaper); g2.connect(shaper);
    shaper.connect(this.chop); this.chop.connect(this.lp); this.lp.connect(this.eGain);
    this.o3.connect(g3); g3.connect(this.eGain);
    this.eGain.connect(this.master);
    for (const o of [this.o1, this.o2, this.o3, this.lfo]) o.start();
    // noise buffer for effects
    const nb = c.createBuffer(1, c.sampleRate * 1.0, c.sampleRate);
    const d = nb.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    this.noise = nb;
  }
  setEnabled(on) { this.enabled = on; if (this.master) this.master.gain.value = on ? this.vol : 0; }
  engine(rpm, throttle, electric, running) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    if (!running) { this.eGain.gain.setTargetAtTime(0, t, 0.1); return; }
    if (electric) {
      const f = 180 + rpm * 0.09;
      this.o3.frequency.setTargetAtTime(f, t, 0.05);
      this.g3.gain.setTargetAtTime(0.12 + throttle * 0.18, t, 0.05);
      this.o1.frequency.setTargetAtTime(f * 0.5, t, 0.05);
      this.o2.frequency.setTargetAtTime(f * 2.01, t, 0.05);
      this.lp.frequency.setTargetAtTime(400 + throttle * 600, t, 0.05);
      this.eGain.gain.setTargetAtTime(0.06 + throttle * 0.1, t, 0.08);
      this.lfo.frequency.setTargetAtTime(1, t, 0.1);
      return;
    }
    this.g3.gain.setTargetAtTime(0, t, 0.05);
    const f = rpm / 60; // firing-ish frequency scaled for small speakers
    this.o1.frequency.setTargetAtTime(f * 1.0 + 30, t, 0.03);
    this.o2.frequency.setTargetAtTime(f * 0.5 + 15, t, 0.03);
    this.lfo.frequency.setTargetAtTime(f * 0.5, t, 0.03);
    this.lp.frequency.setTargetAtTime(500 + throttle * 2200 + rpm * 0.08, t, 0.04);
    this.eGain.gain.setTargetAtTime(0.12 + throttle * 0.2, t, 0.05);
  }
  burst(dur = 0.4, freq = 600, gain = 0.5, type = 'lowpass') {
    if (!this.ctx) return;
    const c = this.ctx, s = c.createBufferSource(); s.buffer = this.noise;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq;
    const g = c.createGain(); g.gain.value = gain;
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
    s.connect(f); f.connect(g); g.connect(this.master);
    s.start(); s.stop(c.currentTime + dur);
  }
  crash() { this.burst(0.7, 500, 0.9); this.burst(0.25, 2500, 0.3, 'highpass'); }
  thump() { this.burst(0.18, 220, 0.6); }
  pop() { this.burst(0.12, 1500, 0.25, 'bandpass'); }
  shift() { this.burst(0.06, 900, 0.18, 'bandpass'); }
  scrape() { this.burst(0.5, 3500, 0.35, 'highpass'); }
  chime(n = 3) {
    if (!this.ctx) return;
    const c = this.ctx;
    [0, 4, 7, 12].slice(0, n + 1).forEach((st, i) => {
      const o = c.createOscillator(), g = c.createGain();
      o.type = 'triangle'; o.frequency.value = 660 * Math.pow(2, st / 12);
      g.gain.value = 0.0001;
      const t0 = c.currentTime + i * 0.07;
      g.gain.exponentialRampToValueAtTime(0.18, t0 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.25);
      o.connect(g); g.connect(this.master); o.start(t0); o.stop(t0 + 0.3);
    });
  }
}
