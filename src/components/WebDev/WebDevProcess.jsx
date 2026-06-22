'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './WebDevProcess.module.css';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { c: '#8fce3f', num: 'STEP 01', title: 'Design & Custom Elements', desc: 'We start with discovery, brand, audience, goals. Then our designers craft custom UI, animations, and visual elements tailored to your identity. No templates, no recycled layouts.', tags: ['BRAND DISCOVERY', 'WIREFRAMES', 'UI DESIGN', 'MOTION & MICRO-INTERACTIONS'] },
  { c: '#a855f7', num: 'STEP 02', title: 'Web Functionality & Integrations', desc: 'Development phase, we build every feature, connect every tool. CRMs, payment systems, booking engines, AI assistants, APIs, databases. Everything that makes your site work.', tags: ['FRONTEND DEVELOPMENT', 'BACKEND & APIS', 'CRM / PAYMENT / BOOKING', 'AI & AUTOMATION'] },
  { c: '#ff8c1e', num: 'STEP 03', title: 'SEO Foundation', desc: 'Before launch, we implement technical SEO: structured data, site speed optimization, meta strategy, sitemap, canonical tags, and content architecture, so you rank from day one.', tags: ['TECHNICAL SEO', 'SCHEMA MARKUP', 'CORE WEB VITALS', 'CONTENT STRUCTURE'] },
  { c: '#2bb0e0', num: 'STEP 04', title: 'Build, QA & Launch', desc: 'We test across devices, browsers, and connection speeds. Then we launch, with staging environments, DNS migrations handled, and zero downtime for live sites.', tags: ['CROSS-DEVICE QA', 'PERFORMANCE TESTING', 'STAGING DEPLOYMENT', 'GO-LIVE SUPPORT'] },
  { c: '#10b981', num: 'STEP 05', title: 'Maintenance & Growth', desc: 'After launch we stay with you, monthly updates, security patches, analytics reviews, A/B testing, new feature builds. Your site gets better over time, not worse.', tags: ['MONTHLY MAINTENANCE', 'SECURITY UPDATES', 'ANALYTICS & REPORTING', 'NEW FEATURES'] },
];

export default function WebDevProcess() {
  const rootRef = useRef(null);
  const tlRef = useRef(null);
  const fillRef = useRef(null);
  const rocketRef = useRef(null);

  useGSAP(() => {
    // Rocket + line are scrubbed to scroll (with a little smoothing) - they only
    // move while you scroll, stop when you stop, and reverse when you scroll up.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: tlRef.current,
        start: 'top 28%',
        end: 'bottom 80%',
        scrub: 0.8,
        onUpdate: (self) => {
          const idx = Math.min(STEPS.length - 1, Math.floor(self.progress * STEPS.length + 0.0001));
          tlRef.current.style.setProperty('--c', STEPS[idx].c);
        },
      },
    });
    tl.fromTo(fillRef.current, { height: '0%' }, { height: '100%', ease: 'none' }, 0)
      .fromTo(rocketRef.current, { top: '0%' }, { top: '100%', ease: 'none' }, 0);

    // Each step box reveals when scrolled to, and hides again on reverse scroll.
    const cards = tlRef.current.querySelectorAll('[data-step]');
    cards.forEach((card) => {
      gsap.from(card, {
        opacity: 0, y: 38, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 84%', toggleActions: 'play none none reverse' },
      });
    });
  }, { scope: rootRef });

  return (
    <section ref={rootRef} className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.kicker}>HOW WE WORK</span>
          <h2 className={styles.heading}>THE PROCESS<span className={styles.headDot}>.</span></h2>
        </div>

        <div ref={tlRef} className={styles.timeline} style={{ '--c': STEPS[0].c }}>
          {/* ── Left track + rocket ── */}
          <div className={styles.track}>
            <span className={styles.trackBase} />
            <span ref={fillRef} className={styles.trackFill} />
            <div ref={rocketRef} className={styles.rocket}>
              <span className={styles.fire} />
              <svg className={styles.craft} viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 33 L3 46 L13 40 Z" fill="var(--c)" />
                <path d="M30 33 L37 46 L27 40 Z" fill="var(--c)" />
                <path d="M20 51 C25 46 27 38 27 30 C27 20 24 12 20 7 C16 12 13 20 13 30 C13 38 15 46 20 51 Z" fill="#eef1f6" stroke="rgba(0,0,0,0.12)" strokeWidth="0.6" />
                <circle cx="20" cy="24" r="4.2" fill="#0b1320" />
                <circle cx="20" cy="24" r="2.2" fill="var(--c)" />
              </svg>
            </div>
          </div>

          {/* ── Step cards ── */}
          <div className={styles.steps}>
            {STEPS.map((s) => (
              <article key={s.num} data-step className={styles.card} style={{ '--sc': s.c }}>
                <span className={styles.topGlow} />
                <span className={styles.stepNum}>{s.num}</span>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.desc}>{s.desc}</p>
                <div className={styles.tags}>
                  {s.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
