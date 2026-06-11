'use client';

import styles from './StatsBar.module.css';

const STATS = [
  { value: '417K',   label: 'Followers Gained',  sub: '@dr.remina' },
  { value: '$100K+', label: 'Revenue Generated',  sub: 'Social media + PR' },
  { value: '300%',   label: 'ROI on Paid Ads',    sub: 'Average client result' },
  { value: '50+',    label: '5-Star Reviews',     sub: 'Google & Clutch' },
];

export default function StatsBar() {
  return (
    <section id="stats" className={styles.section} suppressHydrationWarning>
      <div className={styles.row}>
        {STATS.map((s, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.value}>{s.value}</div>
            <div className={styles.label}>{s.label}</div>
            <div className={styles.sub}>{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
