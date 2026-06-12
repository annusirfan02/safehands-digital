'use client';

import styles from './SocialPlatforms.module.css';

const ic = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };
const Instagram = () => (<svg {...ic}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg>);
const TikTok = () => (<svg {...ic}><path d="M13 4v10.5a3 3 0 1 1-2.5-2.96" /><path d="M13 4a5 5 0 0 0 5 5" /></svg>);
const LinkedIn = () => (<svg {...ic}><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M7 10.5V16M7 7.5v.01M11 16v-3.2a2 2 0 0 1 4 0V16M11 16v-5.5" strokeWidth="1.5" /></svg>);
const YouTube = () => (<svg {...ic}><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="M10.4 9.2l4.6 2.8-4.6 2.8z" fill="currentColor" stroke="none" /></svg>);

const PLATFORMS = [
  { c: '#ff4d9d', Icon: Instagram, name: 'Instagram', desc: 'Reels, Stories, carousels, influencer partnerships & DM funnels' },
  { c: '#2dd4bf', Icon: TikTok, name: 'TikTok', desc: 'Viral short-form, trending sounds, UGC, and creator collabs' },
  { c: '#2d80ff', Icon: LinkedIn, name: 'LinkedIn', desc: 'B2B thought leadership, executive content, and lead generation' },
  { c: '#ff4d4d', Icon: YouTube, name: 'YouTube', desc: 'Long-form strategy, SEO-optimized video, and channel growth' },
];

export default function SocialPlatforms() {
  return (
    <section className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <h2 className={styles.heading}>PLATFORMS WE MANAGE</h2>

        <div className={styles.grid}>
          {PLATFORMS.map((p) => (
            <article key={p.name} className={styles.card} style={{ '--c': p.c }}>
              <span className={styles.topGlow} />
              <span className={styles.icon}><p.Icon /></span>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.desc}>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
