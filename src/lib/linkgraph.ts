import { autolink, getLinkRules } from './autolink'
import { posts, type Post } from './posts'

// The internal link graph for blog articles: which pages each article links to,
// both from explicit section links and from automatic phrase links.

const norm = (p: string) => (p.endsWith('/') ? p : `${p}/`)
export const postPath = (slug: string) => `/blog/${slug}/`

/** Every internal page an article links to in its body (explicit links + autolinks). */
export function getOutboundLinks(post: Post): Set<string> {
  const rules = getLinkRules()
  const used = new Set<string>(post.sections.flatMap(s => (s.link ? [s.link.href] : [])))
  const path = postPath(post.slug)
  // Same order the page renders in: section text, then its items, then FAQ answers.
  for (const s of post.sections) {
    if (s.text) autolink(s.text, used, path, rules)
    for (const item of s.items ?? []) autolink(item, used, path, rules)
  }
  for (const f of post.faqs ?? []) autolink(f.a, used, path, rules)
  return new Set(Array.from(used).filter(h => h.startsWith('/')).map(norm))
}

/** For each article path, the slugs of other articles that link to it in their body. */
export function getInboundLinks(): Map<string, string[]> {
  const inbound = new Map<string, string[]>(posts.map(p => [postPath(p.slug), []]))
  for (const p of posts) {
    for (const href of Array.from(getOutboundLinks(p))) {
      if (href === postPath(p.slug)) continue
      inbound.get(href)?.push(p.slug)
    }
  }
  return inbound
}

/**
 * Related articles for the "More articles" box: articles this one links to or that link
 * back score highest, then articles sharing link targets (same topics), then newest first.
 */
export function getRelatedPosts(post: Post, count = 2): Post[] {
  const out = getOutboundLinks(post)
  const self = postPath(post.slug)
  return posts
    .filter(p => p.slug !== post.slug)
    .map(p => {
      const theirs = getOutboundLinks(p)
      let score = 0
      if (out.has(postPath(p.slug))) score += 3
      if (theirs.has(self)) score += 2
      for (const h of Array.from(theirs)) if (out.has(h) && h.startsWith('/blog/')) score += 1
      return { p, score }
    })
    .sort((a, b) => b.score - a.score || new Date(b.p.date).getTime() - new Date(a.p.date).getTime())
    .slice(0, count)
    .map(x => x.p)
}
