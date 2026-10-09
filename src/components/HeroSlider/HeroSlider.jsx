'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './HeroSlider.module.css';

const INTERVAL_MS = 6500;

// One slide per service. `title` = [plain, accent]. `pos` = background focus point.
const SLIDES = [
  {
    label: 'MEP Engineering',
    kicker: 'MEP Engineering Service',
    title: ['Engineering the infrastructure behind', 'high-performance facilities'],
    text: 'Turnkey mechanical, electrical, plumbing and fire protection design and execution for complex facilities across Saudi Arabia.',
    href: '/mep-engineering',
    image: '/hero-slides/MEP-Service.webp',
    pos: 'center',
  },
  {
    label: 'O&M Engineering',
    kicker: 'General Mechanical Operation & Maintenance (O&M)',
    title: ['Heavy-duty HVAC &', 'central chiller plant O&M'],
    text: 'Maximizing Coefficient of Performance (COP) and eliminating plant downtime with strict technical auditing of your primary cooling plants.',
    href: '/operations-maintenance',
    image: '/hero-slides/OM-2-Custom-1.jpg',
    pos: 'center',
  },
  {
    label: 'sp.ICE TES',
    kicker: 'sp.ICE TES · German Technology',
    title: ['Shift cooling load.', 'Reduce peak demand.'],
    text: 'German-engineered ice thermal energy storage that moves heavy cooling loads from expensive daytime peaks to economical night-time hours.',
    href: '/sp-ice-tes',
    image: '/hero-slides/sp-ice.jpg',
    pos: '70% center',
  },
  {
    label: 'ERP Services',
    kicker: 'ERP Services & Development',
    title: ['Systems that run the business.', 'Built to scale.'],
    text: 'End-to-end SAP implementation and support across Finance, Procurement, HR, Sales and Analytics, by KSA’s leading SAP partner.',
    href: '/erp-development',
    image: '/hero-slides/ERP.webp',
    pos: '75% center',
  },
  {
    label: 'AI Assistant',
    kicker: 'AI Assistant & Automation',
    title: ['100 emails in.', 'Only what matters out.'],
    text: 'Custom AI systems that read, filter and sort the noise, then draft the replies, so your team only handles the work that counts.',
    href: '/ai-automation',
    image: '/hero-slides/AI-Assistant.jpeg',
    pos: 'center',
  },
  {
    label: 'AI Video',
    kicker: 'AI Video Production',
    title: ['Corporate films & explainers,', 'produced with AI.'],
    text: 'AI-produced corporate intros, presentations and explainer videos. Polished, on-brand and delivered fast, in Arabic and English.',
    href: '/ai-video',
    image: '/hero-slides/AI-Video.jpg',
    pos: 'center',
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const go = useCallback((i) => setIndex((i + SLIDES.length) % SLIDES.length), []);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  // Autoplay, always on. The hero fills the screen, so pausing on hover would
  // keep it stopped almost all the time. Restarts on every slide change, so a
  // manual pick (tab / arrow) still gets a full interval.
  useEffect(() => {
    const id = setTimeout(next, INTERVAL_MS);
    return () => clearTimeout(id);
  }, [index, next]);

  return (
    <section
      className={styles.hero}
      aria-roledescription="carousel"
      aria-label="Our services"
      suppressHydrationWarning
    >
      {SLIDES.map((s, i) => (
        <div
          key={s.href}
          className={`${styles.slide} ${i === index ? styles.active : ''}`}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${SLIDES.length}: ${s.kicker}`}
          aria-hidden={i !== index}
        >
          <div
            className={styles.bg}
            style={{ backgroundImage: `url('${s.image}')`, backgroundPosition: s.pos }}
            aria-hidden="true"
          />
          <div className={styles.shade} aria-hidden="true" />

          <div className={styles.content}>
            <span className={styles.kicker}>
              <i className={styles.kickerLine} />
              {s.kicker}
            </span>
            {/* Only the first slide's title is the page h1. */}
            {i === 0 ? (
              <h1 className={styles.title}>
                {s.title[0]} <span className={styles.accent}>{s.title[1]}</span>
              </h1>
            ) : (
              <h2 className={styles.title}>
                {s.title[0]} <span className={styles.accent}>{s.title[1]}</span>
              </h2>
            )}
            <p className={styles.text}>{s.text}</p>
            <div className={styles.actions}>
              <Link href={s.href} className={styles.primaryBtn} tabIndex={i === index ? 0 : -1}>
                Explore service <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className={styles.secondaryBtn} tabIndex={i === index ? 0 : -1}>
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / next */}
      <div className={styles.arrows}>
        <span className={styles.counter}>
          <strong>{String(index + 1).padStart(2, '0')}</strong> / {String(SLIDES.length).padStart(2, '0')}
        </span>
        <button type="button" className={styles.navBtn} onClick={prev} aria-label="Previous slide">←</button>
        <button type="button" className={styles.navBtn} onClick={next} aria-label="Next slide">→</button>
      </div>

      {/* Service tabs with progress bar */}
      <div className={styles.tabs} role="tablist" aria-label="Choose a service">
        {SLIDES.map((s, i) => (
          <button
            key={s.href}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={`${styles.tab} ${i === index ? styles.tabActive : ''}`}
            onClick={() => go(i)}
          >
            <span className={styles.tabNum}>{String(i + 1).padStart(2, '0')}</span>
            <span className={styles.tabLabel}>{s.label}</span>
            <span className={styles.progress} aria-hidden="true">
              {i === index && (
                <span
                  key={index}
                  className={styles.progressFill}
                  style={{ animationDuration: `${INTERVAL_MS}ms` }}
                />
              )}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
