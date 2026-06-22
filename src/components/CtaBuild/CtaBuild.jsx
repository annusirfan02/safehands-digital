'use client';

import Mascot from './Mascot';
import RotatingBadge from './RotatingBadge';
import styles from './CtaBuild.module.css';

export default function CtaBuild({
  kicker = 'READY TO GROW?',
  line1 = 'LET’S BUILD',
  line2 = 'SOMETHING',
  ctaLabel = 'START YOUR PROJECT',
  ctaHref = '/onboarding',
}) {
  return (
    <section id="contact" className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        {/* Left - mascot */}
        <div className={styles.left}>
          <Mascot />
        </div>

        {/* Right - copy */}
        <div className={styles.right}>
          <span className={styles.kicker}>{kicker}</span>

          <h2 className={styles.heading}>
            <span className={styles.outline}>{line1}</span>
            <span className={styles.solid}>{line2}<span className={styles.dot}>.</span></span>
          </h2>

          <div className={styles.actions}>
            <a href={ctaHref} className={styles.cta}>
              {ctaLabel} <span className={styles.arrow}>→</span>
            </a>
            <RotatingBadge />
          </div>

          <span className={styles.locations}>RIYADH · SAUDI ARABIA</span>
        </div>
      </div>
    </section>
  );
}
