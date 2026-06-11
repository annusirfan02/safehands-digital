'use client';

import styles from './Delivered.module.css';

// Fanned result cards. r = rotation, y = vertical offset (arc), z = stack order.
const RESULTS = [
  { tag: 'SOCIAL MEDIA', value: '417K',   label: 'Followers',        sub: '@dr.remina',        variant: 'dark',  r: -16, y: 64, z: 1 },
  { tag: 'PR + STRATEGY', value: '$100K+', label: 'Revenue',          sub: 'In 6 months',       variant: 'green', r: -8,  y: 20, z: 2 },
  { tag: 'PAID ADS',     value: '300%',    label: 'ROI',              sub: 'Avg client result', variant: 'white', r: 0,   y: -26, z: 5 },
  { tag: 'TIKTOK',       value: '2.1M',    label: 'TikTok Views',     sub: 'Single campaign',   variant: 'dark',  r: 8,   y: 20, z: 2 },
  { tag: 'REPUTATION',   value: '50+',     label: 'Five-Star Reviews', sub: 'Google & Clutch',  variant: 'green', r: 16,  y: 64, z: 3 },
];

export default function Delivered() {
  return (
    <section id="results" className={styles.section} suppressHydrationWarning>
      <div className={styles.heading}>
        <span className={styles.kicker}>REAL RESULTS</span>
        <h2 className={styles.solid}>WHAT WE&rsquo;VE</h2>
        <h2 className={styles.outline}>
          DELIVERED<span className={styles.dot}>.</span>
        </h2>
        <span className={styles.node} aria-hidden="true" />
      </div>

      <div className={styles.fan}>
        {RESULTS.map((c, i) => (
          <div
            key={i}
            className={`${styles.card} ${styles[c.variant]}`}
            style={{ '--r': `${c.r}deg`, '--y': `${c.y}px`, zIndex: c.z }}
          >
            <span className={styles.tag}>{c.tag}</span>
            <div className={styles.body}>
              <div className={styles.value}>{c.value}</div>
              <div className={styles.label}>{c.label}</div>
              <div className={styles.sub}>{c.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
