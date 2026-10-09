'use client';

import styles from './StatsBar.module.css';

// Capability facts (2 Engineering + 2 AI), taken from the service pages.
// Previous marketing results, kept for reference:
//   { value: '417K',   label: 'Followers Gained',  sub: '@dr.remina' },
//   { value: '$100K+', label: 'Revenue Generated',  sub: 'Social media + PR' },
//   { value: '300%',   label: 'ROI on Paid Ads',    sub: 'Average client result' },
//   { value: '50+',    label: '5-Star Reviews',     sub: 'Google & Clutch' },
const STATS = [
  { value: '45°C+',     label: 'Engineered For',       sub: 'High-ambient KSA conditions' },
  { value: '5,000 kWh', label: 'sp.ICE Storage',       sub: 'Per 40′ container module' },
  { value: '24/7',      label: 'AI Assistants',        sub: 'Sorting, replying, following up' },
  { value: 'AR + EN',   label: 'Bilingual Automation', sub: 'Arabic & English workflows' },
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
