// ─── Shared Web-Audio helper ──────────────────────────────────────────────────
// A single AudioContext, created ONLY after the first genuine user gesture, so
// we never trip Chrome's "AudioContext was not allowed to start" warning.
// Sounds requested before that first gesture are silently skipped.

let ctx = null;
let unlocked = false;

const GESTURES = ['pointerdown', 'keydown', 'touchstart'];

function unlock() {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    if (!ctx) ctx = new AC();
    if (ctx.state === 'suspended') ctx.resume();
    unlocked = true;
  } catch {
    /* ignore */
  } finally {
    GESTURES.forEach((ev) => window.removeEventListener(ev, unlock));
  }
}

if (typeof window !== 'undefined') {
  GESTURES.forEach((ev) => window.addEventListener(ev, unlock, { once: true, passive: true }));
}

/**
 * Play a short tone. No-op until the user has interacted with the page
 * (so it never logs an autoplay warning).
 */
export function playTone({
  type = 'sine',
  from = 820,
  to = null,
  rampRatio = 0.3,
  dur = 0.3,
  gainPeak = 0.05,
  attack = 0.02,
} = {}) {
  if (!unlocked || !ctx || ctx.state !== 'running') return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(from, now);
    if (to) osc.frequency.exponentialRampToValueAtTime(to, now + dur * rampRatio);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(gainPeak, now + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + dur + 0.02);
  } catch {
    /* ignore */
  }
}
