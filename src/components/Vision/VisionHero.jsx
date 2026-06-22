'use client';

import Link from 'next/link';
import Starfield from '@/components/HeroHeader/Starfield';
import styles from './VisionHero.module.css';

const TAGS = ['DIGITAL TRANSFORMATION', 'NATIONAL TRANSFORMATION PROGRAM', 'LOCALIZATION'];

export default function VisionHero() {
  return (
    <section className={styles.hero} suppressHydrationWarning>
      <Starfield shooters={2} stars={6} />
      <span className={styles.watermark} aria-hidden="true">2030</span>

      <div className={styles.inner}>
        <Link href="/" className={styles.back}>
          <span className={styles.backArrow}>←</span> Home
        </Link>

        <span className={styles.kicker}>SAUDI VISION 2030</span>

        <h1 className={styles.headline}>
          <span className={styles.solid}>BUILT FOR</span>
          <span className={styles.script}>Vision 2030.</span>
        </h1>

        <p className={styles.subtitle}>
          As a local Saudi company headquartered in Riyadh, SafeHands is built to
          power the Kingdom&rsquo;s transformation, turning the digital and
          localization ambitions of Vision 2030 into real, in-Kingdom results.
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
