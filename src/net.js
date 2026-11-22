import Peer from 'peerjs';

// Free, serverless-for-us online mode: PeerJS public broker for signalling + WebRTC data channels.
// Star topology: the room owner relays everyone's state. If the owner leaves, someone takes over.
const PREFIX = 'empinabr-v1-';
const ICE = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
    { urls: 'stun:global.stun.twilio.com:3478' },
    { urls: 'turn:openrelay.metered.ca:80', username: 'openrelayproject', credential: 'openrelayproject' },
    { urls: 'turn:openrelay.metered.ca:443', username: 'openrelayproject', credential: 'openrelayproject' },
  ],
};
const MAX = 10;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export class Net {
  constructor() {
    this.peer = null; this.isHost = false; this.conns = new Map(); this.hostConn = null;
    this.players = new Map(); this.room = null; this.h = {}; this.profile = null; this.active = false;
    this.sendT = 0; this.myState = null;
  }
  on(ev, fn) { this.h[ev] = fn; }
  emit(ev, ...a) { if (this.h[ev]) this.h[ev](...a); }
  get id() { return this.peer ? this.peer.id : null; }

  newPeer(id) {
    return new Promise((res) => {
      const p = id ? new Peer(id, { config: ICE, debug: 0 }) : new Peer({ config: ICE, debug: 0 });
      let done = false;
      const fin = (v) => { if (!done) { done = true; res(v); } };
      p.on('open', () => fin({ ok: true, p }));
      p.on('error', (e) => { if (!done) { fin({ ok: false, err: e.type, p }); try { p.destroy(); } catch {} } });
      setTimeout(() => { if (!done) { fin({ ok: false, err: 'timeout', p }); try { p.destroy(); } catch {} } }, 10000);
    });
  }

  async joinPublic(profile) {
    this.profile = profile;
    for (let k = 1; k <= 5; k++) {
      const room = 'PUBLICA' + k;
      this.emit('status', `Procurando sala pública ${k}...`);
      const r = await this.tryJoin(room);
      if (r === 'ok') return true;
      if (r === 'full') continue;
      if (r === 'none') {
        if (await this.host(room)) return true;
        const r2 = await this.tryJoin(room);
        if (r2 === 'ok') return true;
      }
      if (r === 'error') break;
    }
    this.emit('status', 'Não consegui conectar. Verifique a internet.');
    return false;
  }

  async createRoom(profile) {
    this.profile = profile;
    const abc = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
    for (let t = 0; t < 4; t++) {
      const code = Array.from({ length: 4 }, () => abc[Math.floor(Math.random() * abc.length)]).join('');
      this.emit('status', 'Criando sala...');
      if (await this.host(code)) return code;
    }
    this.emit('status', 'Falha ao criar sala.');
    return null;
  }

  async joinCode(code, profile) {
    this.profile = profile;
    this.emit('status', `Entrando na sala ${code}...`);
    const r = await this.tryJoin(code.toUpperCase());
    if (r === 'ok') return true;
    this.emit('status', r === 'full' ? 'Sala cheia.' : r === 'none' ? 'Sala não encontrada.' : 'Erro de conexão.');
    return false;
  }

  async host(room) {
    this.close(true);
    const r = await this.newPeer(PREFIX + room);
    if (!r.ok) return false;
    this.peer = r.p; this.isHost = true; this.room = room; this.active = true;
    this.players.clear();
    this.peer.on('connection', (c) => this.onClient(c));
    this.peer.on('disconnected', () => { try { this.peer.reconnect(); } catch {} });
    this.emit('status', `Sala ${room} online!`);
    this.emit('connected', { room, host: true });
    return true;
  }

  onClient(c) {
    c.on('data', (m) => {
      if (!m || typeof m !== 'object') return;
      if (m.t === 'hello') {
        if (this.players.size + 1 >= MAX) { c.send({ t: 'full' }); setTimeout(() => c.close(), 300); return; }
        this.conns.set(c.peer, c);
        const p = { id: c.peer, name: String(m.p.name || 'Piloto').slice(0, 16), bike: m.p.bike, colors: m.p.colors || {}, best: 0, s: null };
        this.players.set(c.peer, p);
        c.send({ t: 'welcome', id: c.peer, host: this.id, players: [this.meInfo(), ...[...this.players.values()].filter((x) => x.id !== c.peer).map(strip)] });
        this.broadcast({ t: 'join', p: strip(p) }, c.peer);
        this.emit('join', p);
      } else if (m.t === 'st') {
        const p = this.players.get(c.peer); if (p) { p.s = m.s; p.best = m.b || p.best; this.emit('state', c.peer, m.s); }
      } else if (m.t === 'chat' || m.t === 'ev') {
        const p = this.players.get(c.peer); if (!p) return;
        const out = { t: m.t, id: c.peer, name: p.name, msg: String(m.msg).slice(0, 80) };
        this.broadcast(out, c.peer); this.emit(m.t, out);
      } else if (m.t === 'prof') {
        const p = this.players.get(c.peer); if (!p) return;
        Object.assign(p, { name: String(m.p.name || p.name).slice(0, 16), bike: m.p.bike, colors: m.p.colors || {} });
        this.broadcast({ t: 'prof', p: strip(p) }, c.peer); this.emit('prof', p);
      }
    });
    const gone = () => {
      if (!this.players.has(c.peer)) return;
      const p = this.players.get(c.peer);
      this.players.delete(c.peer); this.conns.delete(c.peer);
      this.broadcast({ t: 'leave', id: c.peer });
      this.emit('leave', p);
    };
    c.on('close', gone); c.on('error', gone);
  }

  meInfo() { return { id: this.id, name: this.profile.name, bike: this.profile.bike, colors: this.profile.colors, best: this.profile.best || 0 }; }

  broadcast(m, except) { for (const [id, c] of this.conns) if (id !== except && c.open) { try { c.send(m); } catch {} } }

  async tryJoin(room) {
    this.close(true);
    const r = await this.newPeer(null);
    if (!r.ok) return 'error';
    this.peer = r.p;
    this.peer.on('disconnected', () => { try { this.peer.reconnect(); } catch {} });
    return new Promise((res) => {
      let done = false;
      const fin = (v) => { if (done) return; done = true; if (v !== 'ok') { this.close(true); } res(v); };
      this.peer.on('error', (e) => { if (e.type === 'peer-unavailable') fin('none'); else if (!this.active) fin('error'); });
      const c = this.peer.connect(PREFIX + room, { reliable: true, serialization: 'json' });
      c.on('open', () => c.send({ t: 'hello', p: this.profile }));
      c.on('data', (m) => {
        if (!m || typeof m !== 'object') return;
        if (m.t === 'full') return fin('full');
        if (m.t === 'welcome') {
          this.hostConn = c; this.isHost = false; this.room = room; this.active = true;
          this.players.clear();
          for (const p of m.players) if (p.id !== this.id) this.players.set(p.id, { ...p, s: null });
          this.emit('connected', { room, host: false });
          for (const p of this.players.values()) this.emit('join', p);
          fin('ok');
          return;
        }
        this.onHostMsg(m);
      });
      c.on('close', () => { if (done && this.active && this.hostConn === c) this.hostLost(); else fin('none'); });
      setTimeout(() => fin('none'), 9000);
    });
  }

  onHostMsg(m) {
    if (m.t === 'sts') {
      for (const [id, s, b] of m.l) {
        if (id === this.id) continue;
        const p = this.players.get(id); if (p) { p.s = s; p.best = b || p.best; this.emit('state', id, s); }
      }
    } else if (m.t === 'join') {
      if (m.p.id === this.id) return;
      const p = { ...m.p, s: null }; this.players.set(p.id, p); this.emit('join', p);
    } else if (m.t === 'leave') {
      const p = this.players.get(m.id); if (p) { this.players.delete(m.id); this.emit('leave', p); }
    } else if (m.t === 'chat' || m.t === 'ev') this.emit(m.t, m);
    else if (m.t === 'prof') { const p = this.players.get(m.p.id); if (p) { Object.assign(p, m.p); this.emit('prof', p); } }
  }

  async hostLost() {
    const room = this.room;
    for (const p of this.players.values()) this.emit('leave', p);
    this.players.clear();
    this.active = false;
    this.emit('status', 'Dono da sala saiu. Reconectando...');
    this.emit('reconnecting');
    await sleep(300 + Math.random() * 1500);
    let r = await this.tryJoin(room);
    if (r === 'ok') return;
    if (await this.host(room)) return;
    r = await this.tryJoin(room);
    if (r !== 'ok') { this.emit('status', 'Conexão perdida.'); this.emit('lost'); }
  }

  // called every frame
  tick(dt, state, best) {
    if (!this.active || !this.peer) return;
    this.sendT += dt;
    if (this.sendT < 1 / 12) return;
    this.sendT = 0;
    const s = state.map((v) => Math.round(v * 100) / 100);
    if (this.isHost) {
      const l = [[this.id, s, best]];
      for (const p of this.players.values()) if (p.s) l.push([p.id, p.s, p.best]);
      this.broadcast({ t: 'sts', l });
    } else if (this.hostConn && this.hostConn.open) {
      try { this.hostConn.send({ t: 'st', s, b: best }); } catch {}
    }
  }

  send(t, msg) {
    if (!this.active) return;
    const m = { t, msg };
    if (this.isHost) { this.broadcast({ ...m, id: this.id, name: this.profile.name }); }
    else if (this.hostConn && this.hostConn.open) this.hostConn.send(m);
  }

  updateProfile(profile) {
    this.profile = profile;
    if (!this.active) return;
    if (this.isHost) this.broadcast({ t: 'prof', p: this.meInfo() });
    else if (this.hostConn && this.hostConn.open) this.hostConn.send({ t: 'prof', p: profile });
  }

  close(silent = false) {
    this.active = false;
    for (const c of this.conns.values()) { try { c.close(); } catch {} }
    this.conns.clear();
    if (this.hostConn) { const hc = this.hostConn; this.hostConn = null; try { hc.close(); } catch {} }
    if (this.peer) { try { this.peer.destroy(); } catch {} this.peer = null; }
    this.isHost = false;
    if (!silent) { this.players.clear(); this.room = null; }
  }
}

function strip(p) { return { id: p.id, name: p.name, bike: p.bike, colors: p.colors, best: p.best || 0 }; }
