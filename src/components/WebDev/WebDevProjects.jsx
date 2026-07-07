'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './WebDevProjects.module.css';

gsap.registerPlugin(ScrollTrigger);

// ─── Your projects ───────────────────────────────────────────────────────────
// Drop screenshots in /public/projects/ and set `image` to that path
// (e.g. '/projects/my-site.png'). Leave `image` empty to show a gradient
// placeholder. `href` is optional — the card links out if you add one.
const PROJECTS = [
  {
    category: 'HEALTHCARE',
    title: 'Health United Polyclinic',
    tags: ['NEXT.JS', 'BOOKING', 'RESPONSIVE'],
    accent: '#3b5bd6',
    // Drop this file in /public/projects/ to replace the placeholder.
    image: '/projects/health-united-polyclinic.jpg',
    href: 'https://health-united-polyclinic.vercel.app/',
  },
  {
    category: 'MEDICAL CENTER',
    title: 'Al-Shifa Medical Center',
    tags: ['NEXT.JS', 'ANIMATIONS', 'SEO'],
    accent: '#c9a24b',
    // Drop this file in /public/projects/ to replace the placeholder.
    image: '/projects/al-shifa-medical-center.jpg',
    href: 'https://al-shifa-medical-center.vercel.app/',
  },
  {
    category: 'DENTAL LAB',
    title: 'Effects Lab Dental',
    tags: ['NEXT.JS', 'ANIMATIONS', 'BRANDING'],
    accent: '#e11d2a',
    // Drop this file in /public/projects/ to replace the placeholder.
    image: '/projects/effects-lab-dental.jpg',
    href: 'https://effects-dental-lab.vercel.app/',
  },
  {
    category: 'LANDSCAPING',
    title: 'Green Oasis',
    tags: ['NEXT.JS', 'ARABIC RTL', 'SEO'],
    accent: '#e0a028',
    image: '/projects/green-oasis.png',
    href: 'https://greenoasis-landscaping.vercel.app/',
  },
  {
    category: 'HVAC SERVICES',
    title: 'Golden Elite HVAC',
    tags: ['NEXT.JS', 'ARABIC RTL', 'RESPONSIVE'],
    accent: '#d4a53a',
    image: '/projects/golden-elite-hvac.png',
    href: 'https://goldenelite-hvac.vercel.app/',
  },
  {
    category: 'BEAUTY CLINIC',
    title: 'Jamal Clinic',
    tags: ['NEXT.JS', 'ARABIC RTL', 'BOOKING'],
    accent: '#c9a24b',
    image: '/projects/jamal-clinic.png',
    href: 'https://jamal-clinic.vercel.app/',
  },
  {
    category: 'AESTHETIC CLINIC',
    title: 'Nadali Leadilogy',
    tags: ['NEXT.JS', 'ARABIC RTL', 'SEO'],
    accent: '#b08d57',
    image: '/projects/nadali-leadilogy.png',
    href: 'https://nadali-leadilogy.vercel.app/',
  },
  {
    category: 'HEALTHCARE',
    title: "Dr Mike's",
    tags: ['LANDING PAGE', 'FUNNEL', 'BOOKING'],
    accent: '#2bb0e0',
    image: '/projects/dr-mike.jpg',
    href: 'https://app.leadcare.dk/v2/preview/cKXoYcrDE9iM9z4N00vF',
  },
  {
    category: 'BUSINESS COACHING',
    title: 'E2Winc',
    tags: ['LANDING PAGE', 'FUNNEL', 'LEAD GEN'],
    accent: '#6378ff',
    image: '/projects/e2winc.jpg',
    href: 'https://app.leadcare.dk/v2/preview/D0pKVqAlATkRPWgVYIRy',
  },
  {
    category: 'TRAVEL & RETREATS',
    title: 'Adventure Retreats',
    tags: ['LANDING PAGE', 'FUNNEL', 'BOOKING'],
    accent: '#10b981',
    image: '/projects/adventure-retreats.jpg',
    href: 'https://app.gohighlevel.com/v2/preview/q5oatVjOd9oTxrWGcQM1?notrack=true',
  },
  {
    category: 'FURNITURE',
    title: "Lux Sofa's",
    tags: ['NEXT.JS', 'E-COMMERCE', 'UI DESIGN'],
    accent: '#a855f7',
    image: '/projects/sofas.jpg',
    href: 'https://lux-sofa.vercel.app/',
  },
  {
    category: 'E-COMMERCE',
    title: 'Time Shop',
    tags: ['E-COMMERCE', 'RESPONSIVE', 'SEO'],
    accent: '#c9a24b',
    image: '/projects/time-shop.jpg',
    href: 'https://timeshop.pk/',
  },
  {
    category: 'WEALTH MANAGEMENT',
    title: 'Portfolio Wealth',
    tags: ['NEXT.JS', 'FINANCE', 'SEO'],
    accent: '#3b5bd6',
    image: '/projects/portfolio-wealth.jpg',
    href: 'https://www.portfoliowealth.com/',
  },
  {
    category: 'CREATIVE STUDIO',
    title: 'The Partt Project',
    tags: ['LANDING PAGE', 'FUNNEL', 'BRANDING'],
    accent: '#ff5078',
    image: '/projects/the-partt-project.jpg',
    href: 'https://app.gohighlevel.com/v2/preview/VlyQJ9CSlfsyozal1RWn',
  },
  {
    category: 'PERSONAL BRAND',
    title: 'Bluetalks',
    tags: ['LANDING PAGE', 'FUNNEL', 'BRANDING'],
    accent: '#00c8c8',
    image: '/projects/blue-talks.png',
    href: 'https://app.gohighlevel.com/v2/preview/D9KUNmLsSRGYGhUrUGRI',
  },
  {
    category: 'NON-PROFIT',
    title: 'Nurture The Children Future',
    tags: ['LANDING PAGE', 'NON-PROFIT', 'DONATIONS'],
    accent: '#58c27d',
    image: '/projects/nurture-the-children-future-images.jpg',
    href: 'https://app.gohighlevel.com/v2/preview/23lXfA9iG9UzbM18jGfk',
  },
  {
    category: 'WELLNESS',
    title: 'The Light Therapy Lounge',
    tags: ['LANDING PAGE', 'BOOKING', 'WELLNESS'],
    accent: '#ff8c1e',
    image: '/projects/the-light-therapy-lounge.jpg',
    href: 'https://sites.leadconnectorhq.com/preview/meQ1oYV6pnRvTrfOrVhB',
  },
  {
    category: 'COACHING',
    title: 'Speaker Mastery',
    tags: ['LANDING PAGE', 'FUNNEL', 'COURSE'],
    accent: '#BFFE03',
    image: '/projects/speaker-mastery.jpg',
    href: 'https://link.corequantumleads.com/preview/D1UMEgMTgdgmCqoUF0Il?notrack=true',
  },
];

