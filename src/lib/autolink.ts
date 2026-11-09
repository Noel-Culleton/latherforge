import { getReviewedRecipes } from './recipes'

// Automatic internal links for article text.
// The first mention of each topic on a page links to that topic's own page.
// Each target is linked at most once per page, and a page never links to itself.

export type LinkRule = { href: string; pattern: RegExp }
export type Segment = { text: string; href?: string }

const rule = (href: string, terms: string[]): LinkRule => ({
  href,
  // Longest terms first so "cosmetic product safety report" wins over shorter overlaps.
  pattern: new RegExp(`\\b(?:${[...terms].sort((a, b) => b.length - a.length).map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'i')
})

const BASE_RULES: LinkRule[] = [
  rule('/cpsr-for-soap/', ['CPSR', 'Cosmetic Product Safety Report', 'safety assessment']),
  rule('/sap-values/', ['SAP values', 'SAP value', 'saponification values', 'saponification value']),
  rule('/lye-calculator/', ['lye calculator', 'soap calculator']),
  rule('/etsy-pricing-calculator/', ['Etsy fees', 'Etsy fee', 'Etsy pricing']),
  rule('/blog/how-long-does-soap-need-to-cure/', ['cure times', 'cure time', 'curing time']),
  rule('/blog/how-to-make-hot-process-soap/', ['hot process soap', 'hot process']),
  rule('/blog/how-to-make-liquid-soap/', ['liquid soap']),
  rule('/blog/cold-process-soap-beginners-guide/', ['cold process soap']),
  rule('/blog/cold-process-soap-problems/', ['soap problems', 'soda ash', 'seized soap', 'glycerin rivers']),
  rule('/blog/soap-making-tools/', ['soap making tools', 'soap making equipment']),
  rule('/blog/best-stick-blenders-for-soap-making/', ['stick blenders', 'stick blender', 'immersion blender']),
  rule('/blog/best-oils-for-soap-making/', ['oils for soap making', 'soap making oils', 'best oils']),
  rule('/blog/best-essential-oils-for-soap/', ['essential oils for soap', 'essential oil']),
  rule('/blog/best-soap-making-kits-for-beginners/', ['soap making kits', 'soap making kit', 'melt and pour']),
  rule('/blog/best-candle-making-kits-for-beginners/', ['candle making kits', 'candle making kit']),
  rule('/free-soap-journal/', ['batch records', 'batch record', 'soap journal', 'batch journal']),
  rule('/blog/selling-handmade-soap-legal-requirements/', ['sell soap legally', 'selling soap legally', 'selling handmade soap legally'])
]

export function getLinkRules(): LinkRule[] {
  const rules = [...BASE_RULES]
  if (getReviewedRecipes().length > 0) rules.push(rule('/soap-recipes/', ['soap recipes']))
  return rules
}

const norm = (p: string) => (p.endsWith('/') ? p : `${p}/`)

/**
 * Split text into plain and linked segments.
 * `used` is shared across a whole page so each target is linked once.
 */
export function autolink(text: string, used: Set<string>, currentPath: string, rules: LinkRule[] = getLinkRules()): Segment[] {
  const self = norm(currentPath)
  const out: Segment[] = []
  let rest = text
  for (;;) {
    let best: { index: number; length: number; href: string } | null = null
    for (const r of rules) {
      if (used.has(r.href) || norm(r.href) === self) continue
      const m = r.pattern.exec(rest)
      if (m && (best === null || m.index < best.index)) best = { index: m.index, length: m[0].length, href: r.href }
    }
    if (!best) break
    if (best.index > 0) out.push({ text: rest.slice(0, best.index) })
    out.push({ text: rest.slice(best.index, best.index + best.length), href: best.href })
    used.add(best.href)
    rest = rest.slice(best.index + best.length)
  }
  if (rest) out.push({ text: rest })
  return out
}
