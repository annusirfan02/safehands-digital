'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ExdTransformation.module.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * "One partner, two disciplines" section (previously "Digital Transformation").
 * Presents the two service pillars side by side: Engineering Services and
 * AI & Business Systems, plus the sectors Safe Hands serves.
 * Keeps id="exd" so existing deep links keep working.
 */

const ENGINEERING = [
  { name: 'Full-Spectrum MEP Services', href: '/mep-engineering' },
  { name: 'HVAC & Chiller Plant O&M', href: '/operations-maintenance' },
  { name: 'Industrial Refrigeration O&M', href: '/industrial-refrigeration' },
  { name: 'SP.ICE Thermal Storage', note: 'German Technology', href: '/sp-ice-tes' },
  { name: 'Life Safety & Firefighting', href: '/fire-life-safety' },
];
const STANDARDS = ['SBC', 'Civil Defense', 'NFPA', 'SMACNA', 'SEC', 'BMS Integration'];

const AI = [
  { name: 'AI Assistant & Automation', href: '/ai-automation' },
  { name: 'ERP Services & Development', note: 'SAP', href: '/erp-development' },
  { name: 'AI Video Production', href: '/ai-video' },
];
const PARTNERS = [
  { name: 'SAP', tag: 'Service Provider' },
  { name: 'BearingPoint', tag: 'Local Partner' },
  { name: 'Jaggaer', tag: 'Implementation & Support' },
  { name: 'Salesforce', tag: 'Implementation & Support' },
];

const SECTORS = [
  'Data Centers', 'Hotels & Resorts', 'Process & Chemical Industry',
  'Logistics & Cold Warehouses', 'Commercial Facilities', 'Government',
];

function ServiceList({ items }) {
  return (
    <ol className={styles.list}>
      {items.map((s, i) => (
        <li key={s.name}>
          <Link href={s.href} className={styles.item} data-reveal="item">
            <span className={styles.itemNum}>{String(i + 1).padStart(2, '0')}</span>
            <span className={styles.itemName}>{s.name}</span>
            {s.note && <span className={styles.itemNote}>{s.note}</span>}
            <span className={styles.itemArrow} aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

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

    gsap.from(q('[data-reveal="lead"]'), {
      y: 24,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.25,
      scrollTrigger: { trigger: root.current, start: 'top 78%' },
    });

    // The two pillar panels rise in.
    gsap.from(q('[data-reveal="panel"]'), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: { trigger: q('[data-reveal="pillars"]')[0], start: 'top 85%' },
    });

    // Service rows cascade in.
    gsap.from(q('[data-reveal="item"]'), {
      x: -14,
      opacity: 0,
      duration: 0.45,
      ease: 'power2.out',
      stagger: 0.05,
      scrollTrigger: { trigger: q('[data-reveal="pillars"]')[0], start: 'top 80%' },
    });

    gsap.from(q('[data-reveal="chip"]'), {
      y: 14,
      opacity: 0,
      duration: 0.45,
      ease: 'power2.out',
      stagger: 0.03,
      scrollTrigger: { trigger: q('[data-reveal="sectors"]')[0], start: 'top 90%' },
    });
  }, { scope: root });

  return (
    <section ref={root} id="exd" className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        {/* ── Heading + intro ── */}
        <div className={styles.head}>
          <div>
            <span className={styles.kicker} data-reveal="lead">ONE PARTNER · TWO DISCIPLINES</span>
            <h2 className={styles.heading}>
              <span className={styles.lineMask}>
                <span className={styles.solid} data-reveal="line">YOUR FACILITY.</span>
              </span>
              <span className={styles.lineMask}>
                <span className={styles.outline} data-reveal="line">YOUR WORKFLOWS.</span>
              </span>
              <span className={styles.lineMask}>
                <span className={styles.solid} data-reveal="line">
                  ONE PARTNER<span className={styles.dot}>:</span>{' '}
                  <span className={styles.accent}>SAFE HANDS</span>
                  <span className={styles.dot}>.</span>
                </span>
              </span>
            </h2>
          </div>
          <p className={styles.lead} data-reveal="lead">
            We engineer, operate and maintain the critical infrastructure that keeps your
            buildings running, and we build the AI and business systems that keep your teams
            moving. Two specialist disciplines, one accountable partner across Saudi Arabia.
          </p>
        </div>

        {/* ── Two pillars ── */}
        <div className={styles.pillars} data-reveal="pillars">
          {/* Engineering */}
          <article className={`${styles.panel} ${styles.panelEng}`} data-reveal="panel">
            <header className={styles.panelHead}>
              <span className={styles.panelBadge}>01 / Engineering Services</span>
              <h3 className={styles.panelTitle}>Infrastructure that performs.</h3>
              <p className={styles.panelCopy}>
                Data-driven engineering, operations and maintenance to maximize uptime, cut
                energy use and extend the life of critical equipment.
              </p>
            </header>
            <ServiceList items={ENGINEERING} />
            <div className={styles.panelFoot}>
              <span className={styles.footLabel}>Engineered to</span>
              <div className={styles.tags}>
                {STANDARDS.map((s) => <span key={s} className={styles.tag}>{s}</span>)}
              </div>
            </div>
          </article>

          {/* AI & business systems */}
          <article className={`${styles.panel} ${styles.panelAi}`} data-reveal="panel">
            <header className={styles.panelHead}>
              <span className={styles.panelBadge}>02 / AI &amp; Business Systems</span>
              <h3 className={styles.panelTitle}>Systems that work.</h3>
              <p className={styles.panelCopy}>
                Custom AI assistants, automation and ERP that take repetitive work off your
                team, built on <strong>SAP</strong> and AI including SAP&rsquo;s{' '}
                <strong>Joule</strong> and Jaggaer&rsquo;s <strong>JAI</strong>.
              </p>
            </header>
            <ServiceList items={AI} />
            {/* Hidden: partner ecosystem cards (SAP, BearingPoint, Jaggaer, Salesforce).
            <div className={styles.panelFoot}>
              <span className={styles.footLabel}>Partner ecosystem</span>
              <div className={styles.partners}>
                {PARTNERS.map((p) => (
                  <div key={p.name} className={styles.partner}>
                    <span className={styles.partnerName}>{p.name}</span>
                    <span className={styles.partnerTag}>{p.tag}</span>
                  </div>
                ))}
              </div>
            </div>
            */}
          </article>
        </div>

        {/* ── Sectors ── */}
        <div className={styles.sectors} data-reveal="sectors">
          <span className={styles.sectorsLabel}>Who we serve</span>
          <div className={styles.chips}>
            {SECTORS.map((s) => (
              <span key={s} data-reveal="chip" className={styles.chip}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
