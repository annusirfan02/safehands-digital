import Link from 'next/link';
import { Icon } from './EngineeringPage';
import styles from './EngineeringPage.module.css';

const WHY = [
  { icon: 'duct', title: '60% Reduction in Footprint', text: 'Advanced internal heat-exchanger spacing achieves high energy density per cubic meter, requiring less area than traditional steel or concrete tanks.' },
  { icon: 'shield', title: 'Modular ISO Container Form Factor', text: 'Pre-tested 10′, 20′, or 40′ ISO container structures support rapid deployment and avoid major foundation excavation.' },
  { icon: 'snow', title: 'High-Rate Thermal Discharge', text: 'Release stored cooling energy to buffer sudden manufacturing heat loads or midday data center cooling demand without drawing grid power.' },
  { icon: 'bolt', title: 'Solar PV Synchronization', text: 'Synchronize thermal storage with commercial rooftop solar networks and help manage changing solar production.' },
];

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

function Cards({ items }) {
  return (
    <div className={`${styles.cards} ${styles.cards4}`}>
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
          <span className={styles.heroKicker}>Exclusive German Technology for KSA</span>
          <h1 className={styles.heroTitle}>
            Shift cooling load.<br />
            <span className={styles.cyan}>Reduce peak demand.</span>
          </h1>
          <div className={styles.heroRow}>
            <p className={styles.heroText}>
              Next-generation thermal energy storage designed to shift heavy cooling loads from
              expensive daytime peaks to cooler night-time operation.
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
              <span className={styles.kicker}>Thermal Load Shifting</span>
              <h2 className={styles.h2}>The sp.ICE dynamic</h2>
            </div>
            <p className={styles.deliveryText}>
              Running heavy central chillers during hot afternoon peaks is inefficient and expensive
              under SEC Time-of-Use pricing. sp.ICE shifts the cooling workload to cooler night hours.
            </p>
          </div>
          <div className={styles.dynGrid}>
            <article className={`${styles.dynCard} ${styles.dynNight}`}>
              <span className={styles.dynLabel}>01 / Night · 8 hours</span>
              <span className={styles.dynIcon}><Icon name="snow" size={34} /></span>
              <h3 className={styles.dynTitle}>Charge the thermal reserve</h3>
              <p className={styles.dynText}>
                Chillers operate in cooler ambient conditions, freezing high-density sp.ICE modules
                inside a dedicated loop.
              </p>
            </article>
            <article className={`${styles.dynCard} ${styles.dynDay}`}>
              <span className={styles.dynLabel}>02 / Day · 8 hours</span>
              <span className={styles.dynIcon}><Icon name="bolt" size={34} /></span>
              <h3 className={styles.dynTitle}>Discharge at peak load</h3>
              <p className={styles.dynText}>
                Heavy chillers are throttled down or turned off while stored thermal energy supplies
                chilled water into building headers.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Why sp.ICE ── */}
      <section id="why-spice" className={`${styles.group} ${styles.groupAlt}`}>
        <div className={styles.container}>
          <span className={styles.kicker}>Compact. Modular. Responsive.</span>
          <h2 className={styles.groupTitle}>Why sp.ICE</h2>
          <Cards items={WHY} />
        </div>
      </section>

      {/* ── Featuring sp.ICE ── */}
      <section className={styles.group}>
        <div className={`${styles.container} ${styles.featGrid}`}>
          <div className={styles.featMedia}>
            <img
              src="/spice/spice-module.jpg"
              alt="sp.ICE Eisspeichertechnik ice storage heat exchanger module"
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
