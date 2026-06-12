'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Starfield from '@/components/HeroHeader/Starfield';
import styles from './OnboardingFlow.module.css';

const INDUSTRIES = ['E-Commerce', 'Food & Beverage', 'Real Estate', 'Beauty & Wellness', 'Tech / SaaS', 'Healthcare', 'Finance', 'Other'];
const CHALLENGES = ['Not enough traffic', 'Low conversions', 'Weak social media', 'Burning ad budget', 'No clear strategy', 'Slow website', 'No time to market', 'Poor ROI', 'Something else ✦'];
const REVENUE = ['$10K/mo', '$50K/mo', '$100K/mo', '$500K/mo', '$1M+/mo'];
const TIMELINES = ['3 months', '6 months', '12 months', '2+ years'];

/* ── Rocket that builds up across the steps (animated fire) ── */
function Rocket({ step, flying }) {
  return (
    <div className={`${styles.rocketWrap} ${flying ? styles.flying : ''}`} aria-hidden="true">
      <svg className={styles.rocket} viewBox="0 0 200 400" fill="none">
        <defs>
          <linearGradient id="ob-metal" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7d8794" />
            <stop offset="45%" stopColor="#eef1f5" />
            <stop offset="100%" stopColor="#9aa6b4" />
          </linearGradient>
          <radialGradient id="ob-win" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#9fd4ff" />
            <stop offset="60%" stopColor="#2b80d8" />
            <stop offset="100%" stopColor="#123a66" />
          </radialGradient>
        </defs>

        {/* ── TAIL (always — step 1+) ── */}
        <path d="M66 250 L40 320 L66 296 Z" fill="#7d8794" />
        <path d="M134 250 L160 320 L134 296 Z" fill="#7d8794" />
        <path d="M74 288 L62 326 H138 L126 288 Z" fill="#5a6472" />
        <rect x="62" y="322" width="76" height="6" rx="3" fill="#3c434d" />

        {/* ── BODY (step 2+) ── */}
        {step >= 2 && (
          <g className={styles.partBody}>
            <rect x="66" y="138" width="68" height="150" rx="10" fill="url(#ob-metal)" />
            <rect x="96" y="138" width="8" height="150" fill="rgba(140,255,80,0.35)" />
            <circle cx="100" cy="186" r="22" fill="#0b1320" />
            <circle cx="100" cy="186" r="17" fill="url(#ob-win)" />
            <circle cx="93" cy="179" r="5" fill="rgba(255,255,255,0.6)" />
            <text x="100" y="252" textAnchor="middle" fill="#5a6472" fontSize="11" fontFamily="'Space Mono', monospace" letterSpacing="2">UPD-01</text>
          </g>
        )}

        {/* ── HEAD (step 3+) ── */}
        {step >= 3 && (
          <g className={styles.partHead}>
            <line x1="100" y1="44" x2="84" y2="18" stroke="#9aa6b4" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="83" cy="15" r="4" fill="#BFFE03" />
            <line x1="100" y1="44" x2="116" y2="18" stroke="#9aa6b4" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="117" cy="15" r="4" fill="#BFFE03" />
            <path d="M100 36 C124 86 134 120 134 140 H66 C66 120 76 86 100 36 Z" fill="url(#ob-metal)" />
            <path d="M100 36 C108 56 112 80 113 100 L100 100 Z" fill="rgba(140,255,80,0.5)" />
          </g>
        )}

        {/* ── FIRE (always) ── */}
        <g className={styles.fire}>
          <ellipse cx="100" cy="350" rx="22" ry="40" fill="#ff8c1e" opacity="0.85" />
          <ellipse cx="100" cy="346" rx="13" ry="30" fill="#ffd24d" />
          <ellipse cx="100" cy="342" rx="6" ry="18" fill="#fff7d6" />
        </g>
      </svg>
    </div>
  );
}

