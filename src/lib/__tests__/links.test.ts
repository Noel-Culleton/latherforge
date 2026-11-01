import { describe, expect, it } from 'vitest'
import { posts } from '../posts'
import { getRecipeBySlug } from '../recipes'

describe('blog links', () => {
  const recipeLinks = posts.flatMap(p =>
    p.sections.flatMap(s => (s.link?.href.startsWith('/soap-recipes/') ? [{ post: p.slug, href: s.link.href }] : [])),
  )

  it('has links into the recipe section', () => {
    expect(recipeLinks.length).toBeGreaterThan(0)
  })

  it.each(recipeLinks.map(l => [l.post, l.href]))('%s → %s points to a published recipe', (_post, href) => {
    const slug = href.replace(/^\/soap-recipes\//, '').replace(/\/$/, '')
    if (slug === '') return // the recipe index
    const recipe = getRecipeBySlug(slug)
    expect(recipe, `no recipe ${slug}`).toBeDefined()
    expect(recipe!.reviewed, `${slug} is not published`).toBe(true)
  })
})
