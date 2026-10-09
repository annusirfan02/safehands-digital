import Link from 'next/link';
import { Icon, Media } from './EngineeringPage';
import styles from './EngineeringPage.module.css';

// Client copy: "Our Deep Technical Scope" (HVAC & Chiller System O&M).
const CHILLER = [
  { icon: 'gauge', title: 'Centrifugal, Screw, & Scroll Chiller Overhauls', text: 'Comprehensive inspections covering compressor tolerance testing, oil acid analysis, and variable frequency drive (VFD) tuning.' },
  { icon: 'duct', title: 'Evaporator & Condenser Tube Descaling', text: 'Utilizing precise mechanical and chemical cleaning methods to eliminate calcium scaling and biofilm accumulation, restoring optimal heat exchange metrics.' },
  { icon: 'snow', title: 'Water Chemistry Management', text: 'Constant micro-biological testing, biocide dosing, and corrosion inhibition within cooling tower circuits to prevent scale and rust formation.' },
  { icon: 'air', title: 'Air-Side Distribution Optimization', text: 'Static pressure testing, precision air balancing, and variable air volume (VAV) adjustments to maintain flawless indoor air quality (IAQ).' },
];

// Client copy (Page 2) — full detail lives on /industrial-refrigeration.
const COLD_CHAIN = [
  { icon: 'gauge', title: 'Multi-Stage & Cascade Compression Systems', text: 'Complete field servicing and rebuilds of open-drive screw compressors, semi-hermetic units, and low-temperature booster pumps.' },
  { icon: 'shield', title: 'Refrigerant Containment & Leak Detection', text: 'Fixed automated leak detection arrays and electronic sniffing protocols covering ammonia (NH3), CO2, and eco-friendly HFC blends.' },
  { icon: 'snow', title: 'Evaporator Defrost Loop Calibration', text: 'Optimizing hot gas, electric, or water defrost cycles to prevent ice bridging on coils while avoiding heat bleed into the refrigerated space.' },
  { icon: 'door', title: 'Thermal Boundary Envelope Inspection', text: 'Testing the physical integrity of cold-storage doors, air curtains, and floor-heaving mitigation systems.' },
];

const LOOP = ['Inspect', 'Diagnose', 'Optimize', 'Repair', 'Monitor'];

function Cards({ items }) {
  return (
    <div className={`${styles.cards} ${styles.cards2}`}>
      {items.map((it, i) => (
        <article key={it.title} className={styles.card}>
          <div className={styles.cardTop}>
            <span className={styles.cardNum}>{String(i + 1).padStart(2, '0')}</span>
            <span className={styles.cardIcon}><Icon name={it.icon} /></span>
          </div>
          <h3 className={styles.cardTitle}>{it.title}</h3>
          <p className={styles.cardText}>{it.text}</p>
        </article>
      ))}
    </div>
  );
}

export default function OmPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{ '--hero-img': "url('/om/hero.jpg')" }}
          aria-hidden="true"
        />
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.container}>
          <span className={styles.heroKicker}>HVAC &amp; Chiller System O&amp;M Specialist</span>
          <h1 className={styles.heroTitle}>
            Heavy-duty HVAC &amp; central <span className={styles.lime}>chiller plant O&amp;M</span>
          </h1>
          <div className={styles.heroRow}>
            <p className={styles.heroText}>
              Maximizing Coefficient of Performance (COP) and eliminating plant downtime.
            </p>
            <span className={styles.sysTag}>SYS / O&amp;M-02</span>
          </div>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.btnPrimary}>
              Discuss your project <span aria-hidden="true">→</span>
            </Link>
            <a href="#capabilities" className={styles.btnGhost}>Explore capabilities</a>
          </div>
        </div>
        <span className={styles.heroBadge}>High-ambient engineering · KSA</span>
      </section>

      <div id="capabilities">
        {/* ── Chiller plant ── */}
        <section className={styles.group}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <div>
                <span className={styles.kicker}>Precision Field Engineering</span>
                <h2 className={styles.h2}>Our deep<br />technical<br />scope</h2>
              </div>
              <p className={styles.deliveryText}>
                Central chiller plants are the heartbeat of large facility infrastructure. Minor
                system deviations can spike energy bills by 20% or trigger catastrophic
                building-wide shutdowns. Safe Hands applies strict technical auditing to ensure
                your primary cooling plants run at peak design efficiency.
              </p>
            </div>
            <Media
              images={[
                { src: '/services/om-ahu-team.jpg', alt: 'O&M engineers servicing air handling units' },
                { src: '/services/mep-hvac-rooftop.jpg', alt: 'Rooftop HVAC plant and ductwork' },
              ]}
            />
            <Cards items={CHILLER} />
          </div>
        </section>

        {/* ── Cold chain ── */}
        <section className={`${styles.group} ${styles.groupAlt}`}>
          <div className={styles.container}>
            <span className={styles.kicker}>Continuous Cold Integrity</span>
            <h2 className={styles.groupTitle}>Industrial &amp; cold<br />chain refrigeration<br />O&amp;M</h2>
            <Cards items={COLD_CHAIN} />
            <div className={styles.heroActions}>
              <Link href="/industrial-refrigeration" className={styles.btnGhost}>
                View industrial refrigeration O&amp;M <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ── O&M loop ── */}
      <section className={styles.delivery}>
        <div className={styles.container}>
          <div className={styles.deliveryHead}>
            <div>
              <span className={styles.kicker}>Continuous Lifecycle</span>
              <h2 className={styles.h2}>The O&amp;M<br />engineering loop</h2>
            </div>
            <p className={styles.deliveryText}>
              Every intervention follows a closed engineering cycle, from evidence and diagnosis
              through correction and ongoing condition monitoring.
            </p>
          </div>
          <ol className={styles.steps}>
            {LOOP.map((s, i) => (
              <li key={s} className={styles.step}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.stepLabel}>{s}</span>
                {i < LOOP.length - 1 && <span className={styles.stepArrow} aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Enquiry CTA ── */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <span className={styles.kicker}>Project Enquiry / KSA</span>
          <h2 className={styles.ctaTitle}>Protect your<br />cooling<br />infrastructure</h2>
          <div className={styles.ctaRow}>
            <p className={styles.ctaText}>
              Bring engineering-led maintenance and mission-critical response to your cooling assets.
            </p>
            <Link href="/contact" className={styles.btnPrimary}>
              Request O&amp;M support <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
