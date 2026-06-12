'use client';

import { useState, useEffect } from 'react';
import styles from './Operators.module.css';

const OPERATORS = [
  {
    name: 'Maya', role: 'AI Growth Strategist', badge: 'FULL-STACK AI', c: '#BFFE03',
    desc: 'Runs your entire growth engine end-to-end — sourcing leads, writing outreach, managing content, responding to inquiries, and reporting on everything.',
    workflow: ['Lead Sourcing', 'Personalized Outreach', 'Content Creation', 'Inbox Management', 'CRM Updates', 'Weekly Reports'],
    bestFor: ['Scaling companies', 'Agencies', 'Founders who want it all handled'],
    price: '$2,500–$5,000', per: '/mo',
  },
  {
    name: 'Alex', role: 'AI Ads Operator', badge: 'PERFORMANCE AI', c: '#2d80ff',
    desc: 'Builds and runs your Meta & Google ad campaigns — creative, targeting, bidding and round-the-clock optimization toward a measurable ROI.',
    workflow: ['Audience Research', 'Creative Production', 'Campaign Launch', 'Bid Optimization', 'A/B Testing', 'ROI Reports'],
    bestFor: ['E-commerce', 'Lead-gen offers', 'High ad budgets'],
    price: '$2,000–$4,000', per: '/mo',
  },
  {
    name: 'Zara', role: 'AI Social Manager', badge: 'SOCIAL AI', c: '#ff4d9d',
    desc: 'Plans, writes and schedules scroll-stopping content across TikTok, Instagram and LinkedIn — then engages your community around the clock.',
    workflow: ['Trend Research', 'Content Calendar', 'Video Production', 'Scheduling', 'Community Replies', 'Performance Reports'],
    bestFor: ['Personal brands', 'DTC brands', 'Local businesses'],
    price: '$1,800–$3,500', per: '/mo',
  },
  {
    name: 'Nova', role: 'AI Support Agent', badge: 'SUPPORT AI', c: '#a855f7',
    desc: 'Answers every lead and customer instantly — qualifying, booking calls and following up around the clock so nothing ever slips through.',
    workflow: ['Instant Replies', 'Lead Qualification', 'Call Booking', 'Follow-ups', 'CRM Sync', 'Daily Summary'],
    bestFor: ['Service businesses', 'High-volume leads', 'Clinics & agencies'],
    price: '$1,500–$3,000', per: '/mo',
  },
  {
    name: 'Max', role: 'AI Content Creator', badge: 'CREATIVE AI', c: '#ff8c1e',
    desc: 'Produces on-brand video, graphics, scripts and copy at scale — turning a single idea into a full week of content in minutes.',
    workflow: ['Idea Generation', 'Scriptwriting', 'Video Editing', 'Graphic Design', 'Copywriting', 'Asset Delivery'],
    bestFor: ['Content brands', 'Coaches', 'Course creators'],
    price: '$2,200–$4,500', per: '/mo',
  },
];

const DOTS = [
  { top: '14%', left: '20%' }, { top: '26%', left: '72%' }, { top: '40%', left: '12%' },
  { top: '62%', left: '80%' }, { top: '74%', left: '30%' }, { top: '52%', left: '58%' },
  { top: '85%', left: '66%' }, { top: '20%', left: '50%' },
];

