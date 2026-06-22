'use client';

import { useState } from 'react';
import styles from './Footer.module.css';

const LINKS = {
  Services: [
    { label: 'Web Design', href: '#services' },
    { label: 'AI SEO', href: '#services' },
    { label: 'Meta & Google Ads', href: '#services' },
    { label: 'AI Assistants', href: '#services' },
  ],
  Company: [
    { label: 'What We Do', href: '#services' },
    { label: 'Why Us', href: '#different' },
    { label: 'Meet Maya', href: '#maya' },
    { label: 'Portfolio', href: '#portfolio' },
  ],
  Connect: [
    { label: 'Start a Project', href: '#contact' },
    { label: 'Ask AI', href: '#ask' },
    { label: 'hello@safehandsdigital.com', href: 'mailto:hello@safehandsdigital.com' },
  ],
};

const SOCIALS = [
  {
    label: 'X',
    href: '#',
    path: 'M4 4l16 16M20 4L4 20',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z M17 7h.01',
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M6 9v9M6 6v.01M11 18v-5a2.5 2.5 0 0 1 5 0v5M11 18v-9',
  },
  {
    label: 'YouTube',
    href: '#',
    path: 'M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z M10 9l5 3-5 3z',
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Top: brand + newsletter */}
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              <span className={styles.brandDot} />
              Safe Hands Digital
            </div>
            <p className={styles.tagline}>
              We bring results to brands. AI strategies, licensed experts, real results, wherever
              your customers are searching.
            </p>

            <form className={styles.newsletter} onSubmit={subscribe}>
              {done ? (
                <span className={styles.subscribed}>✓ You’re in. Talk soon.</span>
              ) : (
                <>
                  <input
                    className={styles.nlInput}
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email for newsletter"
                  />
                  <button type="submit" className={styles.nlBtn}>Subscribe</button>
                </>
              )}
            </form>
          </div>

          {/* Link columns */}
          <div className={styles.linksWrap}>
            {Object.entries(LINKS).map(([group, items]) => (
              <nav key={group} className={styles.linkCol}>
                <h4 className={styles.linkTitle}>{group}</h4>
                <ul>
                  {items.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className={styles.link}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Giant wordmark */}
        <div className={styles.wordmark} aria-hidden="true">SAFE HANDS</div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <span className={styles.copy}>© 2026 Safe Hands Digital · RIYADH · SAUDI ARABIA</span>

          <div className={styles.socials}>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className={styles.social}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>

          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Privacy</a>
            <a href="#" className={styles.legalLink}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
