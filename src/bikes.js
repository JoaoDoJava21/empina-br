import * as THREE from 'three';
import { Parts, V3, tube, box, sphere, discX, discZ, slab, arcPts } from './util.js';
import { RiderRig } from './rider.js';

// ---------------------------------------------------------------------------
// Catalogue. top = km/h, accel = m/s² at low speed, lift = wheelie ease,
// bp = balance point (rad), pop = clutch pop strength, price in R$ (in-game)
// ---------------------------------------------------------------------------
export const BIKES = [
  { id: 'cb300f', name: 'CB 300F Twister 2026', type: 'naked', cc: '293cc', price: 0, top: 152, accel: 6.4, lift: 1.0, bp: 0.95, pop: 2.3, brake: 1.0, color: '#c8102e', desc: 'Naked nova, forte e estável. Levanta fácil na primeira.' },
  { id: 'pop27', name: 'Pop 110i 2027', type: 'cub', cc: '110cc', price: 0, top: 92, accel: 3.6, lift: 1.12, bp: 1.0, pop: 2.6, brake: 0.8, color: '#1e63d6', desc: 'Leve e brava. Precisa de embreagem pra subir, mas segura o grau fácil.' },
  { id: 'r15', name: 'R15 ABS', type: 'sport', cc: '155cc', price: 0, top: 142, accel: 5.6, lift: 0.95, bp: 0.88, pop: 2.2, brake: 1.15, color: '#0b3ea8', desc: 'Esportiva de giro alto. Rápida e precisa no ponto.' },
  { id: 'pcx25', name: 'PCX 160 2025', type: 'scooter', cc: '157cc', price: 0, top: 116, accel: 4.6, lift: 0.9, bp: 0.86, pop: 2.1, brake: 0.95, color: '#ececec', desc: 'Scooter premium. Grau de scooter é arte: ponto baixo e suave.' },
  { id: 'evolt', name: 'Scooter Elétrica E-Volt S', type: 'escooter', cc: '4kW', price: 0, top: 80, accel: 6.0, lift: 1.05, bp: 0.88, pop: 2.4, brake: 0.9, color: '#11b5a4', electric: true, desc: 'Torque instantâneo e silenciosa. Boost elétrico no lugar da embreagem.' },
  { id: 'titan', name: 'CG 160 Titan', type: 'street', cc: '162cc', price: 6500, top: 120, accel: 4.8, lift: 1.05, bp: 0.98, pop: 2.4, brake: 0.9, color: '#202020', desc: 'Clássica de rua. Robusta e honesta no grau.' },
  { id: 'fan', name: 'CG 160 Fan', type: 'street', cc: '162cc', price: 5000, top: 118, accel: 4.7, lift: 1.05, bp: 0.98, pop: 2.4, brake: 0.85, color: '#b3131b', desc: 'A queridinha do Brasil.' },
  { id: 'biz', name: 'Biz 125', type: 'cub', cc: '125cc', price: 4500, top: 98, accel: 3.9, lift: 1.1, bp: 1.0, pop: 2.6, brake: 0.8, color: '#e3c21a', desc: 'Pequena, mas empina bonito.' },
  { id: 'bros', name: 'NXR 160 Bros', type: 'trail', cc: '162cc', price: 11000, top: 118, accel: 5.0, lift: 1.15, bp: 1.02, pop: 2.6, brake: 0.9, color: '#d42222', desc: 'Trail alta. Grau alto e fácil de segurar.' },
  { id: 'nmax', name: 'NMax 160', type: 'scooter', cc: '155cc', price: 15000, top: 118, accel: 4.7, lift: 0.92, bp: 0.86, pop: 2.1, brake: 1.0, color: '#2c2f36', desc: 'Scooter esportivo.' },
  { id: 'fz25', name: 'Fazer FZ25', type: 'naked', cc: '249cc', price: 17000, top: 145, accel: 6.0, lift: 1.0, bp: 0.95, pop: 2.3, brake: 1.0, color: '#14309a', desc: 'Naked 250 com muito torque.' },
  { id: 'lander', name: 'Lander 250', type: 'trail', cc: '249cc', price: 20000, top: 135, accel: 5.8, lift: 1.15, bp: 1.02, pop: 2.6, brake: 0.95, color: '#1f4fbf', desc: 'Trail 250, empina sozinha.' },
  { id: 'xre', name: 'XRE 300 Sahara', type: 'trail', cc: '294cc', price: 28000, top: 145, accel: 6.3, lift: 1.12, bp: 1.0, pop: 2.5, brake: 1.0, color: '#e6e6e6', desc: 'Aventureira nova, potente e alta.' },
  { id: 'mt03', name: 'MT-03', type: 'naked', cc: '321cc', price: 45000, top: 182, accel: 7.8, lift: 1.0, bp: 0.92, pop: 2.2, brake: 1.15, color: '#3a3d45', desc: 'Bicilíndrica. A mais forte da quebrada.' },
];
export const bikeById = (id) => BIKES.find((b) => b.id === id) || BIKES[0];

export const PAINTS = ['#c8102e', '#1e63d6', '#0b3ea8', '#ececec', '#11b5a4', '#202020', '#e3c21a', '#ff6a00', '#7b2cbf', '#2e7d32', '#ff4fa3', '#8d99ae', '#b08d57', '#00c2ff'];
export const RIMS = ['#1a1a1a', '#c0c0c0', '#d4af37', '#e11d48', '#2563eb', '#16a34a', '#f97316', '#ffffff'];
export const HELMETS = ['#111111', '#f5f5f5', '#e11d48', '#2563eb', '#facc15', '#16a34a', '#a855f7', '#f97316'];
export const JACKETS = ['#1f2937', '#111111', '#b91c1c', '#1d4ed8', '#15803d', '#f59e0b', '#6b21a8', '#e5e7eb'];

// ---------------------------------------------------------------------------
// Shared materials
// ---------------------------------------------------------------------------
export const MAT = {
  base: new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.35, roughness: 0.55 }),
  light: new THREE.MeshBasicMaterial({ vertexColors: true }),
  metal: new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.95, roughness: 0.2 }),
};
MAT.light.toneMapped = false;