const svgProps = { className: styles.robot, viewBox: '0 0 120 140', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' };
const body = <path d="M38 98 Q60 86 82 98 L79 122 Q60 132 41 122 Z" fill="var(--c)" />;
const neck = <rect x="51" y="80" width="18" height="8" rx="3" fill="var(--c)" />;
const bodyShine = <ellipse cx="58" cy="106" rx="16" ry="9" fill="rgba(255,255,255,0.16)" />;

// Green — Maya: round head, twin antennas, smile
const RobotGreen = () => (
  <svg {...svgProps}>
    <line x1="48" y1="32" x2="43" y2="16" stroke="var(--c)" strokeWidth="3" strokeLinecap="round" />
    <circle cx="42" cy="13" r="4.5" fill="var(--c)" />
    <line x1="72" y1="32" x2="77" y2="16" stroke="var(--c)" strokeWidth="3" strokeLinecap="round" />
    <circle cx="78" cy="13" r="4.5" fill="var(--c)" />
    <rect x="30" y="30" width="60" height="50" rx="20" fill="var(--c)" />
    <ellipse cx="48" cy="44" rx="17" ry="10" fill="rgba(255,255,255,0.25)" />
    <rect className={styles.face} x="39" y="42" width="42" height="28" rx="11" />
    <ellipse className={styles.eye} cx="51" cy="55" rx="5" ry="6" />
    <ellipse className={styles.eye} cx="69" cy="55" rx="5" ry="6" />
    <path className={styles.eyeLine} d="M50 63 Q60 69 70 63" fill="none" strokeWidth="2.6" strokeLinecap="round" />
    {neck}{body}{bodyShine}
  </svg>
);

// Blue — Alex: visor eye, side knobs, body grille
const RobotBlue = () => (
  <svg {...svgProps}>
    <line x1="45" y1="30" x2="41" y2="12" stroke="var(--c)" strokeWidth="2.4" strokeLinecap="round" />
    <circle cx="41" cy="10" r="3.2" fill="var(--c)" />
    <line x1="75" y1="30" x2="79" y2="12" stroke="var(--c)" strokeWidth="2.4" strokeLinecap="round" />
    <circle cx="79" cy="10" r="3.2" fill="var(--c)" />
    <rect x="23" y="46" width="9" height="16" rx="4" fill="var(--c)" />
    <rect x="88" y="46" width="9" height="16" rx="4" fill="var(--c)" />
    <rect x="30" y="28" width="60" height="52" rx="22" fill="var(--c)" />
    <ellipse cx="48" cy="42" rx="16" ry="9" fill="rgba(255,255,255,0.22)" />
    <rect className={styles.face} x="38" y="44" width="44" height="20" rx="8" />
    <rect className={styles.eye} x="43" y="51" width="34" height="6" rx="3" />
    {neck}{body}
    <circle className={styles.face} cx="52" cy="110" r="2" />
    <circle className={styles.face} cx="58" cy="110" r="2" />
    <circle className={styles.face} cx="64" cy="110" r="2" />
    <circle className={styles.face} cx="70" cy="110" r="2" />
  </svg>
);

// Pink — Zara: star eyes, diamond accents
const RobotPink = () => (
  <svg {...svgProps}>
    <line x1="60" y1="30" x2="60" y2="16" stroke="var(--c)" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M60 8 l4 5 -4 5 -4 -5 z" fill="var(--c)" />
    <rect x="30" y="30" width="60" height="50" rx="16" fill="var(--c)" />
    <ellipse cx="48" cy="44" rx="16" ry="9" fill="rgba(255,255,255,0.22)" />
    <rect className={styles.face} x="39" y="40" width="42" height="28" rx="10" />
    <path className={styles.eye} d="M51 47 Q51 54 58 54 Q51 54 51 61 Q51 54 44 54 Q51 54 51 47 z" />
    <path className={styles.eye} d="M69 47 Q69 54 76 54 Q69 54 69 61 Q69 54 62 54 Q69 54 69 47 z" />
    <path className={styles.eyeLine} d="M51 62 Q60 67 69 62" fill="none" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M22 56 l3 4 -3 4 -3 -4 z" fill="var(--c)" opacity="0.7" />
    <path d="M98 56 l3 4 -3 4 -3 -4 z" fill="var(--c)" opacity="0.7" />
    {neck}{body}
  </svg>
);

// Purple — Nova: diamond head, target eye
const RobotPurple = () => (
  <svg {...svgProps}>
    <line x1="60" y1="26" x2="60" y2="12" stroke="var(--c)" strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="60" cy="9" r="3.5" fill="var(--c)" />
    <rect x="38" y="34" width="44" height="44" rx="10" transform="rotate(45 60 56)" fill="var(--c)" />
    <rect className={styles.face} x="46" y="42" width="28" height="28" rx="6" transform="rotate(45 60 56)" />
    <circle className={styles.eyeLine} cx="60" cy="56" r="8" fill="none" strokeWidth="2.2" />
    <circle className={styles.eye} cx="60" cy="56" r="3.2" />
    <path d="M26 56 l5 -4 0 8 z" fill="var(--c)" opacity="0.7" />
    <path d="M94 56 l-5 -4 0 8 z" fill="var(--c)" opacity="0.7" />
    {neck}{body}
    <rect className={styles.face} x="50" y="106" width="20" height="5" rx="2.5" />
  </svg>
);

// Orange — Max: boxy retro head, square eyes, grille mouth
const RobotOrange = () => (
  <svg {...svgProps}>
    <line x1="45" y1="24" x2="41" y2="12" stroke="var(--c)" strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="41" cy="9" r="4" fill="var(--c)" />
    <line x1="75" y1="24" x2="79" y2="12" stroke="var(--c)" strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="79" cy="9" r="4" fill="var(--c)" />
    <rect x="32" y="24" width="56" height="52" rx="10" fill="var(--c)" />
    <rect x="38" y="30" width="18" height="7" rx="3" fill="rgba(255,255,255,0.2)" />
    <rect className={styles.face} x="40" y="34" width="40" height="34" rx="6" />
    <rect className={styles.eye} x="46" y="42" width="10" height="9" rx="2" />
    <rect className={styles.eye} x="64" y="42" width="10" height="9" rx="2" />
    <rect className={styles.eye} x="47" y="57" width="26" height="6" rx="1.5" opacity="0.85" />
    <line className={styles.faceStroke} x1="54" y1="57" x2="54" y2="63" />
    <line className={styles.faceStroke} x1="60" y1="57" x2="60" y2="63" />
    <line className={styles.faceStroke} x1="66" y1="57" x2="66" y2="63" />
    <rect x="50" y="80" width="20" height="8" rx="2" fill="var(--c)" />
    {body}
    <rect className={styles.face} x="50" y="104" width="20" height="9" rx="2" />
    <circle className={styles.eye} cx="55" cy="108.5" r="1.5" />
    <circle className={styles.eye} cx="60" cy="108.5" r="1.5" />
    <circle className={styles.eye} cx="65" cy="108.5" r="1.5" />
  </svg>
);

const ROBOTS = [RobotGreen, RobotBlue, RobotPink, RobotPurple, RobotOrange];

export default function Operators() {
  // Auto-advancing highlight that walks across the workflow steps.
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 6), 1300);
    return () => clearInterval(id);
  }, []);

  // 3D tilt that follows the cursor — the point under the cursor tilts away.
  const onMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;   // -0.5 … 0.5
    const py = (e.clientY - r.top) / r.height - 0.5;
    const MAX = 9;
    el.style.transform =
      `perspective(1200px) rotateX(${(-py * MAX).toFixed(2)}deg) rotateY(${(px * MAX).toFixed(2)}deg) translateY(-4px)`;
  };
  const onLeave = (e) => { e.currentTarget.style.transform = ''; };

  return (
    <section id="operators" className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.kicker}>OUR AI EMPLOYEES</span>
          <h2 className={styles.heading}>
            <span className={styles.solid}>MEET THE</span>
            <span className={styles.outline}>OPERATORS<span className={styles.dotAccent}>.</span></span>
          </h2>
          <p className={styles.sub}>
            We sell the employee, not the software. Each operator is a complete AI system
            built and managed for your business.
          </p>
        </div>

        <div className={styles.list}>
          {OPERATORS.map((op, i) => (
            <article
              key={op.name}
              className={styles.card}
              style={{ '--c': op.c }}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
            >
              {/* ── Left visual panel ── */}
              <div className={styles.visual}>
                <span className={styles.sweep} />
                <span className={styles.rings} />
                <span className={styles.halo} />
                <span className={styles.orbit} style={{ '--r': '60px', '--dur': '7s' }}><i className={styles.orbitDot} /></span>
                <span className={`${styles.orbit} ${styles.orbitRev}`} style={{ '--r': '86px', '--dur': '11s' }}><i className={styles.orbitDot} /></span>
                <span className={styles.orbit} style={{ '--r': '110px', '--dur': '16s' }}><i className={styles.orbitDot} /></span>
                <div className={styles.robotWrap}>{ROBOTS[i % ROBOTS.length]()}</div>
                {DOTS.map((d, i) => <span key={i} className={styles.spark} style={d} />)}
                <span className={styles.watermark}>{op.name}</span>
              </div>

              {/* ── Right content ── */}
              <div className={styles.body}>
                <div className={styles.topRow}>
                  <span className={styles.badgeSquare}>{op.name[0]}</span>
                  <h3 className={styles.name}>{op.name}</h3>
                  <span className={styles.pillBadge}>{op.badge}</span>
                </div>
                <span className={styles.role}>{op.role}</span>

                <p className={styles.desc}>{op.desc}</p>

                <div className={styles.wfLabelRow}>
                  <span className={styles.label}>WORKFLOW</span>
                  <span className={styles.node} />
                </div>
                <div className={styles.workflow}>
                  {op.workflow.map((w, i) => (
                    <span key={w} className={styles.wfItem}>
                      <span className={`${styles.wfPill} ${i === step ? styles.wfActive : ''}`}>{w}</span>
                      {i < op.workflow.length - 1 && <span className={styles.wfArrow}>→</span>}
                    </span>
                  ))}
                </div>

                <div className={styles.bestRow}>
                  <span className={styles.bestLabel}>Best for:</span>
                  {op.bestFor.map((b) => <span key={b} className={styles.bestPill}>{b}</span>)}
                </div>

                <div className={styles.divider} />

                <div className={styles.footer}>
                  <div className={styles.priceBox}>
                    <span className={styles.priceLabel}>MONTHLY</span>
                    <span className={styles.price}>{op.price}<span className={styles.per}>{op.per}</span></span>
                  </div>
                  <div className={styles.btns}>
                    <a href="#meet-maya" className={styles.btnGhost}>▶ WATCH DEMO</a>
                    <a href="/onboarding" className={styles.btnPrimary}>GET STARTED →</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
