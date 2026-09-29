import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage, { CONTACT_EMAIL, OPERATOR, H2, P, LI } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms for using latherforge.com and its free soap making tools.',
  alternates: { canonical: 'https://latherforge.com/terms/' }
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="28 September 2026">
      <p style={P}>
        These terms apply to latherforge.com and its free tools: the soap calculator, the SAP value chart, the soap calculator app, recipes and guides. latherforge.com is operated by {OPERATOR}. By using the site you agree to these terms.
      </p>

      <h2 style={H2}>Free tools, provided for guidance</h2>
      <p style={P}>
        The free tools are provided free of charge, as they are. We work to keep SAP values and calculations accurate, but we cannot guarantee that every figure, recipe or guide is free of errors or suitable for your ingredients.
      </p>

      <h2 style={H2}>Lye safety</h2>
      <p style={P}>
        Sodium hydroxide (NaOH) and potassium hydroxide (KOH) are corrosive and can cause serious burns and eye damage. You are responsible for handling them safely:
      </p>
      <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
        <li style={LI}>Always check a recipe&apos;s lye amount before you make it, and follow your supplier&apos;s safety data sheet.</li>
        <li style={LI}>Wear eye protection and gloves, work in a ventilated space, and keep children and pets away.</li>
        <li style={LI}>Always add lye to water, never water to lye.</li>
      </ul>

      <h2 style={H2}>Selling soap</h2>
      <p style={P}>
        Our guides on selling soap and our sample label are general information, not legal advice. If you sell soap, you are responsible for meeting the cosmetics rules where you sell, including safety assessments and labelling.
      </p>

      <h2 style={H2}>Liability</h2>
      <p style={P}>
        To the extent the law allows, we are not liable for any loss, injury or damage arising from using the free tools, recipes or guides, including failed batches or harm caused by handling lye. Nothing in these terms limits liability that cannot be limited by law, such as liability for death or personal injury caused by negligence.
      </p>

      <h2 style={H2}>Content</h2>
      <p style={P}>
        The text, recipes, design and code on latherforge.com belong to LatherForge. You may use the tools and print recipes for your own soap making. Please do not copy the site or its content in bulk without permission.
      </p>

      <h2 style={H2}>The LatherForge platform</h2>
      <p style={P}>
        The paid LatherForge platform launches in January 2027 and will have its own terms of service. Registering interest on the <Link href="/early-access/" style={{ color: '#5C3D2E', textDecoration: 'underline' }}>early access page</Link> does not create a contract or any obligation to pay.
      </p>

      <h2 style={H2}>Privacy</h2>
      <p style={P}>
        How we handle personal data is explained in our <Link href="/privacy/" style={{ color: '#5C3D2E', textDecoration: 'underline' }}>privacy policy</Link>.
      </p>

      <h2 style={H2}>Changes and governing law</h2>
      <p style={P}>
        We may update these terms and will change the date at the top when we do. These terms are governed by the laws of Ireland. Questions: <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#5C3D2E', textDecoration: 'underline' }}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  )
}
