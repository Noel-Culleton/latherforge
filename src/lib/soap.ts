// SAP values: KOH figures as published by SoapCalc; NaOH is derived as KOH x 40.00/56.11.
// These are pure-lye values — KOH purity is applied in calculateLye.
export const SAP_KOH: Record<string, number> = {
  'Almond Oil, Sweet': 0.195,
  'Apricot Kernel Oil': 0.190,
  'Argan Oil': 0.191,
  'Avocado Oil': 0.186,
  'Babassu Oil': 0.245,
  'Beeswax': 0.094,
  'Camellia Seed Oil': 0.191,
  'Canola Oil': 0.175,
  'Castor Oil': 0.180,
  'Chicken Fat': 0.195,
  'Cocoa Butter': 0.194,
  'Coconut Oil (76°)': 0.257,
  'Corn Oil': 0.192,
  'Cottonseed Oil': 0.194,
  'Evening Primrose Oil': 0.190,
  'Flaxseed (Linseed) Oil': 0.190,
  'Grapeseed Oil': 0.181,
  'Hazelnut Oil': 0.191,
  'Hemp Seed Oil': 0.193,
  'Jojoba Oil': 0.092,
  'Kokum Butter': 0.190,
  'Kukui Nut Oil': 0.189,
  'Lard': 0.198,
  'Macadamia Nut Oil': 0.195,
  'Mango Butter': 0.191,
  'Meadowfoam Oil': 0.169,
  'Neem Oil': 0.193,
  'Olive Oil': 0.190,
  'Olive Oil Pomace': 0.188,
  'Palm Kernel Oil': 0.219,
  'Palm Oil': 0.199,
  'Peanut Oil': 0.192,
  'Poppy Seed Oil': 0.194,
  'Pumpkin Seed Oil': 0.195,
  'Rice Bran Oil': 0.180,
  'Rosehip Oil': 0.187,
  'Safflower Oil (High Oleic)': 0.190,
  'Sesame Oil': 0.187,
  'Shea Butter': 0.179,
  'Soybean Oil': 0.191,
  'Stearic Acid': 0.208,
  'Sunflower Oil': 0.189,
  'Tallow (Beef)': 0.200,
  'Tamanu Oil': 0.201,
  'Walnut Oil': 0.189,
  'Wheat Germ Oil': 0.183
}

export const OILS: Record<string, number> = Object.fromEntries(
  Object.entries(SAP_KOH).map(([oil, koh]) => [oil, Math.round(koh * 40.00 / 56.11 * 1000) / 1000])
)

export type LyeType = 'NaOH' | 'KOH'
export type Method = 'cold' | 'hot'
export type OilEntry = { oil: string; weight: string }
export type LyeResult = { lye: number; water: number; totalOil: number }

const KOH_PURITY = 0.90

export function calculateLye(oils: OilEntry[], lyeType: LyeType, superfat: number): LyeResult | null {
  const sapTable = lyeType === 'KOH' ? SAP_KOH : OILS
  const parsed = oils.map(o => ({ sap: sapTable[o.oil] || 0, weight: parseFloat(o.weight) || 0 }))
  const totalOil = parsed.reduce((s, o) => s + o.weight, 0)
  if (totalOil <= 0) return null

  let rawLye = parsed.reduce((s, o) => s + o.sap * o.weight, 0)
  if (lyeType === 'KOH') rawLye = rawLye / KOH_PURITY
  const lye = rawLye * (1 - superfat / 100)
  const water = lye * 2.0

  return { lye: Math.round(lye * 10) / 10, water: Math.round(water * 10) / 10, totalOil: Math.round(totalOil * 10) / 10 }
}
