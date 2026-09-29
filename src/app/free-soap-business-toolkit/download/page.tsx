import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PrintButton from './PrintButton'

export const metadata: Metadata = {
  title: 'Your Soap Business Toolkit',
  description: 'Printable soap business startup checklist and soap pricing worksheet.',
  robots: { index: false, follow: true }
}

const checklist: Array<{ step: string; items: string[] }> = [
  {
    step: '1. Get consistent',
    items: [
      'Chosen 3 to 5 core recipes',
      'Every recipe run through a soap calculator',
      'Each recipe made at least 3 times with the same result',
      'Bars fully cured and tested by me and others'
    ]
  },
  {
    step: '2. Decide what I sell',
    items: [
      'My angle in one sentence: ______________________________',
      'Who my customer is: ______________________________'
    ]
  },
  {
    step: '3. Make it legal (Ireland, UK, EU)',
    items: [
      'Safety assessment (CPSR) for each recipe from a qualified assessor',
      'Product Information File for each product',
      'Product notified on CPNP (EU) or SCPN (Great Britain) before sale',
      'Labels include: Responsible Person name and address, net weight, batch number, INCI ingredients, allergens, best-before or period-after-opening',
      'No medical claims anywhere (labels, website, social media)'
    ]
  },
  {
    step: '4. Register and insure',
    items: [
      'Registered with Revenue / HMRC (or my state, in the US)',
      'Business name registered, if not trading under my own name',
      'Product and public liability insurance in place',
      'Separate bank account for the business'
    ]
  },
  {
    step: '5. Cost and price',
    items: [
      'Pricing worksheet completed for every recipe',
      'Price checked against local and online competitors',
      'I know my profit per bar at markets, online and wholesale'
    ]
  },
  {
    step: '6. Choose where to sell',
    items: [
      'Craft fairs / markets',
      'Etsy',
      'Own website',
      'Local shops (wholesale)'
    ]
  },
  {
    step: '7. Keep records',
    items: [
      'Batch record for every batch (date, recipe, weights, supplier lot numbers)',
      'Batch number on every label',
      'Ingredient and finished-stock list',
      'Sales and expenses recorded',
      'Complaints and reactions log'
    ]
  }
]

const worksheet: Array<{ label: string; example: string }> = [
  { label: 'A. Ingredient cost for the whole batch (€)', example: '33.15' },
  { label: 'B. Number of bars in the batch', example: '33' },
  { label: 'C. Ingredients per bar (A ÷ B)', example: '1.00' },
  { label: 'D. Packaging and label per bar (€)', example: '0.45' },
  { label: 'E. Yearly overheads (€) ÷ bars sold per year', example: '360 ÷ 1,200 = 0.30' },
  { label: 'F. Hours per batch × hourly rate ÷ bars', example: '4 × 15 ÷ 33 = 1.82' },
  { label: 'G. TOTAL COST PER BAR (C + D + E + F)', example: '3.57' },
  { label: 'H. My retail price (€)', example: '8.00' },
  { label: 'I. Selling fees per bar (Etsy, card reader, etc.)', example: '1.00 (Etsy)' },
  { label: 'J. PROFIT PER BAR, retail (H − I − G)', example: '3.43' },
  { label: 'K. Wholesale price (usually about half of H)', example: '4.00' },
  { label: 'L. PROFIT PER BAR, wholesale (K − G)', example: '0.43' }
]

const box = { width: '14px', height: '14px', border: '1.5px solid #5C3D2E', flexShrink: 0, marginTop: '0.3rem' }
const cell = { border: '1px solid #D8CCBA', padding: '0.6rem 0.75rem', fontSize: '0.9rem', color: '#3E2820', textAlign: 'left' as const }

