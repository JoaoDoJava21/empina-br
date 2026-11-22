import * as THREE from 'three';
import { GB, Parts, rng, slab, tube, V3, canvasTex, clamp } from './util.js';

export const C = 80, HR = 8, N = 7, W = N * C; // city 560 x 560 m
export const BEACH_X = W + HR;                    // 568: calçadão starts
export const SEA_X = 612;                         // crash beyond this
const CURB = 0.12;

const TIMES = {
  dia: { top: '#2f74d0', hor: '#cfe3f4', bot: '#8aa0b4', sun: '#fff4e0', sunEl: 0.95, sunAz: 2.4, sunI: 2.6, hemiS: '#d8ecff', hemiG: '#7a6a55', hemiI: 1.15, fog: '#c4d9ec', night: 0, deep: '#0d4f78', shallow: '#2aa7b8', exposure: 1.0 },
  tarde: { top: '#27467f', hor: '#ffb27a', bot: '#7a6f80', sun: '#ffb46a', sunEl: 0.22, sunAz: 3.4, sunI: 2.9, hemiS: '#ffe2c8', hemiG: '#5a4a60', hemiI: 1.2, fog: '#f0a989', night: 0, deep: '#183e66', shallow: '#3d8fa0', exposure: 1.05 },
  noite: { top: '#030812', hor: '#16233f', bot: '#0b1020', sun: '#9fb4ff', sunEl: 0.8, sunAz: 1.0, sunI: 0.35, hemiS: '#3b4f80', hemiG: '#141020', hemiI: 0.55, fog: '#121b30', night: 1, deep: '#04121f', shallow: '#0b2a3a', exposure: 1.15 },
};

export class World {
  constructor(scene, opts = {}) {
    this.scene = scene;
    this.q = opts.quality || 'medio';
    this.rand = rng(20261122);
    this.boxes = [];
    this.grid = new Map();
    this.ramps = [];
    this.t = 0;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.makeTextures();
    this.makeMaterials();
    this.buildSky();
    this.buildLights();
    const st = new GB(), walls = new GB(true), roads = new GB(true), mosaic = new GB(true);
    this.st = st; this.walls = walls; this.roads = roads; this.mosaic = mosaic;
    this.trees = []; this.palms = []; this.lamps = [];
    this.buildGroundAndRoads();
    this.buildBlocks();
    this.buildBeach();
    this.buildRamps();
    this.buildMountains();
    this.flush();
    this.buildInstances();
    this.buildTraffic(opts.cars ?? 16);
    this.buildMinimap();
    this.setTime('tarde');
  }

