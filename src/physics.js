import { clamp } from './util.js';
import { getModel } from './bikes.js';

// ---------------------------------------------------------------------------
// Motorcycle simulation
//  - engine torque curve + real gearbox (manual or automatic), clutch with
//    flywheel energy (clutch dump), CVT for scooters, electric motor curve
//  - pitch = rigid body rotating about the rear contact patch (wheelie) or the
//    front contact patch (stoppie). Torque comes from longitudinal acceleration
//    acting on the centre of mass vs gravity -> a true balance point.
//  - rear fender scrape, tricks that move the centre of mass, flips in the air
// ---------------------------------------------------------------------------
const G = 9.81;
export const TRICKS = ['', 'SEM MÃO', 'SUPERMAN', 'SURF NO BANCO'];

const ENGINE = {
  naked: { red: 10500, gears: 6 },
  sport: { red: 11500, gears: 6 },
  street: { red: 9000, gears: 5 },
  cub: { red: 8500, gears: 4 },
  trail: { red: 9000, gears: 5 },
  scooter: { red: 8800, gears: 0 },
  escooter: { red: 6000, gears: 0 },
};
const IDLE = 1300;

function torque(n) {
  // normalised rpm -> normalised torque, peak around 60% of the redline
  if (n > 1.02) return 0;
  return clamp(1 - 1.25 * (n - 0.6) * (n - 0.6), 0.32, 1);
}

export class BikePhysics {
  constructor(spec, up = {}, easy = false) {
    this.easy = easy;
    this.auto = true;
    this.setSpec(spec, up);
    this.reset(0, 0, 0);
    this.events = [];
  }

  setSpec(spec, up = {}) {
    this.spec = spec;
    this.up = { motor: up.motor || 0, grau: up.grau || 0, freio: up.freio || 0 };
    const m = getModel(spec);
    this.L = m.L;
    this.scrapeAng = clamp(m.scrape || spec.bp + 0.35, spec.bp + 0.18, 1.5);
    const e = ENGINE[spec.type] || ENGINE.naked;
    this.red = e.red;
    this.nG = e.gears;
    this.cvt = spec.type === 'scooter';
    this.electric = !!spec.electric;
    this.vtop = (spec.top / 3.6) * (1 + 0.07 * this.up.motor);
    this.A1 = spec.accel * (1 + 0.12 * this.up.motor);
    // speed at redline for each gear (1st ~ 33% of top speed)
    this.vg = [];
    for (let g = 1; g <= this.nG; g++) this.vg[g] = this.vtop * (0.33 + 0.71 * Math.pow((g - 1) / Math.max(1, this.nG - 1), 0.92));
    // aero drag tuned so that top speed is reached in top gear
    const aTop = this.nG ? this.A1 * (this.vg[1] / this.vg[this.nG]) * torque(this.vtop / this.vg[this.nG]) : this.A1 * 0.18;
    this.cd = Math.max(0.0005, (aTop - 0.25) / (this.vtop * this.vtop));
    if (this.gear > this.nG) this.gear = Math.max(1, this.nG);
  }

  reset(x, z, yaw) {
    Object.assign(this, {
      x, z, y: 0, vy: 0, yaw, v: 0, steer: 0, lean: 0, pitch: 0, pitchV: 0, tp: 0,
      grounded: true, wheel: 0, rpm: IDLE, gear: 1, clutch: 0, prevClutch: false, freeRpm: IDLE,
      dump: 0, dumpT: 0, crashed: false, crashT: 0, airT: 0, flipBase: 0, throttle: 0, thrF: 0,
      fbP: 0, rbP: 0, scraping: false, scrapeT: 0, overT: 0, limiter: false,
      trick: 0, trickBlend: 0, lockThr: 0, noise: 0, noiseT: 0, a: 0,
    });
  }
  emit(type, data = {}) { this.events.push({ type, ...data }); }

  crash(reason) {
    if (this.crashed) return;
    this.crashed = true;
    this.crashT = 0;
    this.crashV = this.v;
    this.crashReason = reason;
    this.trick = 0;
    this.emit('crash', { reason });
  }

