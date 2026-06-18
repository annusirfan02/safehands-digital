'use client';

import styles from './ErpSections.module.css';

const SECTIONS = [
  {
    num: '01',
    anchor: 'erp-services',
    kicker: 'ERP SERVICES',
    title: 'ERP Services',
    color: '#EE4646',
    paras: [
      'As one of the emerging ERP System Integrators in the region, SafeHands has empowered businesses with transformative solutions. We have delivered bespoke solutions to our clients across Saudi Arabia & APAC.',
      'Our ERP expertise spans the complete lifecycle of solutions, offering licensing, implementation, support, and upgrade services for both cloud and on-premise platforms. We specialize in leading ERP technologies, migrations and implementations — enabling businesses to streamline operations and unlock their full potential.',
    ],
    chipsLabel: 'PLATFORMS WE SPECIALIZE IN',
    chips: ['SAP', 'ETM.Next', 'Qlik', 'Jaggaer', 'Salesforce'],
  },
  {
    num: '02',
    anchor: 'software-development',
    kicker: 'SOFTWARE DEVELOPMENT',
    title: 'Software Development',
    color: '#7c5cff',
    paras: [
      'SafeHands brings together a multidisciplinary software development team — developers, designers, architects, and project managers — who work as one unit to turn complex business challenges into reliable, real-world products. Every solution is engineered to be innovative, scalable, and secure, and tailored to the unique needs of each client.',
      'From customer-facing web platforms and high-performance mobile apps to embedded IoT devices and deep enterprise integrations, our engineers cover the full stack — helping businesses ship faster, reduce technical risk, and build software that keeps delivering value as they scale.',
    ],
    chipsLabel: 'DEVELOPMENT COMPETENCIES',
    chips: [
      'PHP', '.Net', 'Laravel', 'Python', 'Ruby on Rails',
      'iOS', 'Android', 'C++', 'Java', 'C#',
      'Arduino', 'ESP 32', 'Oracle', 'SAP ABAP/Fiori',
    ],
  },
  {
    num: '03',
    anchor: 'outsourcing',
    kicker: 'OUTSOURCING',
    title: 'Outsourcing',
    color: '#ff8c1e',
    paras: [
      'Achieve operational excellence by concentrating on core competencies while entrusting specialized technical tasks to reliable partners. SafeHands offers comprehensive and efficient outsourcing solutions that handle critical domains such as IT, digital operations, data entry and processing — empowering businesses to optimize resource allocation for strategic objectives.',
      'Our outsourcing portfolio includes ERP maintenance and management, social media marketing, community management, HRM, and finance. Our outsourcing services ensure that your organization’s delegated operations run seamlessly while allowing you to focus on strategic growth.',
    ],
    note: 'Partner with SafeHands for streamlined outsourcing that drives efficiency and delivers measurable results.',
    chipsLabel: 'OUTSOURCING PORTFOLIO',
    chips: [
      'ERP Maintenance', 'Social Media Marketing', 'Community Management',
      'HRM', 'Finance', 'IT Operations', 'Data Entry & Processing',
    ],
  },
];

export default function ErpSections() {
  return (
    <div className={styles.wrap}>
      {SECTIONS.map((s, i) => (
        <section
          key={s.num}
          id={s.anchor}
          className={`${styles.section} ${i % 2 === 1 ? styles.reverse : ''}`}
          style={{ '--c': s.color }}
        >
          <div className={styles.inner}>
            <div className={styles.copy}>
              <div className={styles.head}>
                <span className={styles.num}>{s.num}</span>
                <span className={styles.kicker}>{s.kicker}</span>
              </div>
              <h2 className={styles.title}>{s.title}</h2>
              {s.paras.map((p, idx) => (
                <p key={idx} className={styles.para}>{p}</p>
              ))}
              {s.note && <p className={styles.note}>{s.note}</p>}
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
        </section>
      ))}
    </div>
  );
}
