'use client';

import Starfield from '@/components/HeroHeader/Starfield';
import styles from './SolutionsHero.module.css';

export default function SolutionsHero() {
  return (
    <section className={styles.hero} suppressHydrationWarning>
      <Starfield shooters={3} />

      <span className={styles.watermark} aria-hidden="true">SERVICES</span>

      <div className={styles.inner}>
        <span className={styles.kicker}>WHAT WE OFFER</span>

        <h1 className={styles.headline}>
          <span className={styles.solid}>FULL-STACK</span>
          <span className={styles.script}>
            MARKETING<span className={styles.dot}>.</span>
          </span>
        </h1>

        <p className={styles.subtitle}>
          Everything you need to acquire customers and grow your brand —
          powered by AI and executed by licensed experts.
        </p>

        <a href="/#maya" className={styles.cta}>
          GET A FREE AUDIT <span className={styles.arrow}>→</span>
        </a>
      </div>
    </section>
  );
}
