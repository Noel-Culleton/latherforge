export function cureLabel(weeks: number): string {
  if (weeks === 0) return 'No cure needed'
  if (weeks >= 26) return `${Math.round(weeks / 4.33)} months`
  return `${weeks} week${weeks === 1 ? '' : 's'}`
}
