import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import './style.css';
import { World, W, C, HR } from './world.js';
import { BIKES, bikeById, BikeVisual, PAINTS, RIMS, HELMETS, JACKETS } from './bikes.js';
import { BikePhysics } from './physics.js';
import { Input } from './input.js';
import { Audio } from './audio.js';
import { Net } from './net.js';
import { Radio } from './radio.js';
import { clamp, damp, rng } from './util.js';

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const fmt = (n) => Math.round(n).toLocaleString('pt-BR');

// =============================================================== save
const SAVE_KEY = 'empinabr-save-v1';
const FREE = ['cb300f', 'pop27', 'r15', 'pcx25', 'evolt'];
function loadSave() {
  let s = null;
  try { s = JSON.parse(localStorage.getItem(SAVE_KEY)); } catch {}
  const d = {
    name: 'Piloto' + Math.floor(100 + Math.random() * 900), money: 2000, owned: [...FREE], bike: 'cb300f',
    colors: {}, up: {}, helmet: '#111111', jacket: '#1f2937', best: 0, total: 0, missions: {},
    settings: { quality: 'auto', time: 'tarde', steer: 'touch', easy: false, cambio: 'manual', sound: true, fps: false, cam: 0, radio: 'funk', radioGame: true, v: 2 },
  };
  if (!s) return d;
  if (!s.settings || s.settings.v !== 2) s.settings = { ...(s.settings || {}), easy: false, cambio: 'manual', v: 2 };
  return { ...d, ...s, settings: { ...d.settings, ...(s.settings || {}) }, owned: [...new Set([...FREE, ...(s.owned || [])])] };
}
const save = loadSave();
let saveT = 0;
const persist = () => { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch {} };
const colorsOf = (id) => ({ paint: (save.colors[id] && save.colors[id].paint) || bikeById(id).color, rim: (save.colors[id] && save.colors[id].rim) || '#1a1a1a', helmet: save.helmet, jacket: save.jacket });
const upOf = (id) => save.up[id] || { motor: 0, grau: 0, freio: 0 };

// =============================================================== renderer
const canvas = $('#c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', stencil: false });
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.type = THREE.PCFShadowMap;

const QUAL = {
  baixo: { dpr: 1.0, px: 0.75e6, fog: 230, shadows: false, shadowSize: 0, bots: 2, cars: 10 },
  medio: { dpr: 1.5, px: 1.35e6, fog: 360, shadows: true, shadowSize: 1024, bots: 3, cars: 16 },
  alto: { dpr: 2.0, px: 3.7e6, fog: 520, shadows: true, shadowSize: 2048, bots: 5, cars: 20 },
};
// GPU detection (mobile Mali/Adreno, Intel integrated, dedicated cards)
const GPU = (() => {
  try {
    const gl = renderer.getContext();
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    return String(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER));
  } catch { return ''; }
})();
function autoQuality() {
  const mem = navigator.deviceMemory || 4, cores = navigator.hardwareConcurrency || 4;
  const g = GPU.toLowerCase();
  if (mem <= 2 || cores <= 4 || /mali-(g3|g5[12]|t)|adreno[^0-9]*(3\d\d|4\d\d|50\d|51\d)\b|powervr|swiftshader|llvmpipe/.test(g)) return 'baixo';
  if (/nvidia|geforce|rtx|gtx|radeon rx|apple m\d|adreno[^0-9]*7\d\d/.test(g)) return 'alto';
  return 'medio'; // Mali-G57/G68 (Galaxy A16), Intel UHD/Iris Xe, Apple A15 (iPhone 13)
}
let dynScale = 1, dynT = 0;
let qName = save.settings.quality === 'auto' ? autoQuality() : save.settings.quality;
let Q = QUAL[qName];

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(62, 1, 0.3, 2400);
const pmrem = new THREE.PMREMGenerator(renderer);

