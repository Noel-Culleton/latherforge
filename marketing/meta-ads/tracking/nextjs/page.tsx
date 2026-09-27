// Copy to src/app/thank-you/page.tsx (with ThankYouClient.tsx beside it).
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ThankYouClient from './ThankYouClient'

export const metadata: Metadata = {
  title: "You're on the list",
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://latherforge.com/thank-you/' }
}

export default function ThankYouPage() {
  return (
    <>
      <Nav />

      <main style={{ paddingTop: '68px' }}>
        <section style={{
          background: 'linear-gradient(160deg, #3E2820 0%, #5C3D2E 100%)',
          padding: '6rem 0 5rem', textAlign: 'center', minHeight: '70vh'
        }}>
          <div className="container" style={{ maxWidth: '600px' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.4)',
              color: '#E8C97A', fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '0.4rem 1rem', marginBottom: '1.75rem'
            }}>
              You&apos;re on the list
            </div>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 500,
              color: '#FAF7F2', lineHeight: 1.15, marginBottom: '1.25rem'
            }}>
              Thank you, <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>maker</em>
            </h1>
            <p style={{ color: '#FAF7F2', fontSize: '1.05rem', marginBottom: '1rem' }}>
              Live 1 January 2027, waitlist members get 14 days free.
            </p>
            <p style={{ color: '#C9B49A', fontSize: '1.05rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '2rem' }}>
              We&apos;ll email you when LatherForge opens. In the meantime, the free lye calculator is ready to use.
            </p>
            <a href="/lye-calculator/" className="btn-primary">Use Free Lye Calculator</a>
          </div>
        </section>
      </main>

      <ThankYouClient />
      <Footer />
    </>
  )
}
