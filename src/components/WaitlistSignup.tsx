'use client'

import { useState } from 'react'
import Link from 'next/link'
import { track } from '@vercel/analytics'

const FORM_URL = 'https://forms.zohopublic.eu/culletonnoelgm1/form/LatherForgeEarlyAccess/formperma/hNAOt2XHrbOxOMfDDaY8hViG7DnhJjJASyZ9UlZn3OM'

/**
 * Inline early-access sign-up for tool and recipe pages, so visitors can join
 * without leaving the page. Uses the same Zoho form as /early-access/.
 * The Zoho form (and any cookies it sets) loads only after the visitor clicks
 * the button, which is what the privacy policy says.
 * Keep the offer wording in step with src/app/early-access/page.tsx.
 */
export default function WaitlistSignup() {
  const [open, setOpen] = useState(false)
  return (
    <section id="waitlist" style={{ background: '#EBF2EC', padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '640px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A9E7E', marginBottom: '0.6rem' }}>Launching January 2027</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#3E2820', marginBottom: '0.75rem', lineHeight: 1.25 }}>
            Keep your recipes and batches in one place
          </h2>
          <p style={{ color: '#5C4A3A', lineHeight: 1.7, fontSize: '0.95rem' }}>
            LatherForge is our app for soap makers. It keeps your recipes, batches, stock and cost per bar in one place. Leave your email and we will tell you when it opens. The first 300 sign-ups get 3 months free, with no card needed to start.
          </p>
        </div>
        {open ? (
          <div style={{ background: '#FFFFFF', border: '1px solid #E8DFD0', padding: '1.5rem', boxShadow: '0 4px 24px rgba(92,61,46,0.06)' }}>
            <iframe
              aria-label="LatherForge Early Access"
              title="LatherForge early access sign-up form"
              frameBorder="0"
              style={{ height: '500px', width: '100%', border: 'none' }}
              src={FORM_URL}
            />
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <button
              type="button"
              className="btn-primary"
              onClick={() => { track('waitlist_form_opened'); setOpen(true) }}
            >
              Get early access
            </button>
          </div>
        )}
        <p style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.8rem', color: '#7A6E62' }}>
          The 3 months free is limited to the first 300 sign-ups. No card is needed to start; to keep using LatherForge after the 3 months, you add payment details and choose a plan. Nothing is charged unless you do.{' '}
          No spam. No selling your data. Just a single email when we launch.{' '}
          See our <Link href="/privacy/" style={{ color: '#7A6E62', textDecoration: 'underline' }}>privacy policy</Link>.
        </p>
      </div>
    </section>
  )
}
