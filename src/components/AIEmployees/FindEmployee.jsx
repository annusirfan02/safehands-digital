'use client';

import { useState } from 'react';
import styles from './FindEmployee.module.css';

const OPTIONS = [
  { q: 'Not enough leads coming in',        a: 'Maya, Growth Strategist' },
  { q: 'Leads go cold before we reply',     a: 'Nova, Support & Success' },
  { q: 'Too much manual, repetitive work',  a: 'Alex, Paid Ads Operator' },
  { q: 'We can’t produce content fast enough', a: 'Max, Content Creator' },
];

export default function FindEmployee() {
  const [picked, setPicked] = useState(null);

  return (
    <section className={styles.section} suppressHydrationWarning>
      <span className={styles.bgText} aria-hidden="true">AI</span>

      <div className={styles.inner}>
        <span className={styles.kicker}>· INTERACTIVE · 60 SECONDS ·</span>
        <h2 className={styles.heading}>
          <span className={styles.solid}>FIND YOUR</span>
          <span className={styles.script}>AI employee.</span>
        </h2>
        <p className={styles.sub}>Answer 1 question and we&rsquo;ll match you with the right AI operator for your business.</p>

        <div className={styles.panel}>
          <div className={styles.panelHead}>
            <span className={styles.dotRed} /><span className={styles.dotAmber} /><span className={styles.dotGreen} />
          </div>
          <h3 className={styles.panelQ}>What&rsquo;s your biggest bottleneck right now?</h3>

          <div className={styles.options}>
            {OPTIONS.map((o, i) => (
              <button
                key={i}
                type="button"
                className={`${styles.option} ${picked === i ? styles.optionActive : ''}`}
                onClick={() => setPicked(i)}
              >
                <span className={styles.optionDot} />
                {o.q}
              </button>
            ))}
          </div>

          {picked !== null && (
            <div className={styles.result}>
              <span className={styles.resultLabel}>YOUR MATCH</span>
              <span className={styles.resultName}>{OPTIONS[picked].a}</span>
              <a href="/onboarding" className={styles.resultCta}>GET STARTED →</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