// ---------------------------------------------------------------------------
// Wheels
// ---------------------------------------------------------------------------
const wheelCache = new Map();
function buildWheel(r, tw, style, disc = true) {
  const key = `${r}-${tw}-${style}-${disc}`;
  if (wheelCache.has(key)) return wheelCache.get(key);
  const tire = new Parts(), rim = new Parts(), met = new Parts();
  const tg = new THREE.TorusGeometry(r - tw * 0.5, tw * 0.5, 8, 26);
  tg.rotateY(Math.PI / 2); tg.scale(1.25, 1, 1);
  tire.add(tg, '#141414');
  const rr = r - tw + 0.004;
  const lip = new THREE.TorusGeometry(rr, 0.016, 4, 22);
  lip.rotateY(Math.PI / 2);
  rim.add(lip);
  rim.add(discX(0.055, 0.12, 0, 0, 0, 10));
  if (style === 'spoke') {
    for (let k = 0; k < 18; k++) {
      const a = (k / 18) * Math.PI * 2, side = k % 2 ? 1 : -1;
      met.add(tube(V3(side * 0.04, Math.cos(a) * 0.05, Math.sin(a) * 0.05), V3(side * 0.01, Math.cos(a + 0.3) * rr, Math.sin(a + 0.3) * rr), 0.004, 0.004, 3), '#d0d0d0');
    }
  } else {
    const n = style === 'y' ? 6 : style === 'scooter' ? 5 : 5;
    for (let k = 0; k < n; k++) {
      const a = (k / n) * Math.PI * 2;
      if (style === 'y') {
        for (const o of [-0.13, 0.13]) {
          rim.add(tube(V3(0, Math.cos(a) * 0.05, Math.sin(a) * 0.05), V3(0, Math.cos(a + o) * rr, Math.sin(a + o) * rr), 0.014, 0.01, 4));
        }
      } else {
        rim.add(tube(V3(0, Math.cos(a) * 0.05, Math.sin(a) * 0.05), V3(0, Math.cos(a) * rr, Math.sin(a) * rr), 0.02, 0.013, 4));
      }
    }
  }
  if (disc) {
    const dr = Math.min(0.15, r * 0.48);
    met.add(discX(dr, 0.006, 0.075, 0, 0, 22), '#b9b9b9');
    tire.add(discX(dr * 0.55, 0.008, 0.077, 0, 0, 10), '#3a3a3a');
    for (let k = 0; k < 8; k++) { const a = (k / 8) * Math.PI * 2; tire.add(discX(0.012, 0.01, 0.079, Math.cos(a) * dr * 0.78, Math.sin(a) * dr * 0.78, 6), '#222'); }
  } else {
    tire.add(discX(0.1, 0.06, 0.05, 0, 0, 12), '#2a2a2a'); // drum
  }
  const out = { tire: tire.build(), rim: rim.build(), metal: met.build() };
  wheelCache.set(key, out);
  return out;
}

// ---------------------------------------------------------------------------
// Bike body builders (bike space: z forward, y up, rear contact at origin)
// ---------------------------------------------------------------------------
function common(o) {
  // o: {L, r, rf, head, paint, base, light, sb (steer base), sp (steer paint), sl (steer light)}
  o.axleR = V3(0, o.r, 0);
  o.axleF = V3(0, o.rf, o.L);
}

function forks(o, col = '#bfbfbf', lowerCol = '#2a2a2a', spread = 0.09, rad = 0.028, usd = false) {
  const dir = new THREE.Vector3().subVectors(o.head, o.axleF).normalize();
  const top = o.head.clone().addScaledVector(dir, 0.07);
  const mid = o.axleF.clone().lerp(o.head, 0.45);
  for (const s of [-1, 1]) {
    if (usd) { // upside-down fork: thick coloured tubes on top, polished stanchions below
      o.sm.add(tube(V3(s * spread, o.axleF.y, o.axleF.z), V3(s * spread, mid.y, mid.z), rad - 0.004), '#e6e6e6');
      o.sm.add(tube(V3(s * spread, mid.y, mid.z), V3(s * spread, top.y, top.z), rad + 0.01), col);
    } else {
      o.sb.add(tube(V3(s * spread, o.axleF.y, o.axleF.z), V3(s * spread, mid.y, mid.z), rad + 0.008), lowerCol);
      o.sm.add(tube(V3(s * spread, mid.y, mid.z), V3(s * spread, top.y, top.z), rad), col);
    }
    if (s > 0) o.sb.add(box(0.04, 0.09, 0.07, s * (spread - 0.02), o.axleF.y + 0.1, o.axleF.z - 0.1, 0.5), o.caliper || '#8a1c1c');
  }
  o.sb.add(box(spread * 2 + 0.08, 0.04, 0.09, 0, top.y, top.z), '#2a2a2a');
  o.sb.add(box(spread * 2 + 0.06, 0.03, 0.08, 0, o.head.y - 0.12, o.head.z + 0.05), '#2a2a2a');
  o.forkTop = top;
}

function bars(o, width = 0.34, rise = 0.07, back = 0.05, col = '#1b1b1b') {
  const t = o.forkTop;
  const y = t.y + rise, z = t.z - back;
  o.sb.add(tube(V3(0, t.y + 0.02, t.z), V3(0, y, z), 0.016), col);
  o.sb.add(tube(V3(-width, y, z - 0.03), V3(width, y, z - 0.03), 0.013), col);
  for (const s of [-1, 1]) o.sb.add(tube(V3(s * (width - 0.1), y, z - 0.03), V3(s * width, y, z - 0.03), 0.02), '#0e0e0e');
  o.grip = { y, z: z - 0.03, w: width };
}

function mirrors(o, target) {
  const g = o.grip;
  for (const s of [-1, 1]) {
    target.add(tube(V3(s * (g.w - 0.12), g.y, g.z), V3(s * (g.w - 0.06), g.y + 0.2, g.z - 0.05), 0.008), '#151515');
    target.add(box(0.1, 0.06, 0.02, s * (g.w - 0.05), g.y + 0.23, g.z - 0.06), '#151515');
  }
}

function fender(o, target, col, w = 0.13, r1 = 0.04, r2 = 0.075, a0 = 0.35, a1 = 2.3) {
  target.add(slab(arcPts(o.axleF.z, o.axleF.y, o.rf + r1, o.rf + r2, a0, a1, 7), w, 0, 0.01), col);
}

function swingarm(o, pivot, col = '#1d1d1d', single = false) {
  const sides = single ? [0.1] : [-0.11, 0.11];
  for (const s of sides) o.base.add(tube(V3(s, o.r, 0), V3(s, pivot.y, pivot.z), 0.028, 0.034, 6), col);
  o.base.add(tube(V3(-0.12, pivot.y, pivot.z), V3(0.12, pivot.y, pivot.z), 0.03), col);
}

function engine(o, cz, cy, sz = 0.36, sy = 0.3, col = '#3a3a3a', tilt = -0.35) {
  o.base.add(box(0.28, sy, sz, 0, cy, cz), col);
  o.base.add(box(0.22, 0.2, 0.2, 0, cy + sy * 0.55, cz + sz * 0.3, tilt), '#4a4a4a');
  for (let k = 0; k < 3; k++) o.base.add(box(0.25, 0.012, 0.22, 0, cy + sy * 0.45 + k * 0.05, cz + sz * 0.3, tilt), '#9a9a9a');
  o.base.add(discX(0.1, 0.05, 0.15, cy - 0.02, cz - 0.04, 12), '#a8a8a8');
  o.base.add(discX(0.07, 0.04, -0.15, cy, cz + 0.05, 10), '#8a8a8a');
}

