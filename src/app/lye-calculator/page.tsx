import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LyeCalculatorClient from './LyeCalculatorClient'

export const metadata: Metadata = {
  title: { absolute: 'Soap Calculator — Free Lye Calculator for Soap Making | LatherForge' },
  description: 'Free soap calculator for cold process, hot process and liquid soap. Enter your oils in grams or ounces and get exact lye (NaOH or KOH) and water amounts with superfat. Works on your phone.',
  keywords: ['soap calculator', 'lye calculator', 'soap lye calculator', 'soap making calculator', 'lye calculator for soap making', 'cold process soap calculator', 'NaOH calculator', 'KOH calculator'],
  alternates: { canonical: 'https://latherforge.com/lye-calculator/' },
  openGraph: {
    title: 'Free Soap Calculator (Lye Calculator for Soap Making)',
    description: 'Calculate exact lye amounts for cold process and hot process soap recipes. Free, instant, no signup required.'
  }
}

const FAQS = [
  { q: 'What is a soap calculator?', a: 'A soap calculator (also called a lye calculator) works out the exact amount of sodium hydroxide (NaOH) or potassium hydroxide (KOH) needed to turn a specific blend of oils and butters into soap. It uses the saponification value (SAP value) of each oil, so no lye is left over in your finished bar.' },
  { q: 'What is the formula for calculating lye in soap?', a: 'Multiply the weight of each oil by its SAP value, add the results together, then reduce the total by your superfat. For example, 700 g olive oil (SAP 0.134) plus 300 g coconut oil (SAP 0.190) needs 93.8 g + 57 g = 150.8 g of NaOH. With a 5% superfat that becomes 150.8 × 0.95 = 143.3 g of NaOH.' },
  { q: 'What is superfatting in soap making?', a: 'Superfatting is using slightly less lye than required to saponify all oils, leaving a small percentage of free oils in the finished soap. This makes a milder, more moisturising bar. A 5% superfat is the most common choice for handmade soap.' },
  { q: 'What is the difference between NaOH and KOH?', a: 'NaOH (sodium hydroxide) makes hard bar soap and is used for cold process and hot process soap. KOH (potassium hydroxide) makes soft or liquid soap. Most bar soap makers use NaOH. Liquid soap makers use KOH, typically at 90% purity, which this calculator accounts for.' },
  { q: 'What is the best water-to-lye ratio for soap making?', a: 'A 2:1 water-to-lye ratio by weight (about a 33% lye concentration) is the standard starting point for cold process soap, and it is what this calculator uses. Experienced makers sometimes use less water to speed up unmoulding and curing, or more water for hot process soap.' },
  { q: 'What happens if you use too much lye in soap?', a: 'Too much lye leaves unreacted sodium hydroxide in the bar, which makes the soap harsh and can irritate or burn skin. Signs include a white crumbly surface, cracking or a bar that zaps when touched to the tongue. Always weigh lye precisely and run every recipe through a soap calculator before you make it.' },
  { q: 'Can I use this soap calculator in ounces?', a: 'Yes. Switch the units to ounces, enter your oils in ounces and the lye and water results are given in ounces too.' }
]

export default function LyeCalculatorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LatherForge Soap Calculator',
    alternateName: 'LatherForge Lye Calculator',
    description: 'Free soap and lye calculator for handmade soap makers',
    url: 'https://latherforge.com/lye-calculator/',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://latherforge.com' },
      { '@type': 'ListItem', position: 2, name: 'Soap Calculator', item: 'https://latherforge.com/lye-calculator/' }
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
              <span style={{ color: '#5C3D2E' }}>Soap Calculator</span>
            </nav>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#3E2820', marginBottom: '1rem' }}>
              Free Soap Calculator
            </h1>
            <p style={{ color: '#5C4A3A', maxWidth: '560px', lineHeight: 1.7, fontSize: '1.05rem', fontWeight: 300 }}>
              A free lye calculator for soap making. Enter your oils in grams or ounces and get the exact NaOH or KOH and water for cold process, hot process or liquid soap. Free, instant, no signup required.
            </p>
          </div>
        </section>

        {/* CALCULATOR */}
        <LyeCalculatorClient />

        {/* HOW IT WORKS */}
        <section style={{ background: '#F0EAE0', padding: '5rem 0' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#3E2820', marginBottom: '2rem' }}>
              How to Use This Soap Calculator
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
              {FAQS.map((item, i) => (
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
