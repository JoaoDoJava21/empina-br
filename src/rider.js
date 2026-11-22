import * as THREE from 'three';
import { Parts, V3, box, sphere } from './util.js';

// ---------------------------------------------------------------------------
// Articulated rider: segments are posed every frame with two-bone IK so the
// hands/feet always land on the grips/pegs of each bike, the head is
// stabilised to the horizon, and tricks are full-body poses.
// Segments are built hanging along -Y from their joint.
// ---------------------------------------------------------------------------
const L = { thigh: 0.44, shin: 0.43, upper: 0.3, fore: 0.29, torso: 0.5 };
const DOWN = new THREE.Vector3(0, -1, 0), UP = new THREE.Vector3(0, 1, 0);

function capsuleY(r, len, seg = 10, from = 0) {
  // capsule hanging from y=from down to y=from-len
  const g = new THREE.CapsuleGeometry(r, Math.max(0.01, len - r * 2), 4, seg);
  g.translate(0, from - len / 2, 0);
  return g;
}

let GEO = null;
function buildGeo() {
  if (GEO) return GEO;
  const jeans = '#2d4a74', jeansDark = '#223a5c', skin = '#b9805a', W = '#ffffff';
  // torso (jacket, tinted by jacketMat) grows along +Y
  const torso = new Parts();
  const chest = new THREE.CylinderGeometry(0.175, 0.145, 0.42, 14, 3);
  chest.translate(0, 0.25, 0); chest.scale(1.18, 1, 0.68);
  torso.add(chest, W);
  const sh = new THREE.CapsuleGeometry(0.085, 0.26, 4, 10); sh.rotateZ(Math.PI / 2); sh.translate(0, 0.45, -0.005); sh.scale(1, 1, 0.85);
  torso.add(sh, W);
  const collar = new THREE.TorusGeometry(0.075, 0.028, 6, 14); collar.rotateX(Math.PI / 2); collar.translate(0, 0.51, 0.0);
  torso.add(collar, '#d8d8d8');
  torso.add(box(0.014, 0.4, 0.012, 0, 0.27, 0.118), '#3a3a3a'); // zipper
  torso.add(box(0.05, 0.04, 0.012, 0.09, 0.4, 0.112), '#e0e0e0'); // chest patch
  const hem = new THREE.CylinderGeometry(0.15, 0.15, 0.05, 14); hem.translate(0, 0.04, 0); hem.scale(1.18, 1, 0.7);
  torso.add(hem, '#9a9a9a');
  for (const s of [-1, 1]) torso.add(box(0.012, 0.3, 0.06, s * 0.2, 0.3, 0), '#cfcfcf'); // side panels
  // pelvis (jeans + belt)
  const pelvis = new Parts();
  pelvis.add(sphere(0.155, 0, 0.0, 0, 1.12, 0.72, 0.85, 12), jeans);
  const belt = new THREE.CylinderGeometry(0.152, 0.152, 0.035, 14); belt.translate(0, 0.07, 0); belt.scale(1.12, 1, 0.82);
  pelvis.add(belt, '#151515');
  // head (helmet shell / visor / details)
  const shell = new Parts(), visor = new Parts(), hd = new Parts();
  shell.add(sphere(0.15, 0, 0.0, 0, 0.94, 1.0, 1.1, 16));
  shell.add(sphere(0.105, 0, -0.075, 0.07, 1.15, 0.72, 0.95, 12)); // chin bar
  shell.add(box(0.06, 0.03, 0.08, 0, 0.13, -0.08, 0.3)); // rear spoiler
  const vis = new THREE.SphereGeometry(0.153, 14, 6, Math.PI * 0.18, Math.PI * 0.64, Math.PI * 0.38, Math.PI * 0.2);
  vis.scale(0.95, 1.0, 1.11);
  visor.add(vis, '#0c121a');
  const stripe = new THREE.TorusGeometry(0.152, 0.012, 4, 24, Math.PI); stripe.rotateY(Math.PI / 2); stripe.scale(1, 1.0, 1.1);
  hd.add(stripe, '#f2f2f2');
  hd.add(new THREE.CylinderGeometry(0.055, 0.06, 0.12, 8).translate(0, -0.15, -0.01), skin);
  hd.add(new THREE.CylinderGeometry(0.135, 0.13, 0.03, 14).translate(0, -0.135, 0.0), '#111'); // helmet rim
  // arms (jacket tinted; black stays black under the tint)
  const upper = new Parts();
  upper.add(capsuleY(0.06, L.upper + 0.04, 10, 0.02), W);
  const fore = new Parts();
  fore.add(capsuleY(0.052, L.fore - 0.02, 10, 0.01), W);
  fore.add(new THREE.CylinderGeometry(0.052, 0.052, 0.04, 10).translate(0, -L.fore + 0.03, 0), '#111');
  fore.add(sphere(0.052, 0, -L.fore - 0.03, 0.01, 0.8, 1.15, 0.95, 8), '#141414'); // glove
  fore.add(box(0.04, 0.05, 0.03, 0.025, -L.fore - 0.03, 0.035), '#141414'); // thumb
  // legs (jeans + sneakers)
  const thigh = new Parts();
  thigh.add(capsuleY(0.08, L.thigh + 0.05, 10, 0.03), jeans);
  const shin = new Parts();
  shin.add(capsuleY(0.064, L.shin + 0.02, 10, 0.02), jeans);
  shin.add(new THREE.CylinderGeometry(0.066, 0.07, 0.05, 10).translate(0, -L.shin + 0.03, 0), jeansDark);
  // sneaker: white sole, light upper, red accent (no brand)
  shin.add(box(0.11, 0.035, 0.29, 0, -L.shin - 0.07, 0.06), '#f4f4f4');
  shin.add(sphere(0.07, 0, -L.shin - 0.03, 0.06, 0.78, 0.55, 1.95, 10), '#e6e6e6');
  shin.add(box(0.112, 0.02, 0.12, 0, -L.shin - 0.035, 0.09), '#d32f2f');
  shin.add(box(0.06, 0.012, 0.1, 0, -L.shin + 0.005, 0.1), '#222'); // laces
  GEO = { torso: torso.build(), pelvis: pelvis.build(), shell: shell.build(), visor: visor.build(), hd: hd.build(), upper: upper.build(), fore: fore.build(), thigh: thigh.build(), shin: shin.build() };
  return GEO;
}

