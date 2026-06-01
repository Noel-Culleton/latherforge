'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(250,247,242,0.96)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #E8DFD0'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="6" fill="#5C3D2E"/>
              <text x="16" y="22" textAnchor="middle" fill="#C9A84C" fontSize="14" fontFamily="Georgia,serif" fontWeight="700">LF</text>
            </svg>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 600, color: '#5C3D2E', letterSpacing: '0.02em' }}>LatherForge</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            <Link href="/lye-calculator" style={{ fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7A6E62' }}>Free Lye Calculator</Link>
            <Link href="/early-access" className="btn-primary" style={{ padding: '0.65rem 1.5rem', fontSize: '0.8rem' }}>Get Early Access</Link>
          </div>

          <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }} className="mobile-menu-btn" aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {open ? (
                <path d="M4 4L18 18M18 4L4 18" stroke="#5C3D2E" strokeWidth="1.8" strokeLinecap="round"/>
              ) : (
                <path d="M3 6h16M3 11h16M3 16h16" stroke="#5C3D2E" strokeWidth="1.8" strokeLinecap="round"/>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div style={{ background: 'var(--cream)', borderTop: '1px solid #E8DFD0', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Link href="/lye-calculator" onClick={() => setOpen(false)} style={{ fontSize: '0.9rem', fontWeight: 500, color: '#5C3D2E' }}>Free Lye Calculator</Link>
            <Link href="/early-access" onClick={() => setOpen(false)} className="btn-primary" style={{ textAlign: 'center', padding: '0.85rem' }}>Get Early Access</Link>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}
