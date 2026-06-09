'use client';

import { forwardRef } from 'react';
import styles from './TimelineNode.module.css';

/**
 * Glowing node on the central track. Colour comes from the inherited
 * `--accent` CSS variable set on the parent row.
 */
const TimelineNode = forwardRef(function TimelineNode(_props, ref) {
  return (
    <div ref={ref} className={styles.node} aria-hidden="true">
      <span className={styles.ring} />
      <span className={styles.core} />
    </div>
  );
});

export default TimelineNode;
