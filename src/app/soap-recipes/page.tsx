import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getReviewedRecipes } from '@/lib/recipes'
import { cureLabel } from '@/lib/format'

const live = getReviewedRecipes()

export const metadata: Metadata = {
  title: 'Cold Process Soap Recipes — Tested, With Exact Lye Amounts',
  description: 'Free cold process, hot process and liquid soap recipes with exact lye and water amounts in grams and ounces. Beginner-friendly, palm-free, vegan, goat milk, salt bar and more.',
  alternates: { canonical: 'https://latherforge.com/soap-recipes/' },
  robots: live.length > 0 ? { index: true, follow: true } : { index: false, follow: true }
}

export default function SoapRecipesPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '68px' }}>
        <section style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #EBF2EC 100%)', padding: '4rem 0 3rem' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#3E2820', marginBottom: '1rem' }}>Cold Process Soap Recipes</h1>
            <p style={{ color: '#5C4A3A', maxWidth: '620px', lineHeight: 1.7, fontSize: '1.05rem' }}>
              Soap recipes with exact lye and water amounts in grams and ounces. Open any recipe in the free soap calculator to resize it for your mould.
            </p>
          </div>
        </section>
        <section style={{ background: '#FAF7F2', padding: '3rem 0 5rem' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            {live.length === 0 ? (
              <p style={{ color: '#7A6E62' }}>Our recipe library is being tested and will be published soon. In the meantime, try the <Link href="/lye-calculator/" style={{ color: '#5C3D2E', textDecoration: 'underline' }}>free soap calculator</Link>.</p>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                {live.map(r => (
                  <Link key={r.slug} href={`/soap-recipes/${r.slug}/`} style={{ background: '#FFFFFF', border: '1px solid #E8DFD0', padding: '1.5rem', display: 'block' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A9E7E', marginBottom: '0.5rem' }}>
                      {r.skill} · {r.method === 'cold' ? 'Cold process' : r.lyeType === 'KOH' ? 'Liquid (KOH)' : 'Hot process'}
                    </p>
                    <h2 style={{ fontSize: '1.4rem', color: '#3E2820', marginBottom: '0.5rem' }}>{r.name}</h2>
                    <p style={{ fontSize: '0.9rem', color: '#5C4A3A', lineHeight: 1.6, marginBottom: '0.75rem' }}>{r.description}</p>
                    <p style={{ fontSize: '0.8rem', color: '#9A8878' }}>{r.superfat}% superfat · Cure: {cureLabel(r.cureWeeks)}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
