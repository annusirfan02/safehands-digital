// ─── Searchable site index (knowledge base) ──────────────────────────────────
// A flat, client-side index of everything on the site. The "Ask AI" bar searches
// this. Each entry carries a deep `href` (page + section) so "Read more" can open
// the exact place in a new tab. In production this could be swapped for a real
// API / vector search - the UI contract (an array of these items) stays the same.
export const SITE_INDEX = [
  // ── Company / overview ──
  {
    id: 'about-safehands',
    category: 'Company',
    title: 'About SafeHands',
    description: 'SafeHands delivers two services: Engineering (MEP, O&M, sp.ICE thermal storage) and AI Assistant & Automation (custom AI systems for your workflows), across Saudi Arabia & APAC.',
    keywords: ['safehands', 'safe hands', 'company', 'about', 'who', 'overview', 'partner', 'engineering', 'automation'],
    href: '/#about',
  },
  {
    id: 'locations',
    category: 'Company',
    title: 'Riyadh · Saudi Arabia',
    description: 'Based in Riyadh and serving clients across Saudi Arabia and the APAC region.',
    keywords: ['riyadh', 'saudi', 'arabia', 'ksa', 'location', 'where', 'office', 'apac', 'region'],
    href: '/#exd',
  },
  {
    id: 'contact',
    category: 'Company',
    title: 'Contact Us',
    description: 'Get in touch with the SafeHands team, start a conversation about your project.',
    keywords: ['contact', 'email', 'call', 'talk', 'reach', 'quote', 'enquiry', 'get in touch'],
    href: '/contact',
  },
  {
    id: 'get-started',
    category: 'Company',
    title: 'Get Started',
    description: 'Kick off your project with a guided onboarding flow built to scope your needs fast.',
    keywords: ['start', 'get started', 'onboarding', 'begin', 'signup', 'project', 'kickoff'],
    href: '/onboarding',
  },
  {
    id: 'portfolio',
    category: 'Company',
    title: 'Portfolio & Work',
    description: 'A look at the projects and results SafeHands has delivered for clients.',
    keywords: ['portfolio', 'work', 'projects', 'case study', 'results', 'examples', 'clients'],
    href: '/#portfolio',
  },

  // ── ERP / SAP / Development ──
  {
    id: 'erp-services',
    category: 'Service',
    title: 'ERP Services',
    description: 'As an emerging ERP System Integrator, SafeHands offers licensing, implementation, support and upgrades for cloud and on-premise platforms, SAP, ETM.Next, Qlik, Jaggaer and Salesforce.',
    keywords: ['erp', 'sap', 'implementation', 'integrator', 'system', 'licensing', 'upgrade', 'cloud', 'on-premise', 'migration', 'etm', 'qlik', 'jaggaer', 'salesforce'],
    href: '/erp-development#erp-services',
  },
  {
    id: 'software-development',
    category: 'Service',
    title: 'Software Development',
    description: 'A full-stack team of developers, designers, architects and project managers building innovative, scalable and secure solutions, web, mobile, IoT and enterprise.',
    keywords: ['software', 'development', 'developer', 'app', 'web', 'mobile', 'ios', 'android', 'php', '.net', 'laravel', 'python', 'java', 'ruby', 'code', 'programming', 'fiori', 'abap'],
    href: '/erp-development#software-development',
  },
  {
    id: 'outsourcing',
    category: 'Service',
    title: 'Outsourcing',
    description: 'Comprehensive outsourcing across IT, digital operations, data entry, ERP maintenance, HRM and finance, so you can focus on core competencies and strategic growth.',
    keywords: ['outsourcing', 'outsource', 'it', 'hrm', 'finance', 'data entry', 'community management', 'maintenance', 'operations', 'staffing'],
    href: '/erp-development#outsourcing',
  },
  {
    id: 'sap-partner',
    category: 'Partnership',
    title: 'SAP Service Provider',
    description: 'SafeHands is a leading SAP service provider in Saudi Arabia and a local partner of BearingPoint.',
    keywords: ['sap', 'platinum', 'partner', 'bearingpoint', 'service provider', 'integrator'],
    href: '/#exd',
  },
  {
    id: 'partner-ecosystem',
    category: 'Partnership',
    title: 'Partner Ecosystem',
    description: 'A unique ecosystem of best-in-class partners, BearingPoint, Jaggaer and Salesforce, for tailored solutions that help your business thrive.',
    keywords: ['partners', 'ecosystem', 'bearingpoint', 'jaggaer', 'salesforce', 'qlik', 'oracle', 'alliance'],
    href: '/#exd',
  },
  {
    id: 'ai-sap',
    category: 'Technology',
    title: 'AI on SAP, Joule & JAI',
    description: 'AI implementations that unlock analytics and intelligence across SAP, ETM.Next, Qlik and Jaggaer, including SAP’s Generative AI, Joule, and Jaggaer’s AI, JAI.',
    keywords: ['joule', 'jai', 'generative ai', 'sap ai', 'jaggaer ai', 'analytics', 'intelligence', 'machine learning'],
    href: '/#exd',
  },
  {
    id: 'one-partner',
    category: 'Why Us',
    title: 'One Partner, Two Disciplines',
    description: 'Engineering services for your facility and AI & business systems for your workflows, delivered by one accountable partner across Saudi Arabia.',
    keywords: ['why', 'partner', 'engineering', 'ai', 'one partner', 'sectors', 'industries', 'who we serve', 'data center', 'hotel'],
    href: '/#exd',
  },

  // ── Marketing & web services ──
  // Hidden: services no longer offered (AI SEO, Web Development, Social Media,
  // Paid Ads). Uncomment to bring one back.
  // {
  //   id: 'svc-seo',
  //   category: 'Service',
  //   title: 'AI SEO',
  //   description: 'Rank everywhere people search, Google, ChatGPT and Perplexity. Traditional SEO blended with AI-search optimization so your brand gets found and cited.',
  //   keywords: ['seo', 'search', 'ranking', 'google', 'chatgpt', 'perplexity', 'visibility', 'organic', 'website'],
  //   href: '/seo',
  // },
  // {
  //   id: 'svc-web',
  //   category: 'Service',
  //   title: 'Web Development',
  //   description: 'High-converting websites on Next.js, WordPress or fully custom code, fast, SEO-ready and built to turn visitors into customers.',
  //   keywords: ['web', 'website', 'design', 'development', 'nextjs', 'wordpress', 'landing page', 'frontend', 'ui', 'ux'],
  //   href: '/web-development',
  // },
  // {
  //   id: 'svc-social',
  //   category: 'Service',
  //   title: 'Social Media',
  //   description: 'Content, community and paid social that grows your audience and drives conversions across every platform.',
  //   keywords: ['social', 'instagram', 'tiktok', 'linkedin', 'youtube', 'content', 'community', 'smm'],
  //   href: '/social-media',
  // },
  // {
  //   id: 'svc-paid-ads',
  //   category: 'Service',
  //   title: 'Paid Ads',
  //   description: 'ROI-focused ad campaigns on Meta and Google, full-funnel strategy, creative, targeting and continuous optimization.',
  //   keywords: ['ads', 'ppc', 'google ads', 'meta ads', 'paid', 'campaign', 'roi', 'advertising'],
  //   href: '/paid-ads',
  // },

  // ── Engineering services ──
  {
    id: 'svc-mep',
    category: 'Service',
    title: 'MEP Engineering',
    description: 'Turnkey mechanical, electrical, plumbing and fire protection design and execution for complex facilities across Saudi Arabia.',
    keywords: ['mep', 'engineering', 'hvac', 'mechanical', 'electrical', 'plumbing', 'fire protection', 'facility', 'infrastructure'],
    href: '/mep-engineering',
  },
  {
    id: 'svc-om',
    category: 'Service',
    title: 'Operation & Maintenance (O&M)',
    description: 'Chiller plant overhauls, industrial and cold-chain refrigeration O&M, and 24/7 mission-critical dispatch.',
    keywords: ['o&m', 'maintenance', 'operation', 'chiller', 'refrigeration', 'cold chain', 'cooling', 'hvac service'],
    href: '/operations-maintenance',
  },
  {
    id: 'svc-refrigeration',
    category: 'Service',
    title: 'Industrial & Commercial Refrigeration O&M',
    description: 'High-precision sub-zero thermal management for cold chains, cleanrooms and manufacturing: compressor rebuilds, leak detection, defrost calibration.',
    keywords: ['refrigeration', 'cold chain', 'cold storage', 'freezer', 'ammonia', 'compressor', 'cleanroom', 'pharma'],
    href: '/industrial-refrigeration',
  },
  {
    id: 'svc-fire',
    category: 'Service',
    title: 'Firefighting & Life Safety',
    description: 'Fire pump, sprinkler, clean-agent suppression and smoke management testing, compliant with civil defense codes and NFPA.',
    keywords: ['fire', 'firefighting', 'life safety', 'sprinkler', 'fire pump', 'nfpa', 'civil defense', 'fm-200', 'smoke'],
    href: '/fire-life-safety',
  },
  {
    id: 'svc-spice',
    category: 'Service',
    title: 'sp.ICE Thermal Energy Storage',
    description: 'German-made ice thermal energy storage that shifts cooling load to night-time and reduces peak electrical demand.',
    keywords: ['sp.ice', 'spice', 'tes', 'thermal energy storage', 'ice storage', 'peak demand', 'cooling load', 'solar'],
    href: '/sp-ice-tes',
  },
  // Hidden page: /solutions
  // {
  //   id: 'svc-solutions',
  //   category: 'Service',
  //   title: 'Solutions & Pricing',
  //   description: 'Explore the full range of SafeHands services with clear scope and pricing for each.',
  //   keywords: ['solutions', 'pricing', 'packages', 'services', 'cost', 'price', 'plans'],
  //   href: '/solutions',
  // },

  // ── AI products ──
  // Hidden page: /ai-employees (replaced by /ai-automation).
  // {
  //   id: 'svc-ai-employees',
  //   category: 'Service',
  //   title: 'AI Employees',
  //   description: 'AI employees that run your operations 24/7, trained on your business and managed by licensed experts.',
  //   keywords: ['ai employee', 'agent', 'operator', 'automation', 'workflow', 'autonomous', 'assistant'],
  //   href: '/ai-employees',
  // },
  {
    id: 'tech-maya',
    category: 'Technology',
    title: 'Maya, AI Solutions Advisor',
    description: 'A live AI advisor available 24/7, trained on everything SafeHands does, chat or start a voice call.',
    keywords: ['maya', 'ai advisor', 'chat', 'chatbot', 'assistant', 'voice', 'help'],
    href: '/contact', // home Maya section is hidden; Maya chat still lives on Contact
  },
  {
    id: 'tech-chatbot',
    category: 'Technology',
    title: 'AI Assistant & Automation',
    description: 'Custom AI systems built around your workflow, like filtering 100 daily emails down to the ones that matter, sorted, with replies drafted.',
    keywords: ['chatbot', 'chat', 'ai', 'support', 'automation', 'bot', 'email', 'inbox', 'sort', 'reply', 'workflow'],
    href: '/ai-automation',
  },

  // ── Why us / proof points ──
  {
    id: 'why-ai-first',
    category: 'Why Us',
    title: 'AI-First Approach',
    description: 'AI is the engine underneath every solution we build, not a bolt-on.',
    keywords: ['ai first', 'approach', 'technology', 'engine', 'strategy', 'innovation'],
    href: '/#different',
  },
  // Hidden: points to the hidden "Delivered" (marketing results) section.
  // {
  //   id: 'why-results',
  //   category: 'Why Us',
  //   title: 'Real, Measurable Results',
  //   description: 'Real revenue and outcomes, not vanity metrics. Numbers that move your P&L.',
  //   keywords: ['roi', 'results', 'revenue', 'return', 'growth', 'profit', 'measurable', 'outcomes'],
  //   href: '/#results',
  // },
  {
    id: 'why-turnkey',
    category: 'Why Us',
    title: 'Design to Commissioning',
    description: 'Design, engineering, procurement, installation, commissioning and ongoing O&M, delivered by one accountable team.',
    keywords: ['turnkey', 'design', 'procurement', 'installation', 'commissioning', 'epc', 'team'],
    href: '/#different',
  },
];
