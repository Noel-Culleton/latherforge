import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#3E2820', color: '#C9B49A', padding: '3rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="6" fill="#C9A84C"/>
                <text x="16" y="22" textAnchor="middle" fill="#3E2820" fontSize="14" fontFamily="Georgia,serif" fontWeight="700">LF</text>
              </svg>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: '#FAF7F2' }}>LatherForge</span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#A89882', maxWidth: '220px' }}>
              The business OS for handmade soap makers. Launching January 2027.
            </p>
          </div>

          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1rem' }}>Free Tools</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <Link href="/lye-calculator" style={{ fontSize: '0.85rem', color: '#A89882' }}>Lye Calculator</Link>
            </div>
          </div>

          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1rem' }}>Platform</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <Link href="/early-access" style={{ fontSize: '0.85rem', color: '#A89882' }}>Register Interest</Link>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.8rem', color: '#7A6458' }}>© 2025 LatherForge. All rights reserved.</p>
          <p style={{ fontSize: '0.8rem', color: '#7A6458' }}>latherforge.com</p>
        </div>
      </div>
    </footer>
  )
}
