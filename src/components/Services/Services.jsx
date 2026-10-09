'use client';

import { useState } from 'react';
import RevealHeading from './RevealHeading';
import ServiceCard from './ServiceCard';
import { SERVICES, INITIAL_COUNT } from './services.data';
import styles from './Services.module.css';

export default function Services() {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? SERVICES : SERVICES.slice(0, INITIAL_COUNT);
  const remaining = SERVICES.length - INITIAL_COUNT;

  return (
    <section id="services" className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.head}>
          <div className={styles.headLeft}>
            <span className={styles.label}>SERVICE PORTFOLIOS</span>
            <RevealHeading text="CORE SERVICES." />
          </div>
          <p className={styles.helper}>
            Hover any card to see what we do. Click to explore the full service.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {visible.map((service) => (
            <ServiceCard key={service.num} service={service} />
          ))}
        </div>

        {/* Show more / less */}
        {remaining > 0 && (
          <div className={styles.moreWrap}>
            <button
              type="button"
              className={styles.moreBtn}
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? 'SHOW LESS' : `SHOW ${remaining} MORE SERVICES`}
              <span className={`${styles.chev} ${expanded ? styles.chevUp : ''}`}>⌄</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
