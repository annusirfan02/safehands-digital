'use client';

import styles from './SearchResults.module.css';

export default function SearchResults({ results, query }) {
  return (
    <div className={styles.wrap}>
      <p className={styles.summary}>
        Found <strong>{results.length}</strong> result{results.length === 1 ? '' : 's'} for
        <span className={styles.query}> “{query}”</span>
      </p>

      <ul className={styles.list}>
        {results.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.head}>
                <span className={styles.category}>{item.category}</span>
                <span className={styles.title}>{item.title}</span>
              </div>
              <p className={styles.desc}>{item.description}</p>
              <span className={styles.go}>Read more ↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