function tailLight(o, z, y, w = 0.12) {
  o.light.add(box(w, 0.045, 0.03, 0, y, z), '#ff1a1a');
  for (const s of [-1, 1]) o.light.add(box(0.05, 0.025, 0.03, s * (w / 2 + 0.06), y - 0.04, z + 0.02), '#ffa000');
}

function plate(o, z, y) {
  o.base.add(box(0.06, 0.2, 0.04, 0, y + 0.12, z + 0.05, 0.6), '#111');
  o.base.add(box(0.2, 0.13, 0.012, 0, y, z, 0.25), '#e8e8e8');
}

const BUILD = {
  naked(o) {
    Object.assign(o, { L: 1.36, r: 0.31, rf: 0.31, head: V3(0, 0.93, 1.08), wheel: 'y' });
    common(o);
    // muscular tank with knee recesses + angular shrouds (Twister style)
    o.paint.add(slab([[0.54, 0.84], [0.64, 0.99], [0.82, 1.05], [1.0, 1.04], [1.13, 0.96], [1.1, 0.83], [0.92, 0.76], [0.66, 0.76]], 0.36, 3, 0.045));
    o.base.add(slab([[0.6, 0.78], [0.9, 0.76], [0.96, 0.84], [0.62, 0.86]], 0.38, 1, 0.01), '#141414');
    o.paint.add(slab([[0.88, 0.66], [1.02, 0.66], [1.27, 0.97], [1.17, 1.0], [0.98, 0.92]], 0.5, 0, 0.02));
    o.base.add(slab([[0.86, 0.6], [1.0, 0.6], [1.2, 0.86], [1.04, 0.86]], 0.46, 0, 0.01), '#121212');
    // stepped seat + sharp tail
    o.base.add(slab([[0.2, 0.9], [0.3, 0.94], [0.6, 0.96], [0.64, 0.87], [0.22, 0.84]], 0.28, 2, 0.03), '#191919');
    o.base.add(slab([[-0.1, 0.96], [0.02, 0.99], [0.22, 0.99], [0.24, 0.92], [-0.08, 0.9]], 0.22, 2, 0.02), '#191919');
    o.paint.add(slab([[-0.26, 0.98], [-0.1, 0.95], [0.32, 0.86], [0.34, 0.78], [0.1, 0.76], [-0.2, 0.9]], 0.22, 1, 0.025));
    o.base.add(slab([[-0.24, 0.9], [0.1, 0.74], [0.32, 0.76], [0.0, 0.84]], 0.18, 0, 0.01), '#101010');
    for (const s2 of [-1, 1]) o.base.add(tube(V3(s2 * 0.1, 0.94, 0.12), V3(s2 * 0.09, 0.97, -0.08), 0.014), '#1a1a1a');
    // steel frame
    for (const s2 of [-1, 1]) {
      o.base.add(tube(V3(s2 * 0.08, 0.92, 1.06), V3(s2 * 0.13, 0.78, 0.6), 0.025), '#1d1d1d');
      o.base.add(tube(V3(s2 * 0.13, 0.78, 0.6), V3(s2 * 0.12, 0.44, 0.52), 0.025), '#1d1d1d');
      o.base.add(tube(V3(s2 * 0.1, 0.8, 0.55), V3(s2 * 0.08, 0.88, -0.02), 0.018), '#1d1d1d');
    }
    o.base.add(tube(V3(0, 0.9, 1.05), V3(0, 0.45, 0.98), 0.03), '#1d1d1d');
    // air/oil cooled single: black block, polished fins and covers
    o.base.add(box(0.28, 0.3, 0.38, 0, 0.45, 0.76), '#1e1e1e');
    o.base.add(box(0.22, 0.22, 0.2, 0, 0.67, 0.93, -0.35), '#232323');
    for (let k = 0; k < 4; k++) o.metal.add(box(0.25, 0.01, 0.22, 0, 0.61 + k * 0.045, 0.94, -0.35), '#c8c8c8');
    o.metal.add(discX(0.11, 0.03, 0.155, 0.44, 0.72, 16), '#bdbdbd');
    o.base.add(discX(0.07, 0.04, -0.15, 0.46, 0.82, 12), '#2b2b2b');
    o.base.add(box(0.2, 0.1, 0.05, 0, 0.62, 1.07, -0.3), '#1a1a1a');
    o.base.add(slab([[0.6, 0.24], [0.98, 0.27], [1.0, 0.36], [0.62, 0.32]], 0.26, 1, 0.01), '#151515');
    // short exhaust
    o.metal.add(tube(V3(0, 0.56, 0.98), V3(0.06, 0.27, 0.88), 0.024), '#9a8f86');
    o.metal.add(tube(V3(0.06, 0.27, 0.88), V3(0.12, 0.27, 0.5), 0.024), '#9a8f86');
    o.base.add(tube(V3(0.14, 0.3, 0.52), V3(0.18, 0.43, 0.2), 0.075, 0.065, 12), '#151515');
    o.metal.add(tube(V3(0.165, 0.37, 0.48), V3(0.2, 0.44, 0.26), 0.05, 0.045, 10), '#bdbdbd');
    o.metal.add(tube(V3(0.18, 0.43, 0.2), V3(0.182, 0.44, 0.15), 0.045, 0.045, 12), '#d8d8d8');
    // chain + sprockets
    o.base.add(discX(0.085, 0.02, 0.13, 0.31, 0, 14), '#2a2a2a');
    o.base.add(discX(0.05, 0.02, 0.13, 0.42, 0.62, 12), '#2a2a2a');
    o.base.add(tube(V3(0.13, 0.4, 0.0), V3(0.13, 0.47, 0.62), 0.008), '#333');
    o.base.add(tube(V3(0.13, 0.23, 0.0), V3(0.13, 0.37, 0.62), 0.008), '#333');
    swingarm(o, V3(0, 0.42, 0.55), '#161616');
    o.base.add(tube(V3(0, 0.45, 0.3), V3(0, 0.8, 0.55), 0.035), '#b71c1c');
    o.base.add(box(0.05, 0.08, 0.06, 0.1, 0.38, -0.1, 0.3), '#8a1c1c');
    o.base.add(tube(V3(-0.22, 0.4, 0.55), V3(0.22, 0.4, 0.55), 0.015), '#555');
    plate(o, -0.31, 0.64);
    // LED headlight with DRL
    o.base.add(slab([[1.14, 0.97], [1.25, 1.07], [1.33, 0.99], [1.31, 0.83], [1.18, 0.81]], 0.23, 1, 0.02), '#121212');
    o.light.add(slab([[1.3, 0.99], [1.335, 0.97], [1.335, 0.86], [1.3, 0.85]], 0.15, 0, 0.005), '#ffffff');
    o.light.add(slab([[1.29, 1.02], [1.325, 1.0], [1.325, 0.99], [1.29, 1.01]], 0.2, 0, 0), '#bfe9ff');
    o.base.add(box(0.15, 0.08, 0.05, 0, 1.13, 1.08, 0.5), '#0c0c0c');
    o.light.add(box(0.11, 0.05, 0.005, 0, 1.135, 1.107, 0.5), '#5ab0ff');
    tailLight(o, -0.25, 0.94, 0.1);
    forks(o, '#d9d9d9', '#1f1f1f', 0.09, 0.03);
    bars(o, 0.37, 0.08, 0.04);
    mirrors(o, o.sb);
    fender(o, o.sp, '#000', 0.13, 0.03, 0.065, 0.3, 2.0);
    o.seat = V3(0, 0.99, 0.42); o.peg = V3(0, 0.4, 0.55);
  },
  sport(o) {
    Object.assign(o, { L: 1.33, r: 0.3, rf: 0.3, head: V3(0, 0.9, 1.06), wheel: 'y', caliper: '#c9a227' });
    common(o);
    // sharp nose with M-duct, twin LED eyes and side panels
    o.paint.add(slab([[0.98, 0.96], [1.2, 1.04], [1.43, 0.9], [1.41, 0.79], [1.22, 0.76], [1.04, 0.84]], 0.36, 1, 0.025));
    o.paint.add(slab([[0.62, 0.42], [0.96, 0.33], [1.2, 0.46], [1.38, 0.76], [1.2, 0.78], [1.04, 0.7], [0.86, 0.86], [0.66, 0.66]], 0.42, 1, 0.02));
    o.base.add(slab([[0.72, 0.48], [0.94, 0.42], [1.06, 0.54], [0.88, 0.62]], 0.43, 0, 0.0), '#121212');
    o.base.add(slab([[0.98, 0.52], [1.12, 0.5], [1.18, 0.62], [1.04, 0.66]], 0.43, 0, 0.0), '#1a1a1a');
    o.base.add(slab([[1.36, 0.78], [1.44, 0.82], [1.44, 0.88], [1.36, 0.86]], 0.12, 0, 0.005), '#0a0a0a');
    o.light.add(slab([[1.43, 0.82], [1.445, 0.82], [1.445, 0.87], [1.43, 0.87]], 0.07, 0, 0.0), '#ffffff');
    for (const s2 of [-1, 1]) o.light.add(slab([[1.33, 0.9], [1.42, 0.885], [1.415, 0.875], [1.32, 0.885]], 0.06, 0, 0.0, s2 * 0.12), '#e8f6ff');
    o.paint.add(slab([[0.56, 0.86], [0.66, 1.01], [0.88, 1.06], [1.02, 1.0], [0.98, 0.86], [0.7, 0.82]], 0.36, 2, 0.04));
    o.base.add(slab([[0.6, 0.84], [0.84, 0.82], [0.88, 0.9], [0.62, 0.92]], 0.37, 1, 0.0), '#151515');
    // split seat, high sharp tail
    o.base.add(slab([[0.2, 0.93], [0.3, 0.96], [0.6, 0.99], [0.63, 0.9], [0.22, 0.88]], 0.27, 2, 0.03), '#141414');
    o.base.add(slab([[-0.12, 1.02], [-0.02, 1.05], [0.16, 1.03], [0.18, 0.97], [-0.1, 0.98]], 0.2, 2, 0.02), '#141414');
    o.paint.add(slab([[-0.32, 1.04], [-0.12, 1.01], [0.34, 0.92], [0.38, 0.82], [0.1, 0.82], [-0.26, 0.95]], 0.22, 0, 0.02));
    o.base.add(slab([[-0.3, 0.96], [0.1, 0.8], [0.36, 0.8], [0.0, 0.88]], 0.16, 0, 0.0), '#0e0e0e');
    o.base.add(slab([[1.18, 1.03], [1.32, 1.0], [1.2, 1.17], [1.1, 1.12]], 0.27, 1, 0.01), '#1d2731');
    o.base.add(box(0.28, 0.28, 0.34, 0, 0.46, 0.78), '#1b1b1b');
    o.base.add(box(0.22, 0.2, 0.2, 0, 0.66, 0.92, -0.45), '#202020');
    o.metal.add(discX(0.1, 0.03, 0.15, 0.43, 0.72, 16), '#a9a9a9');
    o.metal.add(tube(V3(0, 0.56, 0.98), V3(0.05, 0.27, 0.88), 0.024), '#8f8a85');
    o.base.add(tube(V3(0.08, 0.28, 0.66), V3(0.17, 0.42, 0.34), 0.07, 0.06, 12), '#121212');
    o.metal.add(tube(V3(0.17, 0.42, 0.34), V3(0.18, 0.44, 0.29), 0.05, 0.05, 12), '#c0c0c0');
    o.base.add(discX(0.08, 0.02, 0.13, 0.3, 0, 14), '#2a2a2a');
    o.base.add(tube(V3(0.13, 0.38, 0.0), V3(0.13, 0.48, 0.62), 0.008), '#333');
    o.base.add(tube(V3(0.13, 0.22, 0.0), V3(0.13, 0.38, 0.62), 0.008), '#333');
    for (const s2 of [-1, 1]) o.base.add(tube(V3(s2 * 0.1, 0.84, 0.55), V3(s2 * 0.07, 0.94, -0.05), 0.018), '#222');
    // aluminium swingarm
    for (const s2 of [-0.11, 0.11]) o.metal.add(tube(V3(s2, 0.3, 0), V3(s2, 0.44, 0.56), 0.03, 0.04, 6), '#9fa3a8');
    o.base.add(tube(V3(-0.12, 0.44, 0.56), V3(0.12, 0.44, 0.56), 0.03), '#222');
    o.base.add(tube(V3(0, 0.46, 0.32), V3(0, 0.8, 0.56), 0.035), '#1e40af');
    o.base.add(tube(V3(-0.2, 0.46, 0.48), V3(0.2, 0.46, 0.48), 0.015), '#555');
    plate(o, -0.34, 0.7);
    o.light.add(slab([[-0.33, 1.02], [-0.31, 1.03], [-0.29, 0.99], [-0.31, 0.98]], 0.14, 0, 0.0), '#ff1a1a');
    for (const s2 of [-1, 1]) o.light.add(box(0.04, 0.02, 0.03, s2 * 0.13, 0.86, -0.28), '#ffa000');
    forks(o, '#d4a017', '#1a1a1a', 0.09, 0.03, true);
    const t = o.forkTop;
    for (const s2 of [-1, 1]) {
      o.sb.add(tube(V3(s2 * 0.1, t.y - 0.02, t.z), V3(s2 * 0.3, t.y - 0.05, t.z - 0.07), 0.014), '#1b1b1b');
      o.sb.add(tube(V3(s2 * 0.22, t.y - 0.04, t.z - 0.06), V3(s2 * 0.31, t.y - 0.05, t.z - 0.075), 0.02), '#0e0e0e');
    }
    o.grip = { y: t.y - 0.05, z: t.z - 0.07, w: 0.3 };
    for (const s2 of [-1, 1]) {
      o.base.add(box(0.1, 0.05, 0.02, s2 * 0.27, 1.02, 1.12), '#151515');
      o.base.add(tube(V3(s2 * 0.2, 0.98, 1.14), V3(s2 * 0.26, 1.0, 1.13), 0.008), '#151515');
    }
    fender(o, o.sp, '#000', 0.12, 0.03, 0.06, 0.4, 2.1);
    o.seat = V3(0, 1.01, 0.36); o.peg = V3(0, 0.48, 0.46);
  },
  street(o) {
    Object.assign(o, { L: 1.32, r: 0.31, rf: 0.31, head: V3(0, 0.95, 1.06), wheel: 'alloy' });
    common(o);
    o.paint.add(slab([[0.52, 0.84], [0.62, 1.0], [0.84, 1.06], [1.02, 1.02], [1.10, 0.92], [0.96, 0.82], [0.7, 0.8]], 0.34, 2, 0.04));
    o.paint.add(slab([[0.2, 0.62], [0.48, 0.62], [0.5, 0.82], [0.22, 0.84]], 0.3, 1, 0.02));
    o.paint.add(slab([[-0.18, 0.86], [0.1, 0.86], [0.3, 0.84], [0.26, 0.76], [-0.16, 0.78]], 0.2, 1, 0.02));
    o.base.add(slab([[-0.04, 0.9], [0.1, 0.94], [0.62, 0.96], [0.66, 0.88], [0.0, 0.86]], 0.28, 2, 0.03), '#1c1c1c');
    o.base.add(box(0.24, 0.025, 0.3, 0, 0.9, -0.12), '#222');
    for (const s of [-1, 1]) {
      o.base.add(tube(V3(s * 0.12, 0.42, 0.05), V3(s * 0.12, 0.84, 0.2), 0.03), '#9a9a9a');
      o.base.add(tube(V3(s * 0.1, 0.84, 0.55), V3(s * 0.08, 0.88, -0.05), 0.018), '#222');
    }
    o.base.add(tube(V3(0, 0.92, 1.04), V3(0, 0.82, 0.6), 0.03), '#222');
    o.base.add(tube(V3(0, 0.92, 1.04), V3(0, 0.42, 0.98), 0.03), '#222');
    engine(o, 0.74, 0.45, 0.34, 0.3, '#4a4a4a', -0.15);
    o.base.add(tube(V3(0.04, 0.58, 0.96), V3(0.1, 0.3, 0.84), 0.024), '#cfcfcf');
    o.base.add(tube(V3(0.1, 0.3, 0.84), V3(0.14, 0.3, 0.42), 0.024), '#cfcfcf');
    o.base.add(tube(V3(0.15, 0.33, 0.44), V3(0.18, 0.46, -0.04), 0.056, 0.05, 10), '#d6d6d6');
    swingarm(o, V3(0, 0.42, 0.55));
    o.base.add(tube(V3(-0.22, 0.38, 0.6), V3(0.22, 0.38, 0.6), 0.015), '#777');
    plate(o, -0.26, 0.64);
    tailLight(o, -0.19, 0.83);
    forks(o, '#cfcfcf', '#bdbdbd', 0.09, 0.028);
    bars(o, 0.36, 0.13, 0.08, '#c8c8c8');
    mirrors(o, o.sb);
    // round headlight turns with the bars
    const h = o.forkTop;
    o.sb.add(sphere(0.1, 0, h.y - 0.06, h.z + 0.12, 1, 1, 0.8, 12), '#1a1a1a');
    o.sl.add(discZ(0.082, 0.02, 0, h.y - 0.06, h.z + 0.19, 16), '#fff6dc');
    o.sb.add(box(0.12, 0.08, 0.05, 0, h.y + 0.05, h.z - 0.02), '#111');
    fender(o, o.sb, '#d0d0d0', 0.12);
    o.seat = V3(0, 1.0, 0.38); o.peg = V3(0, 0.38, 0.56);
  },
  cub(o) {
    Object.assign(o, { L: 1.22, r: 0.29, rf: 0.29, head: V3(0, 0.92, 0.98), wheel: 'spoke', drum: true });
    common(o);
    o.paint.add(slab([[0.7, 0.4], [0.86, 0.42], [1.0, 0.86], [0.98, 1.0], [0.9, 0.98], [0.8, 0.7], [0.66, 0.46]], 0.4, 2, 0.03));
    o.paint.add(slab([[0.02, 0.7], [0.14, 0.82], [0.56, 0.84], [0.62, 0.62], [0.7, 0.42], [0.56, 0.4], [0.48, 0.58], [0.1, 0.58]], 0.3, 2, 0.03));
    o.base.add(slab([[0.04, 0.86], [0.12, 0.92], [0.54, 0.93], [0.58, 0.84], [0.1, 0.82]], 0.27, 2, 0.03), '#1a1a1a');
    o.base.add(box(0.24, 0.2, 0.34, 0, 0.34, 0.66), '#555');
    o.base.add(discX(0.09, 0.04, 0.13, 0.33, 0.6, 12), '#9a9a9a');
    o.base.add(tube(V3(0.05, 0.3, 0.84), V3(0.12, 0.24, 0.6), 0.022), '#444');
    o.base.add(tube(V3(0.14, 0.28, 0.56), V3(0.16, 0.36, 0.1), 0.05, 0.045, 10), '#3a3a3a');
    o.base.add(box(0.22, 0.03, 0.3, 0, 0.86, -0.08), '#222');
    for (const s of [-1, 1]) o.base.add(tube(V3(s * 0.11, 0.33, 0.04), V3(s * 0.11, 0.78, 0.16), 0.026), '#8a8a8a');
    swingarm(o, V3(0, 0.38, 0.5), '#2a2a2a');
    o.base.add(tube(V3(-0.2, 0.32, 0.62), V3(0.2, 0.32, 0.62), 0.014), '#666');
    plate(o, -0.18, 0.62);
    tailLight(o, -0.1, 0.78, 0.14);
    forks(o, '#2a2a2a', '#2a2a2a', 0.08, 0.026);
    bars(o, 0.32, 0.08, 0.04);
    const h = o.forkTop;
    o.sp.add(slab([[h.z - 0.14, h.y + 0.02], [h.z + 0.02, h.y + 0.1], [h.z + 0.14, h.y + 0.06], [h.z + 0.12, h.y - 0.04], [h.z - 0.06, h.y - 0.03]], 0.44, 1, 0.03));
    o.sl.add(slab([[h.z + 0.12, h.y + 0.05], [h.z + 0.16, h.y + 0.04], [h.z + 0.15, h.y - 0.02], [h.z + 0.11, h.y - 0.02]], 0.16, 0, 0.005), '#fff6dc');
    mirrors(o, o.sb);
    fender(o, o.sp, '#000', 0.12, 0.03, 0.07);
    o.seat = V3(0, 0.98, 0.34); o.peg = V3(0, 0.36, 0.66);
  },
  scooter(o) {
    Object.assign(o, { L: 1.31, r: 0.27, rf: 0.28, head: V3(0, 0.9, 1.04), wheel: 'scooter' });
    common(o);
    // tall rounded front apron
    o.paint.add(slab([[0.86, 0.38], [1.0, 0.4], [1.2, 0.7], [1.24, 0.88], [1.16, 1.04], [1.04, 1.05], [0.94, 0.8], [0.82, 0.48]], 0.46, 3, 0.04));
    o.base.add(slab([[0.84, 0.36], [1.0, 0.37], [1.12, 0.56], [0.94, 0.56]], 0.48, 1, 0.01), '#171717');
    o.metal.add(slab([[1.19, 0.66], [1.215, 0.67], [1.255, 0.88], [1.23, 0.88]], 0.47, 0, 0.0), '#cfcfcf');
    // X-shaped LED signature + projector headlight
    for (const sgn of [-1, 1]) o.light.add(box(0.3, 0.018, 0.02, 0, 0.86, 1.235, 0, 0, sgn * 0.55), '#ffffff');
    o.base.add(slab([[1.2, 0.74], [1.25, 0.74], [1.25, 0.81], [1.2, 0.81]], 0.2, 0, 0.005), '#0b0b0b');
    o.light.add(slab([[1.25, 0.75], [1.258, 0.75], [1.258, 0.8], [1.25, 0.8]], 0.16, 0, 0.0), '#f4fbff');
    // body: side panels with black lower half, wide floor
    o.paint.add(slab([[-0.2, 0.76], [-0.02, 0.86], [0.3, 0.85], [0.6, 0.8], [0.66, 0.62], [0.72, 0.46], [0.42, 0.44], [0.2, 0.54], [-0.12, 0.62]], 0.38, 3, 0.035));
    o.base.add(slab([[0.2, 0.44], [0.72, 0.42], [0.72, 0.5], [0.42, 0.52], [0.2, 0.56]], 0.4, 1, 0.01), '#161616');
    o.base.add(slab([[0.56, 0.35], [0.92, 0.35], [0.92, 0.45], [0.56, 0.45]], 0.42, 0, 0.02), '#202020');
    o.metal.add(slab([[0.0, 0.79], [0.5, 0.8], [0.5, 0.81], [0.0, 0.8]], 0.385, 0, 0.0), '#cfcfcf');
    // stepped seat
    o.base.add(slab([[0.0, 0.85], [0.06, 0.93], [0.26, 0.94], [0.32, 0.9], [0.54, 0.91], [0.6, 0.83], [0.04, 0.81]], 0.34, 3, 0.03), '#1a1a1a');
    o.base.add(slab([[1.15, 1.06], [1.23, 1.04], [1.17, 1.24], [1.1, 1.21]], 0.3, 1, 0.01), '#26313b');
    // swingarm engine unit, chromed muffler shield
    o.base.add(box(0.18, 0.22, 0.5, 0.1, 0.36, 0.26), '#2d2d2d');
    o.base.add(tube(V3(-0.16, 0.36, 0.42), V3(-0.18, 0.47, -0.02), 0.065, 0.06, 12), '#1d1d1d');
    o.metal.add(tube(V3(-0.2, 0.42, 0.38), V3(-0.22, 0.49, 0.06), 0.045, 0.04, 10), '#c8c8c8');
    o.metal.add(tube(V3(-0.18, 0.47, -0.02), V3(-0.182, 0.48, -0.07), 0.042, 0.042, 12), '#d8d8d8');
    o.base.add(tube(V3(-0.12, 0.34, 0.06), V3(-0.12, 0.74, 0.22), 0.03), '#6a6a6a');
    o.base.add(tube(V3(0.12, 0.34, 0.06), V3(0.12, 0.74, 0.22), 0.03), '#6a6a6a');
    plate(o, -0.27, 0.62);
    // X tail light
    for (const sgn of [-1, 1]) o.light.add(box(0.2, 0.016, 0.02, 0, 0.78, -0.205, 0, 0, sgn * 0.45), '#ff1a1a');
    for (const s2 of [-1, 1]) o.light.add(box(0.04, 0.02, 0.03, s2 * 0.16, 0.74, -0.19), '#ffa000');
    forks(o, '#e0e0e0', '#1c1c1c', 0.08, 0.028);
    bars(o, 0.34, 0.12, 0.06);
    const h = o.forkTop;
    o.sp.add(slab([[h.z - 0.14, h.y + 0.08], [h.z + 0.04, h.y + 0.17], [h.z + 0.17, h.y + 0.1], [h.z + 0.13, h.y + 0.0], [h.z - 0.08, h.y + 0.0]], 0.52, 2, 0.03));
    o.sb.add(slab([[h.z - 0.1, h.y + 0.12], [h.z + 0.05, h.y + 0.17], [h.z + 0.08, h.y + 0.13], [h.z - 0.06, h.y + 0.1]], 0.24, 1, 0.005), '#0d0d0d');
    o.sl.add(box(0.16, 0.004, 0.06, 0, h.y + 0.17, h.z + 0.0, -0.35), '#7fd3ff');
    mirrors(o, o.sb);
    fender(o, o.sp, '#000', 0.14, 0.03, 0.075, 0.3, 2.2);
    o.seat = V3(0, 0.98, 0.3); o.peg = V3(0, 0.48, 0.8);
  },
  escooter(o) {
    Object.assign(o, { L: 1.25, r: 0.25, rf: 0.26, head: V3(0, 0.86, 1.0), wheel: 'scooter' });
    common(o);
    o.paint.add(slab([[0.84, 0.34], [0.96, 0.36], [1.16, 0.82], [1.1, 0.98], [0.98, 0.98], [0.88, 0.7], [0.8, 0.42]], 0.4, 1, 0.03));
    o.paint.add(slab([[-0.2, 0.78], [0.02, 0.84], [0.56, 0.82], [0.62, 0.56], [0.66, 0.36], [0.3, 0.34], [-0.1, 0.56]], 0.32, 1, 0.03));
    o.base.add(slab([[0.56, 0.3], [0.88, 0.3], [0.88, 0.42], [0.56, 0.42]], 0.36, 0, 0.02), '#1a1a1a');
    o.base.add(slab([[0.0, 0.84], [0.06, 0.9], [0.52, 0.91], [0.56, 0.84], [0.04, 0.82]], 0.3, 2, 0.03), '#151515');
    o.base.add(discX(0.13, 0.16, 0, 0.25, 0, 14), '#2c2c2c');
    o.base.add(tube(V3(-0.12, 0.3, 0.04), V3(-0.12, 0.72, 0.22), 0.03), '#6a6a6a');
    o.base.add(tube(V3(0.12, 0.3, 0.04), V3(0.14, 0.42, 0.5), 0.035), '#2a2a2a');
    plate(o, -0.26, 0.62);
    for (const s of [-1, 1]) o.light.add(slab([[0.84, 0.4], [1.13, 0.86], [1.12, 0.9], [0.83, 0.44]], 0.02, 0, 0, s * 0.205), '#3ff4ff');
    for (const s of [-1, 1]) o.light.add(slab([[0.0, 0.62], [0.58, 0.62], [0.58, 0.64], [0.0, 0.64]], 0.02, 0, 0, s * 0.165), '#3ff4ff');
    o.light.add(slab([[1.12, 0.84], [1.18, 0.82], [1.14, 0.74], [1.08, 0.76]], 0.26, 0, 0.005), '#f4fbff');
    o.light.add(box(0.26, 0.03, 0.03, 0, 0.8, -0.2), '#ff1a1a');
    forks(o, '#1a1a1a', '#1a1a1a', 0.08, 0.026);
    bars(o, 0.32, 0.1, 0.05);
    const h = o.forkTop;
    o.sp.add(slab([[h.z - 0.12, h.y + 0.06], [h.z + 0.06, h.y + 0.12], [h.z + 0.14, h.y + 0.05], [h.z - 0.06, h.y + 0.0]], 0.44, 0, 0.02));
    o.sl.add(box(0.2, 0.012, 0.02, 0, h.y + 0.11, h.z + 0.02), '#3ff4ff');
    fender(o, o.sp, '#000', 0.12, 0.03, 0.06, 0.3, 2.2);
    o.seat = V3(0, 0.95, 0.28); o.peg = V3(0, 0.42, 0.76);
  },
  trail(o) {
    Object.assign(o, { L: 1.42, r: 0.33, rf: 0.36, head: V3(0, 1.05, 1.1), wheel: 'spoke' });
    common(o);
    o.paint.add(slab([[0.56, 0.9], [0.66, 1.06], [0.88, 1.1], [1.06, 1.04], [1.1, 0.94], [0.92, 0.86], [0.66, 0.86]], 0.32, 2, 0.04));
    o.paint.add(slab([[0.9, 0.8], [1.1, 0.88], [1.18, 1.04], [1.02, 1.06], [0.92, 0.96]], 0.44, 1, 0.02));
    o.paint.add(slab([[0.0, 0.84], [0.3, 0.8], [0.48, 0.86], [0.42, 0.96], [0.04, 0.98]], 0.26, 1, 0.02));
    o.paint.add(slab([[-0.32, 0.98], [0.0, 0.96], [0.2, 0.98], [0.16, 1.04], [-0.3, 1.04]], 0.18, 1, 0.02));
    o.base.add(slab([[0.02, 1.0], [0.14, 1.05], [0.7, 1.07], [0.76, 0.98], [0.1, 0.96]], 0.26, 2, 0.03), '#1a1a1a');
    for (const s of [-1, 1]) {
      o.base.add(tube(V3(s * 0.07, 1.02, 1.08), V3(s * 0.12, 0.86, 0.6), 0.025), '#2a2a2a');
      o.base.add(tube(V3(s * 0.12, 0.86, 0.6), V3(s * 0.12, 0.5, 0.56), 0.025), '#2a2a2a');
    }
    o.base.add(tube(V3(0, 1.02, 1.08), V3(0, 0.4, 0.96), 0.032), '#2a2a2a');
    engine(o, 0.76, 0.5, 0.34, 0.3, '#3a3a3a', -0.2);
    o.base.add(box(0.24, 0.05, 0.36, 0, 0.3, 0.76), '#777');
    o.base.add(tube(V3(0.03, 0.62, 0.95), V3(0.14, 0.5, 0.8), 0.024), '#666');
    o.base.add(tube(V3(0.14, 0.5, 0.8), V3(0.16, 0.62, 0.42), 0.024), '#666');
    o.base.add(tube(V3(0.16, 0.62, 0.42), V3(0.17, 0.84, -0.06), 0.062, 0.055, 10), '#2f2f2f');
    swingarm(o, V3(0, 0.5, 0.58), '#8f8f8f');
    o.base.add(tube(V3(0, 0.52, 0.3), V3(0, 0.92, 0.56), 0.038), '#d4a017');
    o.base.add(tube(V3(-0.22, 0.48, 0.6), V3(0.22, 0.48, 0.6), 0.016), '#777');
    plate(o, -0.34, 0.76);
    tailLight(o, -0.3, 0.99, 0.1);
    forks(o, '#cfcfcf', '#1f1f1f', 0.1, 0.03);
    bars(o, 0.4, 0.1, 0.06, '#2a2a2a');
    for (const s of [-1, 1]) o.sb.add(slab([[o.grip.z - 0.02, o.grip.y - 0.04], [o.grip.z + 0.14, o.grip.y - 0.02], [o.grip.z + 0.12, o.grip.y + 0.06], [o.grip.z - 0.0, o.grip.y + 0.03]], 0.02, 1, 0, s * (o.grip.w - 0.04)), '#111');
    const h = o.forkTop;
    o.sp.add(slab([[h.z + 0.02, h.y - 0.12], [h.z + 0.12, h.y + 0.08], [h.z + 0.18, h.y + 0.06], [h.z + 0.18, h.y - 0.16], [h.z + 0.08, h.y - 0.2]], 0.24, 1, 0.02));
    o.sl.add(slab([[h.z + 0.18, h.y - 0.02], [h.z + 0.21, h.y - 0.03], [h.z + 0.21, h.y - 0.12], [h.z + 0.18, h.y - 0.12]], 0.13, 0, 0.005), '#fff6dc');
    mirrors(o, o.sb);
    // high front fender
    o.sp.add(slab([[o.L - 0.24, o.rf + 0.46], [o.L + 0.1, o.rf + 0.5], [o.L + 0.28, o.rf + 0.42], [o.L + 0.12, o.rf + 0.55], [o.L - 0.2, o.rf + 0.54]], 0.15, 1, 0.01));
    o.seat = V3(0, 1.1, 0.44); o.peg = V3(0, 0.48, 0.58);
  },
};

