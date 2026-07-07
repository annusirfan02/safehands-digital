'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const LINKS = {
  Services: [
    { label: 'Web Design', href: '/web-development' },
    { label: 'AI SEO', href: '/seo' },
    { label: 'Meta & Google Ads', href: '/paid-ads' },
    { label: 'AI Assistants', href: '/ai-employees' },
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
    { label: 'contact@safehandsksa.com', href: 'mailto:contact@safehandsksa.com' },
  ],
};

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/safehandsksa/',
    path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61588593882261',
    path: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/111123146/',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'Snapchat',
    href: 'https://snapchat.com/t/Gc5PeR5Q',
    path: 'M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.135 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.045.179-.09.36-.15.553-.075.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.652.307-4.837C7.392 1.077 10.739.807 11.727.807l.42-.014h.059z',
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
              <img src="/logo-light.png" alt="Safe Hands Digital" className={`${styles.logoImg} ${styles.logoLight}`} />
              <img src="/logo-dark.png" alt="Safe Hands Digital" className={`${styles.logoImg} ${styles.logoDark}`} />
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
                      {l.href.startsWith('/') ? (
                        <Link href={l.href} className={styles.link}>{l.label}</Link>
                      ) : (
                        <a href={l.href} className={styles.link}>{l.label}</a>
                      )}
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
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className={styles.social}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>

          <div className={styles.legal}>
            <Link href="/privacy" className={styles.legalLink}>Privacy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
