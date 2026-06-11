'use client';

import Starfield from '@/components/HeroHeader/Starfield';
import styles from './AIEHero.module.css';

export default function AIEHero() {
  return (
    <section className={styles.hero} suppressHydrationWarning>
      <Starfield shooters={3} />

      <span className={styles.watermark} aria-hidden="true">AI</span>

      <div className={styles.inner}>
        <span className={styles.kicker}>
          <i className={styles.kickerDot} />
          AI OPERATIONS AGENCY · MIAMI &amp; NEW YORK
        </span>

        <h1 className={styles.headline}>
          <span className={styles.accent}>AI EMPLOYEES</span>
          <span className={styles.script}>for your</span>
          <span className={styles.script}>business<span className={styles.dot}>.</span></span>
        </h1>

        <p className={styles.subtitle}>
          Your clients don&rsquo;t want &ldquo;AI.&rdquo; They want more leads, faster
          follow-up, and less manual work. We build the systems that deliver exactly
          that — running 24/7 without payroll.
        </p>

        <div className={styles.actions}>
          <a href="#operators" className={styles.primaryBtn}>
            SEE WHAT WE BUILD <span className={styles.arrow}>→</span>
          </a>
          <a href="#meet-maya" className={styles.secondaryBtn}>
            MEET MAYA <span className={styles.arrowDown}>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
