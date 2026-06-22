'use client';

import styles from './WalkingDog.module.css';

/**
 * A cartoon puppy (emoji-style: tan body, floppy ears, tongue out) that walks
 * continuously from one screen corner to the other (full viewport width).
 * Legs swing in an alternating walk cycle, the tail wags, and a
 * "WOOF! WORK WITH US" speech bubble travels along with it.
 * Pure CSS animation - no JS timers.
 */
export default function WalkingDog() {
  return (
    <div className={styles.track} aria-hidden="true">
      <div className={styles.walker}>
        {/* Speech bubble */}
        <div className={styles.bubble}>
          WOOF! <span className={styles.bubbleAccent}>WORK WITH US</span>
          <span className={styles.bubbleTail} />
        </div>

        {/* Puppy */}
        <svg
          className={styles.dog}
          viewBox="0 0 172 132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="pup-body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e0a866" />
              <stop offset="100%" stopColor="#c88a40" />
            </linearGradient>
          </defs>

          {/* ── Far legs (behind body) ── */}
          <g className={styles.legFarBack}>
            <rect x="40" y="88" width="13" height="26" rx="6" fill="#b87b38" />
            <ellipse cx="46.5" cy="113" rx="8" ry="4" fill="#9c6628" />
          </g>
          <g className={styles.legFarFront}>
            <rect x="86" y="88" width="13" height="26" rx="6" fill="#b87b38" />
            <ellipse cx="92.5" cy="113" rx="8" ry="4" fill="#9c6628" />
          </g>

          {/* ── Tail (wagging) ── */}
          <g className={styles.tail}>
            <path d="M28 64 q-18 -6 -20 -24 q-4 16 6 24 q6 6 14 0 z" fill="url(#pup-body)" />
          </g>

          {/* ── Body ── */}
          <ellipse cx="64" cy="74" rx="44" ry="26" fill="url(#pup-body)" />

          {/* ── Near legs (in front of body) ── */}
          <g className={styles.legNearBack}>
            <rect x="52" y="90" width="14" height="28" rx="7" fill="url(#pup-body)" />
            <ellipse cx="59" cy="117" rx="8.5" ry="4.5" fill="#a86d2c" />
          </g>
          <g className={styles.legNearFront}>
            <rect x="96" y="90" width="14" height="28" rx="7" fill="url(#pup-body)" />
            <ellipse cx="103" cy="117" rx="8.5" ry="4.5" fill="#a86d2c" />
          </g>

          {/* ── Head ── */}
          <g className={styles.head}>
            {/* Floppy ears (behind head) */}
            <path d="M96 36 q-12 0 -14 20 q0 16 14 16 q-2 -20 0 -36 z" fill="#a8682c" />
            <path d="M150 36 q12 0 14 20 q0 16 -14 16 q2 -20 0 -36 z" fill="#a8682c" />

            {/* Head */}
            <circle cx="123" cy="56" r="31" fill="url(#pup-body)" />

            {/* Muzzle */}
            <ellipse cx="123" cy="68" rx="17" ry="14" fill="#f0d2a0" />

            {/* Eyes */}
            <circle cx="111" cy="52" r="5.5" fill="#2a1c0c" />
            <circle cx="135" cy="52" r="5.5" fill="#2a1c0c" />
            <circle cx="113" cy="49.5" r="1.8" fill="#fff" />
            <circle cx="137" cy="49.5" r="1.8" fill="#fff" />

            {/* Nose */}
            <ellipse cx="123" cy="60" rx="5.5" ry="4.2" fill="#2a1c0c" />

            {/* Mouth */}
            <path
              d="M123 64 q-5 4 -9 2 M123 64 q5 4 9 2"
              stroke="#9c6628"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />

            {/* Tongue */}
            <path d="M117 69 q0 16 6 16 q6 0 6 -16 q-6 3 -12 0 z" fill="#f0808e" />
            <path d="M123 71 v13" stroke="#d85f6e" strokeWidth="1.4" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}
