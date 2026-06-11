'use client';

import { useCallback } from 'react';
import { playTone } from '@/lib/sound';

/**
 * Returns a play() for a short, decent "flip" sound. Uses the shared audio
 * helper, which only plays after the first user gesture (no autoplay warning).
 */
export function useFlipSound() {
  return useCallback(() => {
    playTone({ type: 'triangle', from: 540, to: 230, rampRatio: 0.45, dur: 0.2, gainPeak: 0.06, attack: 0.015 });
  }, []);
}
