'use client'
import { useEffect, useState, type CSSProperties } from 'react'
import { OILS, calculateLye, type LyeResult, type LyeType, type Method, type OilEntry } from '@/lib/soap'

type Tab = 'calc' | 'soaps' | 'selling'

type Recipe = {
  id: string
  name: string
  lyeType: LyeType
  method: Method
  superfat: number
  oils: OilEntry[]
  result: LyeResult
  createdAt: string
  madeAt?: string
  cureWeeks: number
}

const STORAGE_KEY = 'lf-app-recipes'
const EARLY_ACCESS = '/early-access/?source=app'
const DAY = 86400000

function loadRecipes(): Recipe[] {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') } catch { return [] }
}

function storeRecipes(recipes: Recipe[]) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes)) } catch { /* storage unavailable */ }
}

function cureStatus(r: Recipe): { label: string; ready: boolean } | null {
  if (!r.madeAt) return null
  const readyAt = new Date(r.madeAt).getTime() + r.cureWeeks * 7 * DAY
  const days = Math.ceil((readyAt - Date.now()) / DAY)
  if (days <= 0) return { label: 'Cured and ready to use', ready: true }
  return { label: `Ready in ${days} day${days === 1 ? '' : 's'} (${new Date(readyAt).toLocaleDateString()})`, ready: false }
}

const C = {
  walnut: '#5C3D2E', dark: '#3E2820', gold: '#C9A84C', cream: '#FAF7F2',
  creamDark: '#F0EAE0', border: '#E8DFD0', muted: '#7A6E62', sage: '#EBF2EC'
}

const label: CSSProperties = {
  display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em',
  textTransform: 'uppercase', color: C.walnut, marginBottom: '0.5rem'
}
const input: CSSProperties = {
  width: '100%', padding: '0.7rem 0.8rem', border: '1px solid #D4C8BB', background: '#FFFFFF',
  fontFamily: 'Jost, sans-serif', fontSize: '1rem', color: C.dark, outline: 'none', borderRadius: 6
}
const card: CSSProperties = {
  background: '#FFFFFF', border: `1px solid ${C.border}`, borderRadius: 10, padding: '1rem', marginBottom: '0.9rem'
}
const primaryBtn: CSSProperties = {
  width: '100%', padding: '0.9rem', background: C.gold, color: C.dark, border: 'none', borderRadius: 8,
  fontFamily: 'Jost, sans-serif', fontWeight: 600, fontSize: '0.95rem', letterSpacing: '0.04em', cursor: 'pointer'
}
const ghostBtn: CSSProperties = {
  ...primaryBtn, background: 'transparent', color: C.walnut, border: `1px solid ${C.walnut}`
}

function Toggle<T extends string>({ value, options, onChange }: { value: T; options: [T, string][]; onChange: (v: T) => void }) {
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      {options.map(([v, text]) => (
        <button key={v} onClick={() => onChange(v)} style={{
          flex: 1, padding: '0.7rem 0.4rem', borderRadius: 6, cursor: 'pointer',
          fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '0.88rem',
          background: value === v ? C.walnut : '#FFFFFF', color: value === v ? '#F5EDD6' : C.walnut,
          border: `1px solid ${value === v ? C.walnut : '#D4C8BB'}`
        }}>{text}</button>
      ))}
    </div>
  )
}

function Locked({ title, feature, children }: { title: string; feature: string; children: React.ReactNode }) {
  return (
    <div style={card}>
      <p style={{ ...label, display: 'flex', justifyContent: 'space-between' }}>
        <span>{title}</span><span style={{ color: C.gold }}>🔒 LatherForge</span>
      </p>
      <div style={{ filter: 'blur(4px)', userSelect: 'none', pointerEvents: 'none' }} aria-hidden>{children}</div>
      <a href={`${EARLY_ACCESS}&feature=${feature}`} style={{ ...primaryBtn, display: 'block', textAlign: 'center', marginTop: '0.9rem', textDecoration: 'none' }}>
        Get early access — 3 months free
      </a>
    </div>
  )
}

