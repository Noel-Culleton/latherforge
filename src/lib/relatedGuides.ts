import { getPostBySlug, type Post } from './posts'
import type { SoapRecipe } from './recipes'

// Blog articles shown in the "Related guides" block on tool and recipe pages.
// These pages are hand-written and do not use the autolinker, so this is how
// they link into the blog. A test checks every slug is a real article.

export const RELATED_GUIDES: Record<string, string[]> = {
  '/lye-calculator/': ['lye-calculator-guide', 'cold-process-soap-beginners-guide', 'best-oils-for-soap-making', 'cold-process-soap-problems'],
  '/sap-values/': ['lye-calculator-guide', 'best-oils-for-soap-making', 'what-is-lather-in-soap', 'how-to-make-liquid-soap'],
  '/etsy-pricing-calculator/': ['etsy-soap-shop-tips', 'soap-gift-sets', 'selling-handmade-soap-legal-requirements', 'selling-soap-in-canada'],
  '/cpsr-for-soap/': ['selling-handmade-soap-legal-requirements', 'etsy-soap-shop-tips', 'soap-gift-sets', 'selling-soap-in-canada'],
  '/free-soap-journal/': ['how-long-does-soap-need-to-cure', 'cold-process-soap-problems', 'cold-process-soap-beginners-guide', 'selling-handmade-soap-legal-requirements'],
  '/soap-recipes/': ['cold-process-soap-beginners-guide', 'soap-making-tools', 'best-oils-for-soap-making', 'how-long-does-soap-need-to-cure']
}

const RECIPE_DEFAULT = ['cold-process-soap-beginners-guide', 'how-long-does-soap-need-to-cure', 'cold-process-soap-problems', 'soap-making-tools']

// Recipe-specific guide shown first, ahead of the defaults.
const RECIPE_FIRST: Record<string, string> = {
  'salt-bar-soap-recipe': 'what-is-a-salt-bar',
  'hot-process-soap-recipe': 'how-to-make-hot-process-soap',
  'liquid-soap-recipe': 'how-to-make-liquid-soap',
  'castile-soap-recipe': 'best-oils-for-soap-making',
  'bastille-soap-recipe': 'best-oils-for-soap-making'
}

export function recipeGuideSlugs(recipe: Pick<SoapRecipe, 'slug'>): string[] {
  const first = RECIPE_FIRST[recipe.slug]
  return first ? [first, ...RECIPE_DEFAULT.slice(0, 3)] : RECIPE_DEFAULT
}

export function resolveGuides(slugs: string[]): Post[] {
  return slugs.map(s => getPostBySlug(s)).filter((p): p is Post => Boolean(p))
}
