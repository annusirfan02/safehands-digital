// ─── Shared Web-Audio helper ──────────────────────────────────────────────────
// A single AudioContext, created/resumed on the first user interaction. Browsers
// (Chrome, Edge, Safari) block audio until a genuine gesture — a click, tap,
// key press, scroll or wheel. A pure mouse hover is NOT treated as a gesture by
// the browser, so the very first hover before any interaction stays silent by
// design; once the user does anything (even scroll), every later hover plays.

let ctx = null;
let unlocked = false;

// Widest practical set so audio unlocks at the earliest possible interaction.
const GESTURES = [
  'pointerdown', 'pointerup', 'mousedown', 'click', 'keydown',
  'touchstart', 'touchend', 'wheel', 'scroll', 'mousemove', 'pointermove',
];

function cleanup() {
  GESTURES.forEach((ev) => window.removeEventListener(ev, unlock));
}

function unlock() {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) {
      cleanup();
      return;
    }
    if (!ctx) ctx = new AC();

    // Already running — we're done.
    if (ctx.state === 'running') {
      unlocked = true;
      cleanup();
      return;
    }

    // Try to resume. Only mark as unlocked (and stop listening) once the context
    // actually reaches "running", so a blocked early attempt can't permanently
    // disable sound before a real gesture arrives.
    const p = ctx.resume && ctx.resume();
    if (p && typeof p.then === 'function') {
      p.then(() => {
        if (ctx && ctx.state === 'running') {
          unlocked = true;
          cleanup();
        }
      }).catch(() => {});
    } else if (ctx.state === 'running') {
      unlocked = true;
      cleanup();
    }
  } catch {
    /* ignore */
  }
}

if (typeof window !== 'undefined') {
  GESTURES.forEach((ev) => window.addEventListener(ev, unlock, { passive: true }));
}

/**
 * Play a short tone. No-op until the audio context is running (i.e. after the
 * first user interaction), so it never logs an autoplay warning.
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
