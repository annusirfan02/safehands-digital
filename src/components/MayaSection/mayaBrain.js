// ─── Maya - lightweight rule-based responder ──────────────────────────────────
// Returns a reply for a user message in the requested language. This is a
// client-side demo brain (no external LLM). The contract - getReply(text, lang)
// → string - is intentionally simple so it can be swapped for a real API call
// (OpenAI / Anthropic / your own endpoint) without touching the UI.

const INTENTS = [
  {
    keys: ['hi', 'hello', 'hey', 'salam', 'salaam', 'assalam', 'hola', 'مرحبا', 'السلام', 'هلا', 'اهلا', 'أهلا'],
    en: "Hi! I'm Maya, your AI solutions advisor. Ask me about MEP engineering, sp.ICE thermal storage, ERP, AI automation, or pricing.",
    ar: 'أهلاً وسهلاً بك. أنا مايا، خبيرتك الاستراتيجية بالذكاء الاصطناعي. كيف يمكنني مساعدتك اليوم؟ يمكنك سؤالي عن الهندسة الكهروميكانيكية، أو تخزين الطاقة الحرارية sp.ICE، أو أنظمة ERP، أو الأتمتة بالذكاء الاصطناعي.',
  },
  // Hidden: intents for services no longer offered (SEO, paid ads, web design, social media).
  {
    keys: ['mep', 'engineering', 'hvac', 'electrical', 'plumbing', 'fire', 'maintenance', 'chiller', 'هندسة', 'تكييف', 'صيانة'],
    en: 'Safe Hands Engineering delivers turnkey MEP (mechanical, electrical, plumbing and fire protection) plus chiller and cold-chain O&M for high-ambient facilities across Saudi Arabia.',
    ar: 'تقدّم سيف هاندز للهندسة حلولاً متكاملة للأعمال الكهروميكانيكية من تكييف وكهرباء وسباكة وأنظمة مكافحة الحريق، إضافةً إلى تشغيل وصيانة المبرّدات وسلاسل التبريد للمنشآت في أجواء المملكة الحارّة.',
  },
  {
    // Matching is substring-based, so avoid short keys like 'ice' (price/service) or 'tes' (rates).
    keys: ['sp.ice', 'spice', 'ice storage', 'thermal', 'energy storage', 'peak demand', 'تخزين', 'ثلج', 'الذروة'],
    en: 'sp.ICE is German-made ice thermal energy storage: it charges at night and discharges during the afternoon peak, cutting cooling costs and peak demand.',
    ar: 'نظام sp.ICE هو تقنية ألمانية لتخزين الطاقة الحرارية بالثلج، يُشحن ليلاً ويُفرَّغ وقت ذروة الظهيرة، فيخفّض تكاليف التبريد والأحمال وقت الذروة.',
  },
  {
    keys: ['price', 'pricing', 'cost', 'budget', 'how much', 'سعر', 'تكلفة', 'الاسعار', 'الأسعار', 'ميزانية'],
    en: 'Pricing depends on your goals and scope. Tell me your facility or workflow and what you need, or hit “Start your project” and our engineers or AI team will prepare a tailored quote.',
    ar: 'تعتمد الأسعار على أهدافك وحجم العمل المطلوب. أخبرني عن مجال نشاطك وما تحتاجه، أو اضغط على زر بدء المشروع وسيقوم أحد خبرائنا بإعداد عرض سعر مخصّص لك.',
  },
  {
    keys: ['ai', 'chatbot', 'automation', 'agent', 'assistant', 'ذكاء', 'بوت', 'اتمتة', 'أتمتة', 'مساعد'],
    en: 'We build custom AI assistants and automations, like me, that handle support, follow-ups and busywork around the clock.',
    ar: 'نبني مساعدين آليين وأنظمة أتمتة مخصّصة, مثلي تماماً, تتولى خدمة العملاء والمتابعة والمهام المتكرّرة على مدار الساعة.',
  },
  {
    keys: ['contact', 'call', 'human', 'talk', 'email', 'phone', 'تواصل', 'اتصال', 'مكالمة', 'بشري'],
    en: 'Happy to connect you with the team, tap “Start your project” and we’ll reach out, or start a voice call to talk to me live.',
    ar: 'يسعدني أن أصلك بالفريق. اضغط على زر بدء المشروع وسنتواصل معك، أو ابدأ مكالمة صوتية لتتحدّث معي مباشرةً.',
  },
];

const FALLBACK = {
  en: "Great question. I can help with MEP engineering, O&M, sp.ICE thermal storage, ERP, AI automation and pricing, which one matters most to you right now?",
  ar: 'سؤال ممتاز. يمكنني مساعدتك في الهندسة الكهروميكانيكية، والتشغيل والصيانة، وتخزين الطاقة الحرارية sp.ICE، وأنظمة ERP، والأتمتة بالذكاء الاصطناعي، والأسعار. أيٌّ من هذه الخدمات يهمّك أكثر في الوقت الحالي؟',
};

export function getReply(text, lang = 'en') {
  const q = (text || '').toLowerCase();
  const hit = INTENTS.find((intent) => intent.keys.some((k) => q.includes(k)));
  return hit ? hit[lang] : FALLBACK[lang];
}

// First message Maya shows when the chat opens.
export const GREETING_EN =
  "Hey! I'm Maya 👋 your AI solutions advisor. I'm trained on everything Safe Hands Digital does, ask me about MEP engineering, sp.ICE thermal storage, ERP, AI automation or pricing and I'll point you the right way.";

// Saudi-Arabic greeting spoken at the start of a voice call.
export const GREETING_AR =
  'أهلاً وسهلاً بك. أنا مايا، مستشارتك في التسويق بالذكاء الاصطناعي. تفضّل، كيف يمكنني خدمتك اليوم؟';
