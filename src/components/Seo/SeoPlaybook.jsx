'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './SeoPlaybook.module.css';

gsap.registerPlugin(ScrollTrigger);

const ic = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
const Search = () => (<svg {...ic}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>);
const Cloud = () => (<svg {...ic}><path d="M18 10a4 4 0 0 0-7.6-1.5A3.5 3.5 0 1 0 8 16.5h9.5a3.5 3.5 0 0 0 .5-6.5z" /></svg>);
const Shield = () => (<svg {...ic}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /></svg>);
const Bolt = () => (<svg {...ic}><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></svg>);
const Share = () => (<svg {...ic}><circle cx="6" cy="12" r="2.5" /><circle cx="17" cy="6" r="2.5" /><circle cx="17" cy="18" r="2.5" /><path d="M8.2 10.9l6.6-3.8M8.2 13.1l6.6 3.8" /></svg>);

const CARDS = [
  { c: '#2b9fe0', Icon: Search, kicker: 'AI OVERVIEWS (GOOGLE SGE)', title: 'Answer directly or get skipped.', desc: "Google's AI now answers questions at the top of the results page before users ever click. Content must be structured to answer concisely, cite sources clearly, and match conversational query patterns." },
  { c: '#a855f7', Icon: Cloud, kicker: 'PERPLEXITY & CHATGPT CITATIONS', title: 'Being cited by LLMs is the new page 1.', desc: 'Millions of users now ask AI assistants instead of searching Google. Getting your brand cited by Perplexity, ChatGPT, and Claude is the new SEO frontier — and it requires deliberate content and entity strategy.' },
  { c: '#10b981', Icon: Shield, kicker: 'E-E-A-T', title: 'Experience. Expertise. Authority. Trust.', desc: "Google's quality rater guidelines now weight E-E-A-T (adding Experience to the original E-A-T) more heavily than ever. Author credentials, first-hand expertise signals, and trust indicators on your site directly impact rankings." },
  { c: '#f5a623', Icon: Bolt, kicker: 'CORE WEB VITALS', title: 'LCP, INP, CLS are now ranking factors.', desc: 'Google officially uses page experience signals in ranking. Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) must hit "Good" thresholds — especially on mobile — or you’re leaving rankings on the table.' },
  { c: '#ff4d9d', Icon: Share, kicker: 'ENTITY SEO', title: 'Google thinks in entities, not just keywords.', desc: "Google's Knowledge Graph is built on entities — people, places, organizations, concepts. Structured data, Wikipedia mentions, Wikidata entries, and consistent entity signals across the web tell Google who you are and what you do at a semantic level." },
];

export default function SeoPlaybook() {
  const rootRef = useRef(null);
  const gridRef = useRef(null);

  // Cards fade in one after another — only once the section scrolls into view.
  useGSAP(() => {
    const cards = gridRef.current.querySelectorAll('[data-card]');
    gsap.from(cards, {
      opacity: 0,
      y: 34,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 80%', toggleActions: 'play none none none' },
    });
  }, { scope: rootRef });

  return (
    <section ref={rootRef} className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.kicker}>THE 2026 PLAYBOOK</span>
          <h2 className={styles.heading}>
            <span className={styles.solid}>SEO HAS</span>
            <span className={styles.script}>Changed.</span>
          </h2>
          <p className={styles.subtitle}>
            Most agencies are still running the 2019 playbook. Here&rsquo;s what
            actually matters for ranking in 2026.
          </p>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {CARDS.map((card) => (
            <article key={card.title} data-card className={styles.card} style={{ '--c': card.c }}>
              <span className={styles.topGlow} />
              <span className={styles.icon}><card.Icon /></span>
              <span className={styles.cardKicker}>{card.kicker}</span>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.desc}>{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
