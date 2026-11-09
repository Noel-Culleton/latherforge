import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getPostBySlug, getAllPosts, formatDate, amazonSearchUrl } from '@/lib/posts'
import { autolink } from '@/lib/autolink'
import { getRelatedPosts } from '@/lib/linkgraph'
import type { ReactNode } from 'react'
type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
const { slug } = await params
const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://latherforge.com/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://latherforge.com/blog/${post.slug}/`
    }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getRelatedPosts(post, 2)

  // Internal links: first mention of each topic links to its page, once per page.
  // Targets already linked explicitly in a section are skipped.
  const usedLinks = new Set<string>(post.sections.flatMap(s => (s.link ? [s.link.href] : [])))
  const pagePath = `/blog/${post.slug}/`
  const linked = (text: string): ReactNode[] =>
    autolink(text, usedLinks, pagePath).map((seg, k) =>
      seg.href ? <Link key={k} href={seg.href} style={{ color: '#5C3D2E', textDecoration: 'underline' }}>{seg.text}</Link> : seg.text
    )

  const faqSchema = post.faqs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  } : null

  return (
    <>
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Nav />

      <section style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #F0EAE0 100%)', paddingTop: '120px', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '760px', margin: '0 auto', padding: '0 2rem' }}>
          <Link href="/blog" style={{ fontSize: '0.8rem', color: '#9A8878', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2rem' }}>
            Back to Blog
          </Link>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A9E7E', background: 'rgba(122,158,126,0.12)', padding: '0.25rem 0.75rem' }}>
              {post.category}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#9A8878' }}>{formatDate(post.date)}</span>
            <span style={{ fontSize: '0.8rem', color: '#9A8878' }}>· {post.readTime}</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 500, color: '#3E2820', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            {post.title}
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#7A6E62', lineHeight: 1.75, borderLeft: '3px solid #C9A84C', paddingLeft: '1.25rem' }}>
            {post.description}
          </p>
        </div>
      </section>

      <section style={{ background: '#FAF7F2', padding: '3rem 0 5rem' }}>
        <div className="container" style={{ maxWidth: '760px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ borderTop: '1px solid #E8DFD0', paddingTop: '2.5rem' }}>
            {post.sections.some(s => s.shop) && (
              <p role="note" style={{ fontSize: '0.82rem', color: '#7A6E62', lineHeight: 1.6, background: '#FFFFFF', border: '1px solid #E8DFD0', padding: '0.75rem 1rem', marginBottom: '2rem' }}>
                <strong style={{ color: '#3E2820' }}>Affiliate disclosure:</strong> some links on this page are affiliate links. If you buy through them, LatherForge may earn a commission at no extra cost to you. As an Amazon Associate I earn from qualifying purchases. Links open Amazon search results, not a specific product we have tested; check reviews and safety ratings before you buy.
              </p>
            )}
            {post.sections.map((section, i) => (
              <div key={i} style={{ marginBottom: '2rem' }}>
                {section.heading && (
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 500, color: '#3E2820', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {section.heading}
                  </h2>
                )}
                {section.text && (
                  <p style={{ fontSize: '1rem', color: '#5C4A3A', lineHeight: 1.85, marginBottom: section.items ? '0.75rem' : '0' }}>
                    {linked(section.text)}
                  </p>
                )}
                {section.items && (
                  <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.5rem' }}>
                    {section.items.map((item, j) => (
                      <li key={j} style={{ fontSize: '0.95rem', color: '#5C4A3A', lineHeight: 1.8, marginBottom: '0.4rem' }}>
                        {linked(item)}
                      </li>
                    ))}
                  </ul>
                )}
                {section.videos?.map(v => (
                  <div key={v.id} style={{ marginTop: '1rem' }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', border: '1px solid #E8DFD0' }}>
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                        title={v.title}
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      />
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#7A6E62', marginTop: '0.4rem' }}>
                      <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener" style={{ color: '#7A6E62', textDecoration: 'underline' }}>{v.title} on YouTube</a>
                    </p>
                  </div>
                ))}
                {section.shop && (
                  <p style={{ marginTop: '0.6rem' }}>
                    <a href={amazonSearchUrl(section.shop.query)} target="_blank" rel="sponsored nofollow noopener" style={{ display: 'inline-block', fontSize: '0.88rem', fontWeight: 600, color: '#3E2820', background: '#F0EAE0', border: '1px solid #E8DFD0', padding: '0.45rem 0.8rem', textDecoration: 'none' }}>{section.shop.label} ↗</a>
                  </p>
                )}
                {section.link && (
                  <p style={{ marginTop: '0.75rem' }}>
                    {section.link.href.startsWith('http') ? (
                      <a href={section.link.href} target="_blank" rel="noopener" style={{ color: '#5C3D2E', fontWeight: 600, textDecoration: 'underline' }}>{section.link.label} ↗</a>
                    ) : (
                      <Link href={section.link.href} style={{ color: '#5C3D2E', fontWeight: 600, textDecoration: 'underline' }}>{section.link.label} →</Link>
                    )}
                  </p>
                )}
              </div>
            ))}
          </div>

          {post.faqs && post.faqs.length > 0 && (
            <div style={{ borderTop: '1px solid #E8DFD0', paddingTop: '2.5rem', marginTop: '1rem' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 500, color: '#3E2820', marginBottom: '1.5rem', lineHeight: 1.3 }}>
                Frequently Asked Questions
              </h2>
              {post.faqs.map((f, i) => (
                <div key={i} style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#3E2820', marginBottom: '0.4rem' }}>{f.q}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#5C4A3A', lineHeight: 1.8 }}>{linked(f.a)}</p>
                </div>
              ))}
            </div>
          )}

          <div style={{ margin: '3.5rem 0', background: '#EBF2EC', border: '1px solid rgba(122,158,126,0.3)', padding: '2.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A9E7E', marginBottom: '0.5rem' }}>Free Tool</p>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', color: '#3E2820', marginBottom: '0.75rem' }}>Free Soap Calculator</h3>
            <p style={{ color: '#5C4A3A', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>Calculate exact NaOH or KOH amounts for any recipe. No signup required.</p>
            <Link href="/lye-calculator" className="btn-primary">Use Free Calculator</Link>
          </div>
        </div>
      </section>

      {allPosts.length > 0 && (
        <section style={{ background: '#F0EAE0', padding: '4rem 0' }}>
          <div className="container" style={{ maxWidth: '760px', margin: '0 auto', padding: '0 2rem' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', color: '#3E2820', marginBottom: '2rem' }}>More from the Blog</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {allPosts.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#FAF7F2', border: '1px solid #E8DFD0', padding: '1.75rem' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A9E7E', marginBottom: '0.6rem' }}>{p.category}</p>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#3E2820', lineHeight: 1.4, marginBottom: '0.6rem' }}>{p.title}</h3>
                    <p style={{ fontSize: '0.8rem', color: '#C9A84C', fontWeight: 600 }}>{p.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}
