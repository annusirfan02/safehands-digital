'use client';

import styles from './WebDevBuild.module.css';

const ic = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
const Bolt = () => (<svg {...ic}><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></svg>);
const Bag = () => (<svg {...ic}><path d="M6 7h12l-1 13H7L6 7z" /><path d="M9 7a3 3 0 0 1 6 0" /></svg>);
const Globe = () => (<svg {...ic}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" /></svg>);

const CARDS = [
  {
    c: '#8fce3f', Icon: Bolt, title: 'Custom AI & Next.js',
    desc: 'Fully custom-coded sites and AI-powered web apps built from scratch. Best for brands that need unique functionality, speed, or a competitive edge.',
    features: ['Next.js / React', 'Custom AI integrations', 'Backend systems & APIs', 'Database architecture', 'Real-time features'],
  },
  {
    c: '#a855f7', Icon: Bag, title: 'Shopify & E-commerce',
    desc: 'High-converting online stores built on Shopify with custom themes, third-party integrations, and full checkout optimization.',
    features: ['Custom Shopify themes', 'WooCommerce / Woo', 'Payment & shipping integrations', 'Inventory & CRM sync', 'Conversion rate optimization'],
  },
  {
    c: '#2dd4bf', Icon: Globe, title: 'WordPress & CMS',
    desc: 'Flexible, SEO-optimized WordPress and Squarespace sites for businesses, agencies, and content-heavy brands.',
    features: ['WordPress / Elementor', 'Squarespace', 'Custom plugins & blocks', 'Multilingual sites', 'Headless CMS setups'],
  },
];

export default function WebDevBuild() {
  return (
    <section className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.kicker}>PLATFORMS & TECH</span>
          <h2 className={styles.heading}>
            <span className={styles.solid}>WHAT WE</span>
            <span className={styles.script}>Build.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {CARDS.map((card) => (
            <article key={card.title} className={styles.card} style={{ '--c': card.c }}>
              <span className={styles.topGlow} />
              <span className={styles.icon}><card.Icon /></span>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.desc}>{card.desc}</p>
              <ul className={styles.features}>
                {card.features.map((f) => (
                  <li key={f} className={styles.feature}><span className={styles.dot} />{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