export default function ToolkitDownloadPage() {
  return (
    <>
      <Nav />

      <main style={{ paddingTop: '68px', background: '#FAF7F2' }}>
        <section className="no-print" style={{ background: '#F0EAE0', padding: '4rem 0 3rem', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 500, color: '#3E2820', marginBottom: '1rem' }}>
              Your Soap Business Toolkit
            </h1>
            <p style={{ color: '#5C4A3A', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              Thanks for signing up. Print both sheets below, or choose &quot;Save as PDF&quot; in the print window to keep a copy. Bookmark this page to come back to it.
            </p>
            <PrintButton label="Print or Save as PDF" />
          </div>
        </section>

        <section className="print-sheet" style={{ padding: '3rem 0' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A9E7E', marginBottom: '0.5rem' }}>Sheet 1</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: '#3E2820', marginBottom: '0.5rem' }}>Soap Business Startup Checklist</h2>
            <p style={{ fontSize: '0.85rem', color: '#7A6E62', marginBottom: '2rem' }}>
              A practical overview, not legal or tax advice. Check current rules with the HPRA (Ireland), OPSS (UK) or your local regulator.
            </p>
            {checklist.map(group => (
              <div key={group.step} style={{ marginBottom: '1.5rem', breakInside: 'avoid' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#3E2820', marginBottom: '0.6rem' }}>{group.step}</h3>
                {group.items.map(item => (
                  <div key={item} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.45rem' }}>
                    <span style={box} />
                    <span style={{ fontSize: '0.95rem', color: '#5C4A3A', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
            <p style={{ fontSize: '0.8rem', color: '#9A8878', marginTop: '2rem' }}>
              latherforge.com · Free soap calculator and app · Batch records, costing and labels in one place from January 2027
            </p>
          </div>
        </section>

        <section className="print-sheet page-break" style={{ padding: '3rem 0', borderTop: '1px solid #E8DFD0' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A9E7E', marginBottom: '0.5rem' }}>Sheet 2</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: '#3E2820', marginBottom: '0.5rem' }}>Soap Pricing Worksheet</h2>
            <p style={{ fontSize: '0.85rem', color: '#7A6E62', marginBottom: '1.5rem' }}>
              Recipe: ______________________ &nbsp; Date: ____________. The example column uses example prices for a 3 kg batch of a simple olive, coconut, shea and castor recipe.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '480px' }}>
                <thead>
                  <tr style={{ background: '#F0EAE0' }}>
                    <th style={cell}>Step</th>
                    <th style={{ ...cell, width: '28%' }}>Example</th>
                    <th style={{ ...cell, width: '22%' }}>Mine</th>
                  </tr>
                </thead>
                <tbody>
                  {worksheet.map(row => {
                    const total = row.label.startsWith('G.') || row.label.startsWith('J.') || row.label.startsWith('L.')
                    return (
                      <tr key={row.label} style={total ? { background: '#FBF6EA', fontWeight: 600 } : undefined}>
                        <td style={cell}>{row.label}</td>
                        <td style={{ ...cell, color: '#7A6E62' }}>{row.example}</td>
                        <td style={cell}></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <h3 style={{ fontSize: '1.1rem', color: '#3E2820', margin: '2rem 0 0.6rem' }}>If your profit is too low</h3>
            <ul style={{ paddingLeft: '1.25rem', color: '#5C4A3A', fontSize: '0.95rem', lineHeight: 1.7 }}>
              <li>Make bigger batches: labour per bar drops fast</li>
              <li>Buy oils and packaging in bulk</li>
              <li>Sell gift sets and bundles to raise the value of each sale</li>
              <li>Only sell wholesale once your cost per bar is well under half your retail price</li>
            </ul>
            <p style={{ fontSize: '0.8rem', color: '#9A8878', marginTop: '2rem' }}>
              latherforge.com · The free LatherForge app works out cost per bar from your recipe automatically
            </p>
          </div>
        </section>

        <section className="no-print" style={{ background: '#3E2820', padding: '4rem 0', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '640px' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: '#FAF7F2', marginBottom: '0.75rem' }}>Skip the Spreadsheet</h2>
            <p style={{ color: '#C9B49A', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              The free LatherForge app calculates lye, saves your recipes, counts down your cure and works out cost per bar. It works on your phone, even offline.
            </p>
            <Link href="/app/" className="btn-primary">Open the Free App</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
