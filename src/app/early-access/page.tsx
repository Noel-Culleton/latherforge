import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Register Your Interest — LatherForge',
  description: 'Be among the first to access LatherForge — the AI-powered business platform for handmade soap makers. Launching January 2027. Register your interest today.',
  alternates: { canonical: 'https://latherforge.com/early-access' }
}

export default function EarlyAccessPage() {
  return (
    <>
      <Nav />

      <main style={{ paddingTop: '68px' }}>
        {/* HERO */}
        <section style={{
          background: 'linear-gradient(160deg, #3E2820 0%, #5C3D2E 100%)',
          padding: '6rem 0 5rem', textAlign: 'center'
        }}>
          <div className="container">
            <div style={{
              display: 'inline-block',
              background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.4)',
              color: '#E8C97A', fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '0.4rem 1rem', marginBottom: '1.75rem'
            }}>
              Launching January 2027
            </div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 500,
              color: '#FAF7F2', lineHeight: 1.15, marginBottom: '1.25rem'
            }}>
              Be First to Access<br />
              <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>LatherForge</em>
            </h1>
            <p style={{ color: '#C9B49A', maxWidth: '500px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.75, fontWeight: 300 }}>
              Register your interest today. Early members receive 3 months free access and founding member pricing when we launch.
            </p>
          </div>
        </section>

        {/* PERKS */}
        <section style={{ background: '#F0EAE0', padding: '4rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', textAlign: 'center' }}>
              {[
                { icon: '🎁', title: '3 Months Free', desc: 'Full platform access at no cost for founding members' },
                { icon: '💎', title: 'Founding Pricing', desc: 'Locked-in rate for life — never pay more than founding members' },
                { icon: '🚀', title: 'Early Access', desc: 'Get in before the public launch in January 2027' },
                { icon: '🗺️', title: 'Shape the Product', desc: 'Your feedback directly influences what we build next' }
              ].map((perk, i) => (
                <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E8DFD0', padding: '1.75rem 1.25rem' }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{perk.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', color: '#3E2820', marginBottom: '0.5rem' }}>{perk.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#7A6E62', lineHeight: 1.6 }}>{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ZOHO FORM */}
        <section style={{ background: '#FAF7F2', padding: '5rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '640px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#3E2820', marginBottom: '0.75rem' }}>
                  Register Your Interest
                </h2>
                <p style={{ color: '#7A6E62', lineHeight: 1.7 }}>
                  Fill in the form below. We will email you the moment LatherForge opens its doors.
                </p>
              </div>

              <div style={{
                background: '#FFFFFF', border: '1px solid #E8DFD0',
                padding: '2.5rem', boxShadow: '0 4px 24px rgba(92,61,46,0.06)'
              }}>
                <iframe
                  aria-label="LatherForge Early Access"
                  frameBorder="0"
                  style={{ height: '500px', width: '100%', border: 'none' }}
                  src="https://forms.zohopublic.eu/culletonnoelgm1/form/LatherForgeEarlyAccess/formperma/hNAOt2XHrbOxOMfDDaY8hViG7DnhJjJASyZ9UlZn3OM"
                />
              </div>

              <p style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.8rem', color: '#9A8878' }}>
                No spam. No selling your data. Just a single email when we launch.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
