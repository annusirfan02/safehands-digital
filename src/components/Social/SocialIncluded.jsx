'use client';

import styles from './SocialIncluded.module.css';

const ITEMS = [
  { c: '#8fce3f', title: 'Content Strategy & Calendar', desc: 'Monthly plans aligned with your brand voice and goals' },
  { c: '#ff4d9d', title: 'Video Production & Editing', desc: 'Professional reels and TikToks built to convert' },
  { c: '#a855f7', title: 'Influencer Collaboration', desc: 'Vetted creators, campaign management, and reporting' },
  { c: '#2dd4bf', title: 'UGC Creation', desc: 'Authentic user-generated content for ads and organic' },
  { c: '#ff8c1e', title: 'Community Management', desc: 'Active engagement, comments, DMs, and community building' },
  { c: '#10b981', title: 'Trend Research', desc: 'Weekly trend analysis to keep your content ahead' },
  { c: '#f5b21a', title: 'Copywriting & Hooks', desc: 'Platform-native captions and first 2-second hooks' },
  { c: '#ff4d4d', title: 'Analytics & Reporting', desc: 'Monthly performance report with actionable insights' },
];

export default function SocialIncluded() {
  return (
    <section className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <h2 className={styles.heading}>WHAT&rsquo;S INCLUDED</h2>

        <div className={styles.grid}>
          {ITEMS.map((it) => (
            <article key={it.title} className={styles.card} style={{ '--c': it.c }}>
              <svg className={styles.curveTop} viewBox="0 0 100 2" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 0 H100 V0.5 Q50 3.5 0 0.5 Z" />
              </svg>
              <span className={styles.check}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-11" /></svg>
              </span>
              <h3 className={styles.title}>{it.title}</h3>
              <p className={styles.desc}>{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
