'use client';

import styles from './Mascot.module.css';

/**
 * Friendly astronaut mascot (SVG). A clean, on-brand placeholder - swap with
 * your own character illustration any time.
 */
export default function Mascot() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg className={styles.svg} viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="m-helmet" cx="38%" cy="32%" r="75%">
            <stop offset="0%" stopColor="#243029" />
            <stop offset="55%" stopColor="#121a16" />
            <stop offset="100%" stopColor="#070b09" />
          </radialGradient>
          <linearGradient id="m-skin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0dcb6" />
            <stop offset="100%" stopColor="#d8bf94" />
          </linearGradient>
          <linearGradient id="m-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e7d3ac" />
            <stop offset="100%" stopColor="#c9ad7e" />
          </linearGradient>
        </defs>

        {/* Antenna */}
        <line x1="140" y1="58" x2="140" y2="30" stroke="#BFFE03" strokeWidth="4" strokeLinecap="round" />
        <circle cx="140" cy="24" r="9" fill="#BFFE03" />
        <circle cx="140" cy="24" r="15" fill="#BFFE03" opacity="0.25" />

        {/* Shoulders / body */}
        <path d="M86 250c0-30 24-46 54-46s54 16 54 46v40H86z" fill="url(#m-body)" />
        {/* Arm */}
        <path d="M190 250c26 4 44 18 52 40l-16 10c-10-18-24-28-44-30z" fill="url(#m-body)" />
        <circle cx="232" cy="300" r="12" fill="#e7d3ac" />

        {/* Side helmet clamps */}
        <circle cx="52" cy="150" r="9" fill="#BFFE03" opacity="0.8" />
        <circle cx="228" cy="150" r="9" fill="#BFFE03" opacity="0.8" />

        {/* Ears */}
        <ellipse cx="96" cy="96" rx="16" ry="26" transform="rotate(-22 96 96)" fill="url(#m-skin)" />
        <ellipse cx="96" cy="98" rx="7" ry="14" transform="rotate(-22 96 98)" fill="#f4b8c4" />
        <ellipse cx="184" cy="96" rx="16" ry="26" transform="rotate(22 184 96)" fill="url(#m-skin)" />
        <ellipse cx="184" cy="98" rx="7" ry="14" transform="rotate(22 184 98)" fill="#f4b8c4" />

        {/* Helmet dome */}
        <circle cx="140" cy="150" r="92" fill="url(#m-helmet)" stroke="rgba(191, 254, 3,0.35)" strokeWidth="2" />

        {/* Face */}
        <ellipse cx="140" cy="162" rx="58" ry="62" fill="url(#m-skin)" />

        {/* Glasses */}
        <rect x="103" y="146" width="34" height="30" rx="12" fill="#0d1411" stroke="#3a4a40" strokeWidth="2.5" />
        <rect x="143" y="146" width="34" height="30" rx="12" fill="#0d1411" stroke="#3a4a40" strokeWidth="2.5" />
        <line x1="137" y1="158" x2="143" y2="158" stroke="#3a4a40" strokeWidth="2.5" />

        {/* Eyes */}
        <circle cx="120" cy="161" r="7" fill="#1a120b" />
        <circle cx="160" cy="161" r="7" fill="#1a120b" />
        <circle cx="122.5" cy="158.5" r="2.2" fill="#fff" />
        <circle cx="162.5" cy="158.5" r="2.2" fill="#fff" />

        {/* Smile */}
        <path d="M126 190q14 13 28 0" stroke="#8a6b45" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Visor highlight */}
        <path d="M92 116q22 -34 64 -32 -34 6 -52 40z" fill="#ffffff" opacity="0.16" />
      </svg>
    </div>
  );
}
