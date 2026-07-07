import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './LegalPage.module.css';

/**
 * Shared layout for static legal pages (Privacy Policy, Terms & Conditions).
 * `sections` is an array of { heading, body: string[] } where each body entry
 * is a paragraph. Simple, readable, and theme-aware.
 */
export default function LegalPage({ title, updated, intro, sections }) {
  return (
    <main>
      <section className={styles.wrap}>
        <div className={styles.inner}>
          <Link href="/" className={styles.back}>← Back to home</Link>

          <header className={styles.head}>
            <span className={styles.kicker}>LEGAL</span>
            <h1 className={styles.title}>{title}</h1>
            {updated && <p className={styles.updated}>Last updated: {updated}</p>}
            {intro && <p className={styles.intro}>{intro}</p>}
          </header>

          <div className={styles.body}>
            {sections.map((s, i) => (
              <section key={i} className={styles.section}>
                <h2 className={styles.heading}>
                  <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                  {s.heading}
                </h2>
                {s.body.map((p, j) => (
                  <p key={j} className={styles.para} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </section>
            ))}
          </div>

          <p className={styles.contact}>
            Questions about this page? Email us at{' '}
            <a href="mailto:contact@safehandsksa.com">contact@safehandsksa.com</a>.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
