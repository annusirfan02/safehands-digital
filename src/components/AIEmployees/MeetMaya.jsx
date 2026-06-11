'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './MeetMaya.module.css';

const SUGGESTIONS = [
  'What would an AI Growth Operator do for my startup?',
  'How do you automate lead outreach?',
  'What does it cost to get started?',
];

// No database — Maya replies with a relevant, randomly-picked answer.
const REPLIES = [
  "Great question! I'd start by auditing your funnel, then run automated outreach to your best-fit prospects — usually 30–40 qualified leads a week.",
  "I handle lead sourcing, personalized outreach, follow-ups and weekly reporting — all on autopilot. Want me to map it to your business?",
  "Getting started is simple: a free audit, then we build and train your operator in about 2 weeks. Plans start around $1,500/mo.",
  "I automate the repetitive work — sourcing, messaging, scheduling and reporting — so your team only talks to leads who are ready to buy.",
  "Tell me your industry and I'll show you exactly which tasks I'd take off your plate first.",
  "Absolutely — I run 24/7, never miss a follow-up, and report results every week. No payroll, no headcount.",
];

export default function MeetMaya() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm Maya, Safe Hands Digital's AI marketing strategist. How can I help grow your business today?" },
  ]);
  const [input, setInput] = useState('');
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages]);

  const send = (text) => {
    const t = (text ?? input).trim();
    if (!t) return;
    setMessages((m) => [...m, { from: 'user', text: t }]);
    setInput('');
    const reply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
    setMessages((m) => [...m, { from: 'typing' }]);
    setTimeout(() => {
      setMessages((m) => [...m.filter((x) => x.from !== 'typing'), { from: 'bot', text: reply }]);
    }, 750);
  };

  return (
    <section id="meet-maya" className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        {/* ── Left ── */}
        <div className={styles.left}>
          <span className={styles.kicker}><i className={styles.kickerDot} /> LIVE EXAMPLE</span>
          <h2 className={styles.heading}>
            <span className={styles.solid}>MEET</span>
            <span className={styles.script}>Maya.</span>
          </h2>
          <p className={styles.body}>
            Our own AI Growth Operator — trained on everything Safe Hands Digital does.
            A live example of what we build for clients.
          </p>
          <p className={styles.hint}>
            Try asking her what a growth operator would look like for your business, or
            how we automate lead outreach.
          </p>
          <ul className={styles.suggestions}>
            {SUGGESTIONS.map((q) => (
              <li key={q}>
                <button type="button" className={styles.suggestion} onClick={() => send(q)}>
                  &ldquo;{q}&rdquo;
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: chat ── */}
        <div className={styles.chat}>
          <div className={styles.chatHead}>
            <span className={styles.avatar}>M</span>
            <div>
              <div className={styles.chatName}>Maya</div>
              <div className={styles.chatStatus}><i /> Online · AI Marketing Strategist</div>
            </div>
          </div>

          <div className={styles.chatBody} ref={bodyRef}>
            {messages.map((m, i) =>
              m.from === 'typing' ? (
                <div key={i} className={`${styles.row} ${styles.rowBot}`}>
                  <span className={styles.msgAvatar}>M</span>
                  <div className={`${styles.bubble} ${styles.bot} ${styles.typing}`}>
                    <span /><span /><span />
                  </div>
                </div>
              ) : (
                <div key={i} className={`${styles.row} ${m.from === 'user' ? styles.rowUser : styles.rowBot}`}>
                  {m.from === 'bot' && <span className={styles.msgAvatar}>M</span>}
                  <div className={`${styles.bubble} ${m.from === 'user' ? styles.user : styles.bot}`}>{m.text}</div>
                </div>
              )
            )}
          </div>

          <form className={styles.chatInput} onSubmit={(e) => { e.preventDefault(); send(); }}>
            <input
              className={styles.field}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Maya anything…"
            />
            <button type="submit" className={styles.send} aria-label="Send">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
