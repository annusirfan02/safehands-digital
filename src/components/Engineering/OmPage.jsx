import Link from 'next/link';
import { Icon } from './EngineeringPage';
import styles from './EngineeringPage.module.css';

const CHILLER = [
  { icon: 'gauge', title: 'Thermodynamic Diagnostic Auditing', text: 'Continuous tracking of LTD, approach profiles, and compressor polytropic efficiency to stop hidden energy leaks.' },
  { icon: 'duct', title: 'Condenser & Tube Remediation', text: 'High-pressure mechanical tube brushing and descaling to combat fouling caused by water mineral density and sand storms.' },
  { icon: 'chip', title: 'Vibration Analysis & Laser Alignment', text: 'Precision dynamic shaft alignment of multi-stage pumps and screw or centrifugal compressors.' },
  { icon: 'snow', title: 'Refrigerant & Oil Management', text: 'Spectrographic oil lab analysis, system dehydration, and certified leak-detection tracking under severe weather stress.' },
];

const COLD_CHAIN = [
  { icon: 'duct', title: 'Compressor Rack Rebuilding', text: 'On-site tear-downs, valve plate swaps, and step-control calibration for heavy semi-hermetic or screw setups.' },
  { icon: 'gauge', title: 'Thermal Envelope Integrity Scanning', text: 'Infrared thermography to locate insulation gaps, thermal bridging, and structural seal failures.' },
  { icon: 'snow', title: 'Refrigeration Loop Optimization', text: 'EEV fine-tuning and multi-compressor sequencing configured to match real thermal inventory loads.' },
  { icon: 'clock', title: '24/7 Mission-Critical Dispatch', text: 'Industrial technical response equipped with specialized rigging tools to protect temperature-sensitive stock during plant failures.' },
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
          <span className={styles.heroKicker}>General Mechanical Operation &amp; Maintenance</span>
          <h1 className={styles.heroTitle}>
            Keep critical cooling assets performing at <span className={styles.lime}>their peak</span>
          </h1>
          <div className={styles.heroRow}>
            <p className={styles.heroText}>
              Field engineering and high-ambient maintenance for advanced cooling assets,
              industrial refrigeration, and continuous cold-chain networks.
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
                <h2 className={styles.h2}>Chiller plant<br />overhauls &amp;<br />maintenance</h2>
              </div>
              <p className={styles.deliveryText}>
                A technical, measurement-led maintenance framework for complex chiller plants
                operating under the Kingdom&apos;s severe ambient and water conditions.
              </p>
            </div>
            <Cards items={CHILLER} />
          </div>
        </section>

        {/* ── Cold chain ── */}
        <section className={`${styles.group} ${styles.groupAlt}`}>
          <div className={styles.container}>
            <span className={styles.kicker}>Continuous Cold Integrity</span>
            <h2 className={styles.groupTitle}>Industrial &amp; cold<br />chain refrigeration<br />O&amp;M</h2>
            <Cards items={COLD_CHAIN} />
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
