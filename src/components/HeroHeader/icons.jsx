// ─── AI technology icons — clean monochrome line icons (inherit currentColor) ──
const base = {
  width: 30,
  height: 30,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

// AI Chatbot
export function ChatIcon() {
  return (
    <svg {...base}>
      <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" strokeWidth="2.2" />
    </svg>
  );
}

// AI Employee (robot)
export function BotIcon() {
  return (
    <svg {...base}>
      <rect x="4.5" y="8" width="15" height="11" rx="3" />
      <path d="M12 8V4.5M12 4.5h2" />
      <circle cx="12" cy="3.5" r="1.2" />
      <path d="M9.5 13v1.5M14.5 13v1.5" strokeWidth="2" />
      <path d="M2.5 12.5v2.5M21.5 12.5v2.5" />
    </svg>
  );
}

// AI Reviews
export function StarIcon() {
  return (
    <svg {...base}>
      <path d="M12 3.2l2.6 5.3 5.8.85-4.2 4.1 1 5.8L12 16.6 6.8 19.3l1-5.8-4.2-4.1 5.8-.85z" />
    </svg>
  );
}

// SEO Website (searchable globe)
export function SeoIcon() {
  return (
    <svg {...base}>
      <circle cx="10.5" cy="10.5" r="6.8" />
      <path d="M10.5 3.7c2.6 2 2.6 11.6 0 13.6M10.5 3.7c-2.6 2-2.6 11.6 0 13.6M3.7 10.5h13.6" />
      <path d="m20.5 20.5-4-4" />
    </svg>
  );
}

// ERP (stacked database / system modules)
export function ErpIcon() {
  return (
    <svg {...base}>
      <ellipse cx="12" cy="5" rx="7.5" ry="2.8" />
      <path d="M4.5 5v6c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8V5" />
      <path d="M4.5 11v6c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8v-6" />
    </svg>
  );
}

// AI Content
export function PenIcon() {
  return (
    <svg {...base}>
      <path d="M12.5 20H21" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" />
      <path d="M14.5 5.5l3 3" />
    </svg>
  );
}

// AI Analytics
export function AnalyticsIcon() {
  return (
    <svg {...base}>
      <path d="M3 3v18h18" />
      <path d="M7 15l3.5-3.5 3 3 5.5-6.5" />
      <path d="M16 6h3v3" />
    </svg>
  );
}