// garage scene
const gScene = new THREE.Scene();
gScene.background = new THREE.Color('#101219');
gScene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
gScene.fog = new THREE.Fog('#101219', 8, 20);
const gCam = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
{
  const floor = new THREE.Mesh(new THREE.CircleGeometry(3.2, 48), new THREE.MeshStandardMaterial({ color: '#23262f', roughness: 0.35, metalness: 0.3 }));
  floor.rotation.x = -Math.PI / 2;
  gScene.add(floor);
  const ring = new THREE.Mesh(new THREE.RingGeometry(3.2, 3.3, 64), new THREE.MeshBasicMaterial({ color: '#ffd400' }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.002;
  gScene.add(ring);
  const back = new THREE.Mesh(new THREE.PlaneGeometry(30, 12), new THREE.MeshStandardMaterial({ color: '#191c24', roughness: 0.9 }));
  back.position.set(0, 6, -6);
  gScene.add(back);
  gScene.add(new THREE.HemisphereLight('#ffffff', '#30343f', 1.2));
  const key = new THREE.DirectionalLight('#ffffff', 2.4); key.position.set(3, 5, 4); gScene.add(key);
  const rim = new THREE.DirectionalLight('#ffd400', 1.4); rim.position.set(-4, 2, -3); gScene.add(rim);
  const rim2 = new THREE.DirectionalLight('#5ab0ff', 1.0); rim2.position.set(4, 1.5, -4); gScene.add(rim2);
}

// =============================================================== world
let world;
const audio = new Audio();
const input = new Input();
const net = new Net();
const radio = new Radio(audio);
radio.onTrack = (name, st) => { $('#rStation').textContent = st; $('#rTrack').textContent = '♪ ' + name; if (mode === 'play') feed(`📻 <b>${st}</b> · ${name}`); };
function radioMenu() { if (save.settings.radio !== 'off') { radio.setStation(save.settings.radio); radio.setVolume(0.38); } }
function radioGame() { if (save.settings.radio !== 'off' && save.settings.radioGame) { radio.setStation(save.settings.radio); radio.setVolume(0.2); } else radio.setStation('off'); }
function cycleRadio() {
  audio.unlock();
  const st = radio.cycle();
  save.settings.radio = st; persist();
  if (mode === 'play') radioGame(); else radioMenu();
  if (st === 'off') { $('#rStation').textContent = 'Rádio desligada'; $('#rTrack').textContent = 'Toque para ligar'; }
  toast(radio.label);
}
let envTex = null;
function regenEnv() {
  const s = new THREE.Scene();
  s.add(world.sky.clone());
  const rt = pmrem.fromScene(s, 0.02, 0.1, 2500);
  if (envTex) envTex.dispose();
  envTex = rt.texture;
  scene.environment = envTex;
}

// =============================================================== player
let phys, pVis, headlight = null;
const blobGeo = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
function addBlob(vis) {
  const b = new THREE.Mesh(blobGeo, world.matBlob);
  b.scale.set(1.0, 1, vis.m.L + 0.9);
  b.position.set(0, 0.03, vis.m.L / 2);
  b.renderOrder = 1;
  vis.root.add(b);
  vis.blob = b;
}
function makePlayer() {
  const spec = bikeById(save.bike);
  if (pVis) pVis.dispose();
  pVis = new BikeVisual(spec, colorsOf(spec.id), Q.shadows);
  addBlob(pVis);
  scene.add(pVis.root);
  if (!phys) phys = new BikePhysics(spec, upOf(spec.id), save.settings.easy);
  else phys.setSpec(spec, upOf(spec.id));
  phys.easy = save.settings.easy;
  setupHeadlight();
  $('#clutch').innerHTML = spec.electric ? 'BOOST' : spec.type === 'scooter' ? 'SEGURA<br/>FREIO' : 'EMBR.';
  phys.auto = save.settings.cambio === 'auto';
  document.body.classList.toggle('nogears', phys.auto || !phys.nG);
  // green "ponto" zone on the wheelie gauge
  const pt = (a) => `${(10 + 45 * Math.cos(a)).toFixed(1)} ${(55 - 45 * Math.sin(a)).toFixed(1)}`;
  $('#zone').setAttribute('d', `M${pt(spec.bp - 0.17)} A45 45 0 0 0 ${pt(spec.bp + 0.17)}`);
}
function setupHeadlight() {
  if (headlight) { headlight.removeFromParent(); headlight.target.removeFromParent(); headlight = null; }
  if (world.timeName !== 'noite' || !pVis) return;
  headlight = new THREE.SpotLight('#fff3d6', 120, 70, 0.55, 0.45, 1.2);
  headlight.position.set(0, 1.0, pVis.m.L + 0.2);
  headlight.target.position.set(0, 0, pVis.m.L + 14);
  pVis.inner.add(headlight, headlight.target);
}
const START = { x: 170, z: 240 + 3.6, yaw: Math.PI / 2 };
let safe = { ...START }, safeT = 0;
function spawn(p = START) {
  const off = net.active ? (Math.random() - 0.5) * 30 : 0;
  phys.reset(p.x + off, p.z, p.yaw);
  phys.y = world.groundHeight(phys.x, phys.z);
  if (pVis) { pVis.riderRoot.position.set(0, 0, 0); pVis.riderRoot.rotation.set(0, 0, 0); }
  camSnap = true;
}

// =============================================================== bots
const BOT_NAMES = ['Zé do Grau', 'Mc Corte', 'Vitinho', 'Jow', 'Neguinho RJ', 'Dudu 150', 'Lari Moto', 'Kaique'];
class Bot {
  constructor(i) {
    const R = rng(1000 + i * 77);
    this.spec = BIKES[(i * 3 + 1) % BIKES.length];
    this.colors = { paint: PAINTS[Math.floor(R() * PAINTS.length)], rim: RIMS[Math.floor(R() * RIMS.length)], helmet: HELMETS[Math.floor(R() * HELMETS.length)], jacket: JACKETS[Math.floor(R() * JACKETS.length)] };
    this.vis = new BikeVisual(this.spec, this.colors, false);
    addBlob(this.vis);
    this.name = BOT_NAMES[i % BOT_NAMES.length];
    this.tag = makeTag(this.name, '#9be15d');
    this.vis.root.add(this.tag);
    scene.add(this.vis.root);
    this.R = R;
    this.ni = 1 + Math.floor(R() * 6); this.nj = 1 + Math.floor(R() * 6);
    this.x = this.ni * C; this.z = this.nj * C;
    this.dir = [1, 0];
    this.pick();
    this.yaw = Math.atan2(this.dir[0], this.dir[1]);
    this.v = 0; this.vT = 11 + R() * 5;
    this.pitch = 0; this.wT = 2 + R() * 4; this.wOn = false; this.wheel = 0; this.lean = 0;
  }
  pick() {
    const opts = [[1, 0], [-1, 0], [0, 1], [0, -1]].filter(([a, b]) => {
      const i = this.ni + a, j = this.nj + b;
      return i >= 0 && i <= 7 && j >= 0 && j <= 7 && !(a === -this.dir[0] && b === -this.dir[1]);
    });
    this.dir = opts[Math.floor(this.R() * opts.length)];
    this.ni += this.dir[0]; this.nj += this.dir[1];
  }
  update(dt) {
    const fx = this.dir[0], fz = this.dir[1];
    const tx = this.ni * C - fz * 3.6, tz = this.nj * C + fx * 3.6; // keep right
    const dx = tx - this.x, dz = tz - this.z, d = Math.hypot(dx, dz);
    if (d < 4) this.pick();
    const ty = Math.atan2(dx, dz);
    let dy = ty - this.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
    const turn = clamp(dy, -1, 1) * Math.min(1, dt * 3);
    this.yaw += turn;
    this.lean = damp(this.lean, clamp(dy * 1.2, -0.5, 0.5), 5, dt);
    const slow = Math.abs(dy) > 0.4 || d < 14 ? 0.55 : 1;
    this.v = damp(this.v, this.vT * slow, 1.5, dt);
    this.x += Math.sin(this.yaw) * this.v * dt; this.z += Math.cos(this.yaw) * this.v * dt;
    this.wheel += this.v * dt;
    this.wT -= dt;
    if (this.wT < 0) { this.wOn = !this.wOn; this.wT = this.wOn ? 3 + this.R() * 6 : 2 + this.R() * 4; }
    const pT = this.wOn && slow === 1 ? this.spec.bp * (0.75 + 0.12 * Math.sin(world.t * 2.3 + this.ni)) : 0;
    this.pitch = damp(this.pitch, pT, this.wOn ? 2.2 : 4, dt);
    this.vis.apply({ x: this.x, y: 0, z: this.z, yaw: this.yaw, pitch: this.pitch, lean: this.lean, steer: -dy * 0.3, wheel: this.wheel });
  }
  dispose() { this.vis.dispose(); }
}
let bots = [];
function setBots(n) {
  while (bots.length > n) bots.pop().dispose();
  while (bots.length < n) bots.push(new Bot(bots.length));
}

// =============================================================== name tags
function makeTag(name, color = '#ffd400') {
  const cv = document.createElement('canvas'); cv.width = 256; cv.height = 64;
  const g = cv.getContext('2d');
  g.font = 'bold 30px system-ui, sans-serif';
  const w = Math.min(250, g.measureText(name).width + 28);
  g.fillStyle = 'rgba(10,12,18,0.7)';
  g.beginPath(); g.roundRect((256 - w) / 2, 8, w, 46, 14); g.fill();
  g.fillStyle = color; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(name, 128, 32);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthWrite: false, fog: false }));
  s.scale.set(2.4, 0.6, 1);
  s.position.set(0, 2.45, 0.5);
  s.renderOrder = 5;
  return s;
}

// =============================================================== remote players
const remotes = new Map();
function addRemote(p) {
  if (remotes.has(p.id)) removeRemote(p.id);
  const spec = bikeById(p.bike);
  const vis = new BikeVisual(spec, p.colors || {}, false);
  addBlob(vis);
  const tag = makeTag(p.name, '#ffd400');
  vis.root.add(tag);
  vis.root.visible = false;
  scene.add(vis.root);
  remotes.set(p.id, { p, vis, cur: null, tgt: null, crashT: 0, bike: p.bike });
  refreshPlayers();
}
function removeRemote(id) {
  const r = remotes.get(id); if (!r) return;
  r.vis.dispose(); remotes.delete(id); refreshPlayers();
}
function updateRemotes(dt) {
  for (const r of remotes.values()) {
    const s = r.tgt; if (!s) continue;
    if (!r.cur) { r.cur = s.slice(); r.vis.root.visible = true; }
    const c = r.cur;
    // extrapolate target with speed, then smooth
    s[0] += Math.sin(s[3]) * s[8] * dt; s[2] += Math.cos(s[3]) * s[8] * dt; s[7] += s[8] * dt;
    const k = 1 - Math.exp(-12 * dt);
    if (Math.hypot(s[0] - c[0], s[2] - c[2]) > 25) { for (let i = 0; i < c.length; i++) c[i] = s[i]; }
    for (const i of [0, 1, 2, 4, 5, 6, 7]) c[i] += (s[i] - c[i]) * k;
    let dy = s[3] - c[3]; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); c[3] += dy * k;
    r.vis.apply({ x: c[0], y: c[1], z: c[2], yaw: c[3], pitch: c[4], lean: c[5], steer: c[6], wheel: c[7], trick: s[10] || 0, tb: (r.tb = clamp((r.tb || 0) + (s[10] ? dt : -dt) / 0.35, 0, 1)) });
    if (s[11] && Math.random() < 0.6) sparks(c[0], c[1], c[2], c[3], 2);
    if (s[9]) { r.crashT += dt; riderFall(r.vis, r.crashT, 8); } else if (r.crashT) { r.crashT = 0; r.vis.riderRoot.position.set(0, 0, 0); r.vis.riderRoot.rotation.set(0, 0, 0); }
  }
}
function riderFall(vis, t, v) {
  vis.riderRoot.position.set(0, Math.max(-0.75, 2.0 * t - 6 * t * t), Math.min(v * 0.3, v * t * 0.6));
  vis.riderRoot.rotation.x = Math.min(1.3, t * 3);
}

