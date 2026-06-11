'use client';

import { forwardRef } from 'react';
import styles from './FeatureCard.module.css';

const FeatureCard = forwardRef(function FeatureCard({ feature }, ref) {
  const { Icon, stat, title, desc } = feature;

  return (
    <article ref={ref} className={styles.card}>
      <div className={styles.head}>
        <span className={styles.icon}>
          <Icon />
        </span>
        <span className={styles.stat}>{stat}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
    </article>
  );
});

export default FeatureCard;
