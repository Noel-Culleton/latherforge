import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { OILS, SAP_KOH } from '@/lib/soap'

const oilCount = Object.keys(OILS).length

export const metadata: Metadata = {
  title: `SAP Value Chart for Soap Making — NaOH & KOH for ${oilCount} Oils`,
  description: `Saponification (SAP) values for ${oilCount} soap making oils and butters, for both NaOH (bar soap) and KOH (liquid soap), with a worked example of how to calculate lye.`,
  alternates: { canonical: 'https://latherforge.com/sap-values/' }
}

const TH = { textAlign: 'left', padding: '0.65rem 0.8rem', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#F5EDD6', background: '#5C3D2E' } as const
const TD = { padding: '0.55rem 0.8rem', borderBottom: '1px solid #E8DFD0', fontSize: '0.95rem', color: '#3E2820' } as const
const H2 = { fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#3E2820', margin: '2.5rem 0 1rem' } as const

const FAQS = [
  {
    q: 'What is the SAP value of coconut oil?',
    a: `Coconut oil (76°) has a NaOH SAP value of ${OILS['Coconut Oil (76°)'].toFixed(3)} and a KOH SAP value of ${SAP_KOH['Coconut Oil (76°)'].toFixed(3)}. It needs more lye per gram than almost any other common soap making oil.`
  },
  {
    q: 'What is the SAP value of olive oil?',
    a: `Olive oil has a NaOH SAP value of ${OILS['Olive Oil'].toFixed(3)} and a KOH SAP value of ${SAP_KOH['Olive Oil'].toFixed(3)}.`
  },
  {
    q: 'How do you convert a KOH SAP value to NaOH?',
    a: 'Multiply the KOH value by 40.00 ÷ 56.11 (about 0.713), the ratio of the molecular weights of sodium hydroxide and potassium hydroxide. To go from NaOH to KOH, divide by the same number.'
  },
  {
    q: 'Why do different SAP charts give slightly different numbers?',
    a: 'Natural oils vary from batch to batch and supplier to supplier, and some charts publish averages while others use a single lab result. The differences are small, and a 5% superfat comfortably covers them for most recipes.'
  },
  {
    q: 'Do I need to adjust for KOH purity?',
    a: 'Yes. Most KOH sold for soap making is about 90% pure, so you need more of it than the 100% figure suggests. Use the KOH 90% column, or divide the KOH SAP value by 0.9.'
  }
]

export default function SapValuesPage() {
  const rows = Object.keys(OILS).sort((a, b) => a.localeCompare(b))
  const schema = {
    '@context': 'https://schema.org', '@type': 'Dataset',
    name: 'Saponification (SAP) values for soap making oils',
    description: `NaOH and KOH saponification values for ${oilCount} oils, butters and waxes used in soap making, with KOH at 90% purity and grams of NaOH per kilogram of oil at a 5% superfat.`,
    url: 'https://latherforge.com/sap-values/',
    keywords: ['SAP values', 'saponification chart', 'soap making', 'lye calculation', 'NaOH', 'KOH'],
    variableMeasured: ['NaOH SAP value', 'KOH SAP value', 'KOH at 90% purity', 'NaOH per kg of oil at 5% superfat'],
    isAccessibleForFree: true,
    inLanguage: 'en',
    license: 'https://latherforge.com/terms/',
    creator: { '@type': 'Organization', name: 'LatherForge', url: 'https://latherforge.com/' }
  }
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />
      <main style={{ paddingTop: '68px' }}>
        <section style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #EBF2EC 100%)', padding: '4rem 0 2.5rem' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#3E2820', marginBottom: '1rem' }}>SAP Value Chart for Soap Making</h1>
            <p style={{ color: '#5C4A3A', lineHeight: 1.7, fontSize: '1.05rem' }}>
              Saponification values for {oilCount} oils, butters and waxes, for NaOH (bar soap) and KOH (liquid soap). Or skip the maths and use the <Link href="/lye-calculator/" style={{ color: '#5C3D2E', textDecoration: 'underline' }}>free soap calculator</Link>.
            </p>
          </div>
        </section>

        <section style={{ background: '#FAF7F2', padding: '2rem 0 5rem' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: '#FFFFFF' }}>
                <thead><tr><th style={TH}>Oil / butter</th><th style={TH}>NaOH SAP</th><th style={TH}>KOH SAP</th><th style={TH}>KOH 90%</th><th style={TH}>NaOH per 1 kg oil (5% SF)</th></tr></thead>
                <tbody>
                  {rows.map(oil => (
                    <tr key={oil}>
                      <td style={TD}>{oil}</td>
                      <td style={TD}>{OILS[oil].toFixed(3)}</td>
                      <td style={TD}>{SAP_KOH[oil].toFixed(3)}</td>
                      <td style={TD}>{(SAP_KOH[oil] / 0.9).toFixed(3)}</td>
                      <td style={TD}>{Math.round(OILS[oil] * 1000 * 0.95)} g</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#7A6E62', marginTop: '0.75rem', lineHeight: 1.6 }}>
              SAP values are grams of lye per gram of oil. The KOH SAP column assumes 100% purity; the KOH 90% column is already adjusted for the standard 90% KOH sold to soap makers. The last column is a quick check for single-oil recipes: grams of NaOH for 1 kg of that oil at a 5% superfat. SAP values vary slightly between batches and suppliers, which is one reason soap makers use a superfat.
            </p>

            <h2 style={H2}>What is a SAP value?</h2>
            <p style={{ color: '#5C4A3A', lineHeight: 1.8 }}>
              A saponification (SAP) value is the amount of lye needed to turn one gram of a particular oil completely into soap. Every oil has a different fatty acid make-up, so every oil needs a different amount of lye. Coconut oil, for example, needs much more lye per gram than olive oil.
            </p>

            <h2 style={H2}>How to calculate lye with SAP values</h2>
            <ol style={{ margin: '0 0 0 1.25rem', color: '#5C4A3A', lineHeight: 1.8 }}>
              <li>Multiply the weight of each oil by its SAP value.</li>
              <li>Add the results together. That is the lye needed for 0% superfat.</li>
              <li>Multiply by (1 − superfat). For a 5% superfat, multiply by 0.95.</li>
              <li>For KOH, divide by the purity (0.9 for 90% KOH).</li>
            </ol>
            <div style={{ background: '#FFFFFF', border: '1px solid #E8DFD0', padding: '1.25rem', marginTop: '1.25rem', lineHeight: 1.8, color: '#3E2820' }}>
              <strong>Example:</strong> 700 g olive oil and 300 g coconut oil at 5% superfat<br />
              700 × {OILS['Olive Oil']} = {(700 * OILS['Olive Oil']).toFixed(1)} g<br />
              300 × {OILS['Coconut Oil (76°)']} = {(300 * OILS['Coconut Oil (76°)']).toFixed(1)} g<br />
              Total {(700 * OILS['Olive Oil'] + 300 * OILS['Coconut Oil (76°)']).toFixed(1)} g × 0.95 = <strong>{((700 * OILS['Olive Oil'] + 300 * OILS['Coconut Oil (76°)']) * 0.95).toFixed(1)} g NaOH</strong>
            </div>

            <h2 style={H2}>SAP value questions</h2>
            {FAQS.map(f => (
              <div key={f.q} style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#3E2820', marginBottom: '0.35rem' }}>{f.q}</h3>
                <p style={{ color: '#5C4A3A', lineHeight: 1.8 }}>{f.a}</p>
              </div>
            ))}

            <div style={{ marginTop: '2.5rem', background: '#5C3D2E', padding: '2rem', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.7rem', color: '#FAF7F2', marginBottom: '0.5rem' }}>Let the calculator do it</h2>
              <p style={{ color: '#C9B49A', marginBottom: '1.25rem' }}>Every oil in this chart is built into the free soap calculator, in grams or ounces.</p>
              <Link href="/lye-calculator/" className="btn-primary">Open the soap calculator</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
