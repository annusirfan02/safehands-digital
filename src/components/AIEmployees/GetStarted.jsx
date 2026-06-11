'use client';

import styles from './GetStarted.module.css';

const TIERS = [
  {
    num: '01', label: 'AI AUDIT', color: '#8fce3f', period: 'ONE-TIME',
    price: ['$500–', '$1,500'],
    desc: 'We map your workflow, identify what can be automated, and hand you a concrete roadmap. Zero commitment — the plan is yours to keep.',
    features: ['Workflow analysis session (2–3 hrs)', 'Automation opportunity map', 'Tool & integration recommendations', 'Custom AI roadmap document', 'ROI estimate per automation', 'Priority ranked — what to build first'],
    cta: 'BOOK AN AUDIT', filled: false, featured: false,
  },
  {
    num: '02', label: 'AI SYSTEM BUILD', color: '#2d9cdb', period: 'ONE-TIME BUILD',
    price: ['$3,000–', '$10,000'],
    desc: 'We build your complete AI operator end to end — sourcing, research, personalization, outreach, CRM integration. Fully working system delivered.',
    features: ['Custom AI operator build', 'API & tool integrations', 'Trained on your business data', 'Tested with real prospects', '2 weeks of post-launch optimization', 'Full documentation & handoff'],
    cta: 'START BUILDING', filled: true, featured: true,
  },
  {
    num: '03', label: 'MONTHLY RETAINER', color: '#9b7af0', period: 'PER MONTH',
    price: ['$1,000–', '$5,000'],
    desc: 'We run your AI operator every month — monitoring results, fixing edge cases, adding new workflows, and reporting on everything.',
    features: ['Monthly workflow monitoring', 'Performance reporting', 'New automations added monthly', 'Edge case resolution', 'Slack access to your team', 'Quarterly strategy review'],
    cta: 'TALK TO US', filled: false, featured: false,
  },
];

export default function GetStarted() {
  return (
    <section className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.kicker}><i className={styles.kickerDot} /> PRICING · 3 PLANS</span>
          <h2 className={styles.heading}>
            <span className={styles.solid}>HOW TO</span>
            <span className={styles.script}>Get Started.</span>
          </h2>
          <p className={styles.sub}>Start with an audit. Build your system. Manage it monthly. Or skip straight to building.</p>
        </div>

        <div className={styles.grid}>
          {TIERS.map((t) => (
            <article
              key={t.num}
              className={`${styles.card} ${t.featured ? styles.featured : ''}`}
              style={{ '--c': t.color }}
            >
              <span className={styles.watermark} aria-hidden="true">{t.num}</span>
              {t.featured && <span className={styles.badge}>MOST POPULAR</span>}

              <div className={styles.cardTop}>
                <span className={styles.tierNum}>{t.num}</span>
                <span className={styles.tierLabel}>{t.label}</span>
              </div>

              <div className={styles.price}>
                <span>{t.price[0]}</span><span>{t.price[1]}</span>
              </div>
              <span className={styles.period}>{t.period}</span>

              <p className={styles.desc}>{t.desc}</p>

              <ul className={styles.features}>
                {t.features.map((f) => (
                  <li key={f} className={styles.feature}><span className={styles.check}>✓</span>{f}</li>
                ))}
              </ul>

              <a href="#contact" className={`${styles.cta} ${t.filled ? styles.ctaFilled : styles.ctaOutline}`}>
                {t.cta} →
              </a>
            </article>
          ))}
        </div>

        <p className={styles.footer}>
          All plans include an onboarding call, documentation, and a 14-day feedback window after launch.
        </p>
      </div>
    </section>
  );
}
