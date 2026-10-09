'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './ContactForm.module.css';

// Hidden (no longer offered): 'AI SEO', 'Paid Ads', 'Social Media', 'Web Development', 'Email Marketing', 'Content Creation'
const SERVICES = ['MEP Engineering', 'O&M Services', 'sp.ICE TES', 'AI Assistant', 'ERP Services', 'AI Video'];

const REPLIES = [
  "Great question! Pricing is custom to your scope and goals. Tell me your goal and I'll narrow it down.",
  "We cover MEP engineering, O&M, sp.ICE thermal storage, ERP, AI video and AI assistants, all under one roof. What are you focused on right now?",
  "Most projects launch in 2–4 weeks after the kickoff call. Want me to map a rough timeline for your goal?",
  "Absolutely, I can pull together a custom plan. Share your industry and biggest bottleneck and I'll outline next steps.",
  "We work month-to-month, no long contracts. Want me to send over a free audit to get started?",
];

export default function ContactForm() {
  // ── Form ──
  const [picked, setPicked] = useState([]);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const toggle = (s) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  // ── Chat ──
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm Maya, Safe Hands' AI solutions advisor. Are you looking at an engineering project or an AI automation for your team?" },
  ]);
  const [input, setInput] = useState('');
  const bodyRef = useRef(null);
  useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight; }, [messages]);

  const send = (text) => {
    const t = (text ?? input).trim();
    if (!t) return;
    setMessages((m) => [...m, { from: 'user', text: t }, { from: 'typing' }]);
    setInput('');
    const reply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
    setTimeout(() => setMessages((m) => [...m.filter((x) => x.from !== 'typing'), { from: 'bot', text: reply }]), 750);
  };

  return (
    <section id="start" className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        {/* ── Left: form ── */}
        <div className={styles.col}>
          <span className={styles.kicker}>START HERE</span>
          <h2 className={styles.heading}>
            <span className={styles.solid}>START YOUR</span>
            <span className={styles.script}>Project.</span>
          </h2>

          {sent ? (
            <div className={styles.card}>
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className={styles.successTitle}>
                  Thank you{name.trim() ? `, ${name.trim().split(' ')[0]}` : ''}!
                </h3>
                <p className={styles.successText}>
                  Your message is on its way to our team. We&rsquo;ll get back to you very soon,
                  usually within the hour.
                </p>
                <button type="button" className={styles.successBtn} onClick={() => { setSent(false); setName(''); setPicked([]); }}>
                  Send another message
                </button>
              </div>
            </div>
          ) : (
          <form className={styles.card} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div className={styles.row}>
              <label className={styles.field}>
                <span className={styles.label}>YOUR NAME *</span>
                <input className={styles.input} placeholder="Maria Gorn" value={name} onChange={(e) => setName(e.target.value)} required />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>EMAIL *</span>
                <input className={styles.input} type="email" placeholder="you@company.com" required />
              </label>
            </div>
            <div className={styles.row}>
              <label className={styles.field}>
                <span className={styles.label}>PHONE</span>
                <input className={styles.input} placeholder="+1 786 000 0000" />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>COMPANY / WEBSITE</span>
                <input className={styles.input} placeholder="yourcompany.com" />
              </label>
            </div>

            <span className={styles.label}>SERVICES INTERESTED IN</span>
            <div className={styles.pills}>
              {SERVICES.map((s) => (
                <button key={s} type="button" className={`${styles.pill} ${picked.includes(s) ? styles.pillOn : ''}`} onClick={() => toggle(s)}>
                  {s}
                </button>
              ))}
            </div>

            <label className={styles.field}>
              <span className={styles.label}>TELL US ABOUT YOUR PROJECT *</span>
              <textarea className={styles.textarea} rows={5} placeholder="What are your goals? Budget range? Timeline?" required />
            </label>

            <button type="submit" className={styles.submit}>
              SEND MESSAGE <span>→</span>
            </button>
            <p className={styles.note}>We respond ASAP, usually within the hour.</p>
          </form>
          )}
        </div>

        {/* ── Right: chat ── */}
        <div className={styles.col}>
          <span className={styles.aiPill}><i className={styles.aiDot} /> SKIP THE FORM · TALK TO AI</span>
          <h2 className={styles.heading}>
            <span className={styles.solid}>CHAT WITH</span>
            <span className={styles.script}>Maya.</span>
          </h2>
          <p className={styles.chatSub}>Get instant answers on pricing, services, and timelines. Maya knows everything.</p>

          <div className={styles.chat}>
            <div className={styles.chatHead}>
              <span className={styles.aiTag}><i /> ASK ME ANYTHING</span>
              <span className={styles.liveTag}>AI · LIVE 24/7</span>
            </div>
            <div className={styles.chatProfile}>
              <span className={styles.avatar}>M</span>
              <div>
                <div className={styles.chatName}>Maya</div>
                <div className={styles.chatStatus}><i /> Online · AI Solutions Advisor</div>
              </div>
            </div>
            <div className={styles.chatBody} ref={bodyRef}>
              {messages.map((m, i) =>
                m.from === 'typing' ? (
                  <div key={i} className={`${styles.mRow} ${styles.rowBot}`}>
                    <span className={styles.msgAvatar}>M</span>
                    <div className={`${styles.bubble} ${styles.bot} ${styles.typing}`}><span /><span /><span /></div>
                  </div>
                ) : (
                  <div key={i} className={`${styles.mRow} ${m.from === 'user' ? styles.rowUser : styles.rowBot}`}>
                    {m.from === 'bot' && <span className={styles.msgAvatar}>M</span>}
                    <div className={`${styles.bubble} ${m.from === 'user' ? styles.user : styles.bot}`}>{m.text}</div>
                  </div>
                )
              )}
            </div>
            <form className={styles.chatInput} onSubmit={(e) => { e.preventDefault(); send(); }}>
              <input className={styles.chatField} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask Maya anything…" />
              <button type="submit" className={styles.chatSend} aria-label="Send">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
              </button>
            </form>
          </div>

          <div className={styles.contactBtns}>
            <a
              href="https://wa.me/966552762034?text=Hi%20Safe%20Hands%20Digital%2C%20I%27d%20like%20to%20talk%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.textBtn}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-11.9 7.6L3 21l1.9-6.1A8.4 8.4 0 1 1 21 11.5z" /></svg>
              TEXT US
            </a>
            <a href="tel:+966552762034" className={styles.callBtn}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
              CALL US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
