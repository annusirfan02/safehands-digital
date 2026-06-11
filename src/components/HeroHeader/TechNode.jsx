'use client';

import styles from './TechNode.module.css';

/**
 * A single AI-technology node in the constellation.
 * When `active`, it glows and scales up (driven by the parent cycle).
 */
export default function TechNode({ offering, active, code, color }) {
  const { tech, Icon } = offering;
  const accent = color || offering.color;

  return (
    <div
      className={`${styles.node} ${active ? styles.active : ''}`}
      style={{ '--accent': accent }}
    >
      <div className={styles.disc}>
        <span className={styles.ring} />
        <span className={styles.icon}>
          <Icon />
        </span>
      </div>
      <div className={styles.meta}>
        <span className={styles.label}>{tech}</span>
        <span className={styles.code}>{code}</span>
      </div>
    </div>
  );
}
