'use client';

import TechNode from './TechNode';
import { OFFERINGS } from './offerings.data';
import { useTheme } from '@/lib/useTheme';
import styles from './TechConstellation.module.css';

/**
 * Scattered constellation of AI technologies on the right side.
 * The `activeIndex` (driven by the parent cycle) decides which node
 * glows / enhances at any moment.
 */
export default function TechConstellation({ activeIndex }) {
  const theme = useTheme();

  return (
    <div className={styles.constellation} aria-label="Our AI technologies">
      {OFFERINGS.map((offering, i) => (
        <div
          key={offering.tech}
          className={styles.slot}
          style={{ top: offering.pos.top, left: offering.pos.left }}
        >
          <TechNode
            offering={offering}
            color={theme === 'light' ? offering.colorLight : offering.color}
            active={i === activeIndex}
            code={`SYS-0${i + 1}`}
          />
        </div>
      ))}
    </div>
  );
}
