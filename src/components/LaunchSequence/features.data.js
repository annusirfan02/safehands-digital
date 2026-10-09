import { SparkIcon, ContrastIcon, BoltIcon, ShieldIcon } from './icons';

// ─── Feature timeline data ────────────────────────────────────────────────────
// `side` controls which side of the central track the card sits on (desktop).
// Client copy: "Why Choose Safe Hands?" — four core pillars of operational excellence.
export const FEATURES = [
  {
    Icon: ShieldIcon,
    stat: 'PREVENTIVE',
    title: 'Zero-Tolerance Preventive Protocols',
    desc: 'We replace guesswork with strict predictive maintenance cycles, arresting equipment faults before they trigger expensive downtime.',
    color: '#BFFE03',
    colorLight: '#2f9e44',
    side: 'left',
  },
  {
    Icon: BoltIcon,
    stat: 'kW / TR',
    title: 'Thermal Dynamics Expertise',
    desc: 'Our specialized technicians optimize cooling output per kilowatt consumed, ensuring heavy-duty plants run at peak performance.',
    color: '#4fcdee',
    colorLight: '#0e7ea3',
    side: 'right',
  },
  {
    Icon: ContrastIcon,
    stat: 'BMS',
    title: 'Autonomous Facility Integration',
    desc: 'We seamlessly interface localized equipment controls with overarching Building Management Systems (BMS) for clear, measurable tracking.',
    color: '#a855f7',
    colorLight: '#8b3fd6',
    side: 'left',
  },
  {
    Icon: SparkIcon,
    stat: 'GERMAN',
    title: 'German Engineering in Thermal Storage',
    desc: 'We deploy advanced German innovation exclusively in our SP.ICE systems to fundamentally reshape how your building handles peak cooling loads.',
    color: '#f5c518',
    colorLight: '#b45309',
    side: 'right',
  },
];
