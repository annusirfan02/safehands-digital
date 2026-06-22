import { ChatIcon, BotIcon, StarIcon, ErpIcon, PenIcon, AnalyticsIcon } from './icons';

// ─── Offerings ────────────────────────────────────────────────────────────────
// A single source of truth that drives BOTH the cycling headline word and the
// highlighted technology node - so they stay perfectly in sync.
// `word`  → fills the "We bring ___ to brands." slot (coloured)
// `tech`  → the AI technology shown on the right constellation
// `pos`   → scattered position of the node (desktop)
export const OFFERINGS = [
  {
    tech: 'AI Chatbot',
    word: 'conversations',
    color: '#BFFE03',
    colorLight: '#2f9e44',
    Icon: ChatIcon,
    pos: { top: '8%', left: '64%' },
  },
  {
    tech: 'AI Employee',
    word: 'automation',
    color: '#5b8cff',
    colorLight: '#2c46d8',
    Icon: BotIcon,
    pos: { top: '22%', left: '34%' },
  },
  {
    tech: 'AI Reviews',
    word: 'reputation',
    color: '#ff9f43',
    colorLight: '#d97706',
    Icon: StarIcon,
    pos: { top: '40%', left: '72%' },
  },
  {
    tech: 'ERP',
    word: 'visibility',
    color: '#2dd4bf',
    colorLight: '#0d9488',
    Icon: ErpIcon,
    pos: { top: '56%', left: '40%' },
  },
  {
    tech: 'AI Content',
    word: 'content',
    color: '#c879ff',
    colorLight: '#8b3fd6',
    Icon: PenIcon,
    pos: { top: '70%', left: '68%' },
  },
  {
    tech: 'AI Analytics',
    word: 'growth',
    color: '#ff5c8a',
    colorLight: '#db2777',
    Icon: AnalyticsIcon,
    pos: { top: '84%', left: '36%' },
  },
];

export const CYCLE_MS = 2800;
