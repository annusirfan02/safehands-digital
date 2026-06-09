'use client';

import { playTone } from '@/lib/sound';

/** Soft rising "ping" played when the ship reaches a node (scrolling down). */
export function playChime() {
  playTone({ type: 'sine', from: 820, to: 1240, rampRatio: 0.3, dur: 0.3, gainPeak: 0.05 });
}
