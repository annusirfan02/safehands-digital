'use client';

import Link from 'next/link';
import Starfield from '@/components/HeroHeader/Starfield';
import styles from './SeoHero.module.css';

const TAGS = ['Google Rankings', 'ChatGPT Citations', 'Perplexity', 'AI Overviews (SGE)', 'llms.txt'];

const STATS = [
  { v: '10+',  l: 'CLIENTS RANKED' },
  { v: '3×',   l: 'AVG TRAFFIC INCREASE' },
  { v: '6 mo', l: 'AVG TO PAGE 1' },
  { v: '40+',  l: 'RANKING SIGNALS TRACKED' },
];

export default function SeoHero() {
  return (
    <section className={styles.hero} suppressHydrationWarning>
      <Starfield shooters={2} stars={6} />
      <span className={styles.watermark} aria-hidden="true">SEO</span>

      <div className={styles.inner}>
        <Link href="/solutions" className={styles.back}>
          <span className={styles.backArrow}>←</span> Services
        </Link>

        <div className={styles.kickerRow}>
          <span className={styles.kicker}>SEARCH ENGINE OPTIMIZATION</span>
          <span className={styles.pill}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10a4 4 0 0 0-7.6-1.5A3.5 3.5 0 1 0 8 16h9a3 3 0 0 0 1-5.8z" /></svg>
            + AI SEO
          </span>
        </div>

        <h1 className={styles.headline}>
          <span className={styles.solid}>RANK ON</span>
          <span className={styles.blue}>GOOGLE<span className={styles.dot}>.</span></span>
          <span className={styles.script}>Get cited by AI.</span>
        </h1>

        <p className={styles.subtitle}>
          As an SEO agency in Riyadh, we combine traditional SEO foundations with AI
          search optimization, so your brand ranks on Google and gets cited by ChatGPT,
          Perplexity, and Google&rsquo;s AI Overviews across Saudi Arabia.
        </p>

        <div className={styles.tags}>
          {TAGS.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
        </div>

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
