import Link from 'next/link';
import { Icon } from './EngineeringPage';
import styles from './EngineeringPage.module.css';
import ai from './AiAutomation.module.css';

// No photo for this pillar: the hero background is a soft glow + the shared grid.
const HERO_BG =
  'radial-gradient(circle at 75% 35%, rgba(168, 120, 255, 0.28), transparent 45%), ' +
  'radial-gradient(circle at 90% 85%, rgba(200, 243, 29, 0.12), transparent 40%)';

// Illustrative inbox rows for the hero mockup.
const INBOX = [
  { subject: 'Contract renewal: needs your signature today', from: 'Client · Procurement', tag: 'Urgent', c: '#ff5c8a' },
  { subject: 'Invoice #4821 is 15 days overdue', from: 'Finance', tag: 'Finance', c: '#f5c518' },
  { subject: 'Site visit request for next Tuesday', from: 'New enquiry', tag: 'Lead', c: '#c8f31d' },
  { subject: 'Quotation follow-up: chiller replacement', from: 'Existing client', tag: 'Reply', c: '#4fcdee' },
];

const STEPS = ['Connect', 'Read', 'Filter', 'Sort', 'Draft replies', 'You approve'];

const GROUPS = [
  {
    id: '01',
    title: ['Inbox &', 'Communication'],
    items: [
      { icon: 'mail', title: 'Email Triage', text: 'Reads every incoming email, filters out newsletters, spam and noise, and keeps only what needs your attention.' },
      { icon: 'reply', title: 'Smart Draft Replies', text: 'Drafts a ready-to-send reply for each important email in your tone, in Arabic or English, for you to approve.' },
      { icon: 'chat', title: 'WhatsApp & Chat Assistants', text: 'Answers routine customer questions on WhatsApp and website chat 24/7 and hands complex cases to your team.' },
    ],
  },
  {
    id: '02',
    title: ['Documents &', 'Operations'],
    alt: true,
    items: [
      { icon: 'doc', title: 'Documents & Invoices', text: 'Extracts data from invoices, POs and forms, checks it and pushes it straight into your system, no retyping.' },
      { icon: 'chart', title: 'Automatic Reports', text: 'Pulls numbers from your tools and sends a clean daily or weekly report to the people who need it.' },
      { icon: 'link', title: 'CRM & ERP Sync', text: 'Keeps your CRM, ERP and spreadsheets in sync, logs every lead and follows up so nothing slips.' },
    ],
  },
];

const FACTS = [
  { value: '24/7', label: 'Always running' },
  { value: 'AR + EN', label: 'Arabic & English' },
  { value: 'You decide', label: 'Human approval on every reply' },
];

