'use client'
// Copy to src/app/thank-you/ThankYouClient.tsx.
// Fires the Meta Pixel Lead event once, only after a Zoho redirect (?src=waitlist)
// and only with marketing-cookie consent.
import { useEffect, useState } from 'react'

const PIXEL_ID = 'YOUR_PIXEL_ID'
const CONSENT_KEY = 'lf_marketing_consent' // 'granted' | 'denied'
const FIRED_KEY = 'lf_lead_fired'
const PRIVACY_URL = '[FILL IN: privacy policy URL]'

declare global {
  interface Window { fbq?: (...args: unknown[]) => void; _fbq?: unknown }
}

function read(storage: 'localStorage' | 'sessionStorage', key: string) {
  try { return window[storage].getItem(key) } catch { return null }
}
function write(storage: 'localStorage' | 'sessionStorage', key: string, value: string) {
  try { window[storage].setItem(key, value) } catch { /* storage blocked */ }
}

// Meta's standard base code, typed.
function loadPixel() {
  if (window.fbq) return
  const queue: unknown[][] = []
  const fbq = Object.assign((...args: unknown[]) => {
    const f = fbq as unknown as { callMethod?: (...a: unknown[]) => void }
    if (f.callMethod) f.callMethod(...args)
    else queue.push(args)
  }, { queue, loaded: true, version: '2.0' })
  ;(fbq as unknown as { push: unknown }).push = fbq
  window.fbq = fbq
  if (!window._fbq) window._fbq = fbq
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)
}

function fireLead() {
  if (read('sessionStorage', FIRED_KEY) === '1') return
  loadPixel()
  window.fbq!('init', PIXEL_ID)
  window.fbq!('track', 'PageView')
  window.fbq!('track', 'Lead', { content_name: 'LatherForge waitlist' },
    { eventID: `lead-${Date.now()}-${Math.random().toString(36).slice(2)}` })
  write('sessionStorage', FIRED_KEY, '1')
}

export default function ThankYouClient() {
  const [askConsent, setAskConsent] = useState(false)

  useEffect(() => {
    // Zoho may load this page inside the form iframe: break out to the full window.
    if (window.top !== window.self) {
      try { window.top!.location.href = window.location.href; return } catch { /* stay in frame */ }
    }

    const fromForm = new URLSearchParams(window.location.search).get('src') === 'waitlist'
    if (!fromForm) return
    // Strip the flag so a reload or shared link doesn't count again.
    window.history.replaceState(null, '', window.location.pathname)

    const consent = read('localStorage', CONSENT_KEY)
    if (consent === 'granted') fireLead()
    else if (consent !== 'denied') setAskConsent(true)
  }, [])

  if (!askConsent) return null

  const choose = (value: 'granted' | 'denied') => {
    write('localStorage', CONSENT_KEY, value)
    setAskConsent(false)
    if (value === 'granted') fireLead()
  }

  const btn = { fontFamily: 'Jost, sans-serif', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase' as const, padding: '0.7rem 1.4rem', border: '1px solid #5C3D2E', cursor: 'pointer', marginRight: '0.5rem' }

  return (
    <div role="dialog" aria-label="Cookie choice" style={{
      position: 'fixed', left: 16, right: 16, bottom: 16, maxWidth: 560, margin: '0 auto', zIndex: 200,
      background: '#FAF7F2', border: '1px solid #E8DFD0', boxShadow: '0 8px 32px rgba(0,0,0,0.25)', padding: '1.25rem'
    }}>
      <p style={{ fontSize: '0.9rem', color: '#2C2416', marginBottom: '0.9rem' }}>
        We&apos;d like to use a Meta (Facebook) pixel to see which ads bring soap makers to LatherForge. It sets marketing cookies.{' '}
        <a href={PRIVACY_URL} style={{ color: '#5C3D2E', textDecoration: 'underline' }}>Privacy policy</a>
      </p>
      <button type="button" onClick={() => choose('granted')} style={{ ...btn, background: '#5C3D2E', color: '#FAF7F2' }}>Allow</button>
      <button type="button" onClick={() => choose('denied')} style={{ ...btn, background: 'transparent', color: '#5C3D2E' }}>No thanks</button>
    </div>
  )
}
