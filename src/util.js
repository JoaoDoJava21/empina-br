import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
const UP = new THREE.Vector3(0, 1, 0);

// Deterministic RNG (mulberry32) – the city must be identical for every player online
export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, k, dt) => b + (a - b) * Math.exp(-k * dt);

// cylinder between two points (radius r1 at a, r2 at b)
export function tube(a, b, r1, r2 = r1, seg = 6) {
  const d = new THREE.Vector3().subVectors(b, a);
  const len = Math.max(0.0001, d.length());
  const g = new THREE.CylinderGeometry(r2, r1, len, seg, 1);
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(UP, d.normalize()));
  g.translate((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
  return g;
}

export function box(w, h, d, x, y, z, rx = 0, ry = 0, rz = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (rx) g.rotateX(rx);
  if (ry) g.rotateY(ry);
  if (rz) g.rotateZ(rz);
  g.translate(x, y, z);
  return g;
}

export function sphere(r, x, y, z, sx = 1, sy = 1, sz = 1, seg = 10) {
  const g = new THREE.SphereGeometry(r, seg, Math.max(5, Math.round(seg * 0.65)));
  g.scale(sx, sy, sz);
  g.translate(x, y, z);
  return g;
}

// disc / cylinder whose axis is X (wheels, hubs, engine covers)
export function discX(r, w, x, y, z, seg = 14) {
  const g = new THREE.CylinderGeometry(r, r, w, seg, 1);
  g.rotateZ(Math.PI / 2);
  g.translate(x, y, z);
  return g;
}
// disc facing forward (+z) – headlights
export function discZ(r, w, x, y, z, seg = 14) {
  const g = new THREE.CylinderGeometry(r, r, w, seg, 1);
  g.rotateX(Math.PI / 2);
  g.translate(x, y, z);
  return g;
}

export function chaikin(pts, it) {
  for (let k = 0; k < it; k++) {
    const out = [];
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i], q = pts[(i + 1) % pts.length];
      out.push([p[0] * 0.75 + q[0] * 0.25, p[1] * 0.75 + q[1] * 0.25]);
      out.push([p[0] * 0.25 + q[0] * 0.75, p[1] * 0.25 + q[1] * 0.75]);
    }
    pts = out;
  }
  return pts;
}

// Side profile [[z,y],...] extruded sideways (X) with a given width, centred at x.
export function slab(pts, width, smooth = 2, bevel = 0.025, x = 0) {
  const p = smooth ? chaikin(pts, smooth) : pts;
  const shape = new THREE.Shape(p.map(([z, y]) => new THREE.Vector2(z, y)));
  const depth = Math.max(0.002, width - bevel * 2);
  const g = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel * 0.8,
    bevelSegments: 2,
    curveSegments: 3,
  });
  g.rotateY(-Math.PI / 2);
  g.translate(depth / 2 + x, 0, 0);
  return g;
}

// ring segment in the z/y plane (fenders), angles: 0 = forward, PI/2 = up
export function arcPts(cz, cy, r1, r2, a0, a1, n = 8) {
  const out = [];
  for (let i = 0; i <= n; i++) {
    const a = a0 + ((a1 - a0) * i) / n;
    out.push([cz + Math.cos(a) * r2, cy + Math.sin(a) * r2]);
  }
  for (let i = n; i >= 0; i--) {
    const a = a0 + ((a1 - a0) * i) / n;
    out.push([cz + Math.cos(a) * r1, cy + Math.sin(a) * r1]);
  }
  return out;
}

// Collects geometries with a flat vertex colour and merges them into one draw call
export class Parts {
  constructor() { this.list = []; }
  add(geo, color = '#ffffff') {
    let g = geo.index ? geo.toNonIndexed() : geo;
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal') g.deleteAttribute(k);
    g.clearGroups();
    const c = new THREE.Color(color);
    const n = g.attributes.position.count;
    const a = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(a, 3));
    this.list.push(g);
    return this;
  }
  get empty() { return this.list.length === 0; }
  build() {
    if (!this.list.length) return null;
    const m = mergeGeometries(this.list, false);
    m.computeBoundingSphere();
    return m;
  }
}

// Low level triangle builder (with optional uv) – used for the city
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _n = new THREE.Vector3();
export class GB {
  constructor(useUV = false) { this.p = []; this.n = []; this.c = []; this.uv = useUV ? [] : null; }
  _v(v, n, c, uv) {
    this.p.push(v[0], v[1], v[2]); this.n.push(n.x, n.y, n.z); this.c.push(c.r, c.g, c.b);
    if (this.uv) this.uv.push(uv ? uv[0] : 0, uv ? uv[1] : 0);
  }
  // quad a,b,c,d (any winding) – outward normal hint fixes winding. cols: Color or [4 Colors]
  quad(a, b, c, d, hint, cols, uvs) {
    _a.set(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    _b.set(c[0] - a[0], c[1] - a[1], c[2] - a[2]);
    _n.crossVectors(_a, _b).normalize();
    let V = [a, b, c, d], C = Array.isArray(cols) ? cols : [cols, cols, cols, cols], U = uvs || [null, null, null, null];
    if (_n.x * hint[0] + _n.y * hint[1] + _n.z * hint[2] < 0) {
      V = [a, d, c, b]; C = [C[0], C[3], C[2], C[1]]; U = [U[0], U[3], U[2], U[1]]; _n.negate();
    }
    const n = _n.clone();
    this._v(V[0], n, C[0], U[0]); this._v(V[1], n, C[1], U[1]); this._v(V[2], n, C[2], U[2]);
    this._v(V[0], n, C[0], U[0]); this._v(V[2], n, C[2], U[2]); this._v(V[3], n, C[3], U[3]);
  }
  // flat horizontal rectangle
  rect(x0, z0, x1, z1, y, col, uv) {
    this.quad([x0, y, z0], [x1, y, z0], [x1, y, z1], [x0, y, z1], [0, 1, 0], col, uv);
  }
  // axis aligned box. opts.bottomDark: AO gradient, opts.noBottom
  box(x0, y0, z0, x1, y1, z1, col, shade = 0.78, top = true) {
    const cb = col.clone().multiplyScalar(shade);
    const cs = [cb, cb, col, col];
    this.quad([x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0], [0, 0, -1], cs);
    this.quad([x1, y0, z1], [x0, y0, z1], [x0, y1, z1], [x1, y1, z1], [0, 0, 1], cs);
    this.quad([x0, y0, z1], [x0, y0, z0], [x0, y1, z0], [x0, y1, z1], [-1, 0, 0], cs);
    this.quad([x1, y0, z0], [x1, y0, z1], [x1, y1, z1], [x1, y1, z0], [1, 0, 0], cs);
    if (top) this.rect(x0, z0, x1, z1, y1, col);
  }
  addGeo(geo, color) {
    let g = geo.index ? geo.toNonIndexed() : geo;
    const P = g.attributes.position, Nn = g.attributes.normal;
    const c = new THREE.Color(color);
    for (let i = 0; i < P.count; i++) {
      this.p.push(P.getX(i), P.getY(i), P.getZ(i));
      this.n.push(Nn.getX(i), Nn.getY(i), Nn.getZ(i));
      this.c.push(c.r, c.g, c.b);
      if (this.uv) this.uv.push(0, 0);
    }
  }
  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3));
    if (this.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.computeBoundingSphere();
    return g;
  }
}

export function canvasTex(w, h, draw, repeat = true) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  t.anisotropy = 4;
  return t;
}
