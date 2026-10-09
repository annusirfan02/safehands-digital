'use client';

import { useEffect, useState } from 'react';
import TechConstellation from './TechConstellation';
import Starfield from './Starfield';
import { OFFERINGS, CYCLE_MS } from './offerings.data';
import styles from './HeroHeader.module.css';

export default function HeroHeader() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Cycles the highlighted service in the constellation (Engineering first).
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % OFFERINGS.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.hero} suppressHydrationWarning>
      <Starfield />

      <div className={styles.inner}>
        {/* ── Left: copy ── */}
        <div className={styles.left}>
          <span className={styles.kicker}>
            <i className={styles.kickerLine} />
            MEP · HVAC · THERMAL STORAGE O&amp;M
          </span>

          {/* Client copy. The previous rotating headline ("WE BUILD “___” SYSTEMS
              THAT MOVE BUSINESS.") lives in RotatingHeadline.jsx if needed again. */}
          <h1 className={styles.heroTitle}>
            <span className={styles.titleOutline}>Elite MEP, HVAC &amp;</span>
            <span className={styles.titleAccent}>Specialized Thermal Storage</span>
            <span className={styles.titleSolid}>O&amp;M Services.</span>
          </h1>

          <p className={styles.subtitle}>
            At Safe Hands, we deliver data-driven engineering, operations, and maintenance
            (O&amp;M) methodologies to maximize facility uptime, reduce energy usage, and
            extend the lifespan of critical equipment. From advanced industrial cooling
            plants to complex life safety networks, we keep your buildings running safely
            and efficiently.
          </p>
          <p className={styles.subtitleNote}>
            We are proud to feature proprietary <strong>German Technology</strong> within our
            specialized <strong>SP.ICE Thermal Storage</strong> systems, bringing world-class
            thermodynamic innovation directly to your bottom line.
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
