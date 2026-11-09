import Link from 'next/link'
import { RELATED_GUIDES, resolveGuides } from '@/lib/relatedGuides'

type Props = { page?: string; slugs?: string[] }

/** "Related guides" block linking a tool or recipe page to blog articles. */
export default function RelatedGuides({ page, slugs }: Props) {
  const guides = resolveGuides(slugs ?? (page ? RELATED_GUIDES[page] ?? [] : []))
  if (guides.length === 0) return null
  return (
    <section style={{ background: '#F0EAE0', padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '760px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', color: '#3E2820', marginBottom: '1.25rem' }}>Related guides</h2>
        <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
          {guides.map(p => (
            <li key={p.slug} style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '0.4rem' }}>
              <Link href={`/blog/${p.slug}/`} style={{ color: '#5C3D2E', textDecoration: 'underline' }}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
