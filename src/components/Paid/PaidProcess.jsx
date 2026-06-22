'use client';

import styles from './PaidProcess.module.css';

const ic = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
const Search = () => (<svg {...ic}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>);
const Video = () => (<svg {...ic}><rect x="3" y="6" width="13" height="12" rx="2.5" /><path d="M16 10l5-3v10l-5-3z" /></svg>);
const Bolt = () => (<svg {...ic}><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></svg>);
const Trend = () => (<svg {...ic}><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>);

const STEPS = [
  { c: '#2bb0e0', Icon: Search, num: 'STEP 01', title: 'Research & Mapping', desc: 'We audit your competitors, study what creative is winning in your category right now, and map the full funnel before a single dollar is spent.' },
  { c: '#a855f7', Icon: Video, num: 'STEP 02', title: 'UGC Creative Production', desc: 'Hook-first scripts, UGC-style shoots, and platform-native editing. We make ads that feel organic, because those convert 3× better than polished brand spots.' },
  { c: '#8fce3f', Icon: Bolt, num: 'STEP 03', title: 'Launch & A/B Test', desc: 'Multi-variant launches from day one. We test audiences, hooks, visuals, and CTAs simultaneously, letting data pick winners within the first 72 hours.' },
  { c: '#2dd4bf', Icon: Trend, num: 'STEP 04', title: 'Optimize & Scale', desc: "We kill what doesn't work and pour budget into what does. Weekly reporting, ROAS-driven decisions, and continuous creative refresh to prevent ad fatigue." },
];

export default function PaidProcess() {
  return (
    <section className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.kicker}><i className={styles.kickerDot} /> THE PROCESS · 4 STEPS</span>
          <h2 className={styles.heading}>
            <span className={styles.solid}>HOW WE</span>
            <span className={styles.script}>Run Ads.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {STEPS.map((s) => (
            <article key={s.num} className={styles.card} style={{ '--c': s.c }}>
              <span className={styles.topGlow} />
              <svg className={styles.curveTop} viewBox="0 0 100 3.5" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 0 H100 V1 Q50 6 0 1 Z" />
              </svg>
              <span className={styles.icon}><s.Icon /></span>
              <span className={styles.stepNum}>{s.num}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
