'use client';

import { useRef, Fragment } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import Starfield from '@/components/HeroHeader/Starfield';
import styles from './Process.module.css';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// The 4 dots sit on one baseline (y = 70), each centred above its card.
// The rocket weaves: above dot 1, below dot 2, above dot 3, below dot 4 —
// starting at the first card's left edge and ending at the last card's right edge.
const WAVE = 'M 0 70 C 45 60 80 44 113 44 C 199 44 285 96 371 96 C 457 96 543 44 629 44 C 715 44 801 96 887 96 C 945 96 968 62 1000 56';

const DOTS = [
  { x: 113, y: 70, c: '#a855f7' },
  { x: 371, y: 70, c: '#2d80ff' },
  { x: 629, y: 70, c: '#10b981' },
  { x: 887, y: 70, c: '#BFFE03' },
];

const STEPS = [
  { num: '01', meta: 'STEP 01 · WEEK 1 · FREE AUDIT',   title: 'Discovery', desc: 'Deep dive into your business, goals, and competitors. Free audit included.',  c: '#a855f7' },
  { num: '02', meta: 'STEP 02 · WEEK 2 · ROADMAP',      title: 'Strategy',  desc: 'Custom growth plan targeting your highest-value opportunities first.',       c: '#2d80ff' },
  { num: '03', meta: 'STEP 03 · WEEKS 3-8 · BUILD',     title: 'Execution', desc: 'AI-accelerated workflows — faster, cheaper, better results.',                c: '#10b981' },
  { num: '04', meta: 'STEP 04 · ONGOING · COMPOUND',    title: 'Optimize',  desc: 'Continuous monitoring, reporting, and optimization to compound results.',    c: '#BFFE03' },
];

const STATS = [
  { v: '8 wks',   l: 'AVG LAUNCH TIME' },
  { v: '24/7',    l: 'AI MONITORING' },
  { v: '14 days', l: 'FEEDBACK WINDOW' },
  { v: '∞',       l: 'ITERATIONS' },
];

export default function Process() {
  const rootRef   = useRef(null);
  const pathRef   = useRef(null);
  const rocketRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: rootRef.current, start: 'top 65%', toggleActions: 'play none none none' },
    });

    // The curvy line draws in left → right, with the rocket riding the leading edge.
    tl.to(rocketRef.current, { opacity: 1, duration: 0.2 }, 0)
      .to(pathRef.current, { strokeDashoffset: 0, duration: 2.2, ease: 'power1.inOut' }, 0)
      .to(rocketRef.current, {
        duration: 2.2,
        ease: 'power1.inOut',
        motionPath: { path: pathRef.current, align: pathRef.current, alignOrigin: [0.5, 0.5], autoRotate: true },
      }, 0);

    // Step cards rise + fade as the section settles in.
    tl.from(rootRef.current.querySelectorAll('[data-step]'), {
      opacity: 0, y: 40, stagger: 0.12, duration: 0.6, ease: 'power3.out',
    }, 0.5);
  }, { scope: rootRef });

  return (
    <section ref={rootRef} className={styles.section} suppressHydrationWarning>
      <Starfield shooters={3} stars={6} />

      <span className={styles.bigNum} aria-hidden="true">4</span>

      <div className={styles.inner}>
        {/* ── Heading ── */}
        <span className={styles.badge}>
          <i className={styles.badgeDot} />
          HOW WE WORK · 4 STEPS
        </span>

        <h2 className={styles.heading}>
          <span className={styles.solid}>THE</span>
          <span className={styles.script}>Process<span className={styles.dot}>.</span></span>
        </h2>

        <p className={styles.subtitle}>
          From discovery to compounding results — a proven 4-step framework
          that takes 8 weeks to launch and never stops optimizing.
        </p>

        {/* ── Wavy track + rocket ── */}
        <div className={styles.track}>
          <svg className={styles.wave} viewBox="0 0 1000 130" fill="none">
            <path
              ref={pathRef}
              d={WAVE}
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              pathLength="1"
              style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
            />
            {DOTS.map((d, i) => (
              <circle key={i} cx={d.x} cy={d.y} r="5" fill={d.c} />
            ))}

            {/* Rocket — same craft as the home page hero, rotated to fly right */}
            <g ref={rocketRef} style={{ opacity: 0 }}>
              <ellipse cx="0" cy="0" rx="22" ry="14" fill="rgba(191,254,3,0.22)" />
              <g transform="rotate(90) scale(0.62) translate(-18 -28)">
                <defs>
                  <linearGradient id="proc-ship" x1="0" y1="0" x2="36" y2="56" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#ffffff" />
                    <stop offset="0.55" stopColor="#dfe6ee" />
                    <stop offset="1" stopColor="#aab4c2" />
                  </linearGradient>
                </defs>
                {/* Fins */}
                <path d="M10 30 L3 44 L10 39 Z" fill="#7d8794" />
                <path d="M26 30 L33 44 L26 39 Z" fill="#7d8794" />
                {/* Body */}
                <path
                  d="M18 53 C23 48 26 40 26 30 C26 18 23 9 18 4 C13 9 10 18 10 30 C10 40 13 48 18 53 Z"
                  fill="url(#proc-ship)"
                  stroke="rgba(0,0,0,0.18)"
                  strokeWidth="0.6"
                />
                {/* Window */}
                <circle cx="18" cy="22" r="4.4" fill="#0b1a10" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                <circle cx="18" cy="22" r="2.4" fill="#BFFE03" />
              </g>
            </g>
          </svg>
        </div>

        {/* ── Step cards ── */}
        <div className={styles.steps}>
          {STEPS.map((s, i) => (
            <Fragment key={s.num}>
              <article data-step className={styles.step} style={{ '--c': s.c }}>
                <div className={styles.stepTop}>
                  <span className={styles.sphere} />
                  <span className={styles.stepNum}>{s.num}</span>
                </div>
                <span className={styles.stepMeta}>{s.meta}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </article>
              {i < STEPS.length - 1 && <span className={styles.stepArrow} aria-hidden="true">→</span>}
            </Fragment>
          ))}
        </div>

        {/* ── Stats row ── */}
        <div className={styles.stats}>
          {STATS.map((s, i) => (
            <div key={i} className={styles.stat}>
              <div className={styles.statValue}>{s.v}</div>
              <div className={styles.statLabel}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
