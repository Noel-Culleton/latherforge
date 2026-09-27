import type { Metadata, Viewport } from 'next'
import AppClient from './AppClient'

export const metadata: Metadata = {
  title: 'Soap Calculator App',
  description: 'The LatherForge soap calculator app: lye calculator, saved recipes, cure countdowns and cost per bar.',
  manifest: '/manifest.webmanifest',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://latherforge.com/lye-calculator/' },
  appleWebApp: { capable: true, title: 'LatherForge', statusBarStyle: 'default' },
  icons: { apple: '/icons/apple-touch-icon.png' }
}

export const viewport: Viewport = {
  themeColor: '#5C3D2E',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
}

export default function AppPage() {
  return <AppClient />
}
