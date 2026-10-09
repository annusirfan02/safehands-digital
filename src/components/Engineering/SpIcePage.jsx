import Link from 'next/link';
import { Icon, Media } from './EngineeringPage';
import styles from './EngineeringPage.module.css';

// Client copy: Page 3, "Strategic Financial & Engineering Benefits".
const BENEFITS = [
  { icon: 'chart', title: 'Drastic Operational Cost Reduction', text: 'Lowers peak demand charges by up to 40% by shifting heavy power consumption to nighttime electricity rates.' },
  { icon: 'duct', title: 'Equipment Capital Expenditure Savings', text: 'Allows for the installation of smaller chillers and cooling towers, as the system designs for average thermal loads rather than peak worst-case scenario loads.' },
  { icon: 'shield', title: 'Built-in Infrastructure Redundancy', text: 'The SP.ICE storage tanks function as an immediate backup cooling source, protecting critical infrastructure during primary chiller maintenance or sudden grid blackouts.' },
];

// Client copy: Page 3, "System Configurations Built to Fit Your Footprint".
const CONFIGS = [
  { icon: 'snow', title: 'Full Storage Configuration', text: 'The SP.ICE array bears 100% of the peak daytime cooling load. The primary chillers are completely shut down during peak hours, yielding maximum financial savings.' },
  { icon: 'gauge', title: 'Partial Storage (Load Leveling)', text: 'The chillers operate all day at a steady, optimized baseline rate. The SP.ICE tanks kick in to absorb any afternoon spikes or peak demand surges, enabling a smaller initial chiller footprint.' },
];

// Previous "Why sp.ICE" cards, replaced by the client's benefits above.
// const WHY = [
//   { icon: 'duct', title: '60% Reduction in Footprint', text: 'Advanced internal heat-exchanger spacing achieves high energy density per cubic meter, requiring less area than traditional steel or concrete tanks.' },
//   { icon: 'shield', title: 'Modular ISO Container Form Factor', text: 'Pre-tested 10′, 20′, or 40′ ISO container structures support rapid deployment and avoid major foundation excavation.' },
//   { icon: 'snow', title: 'High-Rate Thermal Discharge', text: 'Release stored cooling energy to buffer sudden manufacturing heat loads or midday data center cooling demand without drawing grid power.' },
//   { icon: 'bolt', title: 'Solar PV Synchronization', text: 'Synchronize thermal storage with commercial rooftop solar networks and help manage changing solar production.' },
// ];

const FEATURES = [
  'Versatile Ice on Pipe Internal / External Melt design',
  'Capillary tube technology for fastest freeze and melt rates',
  'Space saving heat exchanger allows for large cooling capacity',
  'Can be delivered tailormade for side assembly or as ready ‘plug and play’ container modules',
  'Heavy Duty Containers fitted with insulating layer of rigid PIR foam and sealed with EPDM Layer',
  'Sealed for Life (completely welded) heat exchanger allows for high operating pressure',
];

const CAPACITY = [
  { size: '10′', kwh: '1,250 kWh' },
  { size: '20′', kwh: '2,500 kWh' },
  { size: '40′', kwh: '5,000 kWh' },
];

const FLOW = ['Cool night air', 'Chiller', 'sp.ICE modules', 'Thermal storage', 'Daytime peak', 'Building cooling loop'];

const SECTORS = [
  { icon: 'chip', title: 'Data Centers', text: 'Driving down PUE, maximizing delta T, and creating passive, zero-power thermal storage buffers to support uninterrupted Tier-compliant uptime.' },
  { icon: 'shield', title: 'Hotels & Resorts', text: 'Shifting heavy afternoon HVAC loads to off-peak night rates under SEC tariffs without impacting guest comfort.' },
  { icon: 'gauge', title: 'Process & Chemical Industry', text: 'Absorbing intense exothermic batch heat loads and process cooling shifts without oversized permanent chiller tonnage.' },
  { icon: 'snow', title: 'Logistics & Cold Warehouses', text: 'Securing SFDA-compliant thermal envelopes against high-ambient infiltration, moisture ingress, and compressor short-cycling.' },
];

