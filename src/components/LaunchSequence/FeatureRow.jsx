'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import FeatureCard from './FeatureCard';
import TimelineNode from './TimelineNode';
import { playChime } from './chime';
import styles from './FeatureRow.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function FeatureRow({ feature }) {
  const rowRef  = useRef(null);
  const cardRef = useRef(null);
  const nodeRef = useRef(null);
  const wrapRef = useRef(null);
  const isLeft  = feature.side === 'left';

  useGSAP(() => {
    const card = cardRef.current;
    const node = nodeRef.current;

    gsap.set(card, { opacity: 0, x: isLeft ? -64 : 64, y: 28 });
    gsap.set(node, { scale: 0.2, opacity: 0.25 });

    gsap.timeline({
      scrollTrigger: {
        trigger: rowRef.current,
        start: 'top 78%',
        toggleActions: 'play none none reverse',
      },
    })
      .to(node, { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(2.6)' })
      .to(card, { opacity: 1, x: 0, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.25');

    // Arrival chime - fires when the ship reaches this node, scrolling DOWN only.
    ScrollTrigger.create({
      trigger: wrapRef.current,
      start: 'center center',
      onEnter: (self) => {
        if (self.direction === 1) playChime();
      },
    });
  }, { scope: rowRef, dependencies: [isLeft] });

  return (
    <div
      ref={rowRef}
      className={`${styles.row} ${isLeft ? styles.left : styles.right}`}
      style={{ '--accent-dark': feature.color, '--accent-light': feature.colorLight || feature.color }}
    >
      <div className={styles.cardCell}>
        <FeatureCard ref={cardRef} feature={feature} />
      </div>

      <span className={styles.connector} />

      <span ref={wrapRef} className={styles.nodeWrap} data-node>
        <TimelineNode ref={nodeRef} />
      </span>
    </div>
  );
}
