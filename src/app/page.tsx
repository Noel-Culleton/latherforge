'use client'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const features = [
  { icon: '⚗️', title: 'AI Recipe Generator', desc: 'Generate cold process, hot process and melt & pour recipes with full ingredient lists, SAP values and safety guidance — instantly.' },
  { icon: '📦', title: 'Batch & Inventory Tracking', desc: 'Track every production batch from pour to cure. Monitor stock levels for oils, butters, fragrances and packaging in real time.' },
  { icon: '💰', title: 'Costing & Pricing', desc: 'Know your exact cost per bar. Set profitable retail, wholesale and Etsy prices with built-in margin calculators.' },
  { icon: '🛍️', title: 'Etsy Listing Generator', desc: 'Create SEO-optimised Etsy titles, descriptions and tags for every product in seconds using AI trained on the soap niche.' },
  { icon: '🎬', title: 'Video Content Engine', desc: 'Generate video storyboards, voiceover scripts and Google Flow prompts for YouTube, TikTok and Reels content.' },
  { icon: '📊', title: 'Business Dashboard', desc: 'See your revenue, production output, margins and inventory health at a glance. All in one clean dashboard.' }
]

export default function HomePage() {
  return (
    <>
      <style>{`
        .feature-card {
          background: #FFFFFF;
          border: 1px solid #E8DFD0;
          padding: 2rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(92,61,46,0.08);
        }
      `}</style>

      <Nav />

      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(160deg, #FAF7F2 0%, #F0EAE0 60%, #EBF2EC 100%)',
        paddingTop: '68px', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(122,158,126,0.1) 0%, transparent 70%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '720px' }}>
            <div className="fade-up" style={{ display: 'inline-block', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', color: '#8B6010', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.4rem 1rem', marginBottom: '1.75rem' }}>
              Launching January 2027 — Register Your Interest
            </div>
            <h1 className="fade-up-2" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, lineHeight: 1.1, color: '#3E2820', marginBottom: '1.5rem' }}>
              The Business OS<br />
              <em style={{ color: '#7A9E7E', fontStyle: 'italic' }}>Built for Soap Makers</em>
            </h1>
            <p className="fade-up-3" style={{ fontSize: '1.15rem', color: '#5C4A3A', maxWidth: '540px', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
              One platform to manage your entire soap business. AI-powered recipe generation, batch tracking, inventory, costing, Etsy listings and content creation — all in one place.
            </p>
            <div className="fade-up-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/early-access" className="btn-primary">Register My Interest</Link>
              <Link href="/lye-calculator" className="btn-outline">Try Free Lye Calculator</Link>
            </div>
            <p className="fade-up-4" style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: '#9A8878' }}>
              No credit card. No commitment. Be first to know when we launch.
            </p>
          </div>
        </div>
      </section>

      {/* LAUNCH BANNER */}
      <section style={{ background: '#5C3D2E', padding: '1.25rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: '#F5EDD6', fontSize: '0.9rem', letterSpacing: '0.04em' }}>
            <span style={{ color: '#C9A84C', fontWeight: 600 }}>🚀 Launching January 2027</span>{' '}— Join the waitlist and get 3 months free at launch.
          </p>
        </div>
      </section>

      {/* FREE TOOL CTA */}
      <section style={{ background: '#EBF2EC', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A9E7E', marginBottom: '0.75rem' }}>Free Tool</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#3E2820', marginBottom: '1rem' }}>Free Lye Calculator</h2>
          <p style={{ color: '#5C4A3A', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Calculate exact lye amounts for cold process and hot process soap recipes. No signup required.
          </p>
          <Link href="/lye-calculator" className="btn-primary">Use Free Calculator</Link>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ background: '#FAF7F2', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '0.75rem' }}>What&apos;s Inside</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#3E2820' }}>Everything a Soap Business Needs</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.3rem', color: '#3E2820', marginBottom: '0.75rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#7A6E62', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section style={{ background: '#F0EAE0', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#3E2820' }}>Why LatherForge?</h2>
            <p style={{ color: '#7A6E62', marginTop: '0.75rem' }}>Built for how soap makers actually work</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { label: 'AI-Powered', desc: 'Recipe generation, listing copy and video scripts all powered by AI' },
              { label: 'All-in-One', desc: 'No more switching between five different tools and spreadsheets' },
              { label: 'Built for Etsy', desc: 'Integrated listing generator trained specifically for the soap niche' },
              { label: 'Soap-Specific', desc: 'Every feature designed around how handmade soap businesses actually operate' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#FAF7F2', border: '1px solid #E8DFD0', padding: '1.75rem' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '0.5rem' }}>{item.label}</p>
                <p style={{ fontSize: '0.9rem', color: '#5C4A3A', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: '#3E2820', padding: '7rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1rem' }}>Limited Early Access</p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#FAF7F2', marginBottom: '1.25rem', maxWidth: '600px', margin: '0 auto 1.25rem' }}>
            Be First When We Launch
          </h2>
          <p style={{ color: '#A89882', maxWidth: '440px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Join the waitlist today. Early members get 3 months free and exclusive founding member pricing.
          </p>
          <Link href="/early-access" className="btn-primary">Register My Interest</Link>
          <p style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: '#7A6458' }}>No credit card required. Unsubscribe any time.</p>
        </div>
      </section>

      <Footer />
    </>
  )
}
