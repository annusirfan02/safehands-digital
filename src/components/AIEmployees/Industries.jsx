'use client';

import { useState } from 'react';
import styles from './Industries.module.css';

/* ── Icons ──────────────────────────────────────────────────────── */
const ic = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
const Heart = () => (<svg {...ic}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>);
const Rocket = () => (<svg {...ic}><path d="M5 15c-1.2 2-1 4-1 4s2 .2 4-1m-3.5-3.2C5 9 9 5 16 4c-.5 7-4.5 11-10.8 11.8L4 15z" /><circle cx="14.5" cy="9.5" r="1.4" /></svg>);
const Bolt = () => (<svg {...ic}><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></svg>);
const Briefcase = () => (<svg {...ic}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></svg>);
const House = () => (<svg {...ic}><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>);
const Trend = () => (<svg {...ic}><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>);
const Scale = () => (<svg {...ic}><path d="M12 3v18M7 21h10M4 8h16M7 8l-3 6a3 3 0 0 0 6 0L7 8m10 0l-3 6a3 3 0 0 0 6 0l-3-6" /></svg>);
const Gem = () => (<svg {...ic}><path d="M6 3h12l3 6-9 12L3 9z" /><path d="M3 9h18M9 3L6 9l6 12 6-12-3-6" /></svg>);
const Pin = () => (<svg {...ic}><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" /><circle cx="12" cy="10" r="2.4" /></svg>);
const Layers = () => (<svg {...ic}><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5M3 17l9 5 9-5" /></svg>);
const Target = () => (<svg {...ic}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1.2" fill="currentColor" /></svg>);
const FileIcon = () => (<svg {...ic}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M8 13h8M8 17h6" /></svg>);

/* ── AI employees ───────────────────────────────────────────────── */
const EMP = {
  Maya: { color: '#BFFE03', role: 'AI Growth Strategist', Icon: Layers },
  Alex: { color: '#2d80ff', role: 'Outbound Growth',      Icon: Target },
  Zara: { color: '#ff4d9d', role: 'Social Growth Engine', Icon: Trend },
  Nova: { color: '#a855f7', role: 'Client Concierge',     Icon: Bolt },
  Max:  { color: '#ff8c1e', role: 'Content Factory',      Icon: FileIcon },
};
const DOTS = ['#BFFE03', '#2d80ff', '#ff4d9d', '#ff8c1e', '#a855f7'];

/* ── Industries ─────────────────────────────────────────────────── */
const INDUSTRIES = [
  {
    name: 'Nonprofits', Icon: Heart, color: '#ff4d9d', team: ['Nova', 'Alex', 'Max'],
    subtitle: 'Monday morning, before your team logs in:',
    bullets: [
      'Nova responds to 7 overnight donor inquiries, books 3 consultation calls',
      'Alex sources 20 new grant opportunities matching your mission and drafts outreach',
      'Max generates your monthly impact newsletter with live stats from your CRM',
      'Volunteer coordination emails sent to 40 signups, no copy-paste required',
      "Board meeting summary drafted from last week's notes and sent for review",
    ],
  },
  {
    name: 'Startups', Icon: Rocket, color: '#2d80ff', team: ['Alex', 'Max'],
    subtitle: 'Monday morning, before your standup:',
    bullets: [
      'Alex sources 40 qualified leads from LinkedIn matching your exact ICP',
      'Personalized cold emails written for each, referencing their recent news or funding',
      'Follow-up sequences fired for 12 leads who went cold last week',
      'Max publishes 2 SEO blog posts and schedules your full week of social content',
      'Investor pipeline updated, new VC firms researched and outreach drafted',
    ],
  },
  {
    name: 'Agencies', Icon: Bolt, color: '#BFFE03', team: ['Maya', 'Max'],
    subtitle: 'Monday morning, before client calls:',
    bullets: [
      'Maya pulls campaign data from all client accounts, generates performance reports',
      'Client Slack updates posted automatically, no manual reporting',
      'Max drafts 3 new business proposals based on your service menu + prospect research',
      'Prospecting emails sent to 20 new potential clients in your target verticals',
      'All client deliverable deadlines tracked and flagged, nothing slips through',
    ],
  },
  {
    name: 'Consultants', Icon: Briefcase, color: '#2d80ff', team: ['Alex', 'Nova'],
    subtitle: 'Monday morning, before your first meeting:',
    bullets: [
      'Alex researches every company in your pipeline, news, key hires, pain points',
      'Nova follows up with 8 prospects who opened your emails but never replied',
      'Proposal for a new prospect drafted using your template + their company data',
      'Meeting prep brief auto-generated before each call, talking points ready',
      'Post-call summary and next steps emailed to clients automatically',
    ],
  },
  {
    name: 'Real Estate', Icon: House, color: '#ff8c1e', team: ['Nova', 'Alex'],
    subtitle: 'Monday morning, before you open Zillow:',
    bullets: [
      'Nova responds to every new property inquiry within 60 seconds, all weekend',
      'Buyers pre-qualified automatically: budget, timeline, pre-approval status',
      'Alex sources off-market seller leads from LinkedIn and sends personalized outreach',
      'CRM updated after every interaction, no manual data entry',
      'Listing description drafts ready the moment a new property is entered',
    ],
  },
  {
    name: 'Finance', Icon: Trend, color: '#13c08a', team: ['Max', 'Nova'],
    subtitle: 'Monday morning, before market open:',
    bullets: [
      'Max generates weekly market research briefs for all client meetings',
      'Nova handles every new client onboarding inquiry, qualifies and books calls',
      'Monthly portfolio summary emails sent to each client automatically',
      'Compliance document drafts prepared and flagged for your review',
      'Prospect research pulled for every intro call, you walk in prepared',
    ],
  },
  {
    name: 'Law Firms', Icon: Scale, color: '#a855f7', team: ['Nova', 'Max'],
    subtitle: 'Monday morning, before the first consultation:',
    bullets: [
      'Nova handles all new client intake, qualifies cases, collects info, books consults',
      'Max researches case precedents and delivers a summary before every hearing',
      'Client follow-up emails sent on your behalf at every stage of their case',
      'Engagement letters and intake forms drafted the moment a new matter opens',
      'Billing reminders sent automatically, no awkward manual follow-up',
    ],
  },
  {
    name: 'Med Spa', Icon: Gem, color: '#ff4d9d', team: ['Zara', 'Nova'],
    subtitle: 'Monday morning, before doors open:',
    bullets: [
      'Zara posts your week of content: treatment spotlights, client results, behind-the-scenes',
      'Nova responds to all weekend DMs in under 60 seconds, books 8 consultations',
      "Post-treatment review requests sent automatically to last week's clients",
      'Promo campaign pushed to your email list for any slow appointment slots',
      'New followers nurtured with a DM sequence, warm leads before they book',
    ],
  },
  {
    name: 'Local Business', Icon: Pin, color: '#ff8c1e', team: ['Nova', 'Zara'],
    subtitle: 'Monday morning, before you unlock the door:',
    bullets: [
      'Nova answers every customer inquiry overnight, hours, pricing, availability',
      'Appointments booked automatically from your website, Google, and Instagram',
      'Review requests sent to every customer after their visit, Google stars grow',
      'Negative review responses drafted immediately for your one-click approval',
      'Zara keeps your Google Business and social profiles active with fresh content',
    ],
  },
];

export default function Industries() {
  const [active, setActive] = useState(null);
  const ind = active !== null ? INDUSTRIES[active] : null;

  return (
    <section className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <span className={styles.kicker}><i className={styles.kickerDot} /> WHO WE WORK WITH</span>
            <h2 className={styles.heading}>
              <span className={styles.solid}>INDUSTRIES</span>
              <span className={styles.script}>We Serve.</span>
            </h2>
          </div>
          <span className={styles.hintPill}><i className={styles.hintDot} /> Pick your industry → see the exact AI playbook</span>
        </div>

        <div className={styles.grid}>
          {/* ── Left list ── */}
          <ul className={styles.list}>
            {INDUSTRIES.map((it, i) => (
              <li key={it.name}>
                <button
                  type="button"
                  className={`${styles.row} ${active === i ? styles.rowActive : ''}`}
                  style={{ '--c': it.color }}
                  onClick={() => setActive(i)}
                >
                  <span className={styles.rowIcon}><it.Icon /></span>
                  <span className={styles.rowText}>
                    <span className={styles.rowName}>{it.name}</span>
                    <span className={styles.rowTeam}>{it.team.map((t) => t.toUpperCase()).join('  ')}</span>
                  </span>
                  <span className={styles.rowArrow}>→</span>
                </button>
              </li>
            ))}
          </ul>

          {/* ── Right panel ── */}
          <div className={styles.panel}>
            {!ind ? (
              <div className={styles.empty}>
                <div className={styles.dots}>
                  {DOTS.map((c, i) => <span key={i} style={{ background: c, boxShadow: `0 0 8px ${c}` }} />)}
                </div>
                <span className={styles.emptyTag}>SELECT YOUR INDUSTRY</span>
                <p className={styles.emptyText}>
                  Click any industry on the left to see exactly which AI employees we
                  deploy and what they automate for you.
                </p>
                <span className={styles.emptyHint}>← PICK ONE</span>
              </div>
            ) : (
              <div className={styles.playbook} style={{ '--c': ind.color }}>
                <span className={styles.pbKicker}>{ind.name.toUpperCase()} · AI PLAYBOOK</span>
                <h3 className={styles.pbTitle}>{ind.subtitle}</h3>
                <div className={styles.pbDivider} />

                <div className={styles.pbGrid}>
                  <div className={styles.team}>
                    <span className={styles.colLabel}>YOUR AI TEAM</span>
                    {ind.team.map((t) => {
                      const e = EMP[t];
                      return (
                        <div key={t} className={styles.teamCard} style={{ '--e': e.color }}>
                          <span className={styles.teamIcon}><e.Icon /></span>
                          <div>
                            <div className={styles.teamName}>{t}</div>
                            <div className={styles.teamRole}>{e.role}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className={styles.auto}>
                    <span className={styles.colLabel}>WHAT RUNS ON AUTOPILOT</span>
                    <ul className={styles.autoList}>
                      {ind.bullets.map((b, i) => (
                        <li key={i} className={styles.autoItem}>
                          <span className={styles.check}>✓</span>{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.pbActions}>
                  <a href="#contact" className={styles.pbPrimary}>BUILD THIS FOR MY {ind.name.toUpperCase()} →</a>
                  <a href="#find" className={styles.pbGhost}>TAKE THE QUIZ</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
