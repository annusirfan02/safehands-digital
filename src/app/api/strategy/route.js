const REVENUE = ['$10K/mo', '$50K/mo', '$100K/mo', '$500K/mo', '$1M+/mo'];

// Smart fallback used when no ANTHROPIC_API_KEY is configured.
// Plain, everyday language — and it uses every answer the customer gave.
function template(d) {
  const ind = (d.industry || 'your').toString().toLowerCase();
  const rev = REVENUE[d.revenueIdx] ?? '$100K/mo';
  const tl = d.timeline || '6 months';
  const name = (d.name && d.name.trim()) || 'your brand';
  const ch = Array.isArray(d.challenges) ? d.challenges : [];
  const hasTraffic = ch.some((c) => /traffic|social|reach|aware|market/i.test(c));
  const hasConv = ch.some((c) => /conversion|roi|sales|lead|website|budget/i.test(c));
  const chText = ch.length ? ch.slice(0, 2).join(' and ').toLowerCase() : 'getting found online';

  return [
    `First, we'll build ${name} a fast, clean website made for ${ind} customers. It will load quickly and make it easy for people to buy — so you're set up to reach ${rev}.`,
    hasTraffic
      ? `Next, we'll get more of the right people to see ${name}. We'll run simple social posts and ads that speak to your ${ind} audience, so more visitors come in every week.`
      : `Next, we'll turn more of your visitors into buyers. We'll fix the spots where people drop off and add easy steps that guide them to checkout.`,
    hasConv
      ? `Finally, we'll add an AI assistant that answers questions and books calls for you 24/7. It handles ${chText} so you stop chasing leads — and we aim to get there in ${tl}.`
      : `Finally, we'll set up an AI assistant and automatic follow-ups that reply to every lead day and night. This tackles ${chText}, with a plan to reach your goal in ${tl}.`,
  ];
}

export async function POST(req) {
  let d = {};
  try { d = await req.json(); } catch (e) {}

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return Response.json({ points: template(d), source: 'template' });

  try {
    const prompt =
      `You are a friendly growth strategist at Safe Hands Digital, an AI-first marketing agency. ` +
      `Write EXACTLY 3 strategy points for this client (1–2 sentences each).\n\n` +
      `RULES:\n` +
      `- Use very simple, everyday English. Write like you're explaining to a normal business owner, not a marketer. No jargon, no buzzwords (avoid words like "deploy", "funnel", "Core Web Vitals", "full-funnel", "leverage", "optimize", "ROI"). A 12-year-old should understand it.\n` +
      `- Use EVERY answer below. Point 1 should reflect their industry and revenue target, point 2 should address their challenges, point 3 should mention the timeline. Reference their brand name naturally.\n` +
      `- Be warm and clear, not hype-y. Short words, short sentences.\n` +
      `- Return ONLY a raw JSON array of 3 strings, nothing else.\n\n` +
      `Brand name: ${d.name || 'N/A'}\n` +
      `Industry: ${d.industry || 'N/A'}\n` +
      `Biggest challenges: ${(d.challenges || []).join(', ') || 'N/A'}\n` +
      `Revenue target: ${REVENUE[d.revenueIdx] ?? 'N/A'}\n` +
      `Timeline: ${d.timeline || 'N/A'}`;

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 700,
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    const j = await res.json();
    const text = j?.content?.[0]?.text || '';
    const arr = JSON.parse(text.slice(text.indexOf('['), text.lastIndexOf(']') + 1));
    if (Array.isArray(arr) && arr.length >= 3) {
      return Response.json({ points: arr.slice(0, 3).map(String), source: 'ai' });
    }
  } catch (e) {}

  return Response.json({ points: template(d), source: 'template' });
}
