'use client';

import styles from './SolutionCard.module.css';

export default function SolutionCard({ item }) {
  const { num, tags, title, desc, features, price, color, gradient, href } = item;

  return (
    <article
      data-card
      className={styles.card}
      style={{ '--c': color, '--grad': gradient }}
    >
      <div className={styles.main}>
        <div className={styles.titleRow}>
          <span className={styles.num}>{num}</span>
          <div className={styles.head}>
            <span className={styles.tags}>{tags}</span>
            <h3 className={styles.title}>{title}</h3>
          </div>
        </div>

        <p className={styles.desc}>{desc}</p>

        <ul className={styles.features}>
          {features.map((f, i) => (
            <li key={i} className={styles.feature}>
              <span className={styles.dot} />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.invest}>
        <span className={styles.investLabel}>INVESTMENT</span>
        <span className={styles.price}>{price}</span>
        <a href={href || '/onboarding'} className={styles.btnPrimary}>
          GET STARTED <span className={styles.arrow}>→</span>
        </a>
      </div>
    </article>
  );
}
