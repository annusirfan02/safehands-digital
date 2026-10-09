'use client';

import Link from 'next/link';
import Starfield from '@/components/HeroHeader/Starfield';
import styles from './AiVideoHero.module.css';

const TAGS = ['CORPORATE FILMS', 'AI PRESENTERS', 'ARABIC & ENGLISH'];

export default function AiVideoHero() {
  return (
    <section className={styles.hero} suppressHydrationWarning>
      <Starfield shooters={2} stars={6} />
      <span className={styles.watermark} aria-hidden="true">VIDEO</span>

      <div className={styles.inner}>
        <Link href="/#services" className={styles.back}>
          <span className={styles.backArrow}>←</span> Services
        </Link>

        <span className={styles.kicker}>AI VIDEO PRODUCTION</span>

        <h1 className={styles.headline}>
          <span className={styles.solid}>AI VIDEOS THAT</span>
          <span className={styles.script}>sell your story.</span>
        </h1>

        <p className={styles.subtitle}>
          AI video production in Saudi Arabia — corporate intros, presentations,
          explainers and scroll-stopping social videos. Polished, on-brand and ready
          in a fraction of the time, in both Arabic and English.
        </p>

        <div className={styles.tags}>
          {TAGS.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
