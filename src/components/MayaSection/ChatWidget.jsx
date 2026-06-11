'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { getReply, GREETING_EN } from './mayaBrain';
import styles from './ChatWidget.module.css';

const ChatWidget = forwardRef(function ChatWidget(_props, ref) {
  const [messages, setMessages] = useState([{ role: 'bot', text: GREETING_EN }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const replyTimer = useRef(null);

  // Let the parent focus the input (e.g. "Launch Maya AI" button).
  useImperativeHandle(ref, () => ({
    focusInput: () => inputRef.current?.focus(),
  }));

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  useEffect(() => () => clearTimeout(replyTimer.current), []);

  const send = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    setMessages((m) => [...m, { role: 'user', text }]);
    setInput('');
    setTyping(true);

    replyTimer.current = setTimeout(() => {
      const reply = getReply(text, 'en');
      setTyping(false);
      setMessages((m) => [...m, { role: 'bot', text: reply }]);
    }, 750);
  };

  return (
    <div className={styles.widget}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.avatar}>M</span>
        <div className={styles.who}>
          <span className={styles.name}>Maya</span>
          <span className={styles.status}>
            <i className={styles.statusDot} /> Online · AI Marketing Strategist
          </span>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className={styles.messages}>
        {messages.map((m, i) => (
          <div
            key={i}
            className={`${styles.row} ${m.role === 'user' ? styles.rowUser : styles.rowBot}`}
          >
            {m.role === 'bot' && <span className={styles.bubbleAvatar}>M</span>}
            <p className={`${styles.bubble} ${m.role === 'user' ? styles.userBubble : styles.botBubble}`}>
              {m.text}
            </p>
          </div>
        ))}

        {typing && (
          <div className={`${styles.row} ${styles.rowBot}`}>
            <span className={styles.bubbleAvatar}>M</span>
            <div className={`${styles.bubble} ${styles.botBubble} ${styles.typing}`}>
              <span className={styles.tdot} />
              <span className={styles.tdot} />
              <span className={styles.tdot} />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form className={styles.inputBar} onSubmit={send}>
        <input
          ref={inputRef}
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Maya anything..."
          aria-label="Ask Maya anything"
        />
        <button type="submit" className={styles.sendBtn} aria-label="Send message">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2 11 13" />
            <path d="M22 2 15 22l-4-9-9-4z" />
          </svg>
        </button>
      </form>
    </div>
  );
});

export default ChatWidget;
