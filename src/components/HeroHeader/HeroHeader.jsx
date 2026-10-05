'use client';

import { useEffect, useState } from 'react';
import RotatingHeadline from './RotatingHeadline';
import TechConstellation from './TechConstellation';
import Starfield from './Starfield';
import { OFFERINGS, CYCLE_MS } from './offerings.data';
import { useTheme } from '@/lib/useTheme';
import styles from './HeroHeader.module.css';

export default function HeroHeader() {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();

  // One timer drives BOTH the headline word and the highlighted technology.
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % OFFERINGS.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const active = OFFERINGS[activeIndex];
  const wordColor = theme === 'light' ? active.colorLight : active.color;

  return (
    <section className={styles.hero} suppressHydrationWarning>
      <Starfield />

      <div className={styles.inner}>
        {/* ── Left: copy ── */}
        <div className={styles.left}>
          <span className={styles.kicker}>
            <i className={styles.kickerLine} />
            ENGINEERING &amp; AI SOLUTIONS
          </span>

          <RotatingHeadline
            word={active.word}
            color={wordColor}
            top="WE&nbsp;BUILD"
            bottom={['SYSTEMS THAT', 'MOVE BUSINESS.']}
          />
          <p className={styles.headOutline}>
            Engineered for performance.<br />Built for growth.
          </p>

          <p className={styles.subtitle}>
            From physical engineering infrastructure to intelligent AI and business
            systems, Safe Hands builds practical solutions that help organizations
            operate smarter, perform better, and scale with confidence.
          </p>

          <div className={styles.actions}>
            <a href="/onboarding" className={styles.primaryBtn}>
              START YOUR PROJECT
              <span className={styles.arrow}>→</span>
            </a>
            <a href="#portfolio" className={styles.secondaryBtn}>
              SEE WORK
            </a>
          </div>
        </div>

        {/* ── Right: AI technology constellation ── */}
        <div className={styles.right}>
          <TechConstellation activeIndex={activeIndex} />
        </div>
      </div>
    </section>
  );
}
