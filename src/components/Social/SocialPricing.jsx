'use client';

import styles from './SocialPricing.module.css';

const PLANS = [
  {
    c: '#a855f7', label: 'STARTER', price: 'Custom pricing', per: '', badge: null, featured: false,
    features: ['Instagram + TikTok', '15 videos/month', 'Scripts & hooks', 'Full video production', 'Professional editing'],
    note: 'No posting · No UGC',
  },
  {
    c: '#8fce3f', label: 'GROWTH', price: 'Custom pricing', per: '', badge: 'MOST POPULAR', featured: true,
    features: ['Everything in Starter', 'Content posting & scheduling', 'DM automations', 'Community management', 'Likes, comments & engagement'],
    note: null,
  },
  {
    c: '#ff8c1e', label: 'FULL SCALE', price: 'Custom pricing', per: '', badge: 'BEST VALUE', featured: false,
    features: ['Everything in Growth', '5-7 UGC videos/month', 'Creator casting & briefing', 'YouTube Shorts & LinkedIn', 'Multiple creators & formats', 'Influencer-grade content', 'Priority turnaround'],
    note: null,
  },
];

export default function SocialPricing() {
  return (
    <section className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.kicker}>PRICING</span>
          <h2 className={styles.heading}>SOCIAL MEDIA PACKAGES</h2>
        </div>

        <div className={styles.grid}>
          {PLANS.map((p) => (
            <article
              key={p.label}
              className={`${styles.card} ${p.featured ? styles.featured : ''}`}
              style={{ '--c': p.c }}
            >
              <span className={styles.topGlow} />
              {p.badge && <span className={styles.badge}>{p.badge}</span>}

              <div className={styles.body}>
                <span className={styles.label}>{p.label}</span>
                <div className={styles.price}>{p.price}<span className={styles.per}>{p.per}</span></div>

                <ul className={styles.features}>
                  {p.features.map((f) => (
                    <li key={f} className={styles.feature}>
                      <span className={styles.check}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-11" /></svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {p.note && <span className={styles.note}>{p.note}</span>}
              </div>

              <a href="/onboarding" className={styles.cta}>GET STARTED <span className={styles.arrow}>→</span></a>
            </article>
          ))}
        </div>

        <p className={styles.footer}>
          All packages include onboarding call & monthly strategy review. Custom packages available.
        </p>
      </div>
    </section>
  );
}
