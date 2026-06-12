'use client';

import { useRouter } from 'next/navigation';
import Starfield from '@/components/HeroHeader/Starfield';
import styles from './OnboardingHero.module.css';

export default function OnboardingHero() {
  const router = useRouter();

  return (
    <section className={styles.hero} suppressHydrationWarning>
      <Starfield shooters={3} stars={12} />

      <button type="button" className={styles.back} onClick={() => router.back()}>
        <span className={styles.backArrow}>←</span> Back to site
      </button>

      {/* Orbiting dot around the centre of the section */}
      <div className={styles.orbitWrap} aria-hidden="true">
        <span className={styles.ring} />
        <span className={styles.ringInner} />
        <div className={styles.orbit}><span className={styles.orbitDot} /></div>
      </div>

      <div className={styles.inner}>
        <span className={styles.kicker}>MISSION BRIEFING</span>
        <h1 className={styles.headline}>
          <span className={styles.script}>We build</span>
          <span className={styles.accent}>FUTURES<span className={styles.dot}>.</span></span>
        </h1>
        <p className={styles.subtitle}>
          Five questions.<br />
          One AI-powered strategy — built just for your brand.
        </p>
        <a href="#start" className={styles.cta}>
          START YOUR PROJECT <span className={styles.arrow}>→</span>
        </a>
      </div>
    </section>
  );
}
