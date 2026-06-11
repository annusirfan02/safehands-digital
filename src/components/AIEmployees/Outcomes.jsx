'use client';

import styles from './Outcomes.module.css';

const BAD = [
  'Custom GPTs nobody uses',
  'Claude / ChatGPT wrappers',
  '"AI automation" with no ROI',
  'MCP agents that break in week 2',
  'Chatbot software, not strategy',
];

const TrendIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="#0a1207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>);
const CalIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="#0a1207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4.5" width="18" height="17" rx="2.5" /><path d="M3 9.5h18M8 2.5v4M16 2.5v4" /></svg>);
const ClockIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="#0a1207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7.5v5l3 2" /></svg>);
const DollarIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="#0a1207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5.5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>);
const BoltIcon = () => (<svg viewBox="0 0 24 24" fill="#0a1207" stroke="#0a1207" strokeWidth="1.4" strokeLinejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></svg>);

const GOOD = [
  { Icon: TrendIcon,  title: 'More leads in your pipeline',  sub: 'AI sources & researches prospects automatically' },
  { Icon: CalIcon,    title: 'More appointments booked',     sub: 'Personalized outreach at scale gets replies' },
  { Icon: ClockIcon,  title: 'Less time on manual work',     sub: 'Repetitive tasks handled by AI, not headcount' },
  { Icon: DollarIcon, title: 'No extra payroll',             sub: 'AI runs 24/7 at a fraction of hiring cost' },
  { Icon: BoltIcon,   title: 'Faster execution on everything', sub: 'What takes a team a week, AI does in hours' },
];

export default function Outcomes() {
  return (
    <section className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.kicker}><i className={styles.kickerDot} /> THE REAL CONVERSATION</span>
          <h2 className={styles.heading}>
            <span className={styles.solid}>YOU DON&rsquo;T NEED <span className={styles.quoted}>&ldquo;AI.&rdquo;</span></span>
            <span className={styles.script}>You need outcomes.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Left — what most agencies sell */}
          <div className={`${styles.card} ${styles.bad}`}>
            <span className={styles.badLabel}><i className={styles.badDot} /> WHAT MOST AGENCIES SELL</span>
            <ul className={styles.badList}>
              {BAD.map((t, i) => (
                <li key={i} className={styles.badItem}>
                  <span className={styles.x}>✕</span>{t}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — what we actually deliver */}
          <div className={`${styles.card} ${styles.good}`}>
            <span className={styles.goodLabel}><i className={styles.goodDot} /> WHAT WE ACTUALLY DELIVER</span>
            <ul className={styles.goodList}>
              {GOOD.map(({ Icon, title, sub }, i) => (
                <li key={i} className={styles.goodItem}>
                  <span className={styles.goodIcon}><Icon /></span>
                  <div>
                    <div className={styles.itemTitle}>{title}</div>
                    <div className={styles.itemSub}>{sub}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
