'use client';

import WalkingDog from './WalkingDog';
import styles from './AgencyIntro.module.css';

/**
 * "More than an agency" intro section. Sits between the Ask-AI search and the
 * Services ("What We Do") grid. Features a cartoon dog that walks left → right.
 */
export default function AgencyIntro() {
  return (
    <section id="about" className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* Left - copy */}
          <div className={styles.copy}>
            <span className={styles.kicker}>MORE THAN AN AGENCY</span>

            <h2 className={styles.heading}>
              <span className={styles.solid}>WE ARE YOUR</span>
              <span className={styles.accent}>IN-HOUSE</span>
              <span className={styles.outline}>MARKETING</span>
              <span className={styles.outline}>TEAM<span className={styles.dot}>.</span></span>
            </h2>
          </div>

          {/* Right - description + actions */}
          <div className={styles.side}>
            <p className={styles.lead}>
              We&rsquo;re a forward-thinking digital marketing agency in Riyadh,
              Saudi Arabia, blending creativity with the power of AI. From SEO and
              paid advertising to viral social media and custom AI assistants, we
              help brands across the Kingdom grow.
            </p>

            <div className={styles.actions}>
              <a href="#services" className={styles.ctaPrimary}>OUR SERVICES</a>
              <a href="#maya" className={styles.ctaLink}>MEET THE TEAM</a>
            </div>
          </div>
        </div>
      </div>

      {/* Dog walks corner-to-corner across the full screen width */}
      <WalkingDog />
    </section>
  );
}
