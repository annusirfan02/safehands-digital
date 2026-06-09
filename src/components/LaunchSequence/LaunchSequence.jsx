'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { FEATURES } from './features.data';
import FeatureRow from './FeatureRow';
import Spaceship from './Spaceship';
import styles from './LaunchSequence.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function LaunchSequence() {
  const sectionRef  = useRef(null);
  const headerRef   = useRef(null);
  const timelineRef = useRef(null);
  const trackFillRef = useRef(null);
  const shipRef     = useRef(null);

  useGSAP(() => {
    const timelineEl = timelineRef.current;
    const ship = shipRef.current;
    if (!timelineEl || !ship) return;

    // ── Header entrance ──
    gsap.from(headerRef.current?.children ?? [], {
      opacity: 0,
      y: 40,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: headerRef.current, start: 'top 82%' },
    });

    // ── Ship descends from the FIRST node to the LAST node ──
    const nodes = timelineEl.querySelectorAll('[data-node]');
    const firstNode = nodes[0];
    const lastNode = nodes[nodes.length - 1];

    // Layout-relative centre Y of a node (scroll-independent).
    const centerY = (el) => {
      const t = timelineEl.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      return r.top - t.top + r.height / 2;
    };

    const startY = () => (firstNode ? centerY(firstNode) - ship.offsetHeight / 2 : 0);
    const endY = () => (lastNode ? centerY(lastNode) - ship.offsetHeight / 2 : 0);
    const endRatio = () =>
      lastNode ? Math.min(1, centerY(lastNode) / timelineEl.offsetHeight) : 1;

    gsap.set(ship, { xPercent: -50 });

    const scrub = {
      trigger: timelineEl,
      start: 'top 42%',
      end: 'bottom 58%',
      scrub: 0.6,
    };

    gsap.fromTo(
      ship,
      { y: startY },
      { y: endY, ease: 'none', scrollTrigger: scrub }
    );

    // Trail fills only down to the last node (so it ends with the ship).
    gsap.fromTo(
      trackFillRef.current,
      { scaleY: 0 },
      { scaleY: endRatio, ease: 'none', scrollTrigger: scrub }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={styles.section} suppressHydrationWarning>
      <div className={styles.bgText} aria-hidden="true">DIFFERENT</div>

      {/* Header */}
      <header ref={headerRef} className={styles.header}>
        <span className={styles.label}>
          <i className={styles.labelDot} />
          LAUNCH SEQUENCE
        </span>
        <h2 className={styles.heading}>
          <span className={styles.headingSolid}>WHAT MAKES</span>
          <span className={styles.headingOutline}>US DIFFERENT?</span>
        </h2>
      </header>

      {/* Scroll-driven timeline */}
      <div ref={timelineRef} className={styles.timeline}>
        <div className={styles.track}>
          <div ref={trackFillRef} className={styles.trackFill} />
        </div>

        <Spaceship ref={shipRef} />

        {FEATURES.map((feature) => (
          <FeatureRow key={feature.stat} feature={feature} />
        ))}
      </div>
    </section>
  );
}
