import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getPostBySlug, getAllPosts, formatDate } from '@/lib/posts'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
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

function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()

    if (!line) { i++; continue }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: 500, color: '#3E2820',
          marginTop: '2.5rem', marginBottom: '1rem', lineHeight: 1.3
        }}>
          {line.replace('## ', '')}
        </h2>
      )
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={i} style={{ fontSize: '1rem', color: '#3E2820', fontWeight: 600, marginBottom: '0.5rem', lineHeight: 1.75 }}>
          {line.replace(/\*\*/g, '')}
        </p>
      )
    } else if (line.startsWith('- ')) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        listItems.push(lines[i].trim().replace('- ', ''))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} style={{ margin: '1rem 0 1.5rem', paddingLeft: '1.5rem' }}>
          {listItems.map((item, j) => {
            const parts = item.split(/\*\*(.*?)\*\*/)
            return (
              <li key={j} style={{ fontSize: '0.95rem', color: '#5C4A3A', lineHeight: 1.8, marginBottom: '0.4rem' }}>
                {parts.map((part, k) => k % 2 === 1 ? <strong key={k}>{part}</strong> : part)}
              </li>
            )
          })}
        </ul>
      )
      continue
    } else {
      const parts = line.split(/\*\*(.*?)\*\*/)
      elements.push(
        <p key={i} style={{ fontSize: '1rem', color: '#5C4A3A', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          {parts.map((part, j) => j % 2 === 1 ? <strong key={j} style={{ color: '#3E2820' }}>{part}</strong> : part)}
        </p>
      )
    }
    i++
  }
  return elements
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const allPosts = getAllPosts().filter(p => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <Nav />

      {/* ARTICLE HEADER */}
      <section style={{
        background: 'linear-gradient(160deg, #FAF7F2 0%, #F0EAE0 100%)',
        paddingTop: '120px', paddingBottom: '3rem'
      }}>
        <div className="container" style={{ maxWidth: '760px', margin: '0 auto', padding: '0 2rem' }}>
          <Link href="/blog" style={{
            fontSize: '0.8rem', color: '#9A8878', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2rem'
          }}>
            ← Back to Blog
          </Link>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{
              fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#7A9E7E',
              background: 'rgba(122,158,126,0.12)', padding: '0.25rem 0.75rem'
            }}>
              {post.category}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#9A8878' }}>{formatDate(post.date)}</span>
            <span style={{ fontSize: '0.8rem', color: '#9A8878' }}>· {post.readTime}</span>
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 500, color: '#3E2820', lineHeight: 1.2, marginBottom: '1.25rem'
          }}>
            {post.title}
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#7A6E62', lineHeight: 1.75, borderLeft: '3px solid #C9A84C', paddingLeft: '1.25rem' }}>
            {post.description}
          </p>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section style={{ background: '#FAF7F2', padding: '3rem 0 5rem' }}>
        <div className="container" style={{ maxWidth: '760px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ borderTop: '1px solid #E8DFD0', paddingTop: '2.5rem' }}>
            {renderContent(post.content)}
          </div>

          {/* INLINE CTA */}
          <div style={{
            margin: '3.5rem 0',
            background: '#EBF2EC',
            border: '1px solid rgba(122,158,126,0.3)',
            padding: '2.5rem',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A9E7E', marginBottom: '0.5rem' }}>
              Free Tool
            </p>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', color: '#3E2820', marginBottom: '0.75rem' }}>
              Free Lye Calculator
            </h3>
            <p style={{ color: '#5C4A3A', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Calculate exact NaOH or KOH amounts for any recipe. No signup required.
            </p>
            <Link href="/lye-calculator" className="btn-primary">Use Free Calculator</Link>
          </div>
        </div>
      </section>

      {/* MORE POSTS */}
      {allPosts.length > 0 && (
        <section style={{ background: '#F0EAE0', padding: '4rem 0' }}>
          <div className="container" style={{ maxWidth: '760px', margin: '0 auto', padding: '0 2rem' }}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem',
              color: '#3E2820', marginBottom: '2rem'
            }}>
              More from the Blog
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {allPosts.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: '#FAF7F2', border: '1px solid #E8DFD0',
                    padding: '1.75rem', height: '100%',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                      ;(e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(92,61,46,0.08)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                      ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                    }}
                  >
                    <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A9E7E', marginBottom: '0.6rem' }}>
                      {p.category}
                    </p>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#3E2820', lineHeight: 1.4, marginBottom: '0.6rem' }}>
                      {p.title}
                    </h3>
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
