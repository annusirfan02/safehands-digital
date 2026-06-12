'use client';

import Link from 'next/link';
import Starfield from '@/components/HeroHeader/Starfield';
import styles from './SocialHero.module.css';

export default function SocialHero() {
  return (
    <section className={styles.hero} suppressHydrationWarning>
      <Starfield shooters={2} stars={6} />
      <span className={styles.watermark} aria-hidden="true">SOCIAL</span>

      <div className={styles.inner}>
        <Link href="/solutions" className={styles.back}>
          <span className={styles.backArrow}>←</span> Services
        </Link>

        <span className={styles.kicker}>SOCIAL MEDIA MARKETING</span>

        <h1 className={styles.headline}>
          <span className={styles.solid}>GROW YOUR</span>
          <span className={styles.script}>Brand online.</span>
        </h1>

        <p className={styles.subtitle}>
          Viral reels, UGC, influencer collabs, and full-funnel Instagram strategy
          — built by a team that grew a creator from 4K to 427K followers.
        </p>

        <div className={styles.actions}>
          <a href="/onboarding" className={styles.primaryBtn}>
            START YOUR PROJECT <span className={styles.arrow}>→</span>
          </a>
          <a href="#contact" className={styles.secondaryBtn}>FREE SOCIAL AUDIT</a>
        </div>
      </div>
    </section>
  );
}
