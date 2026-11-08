import { describe, expect, it } from 'vitest'
import { autolink, getLinkRules } from '../autolink'
import { posts } from '../posts'

const links = (segs: { href?: string }[]) => segs.filter(s => s.href).map(s => s.href)

describe('autolink', () => {
  it('links the first mention only', () => {
    const used = new Set<string>()
    const a = autolink('You need a CPSR. Every CPSR costs money.', used, '/blog/x/')
    expect(links(a)).toEqual(['/cpsr-for-soap/'])
    const b = autolink('Another CPSR mention.', used, '/blog/x/')
    expect(links(b)).toEqual([])
  })

  it('keeps the original text intact', () => {
    const text = 'Check SAP values, then use the lye calculator for hot process soap.'
    const segs = autolink(text, new Set(), '/blog/x/')
    expect(segs.map(s => s.text).join('')).toBe(text)
    expect(links(segs)).toEqual(['/sap-values/', '/lye-calculator/', '/blog/how-to-make-hot-process-soap/'])
  })

  it('is case-insensitive and respects word boundaries', () => {
    expect(links(autolink('Liquid Soap is fun', new Set(), '/blog/x/'))).toEqual(['/blog/how-to-make-liquid-soap/'])
    expect(links(autolink('CPSRs and XCPSR', new Set(), '/blog/x/'))).toEqual([])
  })

  it('never links a page to itself', () => {
    expect(links(autolink('Our liquid soap guide', new Set(), '/blog/how-to-make-liquid-soap/'))).toEqual([])
    expect(links(autolink('Our liquid soap guide', new Set(), '/blog/how-to-make-liquid-soap'))).toEqual([])
  })

  it('every link target is a real page', () => {
    const postPaths = new Set(posts.map(p => `/blog/${p.slug}/`))
    const staticPages = new Set(['/cpsr-for-soap/', '/sap-values/', '/lye-calculator/', '/etsy-pricing-calculator/', '/soap-recipes/', '/free-soap-journal/'])
    for (const r of getLinkRules()) {
      expect(postPaths.has(r.href) || staticPages.has(r.href), `${r.href} is not a page`).toBe(true)
    }
  })
})