// two-bone IK: returns joint position (knee/elbow) and writes the reachable end into end
const _ax = new THREE.Vector3(), _pp = new THREE.Vector3();
function ik(A, T, l1, l2, pole, outJ, end) {
  _ax.subVectors(T, A);
  let d = _ax.length();
  if (d < 1e-4) { _ax.set(0, -1, 0); d = 1e-4; } else _ax.divideScalar(d);
  const dd = Math.min(d, (l1 + l2) * 0.995);
  const a = (l1 * l1 - l2 * l2 + dd * dd) / (2 * dd);
  const h = Math.sqrt(Math.max(0, l1 * l1 - a * a));
  _pp.copy(pole).addScaledVector(_ax, -pole.dot(_ax));
  if (_pp.lengthSq() < 1e-6) _pp.set(0, 0, 1);
  _pp.normalize();
  outJ.copy(A).addScaledVector(_ax, a).addScaledVector(_pp, h);
  end.copy(A).addScaledVector(_ax, dd);
}
const _d = new THREE.Vector3();
function aimDown(obj, from, to) {
  obj.position.copy(from);
  _d.subVectors(to, from);
  if (_d.lengthSq() < 1e-8) return;
  obj.quaternion.setFromUnitVectors(DOWN, _d.normalize());
}

export class RiderRig {
  constructor(parent, mats, ergo, mk) {
    const g = buildGeo();
    this.ergo = ergo;
    this.root = new THREE.Group();
    parent.add(this.root);
    const seg = (geo, mat) => { const o = new THREE.Group(); this.root.add(o); mk(geo, mat, o); return o; };
    this.torso = seg(g.torso, mats.jacket);
    this.pelvis = seg(g.pelvis, mats.base);
    this.head = new THREE.Group(); this.root.add(this.head);
    mk(g.shell, mats.helmet, this.head); mk(g.visor, mats.metal, this.head); mk(g.hd, mats.base, this.head);
    this.arms = [-1, 1].map(() => ({ up: seg(g.upper, mats.jacket), fo: seg(g.fore, mats.jacket) }));
    this.legs = [-1, 1].map(() => ({ th: seg(g.thigh, mats.base), sh: seg(g.shin, mats.base) }));
    // scratch vectors
    this.v = Array.from({ length: 24 }, () => new THREE.Vector3());
    this.q = new THREE.Quaternion();
    this.m4 = new THREE.Matrix4();
  }

