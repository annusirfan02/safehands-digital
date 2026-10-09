'use client';

// import WalkingDog from './WalkingDog'; // hidden, see below
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
            <span className={styles.kicker}>TWO DISCIPLINES · ONE PARTNER</span>

            <h2 className={styles.heading}>
              <span className={styles.solid}>WE ARE YOUR</span>
              <span className={styles.accent}>IN-HOUSE</span>
              <span className={styles.outline}>ENGINEERING</span>
              <span className={styles.outline}>&amp; AI TEAM<span className={styles.dot}>.</span></span>
            </h2>
          </div>

          {/* Right - description + actions */}
          <div className={styles.side}>
            <p className={styles.lead}>
              We&rsquo;re a Riyadh-based engineering and AI automation company. We
              design, build and maintain the MEP, cooling and thermal-storage
              infrastructure behind high-performance facilities, and we build custom
              AI automation systems that take repetitive work off your team, like
              turning 100 daily emails into the few that matter, sorted, with replies
              ready.
            </p>

            <div className={styles.actions}>
              <a href="#services" className={styles.ctaPrimary}>OUR SERVICES</a>
              <a href="/contact" className={styles.ctaLink}>TALK TO THE TEAM</a>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden: walking dog ("WOOF! WORK WITH US"). Uncomment to bring it back. */}
      {/* <WalkingDog /> */}
    </section>
  );
}