export default function OnboardingFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');
  const [challenges, setChallenges] = useState([]);
  const [revenueIdx, setRevenueIdx] = useState(2);
  const [timeline, setTimeline] = useState('6 months');

  const [points, setPoints] = useState([]);
  const [charCount, setCharCount] = useState(0);
  const [done, setDone] = useState(false);

  const toggleChallenge = (c) => setChallenges((p) => (p.includes(c) ? p.filter((x) => x !== c) : [...p, c]));

  // Fetch the AI strategy when we reach the final step
  useEffect(() => {
    if (step !== 4) return;
    let cancelled = false;
    setPoints([]); setCharCount(0); setDone(false);
    (async () => {
      let pts;
      try {
        const res = await fetch('/api/strategy', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ name, industry, challenges, revenueIdx, timeline }),
        });
        pts = (await res.json()).points;
      } catch (e) { pts = []; }
      if (!cancelled && Array.isArray(pts)) setPoints(pts);
    })();
    return () => { cancelled = true; };
  }, [step]);

  // Typewriter
  useEffect(() => {
    if (step !== 4 || !points.length) return;
    const total = points.join('').length;
    const id = setInterval(() => {
      setCharCount((c) => {
        if (c >= total) { clearInterval(id); setDone(true); return c; }
        return c + 2;
      });
    }, 16);
    return () => clearInterval(id);
  }, [step, points]);

  const firstName = (name.trim().split(' ')[0]) || 'friend';
  const brandName = name.trim() || 'your brand';

  return (
    <section className={styles.flow} suppressHydrationWarning>
      <Starfield shooters={3} stars={12} />

      <button type="button" className={styles.back2site} onClick={() => router.back()}>
        <span className={styles.bArrow}>←</span> Back to site
      </button>

      {/* ── Right visuals ── */}
      {step >= 1 && (
        <div className={styles.visuals} aria-hidden="true">
          <Rocket step={step} flying={step === 4} />
        </div>
      )}

      {/* ── Intro (step 0) ── */}
      {step === 0 && (
        <div className={styles.introWrap}>
          <div className={styles.orbitWrap}>
            <span className={styles.ring} />
            <div className={styles.orbit}><span className={styles.orbitDot} /></div>
          </div>
          <div className={styles.intro}>
            <span className={styles.kickerGreen}>MISSION BRIEFING</span>
            <h1 className={styles.introHead}>
              <span className={styles.introScript}>We build</span>
              <span className={styles.introAccent}>FUTURES<span className={styles.dot}>.</span></span>
            </h1>
            <p className={styles.introSub}>Five questions.<br />One AI-powered strategy — built just for your brand.</p>
            <button className={styles.cta} onClick={() => setStep(1)}>START YOUR PROJECT <span className={styles.arrow}>→</span></button>
          </div>
        </div>
      )}

      {/* ── Survey steps ── */}
      {step >= 1 && (
        <div key={step} className={styles.content}>
          {step === 1 && (
            <>
              <div className={styles.stepRow}><span className={styles.stepNum}>01</span><span className={styles.stepBar} /><span className={styles.stepLabel}>YOUR BRAND</span></div>
              <span className={styles.stepHint}>2 questions left after this</span>
              <h2 className={styles.head}><span>Tell us about</span><span className={styles.accent}>your brand.</span></h2>
              <p className={styles.sub}>We&rsquo;ll use this to personalise your strategy.</p>

              <input className={styles.input} placeholder="Your business name" value={name} onChange={(e) => setName(e.target.value)} />
              <span className={styles.fieldLabel}>YOUR INDUSTRY</span>
              <div className={styles.pillGrid}>
                {INDUSTRIES.map((it) => (
                  <button key={it} type="button" className={`${styles.pill} ${industry === it ? styles.pillOn : ''}`} onClick={() => setIndustry(it)}>{it}</button>
                ))}
              </div>
              <div className={styles.nav}>
                <button className={styles.backBtn} onClick={() => setStep(0)}>← BACK</button>
                <button className={styles.contBtn} onClick={() => setStep(2)}>CONTINUE →</button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className={styles.stepRow}><span className={styles.stepNum}>02</span><span className={styles.stepBar} /><span className={styles.stepLabel}>YOUR CHALLENGES</span></div>
              <span className={styles.stepHint}>1 question left after this</span>
              <h2 className={styles.head}><span>What&rsquo;s in</span><span className={styles.accent}>your way?</span></h2>
              <p className={styles.sub}>Select everything that applies — we&rsquo;ll tackle all of it.</p>

              <div className={styles.pillWrap}>
                {CHALLENGES.map((c) => (
                  <button key={c} type="button" className={`${styles.roundPill} ${challenges.includes(c) ? styles.pillOn : ''}`} onClick={() => toggleChallenge(c)}>{c}</button>
                ))}
              </div>
              <div className={styles.nav}>
                <button className={styles.backBtn} onClick={() => setStep(1)}>← BACK</button>
                <button className={styles.contBtn} onClick={() => setStep(3)}>CONTINUE →</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className={styles.stepRow}><span className={styles.stepNum}>03</span><span className={styles.stepBar} /><span className={styles.stepLabel}>YOUR GOALS</span></div>
              <span className={`${styles.stepHint} ${styles.hintGreen}`}>Last question — strategy incoming</span>
              <h2 className={styles.head}><span>Where are</span><span className={styles.accent}>you going?</span></h2>
              <p className={styles.sub}>Set your target — we&rsquo;ll map the route.</p>

              <div className={styles.sliderHead}>
                <span className={styles.fieldLabel}>REVENUE TARGET</span>
                <span className={styles.sliderVal}>{REVENUE[revenueIdx]}</span>
              </div>
              <input type="range" min="0" max="4" step="1" value={revenueIdx} className={styles.slider}
                style={{ '--pct': `${(revenueIdx / 4) * 100}%` }}
                onChange={(e) => setRevenueIdx(Number(e.target.value))} />
              <div className={styles.sliderTicks}>{REVENUE.map((r) => <span key={r}>{r}</span>)}</div>

              <span className={styles.fieldLabel} style={{ marginTop: 24 }}>TIMELINE TO GOAL</span>
              <div className={styles.pillWrap}>
                {TIMELINES.map((t) => (
                  <button key={t} type="button" className={`${styles.roundPill} ${timeline === t ? styles.pillOn : ''}`} onClick={() => setTimeline(t)}>{t}</button>
                ))}
              </div>
              <div className={styles.nav}>
                <button className={styles.backBtn} onClick={() => setStep(2)}>← BACK</button>
                <button className={styles.contBtn} onClick={() => setStep(4)}>GENERATE STRATEGY →</button>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <span className={styles.kickerGreen}><i className={styles.greenDot} /> AI ANALYSIS COMPLETE</span>
              <h2 className={styles.head}><span>Your strategy is ready,</span><span className={styles.accent}>{brandName}.</span></h2>

              <ol className={styles.strategy}>
                {(points.length ? points : ['', '', '']).map((p, i) => {
                  const before = points.slice(0, i).join('').length;
                  const shown = Math.max(0, charCount - before);
                  const text = p.slice(0, shown);
                  const typing = points.length > 0 && shown < p.length && charCount > before;
                  return (
                    <li key={i} className={styles.sItem}>
                      <span className={styles.sNum}>{String(i + 1).padStart(2, '0')}</span>
                      <span className={styles.sText}>{text}{typing && <span className={styles.cursor}>|</span>}</span>
                    </li>
                  );
                })}
              </ol>

              {done && (
                <div className={`${styles.nav} ${styles.fadeIn}`}>
                  <button className={styles.contBtn} onClick={() => router.push('/contact')}>BOOK YOUR STRATEGY CALL →</button>
                  <button className={styles.seeBtn} onClick={() => router.push('/solutions')}>SEE OUR WORK</button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </section>
  );
}
