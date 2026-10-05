import Link from 'next/link';
import styles from './EngineeringShowcase.module.css';

const ITEMS = [
  {
    code: 'SYS / MEP-01',
    kicker: 'MEP Engineering',
    title: ['Engineering the infrastructure behind', 'high-performance facilities'],
    text: 'Turnkey mechanical, electrical, plumbing and fire protection design and execution for complex facilities across Saudi Arabia.',
    tags: ['HVAC', 'Electrical & ELV', 'Plumbing', 'Fire Protection'],
    href: '/mep-engineering',
    image: '/engineering/hero.jpg',
    accent: 'lime',
  },
  {
    code: 'SYS / TES-03',
    kicker: 'sp.ICE Thermal Energy Storage',
    title: ['Shift cooling load.', 'Reduce peak demand.'],
    text: 'German-made ice thermal energy storage that moves heavy cooling loads from expensive daytime peaks to cooler night-time operation.',
    tags: ['10′ · 20′ · 40′ modules', 'Solar PV ready', 'Maintenance free', 'Made in Germany'],
    href: '/sp-ice-tes',
    image: '/spice/hero.jpg',
    accent: 'cyan',
  },
];

export default function EngineeringShowcase() {
  return (
    <section id="engineering" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <span className={styles.label}>ENGINEERING SERVICES</span>
            <h2 className={styles.heading}>
              Beyond digital.<br />
              <span className={styles.outline}>Built for the Kingdom.</span>
            </h2>
          </div>
          <p className={styles.helper}>
            Safe Hands Engineering delivers MEP infrastructure and thermal energy storage for
            high-ambient, mission-critical facilities across Saudi Arabia.
          </p>
        </div>

        <div className={styles.grid}>
          {ITEMS.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className={`${styles.card} ${it.accent === 'cyan' ? styles.cyan : ''}`}
            >
              <span className={styles.cardBg} style={{ backgroundImage: `url('${it.image}')` }} aria-hidden="true" />
              <span className={styles.cardShade} aria-hidden="true" />

              <span className={styles.cardTop}>
                <span className={styles.cardKicker}>{it.kicker}</span>
                <span className={styles.cardCode}>{it.code}</span>
              </span>

              <span className={styles.cardBody}>
                <span className={styles.cardTitle}>
                  {it.title[0]} <span className={styles.accent}>{it.title[1]}</span>
                </span>
                <span className={styles.cardText}>{it.text}</span>
                <span className={styles.tags}>
                  {it.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
                </span>
                <span className={styles.cta}>
                  Explore service <span className={styles.arrow} aria-hidden="true">→</span>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
