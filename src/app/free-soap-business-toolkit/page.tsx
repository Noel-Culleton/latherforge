import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Free Soap Business Toolkit: Startup Checklist and Pricing Worksheet',
  description: 'Free printable toolkit for soap makers: a step-by-step startup checklist and a soap pricing worksheet with a worked example. Sign up and download instantly.',
  alternates: { canonical: 'https://latherforge.com/free-soap-business-toolkit/' }
}

const contents = [
  {
    title: 'Soap Business Startup Checklist',
    desc: 'Every step from consistent recipes to legal requirements, registration, insurance and record keeping, in the right order.'
  },
  {
    title: 'Soap Pricing Worksheet',
    desc: 'Work out the true cost of a bar, including your time and overheads, then check your retail, Etsy and wholesale prices.'
  },
  {
    title: 'Worked Example',
    desc: 'A real recipe costed step by step, so you can see how batch size changes your profit per bar.'
  }
]

export default function FreeToolkitPage() {
  return (
    <>
      <Nav />

      <main style={{ paddingTop: '68px' }}>
        <section style={{ background: 'linear-gradient(160deg, #3E2820 0%, #5C3D2E 100%)', padding: '5rem 0 4rem', textAlign: 'center' }}>
          <div className="container">
            <div style={{
              display: 'inline-block', background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.4)',
              color: '#E8C97A', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '0.4rem 1rem', marginBottom: '1.75rem'
            }}>
              Free Printable Toolkit
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, color: '#FAF7F2', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              The Soap Business Toolkit
            </h1>
            <p style={{ color: '#C9B49A', maxWidth: '540px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.75, fontWeight: 300 }}>
              A startup checklist and a pricing worksheet for soap makers who want to sell legally and make a real profit.
            </p>
          </div>
        </section>

        <section style={{ background: '#F0EAE0', padding: '4rem 0' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#3E2820', marginBottom: '2rem' }}>What&apos;s Inside</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {contents.map(item => (
                <div key={item.title} style={{ background: '#FFFFFF', border: '1px solid #E8DFD0', padding: '1.75rem 1.5rem' }}>
                  <h3 style={{ fontSize: '1.15rem', color: '#3E2820', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#7A6E62', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#FAF7F2', padding: '5rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '640px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#3E2820', marginBottom: '0.75rem' }}>
                  Get the Toolkit Free
                </h2>
                <p style={{ color: '#7A6E62', lineHeight: 1.7 }}>
                  Enter your details and you will go straight to the download page. You will also be on the LatherForge early-access list for our launch in January 2027.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid #E8DFD0', padding: '2.5rem', boxShadow: '0 4px 24px rgba(92,61,46,0.06)' }}>
                <iframe
                  aria-label="Get the free Soap Business Toolkit"
                  frameBorder="0"
                  style={{ height: '500px', width: '100%', border: 'none' }}
                  src="https://forms.zohopublic.eu/culletonnoelgm1/form/LatherForgeEarlyAccess/formperma/hNAOt2XHrbOxOMfDDaY8hViG7DnhJjJASyZ9UlZn3OM"
                />
              </div>

              <p style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.8rem', color: '#9A8878' }}>
                No spam, and we never sell your data. Unsubscribe any time.{' '}
                See our <Link href="/privacy/" style={{ color: '#7A6E62', textDecoration: 'underline' }}>privacy policy</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
