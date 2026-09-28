import Link from 'next/link';
import styles from './EngineeringPage.module.css';

const STEPS = ['Design', 'Engineering', 'Procurement', 'Installation', 'Commissioning', 'Optimization'];

// Minimal line icons for the capability cards.
const ICONS = {
  air: <path d="M3 8h10a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7" />,
  duct: <><rect x="3" y="12" width="8" height="8" rx="1" /><rect x="13" y="4" width="8" height="8" rx="1" /><path d="M11 16h4v-4" /></>,
  gauge: <><path d="M4 16a8 8 0 1 1 16 0" /><path d="M12 16l4-5" /></>,
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  chip: <><rect x="5" y="5" width="14" height="14" rx="2" /><rect x="9" y="9" width="6" height="6" /></>,
  shield: <><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M8 5V3h8v2M8 11h8M8 15h5" /></>,
  snow: <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9.5 4.5L12 7l2.5-2.5M9.5 19.5L12 17l2.5 2.5" />,
  clock: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></>,
};

const GROUPS = [
  {
    id: '01',
    title: ['Mechanical &', 'HVAC Infrastructure'],
    items: [
      { icon: 'air', title: 'Central Air Distribution', text: 'Installation and optimization of AHUs, FCUs, VAV boxes, and specialized air filtration systems for high-dust desert climates.' },
      { icon: 'duct', title: 'Ductwork Engineering', text: 'SMACNA-compliant high and low pressure duct design, fabrication, acoustic lining, and comprehensive air balancing.' },
      { icon: 'gauge', title: 'Ventilation & Smoke Extraction', text: 'Civil Defense-approved smoke management, basement car park exhaust networks, and industrial kitchen ventilation panels.' },
    ],
  },
  {
    id: '02',
    title: ['Electrical Power &', 'Low Current Systems'],
    alt: true,
    items: [
      { icon: 'bolt', title: 'High / Medium Voltage Infrastructure', text: 'Transformer installation, primary switchgear maintenance, and MDB balancing synchronized with SEC regulations.' },
      { icon: 'gauge', title: 'Emergency Power & Resilience', text: 'UPS configurations, emergency diesel generators, and automated transfer switches for instantaneous grid failure response.' },
      { icon: 'chip', title: 'ELV & Building Automation', text: 'Integration of BMS, SCADA, structured cabling, smart lighting, CCTV, and physical access security systems.' },
    ],
  },
  {
    id: '03',
    title: ['Public Health,', 'Plumbing & Civil Defense'],
    items: [
      { icon: 'gauge', title: 'Water Distribution & Treatment', text: 'Booster pumps, greywater recycling loops, domestic storage management, and centralized chemical water treatment.' },
      { icon: 'duct', title: 'Drainage Systems', text: 'Sewerage networks, industrial grease traps, and storm water drainage designed for sudden flash precipitation events.' },
      { icon: 'shield', title: 'Fire Protection Engineering', text: 'NFPA-compliant sprinklers, clean-agent suppression for server rooms, fire pumps, and certified wet and dry risers.' },
    ],
  },
];

const CONDITIONS = [
  { value: '45°C+', label: 'High-ambient temperatures' },
  { value: 'Dust + Sand', label: 'High-dust environments' },
  { value: 'Mission Critical', label: 'Continuous operations' },
];

export function Icon({ name, size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

export default function EngineeringPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.container}>
          <span className={styles.heroKicker}>Comprehensive MEP Engineering Services</span>
          <h1 className={styles.heroTitle}>
            Engineering the infrastructure behind <span className={styles.lime}>high-performance</span> facilities
          </h1>
          <div className={styles.heroRow}>
            <p className={styles.heroText}>
              Turnkey mechanical, electrical, plumbing and fire protection design and
              execution for complex facilities across Saudi Arabia.
            </p>
            <span className={styles.sysTag}>SYS / MEP-01</span>
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

      {/* ── Integrated delivery ── */}
      <section className={styles.delivery}>
        <div className={styles.container}>
          <div className={styles.deliveryHead}>
            <div>
              <span className={styles.kicker}>Integrated Delivery</span>
              <h2 className={styles.h2}>Engineered for<br />complex facilities</h2>
            </div>
            <p className={styles.deliveryText}>
              We provide fully integrated engineering, procurement, installation, and
              commissioning solutions compliant with SBC, HCIS security standards, and
              civil defense requirements.
            </p>
          </div>
          <ol className={styles.steps}>
            {STEPS.map((s, i) => (
              <li key={s} className={styles.step}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.stepLabel}>{s}</span>
                {i < STEPS.length - 1 && <span className={styles.stepArrow} aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Capability groups ── */}
      <div id="capabilities">
        {GROUPS.map((g) => (
          <section key={g.id} className={`${styles.group} ${g.alt ? styles.groupAlt : ''}`}>
            <div className={styles.container}>
              <h2 className={styles.groupTitle}>
                <span className={styles.lime}>{g.id} /</span> {g.title[0]}<br />{g.title[1]}
              </h2>
              <div className={styles.cards}>
                {g.items.map((it, i) => (
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
            </div>
          </section>
        ))}
      </div>

      {/* ── Saudi conditions ── */}
      <section className={styles.conditions}>
        <div className={styles.container}>
          <span className={styles.kicker}>Engineered for Saudi conditions</span>
          <div className={styles.condGrid}>
            {CONDITIONS.map((c) => (
              <div key={c.value} className={styles.condCard}>
                <strong className={styles.condValue}>{c.value}</strong>
                <span className={styles.condLabel}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiry CTA ── */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <span className={styles.kicker}>Project Enquiry / KSA</span>
          <h2 className={styles.ctaTitle}>Let&apos;s engineer your<br />next facility</h2>
          <div className={styles.ctaRow}>
            <p className={styles.ctaText}>
              Bring our engineering team into your next infrastructure, cooling, or mission-critical project.
            </p>
            <Link href="/contact" className={styles.btnPrimary}>
              Talk to an engineer <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