// =============================================================== net events
net.on('status', (t) => { $('#onStatus').textContent = t; });
net.on('connected', ({ room, host }) => {
  $('#onStatus').textContent = `Conectado na sala ${room}${host ? ' (você é o dono)' : ''}`;
  feed(`🌐 Online na sala <b>${room}</b>`);
  document.body.classList.add('online');
  stats.online = true; checkMissions();
  refreshPlayers();
});
net.on('join', (p) => { addRemote(p); feed(`➕ <b>${esc(p.name)}</b> entrou`); });
net.on('leave', (p) => { removeRemote(p.id); feed(`➖ <b>${esc(p.name)}</b> saiu`); });
net.on('state', (id, s) => { const r = remotes.get(id); if (r) r.tgt = s.slice(); });
net.on('prof', (p) => { const r = remotes.get(p.id); if (r) { r.p = p; addRemote(p); } });
net.on('chat', (m) => { feed(`💬 <b>${esc(m.name)}:</b> ${esc(m.msg)}`); });
net.on('ev', (m) => { feed(`🔥 <b>${esc(m.name)}</b> ${esc(m.msg)}`); });
net.on('lost', () => { leaveOnline(); toast('Conexão perdida'); });
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function profile() { return { name: save.name, bike: save.bike, colors: colorsOf(save.bike), best: save.best }; }
function leaveOnline() {
  net.close();
  for (const id of [...remotes.keys()]) removeRemote(id);
  document.body.classList.remove('online');
  refreshPlayers();
}
function refreshPlayers() {
  const el = $('#players');
  if (!net.active) { el.innerHTML = ''; return; }
  const list = [`<div class="me">${esc(save.name)} <i>${fmt(save.best)}</i></div>`];
  for (const r of remotes.values()) list.push(`<div>${esc(r.p.name)} <i>${fmt(r.p.best || 0)}</i></div>`);
  el.innerHTML = `<div class="room">Sala ${esc(net.room || '')} · ${remotes.size + 1} online</div>` + list.join('');
}

// =============================================================== score / missions
const stats = { grau: 0, corte: 0, ponto: 0, air: 0, flips: 0, wland: false, speed: 0, combo: 0, online: false };
const MISSIONS = [
  { id: 'g20', t: 'Primeiro grau: 20 m', k: 'grau', v: 20, r: 500 },
  { id: 'g100', t: 'Grau de 100 m', k: 'grau', v: 100, r: 1500 },
  { id: 'g300', t: 'Grau de 300 m', k: 'grau', v: 300, r: 4000 },
  { id: 'g1000', t: 'Grau de 1 km', k: 'grau', v: 1000, r: 15000 },
  { id: 'p5', t: 'Segurar NO PONTO por 5 s', k: 'ponto', v: 5, r: 2500 },
  { id: 'p15', t: 'Segurar NO PONTO por 15 s', k: 'ponto', v: 15, r: 6000 },
  { id: 'c10', t: 'Corte (stoppie) de 10 m', k: 'corte', v: 10, r: 1500 },
  { id: 'c40', t: 'Corte de 40 m', k: 'corte', v: 40, r: 5000 },
  { id: 'a2', t: 'Ficar 2 s no ar', k: 'air', v: 2, r: 2000 },
  { id: 'flip', t: 'Mortal (giro de 360°)', k: 'flips', v: 1, r: 8000 },
  { id: 'wl', t: 'Aterrissar empinando', k: 'wland', v: true, r: 3000 },
  { id: 'v120', t: 'Passar de 120 km/h', k: 'speed', v: 120, r: 1000 },
  { id: 'k5', t: 'Combo de 5.000 pts', k: 'combo', v: 5000, r: 3000 },
  { id: 'k25', t: 'Combo de 25.000 pts', k: 'combo', v: 25000, r: 10000 },
  { id: 'on', t: 'Entrar numa sala online', k: 'online', v: true, r: 1000 },
  { id: 'sm', t: 'Grau sem mão por 3 s', k: 't1', v: 3, r: 3000 },
  { id: 'sup', t: 'Superman por 2 s', k: 't2', v: 2, r: 5000 },
  { id: 'surf', t: 'Surf no banco por 2 s', k: 't3', v: 2, r: 6000 },
  { id: 'rasp', t: 'Raspão de 15 m (faísca!)', k: 'raspao', v: 15, r: 4000 },
];
function checkMissions() {
  for (const m of MISSIONS) {
    if (save.missions[m.id]) continue;
    const val = stats[m.k];
    if (m.v === true ? val === true : val >= m.v) {
      save.missions[m.id] = true;
      save.money += m.r;
      toast(`🏆 Desafio: ${m.t}  +R$ ${fmt(m.r)}`);
      audio.chime(3);
      persist();
    }
  }
}

