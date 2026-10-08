// Build-time patch: adds the "value over volume" promise lines to the homepage.
// Run from the Next.js project root before `next build`. Aborts (exit 1) if an anchor is missing,
// so a half-patched page can never ship. Idempotent.
const fs = require('fs')

const f = ['src/app/page.tsx', 'src/src/app/page.tsx', 'app/page.tsx'].find(p => fs.existsSync(p))
if (!f) { console.error('PATCH FAILED: page.tsx not found from ' + process.cwd()); process.exit(1) }
let s = fs.readFileSync(f, 'utf8')
if (s.includes('Every Craft Pack should be worth')) { console.log('PATCH: already applied'); process.exit(0) }

// 1. Founder quote: second blockquote directly under the existing one.
const fi = s.indexOf('sec founder')
const fb = fi < 0 ? -1 : s.indexOf('</blockquote>', fi)
if (fi < 0 || fb < 0 || fb - fi > 1500) { console.error('PATCH FAILED: founder blockquote anchor not found'); process.exit(1) }
const fEnd = fb + '</blockquote>'.length
const quote =
  '<blockquote style={{ marginTop: \'56px\' }}>' +
  '<p>{"“We\'d rather give 100 makers more than they pay for than sell 10,000 something they don\'t use.”"}</p>' +
  '<footer>{"— Noel Culleton, Founder"}</footer>' +
  '</blockquote>'
s = s.slice(0, fEnd) + quote + s.slice(fEnd)

// 2. Pricing: one line directly under the pricing headline block, above the cards.
const pi = s.indexOf('Business-software control at a maker')
const pp = pi < 0 ? -1 : s.indexOf('</p>', pi)
if (pi < 0 || pp < 0 || pp - pi > 400) { console.error('PATCH FAILED: pricing subheading anchor not found'); process.exit(1) }
const pEnd = pp + '</p>'.length
const line =
  '<p style={{ fontFamily: "\'Cormorant Garamond\', Georgia, serif", fontStyle: \'italic\', fontSize: \'1.35rem\', lineHeight: 1.4, marginTop: \'14px\' }}>' +
  '{"Every Craft Pack should be worth more than its €29. If it isn\'t, we haven\'t done our job."}' +
  '</p>'
s = s.slice(0, pEnd) + line + s.slice(pEnd)

fs.writeFileSync(f, s)
console.log('PATCH OK: ' + f + ' (+founder quote, +pricing line)')
