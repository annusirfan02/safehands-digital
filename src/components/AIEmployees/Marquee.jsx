'use client';

import styles from './Marquee.module.css';

const ITEM = '24/7 OPERATORS · NO PAYROLL · TRAINED ON YOUR DATA · BUILT IN 2 WEEKS';

const Seg = (key) => (
  <span key={key} className={styles.item}>
    <span className={styles.dot}>●</span>
    {ITEM}
    <span className={styles.arrow}>↗</span>
  </span>
);

export default function Marquee() {
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {Array.from({ length: 6 }).map((_, i) => Seg(`a${i}`))}
        {Array.from({ length: 6 }).map((_, i) => Seg(`b${i}`))}
      </div>
    </div>
  );
}
