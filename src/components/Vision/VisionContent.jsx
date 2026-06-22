'use client';

import styles from './VisionContent.module.css';

const PILLARS = [
  {
    name: 'A Vibrant Society',
    color: '#ff5c8a',
    desc: 'Strong roots, fulfilling lives and a thriving culture for citizens and residents across the Kingdom.',
  },
  {
    name: 'A Thriving Economy',
    color: '#f5b21a',
    desc: 'A diversified, knowledge-based economy with opportunity for all and reduced reliance on oil.',
  },
  {
    name: 'An Ambitious Nation',
    color: '#1e9bff',
    desc: 'An effective, transparent and accountable government enabled by world-class digital services.',
  },
];

const VISION_STATS = [
  { v: 'Top 3', l: 'Global digital-government maturity target by 2030' },
  { v: '98%', l: 'Government services already digitized' },
  { v: 'SAR 11.4B', l: 'Projected GDP impact from digital government' },
  { v: '26,000+', l: 'New digital jobs targeted' },
];

const SECTIONS = [
  {
    anchor: 'digital-transformation',
    num: '01',
    color: '#7c5cff',
    kicker: 'DIGITAL TRANSFORMATION',
    title: 'Our Role in the National Transformation Program',
    paras: [
      'Digital transformation sits at the heart of Vision 2030. Launched in 2016 as its first Vision Realization Program, the National Transformation Program (NTP) is accelerating the Kingdom’s shift to a digital economy, expanding digital infrastructure, adopting Fourth Industrial Revolution (4IR) technologies, digitizing government and private-sector services, and developing local digital talent.',
      'This is exactly where SafeHands operates. We help enterprises and public-sector organizations modernize their core, implementing ERP platforms (SAP, ETM.Next, Qlik, Jaggaer, Salesforce), building custom software, and deploying AI such as SAP’s Joule and Jaggaer’s JAI. By streamlining Finance, Procurement, HR, Sales and Analytics, we turn the NTP’s goals of operational efficiency, innovation and better service delivery into working systems on the ground.',
    ],
    chipsLabel: 'HOW WE ENABLE THE NTP',
    chips: ['ERP Modernization', '4IR & AI Adoption', 'Process Automation', 'Data & Analytics', 'Cloud & On-Premise', 'Secure Software'],
  },
  {
    anchor: 'localization',
    num: '02',
    color: '#10b981',
    kicker: 'LOCALIZATION OF WORK',
    title: 'A Local Saudi Company, Building Local Capability',
    paras: [
      'Vision 2030 is equally a story of localization. Through Saudization and local-content programs, in the spirit of initiatives like IKTVA, the Kingdom is committed to creating opportunities for Saudi talent and keeping value inside the Kingdom.',
      'SafeHands is a local Saudi company. Our delivery teams, developers, designers, architects and project managers, are built here, creating high-skill technology jobs and developing local digital talent. By delivering advanced ERP, software and AI capability in-Kingdom rather than importing it, we strengthen local content, reduce dependence on foreign vendors, and help organizations build sovereign, future-ready capabilities.',
    ],
    chipsLabel: 'OUR LOCALIZATION COMMITMENT',
    chips: ['Local Saudi Company', 'Saudi Talent & Jobs', 'Digital Skills Development', 'In-Kingdom Delivery', 'Local Content', 'Knowledge Transfer'],
  },
];

export default function VisionContent() {
  return (
    <div className={styles.wrap}>
      {/* ── The three pillars ── */}
      <section className={styles.pillarsSection}>
        <div className={styles.inner}>
          <span className={styles.eyebrow}>THE VISION</span>
          <h2 className={styles.lead}>
            Three pillars guide Saudi Arabia&rsquo;s transformation, and SafeHands
            contributes to each through technology, talent and local capability.
          </h2>
          <div className={styles.pillars}>
            {PILLARS.map((p, i) => (
              <div key={p.name} className={styles.pillar} style={{ '--c': p.color }}>
                <span className={styles.pillarNum}>{`0${i + 1}`}</span>
                <h3 className={styles.pillarName}>{p.name}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alternating content sections ── */}
      {SECTIONS.map((s, i) => (
        <section
          key={s.anchor}
          id={s.anchor}
          className={`${styles.section} ${i % 2 === 1 ? styles.reverse : ''}`}
          style={{ '--c': s.color }}
        >
          <div className={styles.sectionInner}>
            <div className={styles.copy}>
              <div className={styles.head}>
                <span className={styles.num}>{s.num}</span>
                <span className={styles.kicker}>{s.kicker}</span>
              </div>
              <h2 className={styles.title}>{s.title}</h2>
              {s.paras.map((p, idx) => (
                <p key={idx} className={styles.para}>{p}</p>
              ))}
            </div>

            <aside className={styles.panel}>
              <span className={styles.panelLabel}>{s.chipsLabel}</span>
              <div className={styles.chips}>
                {s.chips.map((c) => (
                  <span key={c} className={styles.chip}>{c}</span>
                ))}
              </div>
            </aside>
          </div>

          {/* Vision targets band under the digital-transformation section */}
          {s.anchor === 'digital-transformation' && (
            <div className={styles.statsWrap}>
              <div className={styles.statsInner}>
                <span className={styles.statsLabel}>VISION 2030 · DIGITAL GOVERNMENT TARGETS</span>
                <div className={styles.stats}>
                  {VISION_STATS.map((st) => (
                    <div key={st.l} className={styles.stat}>
                      <div className={styles.statValue}>{st.v}</div>
                      <div className={styles.statLabel}>{st.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
      ))}

      {/* ── Closing commitment ── */}
      <section className={styles.closing} style={{ '--c': '#1e9bff' }}>
        <div className={styles.inner}>
          <p className={styles.closingText}>
            From digital transformation to the localization of work, SafeHands is a
            committed partner in realizing <strong>Vision 2030</strong>, building the
            technology, talent and capability the Kingdom needs to thrive.
          </p>
        </div>
      </section>
    </div>
  );
}
