import type { LyeType } from './soap'

// INCI names for saponified oils (sodium salts). KOH soaps use the potassium
// form. Oils without a reliable entry fall back to a "check INCI" placeholder.
const SAPONIFIED: Record<string, string> = {
  'Olive Oil': 'Olivate',
  'Olive Oil Pomace': 'Olivate',
  'Coconut Oil (76°)': 'Cocoate',
  'Palm Oil': 'Palmate',
  'Palm Kernel Oil': 'Palm Kernelate',
  'Castor Oil': 'Castorate',
  'Shea Butter': 'Shea Butterate',
  'Cocoa Butter': 'Cocoa Butterate',
  'Almond Oil, Sweet': 'Sweet Almondate',
  'Avocado Oil': 'Avocadoate',
  'Hemp Seed Oil': 'Hempseedate',
  'Lard': 'Lardate',
  'Tallow (Beef)': 'Tallowate',
  'Rice Bran Oil': 'Rice Branate',
  'Mango Butter': 'Mango Butterate',
  'Sunflower Oil': 'Sunflowerseedate',
  'Canola Oil': 'Canolate',
  'Babassu Oil': 'Babassuate',
  'Grapeseed Oil': 'Grapeseedate',
  'Apricot Kernel Oil': 'Apricot Kernelate',
  'Soybean Oil': 'Soybeanate',
  'Hazelnut Oil': 'Hazelnutate',
  'Stearic Acid': 'Stearate'
}

export function draftIngredientList(oils: { oil: string; weight: string }[], lyeType: LyeType): string {
  const salt = lyeType === 'KOH' ? 'Potassium' : 'Sodium'
  const sorted = [...oils].filter(o => parseFloat(o.weight) > 0).sort((a, b) => parseFloat(b.weight) - parseFloat(a.weight))
  const names = sorted.map(o => {
    if (o.oil === 'Beeswax') return 'Cera Alba'
    const s = SAPONIFIED[o.oil]
    return s ? `${salt} ${s}` : `Saponified ${o.oil} (check INCI)`
  })
  return [...Array.from(new Set(names)), 'Aqua', 'Glycerin'].join(', ')
}
