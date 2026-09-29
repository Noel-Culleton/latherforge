import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

// Switch to hello@latherforge.com once that mailbox is set up in Zoho Mail.
export const CONTACT_EMAIL = 'latherforge@zohomail.eu'
export const OPERATOR = 'Noel Culleton, trading as LatherForge, Ireland'

export const H2 = { fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#3E2820', margin: '2.25rem 0 0.75rem' } as const
export const P = { color: '#5C4A3A', lineHeight: 1.75, marginBottom: '1rem' } as const
export const LI = { color: '#5C4A3A', lineHeight: 1.75, marginBottom: '0.4rem' } as const

export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '68px' }}>
        <section style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #EBF2EC 100%)', padding: '4rem 0 2rem' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#3E2820', marginBottom: '0.5rem' }}>{title}</h1>
            <p style={{ color: '#7A6E62', fontSize: '0.9rem' }}>Last updated: {updated}</p>
          </div>
        </section>
        <section style={{ background: '#FAF7F2', padding: '1rem 0 5rem' }}>
          <div className="container" style={{ maxWidth: '760px' }}>{children}</div>
        </section>
      </main>
      <Footer />
    </>
  )
}
