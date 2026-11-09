import { describe, expect, it } from 'vitest'
import { posts } from '../posts'
import { recipes } from '../recipes'
import { RELATED_GUIDES, recipeGuideSlugs } from '../relatedGuides'

const slugs = new Set(posts.map(p => p.slug))
const check = (where: string, list: string[]) => {
  expect(list.length, `${where} needs 3-5 guides`).toBeGreaterThanOrEqual(3)
  expect(list.length).toBeLessThanOrEqual(5)
  expect(new Set(list).size, `${where} has duplicate guides`).toBe(list.length)
  for (const s of list) expect(slugs.has(s), `${where}: ${s} is not an article`).toBe(true)
}

describe('related guides on tool and recipe pages', () => {
  it('every tool page lists real, unique articles', () => {
    for (const [page, list] of Object.entries(RELATED_GUIDES)) check(page, list)
  })
  it('every recipe page lists real, unique articles', () => {
    for (const r of recipes) check(r.slug, recipeGuideSlugs(r))
  })
})
