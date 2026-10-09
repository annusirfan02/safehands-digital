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

// AI Animated Videos (play inside a screen)
export function VideoIcon() {
  return (
    <svg {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M10 9.2v5.6l4.6-2.8z" />
    </svg>
  );
}

// ERP (stacked database)
export function ErpIcon() {
  return (
    <svg {...base}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" />
      <path d="M4.5 5.5v6.5c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V5.5" />
      <path d="M4.5 12v6.5c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V12" />
    </svg>
  );
}

// HVAC & Chiller Plant (thermometer)
export function ThermoIcon() {
  return (
    <svg {...base}>
      <path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z" />
      <path d="M12 9v7" />
    </svg>
  );
}

// SP.ICE thermal storage (ice cube)
export function CubeIcon() {
  return (
    <svg {...base}>
      <path d="M12 2.8 20 7.2v9.6L12 21.2 4 16.8V7.2z" />
      <path d="M4 7.2 12 11.6l8-4.4M12 11.6v9.6" />
    </svg>
  );
}

// Life Safety & Firefighting (flame)
export function FlameIcon() {
  return (
    <svg {...base}>
      <path d="M12 21c-3.9 0-7-2.9-7-6.6 0-3.3 2.2-5.3 3.6-7.2.6 1.5 1.5 2.4 2.6 2.8C11 7.2 12 4.5 14.2 3c.3 2.7 1.7 4.4 3 6 1.1 1.4 1.8 3 1.8 5 0 3.8-3.1 7-7 7z" />
      <path d="M12 21c-1.7 0-3-1.3-3-3 0-1.6 1.2-2.5 1.8-3.6.7 1 1.4 1.4 2.2 1.6.4-.9.8-1.5 1.6-2.1.2 1.3.6 2.2.9 3.1.1.3.2.6.2 1 0 1.7-1.6 3-3.7 3z" />
    </svg>
  );
}

// Engineering services
export function GearIcon() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export function WrenchIcon() {
  return (
    <svg {...base}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

export function SnowIcon() {
  return (
    <svg {...base}>
      <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9.5 4.5L12 7l2.5-2.5M9.5 19.5L12 17l2.5 2.5" />
    </svg>
  );
}
