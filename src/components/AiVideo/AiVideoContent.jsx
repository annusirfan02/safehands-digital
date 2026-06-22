'use client';

import styles from './AiVideoContent.module.css';

const OFFERINGS = [
  {
    color: '#ff4d9d',
    title: 'Corporate Intro & Brand Films',
    desc: 'Cinematic intros that present your company, story and values in a polished, professional film.',
  },
  {
    color: '#7c5cff',
    title: 'Presentation & Explainer Videos',
    desc: 'Turn decks, services and ideas into clear, engaging videos that hold attention from start to finish.',
  },
  {
    color: '#1e9bff',
    title: 'AI Presenters & Spokespeople',
    desc: 'Lifelike on-screen presenters that deliver your message without a film crew, studio or shoot day.',
  },
  {
    color: '#f5b21a',
    title: 'Product & Character Videos',
    desc: 'Give your product or mascot a voice and personality in short, scroll-stopping videos people remember.',
  },
  {
    color: '#10b981',
    title: 'Social & Ad Creatives',
    desc: 'Short-form videos built for feeds and campaigns, produced quickly and at scale for every platform.',
  },
  {
    color: '#ff8c1e',
    title: 'Multilingual Voiceovers',
    desc: 'Natural Arabic and English narration, so a single idea reaches every audience you care about.',
  },
];

const SAMPLES = [
  { src: '/videos/sample-1.mp4', label: 'Corporate Intro', color: '#ff4d9d' },
  { src: '/videos/sample-2.mp4', label: 'AI Presenter', color: '#7c5cff' },
  { src: '/videos/sample-3.mp4', label: 'Product Video', color: '#1e9bff' },
];

const STEPS = [
  { num: '01', title: 'Concept & Script', desc: 'We shape your message into a tight script and a clear storyboard.' },
  { num: '02', title: 'Voice & Visuals', desc: 'We generate the presenter, scenes, motion and narration to match your brief.' },
  { num: '03', title: 'Brand Polish', desc: 'We edit and add your branding, captions and music for a finished, professional look.' },
  { num: '04', title: 'Delivery & Revisions', desc: 'You receive ready-to-publish files, with revisions until every detail is right.' },
];

const BENEFITS = [
  { label: 'Faster turnaround', color: '#1e9bff' },
  { label: 'Lower production cost', color: '#ff4d9d' },
  { label: 'Arabic & English', color: '#10b981' },
  { label: 'Easy to update', color: '#f5b21a' },
  { label: 'Scales to many videos', color: '#7c5cff' },
  { label: 'On-brand & consistent', color: '#ff8c1e' },
];

export default function AiVideoContent() {
  return (
    <div className={styles.wrap}>
      {/* ── What we create ── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <span className={styles.eyebrow}>WHAT WE CREATE</span>
          <h2 className={styles.lead}>
            Every kind of video your brand needs, produced with AI and finished
            with a human eye for detail.
          </h2>
          <div className={styles.grid}>
            {OFFERINGS.map((o) => (
              <div key={o.title} className={styles.card} style={{ '--c': o.color }}>
                <span className={styles.cardBar} />
                <h3 className={styles.cardTitle}>{o.title}</h3>
                <p className={styles.cardDesc}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sample work ── */}
      <section className={`${styles.section} ${styles.samplesSection}`} style={{ '--c': '#ff4d9d' }}>
        <div className={styles.inner}>
          <span className={styles.eyebrow}>SAMPLE WORK</span>
          <h2 className={styles.lead}>A few examples of what we can produce for your brand.</h2>
          <div className={styles.samples}>
            {SAMPLES.map((v) => (
              <figure key={v.src} className={styles.sample} style={{ '--c': v.color }}>
                <div className={styles.videoWrap}>
                  <video
                    className={styles.video}
                    controls
                    preload="metadata"
                    playsInline
                    poster={v.poster}
                  >
                    <source src={v.src} type="video/mp4" />
                  </video>
                </div>
                <figcaption className={styles.sampleLabel}>{v.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className={`${styles.section} ${styles.process}`} style={{ '--c': '#7c5cff' }}>
        <div className={styles.inner}>
          <span className={styles.eyebrow}>HOW IT WORKS</span>
          <h2 className={styles.lead}>From idea to a finished video in four simple steps.</h2>
          <div className={styles.steps}>
            {STEPS.map((s) => (
              <div key={s.num} className={styles.step}>
                <span className={styles.stepNum}>{s.num}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why AI video ── */}
      <section className={`${styles.section} ${styles.benefitsSection}`} style={{ '--c': '#1e9bff' }}>
        <div className={styles.inner}>
          <span className={styles.eyebrow}>WHY AI VIDEO</span>
          <h2 className={styles.lead}>
            The quality of a full production team, without the time, cost or
            scheduling that usually comes with it.
          </h2>
          <div className={styles.chips}>
            {BENEFITS.map((b, i) => (
              <span
                key={b.label}
                className={styles.chip}
                style={{ '--c': b.color, animationDelay: `${i * 1}s` }}
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className={styles.closing} style={{ '--c': '#ff4d9d' }}>
        <div className={styles.inner}>
          <p className={styles.closingText}>
            Have a message to tell? We will turn it into a video your audience
            actually watches. <strong>Let&rsquo;s create something.</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
