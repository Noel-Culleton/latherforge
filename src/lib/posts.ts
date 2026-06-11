export interface Post {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  sections: Array<{ heading?: string; text?: string; items?: string[] }>
}

export const posts: Post[] = [
  {
    slug: 'lye-calculator-guide',
    title: 'How to Use a Lye Calculator for Cold Process Soap',
    description: 'Learn how to use a lye calculator to make safe, accurate cold process soap recipes. Covers NaOH vs KOH, superfat, and water ratios.',
    date: '2026-06-10',
    readTime: '7 min read',
    category: 'Soap Making Basics',
    sections: [
      {
        heading: 'What Is a Lye Calculator?',
        text: 'Making cold process soap requires an exact chemical reaction between lye (sodium hydroxide) and oils. A lye calculator takes the weight of each oil in your recipe and tells you exactly how much NaOH and water you need. Get it wrong and your soap will be lye-heavy and caustic, or too soft to cure properly. A good lye calculator removes the guesswork entirely.'
      },
      {
        heading: 'NaOH vs KOH',
        text: 'Sodium hydroxide (NaOH) is used for solid bar soap. Potassium hydroxide (KOH) is used for liquid soap and soft soap. Each oil has a different SAP value — the amount of lye required to fully saponify one gram of that oil. Your lye calculator uses these values automatically, so you just enter your oil weights and choose your lye type.'
      },
      {
        heading: 'Superfat Percentage',
        text: 'Superfat is the percentage of oils left unsaponified in your finished soap. A 5% superfat means 5% of your oils are left free, giving a more moisturising bar. Most cold process soap makers use a superfat of 5–8%. Your lye calculator reduces the lye amount to achieve this automatically.'
      },
      {
        heading: 'Safety First',
        text: 'Always follow these rules when working with lye.',
        items: [
          'Wear gloves, goggles, and long sleeves',
          'Always add lye TO water — never water to lye',
          'Work in a ventilated area — lye fumes are caustic',
          'Keep vinegar nearby to neutralise spills',
          'Keep children and pets out of the room'
        ]
      },
      {
        heading: 'Ready to Calculate?',
        text: 'The LatherForge free lye calculator supports 20+ oils and butters, NaOH and KOH, adjustable superfat from 0–20%, and three water ratio presets. No account needed — just enter your recipe and get your lye weight instantly.'
      }
    ]
  },
  {
    slug: 'cold-process-soap-beginners-guide',
    title: 'Cold Process Soap Making: A Complete Beginner\'s Guide',
    description: 'Everything you need to start making cold process soap at home. Equipment, oils, safety, and your first simple recipe.',
    date: '2026-06-05',
    readTime: '10 min read',
    category: 'Beginner Guides',
    sections: [
      {
        heading: 'What Is Cold Process Soap?',
        text: 'Cold process soap is made by combining lye (sodium hydroxide) with oils and butters. Unlike melt-and-pour soap, cold process soap is made entirely from scratch, giving you complete control over ingredients, fragrance, colour, and design. The "cold" in the name refers to the fact that you do not apply external heat during saponification — the chemical reaction itself generates heat naturally.'
      },
      {
        heading: 'Equipment You Need',
        text: 'Before you start, gather the following equipment.',
        items: [
          'Digital kitchen scale (accurate to 1g)',
          'Two heat-safe jugs or bowls (stainless steel or HDPE plastic)',
          'Stick blender',
          'Soap mould (silicone loaf mould recommended for beginners)',
          'Thermometer',
          'Rubber spatulas',
          'Safety goggles and nitrile gloves'
        ]
      },
      {
        heading: 'Choosing Your Oils',
        text: 'Different oils contribute different properties to your soap. Olive oil makes a gentle, moisturising bar. Coconut oil adds hardness and lather. Palm oil (or a sustainable alternative like tallow or lard) adds firmness and longevity. A simple beginner recipe might be 60% olive oil, 30% coconut oil, and 10% castor oil.'
      },
      {
        heading: 'The Basic Process',
        text: 'Here is the basic cold process soap making method in brief.',
        items: [
          'Weigh your oils and melt together if needed',
          'Weigh your water into a separate heat-safe jug',
          'Carefully weigh your lye and slowly add it to the water (not the other way around)',
          'Allow both your oils and lye solution to cool to around 40–45°C',
          'Slowly pour the lye solution into your oils while stick blending',
          'Blend to light trace, add fragrance and colour, then pour into your mould',
          'Cover and insulate for 24–48 hours',
          'Unmould and cut after 48 hours, then cure for 4–6 weeks'
        ]
      },
      {
        heading: 'Why Cure Time Matters',
        text: 'Fresh soap is still completing saponification and contains residual lye. Curing for 4–6 weeks allows excess water to evaporate, the pH to drop to a safe level, and the bar to harden. Rushing cure time produces a soft, short-lived bar that may irritate skin. Good things take time — and well-cured soap can last 12 months or more.'
      }
    ]
  },
  {
    slug: 'etsy-soap-shop-tips',
    title: '10 Tips to Grow Your Handmade Soap Business on Etsy',
    description: 'Practical advice for soap makers selling on Etsy. Improve your listings, photos, SEO, and pricing to grow consistent sales.',
    date: '2026-05-28',
    readTime: '8 min read',
    category: 'Soap Business',
    sections: [
      {
        heading: 'Why Etsy Works for Soap Makers',
        text: 'Etsy has over 90 million active buyers, many of whom are specifically searching for handmade, natural, and artisan products. Soap is one of the platform\'s strongest categories. But with thousands of soap shops competing, standing out requires more than a good product — you need strong listings, consistent branding, and an understanding of how Etsy\'s search algorithm works.'
      },
      {
        heading: 'Nail Your Product Photography',
        text: 'Photography is your biggest conversion lever on Etsy. Natural daylight, a clean background, and close-up texture shots dramatically outperform dark or cluttered photos. Show the soap from multiple angles, include a lifestyle shot, and always show the cut bar so buyers can see the interior design. You do not need expensive equipment — a phone camera in good natural light is enough.'
      },
      {
        heading: 'Write Titles That Buyers Actually Search',
        text: 'Your Etsy title should lead with the most searched term, not your product name. Instead of "Lavender Dreams Bar", write "Lavender Soap Bar — Handmade Cold Process, Natural, Vegan Friendly". Put the most important keywords first — Etsy weights the beginning of your title more heavily in search.'
      },
      {
        heading: 'Price for Profit, Not Just Sales',
        text: 'Many new soap makers underprice. A proper cost calculation includes materials, packaging, labels, Etsy fees (6.5% transaction fee plus listing fees), payment processing, your time, and a profit margin. If you are not making at least €2–3 profit per bar after all costs, you are running a hobby, not a business. Use a costing tool to know your numbers before you set a price.'
      },
      {
        heading: '10 Quick Wins for Your Etsy Shop',
        items: [
          'Use all 13 tags in every listing — fill every one',
          'Renew listings regularly to boost search visibility',
          'Reply to messages within 24 hours — response rate affects your ranking',
          'Offer a small bundle or multi-bar discount to increase average order value',
          'Add seasonal products for gifting periods (Christmas, Mother\'s Day, Valentine\'s)',
          'Include a handwritten thank-you note — it drives reviews',
          'Follow up politely after delivery asking for a review',
          'Post new listings regularly — fresh content signals an active shop',
          'Use Etsy Ads with a small daily budget (€1–2) to test which listings convert',
          'Build your own email list from day one — Etsy can change its algorithm at any time'
        ]
      }
    ]
  }
]

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug)
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-IE', { year: 'numeric', month: 'long', day: 'numeric' })
}
