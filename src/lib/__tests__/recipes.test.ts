import { describe, expect, it } from 'vitest'
import { OILS } from '../soap'
import { getRecipeBySlug, recipeBatch, recipes } from '../recipes'

describe('recipes', () => {
  it('slugs are unique', () => {
    const slugs = recipes.map(r => r.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it.each(recipes.map(r => [r.slug, r] as const))('%s is a valid, safe recipe', (_slug, r) => {
    expect(r.oils.reduce((s, o) => s + o.pct, 0)).toBe(100)
    for (const o of r.oils) {
      expect(OILS, o.oil).toHaveProperty([o.oil])
      expect(o.pct).toBeGreaterThan(0)
    }
    expect(r.superfat).toBeGreaterThanOrEqual(0)
    expect(r.superfat).toBeLessThanOrEqual(20)

    const { oils, result } = recipeBatch(r, 1000)
    expect(oils.reduce((s, o) => s + parseFloat(o.weight), 0)).toBeCloseTo(1000, 0)
    expect(result.totalOil).toBeCloseTo(1000, 0)
    // Lye as a share of oil weight: NaOH bars ~9–19%, KOH liquid soap ~14–28%.
    const ratio = result.lye / result.totalOil
    if (r.lyeType === 'NaOH') {
      expect(ratio).toBeGreaterThan(0.09)
      expect(ratio).toBeLessThan(0.19)
    } else {
      expect(ratio).toBeGreaterThan(0.14)
      expect(ratio).toBeLessThan(0.28)
    }
  })

  it('getRecipeBySlug finds known slugs and returns undefined otherwise', () => {
    expect(getRecipeBySlug('castile-soap-recipe')?.name).toMatch(/Castile/)
    expect(getRecipeBySlug('nope')).toBeUndefined()
  })
})
