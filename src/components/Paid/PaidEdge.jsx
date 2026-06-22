'use client';

import styles from './PaidEdge.module.css';

const ic = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
const Users = () => (<svg {...ic}><circle cx="9" cy="8" r="3" /><path d="M3.5 20c0-3.2 2.5-5.5 5.5-5.5s5.5 2.3 5.5 5.5" /><circle cx="17.6" cy="9" r="2.1" /><path d="M16.6 14.2c2.4.2 3.9 1.9 3.9 4.3" /></svg>);
const Pen = () => (<svg {...ic}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>);
const Monitor = () => (<svg {...ic}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>);
const Funnel = () => (<svg {...ic}><path d="M3 5h18l-7 8.5V20l-4-2.2v-4.3z" /></svg>);
const Cloud = () => (<svg {...ic}><path d="M18 10a4 4 0 0 0-7.6-1.5A3.5 3.5 0 1 0 8 16.5h9.5a3.5 3.5 0 0 0 .5-6.5z" /></svg>);
const Chart = () => (<svg {...ic}><path d="M3 21h18" /><rect x="5" y="11" width="3" height="7" rx="1" /><rect x="11" y="6" width="3" height="12" rx="1" /><rect x="16.5" y="14" width="3" height="4" rx="1" /></svg>);

const CARDS = [
  { c: '#a855f7', Icon: Users, title: 'UGC-First Creative', desc: 'Every campaign starts with user-generated-style content, raw, real, and impossible to scroll past. We produce it in-house or cast creators to match your brand voice.' },
  { c: '#ff8c1e', Icon: Pen, title: 'Hook Engineering', desc: 'The first 2 seconds determine everything. We write, test, and iterate on hooks until we find the one that stops the scroll, then build the rest of the ad around it.' },
  { c: '#2bb0e0', Icon: Monitor, title: 'Platform-Native Format', desc: 'TikTok ads that feel like TikToks. Instagram ads that blend into the feed. We never repurpose, every creative is built specifically for how users consume that platform.' },
  { c: '#8fce3f', Icon: Funnel, title: 'Full-Funnel Strategy', desc: 'Awareness → consideration → conversion → retention. We map every ad to a funnel stage and build retargeting flows that recapture lost revenue.' },
  { c: '#ff4d9d', Icon: Cloud, title: 'AI-Powered Optimization', desc: 'We pair human creative instinct with AI media-buying tools, automated bidding, lookalike expansion, and real-time budget allocation based on performance signals.' },
  { c: '#2dd4bf', Icon: Chart, title: 'Weekly Reporting', desc: "No black boxes. Every Monday you get a clear report: spend, ROAS, CPM, CTR, and what we're testing next. You always know where your money is going." },
];

export default function PaidEdge() {
  return (
    <section className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.kicker}>OUR EDGE</span>
          <h2 className={styles.heading}>
            <span className={styles.solid}>WHY OUR ADS</span>
            <span className={styles.script}>Convert.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {CARDS.map((card) => (
            <article key={card.title} className={styles.card} style={{ '--c': card.c }}>
              <span className={styles.topGlow} />
              <span className={styles.icon}><card.Icon /></span>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.desc}>{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
