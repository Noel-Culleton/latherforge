'use client'
import { useMemo, useState } from 'react'

const RATES_VERIFIED = '1 September 2026'
const TRANSACTION_PCT = 6.5

type Country = 'US' | 'UK' | 'EU'

const COUNTRIES: Record<Country, { label: string; symbol: string; processPct: number; processFlat: number; adsCap: number | null }> = {
  US: { label: 'United States ($)', symbol: '$', processPct: 3, processFlat: 0.25, adsCap: 100 },
  UK: { label: 'United Kingdom (£)', symbol: '£', processPct: 4, processFlat: 0.2, adsCap: null },
  EU: { label: 'Ireland & eurozone (€)', symbol: '€', processPct: 4, processFlat: 0.3, adsCap: null }
}

const num = (v: string) => {
  const n = parseFloat(v)
  return Number.isFinite(n) ? n : 0
}

const LABEL = { display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7A6E62', marginBottom: '0.4rem' } as const
const INPUT = { width: '100%', padding: '0.6rem 0.75rem', fontSize: '0.95rem', color: '#3E2820', background: '#FAF7F2', border: '1px solid #D4C8BB', fontFamily: 'Jost, sans-serif', outline: 'none' } as const
const HINT = { fontSize: '0.72rem', color: '#9A8878', lineHeight: 1.5, marginTop: '0.35rem' } as const
const CARD = { background: '#FFFFFF', border: '1px solid #E8DFD0', padding: '1.75rem' } as const

function Field({ label, hint, symbol, suffix, value, onChange, step = '0.01' }: {
  label: string; hint?: string; symbol?: string; suffix?: string; value: string; onChange: (v: string) => void; step?: string
}) {
  return (
    <div>
      <label style={LABEL}>{label}</label>
      <div style={{ position: 'relative' }}>
        {symbol && <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#9A8878', fontSize: '0.9rem', pointerEvents: 'none' }}>{symbol}</span>}
        <input
          type="number" inputMode="decimal" step={step} min="0" value={value}
          onChange={e => onChange(e.target.value)}
          style={{ ...INPUT, paddingLeft: symbol ? '1.6rem' : '0.75rem', paddingRight: suffix ? '3.5rem' : '0.75rem' }}
        />
        {suffix && <span style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#9A8878', fontSize: '0.78rem', pointerEvents: 'none' }}>{suffix}</span>}
      </div>
      {hint && <p style={HINT}>{hint}</p>}
    </div>
  )
}

const money = (symbol: string, n: number) => `${n < 0 ? '−' : ''}${symbol}${Math.abs(n).toFixed(2)}`

type Inputs = {
  materials: string; packaging: string; yieldUnits: string; labourMinutes: string; hourlyRate: string; overhead: string
  price: string; shippingCharged: string; shippingCost: string; listingFee: string; offsiteAds: string
}

function calculate(i: Inputs, country: Country) {
  const c = COUNTRIES[country]
  const units = Math.max(num(i.yieldUnits), 0)
  const materialsPerUnit = units > 0 ? num(i.materials) / units : 0
  const labourPerBatch = (num(i.labourMinutes) / 60) * num(i.hourlyRate)
  const costPerUnit = materialsPerUnit + num(i.packaging) + (units > 0 ? labourPerBatch / units : 0) + num(i.overhead)

  const gross = num(i.price) + num(i.shippingCharged)
  const transactionFee = gross * (TRANSACTION_PCT / 100)
  const processingFee = gross * (c.processPct / 100) + c.processFlat
  let adsFee = ((i.offsiteAds === 'off' ? 0 : num(i.offsiteAds)) / 100) * gross
  if (c.adsCap !== null && adsFee > c.adsCap) adsFee = c.adsCap

  const totalFees = num(i.listingFee) + transactionFee + processingFee + adsFee
  const netAfterFees = gross - totalFees
  const profit = netAfterFees - costPerUnit - num(i.shippingCost)
  return { costPerUnit, gross, transactionFee, processingFee, adsFee, totalFees, netAfterFees, profit, margin: gross > 0 ? (profit / gross) * 100 : 0 }
}

function verdict(margin: number) {
  if (margin < 20) return { text: 'This listing is a hobby with extra steps.', tone: '#E8907F' }
  if (margin <= 40) return { text: 'You are making money, but not enough to grow on.', tone: '#E8C97A' }
  return { text: 'That works. Now check you can make it at volume.', tone: '#A8C5AB' }
}

export default function EtsyCalculator() {
  const [country, setCountry] = useState<Country>('EU')
  const [materials, setMaterials] = useState('24.00')
  const [packaging, setPackaging] = useState('0.60')
  const [yieldUnits, setYieldUnits] = useState('12')
  const [labourMinutes, setLabourMinutes] = useState('90')
  const [hourlyRate, setHourlyRate] = useState('15.00')
  const [overhead, setOverhead] = useState('0.00')
  const [price, setPrice] = useState('12.00')
  const [shippingCharged, setShippingCharged] = useState('5.00')
  const [shippingCost, setShippingCost] = useState('4.50')
  const [listingFee, setListingFee] = useState('0.20')
  const [offsiteAds, setOffsiteAds] = useState('off')

  const c = COUNTRIES[country]
  const sym = c.symbol
  const r = useMemo(
    () => calculate({ materials, packaging, yieldUnits, labourMinutes, hourlyRate, overhead, price, shippingCharged, shippingCost, listingFee, offsiteAds }, country),
    [materials, packaging, yieldUnits, labourMinutes, hourlyRate, overhead, price, shippingCharged, shippingCost, listingFee, offsiteAds, country]
  )
  const v = verdict(r.margin)

  const breakdown: [string, number][] = [
    ['Listing fee', num(listingFee)],
    [`Transaction fee (${TRANSACTION_PCT}%)`, r.transactionFee],
    [`Processing (${c.processPct}% + ${sym}${c.processFlat.toFixed(2)})`, r.processingFee],
    ...(offsiteAds !== 'off' ? [[`Offsite Ads (${offsiteAds}%)`, r.adsFee] as [string, number]] : []),
    ['Your shipping cost', num(shippingCost)]
  ]

  return (
    <section style={{ background: '#FAF7F2', padding: '3.5rem 0' }}>
      <style>{`
        .lf-calc-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 1.5rem; align-items: start; }
        .lf-field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        .lf-results { position: sticky; top: 88px; }
        @media (max-width: 900px) { .lf-calc-grid { grid-template-columns: 1fr; } .lf-results { position: static; } }
        @media (max-width: 520px) { .lf-field-grid { grid-template-columns: 1fr; } }
      `}</style>
      <div className="container">
        <div className="lf-calc-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={CARD}>
              <h2 style={{ fontSize: '1.35rem', color: '#3E2820', marginBottom: '0.4rem' }}>What it costs you to make</h2>
              <p style={{ fontSize: '0.85rem', color: '#7A6E62', lineHeight: 1.6, marginBottom: '1.5rem' }}>The half no other Etsy calculator will do for you.</p>
              <div className="lf-field-grid">
                <Field label="Materials per batch" symbol={sym} value={materials} onChange={setMaterials} hint="Oils, lye, fragrance, additives — the whole batch, not one unit." />
                <Field label="Batch yield" suffix="units" value={yieldUnits} onChange={setYieldUnits} step="1" hint="How many sellable units the batch actually produces." />
                <Field label="Packaging per unit" symbol={sym} value={packaging} onChange={setPackaging} hint="Box, wrap, label, insert, tape." />
                <Field label="Overhead per unit" symbol={sym} value={overhead} onChange={setOverhead} hint="Rent, insurance, photography. Leave at 0 if you don't track it yet." />
                <Field label="Labour per batch" suffix="mins" value={labourMinutes} onChange={setLabourMinutes} step="1" hint="Making, cutting, cure checks, wrapping." />
                <Field label="Your hourly rate" symbol={sym} value={hourlyRate} onChange={setHourlyRate} hint="Pay yourself a real wage here, not what is left over." />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: '1px solid #E8DFD0', marginTop: '1.5rem', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#3E2820' }}>True cost per unit</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 600, color: '#3E2820', fontFamily: 'Cormorant Garamond, serif' }}>{money(sym, r.costPerUnit)}</span>
              </div>
            </div>

            <div style={CARD}>
              <h2 style={{ fontSize: '1.35rem', color: '#3E2820', marginBottom: '0.4rem' }}>What Etsy takes</h2>
              <p style={{ fontSize: '0.85rem', color: '#7A6E62', lineHeight: 1.6, marginBottom: '1.5rem' }}>Current published rates, verified {RATES_VERIFIED}.</p>
              <div className="lf-field-grid">
                <div>
                  <label style={LABEL}>Country / currency</label>
                  <select value={country} onChange={e => setCountry(e.target.value as Country)} style={INPUT}>
                    {(Object.keys(COUNTRIES) as Country[]).map(k => <option key={k} value={k}>{COUNTRIES[k].label}</option>)}
                  </select>
                  <p style={HINT}>Sets the payment processing rate — it follows your bank account, not your buyer.</p>
                </div>
                <div>
                  <label style={LABEL}>Offsite Ads</label>
                  <select value={offsiteAds} onChange={e => setOffsiteAds(e.target.value)} style={INPUT}>
                    <option value="off">Not an Offsite Ads sale</option>
                    <option value="12">12% — shop over the threshold</option>
                    <option value="15">15% — standard rate</option>
                  </select>
                  <p style={HINT}>Charged only on orders Etsy attributes to one of its ads.</p>
                </div>
                <Field label="Listing price" symbol={sym} value={price} onChange={setPrice} />
                <Field label="Shipping charged to buyer" symbol={sym} value={shippingCharged} onChange={setShippingCharged} hint="Etsy's transaction fee applies to this too." />
                <Field label="Your actual shipping cost" symbol={sym} value={shippingCost} onChange={setShippingCost} hint="Postage and the mailer. Not a fee — a cost Etsy never sees." />
                <Field label="Listing fee" symbol={sym} value={listingFee} onChange={setListingFee} hint="Etsy sets this at $0.20 USD per listing; non-USD shops are billed the equivalent, so adjust if yours differs." />
              </div>
            </div>
          </div>

          <div className="lf-results">
            <div style={{ ...CARD, background: '#3E2820', border: '1px solid #3E2820' }}>
              <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '0.35rem' }}>Profit per unit</p>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 8vw, 4.25rem)', lineHeight: 1, fontWeight: 600, marginBottom: '1.25rem', color: r.profit < 0 ? '#E8907F' : '#F5EDD6' }}>{money(sym, r.profit)}</p>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '1rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#A89882' }}>Margin</span>
                  <span style={{ fontSize: '1.6rem', fontWeight: 600, color: '#FAF7F2' }}>{r.margin.toFixed(1)}%</span>
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.5, marginTop: '0.4rem', color: v.tone }}>{v.text}</p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {([['Total Etsy fees', r.totalFees], ['Net revenue after fees', r.netAfterFees], ['True cost per unit', r.costPerUnit]] as [string, number][]).map(([label, n]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: '#A89882' }}>{label}</span>
                    <span style={{ color: '#FAF7F2', fontWeight: 600 }}>{money(sym, n)}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: '1rem', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '0.15rem' }}>Where the fees went</p>
                {breakdown.map(([label, n]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#A89882' }}>
                    <span>{label}</span>
                    <span>{money(sym, n)}</span>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: '0.72rem', color: '#9A8878', lineHeight: 1.6, marginTop: '0.9rem' }}>
              Etsy fee rates verified {RATES_VERIFIED}. Etsy sets these, not us — check their current fee schedule before you price a live listing. Nothing here is saved and nothing is sent anywhere: the whole calculation runs in your browser.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
