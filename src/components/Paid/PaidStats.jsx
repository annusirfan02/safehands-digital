'use client';

import styles from './PaidStats.module.css';

const STATS = [
  { v: '$2M+', l: 'AD SPEND MANAGED', s: 'Across all clients' },
  { v: '4.2×', l: 'AVG ROAS',         s: 'Return on ad spend' },
  { v: '10+',  l: 'BRANDS SCALED',    s: 'Meta · TikTok · Google' },
  { v: '3',    l: 'PLATFORMS',        s: 'Meta · TikTok · Google' },
];

export default function PaidStats() {
  return (
    <section className={styles.section} suppressHydrationWarning>
      <span className={styles.glowSweep} aria-hidden="true" />

      <div className={styles.inner}>
        {STATS.map((s, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.topBorder} style={{ animationDelay: `${i * 2.8}s` }} />
            <div className={styles.value} style={{ animationDelay: `${i * 0.5}s` }}>{s.v}</div>
            <div className={styles.label}>{s.l}</div>
            <div className={styles.sub}>{s.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
