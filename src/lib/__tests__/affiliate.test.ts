import { describe, expect, it } from 'vitest'
import { amazonSearchUrl, posts } from '../posts'

describe('amazon affiliate links', () => {
  it('builds a tagged, encoded search URL', () => {
    expect(amazonSearchUrl('nitrile gloves')).toBe('https://www.amazon.com/s?k=nitrile%20gloves&tag=latherforge-20')
  })

  it('every shop link has a label and a query', () => {
    const shops = posts.flatMap(p => p.sections.flatMap(s => (s.shop ? [s.shop] : [])))
    expect(shops.length).toBeGreaterThan(0)
    for (const s of shops) {
      expect(s.label).toMatch(/Amazon/)
      expect(s.query.trim().length).toBeGreaterThan(0)
    }
  })
})