function Cards({ items, layout = styles.cards4 }) {
  return (
    <div className={`${styles.cards} ${layout}`}>
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

export default function SpIcePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{ '--hero-img': "url('/spice/hero.jpg')" }}
          aria-hidden="true"
        />
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.container}>
          <span className={styles.heroKicker}>German Technology Focus</span>
          <h1 className={styles.heroTitle}>
            SP.ICE encapsulated<br />
            <span className={styles.cyan}>thermal storage systems</span>
          </h1>
          <div className={styles.heroRow}>
            <p className={styles.heroText}>
              High-density energy shifting powered by German thermodynamics.
            </p>
            <span className={styles.sysTag}>SYS / TES-03</span>
          </div>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.btnPrimary}>
              Discuss your project <span aria-hidden="true">→</span>
            </Link>
            <a href="#why-spice" className={styles.btnGhost}>Explore sp.ICE</a>
          </div>
        </div>
        <span className={styles.heroBadge}>High-ambient engineering · KSA</span>
      </section>

      {/* ── The sp.ICE dynamic ── */}
      <section className={styles.group}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div>
              <span className={styles.kicker}>The Technology Breakdown</span>
              <h2 className={styles.h2}>From passive consumer<br />to energy manager</h2>
            </div>
            <p className={styles.deliveryText}>
              As electricity grids move toward complex time-of-use (TOU) pricing structures, static
              cooling systems become financial liabilities. The SP.ICE Thermal Storage System
              represents advanced German Technology, transforming your facility from a passive
              utility consumer into an active, strategic energy manager. The system centers around
              high-efficiency, German-engineered polymer capsules containing engineered
              phase-change materials (PCM) or high-purity water.
            </p>
          </div>
          <div className={styles.dynGrid}>
            <article className={`${styles.dynCard} ${styles.dynNight}`}>
              <span className={styles.dynLabel}>01 / Off-peak · Night</span>
              <span className={styles.dynIcon}><Icon name="snow" size={34} /></span>
              <h3 className={styles.dynTitle}>The charging cycle</h3>
              <p className={styles.dynText}>
                During off-peak night hours when electricity rates are lowest, chillers pump a
                sub-zero glycol mixture through an insulated tank filled with SP.ICE cells,
                converting the liquid inside into high-density latent ice matrices.
              </p>
            </article>
            <article className={`${styles.dynCard} ${styles.dynDay}`}>
              <span className={styles.dynLabel}>02 / On-peak · Day</span>
              <span className={styles.dynIcon}><Icon name="bolt" size={34} /></span>
              <h3 className={styles.dynTitle}>The discharging cycle</h3>
              <p className={styles.dynText}>
                During daytime peak utility hours, the chillers are turned off or scaled back. Warm
                returning fluid from the building passes directly through the SP.ICE tank, cooling
                down instantaneously as it melts the encapsulated matrices.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── System configurations ── */}
      <section className={`${styles.group} ${styles.groupAlt}`}>
        <div className={styles.container}>
          <span className={styles.kicker}>System Configurations</span>
          <h2 className={styles.groupTitle}>Built to fit<br />your footprint</h2>
          <Cards items={CONFIGS} layout={styles.cardsPair} />
        </div>
      </section>

      {/* ── Benefits ── */}
      <section id="why-spice" className={styles.group}>
        <div className={styles.container}>
          <span className={styles.kicker}>Strategic Financial &amp; Engineering Benefits</span>
          <h2 className={styles.groupTitle}>Why SP.ICE</h2>
          <Media images={[{ src: '/services/spice-container-studio.jpg', alt: 'sp.ICE speedy & powerful ice storage container next to a chiller unit' }]} />
          <Cards items={BENEFITS} layout="" />
        </div>
      </section>

      {/* ── Featuring sp.ICE ── */}
      <section className={styles.group}>
        <div className={`${styles.container} ${styles.featGrid}`}>
          <div className={styles.featMedia}>
            <img
              src="/spice/spice-solar.jpg"
              alt="sp.ICE ice storage container connected to a solar PV array"
              className={styles.featImgMain}
              loading="lazy"
            />
            <div className={styles.featImgSub}>
              <img
                src="/spice/spice-container.jpg"
                alt="sp.ICE container ice storage installation at Kältezentrale Europaplatz"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <span className={styles.kicker}>Featuring sp.ICE</span>
            <h2 className={styles.h2}>Ultra-fast and powerful<br />ice storage system</h2>

            <ul className={styles.featList}>
              {FEATURES.map((f) => (
                <li key={f} className={styles.featItem}>
                  <span className={styles.featTick} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <span className={styles.featCapLabel}>Capacity of standard size containers</span>
            <div className={styles.featCaps}>
              {CAPACITY.map((c) => (
                <div key={c.size} className={styles.featCap}>
                  <strong className={styles.featCapSize}>{c.size}</strong>
                  <span className={styles.featCapKwh}>{c.kwh}</span>
                </div>
              ))}
            </div>

            <div className={styles.featBadges}>
              <span className={styles.featBadge}>Maintenance free</span>
              <span className={styles.featBadge}>Made in Germany</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className={styles.delivery}>
        <div className={styles.container}>
          <div className={styles.deliveryHead}>
            <div>
              <span className={styles.kicker}>System Architecture</span>
              <h2 className={styles.h2}>How it works</h2>
            </div>
            <p className={styles.deliveryText}>
              A closed thermal loop moves cooling production away from the Kingdom&apos;s most
              demanding daytime conditions.
            </p>
          </div>
          <ol className={styles.steps}>
            {FLOW.map((s, i) => (
              <li key={s} className={styles.step}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.stepLabel}>{s}</span>
                {i < FLOW.length - 1 && <span className={styles.stepArrow} aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>
          <Media images={[{ src: '/services/spice-solar-wide.jpg', alt: 'sp.ICE container storing solar-charged cooling energy for the city' }]} />
        </div>
      </section>

      {/* ── Sectors ── */}
      <section className={`${styles.group} ${styles.groupFull}`}>
        <div className={styles.container}>
          <span className={styles.kicker}>Engineered for KSA</span>
          <h2 className={styles.groupTitle}>Designed around Saudi Arabia&apos;s energy &amp; climate reality</h2>
          <Cards items={SECTORS} />
        </div>
      </section>

      {/* ── Enquiry CTA ── */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <span className={styles.kicker}>Project Enquiry / KSA</span>
          <h2 className={styles.ctaTitle}>Ready to rethink<br />your cooling<br />infrastructure?</h2>
          <div className={styles.ctaRow}>
            <p className={styles.ctaText}>
              Talk to Safe Hands about deploying sp.ICE thermal energy storage in your next project.
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
