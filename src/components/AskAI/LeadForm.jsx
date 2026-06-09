'use client';

import { useState } from 'react';
import styles from './LeadForm.module.css';

/**
 * Shown when the AI search finds nothing on the site — invites the visitor to
 * tell us what they need so we can discuss the opportunity.
 */
export default function LeadForm({ query }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: query || '' });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up yet — acknowledge locally. Swap for an API POST later.
    setSent(true);
  };

  if (sent) {
    return (
      <div className={styles.done}>
        <span className={styles.check}>✓</span>
        <p>Thanks — we’ve got it. A specialist will reach out about this opportunity shortly.</p>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <p className={styles.note}>
        We couldn’t find that on our site yet — but it might be exactly what we should build for you.
        <strong> Fill this out and we’ll discuss the opportunity.</strong>
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <input
            className={styles.input}
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={update('name')}
            required
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={update('email')}
            required
          />
        </div>
        <textarea
          className={styles.textarea}
          rows={3}
          placeholder="What are you looking for?"
          value={form.message}
          onChange={update('message')}
          required
        />
        <button type="submit" className={styles.submit}>
          Discuss the opportunity →
        </button>
      </form>
    </div>
  );
}
