'use client'
import { useState } from 'react'

const OILS: Record<string, number> = {
  'Coconut Oil (76°)': 0.190,
  'Palm Oil': 0.141,
  'Olive Oil': 0.134,
  'Castor Oil': 0.128,
  'Sunflower Oil': 0.134,
  'Shea Butter': 0.128,
  'Cocoa Butter': 0.137,
  'Sweet Almond Oil': 0.136,
  'Avocado Oil': 0.133,
  'Hemp Seed Oil': 0.135,
  'Lard': 0.138,
  'Tallow': 0.140,
  'Rice Bran Oil': 0.128,
  'Canola Oil': 0.124,
  'Jojoba Oil': 0.069,
  'Argan Oil': 0.136,
  'Apricot Kernel Oil': 0.135,
  'Mango Butter': 0.137,
  'Palm Kernel Oil': 0.190,
  'Neem Oil': 0.139
}

type OilEntry = { oil: string; weight: string }

export default function LyeCalculatorClient() {
  const [lyeType, setLyeType] = useState<'NaOH' | 'KOH'>('NaOH')
  const [method, setMethod] = useState<'cold' | 'hot'>('cold')
  const [superfat, setSuperfat] = useState(5)
  const [oils, setOils] = useState<OilEntry[]>([{ oil: 'Olive Oil', weight: '' }, { oil: 'Coconut Oil (76°)', weight: '' }])
  const [results, setResults] = useState<{ lye: number; water: number; totalOil: number } | null>(null)
  const [error, setError] = useState('')

  const kohPurity = 0.90

  const addOil = () => setOils([...oils, { oil: 'Olive Oil', weight: '' }])
  const removeOil = (i: number) => setOils(oils.filter((_, idx) => idx !== i))
  const updateOil = (i: number, field: keyof OilEntry, val: string) => {
    const updated = [...oils]
    updated[i] = { ...updated[i], [field]: val }
    setOils(updated)
  }

  const calculate = () => {
    setError('')
    const parsed = oils.map(o => ({ sap: OILS[o.oil] || 0, weight: parseFloat(o.weight) || 0 }))
    const totalOil = parsed.reduce((s, o) => s + o.weight, 0)
    if (totalOil <= 0) { setError('Please enter at least one oil weight.'); return }

    let rawLye = parsed.reduce((s, o) => s + o.sap * o.weight, 0)
    if (lyeType === 'KOH') rawLye = rawLye * (56.11 / 40.00) / kohPurity
    const lye = rawLye * (1 - superfat / 100)
    const water = lye * 2.0

    setResults({ lye: Math.round(lye * 10) / 10, water: Math.round(water * 10) / 10, totalOil: Math.round(totalOil * 10) / 10 })
  }

  const reset = () => { setOils([{ oil: 'Olive Oil', weight: '' }, { oil: 'Coconut Oil (76°)', weight: '' }]); setResults(null); setError('') }

  const inputStyle = {
    width: '100%', padding: '0.65rem 0.85rem',
    border: '1px solid #D4C8BB', background: '#FAF7F2',
    fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#3E2820',
    outline: 'none'
  }

  const selectStyle = { ...inputStyle, cursor: 'pointer' }

  return (
    <section style={{ background: '#FAF7F2', padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>

          {/* LEFT — INPUTS */}
          <div>
            {/* Lye Type */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5C3D2E', marginBottom: '0.6rem' }}>Lye Type</label>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {(['NaOH', 'KOH'] as const).map(t => (
                  <button key={t} onClick={() => setLyeType(t)} style={{
                    flex: 1, padding: '0.7rem',
                    background: lyeType === t ? '#5C3D2E' : '#FFFFFF',
                    color: lyeType === t ? '#F5EDD6' : '#5C3D2E',
                    border: `1px solid ${lyeType === t ? '#5C3D2E' : '#D4C8BB'}`,
                    fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer'
                  }}>
                    {t} {t === 'NaOH' ? '(Bar Soap)' : '(Liquid Soap)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Method */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5C3D2E', marginBottom: '0.6rem' }}>Method</label>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {(['cold', 'hot'] as const).map(m => (
                  <button key={m} onClick={() => setMethod(m)} style={{
                    flex: 1, padding: '0.7rem',
                    background: method === m ? '#5C3D2E' : '#FFFFFF',
                    color: method === m ? '#F5EDD6' : '#5C3D2E',
                    border: `1px solid ${method === m ? '#5C3D2E' : '#D4C8BB'}`,
                    fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer'
                  }}>
                    {m === 'cold' ? 'Cold Process' : 'Hot Process'}
                  </button>
                ))}
              </div>
            </div>

            {/* Superfat */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5C3D2E', marginBottom: '0.6rem' }}>
                Superfat: {superfat}%
              </label>
              <input type="range" min="0" max="20" step="1" value={superfat}
                onChange={e => setSuperfat(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#C9A84C', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#9A8878', marginTop: '0.3rem' }}>
                <span>0% (Full Cleanse)</span><span>5% (Standard)</span><span>20% (Super Mild)</span>
              </div>
            </div>

            {/* Oils */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5C3D2E', marginBottom: '0.75rem' }}>
                Oils & Butters (grams)
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {oils.map((o, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <select value={o.oil} onChange={e => updateOil(i, 'oil', e.target.value)} style={{ ...selectStyle, flex: 2 }}>
                      {Object.keys(OILS).map(name => <option key={name}>{name}</option>)}
                    </select>
                    <input type="number" placeholder="g" value={o.weight}
                      onChange={e => updateOil(i, 'weight', e.target.value)}
                      style={{ ...inputStyle, flex: 1, textAlign: 'center' }}
                      min="0"
                    />
                    {oils.length > 1 && (
                      <button onClick={() => removeOil(i)} style={{ background: 'none', border: 'none', color: '#9A8878', cursor: 'pointer', fontSize: '1.1rem', lineHeight: 1 }}>×</button>
                    )}
                  </div>
                ))}
              </div>
              <button onClick={addOil} style={{
                marginTop: '0.75rem', background: 'none', border: '1px dashed #C9A84C',
                color: '#8B6010', fontFamily: 'Jost, sans-serif', fontSize: '0.8rem',
                fontWeight: 500, padding: '0.5rem 1rem', cursor: 'pointer', width: '100%'
              }}>
                + Add Another Oil
              </button>
            </div>

            {error && <p style={{ color: '#C0392B', fontSize: '0.85rem', marginBottom: '1rem' }}>{error}</p>}

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button onClick={calculate} className="btn-primary" style={{ flex: 1 }}>
                Calculate Lye
              </button>
              <button onClick={reset} className="btn-outline" style={{ flex: 1 }}>
                Reset
              </button>
            </div>
          </div>

          {/* RIGHT — RESULTS */}
          <div>
            <div style={{
              background: results ? '#3E2820' : '#F0EAE0',
              border: `1px solid ${results ? '#3E2820' : '#E8DFD0'}`,
              padding: '2rem', minHeight: '400px',
              display: 'flex', flexDirection: 'column', justifyContent: 'center'
            }}>
              {results ? (
                <>
                  <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1.5rem' }}>
                    Your Recipe
                  </p>

                  {[
                    { label: `${lyeType} Required`, value: `${results.lye}g`, highlight: true },
                    { label: 'Water Required', value: `${results.water}g`, highlight: false },
                    { label: 'Total Oil Weight', value: `${results.totalOil}g`, highlight: false },
                    { label: 'Superfat', value: `${superfat}%`, highlight: false },
                    { label: 'Method', value: method === 'cold' ? 'Cold Process' : 'Hot Process', highlight: false }
                  ].map((row, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '0.85rem 0',
                      borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.08)' : 'none'
                    }}>
                      <span style={{ fontSize: '0.85rem', color: '#A89882' }}>{row.label}</span>
                      <span style={{
                        fontSize: row.highlight ? '1.6rem' : '1rem',
                        fontFamily: row.highlight ? 'Cormorant Garamond, serif' : 'Jost, sans-serif',
                        fontWeight: row.highlight ? 500 : 600,
                        color: row.highlight ? '#C9A84C' : '#FAF7F2'
                      }}>
                        {row.value}
                      </span>
                    </div>
                  ))}

                  <div style={{ marginTop: '1.75rem', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', padding: '1rem' }}>
                    <p style={{ fontSize: '0.8rem', color: '#C9A84C', fontWeight: 600, marginBottom: '0.3rem' }}>⚠️ Safety Reminder</p>
                    <p style={{ fontSize: '0.78rem', color: '#A89882', lineHeight: 1.6 }}>
                      Always add lye to water — never water to lye. Wear gloves and eye protection. Work in a ventilated area.
                    </p>
                  </div>
                </>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚗️</div>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: '#7A6E62', marginBottom: '0.5rem' }}>
                    Ready to Calculate
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#9A8878', lineHeight: 1.6 }}>
                    Add your oils and weights on the left, then click Calculate Lye.
                  </p>
                </div>
              )}
            </div>

            {results && (
              <div style={{ marginTop: '1.5rem', background: '#EBF2EC', border: '1px solid #C5D8C7', padding: '1.25rem' }}>
                <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#4A7A4E', marginBottom: '0.4rem' }}>
                  Want to save this recipe?
                </p>
                <p style={{ fontSize: '0.8rem', color: '#5C7A5E', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                  LatherForge saves all your recipes, tracks batches and manages your full soap business.
                </p>
                <a href="/early-access" style={{
                  display: 'block', textAlign: 'center', background: '#5C3D2E',
                  color: '#F5EDD6', fontFamily: 'Jost, sans-serif', fontWeight: 600,
                  fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase',
                  padding: '0.7rem', textDecoration: 'none'
                }}>
                  Register for Early Access
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
