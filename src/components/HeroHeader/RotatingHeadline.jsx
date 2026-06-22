'use client';

import styles from './RotatingHeadline.module.css';

/**
 * "WE BRING ___ TO BRANDS." - the middle slot cycles through service words,
 * each in its own colour. The `key` forces a remount so the CSS swap animation
 * replays on every change.
 */
export default function RotatingHeadline({ word, color }) {
  return (
    <h1 className={styles.headline}>
      <span className={styles.lineOutline}>WE&nbsp;BRING</span>

      <span className={styles.slot}>
        <span className={styles.quote}>“</span>
        <span key={word} className={styles.word} style={{ color }}>
          {word}
        </span>
        <span className={styles.quote}>”</span>
      </span>

      <span className={styles.lineSolid}>TO&nbsp;BRANDS.</span>
    </h1>
  );
}