  // ------------------------------------------------------------------ textures
  makeTextures() {
    const R = rng(77);
    this.texWin = canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h);
      for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) {
        const px = x * 64, py = y * 64;
        g.fillStyle = '#d9d9d9'; g.fillRect(px, py + 54, 64, 10);
        g.fillStyle = '#c8c8c8'; g.fillRect(px + 10, py + 10, 44, 40);
        const v = 40 + R() * 40;
        g.fillStyle = `rgb(${v * 0.6},${v * 0.8},${v + 25})`;
        g.fillRect(px + 13, py + 13, 38, 34);
        g.fillStyle = 'rgba(255,255,255,0.18)'; g.fillRect(px + 13, py + 13, 38, 8);
        g.fillStyle = '#bdbdbd'; g.fillRect(px + 31, py + 13, 2, 34);
      }
    });
    this.texWinE = canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#000'; g.fillRect(0, 0, w, h);
      for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) {
        if (R() < 0.45) continue;
        const warm = R();
        g.fillStyle = warm < 0.7 ? `rgb(255,${190 + R() * 40},${110 + R() * 40})` : `rgb(${170 + R() * 40},${210},255)`;
        g.fillRect(x * 64 + 13, y * 64 + 13, 38, 34);
      }
    });
    this.texRoad = canvasTex(128, 256, (g, w, h) => {
      g.fillStyle = '#3b3d42'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 2200; i++) { const v = 45 + R() * 30; g.fillStyle = `rgb(${v},${v},${v + 4})`; g.fillRect(R() * w, R() * h, 1.5, 1.5); }
      g.fillStyle = '#e9e9e9'; g.fillRect(4, 0, 3, h); g.fillRect(w - 7, 0, 3, h);
      g.fillStyle = '#f2c230'; g.fillRect(w / 2 - 4, 0, 3, h); g.fillRect(w / 2 + 1, 0, 3, h);
      g.fillStyle = '#d8d8d8'; g.fillRect(w * 0.25 - 1, 0, 2, h * 0.5); g.fillRect(w * 0.75 - 1, 0, 2, h * 0.5);
    });
    this.texRoad.anisotropy = 8;
    this.texMosaic = canvasTex(128, 128, (g, w, h) => {
      g.fillStyle = '#f2efe6'; g.fillRect(0, 0, w, h);
      g.strokeStyle = '#151515'; g.lineWidth = 16;
      g.beginPath();
      for (let y = -32; y < h + 64; y += 64) {
        g.moveTo(0, y);
        for (let x = 0; x <= w; x += 4) g.lineTo(x, y + Math.sin((x / w) * Math.PI * 2) * 16);
      }
      g.stroke();
    });
    this.texGlow = canvasTex(64, 64, (g, w, h) => {
      const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      gr.addColorStop(0, 'rgba(255,210,140,0.9)'); gr.addColorStop(0.5, 'rgba(255,180,100,0.3)'); gr.addColorStop(1, 'rgba(255,160,80,0)');
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
    }, false);
    this.texBlob = canvasTex(64, 64, (g, w, h) => {
      const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      gr.addColorStop(0, 'rgba(0,0,0,0.6)'); gr.addColorStop(0.6, 'rgba(0,0,0,0.3)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
    }, false);
  }

  makeMaterials() {
    this.matStatic = new THREE.MeshLambertMaterial({ vertexColors: true });
    this.matWalls = new THREE.MeshLambertMaterial({ vertexColors: true, map: this.texWin, emissiveMap: this.texWinE, emissive: new THREE.Color('#ffffff'), emissiveIntensity: 0 });
    this.matRoad = new THREE.MeshLambertMaterial({ map: this.texRoad });
    this.matMosaic = new THREE.MeshLambertMaterial({ map: this.texMosaic });
    this.matMount = new THREE.MeshLambertMaterial({ vertexColors: true, fog: false });
    this.matBlob = new THREE.MeshBasicMaterial({ map: this.texBlob, transparent: true, depthWrite: false });
  }

  // ------------------------------------------------------------------ sky & light
  buildSky() {
    this.skyU = {
      top: { value: new THREE.Color() }, hor: { value: new THREE.Color() }, bot: { value: new THREE.Color() },
      sunDir: { value: new THREE.Vector3(0, 1, 0) }, sunCol: { value: new THREE.Color() }, night: { value: 0 },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.skyU, side: THREE.BackSide, depthWrite: false, fog: false,
      vertexShader: `varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.); gl_Position = p.xyww; }`,
      fragmentShader: `uniform vec3 top,hor,bot,sunCol,sunDir; uniform float night; varying vec3 vD;
        float h21(vec2 p){ return fract(sin(dot(p, vec2(41.3,289.1)))*43758.5453); }
        void main(){ vec3 d = normalize(vD); float h = d.y;
          vec3 c = h > 0. ? mix(hor, top, pow(clamp(h,0.,1.), 0.55)) : mix(hor, bot, pow(clamp(-h,0.,1.), 0.35));
          float s = max(dot(d, sunDir), 0.);
          c += sunCol * (pow(s, 900.) * 6. + pow(s, 12.) * 0.35 + pow(s,3.)*0.12) * (1. - night*0.6);
          if (night > 0.5 && h > 0.05) { vec2 g = floor(d.xz / (d.y+0.3) * 220.); float st = step(0.9965, h21(g)); c += vec3(st) * 0.9 * h; }
          gl_FragColor = vec4(c, 1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 12), mat);
    this.sky.scale.setScalar(1800);
    this.sky.frustumCulled = false;
    this.sky.renderOrder = -10;
    this.scene.add(this.sky);
  }

  buildLights() {
    this.hemi = new THREE.HemisphereLight('#ffffff', '#444444', 1);
    this.sun = new THREE.DirectionalLight('#ffffff', 2);
    this.sun.target = new THREE.Object3D();
    this.scene.add(this.hemi, this.sun, this.sun.target);
    this.scene.fog = new THREE.Fog('#ffffff', 80, 420);
  }

  setShadows(on, size = 1024) {
    this.sun.castShadow = on;
    if (on) {
      this.sun.shadow.mapSize.set(size, size);
      const c = this.sun.shadow.camera;
      c.left = -14; c.right = 14; c.top = 14; c.bottom = -14; c.near = 1; c.far = 120;
      c.updateProjectionMatrix();
      this.sun.shadow.bias = -0.0008;
      this.sun.shadow.normalBias = 0.03;
    }
    for (const m of [this.meshStatic, this.meshRoads, this.meshMosaic]) if (m) m.receiveShadow = on;
  }

  setFog(near, far) { this.scene.fog.near = near; this.scene.fog.far = far; }

  setTime(name) {
    const T = TIMES[name] || TIMES.tarde;
    this.timeName = name;
    this.T = T;
    this.skyU.top.value.set(T.top); this.skyU.hor.value.set(T.hor); this.skyU.bot.value.set(T.bot);
    this.skyU.sunCol.value.set(T.sun); this.skyU.night.value = T.night;
    const el = T.sunEl, az = T.sunAz;
    const dir = new THREE.Vector3(Math.cos(el) * Math.cos(az), Math.sin(el), Math.cos(el) * Math.sin(az)).normalize();
    this.sunDir = dir;
    this.skyU.sunDir.value.copy(dir);
    this.sun.color.set(T.sun); this.sun.intensity = T.sunI;
    this.hemi.color.set(T.hemiS); this.hemi.groundColor.set(T.hemiG); this.hemi.intensity = T.hemiI;
    this.scene.fog.color.set(T.fog);
    this.matWalls.emissiveIntensity = T.night ? 1.0 : 0;
    this.matMount.color.set(T.night ? '#3a4568' : name === 'tarde' ? '#e8c8c0' : '#ffffff');
    if (this.waterU) { this.waterU.deep.value.set(T.deep); this.waterU.shallow.value.set(T.shallow); this.waterU.sunCol.value.set(T.sun); this.waterU.sunDir.value.copy(dir); this.waterU.fogCol.value.set(T.fog); }
    if (this.lampHeads) this.lampHeads.material.color.set(T.night ? '#ffd89a' : '#9a9a9a');
    if (this.glows) this.glows.visible = !!T.night;
    if (this.carLights) this.carLights.material.color.set(T.night ? '#fff3c4' : '#d8d8d8');
  }

  // ------------------------------------------------------------------ collision
  addBox(x0, z0, x1, z1, kind = 'wall') {
    const b = { x0, z0, x1, z1, kind };
    this.boxes.push(b);
    const c0 = Math.floor(x0 / 16), c1 = Math.floor(x1 / 16), r0 = Math.floor(z0 / 16), r1 = Math.floor(z1 / 16);
    for (let i = c0; i <= c1; i++) for (let j = r0; j <= r1; j++) {
      const k = i * 1000 + j;
      if (!this.grid.has(k)) this.grid.set(k, []);
      this.grid.get(k).push(b);
    }
  }

  collide(x, z, r) {
    let best = null;
    const ci = Math.floor(x / 16), cj = Math.floor(z / 16);
    for (let i = ci - 1; i <= ci + 1; i++) for (let j = cj - 1; j <= cj + 1; j++) {
      const list = this.grid.get(i * 1000 + j);
      if (!list) continue;
      for (const b of list) {
        const px = clamp(x, b.x0, b.x1), pz = clamp(z, b.z0, b.z1);
        let dx = x - px, dz = z - pz;
        const d2 = dx * dx + dz * dz;
        if (d2 >= r * r) continue;
        let d = Math.sqrt(d2), nx, nz, depth;
        if (d < 1e-4) { // centre inside box: push out the shortest way
          const l = x - b.x0, rr = b.x1 - x, t = z - b.z0, bb = b.z1 - z;
          const m = Math.min(l, rr, t, bb);
          if (m === l) { nx = -1; nz = 0; } else if (m === rr) { nx = 1; nz = 0; } else if (m === t) { nx = 0; nz = -1; } else { nx = 0; nz = 1; }
          depth = m + r;
        } else { nx = dx / d; nz = dz / d; depth = r - d; }
        if (!best || depth > best.depth) best = { nx, nz, depth, kind: b.kind };
      }
    }
    // world bounds
    const minX = -70, maxX = 660, minZ = -70, maxZ = W + 70;
    if (x < minX + r) best = { nx: 1, nz: 0, depth: minX + r - x, kind: 'wall' };
    if (x > maxX - r) best = { nx: -1, nz: 0, depth: x - (maxX - r), kind: 'wall' };
    if (z < minZ + r) best = { nx: 0, nz: 1, depth: minZ + r - z, kind: 'wall' };
    if (z > maxZ - r) best = { nx: 0, nz: -1, depth: z - (maxZ - r), kind: 'wall' };
    return best;
  }

  baseHeight(x, z) {
    if (x > 596) return -(x - 596) * 0.02;
    if (x > BEACH_X && x < BEACH_X + 12 && z > -HR && z < W + HR) return CURB; // calçadão
    if (x <= 0 || x >= W || z <= 0 || z >= W) return 0;
    const i = Math.floor(x / C), j = Math.floor(z / C);
    const fx = x - i * C, fz = z - j * C;
    if (fx > HR && fx < C - HR && fz > HR && fz < C - HR) {
      if (i === 3 && j === 3) return 0; // plaza / skatepark
      return CURB;
    }
    return 0;
  }

  groundHeight(x, z) {
    let h = this.baseHeight(x, z);
    for (const r of this.ramps) {
      const dx = x - r.x, dz = z - r.z;
      if (dx * dx + dz * dz > r.rad2) continue;
      const u = dx * r.s + dz * r.c, s = dx * r.c - dz * r.s;
      if (u < 0 || u > r.len || Math.abs(s) > r.w / 2) continue;
      h = Math.max(h, r.base + r.prof(u));
    }
    return h;
  }

  isWater(x) { return x > SEA_X; }

  // ------------------------------------------------------------------ city
  buildGroundAndRoads() {
    const st = this.st, rd = this.roads;
    const grass = new THREE.Color('#5d7a3a'), grass2 = new THREE.Color('#4f6b32');
    // big ground (west of the beach)
    st.quad([-1400, -0.06, -1400], [BEACH_X, -0.06, -1400], [BEACH_X, -0.06, 1960], [-1400, -0.06, 1960], [0, 1, 0], [grass2, grass, grass, grass2]);
    // roads along z (x = i*C) and along x (z = j*C)
    const len = 8;
    for (let i = 0; i <= N; i++) {
      const xc = i * C;
      for (let j = 0; j < N; j++) {
        const z0 = j * C + HR, z1 = (j + 1) * C - HR;
        rd.quad([xc - HR, 0, z0], [xc + HR, 0, z0], [xc + HR, 0, z1], [xc - HR, 0, z1], [0, 1, 0], new THREE.Color(1, 1, 1),
          [[0, z0 / len], [1, z0 / len], [1, z1 / len], [0, z1 / len]]);
        rd.quad([z0, 0, xc - HR], [z0, 0, xc + HR], [z1, 0, xc + HR], [z1, 0, xc - HR], [0, 1, 0], new THREE.Color(1, 1, 1),
          [[0, z0 / len], [1, z0 / len], [1, z1 / len], [0, z1 / len]]);
      }
      // road stubs leaving the grid
      for (const [a, b] of [[-70, -HR], [W + HR, W + 70]]) {
        rd.quad([xc - HR, 0, a], [xc + HR, 0, a], [xc + HR, 0, b], [xc - HR, 0, b], [0, 1, 0], new THREE.Color(1, 1, 1), [[0, a / len], [1, a / len], [1, b / len], [0, b / len]]);
        if (a < 0) rd.quad([a, 0, xc - HR], [a, 0, xc + HR], [b, 0, xc + HR], [b, 0, xc - HR], [0, 1, 0], new THREE.Color(1, 1, 1), [[0, a / len], [1, a / len], [1, b / len], [0, b / len]]);
      }
      // intersections (plain asphalt part of the texture)
      for (let j = 0; j <= N; j++) {
        const zc = j * C, u = [0.3, 0.6];
        rd.quad([xc - HR, 0, zc - HR], [xc + HR, 0, zc - HR], [xc + HR, 0, zc + HR], [xc - HR, 0, zc + HR], [0, 1, 0], new THREE.Color(1, 1, 1), [u, u, u, u]);
        // zebra crossings
        const white = new THREE.Color('#e8e8e8');
        for (let k = -3; k <= 3; k++) {
          const o = k * 2.0;
          for (const s of [-1, 1]) {
            st.rect(xc + o - 0.5, zc + s * (HR + 0.4), xc + o + 0.5, zc + s * (HR + 2.6), 0.015, white);
            st.rect(zc + s * (HR + 0.4), xc + o - 0.5, zc + s * (HR + 2.6), xc + o + 0.5, 0.015, white);
          }
        }
      }
    }
    // distance marks for the wheelie strip on the beach avenue (x = W)
    const y = new THREE.Color('#ffd400');
    for (let z = 40; z < W; z += 50) st.rect(W - HR + 0.5, z - 0.4, W + HR - 0.5, z + 0.4, 0.016, y);
  }

  buildBlocks() {
    const R = this.rand;
    const pal = ['#e8e2d4', '#d9cbb0', '#c9b79c', '#f0ece2', '#b8c4cc', '#d8a48f', '#e6d690', '#a8c8b8', '#cfa7a0', '#9fb0c8', '#ededed', '#c26a4a', '#8fb3d9', '#e0b0c0'];
    const special = { '3,3': 'plaza', '1,5': 'park', '5,1': 'park', '4,5': 'soccer', '2,2': 'park' };
    const side = new THREE.Color('#b3b0a6'), curb = new THREE.Color('#8d8a82');
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
      const x0 = i * C + HR, x1 = (i + 1) * C - HR, z0 = j * C + HR, z1 = (j + 1) * C - HR;
      const type = special[`${i},${j}`] || (i === N - 1 ? 'beachfront' : 'city');
      if (type === 'plaza') { this.buildPlaza(x0, z0, x1, z1); continue; }
      this.st.box(x0, -0.05, z0, x1, CURB, z1, side, 0.75, true);
      this.st.quad([x0, CURB, z0], [x1, CURB, z0], [x1, CURB - 0.001, z0 + 0.25], [x0, CURB - 0.001, z0 + 0.25], [0, 1, 0], curb);
      // lamps along the sidewalks
      for (let t = 10; t < 64; t += 26) {
        this.lamps.push([x0 + t, z0 + 0.7, Math.PI]);
        this.lamps.push([x0 + 0.7, z0 + t, -Math.PI / 2]);
        if (i === N - 1) this.lamps.push([x1 - 0.7, z0 + t, Math.PI / 2]);
        if (j === N - 1) this.lamps.push([x0 + t, z1 - 0.7, 0]);
      }
      if (type === 'park') {
        this.st.rect(x0 + 3.5, z0 + 3.5, x1 - 3.5, z1 - 3.5, CURB + 0.01, new THREE.Color('#5f8f3a'));
        this.st.rect(x0 + 3.5, (z0 + z1) / 2 - 1.5, x1 - 3.5, (z0 + z1) / 2 + 1.5, CURB + 0.02, new THREE.Color('#c9b48a'));
        for (let k = 0; k < 16; k++) {
          const tx = x0 + 6 + R() * 52, tz = z0 + 6 + R() * 52;
          if (Math.abs(tz - (z0 + z1) / 2) < 3) continue;
          this.trees.push([tx, CURB, tz, 0.8 + R() * 0.6]);
          this.addBox(tx - 0.35, tz - 0.35, tx + 0.35, tz + 0.35, 'tree');
        }
        continue;
      }
      if (type === 'soccer') {
        const g = new THREE.Color('#3f8f3a'), w = new THREE.Color('#f2f2f2');
        this.st.rect(x0 + 3, z0 + 3, x1 - 3, z1 - 3, CURB + 0.01, g);
        const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
        this.st.rect(x0 + 6, cz - 0.15, x1 - 6, cz + 0.15, CURB + 0.02, w);
        for (const zz of [z0 + 6, z1 - 6]) this.st.rect(x0 + 6, zz - 0.15, x1 - 6, zz + 0.15, CURB + 0.02, w);
        for (const xx of [x0 + 6, x1 - 6]) this.st.rect(xx - 0.15, z0 + 6, xx + 0.15, z1 - 6, CURB + 0.02, w);
        for (let a = 0; a < 24; a++) {
          const a0 = (a / 24) * Math.PI * 2, a1 = ((a + 1) / 24) * Math.PI * 2;
          this.st.rect(cx + Math.cos(a0) * 7 - 0.15, cz + Math.sin(a0) * 7 - 0.15, cx + Math.cos(a0) * 7 + 0.15, cz + Math.sin(a0) * 7 + 0.15, CURB + 0.02, w);
        }
        for (const zz of [z0 + 6, z1 - 6]) {
          for (const xx of [cx - 3.6, cx + 3.6]) this.st.box(xx - 0.06, CURB, zz - 0.06, xx + 0.06, CURB + 2.4, zz + 0.06, w, 0.9);
          this.st.box(cx - 3.6, CURB + 2.34, zz - 0.06, cx + 3.6, CURB + 2.46, zz + 0.06, w, 0.9);
        }
        continue;
      }
      // lots with buildings
      const nx = 2 + (R() < 0.5 ? 1 : 0), nz = 2 + (R() < 0.5 ? 1 : 0);
      const ix0 = x0 + 3.5, iz0 = z0 + 3.5, iw = x1 - x0 - 7, id = z1 - z0 - 7;
      const dc = Math.hypot(i - 3, j - 3);
      for (let a = 0; a < nx; a++) for (let b = 0; b < nz; b++) {
        if (R() < 0.08) continue;
        const bx0 = ix0 + (iw / nx) * a + 0.8, bx1 = ix0 + (iw / nx) * (a + 1) - 0.8;
        const bz0 = iz0 + (id / nz) * b + 0.8, bz1 = iz0 + (id / nz) * (b + 1) - 0.8;
        let h;
        if (type === 'beachfront') h = 24 + R() * 34;
        else h = Math.max(7, (1 - dc / 5) * 48 * (0.4 + R() * 0.8) + 6 + R() * 8);
        h = Math.round(h / 3.5) * 3.5;
        this.building(bx0, bz0, bx1, bz1, h, new THREE.Color(pal[Math.floor(R() * pal.length)]), R);
      }
      // a few sidewalk trees
      if (R() < 0.6) for (let t = 6; t < 64; t += 16) {
        this.trees.push([x0 + t, CURB, z0 + 2, 0.7 + R() * 0.3]);
        this.addBox(x0 + t - 0.3, z0 + 1.7, x0 + t + 0.3, z0 + 2.3, 'tree');
      }
    }
  }

  building(x0, z0, x1, z1, h, col, R) {
    const wl = this.walls, y0 = CURB;
    const dark = col.clone().multiplyScalar(0.62);
    const cs = [dark, dark, col, col];
    const u = (a) => a / 16, v = (a) => a / 14;
    const W1 = x1 - x0, D1 = z1 - z0;
    wl.quad([x0, y0, z0], [x1, y0, z0], [x1, y0 + h, z0], [x0, y0 + h, z0], [0, 0, -1], cs, [[0, 0], [u(W1), 0], [u(W1), v(h)], [0, v(h)]]);
    wl.quad([x1, y0, z1], [x0, y0, z1], [x0, y0 + h, z1], [x1, y0 + h, z1], [0, 0, 1], cs, [[0, 0], [u(W1), 0], [u(W1), v(h)], [0, v(h)]]);
    wl.quad([x0, y0, z1], [x0, y0, z0], [x0, y0 + h, z0], [x0, y0 + h, z1], [-1, 0, 0], cs, [[0, 0], [u(D1), 0], [u(D1), v(h)], [0, v(h)]]);
    wl.quad([x1, y0, z0], [x1, y0, z1], [x1, y0 + h, z1], [x1, y0 + h, z0], [1, 0, 0], cs, [[0, 0], [u(D1), 0], [u(D1), v(h)], [0, v(h)]]);
    const roof = col.clone().multiplyScalar(0.55).lerp(new THREE.Color('#77736c'), 0.6);
    this.st.rect(x0, z0, x1, z1, y0 + h, roof);
    // parapet
    const p = col.clone().multiplyScalar(0.85);
    this.st.box(x0, y0 + h, z0, x1, y0 + h + 0.6, z0 + 0.3, p, 1);
    this.st.box(x0, y0 + h, z1 - 0.3, x1, y0 + h + 0.6, z1, p, 1);
    // rooftop water tank (caixa d'água)
    if (R() < 0.55) {
      const cx = x0 + 2 + R() * (W1 - 5), cz = z0 + 2 + R() * (D1 - 5);
      this.st.box(cx, y0 + h, cz, cx + 2.2, y0 + h + 1.6, cz + 2.2, new THREE.Color(R() < 0.5 ? '#2d6cdf' : '#d8d8d8'), 0.8);
    }
    // shop awnings on the ground floor
    if (R() < 0.5) {
      const aw = new THREE.Color(['#d6302f', '#2f8f4e', '#f0b429', '#2563eb'][Math.floor(R() * 4)]);
      this.st.quad([x0 + 1, y0 + 3.2, z0], [x1 - 1, y0 + 3.2, z0], [x1 - 1, y0 + 2.6, z0 - 1.4], [x0 + 1, y0 + 2.6, z0 - 1.4], [0, 1, -0.3], aw);
    }
    this.addBox(x0, z0, x1, z1);
  }

  buildPlaza(x0, z0, x1, z1) {
    const st = this.st;
    st.rect(x0, z0, x1, z1, 0.005, new THREE.Color('#a3a29c'));
    const line = new THREE.Color('#8a8983');
    for (let x = x0; x <= x1; x += 8) st.rect(x - 0.06, z0, x + 0.06, z1, 0.008, line);
    for (let z = z0; z <= z1; z += 8) st.rect(x0, z - 0.06, x1, z + 0.06, 0.008, line);
    // graffiti-ish coloured patches
    const cols = ['#ff4fa3', '#00c2ff', '#ffd400', '#7c3aed', '#22c55e'];
    for (let k = 0; k < 7; k++) {
      const cx = x0 + 6 + this.rand() * 52, cz = z0 + 6 + this.rand() * 52;
      st.rect(cx, cz, cx + 3 + this.rand() * 4, cz + 2 + this.rand() * 3, 0.01, new THREE.Color(cols[k % cols.length]));
    }
    for (const [x, z] of [[x0 + 1, z0 + 1], [x1 - 1, z0 + 1], [x0 + 1, z1 - 1], [x1 - 1, z1 - 1]]) this.lamps.push([x, z, 0]);
  }

  buildBeach() {
    const st = this.st;
    const sand = new THREE.Color('#e4cf9b'), sandW = new THREE.Color('#c7ad78');
    // calçadão mosaic strip
    const m = this.mosaic, z0 = -HR, z1 = W + HR;
    const xa = BEACH_X, xb = BEACH_X + 12;
    m.quad([xa, CURB, z0], [xb, CURB, z0], [xb, CURB, z1], [xa, CURB, z1], [0, 1, 0], new THREE.Color(1, 1, 1),
      [[0, z0 / 6], [2, z0 / 6], [2, z1 / 6], [0, z1 / 6]]);
    st.box(xa, -0.05, z0, xb, CURB - 0.002, z1, new THREE.Color('#9b978e'), 0.8, false);
    // sand + slope into the sea (z extends past the city)
    const za = -400, zb = W + 400;
    st.quad([xb, 0, za], [596, 0, za], [596, 0, zb], [xb, 0, zb], [0, 1, 0], sand);
    st.quad([596, 0, za], [680, -1.68, za], [680, -1.68, zb], [596, 0, zb], [0, 1, 0], [sand, sandW, sandW, sand]);
    st.quad([BEACH_X - 0.01, -0.06, za], [xb, 0, za], [xb, 0, z0], [BEACH_X - 0.01, -0.06, z0], [0, 1, 0], sand);
    st.quad([BEACH_X - 0.01, -0.06, z1], [xb, 0, z1], [xb, 0, zb], [BEACH_X - 0.01, -0.06, zb], [0, 1, 0], sand);
    // palms & kiosks
    for (let z = -60; z < W + 60; z += 17) this.palms.push([BEACH_X + 14 + (z % 3), 0, z, 0.85 + ((z * 7) % 5) / 12]);
    for (let z = 30; z < W; z += 120) {
      st.box(BEACH_X + 16, 0, z, BEACH_X + 20, 2.6, z + 4, new THREE.Color('#f7f3e8'), 0.85);
      st.box(BEACH_X + 15.4, 2.6, z - 0.6, BEACH_X + 20.6, 2.9, z + 4.6, new THREE.Color('#2f9e44'), 0.9);
      this.addBox(BEACH_X + 16, z, BEACH_X + 20, z + 4);
    }
    // beach umbrellas
    const um = ['#ff5a5f', '#ffd400', '#00b4d8', '#ff8c00'];
    for (let k = 0; k < 40; k++) {
      const x = 584 + this.rand() * 10, z = -50 + this.rand() * (W + 100);
      const c = new THREE.Color(um[k % 4]);
      const g = new THREE.ConeGeometry(1.4, 0.6, 8); g.translate(x, 2.1, z);
      st.addGeo(g, c);
      st.addGeo(tube(V3(x, 0, z), V3(x, 2.0, z), 0.04), '#eeeeee');
    }
    // water
    this.waterU = {
      time: { value: 0 }, deep: { value: new THREE.Color() }, shallow: { value: new THREE.Color() }, sunCol: { value: new THREE.Color() },
      sunDir: { value: new THREE.Vector3() }, fogCol: { value: new THREE.Color() }, fogFar: { value: 700 },
    };
    const wm = new THREE.ShaderMaterial({
      uniforms: this.waterU, transparent: false,
      vertexShader: `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: `uniform float time, fogFar; uniform vec3 deep, shallow, sunCol, sunDir, fogCol; varying vec3 vW;
        void main(){
          float d = clamp((vW.x - 606.0) / 140.0, 0., 1.);
          vec3 col = mix(shallow, deep, sqrt(d));
          float w1 = sin(vW.x*0.21 + time*1.3) * sin(vW.z*0.13 - time*0.8);
          float w2 = sin((vW.x*0.7 + vW.z*0.5) + time*2.3) * 0.5;
          vec3 N = normalize(vec3((w1 + w2) * 0.08, 1., cos(vW.z*0.17 + time) * 0.06));
          vec3 V = normalize(cameraPosition - vW);
          float spec = pow(max(dot(reflect(-sunDir, N), V), 0.), 60.);
          float fres = pow(1. - max(V.y, 0.), 4.);
          col = mix(col, fogCol, fres * 0.5) + sunCol * spec * 1.3;
          float shore = 609.5 + sin(vW.z * 0.07 + time * 0.9) * 1.2;
          float foam = smoothstep(2.6, 0.0, abs(vW.x - shore)) * (0.6 + 0.4 * sin(vW.z * 0.9 + time * 3.));
          col = mix(col, vec3(0.95), foam * 0.7);
          float f = smoothstep(80., fogFar, length(cameraPosition - vW));
          col = mix(col, fogCol, f);
          gl_FragColor = vec4(col, 1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    });
    const wg = new THREE.PlaneGeometry(2200, 3000, 1, 1);
    wg.rotateX(-Math.PI / 2);
    wg.translate(605 + 1100, -0.32, W / 2);
    this.water = new THREE.Mesh(wg, wm);
    this.group.add(this.water);
  }

  addRamp(x, z, yaw, len, w, h, kind, color) {
    const base = this.baseHeight(x, z);
    let prof, pts;
    if (kind === 'kicker') {
      const a = len - 1.4;
      prof = (u) => (u < a ? (h * u) / a : u < a + 0.4 ? h : h * Math.max(0, (len - u) / 1.0));
      pts = [[0, 0], [a, h], [a + 0.4, h], [len, 0]];
    } else {
      const a = len * 0.32, b = len * 0.62;
      prof = (u) => (u < a ? (h * u) / a : u < b ? h : (h * (len - u)) / (len - b));
      pts = [[0, 0], [a, h], [b, h], [len, 0]];
    }
    const s = Math.sin(yaw), c = Math.cos(yaw);
    this.ramps.push({ x, z, s, c, len, w, h, base, prof, rad2: (len + w) * (len + w) });
    const g = slab(pts, w, 0, 0);
    g.translate(0, 0.004, 0);
    g.rotateY(yaw);
    g.translate(x, base, z);
    this.st.addGeo(g, color);
    // stripes on the slope edges
    const sg = slab([[0, 0.01], [pts[1][0], pts[1][1] + 0.01], [pts[1][0], pts[1][1] + 0.03], [0, 0.03]], 0.25, 0, 0, w / 2 - 0.15);
    const sg2 = sg.clone();
    sg2.translate(-(w - 0.3), 0, 0);
    for (const q of [sg, sg2]) { q.rotateY(yaw); q.translate(x, base, z); this.st.addGeo(q, '#202020'); }
  }

  buildRamps() {
    const y = '#e0b23c', g = '#9aa3ad', o = '#ff7a1a';
    // skatepark (block 3,3) x/z 248..312
    this.addRamp(256, 250, 0, 6, 4, 1.0, 'kicker', y);
    this.addRamp(300, 250, 0, 8, 5, 1.8, 'kicker', o);
    this.addRamp(262, 286, Math.PI / 2, 18, 6, 1.5, 'table', g);
    this.addRamp(290, 310, Math.PI, 7, 4, 1.4, 'kicker', y);
    this.addRamp(250, 300, Math.PI / 2, 6, 4, 1.2, 'kicker', o);
    this.addRamp(308, 270, -Math.PI / 2, 9, 5, 1.6, 'table', g);
    // beach mega ramps (on the sand, x ~ 580..595)
    this.addRamp(588, 90, 0, 14, 8, 3.4, 'kicker', o);
    this.addRamp(588, 250, 0, 10, 6, 2.2, 'kicker', y);
    this.addRamp(588, 380, 0, 26, 8, 2.8, 'table', g);
    this.addRamp(588, 540, Math.PI, 12, 7, 3.0, 'kicker', o);
  }

  // ------------------------------------------------------------------ mountains & favela
  mtnH(th, rho) {
    const n = 0.55 + 0.25 * Math.sin(th * 3.1 + 1.3) + 0.15 * Math.sin(th * 7.3 + 0.4) + 0.08 * Math.sin(th * 17.0);
    const east = Math.cos(th) > 0.35 ? 0.45 : 1; // islands over the sea
    const hmax = 200 * n * east;
    const prof = [[560, -6], [660, 0.3], [760, 0.85], [880, 1], [1000, 0.75], [1200, 0.35]];
    for (let i = 0; i < prof.length - 1; i++) {
      const [r0, a] = prof[i], [r1, b] = prof[i + 1];
      if (rho <= r1) { const t = clamp((rho - r0) / (r1 - r0), 0, 1); return i === 0 ? -6 + t * (0.3 * hmax + 6) : hmax * (a + (b - a) * t); }
    }
    return hmax * 0.35;
  }

  buildMountains() {
    const gb = new GB();
    const cx = W / 2, cz = W / 2, seg = 120, rings = [560, 610, 660, 710, 760, 820, 880, 940, 1000, 1100, 1200];
    const col = (h, th) => {
      const c = new THREE.Color('#3d6b35').lerp(new THREE.Color('#2a4d2a'), clamp(Math.sin(th * 13) * 0.5 + 0.5, 0, 1) * 0.6);
      if (h > 120) c.lerp(new THREE.Color('#7d7a72'), clamp((h - 120) / 70, 0, 1));
      return c;
    };
    const P = (th, r) => { const h = this.mtnH(th, r); return [[cx + Math.cos(th) * r, h, cz + Math.sin(th) * r], col(h, th)]; };
    for (let i = 0; i < seg; i++) {
      const t0 = (i / seg) * Math.PI * 2, t1 = ((i + 1) / seg) * Math.PI * 2;
      for (let k = 0; k < rings.length - 1; k++) {
        const a = P(t0, rings[k]), b = P(t1, rings[k]), c = P(t1, rings[k + 1]), d = P(t0, rings[k + 1]);
        gb.quad(a[0], b[0], c[0], d[0], [cx - (a[0][0] + c[0][0]) / 2, 400, cz - (a[0][2] + c[0][2]) / 2], [a[1], b[1], c[1], d[1]]);
      }
    }
    // favela on the western slopes
    const R = rng(4242);
    const fcol = ['#d9534f', '#f0ad4e', '#5bc0de', '#f7f7f7', '#c49a6c', '#e57373', '#ffd54f', '#81c784', '#b0855f', '#9e9e9e'];
    for (let k = 0; k < 1100; k++) {
      const th = Math.PI * (0.62 + R() * 0.62);
      const rho = 650 + R() * 160;
      const h = this.mtnH(th, rho);
      if (h < 2 || h > 150) continue;
      const x = cx + Math.cos(th) * rho, z = cz + Math.sin(th) * rho;
      const s = 4 + R() * 4, hh = 3 + R() * 6;
      gb.box(x - s / 2, h - 3, z - s / 2, x + s / 2, h + hh, z + s / 2, new THREE.Color(fcol[Math.floor(R() * fcol.length)]), 0.7);
    }
    this.mount = new THREE.Mesh(gb.geometry(), this.matMount);
    this.group.add(this.mount);
  }

  flush() {
    this.meshStatic = new THREE.Mesh(this.st.geometry(), this.matStatic);
    this.meshWalls = new THREE.Mesh(this.walls.geometry(), this.matWalls);
    this.meshRoads = new THREE.Mesh(this.roads.geometry(), this.matRoad);
    this.meshMosaic = new THREE.Mesh(this.mosaic.geometry(), this.matMosaic);
    this.group.add(this.meshStatic, this.meshWalls, this.meshRoads, this.meshMosaic);
    for (const m of [this.meshStatic, this.meshWalls, this.meshRoads, this.meshMosaic, this.mount]) { m.matrixAutoUpdate = false; m.updateMatrix(); }
  }

  // ------------------------------------------------------------------ instanced props
  buildInstances() {
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), col = new THREE.Color();
    const R = rng(99);
    // trees
    const trunkG = new THREE.CylinderGeometry(0.18, 0.28, 3, 5); trunkG.translate(0, 1.5, 0);
    const crownG = new THREE.IcosahedronGeometry(2.0, 0); crownG.translate(0, 4.1, 0);
    const trunk = new THREE.InstancedMesh(trunkG, new THREE.MeshLambertMaterial({ color: '#6b4a2f' }), this.trees.length);
    const crown = new THREE.InstancedMesh(crownG, new THREE.MeshLambertMaterial({ color: '#ffffff', flatShading: true }), this.trees.length);
    this.trees.forEach(([x, y, z, sc], i) => {
      q.setFromAxisAngle(V3(0, 1, 0), R() * 6.28); s.set(sc, sc * (0.9 + R() * 0.3), sc); p.set(x, y, z);
      m4.compose(p, q, s); trunk.setMatrixAt(i, m4); crown.setMatrixAt(i, m4);
      col.set('#3f7a2e').lerp(new THREE.Color('#6a9a2e'), R()); crown.setColorAt(i, col);
    });
    // palms
    const ptG = new THREE.CylinderGeometry(0.14, 0.24, 7, 6); ptG.translate(0, 3.5, 0);
    ptG.applyMatrix4(new THREE.Matrix4().makeShear(0, 0, 0.12, 0, 0, 0));
    const leaves = new Parts();
    for (let k = 0; k < 7; k++) {
      const a = (k / 7) * Math.PI * 2;
      const g = new THREE.ConeGeometry(0.45, 3.4, 4); g.scale(1, 1, 0.25); g.rotateZ(-Math.PI / 2 + 0.45); g.translate(1.5, 6.6, 0); g.rotateY(a);
      leaves.add(g, '#ffffff');
    }
    const lg = leaves.build(); lg.translate(0.84, 0.3, 0);
    const palmT = new THREE.InstancedMesh(ptG, new THREE.MeshLambertMaterial({ color: '#8a6a45' }), this.palms.length);
    const palmL = new THREE.InstancedMesh(lg, new THREE.MeshLambertMaterial({ vertexColors: true, color: '#3f8a2a', side: THREE.DoubleSide }), this.palms.length);
    this.palms.forEach(([x, y, z, sc], i) => {
      q.setFromAxisAngle(V3(0, 1, 0), R() * 6.28); s.setScalar(sc); p.set(x, y, z);
      m4.compose(p, q, s); palmT.setMatrixAt(i, m4); palmL.setMatrixAt(i, m4);
    });
    // street lamps
    const lampG = new Parts();
    lampG.add(new THREE.CylinderGeometry(0.07, 0.1, 7, 6).translate(0, 3.5 + CURB, 0), '#5a5f66');
    lampG.add(tube(V3(0, 6.9 + CURB, 0), V3(0, 7.1 + CURB, -2.2), 0.05), '#5a5f66');
    const lamp = new THREE.InstancedMesh(lampG.build(), new THREE.MeshLambertMaterial({ vertexColors: true }), this.lamps.length);
    const headG = new THREE.BoxGeometry(0.4, 0.12, 0.7); headG.translate(0, 7.05 + CURB, -2.3);
    const heads = new THREE.InstancedMesh(headG, new THREE.MeshBasicMaterial({ color: '#9a9a9a' }), this.lamps.length);
    const glowG = new THREE.PlaneGeometry(9, 9); glowG.rotateX(-Math.PI / 2); glowG.translate(0, 0.03, -2.6);
    const glows = new THREE.InstancedMesh(glowG, new THREE.MeshBasicMaterial({ map: this.texGlow, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }), this.lamps.length);
    this.lamps.forEach(([x, z, ry], i) => {
      q.setFromAxisAngle(V3(0, 1, 0), ry); s.setScalar(1); p.set(x, 0, z);
      m4.compose(p, q, s); lamp.setMatrixAt(i, m4); heads.setMatrixAt(i, m4); glows.setMatrixAt(i, m4);
    });
    this.lampHeads = heads; this.glows = glows;
    glows.renderOrder = 2;
    for (const im of [trunk, crown, palmT, palmL, lamp, heads, glows]) { im.computeBoundingSphere(); this.group.add(im); }
    this.palmT = palmT;
    for (const [x, , z] of this.palms) this.addBox(x - 0.3, z - 0.3, x + 0.3, z + 0.3, 'tree');
  }

  // ------------------------------------------------------------------ traffic
  buildTraffic(n) {
    const g = new GB();
    const white = new THREE.Color('#ffffff'), glass = new THREE.Color('#2a3138'), black = new THREE.Color('#151515'), chrome = new THREE.Color('#9a9a9a');
    g.box(-0.9, 0.3, -2.1, 0.9, 0.95, 2.1, white, 0.7);
    g.box(-0.78, 0.95, -1.15, 0.78, 1.45, 0.75, glass, 0.9);
    g.box(-0.8, 1.45, -1.05, 0.8, 1.5, 0.65, white, 1);
    g.box(-0.92, 0.25, 2.05, 0.92, 0.45, 2.15, chrome, 1);
    g.box(-0.92, 0.25, -2.15, 0.92, 0.45, -2.05, chrome, 1);
    for (const sx of [-0.85, 0.85]) for (const sz of [-1.35, 1.35]) g.box(sx - 0.12, 0, sz - 0.33, sx + 0.12, 0.62, sz + 0.33, black, 1);
    const lg = new GB();
    for (const sx of [-0.62, 0.62]) { lg.box(sx - 0.18, 0.65, 2.1, sx + 0.18, 0.8, 2.13, white, 1); }
    const tl = new GB();
    for (const sx of [-0.62, 0.62]) tl.box(sx - 0.18, 0.65, -2.13, sx + 0.18, 0.8, -2.1, new THREE.Color('#ff2020'), 1);
    this.cars = [];
    const R = rng(555);
    const cc = ['#e8e8e8', '#1c1c1c', '#9aa0a6', '#b91c1c', '#1e40af', '#f5f5f5', '#6b7280', '#facc15', '#0f766e'];
    this.carMesh = new THREE.InstancedMesh(g.geometry(), new THREE.MeshLambertMaterial({ vertexColors: true }), n);
    this.carLights = new THREE.InstancedMesh(lg.geometry(), new THREE.MeshBasicMaterial({ color: '#d8d8d8' }), n);
    this.carTail = new THREE.InstancedMesh(tl.geometry(), new THREE.MeshBasicMaterial({ vertexColors: true }), n);
    for (let k = 0; k < n; k++) {
      const axis = k % 2 ? 'x' : 'z';
      const road = 1 + Math.floor(R() * (N - 1));
      const dir = R() < 0.5 ? 1 : -1;
      const car = { axis, road, dir, pos: R() * W, speed: 9 + R() * 6, cur: 0, x: 0, z: 0, yaw: 0 };
      car.cur = car.speed;
      this.cars.push(car);
      this.carMesh.setColorAt(k, new THREE.Color(cc[Math.floor(R() * cc.length)]));
    }
    for (const im of [this.carMesh, this.carLights, this.carTail]) { im.frustumCulled = false; this.group.add(im); }
    this.updateTraffic(0, null);
  }

  updateTraffic(dt, player) {
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1), up = V3(0, 1, 0);
    this.cars.forEach((c, i) => {
      let target = c.speed;
      if (player) {
        const fx = c.axis === 'x' ? c.dir : 0, fz = c.axis === 'z' ? c.dir : 0;
        const dx = player.x - c.x, dz = player.z - c.z;
        const along = dx * fx + dz * fz, across = Math.abs(dx * fz - dz * fx);
        if (along > 1 && along < 12 && across < 2.2) target = 0;
      }
      c.cur += clamp(target - c.cur, -8 * dt, 3 * dt);
      c.pos += c.cur * c.dir * dt;
      if (c.pos > W + 60) c.pos = -60; if (c.pos < -60) c.pos = W + 60;
      const lane = 3.6;
      if (c.axis === 'z') { c.x = c.road * C - c.dir * lane; c.z = c.pos; c.yaw = c.dir > 0 ? 0 : Math.PI; }
      else { c.z = c.road * C + c.dir * lane; c.x = c.pos; c.yaw = c.dir > 0 ? Math.PI / 2 : -Math.PI / 2; }
      q.setFromAxisAngle(up, c.yaw); p.set(c.x, 0, c.z);
      m4.compose(p, q, one);
      this.carMesh.setMatrixAt(i, m4); this.carLights.setMatrixAt(i, m4); this.carTail.setMatrixAt(i, m4);
    });
    this.carMesh.instanceMatrix.needsUpdate = true; this.carLights.instanceMatrix.needsUpdate = true; this.carTail.instanceMatrix.needsUpdate = true;
  }

  carHit(x, z, y) {
    if (y > 1.6) return null;
    for (const c of this.cars) {
      const dx = x - c.x, dz = z - c.z;
      if (dx * dx + dz * dz > 16) continue;
      const fx = Math.sin(c.yaw), fz = Math.cos(c.yaw);
      const along = dx * fx + dz * fz, across = dx * fz - dz * fx;
      if (Math.abs(along) < 2.5 && Math.abs(across) < 1.25) return { car: c, nx: Math.abs(along) > 2.1 ? fx * Math.sign(along) : fz * Math.sign(across), nz: Math.abs(along) > 2.1 ? fz * Math.sign(along) : -fx * Math.sign(across) };
    }
    return null;
  }

  // ------------------------------------------------------------------ minimap
  buildMinimap() {
    const S = 256, ext = 720, ox = -80, oz = -80;
    this.mm = { S, ext, ox, oz };
    const cv = document.createElement('canvas'); cv.width = cv.height = S;
    const g = cv.getContext('2d');
    const k = S / ext;
    g.fillStyle = '#3e5a2c'; g.fillRect(0, 0, S, S);
    g.fillStyle = '#e4cf9b'; g.fillRect((BEACH_X - ox) * k, 0, S, S);
    g.fillStyle = '#2a8fb0'; g.fillRect((SEA_X - ox) * k, 0, S, S);
    g.fillStyle = '#55585e';
    for (let i = 0; i <= N; i++) {
      g.fillRect((i * C - HR - ox) * k, (-70 - oz) * k, 2 * HR * k, (W + 140) * k);
      g.fillRect((-70 - ox) * k, (i * C - HR - oz) * k, (W + 140) * k, 2 * HR * k);
    }
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
      const t = (i === 3 && j === 3) ? '#c9c7bf' : ((i === 1 && j === 5) || (i === 5 && j === 1) || (i === 2 && j === 2) || (i === 4 && j === 5)) ? '#5f8f3a' : '#8b8577';
      g.fillStyle = t;
      g.fillRect((i * C + HR - ox) * k, (j * C + HR - oz) * k, (C - 2 * HR) * k, (C - 2 * HR) * k);
    }
    g.fillStyle = '#ff7a1a';
    for (const r of this.ramps) g.fillRect((r.x - ox) * k - 2, (r.z - oz) * k - 2, 4, 4);
    this.mmCanvas = cv;
  }

  update(dt, player, camPos) {
    this.t += dt;
    if (this.waterU) this.waterU.time.value = this.t;
    this.updateTraffic(dt, player);
    if (camPos) this.sky.position.copy(camPos);
  }
}
