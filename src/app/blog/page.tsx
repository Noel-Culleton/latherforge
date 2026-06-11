import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getAllPosts, formatDate } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Soap Making Blog — Recipes, Tips & Business Advice',
  description: 'Free guides and tutorials for handmade soap makers. Learn cold process soap making, lye safety, Etsy selling, pricing and running a soap business.',
  alternates: { canonical: 'https://latherforge.com/blog' }
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(160deg, #FAF7F2 0%, #F0EAE0 100%)',
        paddingTop: '120px',
        paddingBottom: '4rem'
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{
            fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1rem'
          }}>
            The LatherForge Blog
          </p>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 500, color: '#3E2820', lineHeight: 1.2, marginBottom: '1rem'
          }}>
            Soap Making Guides,<br />
            <em style={{ color: '#7A9E7E' }}>Tips & Business Advice</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#5C4A3A', lineHeight: 1.8, maxWidth: '560px' }}>
            Free tutorials and practical guides for handmade soap makers — from beginner recipes to running a profitable soap business.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section style={{ background: '#FAF7F2', padding: '4rem 0 6rem' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {posts.map((post, i) => (
              <article key={post.slug} style={{
                borderBottom: '1px solid #E8DFD0',
                padding: i === 0 ? '0 0 3rem' : '3rem 0'
              }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
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
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <h2 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 500, color: '#3E2820', lineHeight: 1.3,
                    marginBottom: '0.75rem',
                    transition: 'color 0.2s'
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#5C3D2E')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#3E2820')}
                  >
                    {post.title}
                  </h2>
                </Link>
                <p style={{ fontSize: '0.95rem', color: '#7A6E62', lineHeight: 1.75, marginBottom: '1.25rem', maxWidth: '600px' }}>
                  {post.description}
                </p>
                <Link href={`/blog/${post.slug}`} style={{
                  fontSize: '0.85rem', fontWeight: 600, color: '#C9A84C',
                  textDecoration: 'none', letterSpacing: '0.04em',
                  borderBottom: '1px solid rgba(201,168,76,0.4)',
                  paddingBottom: '1px'
                }}>
                  Read article →
                </Link>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            marginTop: '4rem', background: '#3E2820', padding: '3rem',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '0.75rem' }}>
              LatherForge — Launching January 2027
            </p>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', color: '#FAF7F2', marginBottom: '0.75rem' }}>
              The Business OS for Soap Makers
            </h3>
            <p style={{ color: '#A89882', marginBottom: '1.75rem', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Recipes, batches, inventory, costing and Etsy listings — all in one platform.
            </p>
            <Link href="/early-access" className="btn-primary">Get Early Access</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