  // p: visual pitch, trick id + blend, lean
  update(p, trick, pb, lean) {
    const e = this.ergo, v = this.v;
    const U = v[0].set(0, Math.cos(p), Math.sin(p));          // world up in bike space
    const F = v[1].set(0, -Math.sin(p), Math.cos(p));         // world forward in bike space
    const gripC = v[2].set(0, e.grip.y, e.grip.z);
    // ---- base pose (seated)
    const P = v[3].set(0, e.seat.y + 0.05, e.seat.z - 0.02);
    const T = v[4].set(0, e.grip.y + 0.3, e.grip.z - 0.14).sub(P).normalize();
    const dir = v[5].copy(T).lerp(U, Math.min(0.45, Math.max(0, p) * 0.45)).normalize();
    const hands = [v[6].set(-(e.grip.w - 0.05), e.grip.y + 0.01, e.grip.z), v[7].set(e.grip.w - 0.05, e.grip.y + 0.01, e.grip.z)];
    const feet = [v[8].set(-0.19, e.peg.y + 0.1, e.peg.z - 0.04), v[9].set(0.19, e.peg.y + 0.1, e.peg.z - 0.04)];
    const legPole = v[10].set(0, 0.35, 1).normalize();
    // ---- trick pose, blended in
    if (trick && pb > 0) {
      const tP = v[11], tDir = v[12], tH0 = v[13], tH1 = v[14], tF0 = v[15], tF1 = v[16], tPole = v[17];
      tP.copy(P); tDir.copy(dir); tH0.copy(hands[0]); tH1.copy(hands[1]); tF0.copy(feet[0]); tF1.copy(feet[1]); tPole.copy(legPole);
      const shoulder = (P0, D0, s, out) => out.copy(P0).addScaledVector(D0, L.torso - 0.06).add(_d.set(s * 0.2, 0, 0));
      if (trick === 1) { // no hands: upright, arms up in the air
        tDir.copy(U).multiplyScalar(0.85).addScaledVector(F, 0.15).normalize();
        shoulder(tP, tDir, -1, tH0).addScaledVector(U, 0.52).add(_d.set(-0.3, 0, 0)).addScaledVector(F, 0.06);
        shoulder(tP, tDir, 1, tH1).addScaledVector(U, 0.52).add(_d.set(0.3, 0, 0)).addScaledVector(F, 0.06);
      } else if (trick === 2) { // superman: body and legs stretched out behind, hands on the bars
        tP.copy(gripC).addScaledVector(F, -0.78).addScaledVector(U, 0.06);
        tDir.subVectors(gripC, tP).normalize();
        tF0.copy(tP).addScaledVector(F, -0.86).addScaledVector(U, 0.1).add(_d.set(-0.16, 0, 0));
        tF1.copy(tP).addScaledVector(F, -0.86).addScaledVector(U, 0.1).add(_d.set(0.16, 0, 0));
        tPole.copy(U).negate();
      } else if (trick === 3) { // surf: standing on the seat, arms out for balance
        tF0.set(-0.13, e.seat.y - 0.0, e.seat.z + 0.02);
        tF1.set(0.13, e.seat.y - 0.0, e.seat.z - 0.08);
        tP.addVectors(tF0, tF1).multiplyScalar(0.5).addScaledVector(U, 0.8).addScaledVector(F, 0.06);
        tDir.copy(U).addScaledVector(F, 0.18).normalize();
        shoulder(tP, tDir, -1, tH0).add(_d.set(-0.58, 0, 0)).addScaledVector(U, 0.06);
        shoulder(tP, tDir, 1, tH1).add(_d.set(0.58, 0, 0)).addScaledVector(U, 0.06);
        tPole.copy(F);
      }
      P.lerp(tP, pb); dir.lerp(tDir, pb).normalize();
      hands[0].lerp(tH0, pb); hands[1].lerp(tH1, pb); feet[0].lerp(tF0, pb); feet[1].lerp(tF1, pb);
      legPole.lerp(tPole, pb).normalize();
    }
    // ---- torso & pelvis
    this.torso.position.copy(P);
    this.torso.quaternion.setFromUnitVectors(UP, dir);
    this.torso.rotateZ(lean * 0.2);
    this.pelvis.position.copy(P);
    this.pelvis.quaternion.copy(this.torso.quaternion);
    // ---- head: sits on the torso, looks at the horizon
    const neck = v[18].copy(P).addScaledVector(dir, L.torso + 0.02);
    this.head.position.copy(neck).addScaledVector(U, 0.17).addScaledVector(F, 0.03);
    const right = v[19].crossVectors(U, F).normalize();
    this.m4.makeBasis(right, U, F);
    this.head.quaternion.setFromRotationMatrix(this.m4);
    this.head.rotateZ(lean * 0.35);
    // ---- arms
    const J = v[20], end = v[21];
    for (let i = 0; i < 2; i++) {
      const s = i ? 1 : -1;
      const S = v[22].copy(P).addScaledVector(dir, L.torso - 0.06).add(_d.set(s * 0.21, 0, 0));
      const pole = v[23].set(s * 0.9, -0.55, -0.35).normalize();
      ik(S, hands[i], L.upper, L.fore, pole, J, end);
      aimDown(this.arms[i].up, S, J);
      aimDown(this.arms[i].fo, J, end);
    }
    // ---- legs
    for (let i = 0; i < 2; i++) {
      const s = i ? 1 : -1;
      const H = v[22].copy(P).add(_d.set(s * 0.1, -0.05, 0));
      const pole = v[23].copy(legPole).add(_d.set(s * 0.25, 0, 0)).normalize();
      ik(H, feet[i], L.thigh, L.shin, pole, J, end);
      aimDown(this.legs[i].th, H, J);
      aimDown(this.legs[i].sh, J, end);
    }
  }
}
