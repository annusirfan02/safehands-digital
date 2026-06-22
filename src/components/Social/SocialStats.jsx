'use client';

import styles from './SocialStats.module.css';

const STATS = [
  { v: '4K → 427K', l: '@DR.REMINA FOLLOWERS' },
  { v: '1M+',       l: 'VIEWS, QUADRATIC AI' },
  { v: '0 → 11K',   l: 'PONGBOT GROWTH' },
  { v: '$100K+',    l: 'REVENUE VIA SOCIAL' },
];

export default function SocialStats() {
  return (
    <section className={styles.section} suppressHydrationWarning>
      <span className={styles.glowSweep} aria-hidden="true" />

      <div className={styles.inner}>
        {STATS.map((s, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.value} style={{ animationDelay: `${i * 0.5}s` }}>{s.v}</div>
            <div className={styles.label}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