  shift(d) {
    if (!this.nG || this.crashed) return;
    const g = clamp(this.gear + d, 1, this.nG);
    if (g === this.gear) return;
    if (d < 0 && (this.v / this.vg[g]) * this.red > this.red * 1.06) { this.emit('deny'); return; }
    this.gear = g;
    this.emit('shift', { gear: g });
  }

  get gearRatio() { return this.nG ? this.vg[1] / this.vg[this.gear] : 1; }

  step(dt, inp, world) {
    const s = this.spec;
    if (this.crashed) {
      this.crashT += dt;
      this.v = Math.max(0, this.v - 8 * dt);
      this.x += Math.sin(this.yaw) * this.v * dt;
      this.z += Math.cos(this.yaw) * this.v * dt;
      this.y = Math.max(world.groundHeight(this.x, this.z), this.y - 6 * dt);
      this.lean += (1.35 * Math.sign(this.lean || 1) - this.lean) * Math.min(1, dt * 5);
      this.pitch += (0 - this.pitch) * Math.min(1, dt * 6);
      this.rpm += (IDLE - this.rpm) * dt * 3;
      this.scraping = false;
      return;
    }

    // ---- tricks (need to be in a wheelie or in the air)
    const inWheelie = this.grounded ? this.pitch > 0.22 : this.airT > 0.15;
    const want = inWheelie || this.trick ? inp.trick || 0 : 0;
    if (want !== this.trick) {
      if (want && !this.trick) { this.lockThr = this.thrF; this.emit('trick', { t: want }); }
      this.trick = want;
    }
    this.trickBlend = clamp(this.trickBlend + (this.trick ? dt : -dt) / 0.35, 0, 1);

    // ---- controls (pressure ramps give modulation on touch buttons)
    let thrIn = clamp(inp.throttle, 0, 1);
    if (this.trick === 1) thrIn = this.lockThr; // hands off the bars
    this.thrF += (thrIn - this.thrF) * Math.min(1, dt * 14);
    const thr = this.thrF;
    this.throttle = thr;
    const handsOff = this.trick === 1 || this.trick === 3;
    this.fbP = clamp(this.fbP + (inp.fbrake && !handsOff ? dt / 0.8 : -dt / 0.12), 0, 1);
    this.rbP = clamp(this.rbP + (inp.brake && this.trick !== 3 ? dt / 0.25 : -dt / 0.12), 0, 1);
    if (inp.shiftUp) { this.shift(1); inp.shiftUp = false; }
    if (inp.shiftDown) { this.shift(-1); inp.shiftDown = false; }

    // ---- powertrain
    const ratio = this.gearRatio;
    const freeBefore = this.freeRpm;
    let aDrive = 0;
    const clutchIn = !!inp.clutch;
    let holdRear = 0;
    if (this.electric) {
      // instant torque, power-limited above base speed
      const base = this.vtop * 0.35;
      aDrive = clutchIn ? 0 : thr * this.A1 * Math.min(1, base / Math.max(1, this.v)) * clamp((this.vtop - this.v) / (this.vtop * 0.15), 0, 1);
      this.rpm = 600 + (this.v / this.vtop) * 5400 + thr * 300;
      if (clutchIn) this.freeRpm = Math.min(1, this.freeRpm / 6000 + dt * 1.6) * 6000;
    } else if (this.cvt) {
      // scooter: "segura no freio" technique – rear brake held while revving
      const engage = clamp((this.rpm - 2600) / 1600, 0, 1);
      aDrive = clutchIn ? 0 : thr * this.A1 * engage * clamp(1 - Math.pow(this.v / this.vtop, 2.4), 0, 1);
      const target = clutchIn ? IDLE + thr * 7200 : IDLE + thr * 5600 + (this.v / this.vtop) * 1800;
      this.rpm += (target - this.rpm) * Math.min(1, dt * 7);
      if (clutchIn) { holdRear = 1; this.freeRpm = this.rpm; }
    } else {
      const wheelRpm = (this.v / this.vg[this.gear]) * this.red;
      if (clutchIn) {
        // free revving engine (flywheel stores energy)
        const target = IDLE + thr * (this.red * 1.02 - IDLE);
        this.freeRpm += (target - this.freeRpm) * Math.min(1, dt * (thr > 0.05 ? 6 : 3));
        this.rpm = this.freeRpm;
      } else {
        // automatic clutch slip from standstill
        const slipRpm = IDLE + thr * 3200;
        this.rpm = Math.max(wheelRpm, wheelRpm < slipRpm ? slipRpm * (1 - wheelRpm / slipRpm) + wheelRpm : wheelRpm);
        this.rpm = Math.max(this.rpm, IDLE * 0.9);
        const n = this.rpm / this.red;
        this.limiter = n >= 1.0;
        aDrive = thr * this.A1 * ratio * torque(n) * (this.limiter ? (Math.random() < 0.5 ? 0 : 1) : 1);
        if (thr < 0.05) aDrive -= 0.7 * ratio * (wheelRpm / this.red); // engine braking
        if (this.auto) {
          if (n > 0.93 && this.gear < this.nG && this.pitch < 0.15) this.shift(1);
          else if (n < 0.38 && this.gear > 1) this.shift(-1);
        }
        this.freeRpm = this.rpm;
      }
    }
    // clutch dump: flywheel energy -> torque spike
    if (clutchIn && !this.electric && !this.cvt) this.dump = 0;
    if (!clutchIn && this.prevClutch) {
      let e = 0;
      if (this.electric) e = (freeBefore / 6000) * 0.62;
      else if (this.cvt) e = clamp((freeBefore - 3000) / 5000, 0, 1);
      else e = clamp((freeBefore - (this.v / this.vg[this.gear]) * this.red) / this.red, 0, 1) * ratio;
      if (e > 0.12 && this.grounded) {
        this.dump = e * 34 * (s.pop / 2.3) * (1 + 0.12 * this.up.grau);
        this.dumpT = 0.38;
        this.emit('pop');
      }
      this.freeRpm = IDLE;
    }
    this.prevClutch = clutchIn;
    let aDump = 0;
    if (this.dumpT > 0) { aDump = this.dump * (this.dumpT / 0.38); this.dumpT -= dt; }

    // ---- longitudinal dynamics
    const aDrag = 0.22 + this.cd * this.v * this.v;
    const aRear = (this.rbP + holdRear) * 4.6 * (1 + 0.1 * this.up.freio);
    const frontDown = this.pitch <= 0.02;
    const aFront = frontDown ? this.fbP * 11.2 * s.brake * (1 + 0.08 * this.up.freio) : 0;
    let scrapeDrag = this.scraping ? 3.2 : 0;
    // net acceleration felt at the centre of mass (forward positive)
    let a = 0;
    if (this.grounded) {
      const brakeA = this.v > 0.05 ? aRear + aFront + scrapeDrag : 0;
      a = aDrive + aDump - aDrag - brakeA - G * Math.sin(this.tp) * 0.9;
      if (holdRear && this.v < 0.3) a = Math.max(0, a); // brake-stand
      this.v += a * dt;
      if (holdRear) this.v = Math.max(0, this.v - 4 * dt);
    } else this.v -= this.cd * this.v * this.v * dt;
    if (this.v < 0) { this.v = 0; if (a < 0) a = 0; }
    this.a = a;

    // ---- steering & lean
    const steerMax = 0.55 / (1 + this.v * 0.11);
    let sIn = -clamp(inp.steer, -1, 1);
    if (this.pitch > 0.05 && this.grounded) sIn *= 0.5; // lean steering only
    if (this.trick === 3) sIn *= 0.2;
    if (!this.grounded) sIn *= 0.2;
    this.steer += (sIn * steerMax - this.steer) * Math.min(1, dt * 7);
    const yawRate = this.grounded ? (this.v * Math.tan(this.steer)) / this.L : 0;
    this.yaw += yawRate * dt;
    const leanT = clamp(Math.atan((this.v * yawRate) / G), -0.85, 0.85);
    this.lean += (leanT - this.lean) * Math.min(1, dt * 6);

    // ---- pitch dynamics
    const tb = this.trickBlend;
    const bp = s.bp - (this.trick === 2 ? 0.09 : this.trick === 3 ? 0.05 : 0) * tb;
    const lift = s.lift * 1.15 * (1 + 0.08 * this.up.grau); // rider shifts weight back
    // trick balance disturbance (rider moving around)
    this.noiseT -= dt;
    if (this.noiseT <= 0) { this.noiseT = 0.25 + Math.random() * 0.3; this.noiseTarget = (Math.random() * 2 - 1) * [0.3, 0.9, 1.3, 1.9][this.trick]; }
    this.noise += ((this.noiseTarget || 0) - this.noise) * Math.min(1, dt * 4);
    const damp = this.easy ? 3.2 : 1.7;
    if (this.grounded) {
      const sbp = 0.75;
      const aF = this.v > 0.3 ? aFront : 0;
      if (this.pitch > 1e-4 || (this.pitch >= -1e-4 && this.pitchV > 0)) {
        // rotating about the rear contact patch
        let tq = a * lift * Math.cos(bp - this.pitch) - G * Math.sin(bp - this.pitch) - damp * this.pitchV + this.noise * tb;
        if (this.easy && this.pitch > bp - 0.08) tq -= (this.pitch - (bp - 0.08)) * 14;
        this.pitchV += tq * dt;
        this.pitch += this.pitchV * dt;
        if (this.pitch <= 0) {
          if (this.pitchV < -2.6) this.emit('slam', { v: this.pitchV });
          if (this.trickBlend > 0.6 && this.trick >= 2) this.crash('Caiu da moto na manobra!');
          this.pitch = 0; this.pitchV = 0;
        }
        // rear fender / plate touches the asphalt
        if (this.pitch >= this.scrapeAng) {
          if (this.pitchV > 2.6) this.crash('Virou pra trás!');
          this.pitch = this.scrapeAng;
          if (this.pitchV > 0) this.pitchV = 0;
          if (!this.scraping) this.emit('scrape');
          this.scraping = this.v > 1;
          this.overT = tq > 1.5 && thr > 0.8 ? this.overT + dt : Math.max(0, this.overT - dt);
          if (this.overT > 0.9) this.crash('Virou pra trás!');
        } else { this.scraping = false; this.overT = 0; }
      } else if (this.pitch < -1e-4 || this.pitchV < 0) {
        // stoppie: rotating about the front contact patch (weight transfer)
        let tq = -(aF * Math.cos(sbp + this.pitch) - G * Math.sin(sbp + this.pitch)) - 2.0 * this.pitchV;
        if (this.v < 0.3) tq += 5;
        if (this.easy && this.pitch < -0.45) tq += (-0.45 - this.pitch) * 18;
        this.pitchV += tq * dt;
        this.pitch += this.pitchV * dt;
        this.scraping = false;
        if (this.pitch >= 0) { this.pitch = 0; this.pitchV = 0; }
        if (this.pitch < -(sbp + 0.22)) this.crash('Capotou no corte!');
      } else {
        this.scraping = false;
        const up = a * lift * Math.cos(bp) - G * Math.sin(bp);
        const down = aF * Math.cos(sbp) - G * Math.sin(sbp);
        if (up > 0) this.pitchV = up * dt;
        else if (down > 0) this.pitchV = -down * dt;
      }
    } else {
      this.scraping = false;
      // in the air: throttle spins the rear wheel (rotates back), brake rotates forward
      this.pitchV += (thr * 6.0 - (this.rbP + this.fbP) * 6.0) * dt;
      this.pitchV = clamp(this.pitchV, -6.5, 6.5) * (1 - 0.25 * dt);
      this.pitch += this.pitchV * dt;
      this.airT += dt;
    }

    // ---- move
    const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
    const ox = this.x, oz = this.z;
    this.x += fx * this.v * dt;
    this.z += fz * this.v * dt;
    this.wheel += this.v * dt * (holdRear && this.cvt ? 1 : 1);

    // ---- vertical
    const h = world.groundHeight(this.x, this.z);
    const vyN = this.vy - G * dt;
    const yBall = this.y + vyN * dt;
    if (h >= yBall) {
      const rise = h - this.y;
      if (this.grounded && rise > 0.32 && rise > this.v * dt * 1.4) {
        this.x = ox; this.z = oz;
        if (this.v > 8) this.crash('Bateu na rampa!');
        this.v = 0;
      } else {
        if (!this.grounded) this.land();
        if (!this.crashed) {
          this.grounded = true;
          const slope = rise / Math.max(0.001, this.v * dt);
          this.vy = slope > 1.5 ? Math.min(1.0, rise / dt) : clamp(rise / dt, -30, this.v * 1.1);
          this.y = h;
        }
      }
    } else {
      if (this.grounded) {
        this.pitch += this.tp;
        this.flipBase = this.pitch;
        this.airT = 0;
        this.emit('air');
      }
      this.grounded = false;
      this.vy = vyN;
      this.y = yBall;
    }
    if (this.grounded) {
      const hb = world.groundHeight(this.x - fx * 0.2, this.z - fz * 0.2);
      const hf = world.groundHeight(this.x + fx * this.L, this.z + fz * this.L);
      const tpT = Math.atan2(hf - hb, this.L + 0.2);
      this.tp += (tpT - this.tp) * Math.min(1, dt * 14);
    }

    // ---- collisions
    const cx = this.x + fx * this.L * 0.5, cz = this.z + fz * this.L * 0.5;
    if (this.y < 3) {
      const hit = world.collide(cx, cz, 0.5);
      if (hit) {
        const vn = (fx * hit.nx + fz * hit.nz) * this.v;
        this.x += hit.nx * hit.depth; this.z += hit.nz * hit.depth;
        if (vn < -8.5) this.crash(hit.kind === 'tree' ? 'Bateu na árvore!' : 'Bateu no muro!');
        else {
          this.v *= 0.6;
          const tx = -hit.nz, tz = hit.nx;
          const along = fx * tx + fz * tz;
          const ty = Math.atan2(tx * Math.sign(along || 1), tz * Math.sign(along || 1));
          let d = ty - this.yaw; d = Math.atan2(Math.sin(d), Math.cos(d));
          this.yaw += d * 0.25;
        }
      }
      const car = world.carHit(cx, cz, this.y);
      if (car) {
        if (this.v > 4 || car.car.cur > 3) this.crash('Bateu no carro!');
        else { this.x += car.nx * 0.3; this.z += car.nz * 0.3; this.v = 0; }
      }
    }
    if (world.isWater(this.x) && this.y < 0) this.crash('Caiu no mar!');
  }

