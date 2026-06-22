'use client';

import styles from './ContactMascot.module.css';

/**
 * Friendly helmeted mascot for the Contact hero - glowing, on-brand.
 */
export default function ContactMascot() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg className={styles.svg} viewBox="0 0 300 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="c-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f6e7a0" />
            <stop offset="55%" stopColor="#e9c873" />
            <stop offset="100%" stopColor="#c79a3e" />
          </radialGradient>
          <radialGradient id="c-helmet" cx="38%" cy="32%" r="75%">
            <stop offset="0%" stopColor="#1c2c1a" />
            <stop offset="60%" stopColor="#0e1810" />
            <stop offset="100%" stopColor="#070b09" />
          </radialGradient>
          <linearGradient id="c-face" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f3dcab" />
            <stop offset="100%" stopColor="#e3bd83" />
          </linearGradient>
        </defs>

        {/* Body glow */}
        <ellipse cx="150" cy="300" rx="60" ry="48" fill="url(#c-glow)" opacity="0.55" />
        <path d="M120 250c0-26 13-40 30-40s30 14 30 40v34c0 18-13 28-30 28s-30-10-30-28z" fill="url(#c-glow)" />
        <ellipse cx="138" cy="270" rx="16" ry="22" fill="rgba(255,255,255,0.25)" />

        {/* Antenna */}
        <line x1="150" y1="70" x2="150" y2="44" stroke="#8cff50" strokeWidth="4" strokeLinecap="round" />
        <circle cx="150" cy="40" r="9" fill="#8cff50" />
        <circle cx="150" cy="40" r="15" fill="#8cff50" opacity="0.25" />

        {/* Ears */}
        <ellipse cx="100" cy="118" rx="20" ry="34" transform="rotate(-20 100 118)" fill="url(#c-face)" />
        <ellipse cx="100" cy="120" rx="9" ry="18" transform="rotate(-20 100 120)" fill="#f4b8c4" />
        <ellipse cx="200" cy="118" rx="20" ry="34" transform="rotate(20 200 118)" fill="url(#c-face)" />
        <ellipse cx="200" cy="120" rx="9" ry="18" transform="rotate(20 200 120)" fill="#f4b8c4" />

        {/* Helmet */}
        <circle cx="150" cy="165" r="94" fill="url(#c-helmet)" stroke="rgba(140,255,80,0.4)" strokeWidth="2" />

        {/* Face */}
        <ellipse cx="150" cy="174" rx="62" ry="62" fill="url(#c-face)" />

        {/* Glasses */}
        <rect x="108" y="150" width="40" height="34" rx="13" fill="#11140f" stroke="#3a4a32" strokeWidth="2.5" />
        <rect x="152" y="150" width="40" height="34" rx="13" fill="#11140f" stroke="#3a4a32" strokeWidth="2.5" />
        <line x1="148" y1="164" x2="152" y2="164" stroke="#3a4a32" strokeWidth="2.5" />

        {/* Eyes */}
        <circle cx="128" cy="167" r="8" fill="#241a0f" />
        <circle cx="172" cy="167" r="8" fill="#241a0f" />
        <circle cx="131" cy="163.5" r="2.6" fill="#fff" />
        <circle cx="175" cy="163.5" r="2.6" fill="#fff" />

        {/* Snout */}
        <ellipse cx="150" cy="205" rx="22" ry="16" fill="#f0d6a4" />
        <circle cx="143" cy="203" r="2.4" fill="#9a7a4a" />
        <circle cx="157" cy="203" r="2.4" fill="#9a7a4a" />
        <path d="M138 210q12 11 24 0" stroke="#9a7a4a" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Helmet sheen */}
        <path d="M96 128q24 -36 70 -34 -36 6 -56 42z" fill="#ffffff" opacity="0.14" />
      </svg>
    </div>
  );
}
