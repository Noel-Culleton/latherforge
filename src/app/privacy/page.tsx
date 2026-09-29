import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage, { CONTACT_EMAIL, OPERATOR, H2, P, LI } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How LatherForge collects, uses and protects your personal data.',
  alternates: { canonical: 'https://latherforge.com/privacy/' }
}

export default function PrivacyPage() {
  const mail = <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#5C3D2E', textDecoration: 'underline' }}>{CONTACT_EMAIL}</a>
  return (
    <LegalPage title="Privacy Policy" updated="28 September 2026">
      <p style={P}>
        This policy explains what personal data latherforge.com collects, why, and what rights you have under the EU General Data Protection Regulation (GDPR).
      </p>

      <h2 style={H2}>Who we are</h2>
      <p style={P}>
        latherforge.com is operated by {OPERATOR}, the data controller for this website. Contact: {mail}.
      </p>

      <h2 style={H2}>What we collect</h2>
      <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
        <li style={LI}><strong>Early access sign-ups.</strong> If you register your interest, we collect the details you enter in the form (such as your name and email address). The form is provided by Zoho and the data is stored on Zoho&apos;s EU servers.</li>
        <li style={LI}><strong>Anonymous usage statistics.</strong> We use Vercel Web Analytics to count page views, referring sites, country and device type. It does not use cookies and does not identify you personally.</li>
      </ul>
      <p style={P}>The soap calculator runs entirely in your browser. We do not receive the recipes you calculate.</p>

      <h2 style={H2}>Why we use it, and our legal basis</h2>
      <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
        <li style={LI}><strong>To email you about LatherForge&apos;s launch and early access</strong>, based on your consent when you sign up. You can withdraw consent at any time by using the unsubscribe link in any email or by contacting us.</li>
        <li style={LI}><strong>To understand which pages are useful and improve the site</strong>, based on our legitimate interest in running the website. Only anonymous, aggregated statistics are used.</li>
      </ul>
      <p style={P}>We do not sell your data, and we do not use it for advertising.</p>

      <h2 style={H2}>Who processes your data for us</h2>
      <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
        <li style={LI}><strong>Vercel Inc.</strong>: website hosting and anonymous analytics.</li>
        <li style={LI}><strong>Zoho Corporation</strong>: the early access form and the sign-up list (EU data centre).</li>
        <li style={LI}><strong>Google</strong>: web fonts are loaded from Google Fonts, which receives your IP address when the page loads.</li>
      </ul>
      <p style={P}>
        Where a provider transfers data outside the European Economic Area, it does so under safeguards approved by the European Commission, such as Standard Contractual Clauses or the EU–US Data Privacy Framework.
      </p>

      <h2 style={H2}>Cookies</h2>
      <p style={P}>
        latherforge.com does not set cookies of its own. The embedded Zoho form on the early access page may set cookies that are needed for the form to work.
      </p>

      <h2 style={H2}>How long we keep it</h2>
      <p style={P}>
        We keep early access sign-ups until you unsubscribe or ask us to delete them, or until we stop running the early access list, whichever comes first.
      </p>

      <h2 style={H2}>Your rights</h2>
      <p style={P}>
        You can ask to access, correct or delete your personal data, to restrict or object to how we use it, or to receive a copy of it. Email {mail} and we will reply within one month.
      </p>
      <p style={P}>
        If you are unhappy with how we handle your data, you can complain to the Data Protection Commission at <a href="https://www.dataprotection.ie" style={{ color: '#5C3D2E', textDecoration: 'underline' }}>dataprotection.ie</a>.
      </p>

      <h2 style={H2}>Changes</h2>
      <p style={P}>
        If we change this policy, we will update the date at the top of this page. The LatherForge platform (the full app) will have its own privacy terms when it launches.
      </p>
    </LegalPage>
  )
}