const combo = { on: false, pts: 0, mult: 1, type: '', dist: 0, grace: 0, segDist: 0, pontoT: 0, ponto: false, airPts: 0 };
let score = 0;
function scoreUpdate(dt) {
  const p = phys;
  const kmh = p.v * 3.6;
  if (kmh > stats.speed) stats.speed = kmh;
  if (p.crashed) { if (combo.on) loseCombo(); return; }
  let active = false;
  const TR = ['', 'SEM MÃO', 'SUPERMAN', 'SURF'], TM = [1, 2, 3, 3];
  if (p.grounded && p.pitch > 0.12 && p.v > 2) {
    active = true;
    const label = p.scraping ? 'RASPÃO' : p.trick && p.trickBlend > 0.6 ? TR[p.trick] : 'GRAU';
    if (combo.type !== label) { if (label === 'GRAU' || combo.type === '' || combo.type === 'CORTE' || combo.type === 'NO AR') combo.segDist = 0; combo.type = label; }
    const d = p.v * dt;
    combo.dist += d; combo.segDist += d;
    combo.ponto = Math.abs(p.pitch - p.spec.bp) < 0.12;
    if (combo.ponto) { combo.pontoT += dt; stats.ponto = Math.max(stats.ponto, combo.pontoT); } else combo.pontoT = 0;
    combo.mult = Math.min(5, 1 + Math.floor(combo.dist / 50) * 0.5);
    const tm = (p.trickBlend > 0.6 ? TM[p.trick] : 1) * (p.scraping ? 2.5 : 1);
    combo.pts += d * 10 * (combo.ponto ? 2 : 1) * combo.mult * tm;
    stats.grau = Math.max(stats.grau, combo.segDist);
    if (p.trickBlend > 0.6 && p.trick) { stats['t' + p.trick] = (stats['t' + p.trick] || 0) + dt; }
    if (p.scraping) stats.raspao = (stats.raspao || 0) + d;
  } else if (p.grounded && p.pitch < -0.12 && p.v > 1.5) {
    active = true;
    if (combo.type !== 'CORTE') { combo.segDist = 0; combo.type = 'CORTE'; }
    const d = p.v * dt;
    combo.dist += d; combo.segDist += d;
    combo.pts += d * 25 * combo.mult;
    combo.ponto = false;
    stats.corte = Math.max(stats.corte, combo.segDist);
  } else if (!p.grounded && p.airT > 0.25) {
    active = true;
    combo.type = 'NO AR';
    combo.pts += dt * 160 * combo.mult;
    combo.ponto = false;
    stats.air = Math.max(stats.air, p.airT);
  }
  if (active) { combo.on = true; combo.grace = 0.7; }
  else if (combo.on) {
    combo.ponto = false; combo.pontoT = 0;
    combo.grace -= dt;
    if (combo.grace <= 0) bankCombo();
  }
  stats.combo = Math.max(stats.combo, combo.pts);
}
function bankCombo() {
  const pts = Math.round(combo.pts);
  if (pts > 0) {
    score += pts;
    save.total += pts;
    const money = Math.round(pts / 10);
    save.money += money;
    if (pts > save.best) { save.best = pts; if (net.active) refreshPlayers(); }
    popup(`+${fmt(pts)}`, `R$ ${fmt(money)}`);
    audio.chime(pts > 5000 ? 3 : pts > 1000 ? 2 : 1);
    if (net.active && pts >= 2000) net.send('ev', combo.dist > 30 ? `fez combo de ${fmt(pts)} pts (${Math.round(combo.dist)} m)!` : `fez combo de ${fmt(pts)} pts!`);
    checkMissions();
    persist();
  }
  Object.assign(combo, { on: false, pts: 0, mult: 1, type: '', dist: 0, segDist: 0, pontoT: 0, ponto: false });
}
function loseCombo() {
  if (combo.pts > 50) popup('PERDEU!', `-${fmt(combo.pts)}`, true);
  Object.assign(combo, { on: false, pts: 0, mult: 1, type: '', dist: 0, segDist: 0, pontoT: 0, ponto: false });
}
function handleEvents() {
  for (const e of phys.events) {
    if (e.type === 'crash') {
      window.__lastCrash = e.reason;
      audio.crash();
      bigMsg(e.reason, true);
      if (navigator.vibrate) navigator.vibrate(120);
      smoke(phys.x, phys.y + 0.3, phys.z, 14, 2);
    } else if (e.type === 'pop') { audio.pop(); }
    else if (e.type === 'shift') { audio.shift(); }
    else if (e.type === 'deny') { bigMsg('Giro alto demais!', true); }
    else if (e.type === 'scrape') { audio.scrape(); }
    else if (e.type === 'trick') { bigMsg(['', 'SEM MÃO!', 'SUPERMAN!', 'SURF NO BANCO!'][e.t]); }
    else if (e.type === 'slam') { audio.thump(); }
    else if (e.type === 'land') {
      audio.thump();
      smoke(phys.x, phys.y + 0.1, phys.z, 8, 1.5);
      if (e.flips > 0) {
        stats.flips = Math.max(stats.flips, e.flips);
        combo.pts += 4000 * e.flips; combo.on = true; combo.grace = 0.7;
        bigMsg(e.flips > 1 ? `MORTAL x${e.flips}!` : e.back ? 'MORTAL PRA TRÁS!' : 'MORTAL PRA FRENTE!');
        if (net.active) net.send('ev', `deu um mortal${e.flips > 1 ? ' x' + e.flips : ''}!`);
      }
      if (e.wheelie) { stats.wland = true; combo.pts += 1500; combo.on = true; combo.grace = 0.7; bigMsg('ATERRISSOU EMPINANDO!'); }
      else if (e.air > 1.2) bigMsg('BOA!');
      checkMissions();
    }
  }
  phys.events.length = 0;
}

