import Link from 'next/link';
import { Icon, Media } from './EngineeringPage';
import styles from './EngineeringPage.module.css';

/**
 * Generic engineering service page in the shared MEP / O&M / sp.ICE design.
 * Driven entirely by a `data` object so new client pages only need content:
 *   hero:  { kicker, title: [plain, accent], subtitle, image?, glow?, badge, sys }
 *   intro: { kicker, heading: [line, line, …], text }
 *   scope: { kicker, title: [line, line], items: [{ icon, title, text }], images? }
 *   cta:   { title: [line, line], text, label }
 */
export default function ServicePage({ data }) {
  const { hero, intro, scope, cta } = data;
  const heroBg = hero.image ? `url('${hero.image}')` : hero.glow;

  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} style={{ '--hero-img': heroBg }} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.container}>
          <span className={styles.heroKicker}>{hero.kicker}</span>
          <h1 className={styles.heroTitle}>
            {hero.title[0]} <span className={styles.lime}>{hero.title[1]}</span>
          </h1>
          <div className={styles.heroRow}>
            <p className={styles.heroText}>{hero.subtitle}</p>
            <span className={styles.sysTag}>{hero.sys}</span>
          </div>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.btnPrimary}>
              Discuss your project <span aria-hidden="true">→</span>
            </Link>
            <a href="#scope" className={styles.btnGhost}>Explore our scope</a>
          </div>
        </div>
        <span className={styles.heroBadge}>{hero.badge}</span>
      </section>

      {/* ── Intro ── */}
      <section className={styles.delivery}>
        <div className={styles.container}>
          <div className={styles.deliveryHead}>
            <div>
              <span className={styles.kicker}>{intro.kicker}</span>
              <h2 className={styles.h2}>
                {intro.heading.map((line, i) => (
                  <span key={line}>{i > 0 && <br />}{line}</span>
                ))}
              </h2>
            </div>
            <p className={styles.deliveryText}>{intro.text}</p>
          </div>
        </div>
      </section>

      {/* ── Scope ── */}
      <section id="scope" className={`${styles.group} ${styles.groupAlt}`}>
        <div className={styles.container}>
          <span className={styles.kicker}>{scope.kicker}</span>
          <h2 className={styles.groupTitle}>{scope.title[0]}<br />{scope.title[1]}</h2>
          <Media images={scope.images} />
          <div className={`${styles.cards} ${styles.cards2}`}>
            {scope.items.map((it, i) => (
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

      {/* ── Enquiry CTA ── */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <span className={styles.kicker}>Project Enquiry / KSA</span>
          <h2 className={styles.ctaTitle}>{cta.title[0]}<br />{cta.title[1]}</h2>
          <div className={styles.ctaRow}>
            <p className={styles.ctaText}>{cta.text}</p>
            <Link href="/contact" className={styles.btnPrimary}>
              {cta.label} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
