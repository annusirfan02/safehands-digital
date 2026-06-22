// ─── Service icons - clean line icons (inherit currentColor) ──────────────────
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function WebIcon() {
  return (
    <svg {...base}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8.5h18M7 13h6M7 16.5h9" />
    </svg>
  );
}

export function SocialIcon() {
  return (
    <svg {...base}>
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="17.5" cy="6" r="2.4" />
      <circle cx="17.5" cy="18" r="2.4" />
      <path d="M8.2 10.9l7.1-3.7M8.2 13.1l7.1 3.7" />
    </svg>
  );
}

export function AdsIcon() {
  return (
    <svg {...base}>
      <path d="M3 11v2a1 1 0 0 0 1 1h2l4 3.5V7.5L6 11H4a1 1 0 0 0-1 0z" />
      <path d="M14 8.5a4 4 0 0 1 0 7" />
      <path d="M16.5 6a7 7 0 0 1 0 12" />
    </svg>
  );
}

export function SeoIcon() {
  return (
    <svg {...base}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
      <path d="M8.5 11.5l1.8 1.8L14 9.5" />
    </svg>
  );
}

export function AiIcon() {
  return (
    <svg {...base}>
      <rect x="4.5" y="8" width="15" height="11" rx="3" />
      <path d="M12 8V5M12 5h2" />
      <circle cx="12" cy="4" r="1.1" />
      <path d="M9.5 13v1.6M14.5 13v1.6" strokeWidth="2" />
      <path d="M2.5 12.5v2.5M21.5 12.5v2.5" />
    </svg>
  );
}

export function HeartIcon() {
  return (
    <svg {...base}>
      <path d="M12 20s-7-4.3-7-9.3A3.7 3.7 0 0 1 12 8a3.7 3.7 0 0 1 7-2.5c0 5-7 14.5-7 14.5z" />
    </svg>
  );
}

export function BrandIcon() {
  return (
    <svg {...base}>
      <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.6 7.2 18l.9-5.4L4.2 8.7l5.4-.8z" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function ContentIcon() {
  return (
    <svg {...base}>
      <path d="M14 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M18.5 3.5a2 2 0 0 1 3 3L13 15l-4 1 1-4z" />
    </svg>
  );
}
