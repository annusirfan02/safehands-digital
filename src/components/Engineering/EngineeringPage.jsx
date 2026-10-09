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
  // AI Assistant & Automation page
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></>,
  chat: <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z" />,
  doc: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M8 13h8M8 17h5" /></>,
  chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
  link: <><path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" /><path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" /></>,
  reply: <><path d="M9 14 4 9l5-5" /><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" /></>,
  // Fire & life safety / refrigeration pages
  flame: <path d="M12 21c-3.9 0-7-2.9-7-6.6 0-3.3 2.2-5.3 3.6-7.2.6 1.5 1.5 2.4 2.6 2.8C11 7.2 12 4.5 14.2 3c.3 2.7 1.7 4.4 3 6 1.1 1.4 1.8 3 1.8 5 0 3.8-3.1 7-7 7z" />,
  drop: <path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z" />,
  alarm: <><path d="M6 17V11a6 6 0 0 1 12 0v6" /><path d="M4 17h16M10 20h4M12 3v2" /></>,
  door: <><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M15 12h.01" /></>,
  thermo: <><path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z" /><path d="M12 9v7" /></>,
};

// Client copy: Page 4, "Engineering Specializations".
const GROUPS = [
  {
    id: '01',
    title: ['Engineering', 'Specializations'],
    images: [
      { src: '/services/mep-electrical-panel.jpg', alt: 'Engineer testing a low-voltage electrical distribution panel in Riyadh' },
      { src: '/services/mep-controls-wiring.jpg', alt: 'Technician calibrating building automation controls' },
      { src: '/services/mep-plumbing.jpg', alt: 'Technician servicing hydronic and water infrastructure' },
    ],
    items: [
      { icon: 'bolt', title: 'Electrical Distribution & Low Voltage (LV) Switchgear', text: 'Routine dielectric testing, busbar torque adjustments, transformer maintenance, and automated transfer switch (ATS) testing for backup generators.' },
      { icon: 'drop', title: 'Hydronic Pipe Balancing & Water Infrastructure', text: 'Ultrasonic flow volumetric testing, variable-frequency booster pump maintenance, water softener plant calibration, and multi-zone pressure regulation.' },
      { icon: 'chip', title: 'Building Automation Systems (BAS) & Smart Controls', text: 'Programming and diagnostic calibration of major BMS hardware. We optimize sensor placement, air-handling schedules, and economizer dampening.' },
      { icon: 'duct', title: 'Sustainable Drainage, Waste, & Vent (DWV) Networks', text: 'Heavy-duty basement sump pump calibrations, electronic grease trap monitoring, and integrated greywater filtration systems.' },
    ],
  },
];

// Previous groups (Mechanical & HVAC / Electrical & Low Current / Public Health),
// replaced by the client's specializations above. Kept for reference.
// eslint-disable-next-line no-unused-vars
const PREVIOUS_GROUPS = [
  {
    id: '01',
    title: ['Mechanical &', 'HVAC Infrastructure'],
    images: [{ src: '/services/mep-hvac-rooftop.jpg', alt: 'Rooftop HVAC units and ductwork' }],
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
    images: [
      { src: '/services/mep-electrical-panel.jpg', alt: 'Engineer working on an electrical distribution panel in Riyadh' },
      { src: '/services/mep-controls-wiring.jpg', alt: 'Technician wiring a control panel' },
    ],
    items: [
      { icon: 'bolt', title: 'High / Medium Voltage Infrastructure', text: 'Transformer installation, primary switchgear maintenance, and MDB balancing synchronized with SEC regulations.' },
      { icon: 'gauge', title: 'Emergency Power & Resilience', text: 'UPS configurations, emergency diesel generators, and automated transfer switches for instantaneous grid failure response.' },
      { icon: 'chip', title: 'ELV & Building Automation', text: 'Integration of BMS, SCADA, structured cabling, smart lighting, CCTV, and physical access security systems.' },
    ],
  },
  {
    id: '03',
    title: ['Public Health,', 'Plumbing & Civil Defense'],
    images: [{ src: '/services/mep-plumbing.jpg', alt: 'Technician servicing insulated plumbing pipework' }],
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

// Image banner for a section: one wide image, or two side by side.
export function Media({ images }) {
  if (!images?.length) return null;
  return (
    <div
      className={`${styles.media} ${images.length > 1 ? styles.mediaTwo : ''}`}
      style={{ '--n': images.length }}
    >
      {images.map((img) => (
        <img key={img.src} src={img.src} alt={img.alt} className={styles.mediaImg} loading="lazy" />
      ))}
    </div>
  );
}

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
          <span className={styles.heroKicker}>Comprehensive MEP Services</span>
          <h1 className={styles.heroTitle}>
            Comprehensive mechanical, electrical, &amp; plumbing <span className={styles.lime}>(MEP) services</span>
          </h1>
          <div className={styles.heroRow}>
            <p className={styles.heroText}>
              Orchestrating building systems for long-term structural integrity.
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
              <h2 className={styles.h2}>One cohesive<br />building ecosystem</h2>
            </div>
            <p className={styles.deliveryText}>
              Modern facilities require an interconnected, reliable infrastructure loop. Safe Hands
              synchronizes power, hydraulics, and building automation into a single, cohesive
              ecosystem managed by experienced senior field engineers.
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
          <Media
            images={[
              { src: '/services/mep-bim-model.jpg', alt: 'BIM 3D model of coordinated MEP services' },
              { src: '/services/om-ahu-team.jpg', alt: 'Engineers commissioning air handling units' },
            ]}
          />
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
              <Media images={g.images} />
              <div className={`${styles.cards} ${g.items.length === 4 ? styles.cards2 : ''}`}>
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