export default function AiAutomationPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} style={{ '--hero-img': HERO_BG }} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={`${styles.container} ${ai.split}`}>
          <div>
            <span className={styles.heroKicker}>AI Assistant &amp; Automation</span>
            <h1 className={styles.heroTitle}>
              100 emails in. <span className={styles.lime}>Only what matters</span> out.
            </h1>
            <div className={styles.heroRow}>
              <p className={styles.heroText}>
                Custom AI systems built around how your team works. They read, filter and sort
                the noise, then draft the replies, so your people only handle the work that counts.
              </p>
            </div>
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.btnPrimary}>
                Automate a workflow <span aria-hidden="true">→</span>
              </Link>
              <a href="#capabilities" className={styles.btnGhost}>What we automate</a>
            </div>
          </div>

          {/* Inbox triage mockup */}
          <div className={ai.inbox} aria-label="Example: AI inbox assistant">
            <div className={ai.bar}>
              <span className={ai.live}>AI assistant · live</span>
              <span>Today</span>
            </div>
            <div className={ai.counts}>
              <div className={ai.count}>
                <span className={ai.countNum}>100</span>
                <span className={ai.countLabel}>Emails received</span>
              </div>
              <span className={ai.arrow} aria-hidden="true">→</span>
              <div className={ai.count}>
                <span className={`${ai.countNum} ${ai.hi}`}>4</span>
                <span className={ai.countLabel}>Need you</span>
              </div>
            </div>
            <div className={ai.list}>
              {INBOX.map((m) => (
                <div key={m.subject} className={ai.row} style={{ '--c': m.c }}>
                  <span className={ai.prio} />
                  <span className={ai.subject}>
                    <span className={ai.subjectLine}>{m.subject}</span>
                    <span className={ai.from}>{m.from}</span>
                  </span>
                  <span className={ai.tag}>{m.tag}</span>
                </div>
              ))}
            </div>
            <div className={ai.draft}>
              <div className={ai.draftHead}>
                <span>Draft reply ready</span>
                <span>Approve →</span>
              </div>
              <p className={ai.draftText}>
                Thank you for the reminder. The signed contract will be with you by 3 PM today.
              </p>
            </div>
            <span className={ai.filtered}>96 low-priority emails filed automatically</span>
          </div>
        </div>
        <span className={styles.heroBadge}>AI Automation · KSA</span>
      </section>

      {/* ── How it works ── */}
      <section className={styles.delivery}>
        <div className={styles.container}>
          <div className={styles.deliveryHead}>
            <div>
              <span className={styles.kicker}>How It Works</span>
              <h2 className={styles.h2}>From inbox chaos<br />to clear priorities</h2>
            </div>
            <p className={styles.deliveryText}>
              We connect to the tools you already use, teach the assistant what matters to your
              business, and keep a human in the loop on every reply it sends.
            </p>
          </div>
          <ol className={styles.steps}>
            {STEPS.map((s, i) => (
              <li key={s} className={styles.step}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.stepLabel}>{s}</span>
                {i < STEPS.length - 1 && <span className={styles.stepArrow} aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Before / After ── */}
      <section className={styles.group}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div>
              <span className={styles.kicker}>A Real Client Request</span>
              <h2 className={styles.h2}>The 100-email<br />problem</h2>
            </div>
            <p className={styles.deliveryText}>
              &ldquo;I get around 100 emails a day. I only want the ones that matter, sorted,
              with the replies ready.&rdquo; That is exactly the kind of system we build.
            </p>
          </div>
          <div className={styles.dynGrid}>
            <article className={`${styles.dynCard} ${styles.dynNight}`}>
              <span className={styles.dynLabel}>Before</span>
              <span className={styles.dynIcon}><Icon name="mail" size={34} /></span>
              <h3 className={styles.dynTitle}>Everything in one inbox</h3>
              <p className={styles.dynText}>
                Hours every day spent opening, reading and deciding. Important emails get buried
                under newsletters, notifications and noise, and replies go out late.
              </p>
            </article>
            <article className={`${styles.dynCard} ${styles.dynDay}`}>
              <span className={styles.dynLabel}>After</span>
              <span className={styles.dynIcon}><Icon name="bolt" size={34} /></span>
              <h3 className={styles.dynTitle}>Only what matters, ready to send</h3>
              <p className={styles.dynText}>
                The assistant filters the noise, sorts what is left by priority and drafts each
                reply. You review, tweak if needed and send in a click.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── What we automate ── */}
      <div id="capabilities">
        {GROUPS.map((g) => (
          <section key={g.id} className={`${styles.group} ${g.alt ? styles.groupAlt : ''}`}>
            <div className={styles.container}>
              <h2 className={styles.groupTitle}>
                <span className={styles.lime}>{g.id} /</span> {g.title[0]}<br />{g.title[1]}
              </h2>
              <div className={styles.cards}>
                {g.items.map((it, i) => (
                  <article key={it.title} className={styles.card}>
                    <div className={styles.cardTop}>
                      <span className={styles.cardNum}>{String(i + 1).padStart(2, '0')}</span>
                      <span className={styles.cardIcon}><Icon name={it.icon} /></span>
                    </div>
                    <h3 className={styles.cardTitle}>{it.title}</h3>
                    <p className={styles.cardText}>{it.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── Facts strip ── */}
      <section className={styles.conditions}>
        <div className={styles.container}>
          <span className={styles.kicker}>Built for real teams</span>
          <div className={styles.condGrid}>
            {FACTS.map((c) => (
              <div key={c.value} className={styles.condCard}>
                <strong className={styles.condValue}>{c.value}</strong>
                <span className={styles.condLabel}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiry CTA ── */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <span className={styles.kicker}>Project Enquiry / KSA</span>
          <h2 className={styles.ctaTitle}>Let&apos;s automate your<br />busiest workflow</h2>
          <div className={styles.ctaRow}>
            <p className={styles.ctaText}>
              Tell us where your team loses the most time. We&apos;ll design an AI system around it.
            </p>
            <Link href="/contact" className={styles.btnPrimary}>
              Talk to our AI team <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
