import {
  GearIcon, PipeIcon, WrenchIcon, SnowIcon, BoltIcon, BotIcon, ErpIcon, VideoIcon,
} from './icons';

// ─── Offerings ────────────────────────────────────────────────────────────────
// A single source of truth that drives BOTH the cycling headline word and the
// highlighted technology node - so they stay perfectly in sync.
// `word`  → fills the "We build ___ systems that move business." slot (coloured)
// `tech`  → the service shown on the right constellation
// `pos`   → scattered position of the node (desktop)
//
// 50/50 split: 4 Engineering (left column + middle) and 4 AI Automation
// (right column + middle). The cycle alternates between the two pillars.
// Removed: AI Employee, AI Content, AI Analytics, AI Chatbot, AI Reviews.
export const OFFERINGS = [
  // First entry = shown by default when the site opens.
  {
    tech: 'Engineering Services',
    word: 'engineering',
    color: '#4fcdee',
    colorLight: '#0e7ea3',
    Icon: GearIcon,
    pos: { top: '9%', left: '18%' },
  },
  {
    tech: 'AI Automation',
    word: 'automation',
    color: '#BFFE03',
    colorLight: '#2f9e44',
    Icon: BoltIcon,
    pos: { top: '9%', left: '82%' },
  },
  {
    tech: 'MEP Engineering',
    word: 'mep',
    color: '#a878ff',
    colorLight: '#7c3aed',
    Icon: PipeIcon,
    pos: { top: '42%', left: '18%' },
  },
  {
    tech: 'AI Assistants & Automation',
    word: 'ai assistant',
    color: '#5b8cff',
    colorLight: '#2c46d8',
    Icon: BotIcon,
    pos: { top: '42%', left: '82%' },
  },
  {
    tech: 'O&M Engineering',
    word: 'maintenance',
    color: '#f5c518',
    colorLight: '#b45309',
    Icon: WrenchIcon,
    pos: { top: '75%', left: '18%' },
  },
  {
    tech: 'ERP Services & Development',
    word: 'erp',
    color: '#2dd4bf',
    colorLight: '#0d9488',
    Icon: ErpIcon,
    pos: { top: '75%', left: '82%' },
  },
  {
    tech: 'sp.ICE TES',
    word: 'cooling',
    color: '#38bdf8',
    colorLight: '#0369a1',
    Icon: SnowIcon,
    pos: { top: '25%', left: '50%' },
  },
  {
    tech: 'AI Animated Videos',
    word: 'video',
    color: '#ff5c8a',
    colorLight: '#db2777',
    Icon: VideoIcon,
    pos: { top: '58%', left: '50%' },
  },
];

export const CYCLE_MS = 2800;
