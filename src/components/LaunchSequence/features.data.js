import { SparkIcon, ContrastIcon, BoltIcon, ChartIcon, ShieldIcon } from './icons';

// ─── Feature timeline data ────────────────────────────────────────────────────
// `side` controls which side of the central track the card sits on (desktop).
export const FEATURES = [
  {
    Icon: SparkIcon,
    stat: 'AI-FIRST',
    title: 'AI Powers Every Service',
    desc: 'Not a tool on top — AI is the engine underneath every campaign, ad, and strategy we build.',
    color: '#BFFE03',
    colorLight: '#2f9e44',
    side: 'left',
  },
  {
    Icon: ContrastIcon,
    stat: '24 / 7',
    title: 'Agents That Work While You Sleep',
    desc: 'Autonomous AI agents monitor campaigns, adjust bids, and report back — no downtime, ever.',
    color: '#a855f7',
    colorLight: '#8b3fd6',
    side: 'right',
  },
  {
    Icon: BoltIcon,
    stat: '5×',
    title: 'Faster Than Traditional Agencies',
    desc: 'AI automation cuts production time by 80%. Same quality. Shipped before you’d expect.',
    color: '#ff8c1e',
    colorLight: '#d97706',
    side: 'left',
  },
  {
    Icon: ChartIcon,
    stat: '320%',
    title: 'Average Client ROI',
    desc: 'Real revenue in your pocket — not vanity metrics. Numbers that move your P&L.',
    color: '#2dd4bf',
    colorLight: '#0d9488',
    side: 'right',
  },
  {
    Icon: ShieldIcon,
    stat: '100%',
    title: 'Certified Experts Only',
    desc: 'Every strategist holds active certifications. No generalists, no interns. Ever.',
    color: '#c2cad6',
    colorLight: '#2c46d8',
    side: 'left',
  },
];
