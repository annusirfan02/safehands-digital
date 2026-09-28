'use client';

import { useEffect, useState } from 'react';
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
    { href: '/erp-development', label: 'ERP Services & Development' },
    { href: '/ai-video', label: 'AI Video Production' },
  ] },
  { label: 'Engineering Services', children: [
    { href: '/mep-engineering', label: 'MEP Engineering Services' },
    { href: '/operations-maintenance', label: 'General Mechanical Operation & Maintenance (O&M)' },
    { href: '/sp-ice-tes', label: 'sp.ICE TES' },
  ] },
  { href: '/solutions', label: 'Solutions' },
  { href: '/ai-employees', label: 'AI Employees' },
  // { href: '/mep-engineering', label: 'Engineering' },
  // { href: '/operations-maintenance', label: 'O&M' },
  // { href: '/sp-ice-tes', label: 'sp.ICE TES' },
  { href: '/vision-2030', label: 'Vision 2030' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const path = usePathname();
  const [closed, setClosed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
    setOpenGroup(null);
  }, [path]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // The onboarding flow is a standalone, distraction-free page (no nav).
  if (path === '/onboarding') return null;

  return (
    <header className={styles.nav} suppressHydrationWarning>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Safe Hands Digital, home">
          {/* Your real logo - drop the files in /public (see notes). */}
          <img src="/logo-light.png" alt="Safe Hands Digital" className={`${styles.logoImg} ${styles.logoLight}`} />
          <img src="/logo-dark.png" alt="Safe Hands Digital" className={`${styles.logoImg} ${styles.logoDark}`} />
        </Link>

        {/* Desktop nav */}
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

        {/* Mobile controls */}
        <div className={styles.mobileActions}>
          <ThemeToggle />
          <button
            type="button"
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`${styles.mobilePanel} ${menuOpen ? styles.panelOpen : ''}`}>
        <nav className={styles.mobileLinks}>
          {LINKS.map((l) =>
            l.children ? (
              <div key={l.label} className={styles.mobileGroup}>
                <button
                  type="button"
                  className={`${styles.mobileLink} ${styles.mobileGroupToggle}`}
                  aria-expanded={openGroup === l.label}
                  onClick={() => setOpenGroup((g) => (g === l.label ? null : l.label))}
                >
                  {l.label}
                  <span className={`${styles.chev} ${openGroup === l.label ? styles.chevUp : ''}`}>▾</span>
                </button>
                <div className={`${styles.mobileSub} ${openGroup === l.label ? styles.mobileSubOpen : ''}`}>
                  <div className={styles.mobileSubInner}>
                    {l.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={`${styles.mobileSubLink} ${path === c.href ? styles.mobileActive : ''}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={`${styles.mobileLink} ${path === l.href ? styles.mobileActive : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            href="/onboarding"
            className={styles.mobileCta}
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