export default function AppClient() {
  const [tab, setTab] = useState<Tab>('calc')
  const [recipes, setRecipes] = useState<Recipe[]>([])

  // Calculator state
  const [lyeType, setLyeType] = useState<LyeType>('NaOH')
  const [method, setMethod] = useState<Method>('cold')
  const [superfat, setSuperfat] = useState(5)
  const [oils, setOils] = useState<OilEntry[]>([{ oil: 'Olive Oil', weight: '' }, { oil: 'Coconut Oil (76°)', weight: '' }])
  const [result, setResult] = useState<LyeResult | null>(null)
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [saved, setSaved] = useState(false)

  // Selling state
  const [batchCost, setBatchCost] = useState('')
  const [bars, setBars] = useState('')
  const [labelRecipeId, setLabelRecipeId] = useState('')

  useEffect(() => {
    setRecipes(loadRecipes())
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {})
  }, [])

  const updateRecipes = (next: Recipe[]) => { setRecipes(next); storeRecipes(next) }

  const updateOil = (i: number, field: keyof OilEntry, val: string) => {
    setOils(oils.map((o, idx) => idx === i ? { ...o, [field]: val } : o))
    setResult(null); setSaved(false)
  }

  const calculate = () => {
    setError(''); setSaved(false)
    const r = calculateLye(oils, lyeType, superfat)
    if (!r) { setError('Enter at least one oil weight.'); return }
    setResult(r)
  }

  const saveRecipe = () => {
    if (!result) return
    const recipe: Recipe = {
      id: Date.now().toString(36),
      name: name.trim() || `Recipe ${recipes.length + 1}`,
      lyeType, method, superfat, result,
      oils: oils.filter(o => parseFloat(o.weight) > 0),
      createdAt: new Date().toISOString(),
      cureWeeks: method === 'cold' ? 4 : 1
    }
    updateRecipes([recipe, ...recipes])
    setName(''); setSaved(true)
  }

  const markMade = (id: string) =>
    updateRecipes(recipes.map(r => r.id === id ? { ...r, madeAt: new Date().toISOString() } : r))
  const setCure = (id: string, weeks: number) =>
    updateRecipes(recipes.map(r => r.id === id ? { ...r, cureWeeks: weeks } : r))
  const deleteRecipe = (id: string) => {
    if (confirm('Delete this recipe?')) updateRecipes(recipes.filter(r => r.id !== id))
  }

  const costPerBar = (parseFloat(batchCost) > 0 && parseInt(bars) > 0)
    ? (parseFloat(batchCost) / parseInt(bars)).toFixed(2) : null
  const labelRecipe = recipes.find(r => r.id === labelRecipeId) || recipes[0]

  return (
    <div style={{ minHeight: '100vh', background: C.cream, display: 'flex', flexDirection: 'column', maxWidth: 560, margin: '0 auto' }}>
      {/* HEADER */}
      <header style={{ background: C.walnut, color: C.cream, padding: 'calc(env(safe-area-inset-top) + 0.9rem) 1rem 0.9rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <svg width="28" height="28" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill={C.dark}/><text x="16" y="22" textAnchor="middle" fill={C.gold} fontSize="14" fontFamily="Georgia,serif" fontWeight="700">LF</text></svg>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem', fontWeight: 600 }}>LatherForge</span>
        <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: '#C9B49A' }}>Soap Calculator</span>
      </header>

      <main style={{ flex: 1, padding: '1.1rem 1rem 6rem' }}>
        {tab === 'calc' && (
          <>
            <div style={{ marginBottom: '1.1rem' }}>
              <span style={label}>Lye type</span>
              <Toggle value={lyeType} onChange={v => { setLyeType(v); setResult(null) }} options={[['NaOH', 'NaOH (bar)'], ['KOH', 'KOH (liquid)']]} />
            </div>
            <div style={{ marginBottom: '1.1rem' }}>
              <span style={label}>Method</span>
              <Toggle value={method} onChange={setMethod} options={[['cold', 'Cold process'], ['hot', 'Hot process']]} />
            </div>
            <div style={{ marginBottom: '1.1rem' }}>
              <span style={label}>Superfat: {superfat}%</span>
              <input type="range" min="0" max="20" value={superfat} onChange={e => { setSuperfat(Number(e.target.value)); setResult(null) }} style={{ width: '100%', accentColor: C.gold }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <span style={label}>Oils &amp; butters (grams)</span>
              {oils.map((o, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'center' }}>
                  <select value={o.oil} onChange={e => updateOil(i, 'oil', e.target.value)} style={{ ...input, flex: 2 }}>
                    {Object.keys(OILS).map(n => <option key={n}>{n}</option>)}
                  </select>
                  <input type="number" inputMode="decimal" min="0" placeholder="g" value={o.weight} onChange={e => updateOil(i, 'weight', e.target.value)} style={{ ...input, flex: 1, textAlign: 'center' }} />
                  {oils.length > 1 && (
                    <button aria-label="Remove oil" onClick={() => { setOils(oils.filter((_, idx) => idx !== i)); setResult(null) }} style={{ background: 'none', border: 'none', color: C.muted, fontSize: '1.4rem', cursor: 'pointer', padding: '0 0.2rem' }}>×</button>
                  )}
                </div>
              ))}
              <button onClick={() => setOils([...oils, { oil: 'Olive Oil', weight: '' }])} style={{ width: '100%', padding: '0.6rem', background: 'none', border: `1px dashed ${C.gold}`, borderRadius: 6, color: '#8B6010', fontFamily: 'Jost, sans-serif', cursor: 'pointer' }}>
                + Add oil
              </button>
            </div>

            {error && <p style={{ color: '#C0392B', fontSize: '0.9rem', marginBottom: '0.8rem' }}>{error}</p>}
            <button onClick={calculate} style={primaryBtn}>Calculate lye</button>

            {result && (
              <div style={{ ...card, background: C.dark, border: 'none', color: C.cream, marginTop: '1.1rem' }}>
                {[
                  [`${lyeType} required`, `${result.lye} g`],
                  ['Water required', `${result.water} g`],
                  ['Total oils', `${result.totalOil} g`],
                  ['Superfat', `${superfat}%`]
                ].map(([k, v], i) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.55rem 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                    <span style={{ color: '#A89882', fontSize: '0.9rem' }}>{k}</span>
                    <span style={{ color: i === 0 ? C.gold : C.cream, fontWeight: 600, fontSize: i === 0 ? '1.3rem' : '1rem' }}>{v}</span>
                  </div>
                ))}
                <p style={{ fontSize: '0.78rem', color: '#A89882', marginTop: '0.8rem', lineHeight: 1.5 }}>
                  ⚠️ Always add lye to water, never water to lye. Wear gloves and eye protection.
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <input placeholder="Recipe name" value={name} onChange={e => setName(e.target.value)} style={{ ...input, flex: 2 }} />
                  <button onClick={saveRecipe} disabled={saved} style={{ ...primaryBtn, flex: 1, width: 'auto', opacity: saved ? 0.6 : 1 }}>
                    {saved ? 'Saved ✓' : 'Save'}
                  </button>
                </div>
                {saved && (
                  <button onClick={() => setTab('soaps')} style={{ background: 'none', border: 'none', color: C.gold, marginTop: '0.6rem', cursor: 'pointer', fontFamily: 'Jost, sans-serif' }}>
                    View in My Soaps →
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {tab === 'soaps' && (
          <>
            {recipes.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', color: C.muted }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.6rem' }}>🧼</div>
                <p>No saved recipes yet.</p>
                <button onClick={() => setTab('calc')} style={{ ...ghostBtn, marginTop: '1rem' }}>Calculate your first recipe</button>
              </div>
            ) : recipes.map(r => {
              const status = cureStatus(r)
              return (
                <div key={r.id} style={card}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontSize: '1.25rem', color: C.dark }}>{r.name}</h3>
                    <button onClick={() => deleteRecipe(r.id)} aria-label="Delete recipe" style={{ background: 'none', border: 'none', color: C.muted, cursor: 'pointer' }}>Delete</button>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: C.muted, marginBottom: '0.5rem' }}>
                    {r.result.lye} g {r.lyeType} · {r.result.water} g water · {r.superfat}% SF · {r.method === 'cold' ? 'Cold' : 'Hot'} process
                  </p>
                  <p style={{ fontSize: '0.85rem', color: C.dark, marginBottom: '0.8rem' }}>
                    {r.oils.map(o => `${o.oil} ${o.weight} g`).join(', ')}
                  </p>
                  {status ? (
                    <div style={{ background: status.ready ? C.sage : C.creamDark, borderRadius: 6, padding: '0.6rem 0.8rem', fontSize: '0.88rem', color: status.ready ? '#4A7A4E' : C.walnut }}>
                      {status.ready ? '✅' : '⏳'} {status.label}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <select value={r.cureWeeks} onChange={e => setCure(r.id, Number(e.target.value))} style={{ ...input, flex: 1 }} aria-label="Cure time">
                        {[1, 2, 3, 4, 5, 6, 8].map(w => <option key={w} value={w}>{w} week cure</option>)}
                      </select>
                      <button onClick={() => markMade(r.id)} style={{ ...primaryBtn, flex: 1 }}>I made this today</button>
                    </div>
                  )}
                </div>
              )
            })}
            {recipes.length > 0 && (
              <p style={{ fontSize: '0.8rem', color: C.muted, textAlign: 'center', marginTop: '0.5rem' }}>
                Recipes are saved on this phone. <a href={`${EARLY_ACCESS}&feature=sync`} style={{ color: C.walnut, textDecoration: 'underline' }}>Sync and full batch history are coming in LatherForge.</a>
              </p>
            )}
          </>
        )}

        {tab === 'selling' && (
          <>
            <div style={card}>
              <span style={label}>Cost per bar</span>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.7rem' }}>
                <input type="number" inputMode="decimal" min="0" placeholder="Batch cost €" value={batchCost} onChange={e => setBatchCost(e.target.value)} style={input} />
                <input type="number" inputMode="numeric" min="1" placeholder="Bars" value={bars} onChange={e => setBars(e.target.value)} style={input} />
              </div>
              <p style={{ fontSize: '1rem', color: C.dark }}>
                Cost per bar: <strong style={{ fontSize: '1.3rem', color: C.walnut }}>{costPerBar ? `€${costPerBar}` : '—'}</strong>
              </p>
            </div>

            <Locked title="Pricing & profit" feature="pricing">
              {[['Suggested retail price', '€6.50'], ['Profit per bar', '€4.20'], ['Wholesale price', '€3.90'], ['Break-even bars', '14']].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', fontSize: '0.92rem' }}>
                  <span>{k}</span><strong>{v}</strong>
                </div>
              ))}
            </Locked>

            <div style={{ position: 'relative' }}>
              {recipes.length > 1 && (
                <select value={labelRecipe?.id} onChange={e => setLabelRecipeId(e.target.value)} style={{ ...input, marginBottom: '0.6rem' }} aria-label="Recipe for label">
                  {recipes.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                </select>
              )}
              <Locked title="Printable label" feature="labels">
                <div style={{ border: `2px solid ${C.walnut}`, borderRadius: 6, padding: '0.8rem', fontSize: '0.8rem', lineHeight: 1.5 }}>
                  <strong style={{ fontSize: '1.1rem' }}>{labelRecipe?.name || 'Your Soap'}</strong>
                  <p>Ingredients: {labelRecipe ? labelRecipe.oils.map(o => o.oil).join(', ') : 'Olive Oil, Coconut Oil, Shea Butter'} (converted to INCI names)</p>
                  <p>Batch: LF-0001 · Net weight: 100 g · Responsible person: Your Business</p>
                </div>
              </Locked>
            </div>

            <p style={{ fontSize: '0.8rem', color: C.muted, textAlign: 'center' }}>
              Selling your soap? LatherForge handles pricing, compliant labels and batch records. Launching January 2027.
            </p>
          </>
        )}
      </main>

      {/* TAB BAR */}
      <nav style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, background: '#FFFFFF', borderTop: `1px solid ${C.border}`,
        display: 'flex', justifyContent: 'center', paddingBottom: 'env(safe-area-inset-bottom)'
      }}>
        <div style={{ display: 'flex', width: '100%', maxWidth: 560 }}>
          {([['calc', '⚗️', 'Calculate'], ['soaps', '🧼', 'My Soaps'], ['selling', '💶', 'Selling']] as [Tab, string, string][]).map(([t, icon, text]) => (
            <button key={t} onClick={() => setTab(t)} style={{
              flex: 1, padding: '0.6rem 0 0.7rem', background: 'none', border: 'none', cursor: 'pointer',
              color: tab === t ? C.walnut : '#A89882', fontFamily: 'Jost, sans-serif', fontSize: '0.75rem',
              fontWeight: tab === t ? 600 : 400, borderTop: `2px solid ${tab === t ? C.gold : 'transparent'}`
            }}>
              <div style={{ fontSize: '1.3rem' }}>{icon}</div>{text}
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
