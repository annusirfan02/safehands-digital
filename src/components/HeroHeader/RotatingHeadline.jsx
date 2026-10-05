'use client';

import styles from './RotatingHeadline.module.css';

/**
 * "<top> ___ <bottom>" - the middle slot cycles through service words,
 * each in its own colour. The `key` forces a remount so the CSS swap animation
 * replays on every change. `bottom` may be an array to force line breaks.
 */
export default function RotatingHeadline({ word, color, top = 'WE BRING', bottom = 'TO BRANDS.' }) {
  const bottomLines = Array.isArray(bottom) ? bottom : [bottom];

  return (
    <h1 className={styles.headline}>
      <span className={styles.lineOutline}>{top}</span>

      <span className={styles.slot}>
        <span className={styles.quote}>“</span>
        <span key={word} className={styles.word} style={{ color }}>
          {word}
        </span>
        <span className={styles.quote}>”</span>
      </span>

      {bottomLines.map((line) => (
        <span key={line} className={styles.lineSolid}>{line}</span>
      ))}
    </h1>
  );
}
