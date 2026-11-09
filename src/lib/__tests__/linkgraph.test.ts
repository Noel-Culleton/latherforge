import { describe, expect, it } from 'vitest'
import { getLinkRules } from '../autolink'
import { getInboundLinks, getOutboundLinks, getRelatedPosts, postPath } from '../linkgraph'
import { posts } from '../posts'

// Guards against orphaned articles. If one of these fails after adding a post:
// 1. add a phrase rule for the new article in src/lib/autolink.ts, and
// 2. make sure at least MIN_INBOUND older articles mention one of those phrases.
const MIN_INBOUND = 2

describe('internal link graph', () => {
  it('every article has an autolink phrase rule pointing at it', () => {
    const targets = new Set(getLinkRules().map(r => r.href))
    for (const p of posts) {
      expect(targets.has(postPath(p.slug)), `no autolink rule targets ${postPath(p.slug)}`).toBe(true)
    }
  })

  it(`every article is linked from at least ${MIN_INBOUND} other articles`, () => {
    for (const [path, from] of Array.from(getInboundLinks())) {
      expect(from.length, `${path} is only linked from: [${from.join(', ')}]`).toBeGreaterThanOrEqual(MIN_INBOUND)
    }
  })

  it('every article links out to at least 2 other internal pages', () => {
    for (const p of posts) {
      expect(getOutboundLinks(p).size, `${p.slug} has too few internal links`).toBeGreaterThanOrEqual(2)
    }
  })

  it('related posts never include the article itself and are topic-based', () => {
    for (const p of posts) {
      const related = getRelatedPosts(p, 2)
      expect(related).toHaveLength(2)
      expect(related.map(r => r.slug)).not.toContain(p.slug)
    }
    const saltBar = posts.find(p => p.slug === 'what-is-a-salt-bar')!
    const other = posts.find(p => p.slug === 'selling-soap-in-canada')!
    expect(getRelatedPosts(saltBar).map(r => r.slug)).not.toEqual(getRelatedPosts(other).map(r => r.slug))
  })
})
