import { describe, expect, it } from 'vitest'
import { OILS, SAP_KOH, calculateLye } from '../soap'

// NaOH SAP values as published by SoapCalc, typed in independently of soap.ts.
// If a value in SAP_KOH is mistyped, the derived NaOH figure drifts and this fails.
const SOAPCALC_NAOH: Record<string, number> = {
  'Olive Oil': 0.135,
  'Coconut Oil (76°)': 0.183,
  'Shea Butter': 0.128,
  'Castor Oil': 0.128,
  'Lard': 0.141,
  'Palm Oil': 0.142,
  'Palm Kernel Oil': 0.156,
  'Avocado Oil': 0.133,
  'Tallow (Beef)': 0.143,
}

describe('SAP tables', () => {
  it.each(Object.entries(SOAPCALC_NAOH))('%s NaOH SAP matches SoapCalc', (oil, expected) => {
    expect(OILS[oil]).toBeCloseTo(expected, 2)
    expect(Math.abs(OILS[oil] - expected)).toBeLessThanOrEqual(0.002)
  })

  it('every oil has a KOH SAP in the plausible range (waxes ~0.09, coconut ~0.26)', () => {
    for (const [oil, sap] of Object.entries(SAP_KOH)) {
      expect(sap, oil).toBeGreaterThanOrEqual(0.085)
      expect(sap, oil).toBeLessThanOrEqual(0.27)
    }
  })

  it('NaOH table covers exactly the same oils as the KOH table', () => {
    expect(Object.keys(OILS).sort()).toEqual(Object.keys(SAP_KOH).sort())
  })

  it('NaOH value is KOH x 40/56.11 for every oil', () => {
    for (const [oil, koh] of Object.entries(SAP_KOH)) {
      expect(OILS[oil], oil).toBeCloseTo((koh * 40) / 56.11, 3)
    }
  })
})

describe('calculateLye', () => {
  it('1000g olive oil, NaOH, 5% superfat → 128.3g lye, 256.5g water', () => {
    const r = calculateLye([{ oil: 'Olive Oil', weight: '1000' }], 'NaOH', 5)
    expect(r).toEqual({ lye: 128.3, water: 256.5, totalOil: 1000 })
  })

  it('1000g olive oil, NaOH, 0% superfat → 135g lye', () => {
    expect(calculateLye([{ oil: 'Olive Oil', weight: '1000' }], 'NaOH', 0)?.lye).toBe(135)
  })

  it('beginner blend (50/30/15/5) at 1000g, 5% superfat → 140.6g NaOH', () => {
    const r = calculateLye(
      [
        { oil: 'Olive Oil', weight: '500' },
        { oil: 'Coconut Oil (76°)', weight: '300' },
        { oil: 'Shea Butter', weight: '150' },
        { oil: 'Castor Oil', weight: '50' },
      ],
      'NaOH',
      5,
    )
    expect(r?.lye).toBe(140.6)
    expect(r?.totalOil).toBe(1000)
  })

  it('KOH applies 90% purity: 1000g olive oil, 0% superfat → 211.1g', () => {
    expect(calculateLye([{ oil: 'Olive Oil', weight: '1000' }], 'KOH', 0)?.lye).toBe(211.1)
  })

  it('more superfat always means less lye', () => {
    const oils = [{ oil: 'Coconut Oil (76°)', weight: '500' }]
    const lyes = [0, 5, 10, 20].map(sf => calculateLye(oils, 'NaOH', sf)!.lye)
    expect(lyes).toEqual([...lyes].sort((a, b) => b - a))
    expect(new Set(lyes).size).toBe(4)
  })

  it('scales linearly with batch size', () => {
    const small = calculateLye([{ oil: 'Lard', weight: '500' }], 'NaOH', 5)!.lye
    const big = calculateLye([{ oil: 'Lard', weight: '1000' }], 'NaOH', 5)!.lye
    expect(big).toBeCloseTo(small * 2, 0)
  })

  it('water is 2x lye', () => {
    const r = calculateLye([{ oil: 'Palm Oil', weight: '750' }], 'NaOH', 5)!
    expect(r.water).toBeCloseTo(r.lye * 2, 0)
  })

  it('returns null with no oils, zero weight or blank/invalid weight', () => {
    expect(calculateLye([], 'NaOH', 5)).toBeNull()
    expect(calculateLye([{ oil: 'Olive Oil', weight: '0' }], 'NaOH', 5)).toBeNull()
    expect(calculateLye([{ oil: 'Olive Oil', weight: '' }], 'NaOH', 5)).toBeNull()
    expect(calculateLye([{ oil: 'Olive Oil', weight: 'abc' }], 'NaOH', 5)).toBeNull()
  })

  it('ignores blank rows alongside real ones', () => {
    const r = calculateLye(
      [
        { oil: 'Olive Oil', weight: '1000' },
        { oil: 'Coconut Oil (76°)', weight: '' },
      ],
      'NaOH',
      5,
    )
    expect(r?.lye).toBe(128.3)
  })

  // Current behaviour, pinned so any change is deliberate: an oil name the table
  // does not know adds weight but no lye (treated as unsaponified extra fat).
  it('unknown oil name contributes weight but no lye', () => {
    const r = calculateLye(
      [
        { oil: 'Olive Oil', weight: '1000' },
        { oil: 'Mystery Oil', weight: '200' },
      ],
      'NaOH',
      5,
    )
    expect(r?.lye).toBe(128.3)
    expect(r?.totalOil).toBe(1200)
  })
})
