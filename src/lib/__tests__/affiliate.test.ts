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

describe('embedded videos', () => {
  it('use valid 11-character YouTube ids', () => {
    for (const p of posts) for (const s of p.sections) for (const v of s.videos ?? []) {
      expect(v.id, `${p.slug}: ${v.title}`).toMatch(/^[A-Za-z0-9_-]{11}$/)
    }
  })
})
