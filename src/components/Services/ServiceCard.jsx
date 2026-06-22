'use client';

import { useFlipSound } from './useFlipSound';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ service }) {
  const { num, name, description, color, gradient, colorLight, gradientLight, href, Icon } = service;
  const playFlip = useFlipSound();

  return (
    <a
      className={styles.card}
      href={href}
      style={{
        '--svc-dark': color,
        '--svc-light': colorLight || color,
        '--grad-dark': gradient,
        '--grad-light': gradientLight || gradient,
      }}
      onMouseEnter={playFlip}
      aria-label={`${name}, explore service`}
    >
      <div className={styles.inner}>
        {/* ── Front (straight) ── */}
        <div className={styles.front}>
          <span className={styles.topBar} />

          <div className={styles.frontTop}>
            <span className={styles.icon}>
              <Icon />
            </span>
            <span className={styles.flipPill}>
              <span className={styles.flipGlyph}>⟳</span> FLIP
            </span>
          </div>

          <div className={styles.frontBottom}>
            <span className={styles.num}>{num}</span>
            <h3 className={styles.name}>{name}</h3>
          </div>

          <span className={styles.arrowBtn} aria-hidden="true">→</span>
        </div>

        {/* ── Back (flipped) ── */}
        <div className={styles.back}>
          <span className={styles.backNum}>{num}</span>
          <h3 className={styles.backName}>{name}</h3>
          <p className={styles.backDesc}>{description}</p>
          <span className={styles.explore}>
            EXPLORE <span className={styles.exploreArrow}>→</span>
          </span>
        </div>
      </div>
    </a>
  );
}
