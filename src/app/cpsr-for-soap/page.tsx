import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RelatedGuides from '@/components/RelatedGuides'
import ReadinessChecklist from './ReadinessChecklist'

export const metadata: Metadata = {
  title: { absolute: 'CPSR for Soap Makers: Cost, UK & EU Rules in Plain English | LatherForge' },
  description: 'What a CPSR (Cosmetic Product Safety Report) is, what it costs, and what a soap maker in the UK, Ireland, Northern Ireland or the EU needs before selling. Plain English, with a free readiness checklist.',
  keywords: ['cpsr', 'cpsr uk', 'cpsr soap', 'cpsr cost', 'cosmetic safety report', 'cosmetic product safety report', 'cpsr ireland', 'selling soap legally'],
  alternates: { canonical: 'https://latherforge.com/cpsr-for-soap/' },
  openGraph: {
    title: 'CPSR for Soap Makers: Cost, UK & EU Rules in Plain English',
    description: 'What a CPSR is, what it costs (about £60–£120 for a simple soap) and everything else you need before selling soap.',
    url: 'https://latherforge.com/cpsr-for-soap/'
  }
}

const EURLEX = 'https://eur-lex.europa.eu/eli/reg/2009/1223/oj/eng'
const ALLERGEN_REG = 'https://eur-lex.europa.eu/eli/reg/2023/1545/oj/eng'
const HPRA_ALLERGENS = 'https://www.hpra.ie/regulation/cosmetics/labelling-and-claims/cosmetic-products-labelling/labelling-of-cosmetic-fragrance-allergens'
const HPRA = 'https://www.hpra.ie/homepage/cosmetics'
const SCPN = 'https://www.gov.uk/guidance/submit-a-cosmetic-product-notification'
const NI_GUIDE = 'https://www.gov.uk/government/publications/cosmetic-products-enforcement-regulations-2013/regulation-20091223-and-the-cosmetic-products-enforcement-regulations-2013-northern-ireland'
const CPNP = 'https://single-market-economy.ec.europa.eu/sectors/cosmetics/cosmetic-products-notification-portal_en'

