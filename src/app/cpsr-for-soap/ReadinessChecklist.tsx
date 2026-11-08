'use client'
import { useEffect, useState } from 'react'

const ITEMS = [
  'My soap is only for washing skin and makes no medical claims',
  'I know my exact recipe, including the percentage of every ingredient',
  'I have a signed CPSR for every recipe I sell',
  'I know who the Responsible Person is (usually me) and they are based in the right place for where I sell',
  'I have a Product Information File for each product',
  'I have notified each product on SCPN (Great Britain) and/or CPNP (EU, Ireland, Northern Ireland)',
  'My labels show INCI ingredients, allergens, weight, batch number and the Responsible Person’s name and address',
  'I record batch numbers so I can trace every bar I sell',
  'I have product liability insurance',
  'My prices cover the cost of my CPSRs'
]
const KEY = 'lf-cpsr-checklist'

export default function ReadinessChecklist() {
  const [checked, setChecked] = useState<boolean[]>(() => ITEMS.map(() => false))

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || '[]')
      if (Array.isArray(saved)) setChecked(ITEMS.map((_, i) => !!saved[i]))
    } catch { /* storage unavailable */ }
  }, [])

  const toggle = (i: number) => {
    const next = checked.map((c, idx) => (idx === i ? !c : c))
    setChecked(next)
    try { localStorage.setItem(KEY, JSON.stringify(next)) } catch { /* storage unavailable */ }
  }

  const done = checked.filter(Boolean).length
  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E8DFD0', padding: '1.5rem' }}>
      {ITEMS.map((item, i) => (
        <label key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.6rem 0', borderBottom: '1px solid #F0EAE0', cursor: 'pointer', fontSize: '0.92rem', color: '#3E2820', lineHeight: 1.5 }}>
          <input type="checkbox" checked={checked[i]} onChange={() => toggle(i)} style={{ marginTop: '0.25rem', width: 18, height: 18, flex: 'none' }} />
          {item}
        </label>
      ))}
      <div style={{ height: 10, background: '#E8DFD0', marginTop: '1rem' }}>
        <div style={{ height: '100%', width: `${(done / ITEMS.length) * 100}%`, background: '#7A9E7E', transition: 'width .2s' }} />
      </div>
      <p aria-live="polite" style={{ marginTop: '0.6rem', fontWeight: 600, color: '#3E2820' }}>
        {done === ITEMS.length ? '10 of 10 done. You’re ready to sell.' : `${done} of ${ITEMS.length} done. ${ITEMS.length - done} to go before you sell.`}
      </p>
    </div>
  )
}
