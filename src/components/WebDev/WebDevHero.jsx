'use client';

import Link from 'next/link';
import Starfield from '@/components/HeroHeader/Starfield';
import styles from './WebDevHero.module.css';

const STATS = [
  { v: '15+', l: 'SITES LAUNCHED' },
  { v: '10+', l: 'YEARS EXPERIENCE' },
  { v: '4',   l: 'PLATFORMS' },
  { v: '2',   l: 'CONTINENTS' },
];

export default function WebDevHero() {
  return (
    <section className={styles.hero} suppressHydrationWarning>
      <Starfield shooters={2} stars={6} />
      <span className={styles.watermark} aria-hidden="true">WEB DEV</span>

      <div className={styles.inner}>
        <Link href="/solutions" className={styles.back}>
          <span className={styles.backArrow}>←</span> Services
        </Link>

        <span className={styles.kicker}>PORTFOLIO</span>

        <h1 className={styles.headline}>
          <span className={styles.solid}>WEB</span>
          <span className={styles.script}>Development.</span>
        </h1>

        <p className={styles.subtitle}>
          Shopify, WordPress, Next.js, and custom builds — 10+ years of web
          development delivering high-converting websites for brands in Saudi
          Arabia, the US and Europe.
        </p>

        <div className={styles.stats}>
          {STATS.map((s, i) => (
            <div key={i} className={styles.stat}>
              <div className={styles.statValue}>{s.v}</div>
              <div className={styles.statLabel}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