  land() {
    const tp = this.tp;
    let rel = this.pitch - tp;
    const turns = Math.round(rel / (Math.PI * 2));
    const flips = Math.round((this.pitch - this.flipBase) / (Math.PI * 2));
    rel -= turns * Math.PI * 2;
    const hard = this.vy < -15;
    const tolUp = this.easy ? 0.5 : 0.32, tolDn = this.easy ? -0.9 : -0.62;
    if (rel > this.spec.bp + tolUp || rel < tolDn || hard || (this.trick >= 2 && this.trickBlend > 0.5)) {
      this.crash(hard ? 'Pancada no chão!' : this.trick >= 2 ? 'Caiu da moto na manobra!' : 'Caiu de mal jeito!');
      this.pitch = 0;
    } else {
      this.pitch = clamp(rel, 0, Math.min(this.spec.bp, this.scrapeAng - 0.05));
      this.pitchV = rel > 0.05 ? Math.min(this.pitchV, 0.4) : 0;
      if (rel < 0.05) this.pitchV = 0;
      this.emit('land', { air: this.airT, flips: Math.abs(flips), back: flips > 0, wheelie: rel > 0.15, vy: this.vy });
    }
    this.airT = 0;
  }

  visual() {
    return {
      x: this.x, y: this.y, z: this.z, yaw: this.yaw,
      pitch: this.grounded ? this.pitch + this.tp : this.pitch,
      lean: this.lean, steer: this.steer, wheel: this.wheel,
      trick: this.trick, tb: this.trickBlend,
    };
  }
}
