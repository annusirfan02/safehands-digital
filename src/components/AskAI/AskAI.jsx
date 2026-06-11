'use client';

import { useEffect, useRef, useState } from 'react';
import { searchSite } from './searchSite';
import SearchResults from './SearchResults';
import LeadForm from './LeadForm';
import styles from './AskAI.module.css';

const THINK_MS = 650; // simulated "AI is thinking" delay

export default function AskAI() {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState('');   // last query we actually answered
  const [status, setStatus] = useState('idle');      // idle | thinking | answered
  const [results, setResults] = useState([]);
  const timerRef = useRef(null);

  // Debounced "ask": whenever the query settles, run the search.
  useEffect(() => {
    clearTimeout(timerRef.current);

    const q = query.trim();
    if (q.length < 2) {
      setStatus('idle');
      setResults([]);
      return;
    }

    setStatus('thinking');
    timerRef.current = setTimeout(() => {
      setResults(searchSite(q));
      setSubmitted(q);
      setStatus('answered');
    }, THINK_MS);

    return () => clearTimeout(timerRef.current);
  }, [query]);

  const showPanel = status === 'thinking' || status === 'answered';

  return (
    <section id="ask" className={styles.section} suppressHydrationWarning>
      <div className={styles.heading}>
        <span className={styles.badge}>
          <i className={styles.badgeDot} />
          ASK AI
        </span>
        <h2 className={styles.title}>Ask About Safehands</h2>
        <p className={styles.sub}>
          Search across everything Safe Hands Digital does — services, technologies and results.
        </p>
      </div>

      {/* Rotating-gradient search bar */}
      <div className={styles.barOuter}>
        <div className={styles.bar}>
          <span className={styles.searchIcon} aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </span>

          <input
            className={styles.input}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything about safehandsdigital."
            aria-label="Ask anything about Safe Hands Digital"
          />

          {status === 'thinking' && <span className={styles.spinner} aria-hidden="true" />}
        </div>
      </div>

      {/* Answer panel */}
      {showPanel && (
        <div className={styles.panel}>
          {status === 'thinking' && (
            <div className={styles.thinking}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.thinkingText}>Searching the site…</span>
            </div>
          )}

          {status === 'answered' &&
            (results.length > 0 ? (
              <SearchResults results={results} query={submitted} />
            ) : (
              <LeadForm query={submitted} />
            ))}
        </div>
      )}
    </section>
  );
}
