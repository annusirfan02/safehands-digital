// ─── Searchable site index ────────────────────────────────────────────────────
// A flat, client-side index of everything on the site. The "Ask AI" bar searches
// this. In production this could be swapped for a real API / vector search — the
// UI contract (returns an array of these items) stays the same.
export const SITE_INDEX = [
  // ── Services ──
  {
    id: 'svc-web-design',
    category: 'Service',
    title: 'Web Design',
    description: 'Conversion-focused websites and landing pages built to turn visitors into customers.',
    keywords: ['web', 'website', 'design', 'landing page', 'ui', 'ux', 'redesign', 'frontend'],
    href: '#portfolio',
  },
  {
    id: 'svc-social',
    category: 'Service',
    title: 'Social Media',
    description: 'Content, community and paid social that grows your audience across every platform.',
    keywords: ['social', 'instagram', 'tiktok', 'facebook', 'content', 'community', 'smm'],
    href: '#portfolio',
  },
  {
    id: 'svc-paid-ads',
    category: 'Service',
    title: 'Paid Ads',
    description: 'Performance ad campaigns on Google and Meta engineered for measurable ROI.',
    keywords: ['ads', 'ppc', 'google ads', 'meta ads', 'paid', 'campaign', 'roi', 'advertising'],
    href: '#portfolio',
  },
  {
    id: 'svc-ai-chatbots',
    category: 'Service',
    title: 'AI & Chatbots',
    description: 'Custom AI assistants that handle support, qualify leads and book meetings 24/7.',
    keywords: ['ai', 'chatbot', 'assistant', 'support', 'automation', 'gpt', 'bot'],
    href: '#portfolio',
  },
  {
    id: 'svc-branding',
    category: 'Service',
    title: 'Branding',
    description: 'Identity, positioning and visual systems that make your brand unforgettable.',
    keywords: ['brand', 'branding', 'logo', 'identity', 'positioning', 'visual'],
    href: '#portfolio',
  },

  // ── AI Technologies ──
  {
    id: 'tech-chatbot',
    category: 'Technology',
    title: 'AI Chatbot',
    description: 'On-site conversational AI that answers questions and captures leads instantly.',
    keywords: ['chatbot', 'chat', 'conversation', 'ai', 'support', 'lead'],
    href: '#top',
  },
  {
    id: 'tech-employee',
    category: 'Technology',
    title: 'AI Employee',
    description: 'Autonomous AI agents that run repetitive workflows so your team scales without headcount.',
    keywords: ['ai employee', 'agent', 'automation', 'workflow', 'autonomous'],
    href: '#top',
  },
  {
    id: 'tech-reviews',
    category: 'Technology',
    title: 'AI Reviews',
    description: 'Automated reputation management — collect, analyse and respond to reviews with AI.',
    keywords: ['reviews', 'reputation', 'rating', 'feedback', 'sentiment'],
    href: '#top',
  },
  {
    id: 'tech-seo',
    category: 'Technology',
    title: 'SEO Website',
    description: 'Technically perfect, AI-optimised websites that rank and get found on Google.',
    keywords: ['seo', 'search', 'ranking', 'google', 'visibility', 'organic', 'website'],
    href: '#top',
  },
  {
    id: 'tech-content',
    category: 'Technology',
    title: 'AI Content',
    description: 'On-brand copy, blogs and creatives generated and refined with AI at scale.',
    keywords: ['content', 'copywriting', 'blog', 'writing', 'creative', 'ai'],
    href: '#top',
  },
  {
    id: 'tech-analytics',
    category: 'Technology',
    title: 'AI Analytics',
    description: 'Predictive dashboards that turn your data into clear, revenue-driving decisions.',
    keywords: ['analytics', 'data', 'dashboard', 'reporting', 'insights', 'growth'],
    href: '#top',
  },

  // ── Why us / proof points ──
  {
    id: 'why-ai-first',
    category: 'Why Us',
    title: 'AI-First Approach',
    description: 'AI is the engine underneath every campaign, ad and strategy we build — not a bolt-on.',
    keywords: ['ai first', 'approach', 'technology', 'engine', 'strategy'],
    href: '#different',
  },
  {
    id: 'why-247',
    category: 'Why Us',
    title: '24/7 Autonomous Agents',
    description: 'Agents monitor campaigns, adjust bids and report back around the clock — no downtime.',
    keywords: ['24/7', 'always on', 'agents', 'monitoring', 'autonomous'],
    href: '#different',
  },
  {
    id: 'why-roi',
    category: 'Why Us',
    title: '320% Average Client ROI',
    description: 'Real revenue in your pocket — not vanity metrics. Numbers that move your P&L.',
    keywords: ['roi', 'results', 'revenue', 'return', 'growth', 'profit'],
    href: '#different',
  },
  {
    id: 'why-certified',
    category: 'Why Us',
    title: 'Certified Experts Only',
    description: 'Every strategist holds active certifications. No generalists, no interns. Ever.',
    keywords: ['certified', 'experts', 'team', 'licensed', 'specialists'],
    href: '#different',
  },
];
