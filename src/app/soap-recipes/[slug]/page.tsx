import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { recipes, getRecipeBySlug, recipeBatch } from '@/lib/recipes'
import { cureLabel } from '@/lib/format'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return recipes.map(r => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const recipe = getRecipeBySlug(slug)
  if (!recipe) return {}
  const url = `https://latherforge.com/soap-recipes/${recipe.slug}/`
  return {
    title: `${recipe.name} Recipe (${recipe.method === 'cold' ? 'Cold Process' : recipe.lyeType === 'KOH' ? 'KOH' : 'Hot Process'})`,
    description: recipe.description,
    alternates: { canonical: url },
    robots: recipe.reviewed ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: { title: `${recipe.name} Recipe`, description: recipe.description, type: 'article', url }
  }
}

const H2 = { fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 500, color: '#3E2820', margin: '2.5rem 0 1rem' } as const
const TH = { textAlign: 'left', padding: '0.6rem 0.75rem', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5C3D2E', borderBottom: '2px solid #E8DFD0' } as const
const TD = { padding: '0.6rem 0.75rem', borderBottom: '1px solid #E8DFD0', fontSize: '0.95rem', color: '#3E2820' } as const

const STEPS = {
  cold: [
    'Put on gloves and eye protection and clear the work area.',
    'Weigh the water (or frozen liquid) into a heat-safe jug. Weigh the lye separately, then slowly add the lye to the water, never the other way round. Stir until dissolved and leave to cool.',
    'Weigh and melt the hard oils and butters, then add the liquid oils.',
    'When the oils and lye solution are both around 35–45°C (unless the tips say otherwise), pour the lye solution into the oils.',
    'Stick blend in short bursts until light trace (like thin custard). Stir in fragrance, colour and any additives.',
    'Pour into the mould, cover and leave for 24–48 hours.',
    'Unmould, cut into bars and cure on a rack in a dry, airy place.'
  ],
  hot: [
    'Put on gloves and eye protection and clear the work area.',
    'Weigh the water into a heat-safe jug. Weigh the lye separately, then slowly add the lye to the water, never the other way round. Stir until dissolved.',
    'Melt the oils in a slow cooker on low.',
    'Add the lye solution to the oils and stick blend to trace.',
    'Cover and cook on low, stirring every 15 minutes, until the soap looks like translucent mashed potato or petroleum jelly.',
    'Let it cool slightly, stir in fragrance and additives, then press into the mould.',
    'Unmould once firm (usually the next day), cut and let the bars dry.'
  ]
}

export default async function RecipePage({ params }: Props) {
  const { slug } = await params
  const recipe = getRecipeBySlug(slug)
  if (!recipe) notFound()

  const metric = recipeBatch(recipe, 1000)
  const imperial = recipeBatch(recipe, 32)
  const lyeName = recipe.lyeType === 'NaOH' ? 'Sodium hydroxide (NaOH)' : 'Potassium hydroxide (KOH, 90%)'
  const batchWeight = Math.round(metric.result.totalOil + metric.result.lye + metric.result.water)
  const steps = recipe.lyeType === 'KOH'
    ? [...STEPS.hot.slice(0, 5), 'Once the paste is fully cooked (a small amount dissolves clear in hot water), dilute it with hot distilled water, a little at a time, until it is the thickness you want.']
    : STEPS[recipe.method]
  const related = recipes.filter(r => r.slug !== recipe.slug && r.reviewed === recipe.reviewed).slice(0, 3)
  const url = `https://latherforge.com/soap-recipes/${recipe.slug}/`

  const schema = [
    {
      '@context': 'https://schema.org', '@type': 'Article',
      headline: `${recipe.name} Recipe`, description: recipe.description, url,
      publisher: { '@type': 'Organization', name: 'LatherForge', url: 'https://latherforge.com' }
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://latherforge.com/' },
        { '@type': 'ListItem', position: 2, name: 'Soap Recipes', item: 'https://latherforge.com/soap-recipes/' },
        { '@type': 'ListItem', position: 3, name: recipe.name, item: url }
      ]
    }
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />
      <main style={{ paddingTop: '68px' }}>
        <section style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #EBF2EC 100%)', padding: '3.5rem 0 2.5rem' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <nav style={{ fontSize: '0.8rem', color: '#9A8878', marginBottom: '1.25rem' }}>
              <Link href="/" style={{ color: '#9A8878' }}>Home</Link>
              <span style={{ margin: '0 0.5rem' }}>→</span>
              <Link href="/soap-recipes/" style={{ color: '#9A8878' }}>Soap Recipes</Link>
              <span style={{ margin: '0 0.5rem' }}>→</span>
              <span style={{ color: '#5C3D2E' }}>{recipe.name}</span>
            </nav>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#3E2820', marginBottom: '1rem' }}>{recipe.name} Recipe</h1>
            <p style={{ color: '#5C4A3A', lineHeight: 1.7, fontSize: '1.05rem' }}>{recipe.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
              {[recipe.skill, recipe.method === 'cold' ? 'Cold process' : 'Hot process', `${recipe.superfat}% superfat`, `Cure: ${cureLabel(recipe.cureWeeks)}`].map(t => (
                <span key={t} style={{ background: '#FFFFFF', border: '1px solid #E8DFD0', padding: '0.3rem 0.75rem', fontSize: '0.8rem', color: '#5C3D2E' }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#FAF7F2', padding: '1rem 0 4rem' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <h2 style={H2}>Why this recipe works</h2>
            <p style={{ color: '#5C4A3A', lineHeight: 1.8 }}>{recipe.why}</p>

            <h2 style={H2}>Ingredients</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: '#FFFFFF' }}>
                <thead>
                  <tr><th style={TH}>Ingredient</th><th style={TH}>%</th><th style={TH}>Grams</th><th style={TH}>Ounces</th></tr>
                </thead>
                <tbody>
                  {recipe.oils.map((o, i) => (
                    <tr key={o.oil}>
                      <td style={TD}>{o.oil}</td><td style={TD}>{o.pct}%</td>
                      <td style={TD}>{metric.oils[i].weight} g</td><td style={TD}>{imperial.oils[i].weight} oz</td>
                    </tr>
                  ))}
                  <tr>
                    <td style={{ ...TD, fontWeight: 600 }}>{lyeName}</td><td style={TD}></td>
                    <td style={{ ...TD, fontWeight: 600 }}>{metric.result.lye} g</td><td style={{ ...TD, fontWeight: 600 }}>{imperial.result.lye} oz</td>
                  </tr>
                  <tr>
                    <td style={TD}>{recipe.liquid || 'Distilled water'}</td><td style={TD}></td>
                    <td style={TD}>{metric.result.water} g</td><td style={TD}>{imperial.result.water} oz</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#7A6E62', marginTop: '0.75rem', lineHeight: 1.6 }}>
              Amounts are for 1000 g (or 32 oz) of oils, a batch of about {batchWeight} g before curing. Water is 2:1 to lye by weight.
            </p>
            {recipe.additives && (
              <ul style={{ margin: '1rem 0 0 1.25rem', color: '#5C4A3A', lineHeight: 1.8 }}>
                {recipe.additives.map(a => <li key={a}>{a}</li>)}
              </ul>
            )}

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <Link href={`/lye-calculator/?recipe=${recipe.slug}`} className="btn-primary">Resize in the soap calculator</Link>
            </div>

            <h2 style={H2}>Method</h2>
            <ol style={{ margin: '0 0 0 1.25rem', color: '#5C4A3A', lineHeight: 1.8 }}>
              {steps.map(s => <li key={s} style={{ marginBottom: '0.5rem' }}>{s}</li>)}
            </ol>

            <h2 style={H2}>Tips</h2>
            <ul style={{ margin: '0 0 0 1.25rem', color: '#5C4A3A', lineHeight: 1.8 }}>
              {recipe.tips.map(t => <li key={t} style={{ marginBottom: '0.4rem' }}>{t}</li>)}
            </ul>

            <div style={{ marginTop: '2rem', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.35)', padding: '1.25rem' }}>
              <p style={{ fontWeight: 600, color: '#8B6010', marginBottom: '0.3rem' }}>⚠️ Lye safety</p>
              <p style={{ fontSize: '0.9rem', color: '#5C4A3A', lineHeight: 1.7 }}>
                Lye is caustic. Wear gloves and eye protection, work in a ventilated room, keep children and pets away, and always add lye to water. Always run any recipe through a lye calculator before making it, especially if you change an oil.
              </p>
            </div>

            <div style={{ marginTop: '2rem', background: '#5C3D2E', padding: '2rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.6rem', color: '#FAF7F2', marginBottom: '0.5rem' }}>Selling your soap?</h3>
              <p style={{ color: '#C9B49A', lineHeight: 1.7, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                LatherForge works out your cost per bar and pricing, builds compliant labels and keeps your batch records. Launching January 2027.
              </p>
              <Link href="/early-access/" className="btn-primary">Get early access</Link>
            </div>

            {related.length > 0 && (
              <>
                <h2 style={H2}>More soap recipes</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  {related.map(r => (
                    <Link key={r.slug} href={`/soap-recipes/${r.slug}/`} style={{ background: '#FFFFFF', border: '1px solid #E8DFD0', padding: '1.25rem', display: 'block' }}>
                      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#3E2820' }}>{r.name}</p>
                      <p style={{ fontSize: '0.8rem', color: '#7A6E62' }}>{r.skill} · {r.superfat}% superfat</p>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
