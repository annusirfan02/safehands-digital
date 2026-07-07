'use client';

import Starfield from '@/components/HeroHeader/Starfield';
import ContactMascot from './ContactMascot';
import styles from './ContactHero.module.css';

export default function ContactHero() {
  return (
    <section className={styles.hero} suppressHydrationWarning>
      <Starfield shooters={2} stars={6} />
      <span className={styles.watermark} aria-hidden="true">CONTACT</span>

      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.kicker}>GET IN TOUCH</span>
          <h1 className={styles.headline}>
            <span className={styles.solid}>LET&rsquo;S BUILD</span>
            <span className={styles.accent}>SOMETHING</span>
            <span className={styles.script}>Great.</span>
          </h1>
          <p className={styles.subtitle}>
            Every great project begins with a conversation. Tell us about your goals
            and we&rsquo;ll build a custom strategy.
          </p>
          <div className={styles.actions}>
            <a href="/onboarding" className={styles.primaryBtn}>
              START YOUR PROJECT <span className={styles.arrow}>→</span>
            </a>
            <a
              href="https://wa.me/966552762034?text=Hi%20Safe%20Hands%20Digital%2C%20I%27d%20like%20to%20talk%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-11.9 7.6L3 21l1.9-6.1A8.4 8.4 0 1 1 21 11.5z" /></svg>
              TEXT US
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <ContactMascot />
        </div>
      </div>
    </section>
  );
}
