'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ExdTransformation.module.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * "Your Digital Transformation Journey begins with Safehands" section.
 * A dark navy band that introduces Safehands's SAP Platinum partnership, partner
 * ecosystem and the breadth of services / technologies it covers.
 * Sits between the StatsBar and the Services grid on the Home page.
 */

// Safehands's partner ecosystem — rendered as pills.
const PARTNERS = [
  { name: 'SAP', tag: 'Service Provider', lead: true },
  { name: 'BearingPoint', tag: 'Local Partner' },
  { name: 'Jaggaer', tag: 'Implementation & Support' },
  { name: 'Salesforce', tag: 'Implementation & Support' },
];

// Internal + external business areas Safehands's solutions address.
const COVERAGE = [
  'Finance', 'Procurement', 'Production', 'HR', 'Sales',
  'Business Analytics', 'Vendors', 'Customers', 'Governments',
];

// Deep technical expertise.
const TECH = [
  'AI', 'ML', 'IoT', 'E-Commerce',
  '.Net', 'Python', 'Laravel', 'Java', 'iOS', 'Android',
];

export default function ExdTransformation() {
  const root = useRef(null);

  useGSAP(() => {
    const q = gsap.utils.selector(root);

    // Heading lines slide up, one after another.
    gsap.from(q('[data-reveal="line"]'), {
      yPercent: 110,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: { trigger: root.current, start: 'top 78%' },
    });

    // Lead paragraph fades in.
    gsap.from(q('[data-reveal="lead"]'), {
      y: 24,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.25,
      scrollTrigger: { trigger: root.current, start: 'top 78%' },
    });

    // Partner cards fade in together (stay aligned — no transform stagger).
    gsap.from(q('[data-reveal="pill"]'), {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.08,
      scrollTrigger: { trigger: q('[data-reveal="pills"]')[0], start: 'top 85%' },
    });

    // Highlight banner scales in.
    gsap.from(q('[data-reveal="highlight"]'), {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: q('[data-reveal="highlight"]')[0], start: 'top 88%' },
    });

    // Coverage / tech cards rise in.
    gsap.from(q('[data-reveal="card"]'), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: { trigger: q('[data-reveal="grid"]')[0], start: 'top 85%' },
    });

    // Chips cascade in after their card.
    gsap.from(q('[data-reveal="chip"]'), {
      y: 14,
      opacity: 0,
      duration: 0.45,
      ease: 'power2.out',
      stagger: 0.03,
      scrollTrigger: { trigger: q('[data-reveal="grid"]')[0], start: 'top 80%' },
    });
  }, { scope: root });

  return (
    <section ref={root} id="exd" className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        {/* ── Heading + intro ── */}
        <div className={styles.head}>
          <span className={styles.kicker} data-reveal="lead">DIGITAL TRANSFORMATION</span>
          <h2 className={styles.heading}>
            <span className={styles.lineMask}>
              <span className={styles.solid} data-reveal="line">YOUR DIGITAL</span>
            </span>
            <span className={styles.lineMask}>
              <span className={styles.outline} data-reveal="line">TRANSFORMATION JOURNEY</span>
            </span>
            <span className={styles.lineMask}>
              <span className={styles.solid} data-reveal="line">
                BEGINS WITH <span className={styles.accent}>Safehands</span>
                <span className={styles.dot}>.</span>
              </span>
            </span>
          </h2>
          <p className={styles.lead} data-reveal="lead">
            Embark on a digital transformation journey with a vendor-agnostic
            approach rooted in customer centricity and unflinching integrity.
            With Safehands as your trusted partner, ensure full visibility and
            efficiency across your business by leveraging state-of-the-art
            technology solutions that drive measurable success.
          </p>
        </div>

        {/* ── Partner ecosystem ── */}
        <div className={styles.block}>
          <div className={styles.blockHead}>
            <span className={styles.blockKicker}>PARTNER ECOSYSTEM</span>
            <p className={styles.blockCopy}>
              SafeHands is the leading <strong>SAP service provider in Saudi
              Arabia</strong> and a local partner of <strong>BearingPoint</strong>.
              We also provide implementation and support services for{' '}
              <strong>Jaggaer</strong> and <strong>Salesforce</strong>. Leverage
              our unique partner ecosystem to get tailored solutions that empower
              your business to thrive.
            </p>
          </div>
          <div className={styles.pills} data-reveal="pills">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                data-reveal="pill"
                className={`${styles.pill} ${p.lead ? styles.pillLead : ''}`}
              >
                <span className={styles.pillName}>{p.name}</span>
                {p.tag && <span className={styles.pillTag}>{p.tag}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* ── Joule highlight ── */}
        <div className={styles.highlight} data-reveal="highlight">
          <span className={styles.highlightBadge}>AI FIRST</span>
          <p className={styles.highlightText}>
            We specialise in AI implementations that unlock cutting-edge
            analytics and intelligence through your <strong>SAP</strong>,{' '}
            <strong>ETM.Next</strong>, <strong>Qlik</strong> and{' '}
            <strong>Jaggaer</strong> systems &mdash; and hold the distinct honour
            of unveiling SAP&rsquo;s latest Generative AI,{' '}
            <strong>Joule</strong>, and Jaggaer&rsquo;s latest AI,{' '}
            <strong>JAI</strong>.
          </p>
        </div>

        {/* ── Coverage + tech ── */}
        <div className={styles.grid} data-reveal="grid">
          <div className={styles.card} data-reveal="card">
            <span className={styles.cardKicker}>END-TO-END COVERAGE</span>
            <p className={styles.cardCopy}>
              From internal operations to external interactions, our solutions
              are designed to address every facet of your organisation.
            </p>
            <div className={styles.chips}>
              {COVERAGE.map((c) => (
                <span key={c} data-reveal="chip" className={styles.chip}>{c}</span>
              ))}
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardDark}`} data-reveal="card">
            <span className={styles.cardKicker}>DEEP TECH EXPERTISE</span>
            <p className={styles.cardCopy}>
              Advanced development tools and emerging technologies, delivered by
              specialists across the modern stack.
            </p>
            <div className={styles.chips}>
              {TECH.map((t) => (
                <span key={t} data-reveal="chip" className={`${styles.chip} ${styles.chipDark}`}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
