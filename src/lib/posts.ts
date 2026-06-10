export interface Post {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  sections: Array<{ heading?: string; text: string; items?: string[] }>
}

export const posts: Post[] = [
  {
    slug: 'lye-calculator-guide',
    title: 'How to Use a Lye Calculator for Cold Process Soap',
    description: 'Learn how to use a lye calculator to make safe, accurate cold process soap recipes. Covers NaOH vs KOH, superfat percentages and water ratios.',
    date: '2026-06-10',
    readTime: '7 min read',
    category: 'Soap Making Basics',
    sections: [
      { heading: 'What Is a Lye Calculator?', text: 'Making cold process soap requires an exact chemical reaction between lye and oils. Too much lye and your soap is caustic. Too little and it will not saponify properly. A lye calculator takes the guesswork out entirely.' },
      { heading: 'NaOH vs KOH', text: 'Sodium hydroxide (NaOH) is used for solid bar soap. Potassium hydroxide (KOH) is used for liquid soap and shaving soap. Most beginners making bar soap need NaOH.' },
      { heading: 'Superfat Percentage', text: 'Superfat is the percentage of oils left unsaponified. A superfat of 5% is the standard for most cold process recipes.', items: ['0-2% — Very hard bar, less moisturising', '3-5% — Standard range for body and face bars', '6-8% — Extra moisturising, good for sensitive skin'] },
      { heading: 'Safety First', text: 'Always follow these rules when working with lye.', items: ['Wear gloves, safety glasses and long sleeves', 'Add lye TO water, never water to lye', 'Work in a ventilated area', 'Keep children and pets out of the room'] },
      { heading: 'Ready to Calculate?', text: 'The LatherForge free lye calculator supports 20 plus oils and butters, both NaOH and KOH, and custom superfat and water ratios. No signup required.' }
    ]
  },
  {
    slug: 'cold-process-soap-beginners',
    title: 'Cold Process Soap Making for Beginners',
    description: 'A complete beginner guide to cold process soap making. Covers equipment, oils, lye safety, the soap making process and common mistakes to avoid.',
    date: '2026-06-08',
    readTime: '10 min read',
    category: 'Getting Started',
    sections: [
      { heading: 'What Is Cold Process Soap?', text: 'Cold process soap making is the traditional method of making soap from scratch using lye and oils. Unlike melt and pour soap, cold process gives you complete control over every ingredient.' },
      { heading: 'Equipment You Need', text: 'Minimum equipment to get started.', items: ['Nitrile gloves, safety goggles and long sleeves', 'Digital scale accurate to 1 gram', 'Two heat-resistant jugs or containers', 'Stick blender and thermometer', 'Silicone loaf mould'] },
      { heading: 'Best Oils for Beginners', text: 'A simple reliable starting recipe.', items: ['Coconut oil 30% — Hard bars with big bubbles', 'Palm oil or lard 30% — Hardness and stable lather', 'Olive oil 40% — Conditioning and long-lasting'] },
      { heading: 'The Five Stages', text: 'Cold process in order.', items: ['Prepare your lye solution — add lye to water slowly', 'Melt and cool your oils to 40-45C', 'Pour lye solution into oils', 'Blend to trace with stick blender', 'Pour into mould and cure 4-6 weeks'] },
      { heading: 'Common Mistakes', text: 'Watch out for these issues.', items: ['Seizing — soap goes thick suddenly, usually from fragrance oils', 'Soda ash — white powdery surface layer, purely cosmetic', 'Ricing — curdled appearance from temperature differences'] }
    ]
  },
  {
    slug: 'etsy-soap-business-guide',
    title: 'How to Start Selling Handmade Soap on Etsy',
    description: 'Everything you need to know about selling handmade soap on Etsy — listings, pricing, photography, compliance and growing sales.',
    date: '2026-06-05',
    readTime: '9 min read',
    category: 'Soap Business',
    sections: [
      { heading: 'Is Etsy Worth It for Soap Sellers?', text: 'Yes — but only if you approach it strategically. Etsy has over 90 million active buyers and handmade soap is consistently one of the top-selling categories.' },
      { heading: 'Writing Listings That Rank', text: 'Etsy is a search engine. Lead your title with searchable keywords. Bad title: Summer Glow Artisan Bar. Good title: Lavender Honey Soap Bar — Cold Process Handmade Soap — Natural Soap Gift.' },
      { heading: 'Pricing Your Soap', text: 'Use this formula: Materials plus Labour plus Overhead plus Etsy fees plus Profit equals Retail price. Etsy charges 6.5% transaction fee plus a listing fee. Never underprice.' },
      { heading: 'Photography That Converts', text: 'Photography drives Etsy sales more than any other factor.', items: ['Natural light only — no harsh flash', 'Multiple angles — top, side, cut face', 'Lifestyle shot with relevant props', 'White or neutral background for primary image', 'Show scale with a hand or object'] },
      { heading: 'Cosmetic Compliance', text: 'In the EU and UK, handmade soap sold commercially must comply with cosmetic regulations including a safety report and INCI ingredient labelling.' },
      { heading: 'Growing Your Shop', text: 'What actually works for Etsy soap sellers.', items: ['Get your first 10-20 reviews as fast as possible', 'Refresh listings regularly', 'Add new products consistently', 'Use Pinterest for long-term traffic', 'Run Etsy Ads at 1-2 euro per day on best listings'] }
    ]
  }
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug)
}

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IE', { year: 'numeric', month: 'long', day: 'numeric' })
}
