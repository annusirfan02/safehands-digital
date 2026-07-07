'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './ScrollToTop.module.css';

// Floating "back to top" button. Appears once the user scrolls past ~500px.
export default function ScrollToTop() {
  const path = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Onboarding is a standalone, distraction-free flow (no nav) — keep it clean.
  if (path === '/onboarding') return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      title="Back to top"
      className={`${styles.btn} ${visible ? styles.show : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    </button>
  );
}
