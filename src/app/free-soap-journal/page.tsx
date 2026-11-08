import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { absolute: 'Free Printable Soap Batch Journal (A4 & US Letter PDF) | LatherForge' },
  description: 'Free printable soap making journal: formula record, batch record, observation log, ingredient stock, cost record, order record and notes. A4 and US Letter PDF. No signup needed.',
  keywords: ['soap making journal', 'soap batch record', 'printable soap journal', 'soap recipe log', 'soap making log printable', 'free soap journal'],
  alternates: { canonical: 'https://latherforge.com/free-soap-journal/' },
  openGraph: {
    title: 'Free Printable Soap Batch Journal',
    description: 'Eight printable pages to record your soap formulas, batches, stock and costs. A4 and US Letter.',
    url: 'https://latherforge.com/free-soap-journal/',
    images: [{ url: 'https://latherforge.com/downloads/soap-batch-journal-preview.png', width: 1531, height: 722 }]
  }
}

const ZOHO_FORM = 'https://forms.zohopublic.eu/culletonnoelgm1/form/LatherForgeEarlyAccess/formperma/hNAOt2XHrbOxOMfDDaY8hViG7DnhJjJASyZ9UlZn3OM'

const PAGES = [
  ['Formula / recipe record', 'Your oils, lye, water, fragrance and additives, with version and source notes'],
  ['Batch record', 'Planned vs actual amounts, batch ID, mould and unit count, production date'],
  ['Observation log', 'What you saw at trace, gel, cut and cure, dated per batch'],
  ['Ingredient stock', 'In, out and balance for each ingredient, with supplier and lot reference'],
  ['Cost record', 'What each batch cost you, cost per unit and selling price'],
  ['Order record', 'Who bought what, from which batch'],
  ['Notes & versions', 'Changes to a recipe over time, so you never lose what worked']
]

const CARD = { background: '#FFFFFF', border: '1px solid #E8DFD0', padding: '1.5rem' } as const
const BTN = { display: 'inline-block', background: '#5C3D2E', color: '#FAF7F2', padding: '0.85rem 1.4rem', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' } as const

export default function FreeSoapJournalPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '68px' }}>
        <section style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #EBF2EC 100%)', padding: '4rem 0 3rem' }}>
          <div className="container" style={{ maxWidth: '860px' }}>
            <nav style={{ fontSize: '0.8rem', color: '#9A8878', marginBottom: '1.5rem' }}>
              <Link href="/" style={{ color: '#9A8878' }}>Home</Link>
              <span style={{ margin: '0 0.5rem' }}>→</span>
              <span style={{ color: '#5C3D2E' }}>Free Soap Journal</span>
            </nav>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A9E7E', marginBottom: '0.6rem' }}>Free printable</p>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#3E2820', marginBottom: '1rem', lineHeight: 1.15 }}>
              Free Soap Batch Journal
            </h1>
            <p style={{ color: '#3E2820', lineHeight: 1.6, fontSize: '1.1rem', fontWeight: 500, marginBottom: '1.5rem', maxWidth: '640px' }}>
              Eight printable pages to keep every formula, batch, observation and cost in one place. Print it, keep it by the bench, and never wonder &quot;what did I do differently last time?&quot; again.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
              <a href="/downloads/LatherForge-Soap-Batch-Journal-A4.pdf" download style={BTN}>Download A4 (PDF)</a>
              <a href="/downloads/LatherForge-Soap-Batch-Journal-US-Letter.pdf" download style={{ ...BTN, background: '#7A9E7E' }}>Download US Letter (PDF)</a>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#7A6E62' }}>Free. No signup needed. Print as many copies as you like for your own soap making.</p>
          </div>
        </section>

        <section style={{ background: '#FAF7F2', padding: '3rem 0' }}>
          <div className="container" style={{ maxWidth: '860px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/downloads/soap-batch-journal-preview.png" alt="Preview of the LatherForge soap batch journal: cover, formula record and batch record pages" width={1531} height={722} style={{ width: '100%', height: 'auto', border: '1px solid #E8DFD0' }} />

            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#3E2820', margin: '2.5rem 0 1rem' }}>What&apos;s inside</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {PAGES.map(([t, d]) => (
                <div key={t} style={CARD}>
                  <p style={{ fontWeight: 600, color: '#3E2820', marginBottom: '0.35rem' }}>{t}</p>
                  <p style={{ fontSize: '0.88rem', color: '#5C4A3A', lineHeight: 1.6 }}>{d}</p>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#3E2820', margin: '2.5rem 0 1rem' }}>Why keep batch records?</h2>
            <ul style={{ fontSize: '0.95rem', color: '#5C4A3A', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
              <li><strong>Repeat what worked.</strong> A great bar is only useful if you can make it again.</li>
              <li><strong>Find out what went wrong.</strong> Cracking, soda ash or a seized batch is easier to solve when you know the temperatures, timings and amounts.</li>
              <li><strong>Know your real costs.</strong> The cost page shows what each bar actually cost you, ready for the <Link href="/etsy-pricing-calculator/" style={{ color: '#7A9E7E', textDecoration: 'underline' }}>Etsy pricing calculator</Link>.</li>
              <li><strong>Selling?</strong> If you sell soap in the UK, Ireland or the EU, you need batch numbers and records you can trace. See our <Link href="/cpsr-for-soap/" style={{ color: '#7A9E7E', textDecoration: 'underline' }}>CPSR guide</Link>.</li>
            </ul>
            <p style={{ fontSize: '0.95rem', color: '#5C4A3A', lineHeight: 1.8 }}>
              Work out your lye and water with the free <Link href="/lye-calculator/" style={{ color: '#7A9E7E', textDecoration: 'underline' }}>soap calculator</Link>, then write the result on your formula page.
            </p>

            <div style={{ ...CARD, marginTop: '2.5rem' }}>
              <h2 style={{ fontSize: '1.4rem', color: '#3E2820', marginBottom: '0.5rem' }}>Rather not do it on paper?</h2>
              <p style={{ fontSize: '0.92rem', color: '#5C4A3A', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                LatherForge keeps these records for you: recipes, batches, stock and cost per bar, all in one place. It launches on 1 January 2027. Leave your details and we&apos;ll email you when it opens. The first 300 sign-ups get 3 months free, with no card needed to start.
              </p>
              <iframe
                aria-label="LatherForge launch sign-up"
                title="LatherForge launch sign-up"
                frameBorder="0"
                style={{ height: '500px', width: '100%', border: 'none' }}
                src={ZOHO_FORM}
              />
              <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: '#9A8878' }}>
                No spam. No selling your data. Just a single email when we launch. See our <Link href="/privacy/" style={{ color: '#7A6E62', textDecoration: 'underline' }}>privacy policy</Link>.
              </p>
            </div>

            <p style={{ fontSize: '0.78rem', color: '#7A6E62', lineHeight: 1.7, marginTop: '2rem' }}>
              Blank record pages only. They contain no recipes, ingredient amounts, making instructions or test thresholds, and they are not a safety assessment, product approval or compliance certificate. You are responsible for your own records and for following lye safety guidance and the rules where you sell. Free for personal and single-business use; please share the link to this page rather than the files.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