const H2 = { fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#3E2820', margin: '2.75rem 0 1rem' } as const
const H3 = { fontSize: '1.1rem', color: '#3E2820', margin: '1.5rem 0 0.5rem' } as const
const P = { fontSize: '0.95rem', color: '#5C4A3A', lineHeight: 1.8, marginBottom: '1rem' } as const
const UL = { fontSize: '0.95rem', color: '#5C4A3A', lineHeight: 1.75, paddingLeft: '1.25rem', marginBottom: '1rem' } as const
const A = { color: '#7A9E7E', textDecoration: 'underline' } as const
const TH = { textAlign: 'left', padding: '0.65rem 0.8rem', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#F5EDD6', background: '#5C3D2E', verticalAlign: 'top' } as const
const TD = { padding: '0.6rem 0.8rem', borderBottom: '1px solid #E8DFD0', fontSize: '0.9rem', color: '#3E2820', verticalAlign: 'top' } as const
const SMALL = { fontSize: '0.8rem', color: '#7A6E62', lineHeight: 1.7 } as const

const FAQS = [
  {
    q: 'Do I need a CPSR to sell soap at a craft fair or market?',
    a: 'Yes. The rules apply whenever you supply a cosmetic to the public, whether that is at a market, on Etsy, on your own website or to a shop. Selling small amounts does not give you an exemption.'
  },
  {
    q: 'How much does a CPSR cost in the UK?',
    a: 'Based on prices published by UK small-batch assessors (checked November 2026), a CPSR for one simple cold-process soap typically costs about £60–£120. Template or pre-assessed CPSRs sit at the lower end; variant packages cost a little more (roughly £100–£170), and full compliance packages cost around £300–£360+. Always compare what is included and get quotes from several qualified assessors.'
  },
  {
    q: 'Is a UK CPSR valid in Ireland or the EU?',
    a: 'The safety assessment requirements are very similar, and some assessors write reports that cover both markets. You still need an EU-based Responsible Person and a CPNP notification to sell in the EU, and a UK-based Responsible Person and an SCPN notification to sell in Great Britain. Check with your assessor that the report covers the markets you sell to.'
  },
  {
    q: 'What happens if I sell soap without a CPSR?',
    a: 'Enforcement authorities (Trading Standards in the UK, the HPRA in Ireland) can order products off sale, and serious breaches can lead to fines or prosecution. Many markets, shops and insurers will also ask to see your paperwork.'
  },
  {
    q: 'Do I need a new CPSR if I change my fragrance?',
    a: 'Usually yes, or at least an update. Fragrance changes the allergens and the safety profile. Many assessors offer fragrance variants of a base recipe as a cheaper add-on.'
  },
  {
    q: 'Do I need a CPSR to give soap away as gifts or samples?',
    a: 'The rules are aimed at products supplied as part of a business. Free samples, giveaways and gifts connected to your business are likely to be covered. If you are unsure about your situation, ask your safety assessor or the HPRA or Trading Standards before giving products out.'
  }
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'CPSR for Soap Makers: What It Is, What It Costs and What You Need Before Selling',
  dateModified: '2026-11-08',
  author: { '@type': 'Organization', name: 'LatherForge' },
  publisher: { '@type': 'Organization', name: 'LatherForge' },
  mainEntityOfPage: 'https://latherforge.com/cpsr-for-soap/'
}

export default function CpsrForSoapPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />
      <main style={{ paddingTop: '68px' }}>
        <section style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #EBF2EC 100%)', padding: '4rem 0 3rem' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <nav style={{ fontSize: '0.8rem', color: '#9A8878', marginBottom: '1.5rem' }}>
              <Link href="/" style={{ color: '#9A8878' }}>Home</Link>
              <span style={{ margin: '0 0.5rem' }}>→</span>
              <span style={{ color: '#5C3D2E' }}>CPSR for Soap</span>
            </nav>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#3E2820', marginBottom: '1rem', lineHeight: 1.15 }}>
              CPSR for Soap Makers: What It Is, What It Costs and What You Need Before Selling
            </h1>
            <p style={{ color: '#3E2820', lineHeight: 1.6, fontSize: '1.1rem', fontWeight: 500, marginBottom: '1.25rem' }}>
              A plain-English guide for handmade soap sellers in the UK, Ireland, Northern Ireland and the EU.
            </p>
            <div role="note" style={{ background: '#FFFFFF', border: '1px solid #E8DFD0', padding: '0.8rem 1rem', fontSize: '0.88rem', color: '#5C4A3A', lineHeight: 1.6 }}>
              <strong style={{ color: '#3E2820' }}>Information only. Not legal or regulatory advice.</strong> Before you sell, get your products assessed by a qualified cosmetic safety assessor and check the official guidance. <a href="#disclaimer" style={A}>Read the full disclaimer</a>.
            </div>
          </div>
        </section>

        <section style={{ background: '#FAF7F2', padding: '2.5rem 0 4rem' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div style={{ background: '#FFFFFF', border: '1px solid #E8DFD0', padding: '1.5rem' }}>
              <p style={{ fontWeight: 600, color: '#3E2820', marginBottom: '0.5rem' }}>The short version</p>
              <ul style={{ ...UL, marginBottom: 0 }}>
                <li>Handmade soap for washing skin counts as a <strong>cosmetic</strong>, so cosmetics law applies to you.</li>
                <li>Before selling, each recipe needs a <strong>CPSR</strong> (Cosmetic Product Safety Report) signed by a qualified safety assessor.</li>
                <li>Based on published UK assessor prices (checked November 2026), a CPSR for one simple cold-process soap typically costs <strong>roughly £60–£120</strong>. Packages covering several fragrance variants cost more in total but less per variant.</li>
                <li>You also need a <strong>Responsible Person</strong> (usually you), a <strong>Product Information File</strong>, a <strong>free online notification</strong> and <strong>correct labels</strong>.</li>
                <li>Great Britain and the EU (including Ireland and Northern Ireland) have <strong>separate systems</strong>. Selling into both means notifying in both.</li>
                <li>This applies at craft markets, on Etsy and on your own website. Selling small amounts doesn&apos;t exempt you.</li>
              </ul>
            </div>

            <h2 style={H2}>What is a CPSR?</h2>
            <p style={P}>A CPSR is a document that shows your product is safe for people to use. A qualified safety assessor reviews your exact recipe (every oil, the lye, the fragrance, colours and additives) and signs it off.</p>
            <ul style={UL}>
              <li><strong>Part A: the facts.</strong> Your full formula, ingredient safety data, how much of each ingredient reaches the skin, microbiology, packaging and stability.</li>
              <li><strong>Part B: the verdict.</strong> The assessor&apos;s conclusion that the product is safe, plus any warnings that must go on your label.</li>
            </ul>
            <p style={P}>One CPSR covers one formula. If you change the oils, fragrance or percentages, the report may need updating.</p>

            <h2 style={H2}>Is soap really a cosmetic?</h2>
            <p style={P}>What counts is what the soap is <em>for</em>, not whether it&apos;s handmade. Under <a href={EURLEX} style={A}>Article 2(1)(a) of Regulation 1223/2009</a>, a cosmetic is anything meant to go on the outside of the body mainly to clean, perfume, protect or care for it.</p>
            <ul style={UL}>
              <li><strong>Cosmetic:</strong> hand soap, body bars, facial bars and shampoo bars. That covers almost all handmade bar soap.</li>
              <li><strong>Not a cosmetic:</strong> soap sold only for laundry, dishes or cleaning surfaces. That counts as a detergent under the EU Detergents Regulation (648/2004), which has its own rules.</li>
              <li><strong>Sold for both skin and laundry?</strong> It&apos;s treated as a cosmetic, and detergent rules may apply as well.</li>
              <li><strong>Handmade doesn&apos;t exempt you.</strong> There&apos;s no small-batch or handmade exemption.</li>
              <li>Be careful with claims. If you say your soap &quot;treats eczema&quot; or &quot;cures acne&quot;, you&apos;re making medicinal claims, which cosmetics are not allowed to make.</li>
            </ul>

            <h2 style={H2}>What does a CPSR cost?</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: '#FFFFFF' }}>
                <thead>
                  <tr><th style={TH}>What</th><th style={TH}>Typical cost</th><th style={TH}>Notes</th></tr>
                </thead>
                <tbody>
                  <tr><td style={TD}>Template or &quot;pre-assessed&quot; soap CPSR</td><td style={TD}>~£60–£100</td><td style={TD}>Cheapest option. You usually have to follow the assessor&apos;s set recipe, and some require you to buy ingredients from a specific supplier.</td></tr>
                  <tr><td style={TD}>Bespoke CPSR for your own recipe</td><td style={TD}>~£100–£180</td><td style={TD}>The assessor reviews your custom formula and ingredients.</td></tr>
                  <tr><td style={TD}>One recipe with several fragrance or colour variants</td><td style={TD}>~£100–£170</td><td style={TD}>Often only slightly more than a single CPSR. Some published offers cover 10 variants for around £100–£170.</td></tr>
                  <tr><td style={TD}>Full compliance package (CPSR plus PIF and notification help)</td><td style={TD}>~£300–£360+</td><td style={TD}>For sellers who want help with all of the paperwork.</td></tr>
                  <tr><td style={TD}>Notification (UK SCPN or EU CPNP)</td><td style={TD}>Free</td><td style={TD}>You do it yourself online.</td></tr>
                  <tr><td style={TD}>Product liability insurance</td><td style={TD}>Varies</td><td style={TD}>Not legally part of the CPSR, but most markets and shops will ask for it.</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ ...SMALL, marginTop: '0.75rem' }}>Ranges are based on prices published by UK small-batch assessors, checked November 2026. They are not quotes. A &quot;CPSR&quot; isn&apos;t always like-for-like: some prices cover the safety report only, while others include variants, a PIF or notification help. Compare what&apos;s included, get at least 3 quotes and check the assessor&apos;s qualifications. Irish and EU sellers should confirm the report is valid for the EU market, not just Great Britain. The <a href={HPRA} style={A}>HPRA</a> does not recommend or approve individual assessors.</p>
            <p style={P}><strong>Tip to save money:</strong> launch with 2 or 3 base recipes and use fragrance variants, rather than 10 completely different formulas. Variant packages often cost only a little more than a single CPSR.</p>

            <h2 style={H2}>Everything you need before you sell</h2>
            <h3 style={H3}>1. A Responsible Person (RP)</h3>
            <ul style={UL}>
              <li>The person or business legally responsible for the product&apos;s safety and paperwork.</li>
              <li>If you make and sell your own soap, <strong>that&apos;s usually you</strong>.</li>
              <li>For <strong>Great Britain</strong> (England, Scotland, Wales) the RP must be based in the UK.</li>
              <li>For the <strong>EU</strong> (including Ireland) and <strong>Northern Ireland</strong>, the RP must be based in the EU/EEA or Northern Ireland.</li>
              <li>The RP&apos;s name and address must appear on the label.</li>
            </ul>

            <h3 style={H3}>2. A CPSR for each recipe</h3>
            <ul style={UL}>
              <li>Signed by a qualified safety assessor. Under <a href={EURLEX} style={A}>Article 10(2) of Regulation 1223/2009</a>, they need a university-level qualification in pharmacy, toxicology, medicine or a similar discipline, or a course an EU Member State recognises as equivalent.</li>
              <li>A soap-making course or cosmetic formulation diploma on its own doesn&apos;t qualify someone to sign a CPSR.</li>
              <li>The CPSR itself must show the assessor&apos;s name and address, proof of their qualification, and the date and their signature. If yours doesn&apos;t, ask why.</li>
            </ul>

            <h3 style={H3}>3. A Product Information File (PIF)</h3>
            <ul style={UL}>
              <li>A folder (paper or digital) you keep for each product and must be able to show an inspector.</li>
              <li>It contains a product description, your CPSR, how you make the product (following Good Manufacturing Practice), proof of any claims you make, and any animal testing data (normally none).</li>
              <li>Keep it for <strong>10 years</strong> after the last batch was placed on the market.</li>
            </ul>

            <h3 style={H3}>4. A notification (free, online)</h3>
            <ul style={UL}>
              <li><strong>Great Britain:</strong> notify each product on the government&apos;s <a href={SCPN} style={A}>SCPN service</a> before selling.</li>
              <li><strong>EU / Ireland:</strong> notify on the EU&apos;s <a href={CPNP} style={A}>CPNP portal</a> before selling.</li>
              <li><strong>Northern Ireland:</strong> notify on the EU&apos;s <strong>CPNP</strong>, not SCPN. The Responsible Person must be based in Northern Ireland or the EU/EEA, and can&apos;t be based in Great Britain (<a href={NI_GUIDE} style={A}>GOV.UK Northern Ireland guidance</a>).</li>
            </ul>

            <h3 style={H3}>5. A compliant label</h3>
            <ul style={UL}>
              <li>Product name, and its function if that isn&apos;t obvious.</li>
              <li>Name and address of the Responsible Person.</li>
              <li>Weight (e.g. 100 g).</li>
              <li>Full ingredient list using <strong>INCI names</strong> (e.g. <em>Sodium Olivate</em>, not &quot;olive oil&quot;), in descending order by weight.</li>
              <li>Fragrance allergens above the legal threshold, listed by name. For rinse-off products like soap, that&apos;s above 0.01%.</li>
              <li><strong>Important (EU, Ireland and Northern Ireland):</strong> the EU expanded the list of allergens that must be labelled (<a href={ALLERGEN_REG} style={A}>Regulation (EU) 2023/1545</a>). According to the <a href={HPRA_ALLERGENS} style={A}>HPRA</a>, new products placed on the market from <strong>31 July 2026</strong> must already follow the expanded list, and products already on the market have until <strong>31 July 2028</strong>. In practice, <strong>bars you make now are new stock</strong>: even if you sold the same recipe before July 2026, new batches need labels that follow the expanded list. Ask your fragrance supplier for an allergen declaration updated to the expanded list. UK rules may differ, so ask your safety assessor which list applies to your labels.</li>
              <li>Batch number.</li>
              <li>A &quot;best before&quot; date <em>or</em> the open-jar (PAO) symbol, depending on shelf life.</li>
              <li>Any warnings from your CPSR.</li>
            </ul>

            <h2 style={H2}>Great Britain vs EU vs Northern Ireland at a glance</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: '#FFFFFF', minWidth: 560 }}>
                <thead>
                  <tr><th style={TH}></th><th style={TH}>Great Britain</th><th style={TH}>EU / Ireland</th><th style={TH}>Northern Ireland</th></tr>
                </thead>
                <tbody>
                  <tr><td style={TD}>Law</td><td style={TD}>UK Cosmetics Regulation (retained EU law)</td><td style={TD}>EU Cosmetics Regulation 1223/2009</td><td style={TD}>EU Regulation 1223/2009 (Windsor Framework)</td></tr>
                  <tr><td style={TD}>Responsible Person</td><td style={TD}>Must be UK-based</td><td style={TD}>Must be EU/EEA-based</td><td style={TD}>NI or EU/EEA-based, not GB</td></tr>
                  <tr><td style={TD}>Notification portal</td><td style={TD}>SCPN (GOV.UK)</td><td style={TD}>CPNP (European Commission)</td><td style={TD}>CPNP</td></tr>
                  <tr><td style={TD}>Who enforces it</td><td style={TD}>Trading Standards / OPSS</td><td style={TD}>Ireland: <a href={HPRA} style={A}>HPRA</a>; other countries have their own authority</td><td style={TD}>See <a href={NI_GUIDE} style={A}>GOV.UK NI guidance</a></td></tr>
                  <tr><td style={TD}>Cost to notify</td><td style={TD}>Free</td><td style={TD}>Free</td><td style={TD}>Free</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ ...P, marginTop: '1rem' }}>Selling from Ireland to customers in Great Britain, or from Great Britain to EU customers, means meeting <strong>both</strong> sets of requirements, including a Responsible Person in each.</p>
            <p style={P}>For the full step-by-step picture, including Good Manufacturing Practice and record keeping, read our <Link href="/blog/selling-handmade-soap-legal-requirements/" style={A}>Selling Handmade Soap Legally checklist</Link>.</p>

            <h2 style={H2}>Free checklist: are you ready to sell?</h2>
            <p style={P}>Tick off each step. Your progress is saved in this browser only. Need somewhere to record batch numbers? Download the free <Link href="/free-soap-journal/" style={A}>printable soap batch journal</Link>.</p>
            <ReadinessChecklist />

            <div style={{ background: '#5C3D2E', color: '#FAF7F2', padding: '1.5rem', marginTop: '2rem' }}>
              <p style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.4rem' }}>Your assessor will ask for your exact formula.</p>
              <p style={{ color: '#C9B49A', lineHeight: 1.7, fontSize: '0.92rem', marginBottom: '1rem' }}>Work out every recipe with exact percentages in the free LatherForge soap calculator, then price it properly in the Etsy pricing calculator.</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/lye-calculator/" className="btn-primary">Open the soap calculator</Link>
                <Link href="/etsy-pricing-calculator/" style={{ color: '#F5EDD6', textDecoration: 'underline', alignSelf: 'center' }}>Etsy pricing calculator →</Link>
              </div>
            </div>

            <h2 style={H2}>CPSR FAQ</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {FAQS.map(f => (
                <div key={f.q} style={{ borderBottom: '1px solid #E8DFD0', paddingBottom: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.05rem', color: '#3E2820', marginBottom: '0.5rem' }}>{f.q}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#5C4A3A', lineHeight: 1.7 }}>{f.a}</p>
                </div>
              ))}
            </div>

            <section id="disclaimer" style={{ borderTop: '1px solid #E8DFD0', marginTop: '3rem', paddingTop: '1.5rem' }}>
              <h2 style={{ fontSize: '1.05rem', color: '#3E2820', marginBottom: '0.6rem' }}>Disclaimer</h2>
              <p style={{ ...SMALL, marginBottom: '0.6rem' }}>This page gives general information for educational purposes only. It is not legal, regulatory, tax, accounting or financial advice, and using it does not create any professional relationship with LatherForge. Laws and regulations change and may not apply to your situation. Before placing any cosmetic product on the market, have it assessed by a qualified cosmetic safety assessor, and confirm your obligations with the relevant authority: the HPRA (Ireland), the Office for Product Safety and Standards or your local Trading Standards (UK), or the competent authority in your EU country. For legal questions, consult a solicitor.</p>
              <p style={{ ...SMALL, marginBottom: '0.6rem' }}>Prices mentioned are indicative ranges only, not quotes. All information is provided without warranty of accuracy or completeness and, to the fullest extent permitted by law, LatherForge accepts no liability for any loss arising from reliance on it. You are responsible for your own products and compliance.</p>
              <p style={SMALL}>Last reviewed: 8 November 2026. Sources: EUR-Lex (Regulations 1223/2009 and 2023/1545), HPRA, GOV.UK, and prices published by UK safety assessors.</p>
            </section>
          </div>
        </section>
      </main>
      <RelatedGuides page="/cpsr-for-soap/" />
      <Footer />
    </>
  )
}
