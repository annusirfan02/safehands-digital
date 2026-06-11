'use client';

import styles from './SeoPricing.module.css';

const PLANS = [
  {
    c: '#2b9fe0', label: 'SEO STARTER', price: '$1,500', per: '/mo', featured: false,
    desc: 'For businesses ready to build their SEO foundation.',
    features: ['Full technical SEO audit', 'On-page optimization (up to 10 pages)', '2 blog posts / month', 'Google My Business management', 'Monthly keyword ranking report', 'Monthly strategy call'],
  },
  {
    c: '#a855f7', label: 'SEO GROWTH', price: '$2,500', per: '/mo', featured: true,
    desc: 'For businesses serious about outranking competitors.',
    features: ['Everything in Starter', '4 blog posts / month', 'Link building — 5 links/mo (DR 30+)', 'Local citation building', 'AI search optimization (SGE + Perplexity)', 'Traffic & conversion analytics report', 'Competitor gap analysis (quarterly)'],
  },
  {
    c: '#ff8c1e', label: 'SEO AUTHORITY', price: '$4,000', per: '/mo', featured: false,
    desc: 'For brands that want to dominate their niche.',
    features: ['Everything in Growth', '8 blog posts / month', 'Aggressive link building — 15 links/mo (DR 40+)', 'Digital PR placements', 'Full AI search strategy (all platforms)', 'Entity SEO & knowledge graph optimization', 'Weekly check-ins + priority support'],
  },
];

export default function SeoPricing() {
  return (
    <section className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.kicker}>TRANSPARENT PRICING</span>
          <h2 className={styles.heading}>
            <span className={styles.solid}>SEO</span>
            <span className={styles.script}>Packages.</span>
          </h2>
          <p className={styles.subtitle}>
            No contracts, no hidden fees. Pick the package that matches where you are —
            upgrade any time as results come in.
          </p>
        </div>

        <div className={styles.grid}>
          {PLANS.map((p) => (
            <article
              key={p.label}
              className={`${styles.card} ${p.featured ? styles.featured : ''}`}
              style={{ '--c': p.c }}
            >
              <span className={styles.topGlow} />
              {p.featured && <span className={styles.badge}>MOST POPULAR</span>}

              <span className={styles.label}>{p.label}</span>
              <div className={styles.price}>{p.price}<span className={styles.per}>{p.per}</span></div>
              <p className={styles.desc}>{p.desc}</p>

              <ul className={styles.features}>
                {p.features.map((f) => (
                  <li key={f} className={styles.feature}><span className={styles.check}>✓</span>{f}</li>
                ))}
              </ul>

              <a href="#contact" className={`${styles.cta} ${p.featured ? styles.ctaFilled : styles.ctaOutline}`}>
                GET STARTED
              </a>
            </article>
          ))}
        </div>

        <p className={styles.footer}>
          All packages are month-to-month. No long-term contracts required.{' '}
          <a href="#contact" className={styles.footerLink}>Start with a free SEO audit →</a>
        </p>
      </div>
    </section>
  );
}