// ---------------------------------------------------------------------------
// Rider (two-bone legs, torso, arms) adapted to each bike's ergonomics
// ---------------------------------------------------------------------------
const _up = new THREE.Vector3(0, 1, 0);
function capsule(a, b, r, sx = 1, sz = 1, seg = 8) {
  const d = new THREE.Vector3().subVectors(b, a);
  const len = Math.max(0.01, d.length() - r * 0.6);
  const g = new THREE.CapsuleGeometry(r, len, 3, seg);
  g.scale(sx, 1, sz);
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(_up, d.normalize()));
  g.translate((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
  return g;
}

// ---------------------------------------------------------------------------
const modelCache = new Map();
export function getModel(spec) {
  if (modelCache.has(spec.id)) return modelCache.get(spec.id);
  const o = { paint: new Parts(), base: new Parts(), light: new Parts(), metal: new Parts(), sb: new Parts(), sp: new Parts(), sl: new Parts(), sm: new Parts() };
  BUILD[spec.type](o);
  const head = o.head.clone();
  const axis = new THREE.Vector3().subVectors(o.head, o.axleF).normalize();
  const steerGeo = (p) => { const g = p.build(); if (g) g.translate(-head.x, -head.y, -head.z); return g; };
  const rider = { hip: o.seat.clone(), grip: V3(0, o.grip.y, o.grip.z) };
  const ergo = { seat: o.seat.clone(), peg: o.peg.clone(), grip: { ...o.grip } };
  const m = {
    L: o.L, r: o.r, rf: o.rf, head, axis,
    axleF: o.axleF.clone(), axleR: o.axleR.clone(),
    paint: o.paint.build(), base: o.base.build(), light: o.light.build(), metal: o.metal.build(),
    sBase: steerGeo(o.sb), sPaint: steerGeo(o.sp), sLight: steerGeo(o.sl), sMet: steerGeo(o.sm),
    wheelR: buildWheel(o.r, spec.type === 'trail' ? 0.12 : spec.type === 'scooter' || spec.type === 'escooter' ? 0.11 : 0.1, o.wheel, true),
    wheelF: buildWheel(o.rf, spec.type === 'trail' ? 0.09 : spec.type === 'scooter' || spec.type === 'escooter' ? 0.1 : 0.09, o.wheel, !o.drum),
    rider, ergo,
  };
  // angle at which the tail/plate first touches the ground in a wheelie
  let sc = 1.6;
  for (const g of [m.paint, m.base, m.light]) {
    if (!g) continue;
    const P = g.attributes.position;
    for (let i = 0; i < P.count; i++) {
      const z = P.getZ(i), y = P.getY(i);
      if (z < -0.05) sc = Math.min(sc, Math.atan2(y, -z));
    }
  }
  m.scrape = sc;
  modelCache.set(spec.id, m);
  return m;
}

// ---------------------------------------------------------------------------
// Visual instance: root(yaw, pos) > lean > pivot(pitch) > model
// ---------------------------------------------------------------------------
const tmpQ = new THREE.Quaternion();
export class BikeVisual {
  constructor(spec, colors = {}, shadows = false) {
    this.spec = spec;
    this.m = getModel(spec);
    const m = this.m;
    this.paintMat = new THREE.MeshStandardMaterial({ color: colors.paint || spec.color, metalness: 0.45, roughness: 0.22, envMapIntensity: 1.25 });
    this.rimMat = new THREE.MeshStandardMaterial({ color: colors.rim || '#1a1a1a', metalness: 0.6, roughness: 0.35 });
    this.helmetMat = new THREE.MeshStandardMaterial({ color: colors.helmet || '#111', metalness: 0.3, roughness: 0.25 });
    this.jacketMat = new THREE.MeshStandardMaterial({ vertexColors: true, color: colors.jacket || '#1f2937', metalness: 0.05, roughness: 0.8 });
    this.root = new THREE.Group();
    this.lean = new THREE.Group();
    this.pivot = new THREE.Group();
    this.inner = new THREE.Group();
    this.root.add(this.lean); this.lean.add(this.pivot); this.pivot.add(this.inner);
    const mk = (geo, mat, parent) => {
      if (!geo) return null;
      const me = new THREE.Mesh(geo, mat);
      me.castShadow = shadows;
      parent.add(me);
      return me;
    };
    mk(m.paint, this.paintMat, this.inner);
    mk(m.base, MAT.base, this.inner);
    mk(m.light, MAT.light, this.inner);
    mk(m.metal, MAT.metal, this.inner);
    this.steer = new THREE.Group();
    this.steer.position.copy(m.head);
    this.inner.add(this.steer);
    mk(m.sBase, MAT.base, this.steer);
    mk(m.sPaint, this.paintMat, this.steer);
    mk(m.sLight, MAT.light, this.steer);
    mk(m.sMet, MAT.metal, this.steer);
    this.wf = new THREE.Group();
    this.wf.position.copy(m.axleF).sub(m.head);
    this.steer.add(this.wf);
    mk(m.wheelF.tire, MAT.base, this.wf);
    mk(m.wheelF.rim, this.rimMat, this.wf);
    mk(m.wheelF.metal, MAT.metal, this.wf);
    this.wr = new THREE.Group();
    this.wr.position.copy(m.axleR);
    this.inner.add(this.wr);
    mk(m.wheelR.tire, MAT.base, this.wr);
    mk(m.wheelR.rim, this.rimMat, this.wr);
    mk(m.wheelR.metal, MAT.metal, this.wr);
    // articulated rider (riderRoot is used for the crash tumble)
    this.riderRoot = new THREE.Group();
    this.inner.add(this.riderRoot);
    this.rig = new RiderRig(this.riderRoot, { jacket: this.jacketMat, base: MAT.base, helmet: this.helmetMat, metal: MAT.metal }, m.ergo, mk);
    this.pose = 0;
    this.wheelRot = 0;
    this.riderOff = false;
  }
  setColors(c) {
    if (c.paint) this.paintMat.color.set(c.paint);
    if (c.rim) this.rimMat.color.set(c.rim);
    if (c.helmet) this.helmetMat.color.set(c.helmet);
    if (c.jacket) this.jacketMat.color.set(c.jacket);
  }
  // s: {x,y,z,yaw,pitch,lean,steer,wheel}
  apply(s) {
    this.root.position.set(s.x, s.y, s.z);
    this.root.rotation.y = s.yaw;
    this.lean.rotation.z = -s.lean;
    const p = s.pitch;
    const pz = p < 0 ? this.m.L : 0;
    this.pivot.position.set(0, 0, pz);
    this.inner.position.set(0, 0, -pz);
    this.pivot.rotation.x = -p;
    tmpQ.setFromAxisAngle(this.m.axis, s.steer * 0.85);
    this.steer.quaternion.copy(tmpQ);
    this.wr.rotation.x = s.wheel / this.m.r;
    this.wf.rotation.x = s.wheel / this.m.rf;
    // rider: full-body pose with IK (tricks blend in)
    const t = s.trick || 0, b = s.tb || 0;
    if (t) this.pose = t;
    if (!b) this.pose = 0;
    this.rig.update(p, this.pose, this.pose ? b : 0, s.lean);
  }
  dispose() {
    this.paintMat.dispose(); this.rimMat.dispose(); this.helmetMat.dispose(); this.jacketMat.dispose();
    this.root.removeFromParent();
  }
}
