'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { getReply, GREETING_AR } from './mayaBrain';
import styles from './VoiceCall.module.css';

/**
 * Browser-native voice AI using the Web Speech API.
 *  • Speech synthesis  → speaks Saudi-Arabic (ar-SA), slow & deliberate.
 *  • Speech recognition → listens (Chrome/Edge), feeds the rule-based brain.
 * No backend required. Swap getReply() for a real LLM/voice endpoint later.
 */
export default function VoiceCall({ open, onClose }) {
  const [status, setStatus] = useState('connecting'); // connecting | idle | listening | speaking
  const [supported, setSupported] = useState(true);
  const [transcript, setTranscript] = useState([]);
  const recRef = useRef(null);

  const speak = useCallback((text, onDone) => {
    const synth = window.speechSynthesis;
    if (!synth) { onDone?.(); return; }

    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ar-SA';
    u.rate = 0.82;   // deliberate, clear pace
    u.pitch = 1;

    const voices = synth.getVoices();
    const arVoice = voices.find((v) => (v.lang || '').toLowerCase().startsWith('ar'));
    if (arVoice) u.voice = arVoice;

    u.onstart = () => setStatus('speaking');
    u.onend = () => { setStatus('idle'); onDone?.(); };

    synth.cancel();
    synth.speak(u);
  }, []);

  const handleUser = useCallback((text) => {
    setTranscript((t) => [...t, { role: 'user', text }]);
    const reply = getReply(text, 'ar');
    setTranscript((t) => [...t, { role: 'bot', text: reply }]);
    speak(reply);
  }, [speak]);

  const listen = useCallback(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { setSupported(false); return; }

    try { window.speechSynthesis?.cancel(); } catch { /* noop */ }

    const rec = new SR();
    rec.lang = 'ar-SA';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onresult = (e) => handleUser(e.results[0][0].transcript);
    rec.onerror = () => setStatus('idle');
    rec.onend = () => setStatus((s) => (s === 'listening' ? 'idle' : s));

    recRef.current = rec;
    setStatus('listening');
    rec.start();
  }, [handleUser]);

  // Greet on open; clean up audio + mic on close.
  useEffect(() => {
    if (!open) return;

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    setSupported(!!SR);
    setTranscript([{ role: 'bot', text: GREETING_AR }]);
    setStatus('connecting');

    const t = setTimeout(() => speak(GREETING_AR), 450); // let voices load
    return () => {
      clearTimeout(t);
      try { window.speechSynthesis?.cancel(); } catch { /* noop */ }
      try { recRef.current?.stop(); } catch { /* noop */ }
    };
  }, [open, speak]);

  const endCall = () => {
    try { window.speechSynthesis?.cancel(); } catch { /* noop */ }
    try { recRef.current?.stop(); } catch { /* noop */ }
    onClose?.();
  };

  if (!open) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Voice call with Maya">
      <div className={styles.panel}>
        <button className={styles.close} onClick={endCall} aria-label="End call">✕</button>

        <div className={`${styles.orb} ${styles[status] || ''}`}>
          <span className={styles.wave} />
          <span className={styles.wave} />
          <span className={styles.orbCore} aria-hidden="true">🎙️</span>
        </div>

        <h3 className={styles.title}>Maya · Voice Call</h3>
        <p className={styles.statusText}>
          {status === 'connecting' && 'Connecting…'}
          {status === 'speaking' && 'Maya is speaking…'}
          {status === 'listening' && 'Listening… speak now'}
          {status === 'idle' && 'Tap the mic and speak'}
        </p>

        {!supported && (
          <p className={styles.warn}>
            Voice input needs Chrome or Edge. Maya can still speak to you here.
          </p>
        )}

        <div className={styles.transcript}>
          {transcript.map((m, i) => (
            <p key={i} dir="rtl" className={m.role === 'user' ? styles.tUser : styles.tBot}>
              {m.text}
            </p>
          ))}
        </div>

        <div className={styles.controls}>
          <button
            className={styles.micBtn}
            onClick={listen}
            disabled={status === 'listening' || !supported}
          >
            {status === 'listening' ? 'Listening…' : '🎤 Tap to speak'}
          </button>
          <button className={styles.endBtn} onClick={endCall}>End call</button>
        </div>
      </div>
    </div>
  );
}