// Renders the project image, falling back to a branded gradient placeholder
// when there's no image or the file is missing (404).
function ProjectThumb({ project }) {
  const [failed, setFailed] = useState(false);
  const showImage = project.image && !failed;

  return (
    <div className={styles.thumb}>
      {showImage ? (
        <img
          src={project.image}
          alt={`${project.title} — ${project.category.toLowerCase()} website by Safe Hands Digital`}
          className={styles.thumbImg}
          loading="lazy"
          decoding="async"
          width="640"
          height="440"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className={styles.thumbPlaceholder}>
          <span className={styles.placeholderText}>{project.title}</span>
        </div>
      )}

      {project.href && (
        <div className={styles.overlay}>
          <span className={styles.visitBtn}>
            VISIT SITE
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
}

export default function WebDevProjects() {
  const rootRef = useRef(null);

  useGSAP(() => {
    const cards = rootRef.current.querySelectorAll('[data-card]');
    // Reveal once and clear the inline transform afterwards so cards settle
    // perfectly aligned (no lingering y-offset, no replay-on-scroll jumping).
    gsap.from(cards, {
      opacity: 0, y: 40, duration: 0.6, ease: 'power3.out', stagger: 0.1,
      clearProps: 'transform',
      scrollTrigger: { trigger: rootRef.current, start: 'top 80%', once: true },
    });
  }, { scope: rootRef });

  return (
    <section ref={rootRef} className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.kicker}>OUR WORK</span>
          <h2 className={styles.heading}>PROJECTS WE&rsquo;VE SHIPPED<span className={styles.headDot}>.</span></h2>
          <p className={styles.sub}>
            A look at some of the websites we&rsquo;ve designed and built for brands around the world.
          </p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((p) => {
            const Wrapper = p.href ? 'a' : 'div';
            const linkProps = p.href
              ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' }
              : {};
            return (
              <Wrapper
                key={p.title}
                data-card
                className={styles.card}
                style={{ '--accent': p.accent }}
                {...linkProps}
              >
                <ProjectThumb project={p} />

                <div className={styles.body}>
                  <span className={styles.category}>{p.category}</span>
                  <h3 className={styles.title}>{p.title}</h3>
                  <div className={styles.tags}>
                    {p.tags.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
