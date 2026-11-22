import { clamp } from './util.js';

// Touch (multi-touch, pointer events), keyboard and optional tilt steering
export class Input {
  constructor() {
    this.state = { throttle: 0, brake: 0, fbrake: 0, steer: 0, clutch: false, trick: 0, shiftUp: false, shiftDown: false };
    this.pendUp = false; this.pendDown = false; this.touchTrick = 0;
    this.keys = new Set();
    this.touch = { throttle: 0, steer: 0, brake: false, fbrake: false, clutch: false };
    this.kbThrottle = 0;
    this.tilt = false;
    this.tiltSteer = 0;
    this.onAction = null;
    addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      this.keys.add(e.code);
      if (this.onAction && !e.repeat) this.onAction(e.code);
      if (!e.repeat && e.code === 'KeyE') this.pendUp = true;
      if (!e.repeat && e.code === 'KeyQ') this.pendDown = true;
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
    });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    addEventListener('blur', () => this.keys.clear());
    addEventListener('deviceorientation', (e) => {
      if (!this.tilt || e.beta == null) return;
      const ang = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
      let v = ang === 90 ? e.beta : ang === -90 || ang === 270 ? -e.beta : e.gamma;
      this.tiltSteer = clamp(v / 22, -1, 1);
    });
  }

  bindTouch(els) {
    const { throttle, steer, brake, fbrake, clutch } = els;
    // throttle: vertical slider – position sets amount
    const thrMove = (e) => {
      const r = throttle.getBoundingClientRect();
      this.touch.throttle = clamp((r.bottom - e.clientY) / (r.height * 0.92), 0, 1);
      throttle.style.setProperty('--t', this.touch.throttle.toFixed(3));
    };
    this.slider(throttle, thrMove, () => { this.touch.throttle = 0; throttle.style.setProperty('--t', 0); });
    const stMove = (e) => {
      const r = steer.getBoundingClientRect();
      this.touch.steer = clamp(((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * 1.25, -1, 1);
      steer.style.setProperty('--s', this.touch.steer.toFixed(3));
    };
    this.slider(steer, stMove, () => { this.touch.steer = 0; steer.style.setProperty('--s', 0); });
    this.hold(brake, (v) => (this.touch.brake = v));
    this.hold(fbrake, (v) => (this.touch.fbrake = v));
    this.hold(clutch, (v) => (this.touch.clutch = v));
    if (els.gup) this.tap(els.gup, () => (this.pendUp = true));
    if (els.gdown) this.tap(els.gdown, () => (this.pendDown = true));
    (els.tricks || []).forEach((el, i) => this.hold(el, (v) => { if (v) this.touchTrick = i + 1; else if (this.touchTrick === i + 1) this.touchTrick = 0; }));
  }
  tap(el, fn) {
    el.addEventListener('pointerdown', (e) => { el.classList.add('on'); fn(); e.preventDefault(); });
    const up = () => el.classList.remove('on');
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
  }

  slider(el, move, end) {
    const ids = new Set();
    el.addEventListener('pointerdown', (e) => { ids.add(e.pointerId); el.setPointerCapture(e.pointerId); el.classList.add('on'); move(e); e.preventDefault(); });
    el.addEventListener('pointermove', (e) => { if (ids.has(e.pointerId)) move(e); });
    const up = (e) => { if (!ids.delete(e.pointerId)) return; if (!ids.size) { el.classList.remove('on'); end(); } };
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('lostpointercapture', up);
  }
  hold(el, set) {
    const ids = new Set();
    el.addEventListener('pointerdown', (e) => { ids.add(e.pointerId); el.setPointerCapture(e.pointerId); el.classList.add('on'); set(true); e.preventDefault(); });
    const up = (e) => { if (!ids.delete(e.pointerId)) return; if (!ids.size) { el.classList.remove('on'); set(false); } };
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('lostpointercapture', up);
  }

  update(dt) {
    const k = this.keys;
    const up = k.has('KeyW') || k.has('ArrowUp');
    // analog-feeling keyboard throttle: hold to rise, release to fall
    this.kbThrottle = clamp(this.kbThrottle + (up ? 1.3 : -3.5) * dt, 0, 1);
    if (up && (k.has('ShiftLeft') || k.has('ShiftRight'))) this.kbThrottle = 1;
    let steer = (k.has('KeyD') || k.has('ArrowRight') ? 1 : 0) - (k.has('KeyA') || k.has('ArrowLeft') ? 1 : 0);
    if (this.tilt && Math.abs(this.tiltSteer) > 0.04) steer = this.tiltSteer;
    if (Math.abs(this.touch.steer) > 0.02) steer = this.touch.steer;
    const s = this.state;
    s.throttle = Math.max(this.kbThrottle, this.touch.throttle);
    s.brake = k.has('KeyS') || k.has('ArrowDown') || this.touch.brake ? 1 : 0;
    s.fbrake = k.has('KeyF') || this.touch.fbrake ? 1 : 0;
    s.clutch = k.has('Space') || this.touch.clutch;
    s.steer = steer;
    s.trick = k.has('Digit1') ? 1 : k.has('Digit2') ? 2 : k.has('Digit3') ? 3 : this.touchTrick;
    s.shiftUp = this.pendUp; s.shiftDown = this.pendDown;
    this.pendUp = this.pendDown = false;
    return s;
  }
}
