import {
  WebIcon, SocialIcon, AdsIcon, SeoIcon, AiIcon,
  HeartIcon, BrandIcon, MailIcon, ContentIcon,
} from './icons';

// ─── Services ─────────────────────────────────────────────────────────────────
// First 6 show by default; the rest reveal behind "Show more".
export const SERVICES = [
  {
    num: '01',
    name: 'Web Design',
    color: '#7c5cff',
    gradient: 'linear-gradient(90deg,#7c5cff,#a07cff)',
    description: 'Conversion-first websites and landing pages designed to turn visitors into paying customers.',
    href: '#portfolio',
    Icon: WebIcon,
  },
  {
    num: '02',
    name: 'Social Media',
    color: '#ff4d9d',
    gradient: 'linear-gradient(90deg,#ff4d9d,#ff7ab8)',
    description: 'Scroll-stopping content and community management that grows your audience on every platform.',
    href: '#portfolio',
    Icon: SocialIcon,
  },
  {
    num: '03',
    name: 'Meta & Google Ads',
    color: '#ff8c1e',
    gradient: 'linear-gradient(90deg,#ff8c1e,#ffb14d)',
    description: 'Performance ad campaigns on Meta and Google engineered for a measurable return on every dollar.',
    href: '#portfolio',
    Icon: AdsIcon,
  },
  {
    num: '04',
    name: 'AI SEO',
    color: '#1e9bff',
    gradient: 'linear-gradient(90deg,#1e9bff,#5bc0ff)',
    description: 'Rank on Google, ChatGPT, and Perplexity — traditional SEO meets AI search optimization.',
    href: '#portfolio',
    Icon: SeoIcon,
  },
  {
    num: '05',
    name: 'AI Assistants & Automations',
    color: '#10b981',
    gradient: 'linear-gradient(90deg,#10b981,#3ed9a4)',
    description: 'Custom AI agents and automations that handle support, follow-ups and busywork 24/7.',
    href: '#portfolio',
    Icon: AiIcon,
  },
  {
    num: '06',
    name: 'Non-Profit Management',
    color: '#ff4d4d',
    gradient: 'linear-gradient(90deg,#ff4d4d,#ff7a7a)',
    description: 'End-to-end digital management for non-profits — campaigns, donors and impact, all handled.',
    href: '#portfolio',
    Icon: HeartIcon,
  },
  {
    num: '07',
    name: 'Branding & Identity',
    color: '#14c4c4',
    gradient: 'linear-gradient(90deg,#14c4c4,#4ee0e0)',
    description: 'Logos, positioning and visual systems that make your brand impossible to forget.',
    href: '#portfolio',
    Icon: BrandIcon,
  },
  {
    num: '08',
    name: 'Email Marketing',
    color: '#f5b21a',
    gradient: 'linear-gradient(90deg,#f5b21a,#ffce5c)',
    description: 'Lifecycle emails and flows that nurture leads and turn one-time buyers into regulars.',
    href: '#portfolio',
    Icon: MailIcon,
  },
  {
    num: '09',
    name: 'Content Creation',
    color: '#c879ff',
    gradient: 'linear-gradient(90deg,#c879ff,#dba6ff)',
    description: 'On-brand video, graphics and copy produced at scale with an AI-assisted workflow.',
    href: '#portfolio',
    Icon: ContentIcon,
  },
];

export const INITIAL_COUNT = 6;
