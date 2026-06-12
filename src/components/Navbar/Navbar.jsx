'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';
import styles from './Navbar.module.css';

const LINKS = [
  { href: '/', label: 'Home' },
  { label: 'What we do', children: [
    { href: '/seo', label: 'AI SEO' },
    { href: '/web-development', label: 'Web Development' },
    { href: '/social-media', label: 'Social Media' },
    { href: '/paid-ads', label: 'Paid Ads' },
  ] },
  { href: '/solutions', label: 'Solutions' },
  { href: '/ai-employees', label: 'AI Employees' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const path = usePathname();
  const [closed, setClosed] = useState(false);

  // The onboarding flow is a standalone, distraction-free page (no nav).
  if (path === '/onboarding') return null;

  return (
    <header className={styles.nav} suppressHydrationWarning>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Safe Hands Digital — home">
          {/* Your real logo — drop the files in /public (see notes). */}
          <img src="/logo-light.png" alt="Safe Hands Digital" className={`${styles.logoImg} ${styles.logoLight}`} />
          <img src="/logo-dark.png" alt="Safe Hands Digital" className={`${styles.logoImg} ${styles.logoDark}`} />
        </Link>

        <nav className={styles.links}>
          {LINKS.map((l) =>
            l.children ? (
              <div
                key={l.label}
                className={`${styles.dropdown} ${closed ? styles.closed : ''}`}
                onMouseLeave={() => setClosed(false)}
              >
                <button type="button" className={`${styles.link} ${styles.dropToggle}`}>
                  {l.label} <span className={styles.chev}>▾</span>
                </button>
                <div className={styles.dropMenu}>
                  {l.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className={`${styles.dropItem} ${path === c.href ? styles.dropActive : ''}`}
                      onClick={() => setClosed(true)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={`${styles.link} ${path === l.href ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            )
          )}
          <Link href="/onboarding" className={styles.cta}>Get Started</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
