// ─── Maya - lightweight rule-based responder ──────────────────────────────────
// Returns a reply for a user message in the requested language. This is a
// client-side demo brain (no external LLM). The contract - getReply(text, lang)
// → string - is intentionally simple so it can be swapped for a real API call
// (OpenAI / Anthropic / your own endpoint) without touching the UI.

const INTENTS = [
  {
    keys: ['hi', 'hello', 'hey', 'salam', 'salaam', 'assalam', 'hola', 'مرحبا', 'السلام', 'هلا', 'اهلا', 'أهلا'],
    en: "Hi! I'm Maya, your AI marketing strategist. Ask me about SEO, paid ads, web design, social media, or pricing.",
    ar: 'أهلاً وسهلاً بك. أنا مايا، خبيرتك في التسويق بالذكاء الاصطناعي. كيف يمكنني مساعدتك اليوم؟ يمكنك سؤالي عن تحسين محركات البحث، أو الإعلانات المدفوعة، أو تصميم المواقع.',
  },
  {
    keys: ['seo', 'rank', 'google search', 'organic', 'search engine', 'سيو', 'بحث', 'ظهور'],
    en: 'Our AI SEO gets you ranking on Google, ChatGPT and Perplexity. We blend traditional SEO with AI-search optimization so you get found wherever people search.',
    ar: 'في خدمة تحسين محركات البحث، نعمل على رفع ترتيب موقعك في جوجل، وفي محركات الذكاء الاصطناعي مثل تشات جي بي تي وبيربلكسيتي. نجمع بين الأساليب التقليدية والحديثة لكي تظهر أينما يبحث عملاؤك.',
  },
  {
    keys: ['ad', 'ads', 'paid', 'google ads', 'meta', 'facebook', 'ppc', 'campaign', 'اعلان', 'إعلان', 'حملة'],
    en: 'We run performance ad campaigns on Meta and Google engineered for measurable ROI, our average client sees a 320% return.',
    ar: 'ندير حملات إعلانية مدفوعة على منصتي ميتا وجوجل، ومصممة لتحقيق عائد واضح وقابل للقياس. متوسط العائد لدى عملائنا يصل إلى ثلاثمئة وعشرين بالمئة.',
  },
  {
    keys: ['web', 'website', 'design', 'landing', 'redesign', 'موقع', 'تصميم', 'الموقع'],
    en: 'We build conversion-first websites and landing pages designed to turn visitors into paying customers, fast, modern and on-brand.',
    ar: 'نُصمّم مواقع وصفحات هبوط تركّز على تحويل الزوار إلى عملاء يدفعون. مواقع سريعة وعصرية ومتوافقة تماماً مع هوية علامتك التجارية.',
  },
  {
    keys: ['social', 'tiktok', 'instagram', 'content', 'reels', 'سوشيال', 'محتوى', 'تيك توك', 'انستقرام'],
    en: 'Our social team creates scroll-stopping content and manages your community across every platform to grow a real, engaged audience.',
    ar: 'يُنشئ فريق التواصل الاجتماعي لدينا محتوى جذّاباً يوقف التمرير، ويدير مجتمعك على جميع المنصّات لبناء جمهور حقيقي ومتفاعل.',
  },
  {
    keys: ['price', 'pricing', 'cost', 'budget', 'how much', 'سعر', 'تكلفة', 'الاسعار', 'الأسعار', 'ميزانية'],
    en: 'Pricing depends on your goals and scope. Tell me your niche and what you need, or hit “Start your project” and a strategist will prepare a tailored quote.',
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
  en: "Great question. I can help with SEO, paid ads, web design, social media, AI automation and pricing, which one matters most to you right now?",
  ar: 'سؤال ممتاز. يمكنني مساعدتك في تحسين محركات البحث، والإعلانات المدفوعة، وتصميم المواقع، والتواصل الاجتماعي، والأتمتة بالذكاء الاصطناعي، والأسعار. أيٌّ من هذه الخدمات يهمّك أكثر في الوقت الحالي؟',
};

export function getReply(text, lang = 'en') {
  const q = (text || '').toLowerCase();
  const hit = INTENTS.find((intent) => intent.keys.some((k) => q.includes(k)));
  return hit ? hit[lang] : FALLBACK[lang];
}

// First message Maya shows when the chat opens.
export const GREETING_EN =
  "Hey! I'm Maya 👋 your AI marketing strategist. I'm trained on everything Safe Hands Digital does, ask me about SEO, paid ads, web design, social growth or pricing and I'll point you the right way.";

// Saudi-Arabic greeting spoken at the start of a voice call.
export const GREETING_AR =
  'أهلاً وسهلاً بك. أنا مايا، مستشارتك في التسويق بالذكاء الاصطناعي. تفضّل، كيف يمكنني خدمتك اليوم؟';
