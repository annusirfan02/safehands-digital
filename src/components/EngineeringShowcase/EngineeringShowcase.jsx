import Link from 'next/link';
import styles from './EngineeringShowcase.module.css';

// Default content = the Engineering Services showcase. The same component is
// reused for the AI Assistant & Automation showcase by passing props (50/50).
const ENGINEERING_ITEMS = [
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

export const AI_ITEMS = [
  {
    code: 'SYS / AI-01',
    kicker: 'AI Assistant & Automation',
    title: ['100 emails in.', 'Only what matters out.'],
    text: 'A custom AI system that reads your inbox, filters out the noise, sorts what is important and drafts the replies, so your team only handles the work that counts.',
    tags: ['Email triage', 'Priority sorting', 'Drafted replies', 'Arabic & English'],
    href: '/ai-automation',
    image: '/showcase/AI-Assistant.jpg',
    accentColor: '#a878ff',
  },
  {
    code: 'SYS / ERP-02',
    kicker: 'ERP Services & Development',
    title: ['Systems that run the business.', 'Built to scale.'],
    text: 'End-to-end SAP implementation and support across Finance, Procurement, HR, Sales and Analytics, connected to the automations that save your team hours.',
    tags: ['SAP', 'Finance & HR', 'Procurement', 'Analytics'],
    href: '/erp-development',
    image: '/showcase/ERP.jpg',
    accentColor: '#2dd4bf',
  },
];

export default function EngineeringShowcase({
  id = 'engineering',
  label = 'ENGINEERING SERVICES',
  heading = 'Engineered for real-world performance.',
  outline = 'Built for complex facilities.',
  helper = 'Integrated MEP engineering and infrastructure solutions, engineered and delivered for complex, high-performance facilities across Saudi Arabia.',
  items = ENGINEERING_ITEMS,
}) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <span className={styles.label}>{label}</span>
            <h2 className={styles.heading}>
              {heading}
              <span className={styles.outline}>{outline}</span>
            </h2>
          </div>
          <p className={styles.helper}>{helper}</p>
        </div>

        <div className={styles.grid}>
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className={`${styles.card} ${it.accent === 'cyan' ? styles.cyan : ''}`}
              style={it.accentColor ? { '--acc': it.accentColor } : undefined}
            >
              {it.image ? (
                <span className={styles.cardBg} style={{ backgroundImage: `url('${it.image}')` }} aria-hidden="true" />
              ) : (
                <span className={`${styles.cardBg} ${styles.cardArt}`} aria-hidden="true" />
              )}
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
