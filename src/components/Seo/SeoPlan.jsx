'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './SeoPlan.module.css';

gsap.registerPlugin(ScrollTrigger);

const WEEKS = [
  { c: '#2b9fe0', badge: 'WEEK 1', title: 'Audit & Strategy', items: ['Full technical SEO audit', 'Competitor keyword gap analysis', 'Content & backlink audit', 'Monthly strategy document delivered'] },
  { c: '#10b981', badge: 'WEEK 2', title: 'Technical Fixes', items: ['Implement priority technical fixes', 'Schema markup updates', 'Site speed optimizations', 'Internal linking improvements'] },
  { c: '#a855f7', badge: 'WEEK 3', title: 'Content & Links', items: ['Blog content published', 'On-page optimizations', 'Link outreach campaigns sent', 'GMB updates & local citations'] },
  { c: '#ff8c1e', badge: 'WEEK 4', title: 'Reporting & Planning', items: ['Keyword ranking report delivered', 'Traffic & conversion report', 'Links built this month (with data)', 'Strategy call + next month plan'] },
];

export default function SeoPlan() {
  const rootRef = useRef(null);
  const gridRef = useRef(null);

  // Week cards fade in one after another (Week 1 → 2 → 3 → 4).
  useGSAP(() => {
    const cards = gridRef.current.querySelectorAll('[data-week]');
    gsap.from(cards, {
      opacity: 0,
      y: 34,
      duration: 0.6,
      stagger: 0.28,
      ease: 'power3.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 82%', toggleActions: 'play none none none' },
    });
  }, { scope: rootRef });

  return (
    <section ref={rootRef} className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.kicker}>HOW IT WORKS MONTH-TO-MONTH</span>
          <h2 className={styles.heading}>
            <span className={styles.solid}>THE MONTHLY</span>
            <span className={styles.script}>SEO plan.</span>
          </h2>
          <p className={styles.subtitle}>
            SEO is a long game, but that doesn&rsquo;t mean you should be in the dark.
            Here&rsquo;s exactly what happens every month when you work with us.
          </p>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {WEEKS.map((w) => (
            <article key={w.badge} data-week className={styles.card} style={{ '--c': w.c }}>
              <span className={styles.topGlow} />
              <span className={styles.badge}><i className={styles.badgeDot} /> {w.badge}</span>
              <h3 className={styles.title}>{w.title}</h3>
              <ul className={styles.list}>
                {w.items.map((it) => (
                  <li key={it} className={styles.item}><span className={styles.dot} />{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          Then we repeat, each month building on the last.{' '}
          <strong>Rankings compound. Traffic compounds. Results compound.</strong>
        </div>
      </div>
    </section>
  );
}
