import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'
import { getReviewedRecipes } from '@/lib/recipes'

export const dynamic = 'force-static'

const BASE = 'https://latherforge.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const recipes = getReviewedRecipes()
  return [
    { url: `${BASE}/`, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/lye-calculator/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/sap-values/`, changeFrequency: 'monthly', priority: 0.8 },
    ...(recipes.length > 0 ? [{ url: `${BASE}/soap-recipes/`, changeFrequency: 'weekly' as const, priority: 0.8 }] : []),
    ...recipes.map(r => ({ url: `${BASE}/soap-recipes/${r.slug}/`, changeFrequency: 'monthly' as const, priority: 0.7 })),
    { url: `${BASE}/blog/`, changeFrequency: 'weekly', priority: 0.6 },
    ...getAllPosts().map(p => ({ url: `${BASE}/blog/${p.slug}/`, lastModified: p.date, changeFrequency: 'monthly' as const, priority: 0.6 })),
    { url: `${BASE}/free-soap-business-toolkit/`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/early-access/`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/privacy/`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/terms/`, changeFrequency: 'yearly', priority: 0.2 }
  ]
}
