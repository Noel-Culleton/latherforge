import type { Metadata } from 'next'
import BlogIndexClient from './BlogIndexClient'

export const metadata: Metadata = {
  title: 'Soap Making Blog — Guides, Recipes and Business Tips',
  description: 'Soap making guides from LatherForge: cold process, hot process and liquid soap, cure times, lye calculators and how to sell handmade soap legally.',
  alternates: { canonical: 'https://latherforge.com/blog/' }
}

export default function BlogPage() {
  return <BlogIndexClient />
}
