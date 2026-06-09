'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './RevealHeading.module.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * Renders `text` letter-by-letter. As the user scrolls into the section the
 * letters brighten from dim → white in sequence (scrubbed to scroll position).
 */
export default function RevealHeading({ text }) {
  const ref = useRef(null);

  useGSAP(() => {
    const letters = ref.current.querySelectorAll('[data-letter]');

    gsap.fromTo(
      letters,
      { opacity: 0.14, y: 14 },
      {
        opacity: 1,
        y: 0,
        ease: 'none',
        stagger: 0.5,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 88%',
          end: 'top 38%',
          scrub: 0.5,
        },
      }
    );
  }, { scope: ref });

  return (
    <h2 ref={ref} className={styles.heading} aria-label={text}>
      {text.split('').map((ch, i) => (
        <span key={i} data-letter className={styles.letter} aria-hidden="true">
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </h2>
  );
}
