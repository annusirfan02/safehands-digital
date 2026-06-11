'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SolutionCard from './SolutionCard';
import { SOLUTIONS } from './solutions.data';
import styles from './SolutionsList.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function SolutionsList() {
  const rootRef = useRef(null);

  // Each card fades + slides up from the bottom as it scrolls into view.
  useGSAP(() => {
    const cards = rootRef.current.querySelectorAll('[data-card]');
    cards.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 56,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });
    });
  }, { scope: rootRef });

  return (
    <section id="solutions-list" ref={rootRef} className={styles.list} suppressHydrationWarning>
      <div className={styles.inner}>
        {SOLUTIONS.map((item) => (
          <SolutionCard key={item.num} item={item} />
        ))}
      </div>
    </section>
  );
}
