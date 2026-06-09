'use client';

import { useEffect, useState } from 'react';

/**
 * Returns the active theme ('dark' | 'light') and re-renders whenever the
 * `data-theme` attribute on <html> changes (i.e. when the toggle is used).
 */
export function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const el = document.documentElement;
    const read = () => setTheme(el.getAttribute('data-theme') || 'dark');
    read();

    const observer = new MutationObserver(read);
    observer.observe(el, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return theme;
}
