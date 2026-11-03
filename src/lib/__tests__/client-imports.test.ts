import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { describe, expect, it } from 'vitest'

// Unreviewed recipes must never reach the browser. Any 'use client' file that imports
// the recipe list would bundle every draft recipe into public JavaScript.
const SRC = join(__dirname, '..', '..')
function files(dir: string): string[] {
  return readdirSync(dir).flatMap(f => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? (f === '__tests__' ? [] : files(p)) : /\.tsx?$/.test(f) ? [p] : []
  })
}
const clientFiles = files(SRC).filter(p => /^\s*['"]use client['"]/.test(readFileSync(p, 'utf8')))

describe('draft recipes stay server-side', () => {
  it('finds client components to check', () => {
    expect(clientFiles.length).toBeGreaterThan(0)
  })

  it.each(clientFiles.map(p => [relative(SRC, p), p]))('%s does not import the recipe list or Nav/Footer', (_rel, p) => {
    const src = readFileSync(p, 'utf8')
    expect(src).not.toMatch(/from ['"](@\/lib\/recipes|(\.\.?\/)+(lib\/)?recipes)['"]/)
    // Nav and Footer are server components that read the recipe list
    expect(src).not.toMatch(/from ['"](@\/components\/(Nav|Footer)|\.\/(Nav|Footer))['"]/)
  })
})
