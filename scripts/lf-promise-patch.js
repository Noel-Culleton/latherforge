// Build-time patch: adds the "value over volume" promise to the homepage.
// Run from the Next.js project root before `next build`. Aborts (exit 1) if an anchor is missing,
// so a half-patched page can never ship. Idempotent. Uses only the page's existing classes,
// colour variables (--g gold, --gs soft gold, --wd dark walnut) and fonts.
const fs = require('fs')

const f = ['src/app/page.tsx', 'src/src/app/page.tsx', 'app/page.tsx'].find(p => fs.existsSync(p))
if (!f) { console.error('PATCH FAILED: page.tsx not found from ' + process.cwd()); process.exit(1) }
let s = fs.readFileSync(f, 'utf8')
const fail = m => { console.error('PATCH FAILED: ' + m); process.exit(1) }

// 1. Founder quote: second blockquote directly under the existing one.
if (!s.includes('sell 10,000 something')) {
  const fi = s.indexOf('sec founder')
  const fb = fi < 0 ? -1 : s.indexOf('</blockquote>', fi)
  if (fi < 0 || fb < 0 || fb - fi > 1500) fail('founder blockquote anchor not found')
  const at = fb + '</blockquote>'.length
  const quote =
    '<div style={{ width: \'48px\', height: \'3px\', background: \'var(--g)\', margin: \'48px auto 0\' }} />' +
    '<blockquote style={{ marginTop: \'40px\' }}>' +
    '<p>{"“We\'d rather give 100 makers more than they pay for than sell 10,000 something they don\'t use.”"}</p>' +
    '<footer>{"— Noel Culleton, Founder"}</footer>' +
    '</blockquote>'
  s = s.slice(0, at) + quote + s.slice(at)
}

// 2. Pricing: one line directly under the pricing headline block, above the cards.
if (!s.includes('Every Craft Pack should be worth')) {
  const pi = s.indexOf('Business-software control at a maker')
  const pp = pi < 0 ? -1 : s.indexOf('</p>', pi)
  if (pi < 0 || pp < 0 || pp - pi > 400) fail('pricing subheading anchor not found')
  const at = pp + '</p>'.length
  const line =
    '<p style={{ fontFamily: "\'Cormorant Garamond\', Georgia, serif", fontStyle: \'italic\', fontSize: \'1.5rem\', lineHeight: 1.35, marginTop: \'20px\', color: \'var(--w)\', borderLeft: \'3px solid var(--g)\', paddingLeft: \'16px\' }}>' +
    '{"Every Craft Pack should be worth more than its €29. If it isn\'t, we haven\'t done our job."}' +
    '</p>'
  s = s.slice(0, at) + line + s.slice(at)
}

// 3. "Our promise" band: new dark band directly after the pricing section, before the FAQ.
if (!s.includes('That\'s the promise')) {
  const ii = s.indexOf('id="pricing"')
  const se = ii < 0 ? -1 : s.indexOf('</section>', ii)
  if (ii < 0 || se < 0 || se - ii > 6000) fail('pricing section anchor not found')
  const at = se + '</section>'.length
  const sand = '#D8C9B3'
  const pillar = (n, title, text) =>
    '<div className="f">' +
    '<p style={{ fontFamily: "\'Cormorant Garamond\', Georgia, serif", fontSize: \'2.6rem\', fontWeight: 600, lineHeight: 1, color: \'var(--g)\', marginBottom: \'10px\' }}>' + n + '</p>' +
    '<h3 style={{ color: \'#fff\' }}>' + title + '</h3>' +
    '<p style={{ color: \'' + sand + '\', lineHeight: 1.65 }}>{"' + text + '"}</p>' +
    '</div>'
  const band =
    '<section className="sec" style={{ background: \'radial-gradient(120% 90% at 20% 0%, #3A2A1F 0%, var(--wd) 70%)\', color: \'var(--c)\' }}>' +
    '<div className="wrap">' +
    '<p className="kick" style={{ color: \'var(--gs)\' }}>Value over volume</p>' +
    '<div style={{ width: \'64px\', height: \'3px\', background: \'var(--g)\', margin: \'16px 0 22px\' }} />' +
    '<h2 style={{ fontSize: \'clamp(2.4rem, 6vw, 4.6rem)\', color: \'#fff\', maxWidth: \'820px\' }}>More than you pay for. ' +
    '<em style={{ fontStyle: \'italic\', color: \'var(--g)\' }}>{"That\'s the promise."}</em></h2>' +
    '<div className="fgrid" style={{ marginTop: \'48px\' }}>' +
    pillar('01', 'Start free.', 'Starter costs nothing, and the soap and Etsy pricing calculators need no signup.') +
    pillar('02', 'One fair price.', 'One system, one login. The Craft Pack is €29 a month and should be worth more than that.') +
    pillar('03', 'Built around your week.', 'Batches, cure dates, true cost per bar and compliance records, so every feature earns its place.') +
    '</div>' +
    '<div style={{ marginTop: \'44px\' }}><a className="btn" href="/early-access/">Get launch access</a></div>' +
    '</div></section>'
  s = s.slice(0, at) + band + s.slice(at)
}

fs.writeFileSync(f, s)
console.log('PATCH OK: ' + f + ' (founder quote, pricing line, promise band)')
