'use client';

import Link from 'next/link';
import Starfield from '@/components/HeroHeader/Starfield';
import styles from './ErpHero.module.css';

const TAGS = ['SAP', 'ETM.NEXT', 'QLIK', 'JAGGAER', 'SALESFORCE'];

export default function ErpHero() {
  return (
    <section className={styles.hero} suppressHydrationWarning>
      <Starfield shooters={2} stars={6} />
      <span className={styles.watermark} aria-hidden="true">ERP</span>

      <div className={styles.inner}>
        <Link href="/solutions" className={styles.back}>
          <span className={styles.backArrow}>←</span> Services
        </Link>

        <span className={styles.kicker}>ENTERPRISE SOLUTIONS</span>

        <h1 className={styles.headline}>
          <span className={styles.solid}>ERP SERVICES</span>
          <span className={styles.script}>&amp; Development.</span>
        </h1>

        <p className={styles.subtitle}>
          Enterprise solutions, custom software, and outsourcing, built to
          streamline operations and unlock your full potential. Bespoke delivery
          for clients across Saudi Arabia &amp; APAC.
        </p>

        <div className={styles.tags}>
          {TAGS.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
