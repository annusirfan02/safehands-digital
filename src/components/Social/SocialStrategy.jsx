'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './SocialStrategy.module.css';

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    c: '#8fce3f', num: '01', title: 'Funnel Building',
    desc: 'We map every post to a stage — awareness, engagement, or conversion. Content is engineered to move followers down the funnel, not just rack up views.',
    items: ['Top-of-funnel viral hooks', 'Mid-funnel educational carousels', 'Bottom-funnel DM-to-sale scripts', 'Story funnels with link-in-bio CTAs'],
  },
  {
    c: '#ff4d9d', num: '02', title: 'Viral Reels',
    desc: 'We study what goes viral on Instagram and TikTok every week, then engineer hooks, pacing, and storytelling structures that trigger shares.',
    items: ['Hook-first scriptwriting (first 2 seconds)', 'Trending audio research', 'A/B tested thumbnails', 'Native captions & subtitles'],
  },
  {
    c: '#2bb0e0', num: '03', title: 'UGC Creation',
    desc: 'Authentic user-generated content outperforms polished ads. We produce and source UGC that feels real — and converts like crazy.',
    items: ['UGC video production', 'Creator casting & briefing', 'Raw-style product demos', 'Testimonial-format reels'],
  },
  {
    c: '#ff8c1e', num: '04', title: 'Influencer Collabs',
    desc: 'We connect brands with vetted creators who actually move the needle — nano to macro, across every niche.',
    items: ['Niche influencer sourcing', 'Campaign briefing & management', 'Event activations', 'Gifting & paid partnerships'],
  },
];

export default function SocialStrategy() {
  const rootRef = useRef(null);
  const gridRef = useRef(null);

  // Boxes animate up from below as the section scrolls into view.
  useGSAP(() => {
    const cards = gridRef.current.querySelectorAll('[data-pillar]');
    gsap.from(cards, {
      opacity: 0, y: 48, duration: 0.7, stagger: 0.16, ease: 'power3.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 82%', toggleActions: 'play none none none' },
    });
  }, { scope: rootRef });

  return (
    <section ref={rootRef} className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.kicker}><i className={styles.kickerDot} /> THE SYSTEM · 4 PILLARS</span>
          <h2 className={styles.heading}>
            <span className={styles.solid}>OUR INSTAGRAM</span>
            <span className={styles.script}>Strategy.</span>
          </h2>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {PILLARS.map((p) => (
            <article key={p.num} data-pillar className={styles.card} style={{ '--c': p.c }}>
              <span className={styles.topGlow} />
              <div className={styles.cardTop}>
                <span className={styles.num}>{p.num}</span>
                <span className={styles.arrow}>→</span>
              </div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <ul className={styles.list}>
                {p.items.map((it) => (
                  <li key={it} className={styles.item}><span className={styles.dot} />{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
