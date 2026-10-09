'use client';

import { useRef, useState } from 'react';
import ChatWidget from './ChatWidget';
import VoiceCall from './VoiceCall';
import styles from './MayaSection.module.css';

export default function MayaSection() {
  const chatRef = useRef(null);
  const [callOpen, setCallOpen] = useState(false);

  return (
    <section id="maya" className={styles.section} suppressHydrationWarning>
      <div className={styles.inner}>
        {/* Left - live chatbot */}
        <div className={styles.left}>
          <ChatWidget ref={chatRef} />
        </div>

        {/* Right - copy + actions */}
        <div className={styles.right}>
          <span className={styles.live}>
            <i className={styles.liveDot} /> LIVE NOW
          </span>

          <h2 className={styles.heading}>
            MEET MAYA,
            <br />
            YOUR AI SOLUTIONS ADVISOR<span className={styles.dot}>.</span>
          </h2>

          <p className={styles.sub}>
            Available 24/7. Trained on everything Safe Hands Digital knows. Get instant
            answers on MEP engineering, sp.ICE thermal storage, ERP, AI automation, and more.
          </p>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primary}
              onClick={() => chatRef.current?.focusInput()}
            >
              LAUNCH MAYA AI <span className={styles.arrow}>→</span>
            </button>

            <button
              type="button"
              className={styles.callBtn}
              onClick={() => setCallOpen(true)}
            >
              <span className={styles.callIcon}>📞</span> Start voice call
            </button>
          </div>
        </div>
      </div>

      <VoiceCall open={callOpen} onClose={() => setCallOpen(false)} />
    </section>
  );
}
