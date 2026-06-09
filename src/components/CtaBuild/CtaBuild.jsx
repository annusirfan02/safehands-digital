'use client';

import Mascot from './Mascot';
import RotatingBadge from './RotatingBadge';
import styles from './CtaBuild.module.css';

export default function CtaBuild() {
  return (
    <section id="contact" className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        {/* Left — mascot */}
        <div className={styles.left}>
          <Mascot />
        </div>

        {/* Right — copy */}
        <div className={styles.right}>
          <span className={styles.kicker}>READY TO GROW?</span>

          <h2 className={styles.heading}>
            <span className={styles.outline}>LET’S BUILD</span>
            <span className={styles.solid}>SOMETHING<span className={styles.dot}>.</span></span>
          </h2>

          <div className={styles.actions}>
            <a href="#maya" className={styles.cta}>
              START YOUR PROJECT <span className={styles.arrow}>→</span>
            </a>
            <RotatingBadge />
          </div>

          <span className={styles.locations}>MIAMI · NEW YORK</span>
        </div>
      </div>
    </section>
  );
}
