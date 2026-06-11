'use client';

import styles from './Starfield.module.css';

// Deterministic positions (no Math.random) → no SSR/CSR hydration mismatch.
const STARS = [
  { top: '12%', left: '18%', delay: '0s',   size: 2 },
  { top: '24%', left: '62%', delay: '1.1s', size: 1 },
  { top: '40%', left: '8%',  delay: '0.6s', size: 2 },
  { top: '8%',  left: '82%', delay: '2.2s', size: 1 },
  { top: '68%', left: '28%', delay: '1.6s', size: 2 },
  { top: '78%', left: '72%', delay: '0.3s', size: 1 },
  { top: '52%', left: '48%', delay: '2.8s', size: 1 },
  { top: '34%', left: '90%', delay: '1.9s', size: 2 },
  { top: '88%', left: '14%', delay: '0.9s', size: 1 },
  { top: '16%', left: '44%', delay: '3.1s', size: 1 },
  { top: '60%', left: '88%', delay: '2.4s', size: 2 },
  { top: '46%', left: '70%', delay: '0.4s', size: 1 },
];

// Diagonal shooting stars (top-left → bottom-right).
// Each has its OWN angle, distance, length, speed and delay → no two move alike.
const SHOOTERS = [
  { top: '4%',  left: '-8%', angle: '24deg', distance: '1050px', tail: '150px', duration: '2.4s', delay: '0s' },
  { top: '18%', left: '6%',  angle: '34deg', distance: '760px',  tail: '90px',  duration: '3.6s', delay: '3.2s' },
  { top: '-2%', left: '38%', angle: '18deg', distance: '1200px', tail: '180px', duration: '2.0s', delay: '7.5s' },
  { top: '30%', left: '-6%', angle: '41deg', distance: '820px',  tail: '110px', duration: '4.2s', delay: '5.4s' },
  { top: '10%', left: '54%', angle: '28deg', distance: '900px',  tail: '130px', duration: '2.9s', delay: '10.5s' },
  { top: '46%', left: '20%', angle: '37deg', distance: '700px',  tail: '80px',  duration: '3.3s', delay: '13.5s' },
];

export default function Starfield({ shooters = SHOOTERS.length, stars = STARS.length }) {
  const starList = STARS.slice(0, stars);
  const shooterList = SHOOTERS.slice(0, shooters);

  return (
    <div className={styles.sky} aria-hidden="true">
      {starList.map((s, i) => (
        <span
          key={`star-${i}`}
          className={styles.star}
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay }}
        />
      ))}

      {shooterList.map((s, i) => (
        <span
          key={`shooter-${i}`}
          className={styles.shooter}
          style={{
            top: s.top,
            left: s.left,
            '--angle': s.angle,
            '--distance': s.distance,
            '--tail': s.tail,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
    </div>
  );
}
