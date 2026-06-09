'use client';

import styles from './RotatingBadge.module.css';

export default function RotatingBadge() {
  return (
    <div className={styles.badge} aria-hidden="true">
      <svg className={styles.ring} viewBox="0 0 120 120">
        <defs>
          <path
            id="cta-circle"
            d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
          />
        </defs>
        <text className={styles.text}>
          <textPath href="#cta-circle" startOffset="0">
            AI AGENCY ★ SAFEHANDSDIGITAL.COM ★&nbsp;
          </textPath>
        </text>
      </svg>

      <span className={styles.center}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8cff50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7.5v5l3 2" />
        </svg>
      </span>
    </div>
  );
}
