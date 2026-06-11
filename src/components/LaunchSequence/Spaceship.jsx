'use client';

import { forwardRef } from 'react';
import styles from './Spaceship.module.css';

/**
 * Descending rocket that travels down the launch track.
 * Position (translateY) is driven by the parent via a scrubbed ScrollTrigger.
 */
const Spaceship = forwardRef(function Spaceship(_props, ref) {
  return (
    <div ref={ref} className={styles.ship} aria-hidden="true">
      <span className={styles.halo} />

      {/* Engine exhaust (trails upward as the ship descends) */}
      <span className={styles.exhaust} />

      <svg className={styles.craft} width="36" height="56" viewBox="0 0 36 56" fill="none">
        <defs>
          <linearGradient id="ls-body" x1="0" y1="0" x2="36" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.55" stopColor="#dfe6ee" />
            <stop offset="1" stopColor="#aab4c2" />
          </linearGradient>
        </defs>

        {/* Fins */}
        <path d="M10 30 L3 44 L10 39 Z" fill="#7d8794" />
        <path d="M26 30 L33 44 L26 39 Z" fill="#7d8794" />

        {/* Body — nose pointing down (direction of travel) */}
        <path
          d="M18 53
             C23 48 26 40 26 30
             C26 18 23 9 18 4
             C13 9 10 18 10 30
             C10 40 13 48 18 53 Z"
          fill="url(#ls-body)"
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="0.6"
        />

        {/* Window */}
        <circle cx="18" cy="22" r="4.4" fill="#0b1a10" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        <circle cx="18" cy="22" r="2.4" fill="#BFFE03" />
      </svg>
    </div>
  );
});

export default Spaceship;
