import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LyeCalculatorClient from './LyeCalculatorClient'

export const metadata: Metadata = {
  title: 'Free Lye Calculator for Soap Making — NaOH & KOH',
  description: 'Free online lye calculator for handmade soap makers. Calculate exact NaOH (sodium hydroxide) and KOH (potassium hydroxide) amounts for cold process and hot process soap recipes. Supports superfatting.',
  keywords: ['lye calculator', 'soap lye calculator', 'NaOH calculator', 'sodium hydroxide soap', 'cold process soap calculator', 'superfatting calculator'],
  alternates: { canonical: 'https://latherforge.com/lye-calculator' },
  openGraph: {
    title: 'Free Lye Calculator for Soap Making',
    description: 'Calculate exact lye amounts for cold process and hot process soap recipes. Free, instant, no signup required.'
  }
}

export default function LyeCalculatorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LatherForge Lye Calculator',
    description: 'Free online lye calculator for handmade soap makers',
    url: 'https://latherforge.com/lye-calculator',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a lye calculator?',
        acceptedAnswer: { '@type': 'Answer', text: 'A lye calculator determines the exact amount of sodium hydroxide (NaOH) or potassium hydroxide (KOH) needed to saponify a specific blend of oils and butters in soap making. It uses saponification values (SAP values) for each oil to calculate the correct lye amount.' }
      },
      {
        '@type': 'Question',
        name: 'What is superfatting in soap making?',
        acceptedAnswer: { '@type': 'Answer', text: 'Superfatting is the practice of using slightly less lye than required to fully saponify all oils, leaving a small percentage of free oils in the finished soap. This results in a milder, more moisturising bar. Most soap makers use a 5% superfat.' }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between NaOH and KOH for soap making?',
        acceptedAnswer: { '@type': 'Answer', text: 'NaOH (sodium hydroxide) produces hard bar soap and is used for cold process and hot process soap making. KOH (potassium hydroxide) produces soft or liquid soap and is used primarily for making liquid soap and shaving cream.' }
      },
      {
        '@type': 'Question',
        name: 'How much water should I use in soap making?',
        acceptedAnswer: { '@type': 'Answer', text: 'A standard water to lye ratio for cold process soap is 2:1 (two parts water to one part lye by weight). This is the default in most soap recipes. Some soap makers reduce water to speed cure time or increase water for easier tracing.' }
      }
    ]
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://latherforge.com' },
      { '@type': 'ListItem', position: 2, name: 'Lye Calculator', item: 'https://latherforge.com/lye-calculator' }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />

      <main style={{ paddingTop: '68px' }}>
        {/* HEADER */}
        <section style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #EBF2EC 100%)', padding: '4rem 0 3rem' }}>
          <div className="container">
            <nav style={{ fontSize: '0.8rem', color: '#9A8878', marginBottom: '1.5rem' }}>
              <a href="/" style={{ color: '#9A8878' }}>Home</a>
              <span style={{ margin: '0 0.5rem' }}>→</span>
              <span style={{ color: '#5C3D2E' }}>Lye Calculator</span>
            </nav>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#3E2820', marginBottom: '1rem' }}>
              Free Lye Calculator
            </h1>
            <p style={{ color: '#5C4A3A', maxWidth: '560px', lineHeight: 1.7, fontSize: '1.05rem', fontWeight: 300 }}>
              Calculate exact NaOH or KOH amounts for your soap recipe. Supports cold process, hot process and superfatting. Free, instant, no signup required.
            </p>
          </div>
        </section>

        {/* CALCULATOR */}
        <LyeCalculatorClient />

        {/* HOW IT WORKS */}
        <section style={{ background: '#F0EAE0', padding: '5rem 0' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#3E2820', marginBottom: '2rem' }}>
              How to Use This Lye Calculator
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { step: '1', title: 'Choose your lye type', body: 'Select NaOH (sodium hydroxide) for bar soap or KOH (potassium hydroxide) for liquid soap. NaOH is used in cold process and hot process bar soap making. KOH at 90% purity is standard for liquid soap.' },
                { step: '2', title: 'Select your soap making method', body: 'Cold process soap is made at room temperature and cured for 4–6 weeks. Hot process soap is cooked and can be used sooner. The lye amount is the same — the method changes how you handle the batter.' },
                { step: '3', title: 'Add your oils and weights', body: 'Enter each oil or butter in your recipe with its weight in grams. Each oil has a unique saponification value (SAP value) — the calculator uses these to determine exactly how much lye is needed.' },
                { step: '4', title: 'Set your superfat percentage', body: 'Superfat is the percentage of oils left unsaponified in your finished soap. A 5% superfat is standard for a mild, moisturising bar. Higher superfat means more free oils but a softer bar.' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0, width: '36px', height: '36px',
                    background: '#5C3D2E', color: '#C9A84C',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.85rem', fontWeight: 600
                  }}>{item.step}</div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: '#3E2820', marginBottom: '0.4rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#5C4A3A', lineHeight: 1.7 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#FAF7F2', padding: '5rem 0' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#3E2820', marginBottom: '2.5rem' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { q: 'What is a lye calculator?', a: 'A lye calculator determines the exact amount of sodium hydroxide (NaOH) or potassium hydroxide (KOH) needed to saponify a specific blend of oils and butters. It uses saponification values (SAP values) for each oil to calculate the correct lye amount so no lye remains in your finished soap.' },
                { q: 'What is superfatting in soap making?', a: 'Superfatting is using slightly less lye than required to saponify all oils, leaving a small percentage of free oils in the finished soap. This results in a milder, more moisturising bar. A 5% superfat is the most common choice for handmade soap.' },
                { q: 'What is the difference between NaOH and KOH?', a: 'NaOH (sodium hydroxide) produces hard bar soap and is used for cold process and hot process soap. KOH (potassium hydroxide) produces soft or liquid soap. Most bar soap makers use NaOH. Liquid soap makers use KOH, typically at 90% purity.' },
                { q: 'How much water should I use?', a: 'The standard water to lye ratio for cold process soap is 2:1 — two parts water to one part lye by weight. This is the default used in most soap recipes. Some makers reduce water to speed cure time. The calculator recommends water based on your lye amount.' }
              ].map((item, i) => (
                <div key={i} style={{ borderBottom: '1px solid #E8DFD0', paddingBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.05rem', color: '#3E2820', marginBottom: '0.5rem' }}>{item.q}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#5C4A3A', lineHeight: 1.7 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#5C3D2E', padding: '5rem 0', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#FAF7F2', marginBottom: '1rem' }}>
              Want More Than a Calculator?
            </h2>
            <p style={{ color: '#C9B49A', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              LatherForge gives you AI recipe generation, batch tracking, inventory management and Etsy listing tools. Launching January 2027.
            </p>
            <a href="/early-access" className="btn-primary">Register My Interest</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
