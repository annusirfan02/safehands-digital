// ─── Feature icons — clean monochrome line/solid icons (inherit currentColor) ──
const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

// AI-FIRST — radiating spark / core
export function SparkIcon() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1" />
    </svg>
  );
}

// 24/7 — round-the-clock contrast disc
export function ContrastIcon() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none" />
    </svg>
  );
}

// 5× — speed / lightning bolt
export function BoltIcon() {
  return (
    <svg {...base}>
      <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12z" fill="currentColor" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

// 320% — ROI / trending chart
export function ChartIcon() {
  return (
    <svg {...base}>
      <path d="M3 3v18h18" />
      <path d="M7 14.5l3.5-3.5 3 3 5.5-6" />
      <path d="M16 8h3v3" />
    </svg>
  );
}

// 100% — certified / shield check
export function ShieldIcon() {
  return (
    <svg {...base}>
      <path d="M12 3l7 3v5c0 4.6-3 8.2-7 9.7-4-1.5-7-5.1-7-9.7V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
