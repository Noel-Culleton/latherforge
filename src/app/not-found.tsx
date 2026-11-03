import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true }
}

export default function NotFound() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '68px' }}>
        <section style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #EBF2EC 100%)', padding: '6rem 0' }}>
          <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1rem' }}>404</p>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#3E2820', marginBottom: '1rem' }}>Page not found</h1>
            <p style={{ color: '#5C4A3A', lineHeight: 1.7, marginBottom: '2rem' }}>That page doesn’t exist or has moved. Try one of these instead.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/lye-calculator/" className="btn-primary">Soap Calculator</Link>
              <Link href="/soap-recipes/" className="btn-outline">Soap Recipes</Link>
              <Link href="/" className="btn-outline">Home</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
