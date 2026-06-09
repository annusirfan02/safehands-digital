import { SITE_INDEX } from './siteIndex.data';

// Common filler words we don't want to match on.
const STOP_WORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'to', 'for', 'of', 'in', 'on', 'is', 'are',
  'do', 'you', 'i', 'we', 'my', 'me', 'with', 'how', 'what', 'can', 'about',
  'your', 'tell', 'show', 'need', 'want', 'help',
]);

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s/]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP_WORDS.has(t));
}

/**
 * Lightweight keyword + substring scorer over the site index.
 * Returns matches sorted by relevance (best first). Empty array = no match.
 */
export function searchSite(query) {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const scored = SITE_INDEX.map((item) => {
    const haystackTitle = item.title.toLowerCase();
    const haystackKeywords = item.keywords.join(' ').toLowerCase();
    const haystackDesc = item.description.toLowerCase();

    let score = 0;
    for (const token of tokens) {
      if (haystackTitle.includes(token)) score += 6;
      if (item.keywords.some((k) => k.toLowerCase() === token)) score += 5;
      if (haystackKeywords.includes(token)) score += 3;
      if (haystackDesc.includes(token)) score += 1;
    }
    return { item, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.item)
    .slice(0, 5);
}