// =============================================================== particles (smoke / dust)
const PN = 90;
const pGeo = new THREE.BufferGeometry();
const pPos = new Float32Array(PN * 3), pData = [];
pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
for (let i = 0; i < PN; i++) { pData.push({ life: 0, vx: 0, vy: 0, vz: 0 }); pPos[i * 3 + 1] = -100; }
let pIdx = 0;
const smokeTex = (() => {
  const cv = document.createElement('canvas'); cv.width = cv.height = 64;
  const g = cv.getContext('2d'); const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(235,235,235,0.75)'); gr.addColorStop(1, 'rgba(235,235,235,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
const points = new THREE.Points(pGeo, new THREE.PointsMaterial({ map: smokeTex, size: 0.9, transparent: true, depthWrite: false, opacity: 0.55 }));
points.frustumCulled = false;
scene.add(points);
function smoke(x, y, z, n = 1, spread = 0.6) {
  for (let k = 0; k < n; k++) {
    const i = pIdx++ % PN, d = pData[i];
    d.life = 1.2 + Math.random() * 0.6;
    d.vx = (Math.random() - 0.5) * spread; d.vy = 0.6 + Math.random() * 0.8; d.vz = (Math.random() - 0.5) * spread;
    pPos[i * 3] = x; pPos[i * 3 + 1] = y; pPos[i * 3 + 2] = z;
  }
}
// sparks (rear fender scraping the asphalt)
const SN = 70, sPos = new Float32Array(SN * 3), sData = [];
const sGeo = new THREE.BufferGeometry();
sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
for (let i = 0; i < SN; i++) { sData.push({ life: 0, vx: 0, vy: 0, vz: 0 }); sPos[i * 3 + 1] = -100; }
const sparkTex = (() => {
  const cv = document.createElement('canvas'); cv.width = cv.height = 32;
  const g = cv.getContext('2d'); const gr = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  gr.addColorStop(0, 'rgba(255,255,220,1)'); gr.addColorStop(0.3, 'rgba(255,190,60,0.9)'); gr.addColorStop(1, 'rgba(255,120,0,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 32, 32);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
const sparkPts = new THREE.Points(sGeo, new THREE.PointsMaterial({ map: sparkTex, size: 0.22, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
sparkPts.frustumCulled = false;
scene.add(sparkPts);
let sIdx = 0;
function sparks(x, y, z, yaw, n = 3) {
  const fx = Math.sin(yaw), fz = Math.cos(yaw);
  for (let k = 0; k < n; k++) {
    const i = sIdx++ % SN, d = sData[i];
    d.life = 0.25 + Math.random() * 0.35;
    const sp = 3 + Math.random() * 5;
    d.vx = -fx * sp + (Math.random() - 0.5) * 2.5; d.vz = -fz * sp + (Math.random() - 0.5) * 2.5; d.vy = 1 + Math.random() * 2.5;
    sPos[i * 3] = x - fx * 0.3; sPos[i * 3 + 1] = y + 0.05; sPos[i * 3 + 2] = z - fz * 0.3;
  }
}
function updateParticles(dt) {
  for (let i = 0; i < PN; i++) {
    const d = pData[i];
    if (d.life <= 0) continue;
    d.life -= dt;
    if (d.life <= 0) { pPos[i * 3 + 1] = -100; continue; }
    pPos[i * 3] += d.vx * dt; pPos[i * 3 + 1] += d.vy * dt; pPos[i * 3 + 2] += d.vz * dt;
  }
  pGeo.attributes.position.needsUpdate = true;
  for (let i = 0; i < SN; i++) {
    const d = sData[i];
    if (d.life <= 0) continue;
    d.life -= dt;
    if (d.life <= 0) { sPos[i * 3 + 1] = -100; continue; }
    d.vy -= 9.8 * dt;
    sPos[i * 3] += d.vx * dt; sPos[i * 3 + 1] = Math.max(0.02, sPos[i * 3 + 1] + d.vy * dt); sPos[i * 3 + 2] += d.vz * dt;
  }
  sGeo.attributes.position.needsUpdate = true;
}

// =============================================================== camera
const CAMS = [{ d: 4.3, h: 1.65, look: 1.0, fov: 60 }, { d: 6.8, h: 2.6, look: 1.2, fov: 58 }, { side: true, fov: 50 }];
let camSnap = true;
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
function updateCamera(dt) {
  const c = CAMS[save.settings.cam % CAMS.length];
  const fx = Math.sin(phys.yaw), fz = Math.cos(phys.yaw);
  const px = phys.x + fx * 0.7, pz = phys.z + fz * 0.7, py = phys.y;
  let dx, dy, dz, lx, ly, lz;
  if (c.side) {
    dx = px - fz * 5.2 - fx * 0.5; dz = pz + fx * 5.2 - fz * 0.5; dy = py + 1.3;
    lx = px + fx * 0.4; ly = py + 0.9; lz = pz + fz * 0.4;
  } else {
    const wl = phys.pitch > 0 ? phys.pitch * 0.35 : 0;
    dx = px - fx * c.d; dz = pz - fz * c.d; dy = py + c.h - wl + (phys.grounded ? 0 : 0.6);
    lx = px + fx * 1.5; ly = py + c.look; lz = pz + fz * 1.5;
  }
  if (phys.crashed) { dy = py + 2.5; }
  const gH = world.baseHeight(dx, dz) + 0.4;
  if (dy < gH) dy = gH;
  if (camSnap) { camPos.set(dx, dy, dz); camLook.set(lx, ly, lz); camSnap = false; }
  else {
    camPos.x = damp(camPos.x, dx, 7, dt); camPos.z = damp(camPos.z, dz, 7, dt); camPos.y = damp(camPos.y, dy, 5, dt);
    camLook.x = damp(camLook.x, lx, 12, dt); camLook.z = damp(camLook.z, lz, 12, dt); camLook.y = damp(camLook.y, ly, 8, dt);
  }
  camera.position.copy(camPos);
  camera.lookAt(camLook);
  const fov = c.fov + Math.min(14, phys.v * 0.3);
  if (Math.abs(camera.fov - fov) > 0.05) { camera.fov = damp(camera.fov, fov, 3, dt); camera.updateProjectionMatrix(); }
}
let menuAng = 0;
function menuCamera(dt) {
  menuAng += dt * 0.05;
  const cx = 280, cz = 280, r = 37;
  camera.position.set(cx + Math.cos(menuAng) * r, 13 + Math.sin(menuAng * 2) * 3, cz + Math.sin(menuAng) * r);
  camera.lookAt(cx + Math.cos(menuAng + 2.2) * 12, 1, cz + Math.sin(menuAng + 2.2) * 12);
  if (camera.fov !== 55) { camera.fov = 55; camera.updateProjectionMatrix(); }
}

// =============================================================== HUD
const hud = {
  money: $('#hMoney'), score: $('#hScore'), speed: $('#hSpeed'), gear: $('#hGear'), rpm: $('#hRpm'),
  combo: $('#combo'), ctype: $('#combo .ctype'), cdist: $('#combo .cdist'), cpts: $('#combo .cpts'), cponto: $('#combo .cponto'),
  needle: $('#needle'), zone: $('#zone'), mm: $('#minimap'),
};
const last = {};
const setT = (el, key, v) => { if (last[key] !== v) { last[key] = v; el.textContent = v; } };
let hudT = 0;
function updateHUD(dt) {
  hudT += dt;
  // needle every frame (cheap attribute)
  const a = clamp(phys.pitch, -0.6, 1.75);
  hud.needle.setAttribute('transform', `rotate(${(-a * 180) / Math.PI} 10 55)`);
  if (hudT < 0.08) return;
  hudT = 0;
  setT(hud.speed, 'sp', String(Math.round(phys.v * 3.6)));
  setT(hud.gear, 'g', phys.nG ? String(phys.gear) : 'CVT');
  document.body.classList.toggle('wheelie', !phys.crashed && ((phys.grounded && phys.pitch > 0.22) || (!phys.grounded && phys.airT > 0.15) || phys.trick > 0));
  hud.rpm.style.transform = `scaleX(${clamp(phys.rpm / (phys.red || 10000), 0, 1).toFixed(3)})`;
  hud.rpm.parentNode.classList.toggle('red', phys.rpm > (phys.red || 10000) * 0.9);
  setT(hud.money, 'm', fmt(save.money));
  setT(hud.score, 's', fmt(score));
  if (combo.on) {
    hud.combo.classList.add('show');
    setT(hud.ctype, 'ct', combo.type + (combo.mult > 1 ? `  x${combo.mult.toFixed(1)}` : ''));
    setT(hud.cdist, 'cd', combo.type === 'NO AR' ? `${phys.airT.toFixed(1)} s` : `${Math.round(combo.segDist)} m`);
    setT(hud.cpts, 'cp', fmt(combo.pts));
    hud.cponto.classList.toggle('show', combo.ponto);
  } else hud.combo.classList.remove('show');
  drawMinimap();
  if (save.settings.fps) setT($('#fps'), 'fps', `${Math.round(fpsAvg)} fps · ${qName} · res ${Math.round(renderer.getPixelRatio() * 100)}% · ${renderer.info.render.calls} dc · ${GPU.slice(0, 40)}`);
}
function drawMinimap() {
  const cv = hud.mm, g = cv.getContext('2d'), S = cv.width;
  const mm = world.mm, k = (mm.S / mm.ext);
  const zoom = 2.2;
  g.save();
  g.clearRect(0, 0, S, S);
  g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 2, 0, Math.PI * 2); g.clip();
  g.translate(S / 2, S / 2);
  g.rotate(Math.PI + phys.yaw);
  g.scale(zoom, zoom);
  g.translate(-(phys.x - mm.ox) * k, -(phys.z - mm.oz) * k);
  g.drawImage(world.mmCanvas, 0, 0);
  g.fillStyle = '#ffd400';
  for (const r of remotes.values()) if (r.cur) { g.beginPath(); g.arc((r.cur[0] - mm.ox) * k, (r.cur[2] - mm.oz) * k, 2.2, 0, 7); g.fill(); }
  g.fillStyle = '#9be15d';
  for (const b of bots) { g.beginPath(); g.arc((b.x - mm.ox) * k, (b.z - mm.oz) * k, 1.6, 0, 7); g.fill(); }
  g.restore();
  g.fillStyle = '#fff';
  g.beginPath(); g.moveTo(S / 2, S / 2 - 7); g.lineTo(S / 2 + 5, S / 2 + 5); g.lineTo(S / 2 - 5, S / 2 + 5); g.fill();
  g.strokeStyle = 'rgba(255,255,255,0.5)'; g.lineWidth = 2; g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 2, 0, 7); g.stroke();
}
let popT = null;
function popup(a, b, bad = false) {
  const el = $('#popup');
  el.innerHTML = `<b>${a}</b><span>${b}</span>`;
  el.className = 'show' + (bad ? ' bad' : '');
  clearTimeout(popT); popT = setTimeout(() => (el.className = ''), 1600);
}
let bigT = null;
function bigMsg(t, bad = false) {
  const el = $('#bigmsg');
  el.textContent = t; el.className = 'show' + (bad ? ' bad' : '');
  clearTimeout(bigT); bigT = setTimeout(() => (el.className = ''), 1700);
}
let toastT = null;
function toast(t) {
  const el = $('#toast'); el.textContent = t; el.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('show'), 2800);
}
function feed(html) {
  const el = $('#feed');
  const d = document.createElement('div'); d.innerHTML = html; el.appendChild(d);
  while (el.children.length > 5) el.firstChild.remove();
  setTimeout(() => d.classList.add('fade'), 7000);
  setTimeout(() => d.remove(), 8000);
}

// =============================================================== state machine / screens
let mode = 'loading';
function show(id) {
  $$('.screen').forEach((s) => s.classList.toggle('active', s.id === id));
}
function go(where) {
  audio.unlock();
  if (where !== 'play') radioMenu();
  if (where === 'play') return startPlay();
  document.body.classList.remove('playing');
  if (where === 'garage') return openGarage();
  if (where === 'menu') { if (net.active && mode === 'paused') leaveOnline(); mode = 'menu'; $('#hud').classList.add('hidden'); show('menu'); refreshMenu(); audio.engine(0, 0, false, false); return; }
  if (where === 'missions') { renderMissions(); show('missions'); return; }
  if (where === 'settings') { renderSettings(); show('settings'); return; }
  if (where === 'online') { show('online'); return; }
}
function refreshMenu() {
  $$('.mMoney').forEach((e) => (e.textContent = fmt(save.money)));
  $('#pname').value = save.name;
  const b = bikeById(save.bike);
  $('#mBike').textContent = b.name;
}
function goFull() {
  try {
    if (!document.fullscreenElement && document.documentElement.requestFullscreen && matchMedia('(pointer: coarse)').matches) {
      document.documentElement.requestFullscreen({ navigationUI: 'hide' }).then(() => screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape').catch(() => {})).catch(() => {});
    }
  } catch {}
}
function startPlay(fromPause = false) {
  goFull();
  show(null);
  $('#hud').classList.remove('hidden');
  if (!fromPause) {
    makePlayer();
    spawn(net.active ? START : safe.x ? safe : START);
    score = 0;
  }
  mode = 'play';
  document.body.classList.add('playing');
  radioGame();
}
function pause() {
  if (mode !== 'play') return;
  mode = 'paused';
  document.body.classList.remove('playing');
  radioMenu();
  show('pause');
  $('#pauseOnline').textContent = net.active ? 'SAIR DA SALA' : '';
  $('#pauseOnline').style.display = net.active ? '' : 'none';
  audio.engine(0, 0, false, false);
}

// ---- garage
let gIdx = 0, gVis = null, gAng = 0.6, gTab = 'cor', gDrag = null;
function openGarage() {
  mode = 'garage';
  $('#hud').classList.add('hidden');
  gIdx = BIKES.findIndex((b) => b.id === save.bike);
  show('garage');
  renderGarage();
}
function renderGarage() {
  const b = BIKES[gIdx];
  const owned = save.owned.includes(b.id);
  if (gVis) gVis.dispose();
  gVis = new BikeVisual(b, colorsOf(b.id), false);
  gScene.add(gVis.root);
  gVis.apply({ x: 0, y: 0, z: -gVis.m.L / 2, yaw: 0, pitch: 0, lean: 0, steer: 0.25, wheel: 0 });
  $('#gName').textContent = b.name;
  $('#gCc').textContent = `${b.cc} · ${b.top} km/h` + (FREE.includes(b.id) ? ' · NOVA' : '');
  $('#gDesc').textContent = b.desc;
  $('#gIdx').textContent = `${gIdx + 1}/${BIKES.length}`;
  const u = upOf(b.id);
  const bar = (v) => `<i style="width:${Math.round(clamp(v, 0.05, 1) * 100)}%"></i>`;
  $('#gStats').innerHTML = `
    <label>Velocidade</label><div class="bar">${bar((b.top * (1 + 0.07 * u.motor)) / 190)}</div>
    <label>Aceleração</label><div class="bar">${bar((b.accel * (1 + 0.12 * u.motor)) / 9)}</div>
    <label>Facilidade de grau</label><div class="bar">${bar((b.lift * (1 + 0.15 * u.grau) * b.accel) / 9.5)}</div>
    <label>Freio</label><div class="bar">${bar((b.brake * (1 + 0.1 * u.freio)) / 1.5)}</div>`;
  const act = $('#gAction');
  if (owned) { act.textContent = save.bike === b.id ? '✔ EM USO' : 'USAR ESSA'; act.disabled = save.bike === b.id; act.classList.remove('buy'); }
  else { act.textContent = `COMPRAR R$ ${fmt(b.price)}`; act.disabled = save.money < b.price; act.classList.add('buy'); }
  $$('.mMoney').forEach((e) => (e.textContent = fmt(save.money)));
  const c = colorsOf(b.id);
  const sw = (list, cur, kind) => list.map((x) => `<button class="sw${x === cur ? ' sel' : ''}" style="background:${x}" data-kind="${kind}" data-c="${x}"></button>`).join('');
  $('#tabCor').innerHTML = `
    <label>Pintura</label><div class="sws">${sw(PAINTS, c.paint, 'paint')}</div>
    <label>Rodas</label><div class="sws">${sw(RIMS, c.rim, 'rim')}</div>
    <label>Capacete</label><div class="sws">${sw(HELMETS, c.helmet, 'helmet')}</div>
    <label>Jaqueta</label><div class="sws">${sw(JACKETS, c.jacket, 'jacket')}</div>`;
  const UPS = [['motor', 'Motor (potência)', 2500], ['grau', 'Relação (grau)', 1800], ['freio', 'Freios', 1200]];
  $('#tabUp').innerHTML = owned ? UPS.map(([k, t, base]) => {
    const lv = u[k] || 0, cost = base * (lv + 1);
    return `<div class="up"><div><b>${t}</b><small>${'■'.repeat(lv)}${'□'.repeat(3 - lv)}</small></div>${lv >= 3 ? '<span class="max">MÁX</span>' : `<button data-up="${k}" data-cost="${cost}" ${save.money < cost ? 'disabled' : ''}>R$ ${fmt(cost)}</button>`}</div>`;
  }).join('') : '<p class="muted">Compre a moto para liberar upgrades.</p>';
  $('#tabCor').style.display = gTab === 'cor' ? '' : 'none';
  $('#tabUp').style.display = gTab === 'up' ? '' : 'none';
  $$('.tabs button').forEach((t) => t.classList.toggle('sel', t.dataset.tab === gTab));
}

// ---- missions & settings
function renderMissions() {
  $('#mList').innerHTML = MISSIONS.map((m) => `<div class="mis${save.missions[m.id] ? ' done' : ''}"><span>${save.missions[m.id] ? '✔' : '○'} ${m.t}</span><b>R$ ${fmt(m.r)}</b></div>`).join('') +
    `<div class="mis rec"><span>Recorde de combo</span><b>${fmt(save.best)} pts</b></div>`;
}
const SETTINGS = [
  ['quality', 'Gráfico', [['auto', 'Auto'], ['baixo', 'Leve'], ['medio', 'Médio'], ['alto', 'Alto']]],
  ['time', 'Horário', [['dia', 'Dia'], ['tarde', 'Pôr do sol'], ['noite', 'Noite']]],
  ['steer', 'Direção', [['touch', 'Botões'], ['tilt', 'Inclinar celular']]],
  ['easy', 'Assistência de grau', [[false, 'Desligada (real)'], [true, 'Leve']]],
  ['cambio', 'Câmbio', [['manual', 'Manual ▲▼'], ['auto', 'Automático']]],
  ['sound', 'Som', [[true, 'Ligado'], [false, 'Desligado']]],
  ['radio', 'Rádio', [['funk', 'Baile Funk'], ['pagodao', 'Pagodão Baiano'], ['off', 'Desligada']]],
  ['radioGame', 'Rádio na partida', [[true, 'Tocar'], [false, 'Só nos menus']]],
  ['fps', 'Mostrar FPS', [[false, 'Não'], [true, 'Sim']]],
];
function renderSettings() {
  $('#sList').innerHTML = SETTINGS.map(([k, t, opts]) => `<div class="set"><label>${t}</label><div class="opts">${opts.map(([v, l]) => `<button data-set="${k}" data-v='${JSON.stringify(v)}' class="${save.settings[k] === v ? 'sel' : ''}">${l}</button>`).join('')}</div></div>`).join('');
}
function applySettings(first = false) {
  const s = save.settings;
  const nq = s.quality === 'auto' ? (first ? autoQuality() : qName) : s.quality;
  qName = nq; Q = QUAL[qName];
  renderer.shadowMap.enabled = Q.shadows;
  world.setShadows(Q.shadows, Q.shadowSize || 1024);
  world.setFog(Q.fog * 0.25, Q.fog);
  if (world.waterU) world.waterU.fogFar.value = Q.fog * 1.6;
  world.carMesh.count = world.carLights.count = world.carTail.count = Q.cars;
  if (world.timeName !== s.time || first) { world.setTime(s.time); renderer.toneMappingExposure = world.T.exposure; regenEnv(); }
  setBots(Q.bots);
  input.tilt = s.steer === 'tilt';
  if (s.steer === 'tilt' && window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission().catch(() => {});
  }
  document.body.classList.toggle('tilt', input.tilt);
  audio.setEnabled(s.sound);
  if (!first && audio.ctx) { if (mode === 'play') radioGame(); else radioMenu(); }
  if (phys) { phys.easy = s.easy; phys.auto = s.cambio === 'auto'; document.body.classList.toggle('nogears', phys.auto || !phys.nG); }
  $('#fps').style.display = s.fps ? '' : 'none';
  if (pVis && (first || pVis.root.children)) { pVis.root.traverse((o) => { if (o.isMesh && o !== pVis.blob) o.castShadow = Q.shadows; }); setupHeadlight(); }
  resize();
}

// =============================================================== UI wiring
document.addEventListener('pointerdown', () => { if (!audio.ctx) { audio.unlock(); if (mode === 'menu') radioMenu(); } }, { once: false });
document.addEventListener('click', (e) => {
  const t = e.target.closest('button');
  if (!t) return;
  audio.unlock();
  if (t.dataset.go) { go(t.dataset.go); return; }
  if (t.dataset.set) {
    save.settings[t.dataset.set] = JSON.parse(t.dataset.v);
    if (t.dataset.set === 'quality') autoDone = save.settings.quality !== 'auto';
    persist(); applySettings(); renderSettings(); return;
  }
  if (t.dataset.kind) {
    const b = BIKES[gIdx], k = t.dataset.kind, c = t.dataset.c;
    if (k === 'helmet' || k === 'jacket') save[k] = c;
    else { save.colors[b.id] = { ...(save.colors[b.id] || {}), [k]: c }; }
    persist();
    gVis.setColors(colorsOf(b.id));
    $$(`.sw[data-kind="${k}"]`).forEach((s) => s.classList.toggle('sel', s.dataset.c === c));
    if (net.active) net.updateProfile(profile());
    return;
  }
  if (t.dataset.up) {
    const b = BIKES[gIdx], cost = +t.dataset.cost;
    if (save.money < cost) return;
    save.money -= cost;
    const u = { ...upOf(b.id) }; u[t.dataset.up] = (u[t.dataset.up] || 0) + 1; save.up[b.id] = u;
    persist(); audio.chime(2); toast('Upgrade instalado!'); renderGarage();
    return;
  }
  if (t.dataset.tab) { gTab = t.dataset.tab; renderGarage(); return; }
  if (t.dataset.chat) { net.send('chat', t.dataset.chat); feed(`💬 <b>${esc(save.name)}:</b> ${esc(t.dataset.chat)}`); $('#chatbox').classList.add('hidden'); return; }
});
$('#gPrev').onclick = () => { gIdx = (gIdx + BIKES.length - 1) % BIKES.length; renderGarage(); };
$('#gNext').onclick = () => { gIdx = (gIdx + 1) % BIKES.length; renderGarage(); };
$('#gAction').onclick = () => {
  const b = BIKES[gIdx];
  if (!save.owned.includes(b.id)) {
    if (save.money < b.price) return;
    save.money -= b.price; save.owned.push(b.id);
    toast(`Comprou ${b.name}!`); audio.chime(3);
  }
  save.bike = b.id;
  persist();
  if (net.active) net.updateProfile(profile());
  renderGarage();
};
$('#gPlay').onclick = () => go('play');
$('#pname').addEventListener('change', (e) => { save.name = (e.target.value || 'Piloto').trim().slice(0, 16) || 'Piloto'; persist(); });
$('#bPause').onclick = pause;
$('#bRadio').onclick = cycleRadio;
$('#rCycle').onclick = cycleRadio;
$('#bCam').onclick = () => { save.settings.cam = (save.settings.cam + 1) % CAMS.length; camSnap = true; persist(); };
$('#bChat').onclick = () => $('#chatbox').classList.toggle('hidden');
$('#bReset').onclick = () => { if (mode === 'play') respawn(); };
$('#chatSend').onclick = () => {
  const v = $('#chatIn').value.trim(); if (!v) return;
  net.send('chat', v); feed(`💬 <b>${esc(save.name)}:</b> ${esc(v)}`); $('#chatIn').value = ''; $('#chatbox').classList.add('hidden');
};
$('#chatIn').addEventListener('keydown', (e) => { if (e.key === 'Enter') $('#chatSend').click(); });
$('#pResume').onclick = () => startPlay(true);
$('#pRespawn').onclick = () => { startPlay(true); respawn(); };
$('#pauseOnline').onclick = () => { leaveOnline(); go('menu'); };
$('#onPublic').onclick = async () => { await doOnline(() => net.joinPublic(profile())); };
$('#onCreate').onclick = async () => {
  await doOnline(async () => { const code = await net.createRoom(profile()); if (code) { $('#onCode').value = code; toast(`Sala criada: ${code} — passe o código pros amigos!`); } return !!code; });
};
$('#onJoin').onclick = async () => {
  const code = $('#onCode').value.trim().toUpperCase();
  if (code.length < 3) { $('#onStatus').textContent = 'Digite o código da sala.'; return; }
  await doOnline(() => net.joinCode(code, profile()));
};
let onBusy = false;
async function doOnline(fn) {
  if (onBusy) return;
  radioMenu();
  onBusy = true;
  $$('#online button').forEach((b) => (b.disabled = true));
  leaveOnline();
  try { const ok = await fn(); if (ok) startPlay(); }
  finally { onBusy = false; $$('#online button').forEach((b) => (b.disabled = false)); }
}
input.onAction = (code) => {
  if (code === 'Escape' || code === 'KeyP') { if (mode === 'play') pause(); else if (mode === 'paused') startPlay(true); }
  if (code === 'KeyC' && mode === 'play') $('#bCam').click();
  if (code === 'KeyR' && mode === 'play') respawn();
  if (code === 'KeyM') cycleRadio();
  if (code === 'KeyT' && mode === 'play' && net.active) { $('#chatbox').classList.remove('hidden'); setTimeout(() => $('#chatIn').focus(), 50); }
};
function respawn() { spawn(safe); bigMsg('De volta!'); }
// garage drag to rotate
canvas.addEventListener('pointerdown', (e) => { if (mode === 'garage') gDrag = e.clientX; });
addEventListener('pointermove', (e) => { if (gDrag != null) { gAng += (e.clientX - gDrag) * 0.01; gDrag = e.clientX; } });
addEventListener('pointerup', () => (gDrag = null));
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { if (mode === 'play' && !net.active) pause(); if (audio.ctx) audio.ctx.suspend(); }
  else if (audio.ctx) audio.ctx.resume();
});

// =============================================================== resize
function resize() {
  const w = innerWidth, h = innerHeight;
  // pixel budget per preset (keeps big laptop screens cheap on integrated GPUs)
  let pr = Math.min(window.devicePixelRatio || 1, Q.dpr, Math.sqrt(Q.px / (w * h)));
  pr = Math.max(0.5, pr * dynScale);
  if (Math.abs(renderer.getPixelRatio() - pr) > 0.01) renderer.setPixelRatio(pr);
  renderer.setSize(w, h, false);
  camera.aspect = w / h; camera.updateProjectionMatrix();
  gCam.aspect = w / h; gCam.updateProjectionMatrix();
}
addEventListener('resize', resize);

// =============================================================== loop
const STEP = 1 / 120;
let acc = 0, prev = performance.now(), renderAcc = 0;
let fpsAvg = 60, fpsFrames = 0, fpsTime = 0, lowFpsT = 0, autoDone = save.settings.quality !== 'auto';
function frame(now) {
  requestAnimationFrame(frame);
  if (!world) { prev = now; return; }
  let dt = (now - prev) / 1000;
  prev = now;
  if (dt > 0.1) dt = 0.1;
  // cap at ~60 fps on 90/120 Hz screens
  renderAcc += dt;
  if (renderAcc < 1 / 61) return;
  dt = Math.min(0.1, renderAcc);
  renderAcc = renderAcc % (1 / 60);
  if (renderAcc > 1 / 120) renderAcc = 0;
  fpsFrames++; fpsTime += dt;
  if (fpsTime > 1) { fpsAvg = fpsFrames / fpsTime; fpsFrames = 0; fpsTime = 0; autoQualityCheck(); }

  if (mode === 'play' || mode === 'paused') {
    const inp = mode === 'play' ? input.update(dt) : { throttle: 0, brake: 1, fbrake: 0, steer: 0, clutch: false };
    acc += dt;
    while (acc >= STEP) { phys.step(STEP, inp, world); acc -= STEP; }
    handleEvents();
    if (phys.crashed) {
      riderFall(pVis, phys.crashT, phys.crashV || 6);
      if (phys.crashT > 2.4) respawn();
    } else {
      safeT += dt;
      if (safeT > 0.6 && phys.grounded && Math.abs(phys.pitch) < 0.1 && phys.v > 1 && phys.y < 0.5) { safeT = 0; safe = { x: phys.x, z: phys.z, yaw: phys.yaw }; }
      // tyre smoke on burnout / clutch dumps
      if ((inp.brake && inp.throttle > 0.6 && phys.v < 6) || (phys.popT > 0.2)) smoke(phys.x, phys.y + 0.2, phys.z, 1, 0.8);
      if (phys.scraping) { sparks(phys.x, phys.y, phys.z, phys.yaw, 3); if (navigator.vibrate && Math.random() < 0.05) navigator.vibrate(15); }
      if (phys.pitch < -0.15 && Math.random() < 0.3) smoke(phys.x + Math.sin(phys.yaw) * phys.L, phys.y + 0.1, phys.z + Math.cos(phys.yaw) * phys.L, 1, 0.3);
    }
    scoreUpdate(dt);
    pVis.apply(phys.visual());
    if (pVis.blob) pVis.blob.position.y = world.groundHeight(phys.x, phys.z) - phys.y + 0.03;
    updateCamera(dt);
    audio.engine(phys.rpm, phys.throttle, phys.spec.electric, mode === 'play' && !phys.crashed);
    updateHUD(dt);
    const v = phys.visual();
    net.tick(dt, [v.x, v.y, v.z, v.yaw, v.pitch, v.lean, v.steer, v.wheel, phys.v, phys.crashed ? 1 : 0, phys.trick, phys.scraping ? 1 : 0], save.best);
    world.update(dt, phys, camera.position);
    if (world.sun.castShadow) {
      world.sun.position.set(phys.x + world.sunDir.x * 60, phys.y + world.sunDir.y * 60, phys.z + world.sunDir.z * 60);
      world.sun.target.position.set(phys.x, phys.y, phys.z);
    }
    saveT += dt; if (saveT > 10) { saveT = 0; persist(); }
  } else if (mode === 'menu' || mode === 'loading') {
    menuCamera(dt);
    world.update(dt, null, camera.position);
  }
  if (mode !== 'garage') {
    for (const b of bots) b.update(dt);
    updateRemotes(dt);
    updateParticles(dt);
    renderer.render(scene, camera);
  } else {
    gAng += dt * 0.25;
    gCam.position.set(Math.sin(gAng) * 4.4, 1.5, Math.cos(gAng) * 4.4);
    gCam.lookAt(0, 0.6, 0);
    renderer.render(gScene, gCam);
  }
}
function autoQualityCheck() {
  if (mode !== 'play') return;
  // 1) dynamic resolution keeps 60 fps
  dynT++;
  if (fpsAvg < 55 && dynScale > 0.62) { dynScale = Math.max(0.62, dynScale * 0.9); resize(); }
  else if (fpsAvg > 59 && dynScale < 1 && dynT % 3 === 0) { dynScale = Math.min(1, dynScale * 1.05); resize(); }
  // 2) if even the lowest resolution can't hold it, drop the preset
  if (autoDone) return;
  if (fpsAvg < 48 && dynScale <= 0.63) lowFpsT++; else lowFpsT = Math.max(0, lowFpsT - 1);
  if (lowFpsT >= 4) {
    lowFpsT = 0;
    if (qName === 'alto') qName = 'medio'; else if (qName === 'medio') qName = 'baixo'; else { autoDone = true; return; }
    Q = QUAL[qName];
    dynScale = 1;
    applySettings();
    toast(`Gráfico ajustado para ${qName === 'baixo' ? 'Leve' : 'Médio'} para ficar liso`);
  }
}

// =============================================================== boot
function boot() {
  const bar = $('#loading i');
  bar.style.width = '30%';
  setTimeout(() => {
    world = new World(scene, { quality: qName, cars: 20 });
    bar.style.width = '75%';
    setTimeout(() => {
      applySettings(true);
      input.bindTouch({ throttle: $('#throttle'), steer: $('#steer'), brake: $('#brake'), fbrake: $('#fbrake'), clutch: $('#clutch'), gup: $('#gUp'), gdown: $('#gDown'), tricks: [$('#t1'), $('#t2'), $('#t3')] });
      // warm up shaders for every bike so the first ride doesn't stutter
      const warm = [];
      for (const b of BIKES.slice(0, 5)) { const v = new BikeVisual(b, {}, false); v.root.position.set(280, -50, 280); scene.add(v.root); warm.push(v); }
      phys = new BikePhysics(bikeById(save.bike), upOf(save.bike), save.settings.easy);
      makePlayer();
      spawn(START);
      pVis.root.visible = true;
      menuCamera(0);
      renderer.compile(scene, camera);
      renderer.render(scene, camera);
      warm.forEach((v) => v.dispose());
      bar.style.width = '100%';
      mode = 'menu';
      refreshMenu();
      show('menu');
      $('#loading').classList.add('gone');
      setTimeout(() => $('#loading').remove(), 600);
    }, 30);
  }, 30);
  resize();
  requestAnimationFrame(frame);
}
boot();

// debug/test hook
window.__g = { get phys() { return phys; }, get pVis() { return pVis; }, get mode() { return mode; }, get world() { return world; }, save, go, renderer, combo, stats, get fps() { return fpsAvg; } };
