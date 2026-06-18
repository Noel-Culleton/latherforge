import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getPostBySlug, getAllPosts, formatDate } from '@/lib/posts'
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
    alternates: { canonical: `https://latherforge.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://latherforge.com/blog/${post.slug}`
    }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllPosts().filter(p => p.slug !== post.slug).slice(0, 2)

  return (
    <>
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
            {post.sections.map((section, i) => (
              <div key={i} style={{ marginBottom: '2rem' }}>
                {section.heading && (
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 500, color: '#3E2820', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {section.heading}
                  </h2>
                )}
                <p style={{ fontSize: '1rem', color: '#5C4A3A', lineHeight: 1.85, marginBottom: section.items ? '0.75rem' : '0' }}>
                  {section.text}
                </p>
                {section.items && (
                  <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.5rem' }}>
                    {section.items.map((item, j) => (
                      <li key={j} style={{ fontSize: '0.95rem', color: '#5C4A3A', lineHeight: 1.8, marginBottom: '0.4rem' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div style={{ margin: '3.5rem 0', background: '#EBF2EC', border: '1px solid rgba(122,158,126,0.3)', padding: '2.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A9E7E', marginBottom: '0.5rem' }}>Free Tool</p>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', color: '#3E2820', marginBottom: '0.75rem' }}>Free Lye Calculator</h3>
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
