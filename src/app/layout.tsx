import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://latherforge.com'),
  title: {
    default: 'LatherForge — The Business OS for Soap Makers',
    template: '%s | LatherForge'
  },
  description: 'LatherForge is the all-in-one business platform for handmade soap makers. Manage recipes, batches, inventory, costing and Etsy listings with AI-powered tools.',
  keywords: ['soap making software', 'soap business', 'lye calculator', 'soap recipe generator', 'handmade soap', 'soap maker tools'],
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://latherforge.com',
    siteName: 'LatherForge',
    title: 'LatherForge — The Business OS for Soap Makers',
    description: 'AI-powered tools for handmade soap makers. Recipes, batches, inventory and Etsy listings — all in one place.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'LatherForge' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LatherForge — The Business OS for Soap Makers',
    description: 'AI-powered tools for handmade soap makers.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://latherforge.com' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
