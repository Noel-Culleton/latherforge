// NaOH SAP values (grams of NaOH per gram of oil)
export const OILS: Record<string, number> = {
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

export type LyeType = 'NaOH' | 'KOH'
export type Method = 'cold' | 'hot'
export type OilEntry = { oil: string; weight: string }
export type LyeResult = { lye: number; water: number; totalOil: number }

const KOH_PURITY = 0.90

export function calculateLye(oils: OilEntry[], lyeType: LyeType, superfat: number): LyeResult | null {
  const parsed = oils.map(o => ({ sap: OILS[o.oil] || 0, weight: parseFloat(o.weight) || 0 }))
  const totalOil = parsed.reduce((s, o) => s + o.weight, 0)
  if (totalOil <= 0) return null

  let rawLye = parsed.reduce((s, o) => s + o.sap * o.weight, 0)
  if (lyeType === 'KOH') rawLye = rawLye * (56.11 / 40.00) / KOH_PURITY
  const lye = rawLye * (1 - superfat / 100)
  const water = lye * 2.0

  return { lye: Math.round(lye * 10) / 10, water: Math.round(water * 10) / 10, totalOil: Math.round(totalOil * 10) / 10 }
}
