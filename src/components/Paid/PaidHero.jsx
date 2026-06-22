'use client';

import Link from 'next/link';
import Starfield from '@/components/HeroHeader/Starfield';
import styles from './PaidHero.module.css';

export default function PaidHero() {
  return (
    <section className={styles.hero} suppressHydrationWarning>
      <Starfield shooters={2} stars={6} />
      <span className={styles.watermark} aria-hidden="true">PAID ADS</span>

      <div className={styles.inner}>
        <Link href="/solutions" className={styles.back}>
          <span className={styles.backArrow}>←</span> Services
        </Link>

        <span className={styles.kicker}>PAID ADVERTISING</span>

        <h1 className={styles.headline}>
          <span className={styles.solid}>ADS THAT</span>
          <span className={styles.script}>Actually convert.</span>
        </h1>

        <p className={styles.subtitle}>
          Meta, TikTok &amp; Google campaigns built on UGC-first creative, AI
          optimization, and full-funnel strategy. We don&rsquo;t just run ads -
          we build revenue machines.
        </p>
      </div>
    </section>
  );
}
