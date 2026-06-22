'use client';

import styles from './SeoServices.module.css';

const ic = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
const Cloud = () => (<svg {...ic}><path d="M18 10a4 4 0 0 0-7.6-1.5A3.5 3.5 0 1 0 8 16.5h9.5a3.5 3.5 0 0 0 .5-6.5z" /></svg>);
const Code = () => (<svg {...ic}><path d="M8.5 8L4 12l4.5 4M15.5 8L20 12l-4.5 4" /></svg>);
const FileI = () => (<svg {...ic}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M8 13h8M8 17h6" /></svg>);
const Pen = () => (<svg {...ic}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>);
const LinkI = () => (<svg {...ic}><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" /></svg>);
const Pin = () => (<svg {...ic}><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" /><circle cx="12" cy="10" r="2.4" /></svg>);
const Globe = () => (<svg {...ic}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" /></svg>);
const Chart = () => (<svg {...ic}><path d="M3 21h18" /><rect x="5" y="11" width="3" height="7" rx="1" /><rect x="11" y="6" width="3" height="12" rx="1" /><rect x="16.5" y="14" width="3" height="4" rx="1" /></svg>);

const CARDS = [
  {
    c: '#2bb0e0', Icon: Cloud, kicker: 'THE NEW PAGE 1 IS BEING CITED BY AI.', title: 'AI Search Optimization',
    desc: "In 2026, ranking on Google is only part of the equation. ChatGPT, Perplexity, and Google's AI Overviews are answering questions and recommending businesses. We optimize your content to be cited by LLMs, structured content, entity optimization, and llms.txt implementation.",
    features: ['Google SGE / AI Overviews optimization', 'ChatGPT & Perplexity citation strategy', 'Entity optimization & knowledge graph', 'llms.txt implementation', 'Structured content for AI answer extraction'],
  },
  {
    c: '#4a8cf0', Icon: Code, kicker: 'THE FOUNDATION EVERYTHING ELSE SITS ON.', title: 'Technical SEO',
    desc: 'We audit and fix the technical issues that silently kill rankings, slow load times, poor Core Web Vitals, crawl errors, indexation issues, canonical tags, hreflang for multilingual sites, and schema markup / structured data to help Google understand your content.',
    features: ['Site speed & Core Web Vitals (LCP, INP, CLS)', 'Crawlability & indexation fixes', 'Canonical tags & duplicate content', 'Hreflang for multilingual sites', 'Structured data / schema markup'],
  },
  {
    c: '#10b981', Icon: FileI, kicker: 'EVERY PAGE OPTIMIZED TO RANK AND CONVERT.', title: 'On-Page SEO',
    desc: 'On-page signals are the most direct ranking lever you control. We optimize title tags, meta descriptions, heading hierarchy, keyword mapping, internal linking structure, and the actual content on every key page.',
    features: ['Title tags & meta descriptions', 'Heading hierarchy (H1–H3)', 'Keyword mapping per page', 'Internal linking strategy', 'Content optimization for search intent'],
  },
  {
    c: '#a855f7', Icon: Pen, kicker: 'TOPICAL AUTHORITY THAT COMPOUNDS OVER TIME.', title: 'Content & Blog Strategy',
    desc: 'Google rewards sites that demonstrate expertise across entire topics, not just individual keywords. We build pillar + cluster content strategies, publish monthly blog content targeting high-intent keywords, and map every piece to your ranking goals.',
    features: ['Monthly blog publishing (managed for you)', 'Topical authority & keyword clustering', 'Pillar page + cluster model', 'Search-intent aligned content briefs', 'Content calendar & editorial management'],
  },
  {
    c: '#ff8c1e', Icon: LinkI, kicker: "AUTHORITY SIGNALS GOOGLE CAN'T IGNORE.", title: 'Link Building & Backlinks',
    desc: 'Backlinks remain one of the top 3 ranking factors. We run white-hat outreach campaigns, digital PR placements, guest posting on relevant publications, HARO / journalist outreach, and manage anchor text strategy to build authority without risk.',
    features: ['Outreach campaigns to relevant sites', 'Digital PR & media placements', 'Guest post strategy & execution', 'HARO / journalist source outreach', 'Anchor text strategy & diversity'],
  },
  {
    c: '#ff4d9d', Icon: Pin, kicker: 'OWN THE MAP PACK IN YOUR CITY.', title: 'Google My Business & Local SEO',
    desc: 'For businesses serving local markets, the Google Map Pack drives more calls than any other source. We optimize your GMB profile, build local citations across directories (Yelp, BBB, industry directories), and enforce NAP consistency across the web.',
    features: ['GMB profile optimization & management', 'Local citation building (Yelp, BBB, etc.)', 'Industry-specific directory submissions', 'NAP consistency audit & fixes', 'Review strategy & reputation management'],
  },
  {
    c: '#8fce3f', Icon: Globe, kicker: 'MAKE SURE GOOGLE CAN FIND EVERYTHING.', title: 'Sitemaps, Robots & Technical Setup',
    desc: 'Proper technical setup ensures search engines can crawl, understand, and index your site efficiently. We handle XML sitemaps, robots.txt configuration, canonical tag audits, 301 redirect mapping, and broken link discovery and repair.',
    features: ['XML sitemap creation & submission', 'robots.txt configuration', 'Canonical tag audit & implementation', '301 redirect mapping & cleanup', 'Broken link audit & repair'],
  },
  {
    c: '#f5a623', Icon: Chart, kicker: 'WHAT YOU GET EVERY SINGLE MONTH.', title: 'Monthly SEO Deliverables',
    desc: "SEO is a long game, but you should see exactly what's happening every month. Every client gets a full keyword ranking report, traffic analytics report, content published, links built, technical fixes completed, and a strategy call.",
    features: ['Keyword ranking report (all tracked keywords)', 'Traffic & conversion analytics report', 'Content published that month', 'Links built (with DR & relevance data)', 'Technical fixes log + monthly strategy call'],
  },
];

export default function SeoServices() {
  return (
    <section className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.kicker}>FULL SEO SERVICE BREAKDOWN</span>
          <h2 className={styles.heading}>
            <span className={styles.solid}>WHAT WE</span>
            <span className={styles.script}>Do.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {CARDS.map((card) => (
            <article key={card.title} className={styles.card} style={{ '--c': card.c }}>
              <span className={styles.topGlow} />
              <span className={styles.icon}><card.Icon /></span>
              <span className={styles.cardKicker}>{card.kicker}</span>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.desc}>{card.desc}</p>
              <ul className={styles.features}>
                {card.features.map((f) => (
                  <li key={f} className={styles.feature}><span className={styles.check}>✓</span>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
