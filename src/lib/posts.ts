export interface Post {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  sections: Array<{ heading?: string; text?: string; items?: string[]; link?: { href: string; label: string }; shop?: { label: string; query: string }; videos?: Array<{ id: string; title: string }> }>
  faqs?: Array<{ q: string; a: string }>
}

export const AMAZON_TAG = 'latherforge-20'
export const amazonSearchUrl = (query: string) =>
  `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`

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
        text: 'Superfat is the percentage of oils left unsaponified in your finished soap. A 5% superfat means 5% of your oils are left free, giving a more moisturising bar. Most cold process soap makers use a superfat of 5–8%. Your lye calculator reduces the lye amount to achieve this automatically.',
        link: { href: '/soap-recipes/salt-bar-soap-recipe/', label: 'See a salt bar recipe that uses a 20% superfat' }
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
        text: 'The LatherForge free soap calculator includes over 40 oils, butters and waxes, NaOH and KOH, grams or ounces, and adjustable superfat from 0–20%. No account needed — just enter your recipe and get your lye and water weights instantly.',
        link: { href: '/lye-calculator/', label: 'Open the free soap calculator' }
      }
    ]
  },
  {
    slug: 'cold-process-soap-beginners-guide',
    title: 'How to Make Cold Process Soap: A Complete Beginner\'s Guide',
    description: 'Everything you need to start making cold process soap at home. Equipment, oils, safety, and your first simple recipe.',
    date: '2026-06-05',
    readTime: '10 min read',
    category: 'Beginner Guides',
    sections: [
      {
        heading: 'What Is Cold Process Soap?',
        text: 'Cold process soap is made by combining lye (sodium hydroxide) with oils and butters. Unlike melt-and-pour soap, cold process soap is made entirely from scratch, giving you complete control over ingredients, fragrance, colour, and design. The "cold" in the name refers to the fact that you do not apply external heat during saponification — the chemical reaction itself generates heat naturally.',
        link: { href: '/soap-recipes/', label: 'Browse free cold process soap recipes with exact lye amounts' }
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
        text: 'Different oils contribute different properties to your soap. Olive oil makes a gentle, moisturising bar. Coconut oil adds hardness and lather. Palm oil (or a sustainable alternative like tallow or lard) adds firmness and longevity. A simple beginner recipe might be 50% olive oil, 30% coconut oil, 15% shea butter and 5% castor oil.',
        link: { href: '/soap-recipes/beginner-soap-recipe/', label: 'See the full beginner recipe with exact lye amounts' }
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
        heading: 'Watch: Start Here Video Series',
        text: 'Prefer to learn by watching? Our free Start Here playlist on YouTube covers lye safety, beginner recipes and your first batch, in order.',
        link: { href: 'https://www.youtube.com/playlist?list=PLGjHBpRtE2og', label: 'Watch the Start Here: Beginner Soap Making playlist on YouTube' }
      },
      {
        heading: 'Why Cure Time Matters',
        text: 'Most saponification happens in the first 24–48 hours, but fresh soap is still soft and full of water. Curing for 4–6 weeks lets that water evaporate, so the bar becomes harder, milder and much longer lasting. Rushing cure time produces a soft bar that melts away quickly in the shower.',
        link: { href: '/blog/how-long-does-soap-need-to-cure/', label: 'Read the full soap cure time guide' }
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
        text: 'Many new soap makers underprice. A proper cost calculation includes materials, packaging, labels, Etsy fees (6.5% transaction fee plus listing fees), payment processing, your time, and a profit margin. If you are not making at least €2–3 profit per bar after all costs, you are running a hobby, not a business. Use a costing tool to know your numbers before you set a price. Before you list anything, check that you can sell soap legally where you live.'
      },
      {
        heading: '10 Quick Wins for Your Etsy Shop',
        items: [
          'Use all 13 tags in every listing — fill every one',
          'Renew listings regularly to boost search visibility',
          'Reply to messages within 24 hours — response rate affects your ranking',
          'Offer a small bundle or multi-bar discount to increase average order value',
          'Add seasonal products for gifting periods (Christmas, Mother\'s Day, Valentine\'s) — soap gift sets work well here',
          'Include a handwritten thank-you note — it drives reviews',
          'Follow up politely after delivery asking for a review',
          'Post new listings regularly — fresh content signals an active shop',
          'Use Etsy Ads with a small daily budget (€1–2) to test which listings convert',
          'Build your own email list from day one — Etsy can change its algorithm at any time'
        ]
      }
    ]
  },
  {
    slug: 'how-long-does-soap-need-to-cure',
    title: 'How Long Does Soap Need to Cure? Cure Times for Every Type of Soap',
    description: 'How long to cure cold process, hot process, castile, salt bar, milk and liquid soap, why curing matters, and how to tell when your soap is ready.',
    date: '2026-09-27',
    readTime: '6 min read',
    category: 'Soap Making Basics',
    sections: [
      {
        heading: 'The Short Answer',
        text: 'Most cold process soap needs 4–6 weeks of cure time. Hot process soap can be used after about a week but improves with 2–4 weeks. High olive oil soaps such as castile need 6 months or more. Liquid soap does not need a cure at all.'
      },
      {
        heading: 'Cure Times by Soap Type',
        items: [
          'Cold process bar soap: 4–6 weeks',
          'Hot process bar soap: usable after about 1 week, best after 2–4 weeks',
          'Castile (100% olive oil): at least 6 months, ideally 12',
          'Bastille (70%+ olive oil): 8 weeks or more',
          'Salt bars: at least 8 weeks, and they keep improving for months',
          'Goat milk and other milk soaps: 4–6 weeks',
          'Liquid soap (KOH): no cure needed once the paste is fully cooked and diluted'
        ],
        link: { href: '/soap-recipes/castile-soap-recipe/', label: 'See a castile soap recipe (it needs a 6-month cure)' }
      },
      {
        heading: 'Why Soap Needs to Cure',
        text: 'Most of the chemical reaction between lye and oils (saponification) is finished within 24–48 hours. Curing is mainly about water. Fresh soap can be 25–30% water; as that water evaporates the bar gets harder, milder and longer lasting, and the crystal structure of the soap settles so it lathers better. An under-cured bar is soft and dissolves quickly in the shower.'
      },
      {
        heading: 'How to Cure Soap Properly',
        items: [
          'Cut your loaf into bars and stand them on a rack or slatted shelf with space between each bar',
          'Keep them in a cool, dry room with good airflow, ideally 18–21°C',
          'Keep them out of direct sunlight, which can fade colours and speed up rancidity',
          'Turn the bars every week or so for even drying',
          'Avoid humid rooms such as kitchens and bathrooms'
        ]
      },
      {
        heading: 'How to Tell When Your Soap Is Ready',
        text: 'The most reliable test is weight. Weigh one bar each week and write it down. When the weight stops dropping, the water has gone and the bar is fully cured. Your batch records should also show the date each batch was made and when it will be ready, so you never sell or gift a bar too early.',
        link: { href: '/app/', label: 'Track cure dates with the free LatherForge soap calculator app' }
      },
      {
        heading: 'Can You Speed Up the Cure?',
        text: 'Using less water in your recipe (a stronger lye solution) shortens cure time a little, and hot process gives a usable bar sooner. But there is no real shortcut for a high olive oil bar. Warm rooms and fans help with airflow, but heat and direct sun can do more harm than good.'
      }
    ],
    faqs: [
      {
        q: 'Can I use soap before it has cured?',
        a: 'Cold process soap is usually safe to use after 48 hours once saponification has finished, provided the recipe was correctly calculated. It will be soft, wear away quickly and may feel harsher than a cured bar, so it is best kept for personal testing rather than selling or gifting.'
      },
      {
        q: 'Do you need to cure melt and pour soap?',
        a: 'No. Melt and pour base has already been saponified by the manufacturer, so it can be used as soon as it has set. Wrap it promptly, because melt and pour bases can attract moisture from the air and "sweat".'
      },
      {
        q: 'Does hot process soap need to cure?',
        a: 'Hot process soap is safe to use once it has cooled and hardened, usually within a day or two. A 1–4 week cure still helps: the bar gets harder, milder and longer lasting as excess water evaporates.'
      },
      {
        q: 'Why does castile soap take so long to cure?',
        a: 'Olive oil makes a soft bar that holds on to water and lathers slowly at first. Over 6 to 12 months the bar hardens and the slimy lather becomes creamier, which is why castile makers cure for much longer than the usual 4–6 weeks.'
      },
      {
        q: 'Can soap cure for too long?',
        a: 'Most bars only get better with time. The risk with very long cures is rancidity, which shows up as orange spots and an off smell, especially in recipes high in soft oils or with a high superfat. Store curing bars somewhere cool, dark and airy and use them within a year or two.'
      }
    ]
  },
  {
    slug: 'how-to-make-hot-process-soap',
    title: 'How to Make Hot Process Soap (Slow Cooker Method)',
    description: 'A step-by-step guide to hot process soap: equipment, the cook stages, when to add fragrance, and how it compares with cold process.',
    date: '2026-09-26',
    readTime: '7 min read',
    category: 'Beginner Guides',
    sections: [
      {
        heading: 'What Is Hot Process Soap?',
        text: 'Hot process soap uses the same ingredients as cold process soap, but you cook the soap batter in a slow cooker until saponification is complete. That means the bars are safe to use much sooner. The trade-off is texture: hot process soap is thick when you mould it, so bars look rustic rather than smooth and swirled.'
      },
      {
        heading: 'Hot Process vs Cold Process',
        items: [
          'Hot process is usable after about a week; cold process needs 4–6 weeks',
          'Fragrance goes in after the cook, so less of it burns off',
          'Hot process is harder to swirl and gives a rustic finish',
          'Both use exactly the same lye calculation'
        ],
        link: { href: '/soap-recipes/', label: 'Prefer cold process? Browse recipes with exact lye amounts' }
      },
      {
        heading: 'Equipment',
        items: [
          'A slow cooker you only use for soap',
          'Digital scale accurate to 1 g',
          'Stick blender',
          'Heat-safe jug for the lye solution',
          'Silicone spatula and a sturdy spoon',
          'Loaf mould',
          'Gloves, goggles and long sleeves'
        ]
      },
      {
        heading: 'Step by Step',
        items: [
          'Run your recipe through a soap calculator to get the lye and water weights',
          'Melt your oils in the slow cooker on low',
          'Make the lye solution: add lye to water, never water to lye',
          'Pour the lye solution into the oils and stick blend to trace',
          'Cover and cook on low, stirring every 15 minutes',
          'The soap will bubble, rise, then turn glossy and translucent, like mashed potato or petroleum jelly. This usually takes 45–90 minutes',
          'Turn off the heat, let it cool for a few minutes, then stir in fragrance and colour',
          'Press firmly into the mould and tap it on the counter to remove air pockets',
          'Unmould the next day, cut, and let the bars dry'
        ],
        link: { href: '/lye-calculator/', label: 'Work out the lye and water for your hot process recipe' }
      },
      {
        heading: 'Tips for Smoother Hot Process Soap',
        items: [
          'Use a little more water than for cold process to keep the soap fluid',
          'Add a spoonful of yoghurt or sugar dissolved in water after the cook for a smoother texture',
          'Work quickly when moulding; the soap stiffens as it cools',
          'Do not let the soap boil over. Stir it down if it climbs the sides of the cooker'
        ]
      }
    ]
  },
  {
    slug: 'how-to-make-liquid-soap',
    title: 'How to Make Liquid Soap from Scratch with KOH',
    description: 'How to make liquid soap with potassium hydroxide: the soap paste method, dilution, clarity and common problems.',
    date: '2026-09-25',
    readTime: '8 min read',
    category: 'Beginner Guides',
    sections: [
      {
        heading: 'Why Liquid Soap Needs KOH',
        text: 'Bar soap is made with sodium hydroxide (NaOH). True liquid soap is made with potassium hydroxide (KOH), which produces a soft soap that dissolves in water. You cannot make real liquid soap by using NaOH and adding more water, or by grating a bar into water; those give a gloopy, cloudy gel.'
      },
      {
        heading: 'How It Works',
        text: 'Liquid soap is made in two stages. First you make a thick soap paste by cooking oils and KOH together, like hot process soap. Then you dilute that paste with hot water until it is the thickness you want.'
      },
      {
        heading: 'Step by Step',
        items: [
          'Calculate your recipe with KOH selected. Most KOH is 90% pure, and a good calculator adjusts for that',
          'Use a low superfat of 0–3%, since extra oil makes liquid soap cloudy',
          'Melt the oils in a slow cooker, add the KOH solution and stick blend. KOH soap takes longer to trace than bar soap',
          'Cook on low, stirring every 20–30 minutes. The paste goes through stages and ends up like thick, translucent taffy. This can take 2–4 hours',
          'Test it: dissolve a small piece in hot water. If it is clear, it is done. If it is milky, cook longer',
          'Dilute the paste with about 1.5–2.5 times its weight in hot distilled water. Add the water gradually and let it sit overnight to dissolve',
          'Add fragrance once the soap has cooled'
        ],
        link: { href: '/lye-calculator/', label: 'Work out your KOH amounts in the free soap calculator' }
      },
      {
        heading: 'Common Problems',
        items: [
          'Cloudy soap: usually too much superfat, undercooked paste, or hard water. Use distilled water and a low superfat',
          'Too thin: dilute less next time. Salt thickens some liquid soaps, but add a tiny amount at a time because too much makes it thinner',
          'Separation: undercooked paste. Recook it and test again',
          'Diluted liquid soap has a high pH that resists spoilage, but if you add water-based extras such as herbal teas or aloe, you may need a preservative'
        ]
      }
    ]
  },
  {
    slug: 'selling-handmade-soap-legal-requirements',
    title: 'Selling Handmade Soap Legally: Ireland, UK and EU Checklist',
    description: 'What you legally need before selling handmade soap in Ireland, Northern Ireland, Great Britain and the EU: safety assessment, notification, labelling and records.',
    date: '2026-09-27',
    readTime: '9 min read',
    category: 'Soap Business',
    sections: [
      {
        text: 'Please note: this is a practical overview, not legal advice. Rules change, so check the current guidance from the HPRA (Ireland) or the Office for Product Safety and Standards (UK) before you start selling.'
      },
      {
        heading: 'Is Your Soap a Cosmetic?',
        text: 'In the EU and UK, soap for washing skin is a cosmetic product, whether it is handmade or not. That means cosmetics law applies from your very first sale, including at craft fairs and on Etsy. Soap sold only for laundry or cleaning is a detergent and falls under different rules. If you make medical claims, such as "treats eczema" or "cures acne", the product is treated as a medicine, so avoid those claims completely.'
      },
      {
        heading: 'Ireland, Northern Ireland and the EU',
        text: 'Soap sold in the Republic of Ireland, Northern Ireland or anywhere in the EU is covered by the EU Cosmetics Regulation (EC) No 1223/2009. In Ireland it is enforced by the Health Products Regulatory Authority (HPRA).',
        items: [
          'Responsible Person: every product needs a Responsible Person based in the EU (or in Northern Ireland for NI sales). For most small makers, that is you',
          'Safety assessment: each recipe needs a Cosmetic Product Safety Report (CPSR), signed off by a qualified safety assessor. Changing the fragrance or an ingredient usually means a new or updated assessment. See what a CPSR involves and costs in our CPSR guide',
          'Product Information File (PIF): keep the CPSR, product description, manufacturing method and any evidence for claims, for 10 years after the last batch is placed on the market',
          'CPNP notification: notify every product on the EU Cosmetic Products Notification Portal before you sell it. It is free',
          'Good Manufacturing Practice: make your soap in clean, organised conditions and keep batch records. ISO 22716 is the recognised standard',
          'Allergens: the EU has extended its list of fragrance allergens that must be named on labels. New products must comply from 31 July 2026, and all products on sale from 31 July 2028'
        ],
        link: { href: '/cpsr-for-soap/', label: 'CPSR for soap makers: what it is and what it costs' }
      },
      {
        heading: 'Great Britain (England, Scotland, Wales)',
        text: 'Great Britain has its own version of the cosmetics rules, enforced by Trading Standards and the Office for Product Safety and Standards (OPSS). The requirements are very similar to the EU, with a few differences.',
        items: [
          'You need a UK-based Responsible Person',
          'Notify your products through the UK Submit Cosmetic Product Notification (SCPN) service instead of the CPNP',
          'You still need a safety assessment, a Product Information File and good manufacturing practice',
          'If you are in Ireland and sell to customers in Great Britain, you need a UK Responsible Person as well. The same applies the other way round'
        ]
      },
      {
        heading: 'What Must Go on the Label',
        items: [
          'Name and address of the Responsible Person',
          'Net weight (weigh on a scale approved for trade use)',
          'Batch number, so each bar can be traced back to its batch record',
          'Ingredient list using INCI names, in descending order of weight (for example Sodium Olivate, Sodium Cocoate, Aqua, Parfum)',
          'Fragrance allergens above the legal threshold, named individually',
          'A best-before date, or a period-after-opening symbol if the product lasts longer than 30 months',
          'Any precautions for use, and the country of origin if made outside the EU/UK'
        ]
      },
      {
        heading: 'Other Things You Should Have',
        items: [
          'Product and public liability insurance',
          'Registration as a business with Revenue (Ireland) or HMRC (UK) once you are trading',
          'Batch records for every batch: date, recipe, ingredient suppliers and lot numbers, and weights',
          'A way to handle and record customer complaints or reactions'
        ]
      },
      {
        heading: 'Selling in the United States',
        text: 'US rules are different. Soap that is made mostly of fats and lye and is sold only as soap is regulated by the Consumer Product Safety Commission. If you make cosmetic claims such as "moisturising", the FDA treats it as a cosmetic under the Modernization of Cosmetics Regulation Act (MoCRA), which has some exemptions for small businesses. Canada has its own notification and labelling rules: see our guide to selling soap in Canada.'
      },
      {
        heading: 'How LatherForge Helps',
        text: 'Most of this comes down to good records: exact recipes, batch numbers, ingredient lot numbers and correct labels. LatherForge is being built to keep those records for you and generate labels from your recipes. It launches in January 2027.',
        link: { href: '/early-access/', label: 'Register for early access' }
      }
    ],
    faqs: [
      {
        q: 'Do I need a safety assessment to sell handmade soap in Ireland or the UK?',
        a: 'Yes. Soap sold for washing skin is a cosmetic, so each product needs a Cosmetic Product Safety Report signed off by a qualified safety assessor before it is sold. This applies from the very first sale, including craft fairs, markets and Etsy.'
      },
      {
        q: 'Can I sell soap at a craft fair without registering it?',
        a: 'No. The cosmetics rules apply wherever and however you sell. In Ireland, Northern Ireland and the EU each product must be notified on the CPNP before it goes on sale; in Great Britain it must be notified through the UK SCPN service.'
      },
      {
        q: 'How much does a cosmetic safety assessment cost?',
        a: 'Prices vary by assessor and by how many recipes and fragrance variations you have. Many assessors offer templated assessments for a base soap recipe with several fragrance options, which is usually cheaper than assessing every product separately. Get quotes from more than one assessor before you commit.'
      },
      {
        q: 'Do I need a separate safety assessment for every scent?',
        a: 'Usually, yes, because each fragrance changes the product formula and the allergens it contains. Some assessors can cover a single base recipe with a list of approved fragrance variations in one report, so ask about that option.'
      },
      {
        q: 'Is soap sold for laundry or cleaning treated the same way?',
        a: 'No. Soap sold only for laundry or household cleaning is a detergent, not a cosmetic, and falls under detergent and chemical labelling rules instead. If it is sold for use on skin as well, cosmetics law applies.'
      }
    ]
  },
  {
    slug: 'cold-process-soap-problems',
    title: '10 Cold Process Soap Problems and How to Fix Them',
    description: 'Soda ash, cracking, volcanoes, glycerin rivers, partial gel, seizing, ricing, false trace, sweating and lye-heavy soap: what causes each one, whether your soap is safe, and how to stop it happening again.',
    date: '2026-11-08',
    readTime: '10 min read',
    category: 'Soap Making Basics',
    sections: [
      {
        text: "Most soap problems look worse than they are. Eight of these ten are cosmetic and the soap is still fine to use once it has cured. Two need a closer look before the soap goes near skin. Here is each problem in one line, then the detail."
      },
      {
        heading: 'Quick answers',
        items: [
          'Soda ash: white powder on top. Cosmetic. Steam or plane it off',
          'Cracking on top: the soap got too hot. Cosmetic',
          'Soap volcano: severe overheating. Let it cool, then judge it',
          'Glycerin rivers: translucent streaks. Cosmetic',
          'Partial gel: darker ring in the middle. Cosmetic',
          'Seized soap: batter sets solid in the jug. Usually still usable',
          'Ricing: rice-like lumps in the batter. Often fixable',
          'False trace: batter thickens from cooling, not soap-making. Warm and blend',
          'Sweating: droplets on cured bars. Harmless',
          'Crumbly or lye-heavy soap: check your measurements and do not use it on skin until you are sure'
        ]
      },
      {
        heading: 'Watch: Is My Soap Ruined?',
        text: 'Prefer video? This walkthrough covers how to tell a cosmetic problem from one that needs a closer look.',
        videos: [{ id: '-qBG33RFIKM', title: 'Is My Soap Ruined?' }],
        link: { href: 'https://www.youtube.com/playlist?list=PLQTus9z849YQ', label: 'Watch the full Soap Problems Fixed playlist on YouTube' }
      },
      {
        heading: '1. Soda Ash',
        text: 'A white, powdery or crystal film on the surface. It forms when unreacted lye at the surface meets carbon dioxide in the air before the soap has fully saponified. It is cosmetic. Fix: steam the bars, wipe them with a damp cloth, or plane the top off. Prevent it: encourage gel phase, cover the mould, or lightly spray the top with isopropyl alcohol after pouring. Using slightly less water also helps.'
      },
      {
        heading: '2. Cracking on Top',
        text: 'Cracks across the top usually mean the soap overheated in the mould. Common causes are soaping too hot, heavy insulation, and ingredients that add heat, such as honey, sugar, milk or fragrance oils that accelerate. Fix: it is cosmetic, so plane the top if you want. Prevent it: soap cooler, insulate less, and put milk or honey soaps in the fridge or freezer for the first day. A thermometer helps you soap at the same temperature every time.',
        shop: { label: 'Browse infrared thermometers on Amazon', query: 'infrared thermometer cooking' }
      },
      {
        heading: '3. Soap Volcano',
        text: 'The extreme version of overheating: the batter rises, bubbles and can spill out of the mould. Do not touch it while it is hot, because it is still caustic. Let it cool completely, wearing gloves and goggles. Once cool, it may be fine to cut and cure, or it may need rebatching. The causes and prevention are the same as for cracking.'
      },
      {
        heading: '4. Glycerin Rivers',
        text: 'Translucent, vein-like streaks, most visible in coloured soap. They are linked to high temperatures during gel, especially in recipes using titanium dioxide. They are cosmetic. Prevent them: disperse titanium dioxide well in a little oil, soap a little cooler, and avoid overheating in the mould.'
      },
      {
        heading: '5. Partial Gel',
        text: 'A darker or more translucent ring in the centre of the bar, with a lighter edge. The middle got hot enough to gel and the outside did not. It is cosmetic. Prevent it: either insulate the whole mould so it all gels, or keep the soap cool (fridge) so none of it gels.'
      },
      {
        heading: '6. Seized Soap',
        text: 'The batter thickens suddenly and sets in the jug, sometimes within seconds. The usual cause is a fragrance oil that accelerates trace, especially florals and spices, or soaping too hot. Fix: work fast, spoon it into the mould and press it down. Or switch to hot process to finish it. The soap is usually still usable once cured. Prevent it: test new fragrances in a small batch, soap cooler, and hand-stir after adding fragrance instead of stick blending.'
      },
      {
        heading: '7. Ricing',
        text: 'Small lumps like grains of rice appear in the batter, usually right after adding fragrance. Some fragrance oils react with the hard oils in a recipe. Fix: stick blend briefly to smooth it out, or switch to hot process. Prevent it: test fragrances first and add them to the oils before the lye, or at a cooler temperature.'
      },
      {
        heading: '8. False Trace',
        text: 'The batter thickens because solid fats like butters, lard or stearic acid are cooling and setting again, not because the soap is saponifying. It can separate in the mould later. Fix: warm the batter gently and stick blend until you reach a true trace. Prevent it: make sure every fat is completely melted and the oils are clear before adding the lye.'
      },
      {
        heading: '9. Soap Sweating',
        text: "Beads of liquid on cured bars. Glycerin in handmade soap pulls moisture from humid air, so bars \"sweat\" in damp rooms or after a temperature change. It is harmless. Fix: wipe the bars and move them somewhere drier, or use a dehumidifier. Wrap bars only after they have fully cured."
      },
      {
        heading: '10. Crumbly or Lye-Heavy Soap',
        text: "Crumbly soap has two very different causes. It may simply have been cut too late, which is common with hard recipes, salt bars and high stearic acid. Or it may be lye-heavy because of a measuring mistake. Warning signs of lye-heavy soap are liquid pockets, a greasy layer on top that will not absorb, or a strong \"zap\" when tested. If you suspect lye-heavy soap, do not use it on skin. Re-run your recipe through a soap calculator to check the lye amount, and check your scale. Many soap makers use the zap test or pH test strips to check; if in doubt, throw it out.",
        link: { href: '/lye-calculator/', label: 'Check your recipe in the free soap calculator' }
      },
      {
        heading: 'Bonus: Soft Soap and Bars That Melt Fast',
        text: 'Two more common complaints. Soap that is still soft after unmoulding often just needs more time: recipes high in liquid oils, or made with extra water, take longer to firm up. Bars that dissolve quickly in the shower are usually not fully cured, are made with a high share of soft oils, or are sitting in water. A full cure and a draining soap dish make a real difference. If soft soap also looks oily or has liquid pockets, treat it as possibly lye-heavy and check your recipe first.',
        videos: [
          { id: 'Zi9wTnohzMQ', title: 'Why Your Cold Process Soap Is Still Soft' },
          { id: 'dFK7zuoQipM', title: 'Why Your Handmade Soap Dissolves So Quickly' }
        ]
      },
      {
        heading: 'How to Stop Problems Before They Start',
        items: [
          'Weigh everything in grams on a digital scale, including the water',
          'Run every recipe through a soap calculator and keep a 5% superfat as a safe starting point',
          'Test new fragrance oils in a small batch first',
          'Keep the temperature of your oils and lye consistent from batch to batch',
          'Keep batch records, so you can see what changed when something goes wrong'
        ],
        link: { href: '/free-soap-journal/', label: 'Download the free printable soap batch journal' }
      },
      {
        heading: 'Track Every Batch in LatherForge',
        text: "Most of these problems are solved by knowing exactly what you did last time. LatherForge is our own soap business app, launching on 1 January 2027. It keeps your recipes, batches, ingredient stock and cost per bar in one place, so you are not juggling paper notes and spreadsheets. The first 300 people on the waitlist get 3 months free, with no card needed to start.",
        link: { href: '/early-access/', label: 'Join the LatherForge waitlist' }
      },
      {
        text: 'Information only. Not professional or medical advice. Always follow lye safety guidance: goggles, gloves and long sleeves, good ventilation, and lye into water, never water into lye.'
      }
    ],
    faqs: [
      { q: 'Is soap with soda ash safe to use?', a: 'Yes. Soda ash is a cosmetic issue. Once the soap has cured, it is safe to use. You can steam or plane the ash off if you want a cleaner look.' },
      { q: 'Why did my soap crack on top?', a: 'It overheated in the mould. Soaping too hot, heavy insulation, or adding honey, sugar, milk or an accelerating fragrance oil are the usual causes. It is cosmetic.' },
      { q: 'How do I know if my soap is lye heavy?', a: 'Warning signs include liquid pockets, an oily layer that will not absorb, a crumbly texture with a sharp zap, or a high reading on pH strips. Check your recipe in a soap calculator and your scale. Do not use suspected lye-heavy soap on skin.' },
      { q: 'What are orange spots on my soap?', a: 'Often called dreaded orange spots (DOS), they are usually a sign of oils going rancid. Common causes are old oils, a high proportion of oils rich in linoleic acid (such as sunflower), or curing in a damp place. Use fresh oils and cure soap with good airflow.' }
    ]
  },
  {
    slug: 'soap-making-tools',
    title: '10 Soap Making Tools You Actually Need (and 5 You Don’t)',
    description: 'The essential cold process soap making equipment for beginners: safety gear, a digital scale, stick blender, lye-safe containers and moulds. Plus five things to skip, including aluminium and vinegar.',
    date: '2026-11-08',
    readTime: '7 min read',
    category: 'Beginner Guides',
    sections: [
      {
        text: "You don't need a craft room full of gadgets to make cold process soap. You need ten things, most of which you may already have, and you need to avoid a few common mistakes. Here is the short list."
      },
      {
        heading: 'Quick answer',
        items: [
          'Safety goggles', 'Chemical-resistant gloves', 'Digital scale (grams)', 'Stick blender',
          'Lye-safe container for the lye solution', 'Stainless steel or heavy plastic mixing pot',
          'Thermometer', 'Silicone spatulas', 'Soap mould', 'A soap calculator'
        ]
      },
      { heading: '1. Safety Goggles', text: 'Lye solution in the eye is a medical emergency. Wear goggles, not just glasses, every time you handle lye or raw soap batter.', shop: { label: 'Browse chemical splash goggles on Amazon', query: 'chemical splash safety goggles' } },
      { heading: '2. Chemical-Resistant Gloves', text: 'Nitrile gloves protect your hands from lye solution and fresh soap batter, which stays caustic until it has saponified. Add long sleeves.', shop: { label: 'Browse nitrile gloves on Amazon', query: 'nitrile gloves' } },
      { heading: '3. Digital Scale', text: 'Soap making is measured by weight, not volume. A digital kitchen scale that reads in grams is essential, and a scale that measures in 1 g steps or finer is better for small batches. Weigh the water too.', shop: { label: 'Browse digital scales (grams) on Amazon', query: 'digital kitchen scale grams 0.1g' } },
      { heading: '4. Stick Blender', text: 'A stick (immersion) blender brings soap to trace in minutes instead of the hour or more it takes by hand. Keep it for soap only.', link: { href: '/blog/best-stick-blenders-for-soap-making/', label: 'See our 7 best stick blenders for soap making' }, shop: { label: 'Browse stick blenders on Amazon', query: 'stick immersion blender' } },
      { heading: '5. Lye-Safe Container', text: 'Mix your lye solution in heavy-duty plastic marked with recycling code 5 (PP) or in stainless steel. Lye solution gets very hot, so choose something sturdy with a handle.', shop: { label: 'Browse PP #5 plastic pitchers on Amazon', query: 'polypropylene pitcher pp5 heavy duty' } },
      { heading: '6. Mixing Pot', text: 'A stainless steel pot or a large heavy plastic jug for melting and mixing your oils. Stainless steel lets you melt solid fats on the hob.', shop: { label: 'Browse stainless steel pots on Amazon', query: 'stainless steel pot' } },
      { heading: '7. Thermometer', text: 'Temperature affects how fast your soap traces and whether it overheats. A probe or infrared thermometer helps you repeat results.', shop: { label: 'Browse infrared and probe thermometers on Amazon', query: 'infrared thermometer cooking' } },
      { heading: '8. Silicone Spatulas', text: 'For scraping every bit of batter out of the pot. Silicone is lye-safe and easy to clean.', shop: { label: 'Browse silicone spatulas on Amazon', query: 'silicone spatula set' } },
      { heading: '9. Soap Mould', text: 'A silicone loaf mould is the easiest start. A wooden mould lined with baking paper also works. Start simple; you can buy fancy moulds later.', shop: { label: 'Browse silicone loaf soap moulds on Amazon', query: 'silicone loaf soap mold' } },
      {
        heading: '10. A Soap Calculator',
        text: 'Every recipe needs its lye and water worked out for the exact oils you use. Never guess and never copy a recipe without checking it. Our free LatherForge soap calculator does this in your browser, with no signup.',
        link: { href: '/lye-calculator/', label: 'Use the free LatherForge soap calculator' }
      },
      {
        heading: '5 Things You Don’t Need (or Should Avoid)',
        items: [
          'Aluminium pots, spoons or moulds: lye reacts with aluminium. Never use it',
          'Wooden spoons for mixing lye: lye breaks down wood over time, and it can splinter into your soap',
          'Glass for mixing lye: many soap makers avoid it, because the heat can crack it and lye can weaken glass over time',
          'Vinegar for lye splashes: rinse skin with plenty of cool running water instead, and get medical help for eyes or serious burns',
          'Expensive all-in-one kits: they often come with small amounts and tools you will replace. Buy the essentials separately'
        ]
      },
      {
        heading: 'Next Steps',
        text: 'Once you have your tools, follow a beginner recipe exactly, keep records of every batch, and let your soap cure fully before using it. Not in the UK or US? We have local guides to soap making supplies in Australia and in New Zealand.',
        link: { href: '/blog/cold-process-soap-beginners-guide/', label: 'Read the complete beginner’s guide to cold process soap' }
      },
      {
        heading: 'One More Tool: Somewhere to Keep Your Records',
        text: "Paper works (try our free printable batch journal). If you would rather keep it digital, LatherForge is our own soap business app, launching on 1 January 2027. It keeps your recipes, batches, ingredient stock and cost per bar in one place, so you are not juggling paper notes and spreadsheets. The first 300 people on the waitlist get 3 months free, with no card needed to start.",
        link: { href: '/early-access/', label: 'Join the LatherForge waitlist' }
      },
      { text: 'Information only. Not professional or medical advice. Always follow lye safety guidance and keep lye away from children and pets.' }
    ],
    faqs: [
      { q: 'What equipment do I need to start making soap?', a: 'Safety goggles, chemical-resistant gloves, a digital scale that reads in grams, a stick blender, a lye-safe container (PP plastic code 5 or stainless steel), a mixing pot, a thermometer, silicone spatulas, a soap mould and a soap calculator.' },
      { q: 'Can I use aluminium for soap making?', a: 'No. Lye reacts with aluminium. Use stainless steel or heavy plastic marked with recycling code 5 (PP) instead.' },
      { q: 'Should I use vinegar on a lye burn?', a: 'No. Rinse the skin with plenty of cool running water. For eye contact or serious burns, get medical help straight away.' },
      { q: 'Do I need a stick blender to make soap?', a: 'You can stir by hand, but it can take an hour or more to reach trace. A stick blender gets you there in minutes and is the one tool most soap makers say they would not be without.' }
    ]
  },
  {
    slug: 'best-oils-for-soap-making',
    title: '12 Best Oils for Soap Making and What Each One Does',
    description: 'Olive, coconut, palm, castor, shea, cocoa butter, lard, tallow, sweet almond, avocado, rice bran and babassu: what each oil brings to a soap bar, typical amounts, and their NaOH SAP values.',
    date: '2026-11-08',
    readTime: '8 min read',
    category: 'Soap Making Basics',
    sections: [
      {
        text: 'Every oil brings something different to a bar: hardness, lather, mildness or conditioning. Good recipes balance a few of them. Here are the twelve most useful soap making oils, with what they do, a common starting range, and the NaOH SAP value from our SAP chart.'
      },
      {
        heading: 'Quick answer',
        items: [
          'For hardness: coconut, palm, cocoa butter, lard, tallow, babassu',
          'For big bubbly lather: coconut and babassu, boosted by castor',
          'For mildness and conditioning: olive, shea, sweet almond, avocado, rice bran',
          'A classic beginner balance: olive, coconut, a hard fat or butter, and a little castor'
        ]
      },
      { heading: '1. Olive Oil (NaOH SAP 0.135)', text: 'Mild and conditioning, the backbone of many recipes. Slow to trace and needs a longer cure. Common range: 25% to 100% (100% olive is castile soap).' },
      { heading: '2. Coconut Oil 76° (NaOH SAP 0.183)', text: 'Makes a hard bar with big, bubbly lather and strong cleansing. Above about 30% it can feel drying, unless you raise the superfat (salt bars often use far more coconut with a high superfat). Common range: 15% to 30%.' },
      { heading: '3. Palm Oil (NaOH SAP 0.142)', text: 'Adds hardness and a stable, creamy lather. If you use it, choose RSPO-certified sustainable palm. Many soap makers leave it out and use butters, lard or tallow instead. Common range: 15% to 30%.' },
      { heading: '4. Castor Oil (NaOH SAP 0.128)', text: 'Boosts and stabilises lather. Too much makes a soft, sticky bar. Common range: 5% to 10%.' },
      { heading: '5. Shea Butter (NaOH SAP 0.128)', text: 'Adds hardness and a silky, conditioning feel. Common range: 5% to 15%.' },
      { heading: '6. Cocoa Butter (NaOH SAP 0.138)', text: 'Makes a very hard bar. High amounts can make soap brittle or prone to cracking. Common range: 5% to 15%.' },
      { heading: '7. Lard (NaOH SAP 0.141)', text: 'Traditional and affordable. Gives a hard, mild bar with creamy, stable lather. Common range: 20% to 40%, and often higher in traditional recipes.' },
      { heading: '8. Beef Tallow (NaOH SAP 0.143)', text: 'Similar to lard: a hard, long-lasting, mild bar with creamy lather. Common range: 20% to 40%, often higher.' },
      { heading: '9. Sweet Almond Oil (NaOH SAP 0.139)', text: 'A conditioning liquid oil. Mention it on your label and listing, because some customers have nut allergies. Common range: 5% to 15%.' },
      { heading: '10. Avocado Oil (NaOH SAP 0.133)', text: 'Rich and conditioning. Common range: 5% to 15%.' },
      { heading: '11. Rice Bran Oil (NaOH SAP 0.128)', text: 'Conditioning, and often a cheaper alternative to some of the olive oil in a recipe. Common range: 5% to 20%.' },
      { heading: '12. Babassu Oil (NaOH SAP 0.175)', text: 'Behaves much like coconut oil (hardness and big lather), and is often used as a coconut alternative. Common range: 15% to 30%.' },
      {
        heading: 'Oils to Use With Care',
        text: 'Oils high in linoleic acid, such as sunflower, grapeseed and hemp, are lovely in small amounts but can shorten shelf life and make orange spots (rancidity) more likely when used heavily. Many soap makers keep them to around 15% of the recipe or less.'
      },
      {
        heading: 'Put It Together',
        text: 'The percentages above are common starting points, not rules. Whatever oils you choose, the lye amount must be calculated for your exact recipe.',
        link: { href: '/sap-values/', label: 'See SAP values for 46 oils' }
      },
      {
        heading: 'Cost Your Oils Properly',
        text: "Oil prices change, and so does your real cost per bar. LatherForge is our own soap business app, launching on 1 January 2027. It keeps your recipes, batches, ingredient stock and cost per bar in one place, so you are not juggling paper notes and spreadsheets. The first 300 people on the waitlist get 3 months free, with no card needed to start.",
        link: { href: '/early-access/', label: 'Join the LatherForge waitlist' }
      },
      { text: 'Information only. Always run your recipe through a soap calculator and follow lye safety guidance.' }
    ],
    faqs: [
      { q: 'What is the best oil for soap making?', a: 'There is no single best oil. Olive oil is the most versatile and the mildest, coconut oil gives hardness and lather, and castor oil boosts lather. Most good recipes combine three to five oils.' },
      { q: 'How much coconut oil should I use in soap?', a: 'Commonly 15% to 30% of the oils. More than about 30% can feel drying unless you raise the superfat, which is how salt bars use much higher amounts.' },
      { q: 'Can I make soap without palm oil?', a: 'Yes. Many soap makers replace palm with a mix of butters (shea, cocoa), lard or tallow, or extra coconut or babassu for hardness.' },
      { q: 'What is the SAP value of olive oil?', a: 'Olive oil has a NaOH SAP value of about 0.135 (KOH about 0.190). Use a soap calculator rather than working it out by hand.' }
    ]
  },
  {
    slug: 'best-essential-oils-for-soap',
    title: '9 Best Essential Oils for Soap (and Which Ones Fade)',
    description: 'Lavender, lemongrass, patchouli, cedarwood, litsea, peppermint, eucalyptus, tea tree and sweet orange in cold process soap: how well each scent holds, which fade, how to anchor them, and what allergens mean for your label.',
    date: '2026-11-08',
    readTime: '7 min read',
    category: 'Soap Making Basics',
    sections: [
      {
        text: 'Essential oils behave differently in cold process soap. Lye and a long cure can weaken some scents, while others stay strong for months. Here are nine popular choices, how well soap makers commonly report they hold, and how to make lighter scents last longer.'
      },
      {
        heading: 'Quick answer',
        items: [
          'Usually hold well: lavender, lemongrass, patchouli, cedarwood (atlas), litsea cubeba',
          'Often fade: peppermint, eucalyptus, tea tree and especially sweet orange',
          'Anchor lighter scents with a base note such as patchouli or cedarwood',
          'Every essential oil adds fragrance allergens your label may need to list'
        ]
      },
      { heading: '1. Lavender', text: 'The classic soap scent and a reliable performer. Lavender naturally contains linalool, a listed fragrance allergen.' },
      { heading: '2. Lemongrass', text: 'Strong, fresh and long-lasting. Some soap makers find it can speed up trace slightly, so be ready to pour.' },
      { heading: '3. Patchouli', text: 'A deep base note that holds very well and helps anchor lighter oils. A little goes a long way.' },
      { heading: '4. Cedarwood (Atlas)', text: 'Woody, warm and long-lasting. Pairs well with citrus and lavender and helps them hold.' },
      { heading: '5. Litsea Cubeba', text: 'A lemony scent that holds far better than lemon oil, which makes it popular for citrus blends.' },
      { heading: '6. Peppermint', text: 'Bright and cooling, but often fades during cure. Blend it with a base note to help it last.' },
      { heading: '7. Eucalyptus', text: 'Fresh and clean, but often fades. Pairs well with lavender, peppermint and cedarwood.' },
      { heading: '8. Tea Tree', text: 'Medicinal and herbaceous. It holds moderately. Do not make medical claims about it on your label or listing; cosmetic soap cannot claim to treat skin conditions.' },
      { heading: '9. Sweet Orange', text: 'Loved by customers but notorious for fading in soap. Soap makers often use a "folded" (concentrated, e.g. 5-fold or 10-fold) orange oil, and anchor it with litsea or cedarwood.' },
      {
        heading: 'How to Make Scents Last Longer',
        items: [
          'Blend top notes (citrus, mint) with a middle or base note (lavender, cedarwood, patchouli)',
          'Use folded citrus oils',
          'Add essential oils at a cooler temperature, at light trace',
          'Cure bars somewhere cool and airy, and store them away from sunlight'
        ]
      },
      {
        heading: 'How Much to Use, and Allergens',
        text: 'Do not guess usage rates. Each essential oil has its own safe maximum, so follow your supplier’s safety data and IFRA guidance, and have your recipe assessed. Essential oils contain fragrance allergens such as linalool and limonene, and under the expanded EU allergen rules some must be named on your label. Your supplier’s allergen declaration and your safety assessor decide what goes on the label.',
        link: { href: '/cpsr-for-soap/', label: 'Selling your soap? Read our CPSR and allergen guide' }
      },
      {
        heading: 'Keep Your Fragrance Records Together',
        text: "Every fragrance change is a new formula, with its own allergens and records. LatherForge is our own soap business app, launching on 1 January 2027. It keeps your recipes, batches, ingredient stock and cost per bar in one place, so you are not juggling paper notes and spreadsheets. The first 300 people on the waitlist get 3 months free, with no card needed to start.",
        link: { href: '/early-access/', label: 'Join the LatherForge waitlist' }
      },
      { text: 'Information only. Not professional, legal or medical advice. Some essential oils are not suitable for everyone; follow your supplier’s safety guidance.' }
    ],
    faqs: [
      { q: 'Which essential oils last longest in cold process soap?', a: 'Soap makers commonly find that lavender, lemongrass, patchouli, cedarwood and litsea cubeba hold well through the cure.' },
      { q: 'Why does orange essential oil fade in soap?', a: 'Citrus oils are light, volatile top notes, so much of the scent is lost during saponification and curing. Folded (concentrated) orange oil and a base note anchor help it last.' },
      { q: 'How much essential oil should I put in soap?', a: 'It depends on the oil. Each one has its own safe maximum, so follow your supplier’s safety data and IFRA guidance, and have your recipe checked by a safety assessor if you sell it.' },
      { q: 'Do essential oils need to be listed as allergens on soap labels?', a: 'Often, yes. Essential oils contain fragrance allergens such as linalool and limonene, which must be named when above the legal threshold (0.01% for rinse-off products like soap in the EU). Use your supplier’s allergen declaration.' }
    ]
  },
  {
    slug: 'best-stick-blenders-for-soap-making',
    title: '7 Best Stick Blenders for Soap Making (2026)',
    description: 'The best stick (immersion) blenders for cold process soap in 2026: Braun MultiQuick 7 and 5, Cuisinart Smart Stick, Hamilton Beach, KitchenAid, Vitamix and Mueller. What to look for, how to use one for soap, and answers to common questions.',
    date: '2026-11-08',
    readTime: '8 min read',
    category: 'Beginner Guides',
    sections: [
      {
        text: 'A stick blender (also called an immersion or hand blender) is the one tool that turns soap making from an hour of stirring into a few minutes. Almost any decent model will work, but some suit soap better than others. We picked these seven from models named as top choices in current 2026 kitchen reviews and models soap makers recommend on soap making forums. We have not lab-tested them ourselves; we tell you where each recommendation comes from.'
      },
      {
        heading: 'Quick answer',
        items: [
          'Best overall: Braun MultiQuick 7',
          'Best value all-rounder: Braun MultiQuick 5',
          'Soap makers’ favourites: Cuisinart Smart Stick and Hamilton Beach',
          'Best budget pick: KitchenAid 2-Speed',
          'Best premium pick: Vitamix Immersion Blender',
          'Budget alternative: Mueller'
        ]
      },
      {
        heading: 'What to Look For in a Soap Stick Blender',
        items: [
          'A stainless steel shaft and blade guard: raw soap batter is caustic, so avoid aluminium parts',
          'A detachable shaft: easier to clean, and you can keep a shaft just for soap',
          'Pulse or a low speed setting: short bursts mean fewer air bubbles in your bars',
          'A comfortable grip: you will hold it upright in a jug of hot batter',
          'Enough power that it does not struggle or overheat on thicker recipes'
        ]
      },
      {
        heading: '1. Braun MultiQuick 7',
        text: 'Named best immersion blender overall by Bon Appétit in its June 2026 roundup. A strong, well-built option if you want one blender to last for years of soap making.',
        shop: { label: 'Check price on Amazon', query: 'Braun MultiQuick 7 immersion blender' }
      },
      {
        heading: '2. Braun MultiQuick 5',
        text: 'Picked as the best choice for balancing performance, versatility and cost by Shouldit (August 2026). A good middle-ground choice for hobby soap makers.',
        shop: { label: 'Check price on Amazon', query: 'Braun MultiQuick 5 immersion blender' }
      },
      {
        heading: '3. Cuisinart Smart Stick',
        text: 'One of the models soap makers name most often on the Soapmaking Forum. A popular, widely available choice for everyday batches.',
        shop: { label: 'Check price on Amazon', query: 'Cuisinart Smart Stick immersion blender' }
      },
      {
        heading: '4. Hamilton Beach Hand Blender',
        text: 'Also recommended by soap makers on the Soapmaking Forum, and a common budget-friendly starting point. Check that the model you choose has a stainless steel shaft.',
        shop: { label: 'Check price on Amazon', query: 'Hamilton Beach hand blender stainless steel' }
      },
      {
        heading: '5. KitchenAid 2-Speed Hand Blender',
        text: 'Named best budget immersion blender by Food Network (February 2026). The two speeds are useful for soap: low to mix without whipping in air.',
        shop: { label: 'Check price on Amazon', query: 'KitchenAid 2-Speed Hand Blender' }
      },
      {
        heading: '6. Vitamix Immersion Blender',
        text: 'Food Network’s best immersion blender overall (February 2026). A premium option if you make large or frequent batches and want something built to last.',
        shop: { label: 'Check price on Amazon', query: 'Vitamix Immersion Blender' }
      },
      {
        heading: '7. Mueller Immersion Blender',
        text: 'Included in TechGearLab’s tested roundup of hand blenders. A low-cost way to get started if you are not sure soap making is for you yet.',
        shop: { label: 'Check price on Amazon', query: 'Mueller immersion blender stainless steel' }
      },
      {
        heading: 'How to Use a Stick Blender for Soap',
        items: [
          'Keep the blender for soap only. Never use it for food again once it has touched lye or raw soap batter',
          'Wear goggles and gloves, and keep the blade fully under the surface before you switch on',
          'Tap the blender on the bottom of the jug to release trapped air, then use short pulses with stirring in between',
          'Rest the motor between pulses so it does not overheat',
          'Stop at the trace you need: thin trace for swirls, thicker for textured tops',
          'If the batter thickens quickly before it is really soap, it may be false trace: make sure all fats are fully melted'
        ],
        link: { href: '/blog/cold-process-soap-problems/', label: 'Read: 10 cold process soap problems and how to fix them' }
      },
      {
        heading: 'Make Every Batch Count',
        text: 'A good blender is only half of it: you also need the right lye amount for your oils. Run every recipe through our free soap calculator before you blend.',
        link: { href: '/lye-calculator/', label: 'Open the free LatherForge soap calculator' }
      },
      {
        heading: 'Join LatherForge',
        text: 'LatherForge is our own soap business app, launching on 1 January 2027. It keeps your recipes, batches, ingredient stock and cost per bar in one place, so you know exactly what worked and what each bar costs. The first 300 people on the waitlist get 3 months free, with no card needed to start.',
        link: { href: '/early-access/', label: 'Join the LatherForge waitlist: first 300 get 3 months free' }
      },
      { text: 'Information only. Recommendations are based on the published reviews and soap maker forums named above, not our own lab testing. Prices and models change, so check current details and reviews on Amazon before you buy. Always follow lye safety guidance.' }
    ],
    faqs: [
      { q: 'Do you have to use an immersion blender for soap?', a: 'No, you can stir by hand, but it can take an hour or more to reach trace. A stick blender gets there in a few minutes, which is why almost all soap makers use one.' },
      { q: 'Is there a difference between a stick blender and an immersion blender?', a: 'No. Stick blender, immersion blender and hand blender are different names for the same tool: a handheld blender you put into the pot or jug.' },
      { q: 'Can I use my kitchen stick blender for soap?', a: 'You can, but once it has been used for soap it should never be used for food again. Most soap makers buy a separate, inexpensive blender kept only for soap.' },
      { q: 'What is the best stick blender for soap making?', a: 'Look for a stainless steel shaft, a detachable shaft and a pulse or low speed. Popular choices include the Braun MultiQuick range, Cuisinart Smart Stick, Hamilton Beach and KitchenAid 2-Speed for budget, and Vitamix for premium.' }
    ]
  },
  {
    slug: 'best-candle-making-kits-for-beginners',
    title: 'Best Candle Making Kits for Beginners: 2026 Gift Guide',
    description: 'The best candle making kits for beginners and adults in 2026: CandleScience Starter+, Makesy, Hearth & Harbor soy kit, Banter & Bliss, Bramble Berry, Lone Star and Betterbee beeswax. What a good kit includes, safety, and gift tips.',
    date: '2026-11-08',
    readTime: '9 min read',
    category: 'Gift Guides',
    sections: [
      {
        text: 'A candle making kit is one of the most searched craft gifts every Christmas, and for good reason: in an afternoon you can pour candles that look and smell like boutique ones. We picked these seven from kits named in current 2026 reviews and Google’s top shopping results. We have not tested them ourselves; we tell you where each pick comes from, and prices are as listed at the time of writing (November 2026), so check the current price before you buy.'
      },
      {
        heading: 'Quick picks',
        items: [
          'Best overall: CandleScience Starter+ Candle Making Kit',
          'Best stylish gift: Makesy Candle Making Starter Kit',
          'Best value all-in-one: Hearth & Harbor Natural Soy Candle Making Kit',
          'Best for a group or date night: Banter & Bliss DIY Candle Kit',
          'Best from a soap and candle specialist: Bramble Berry Serenity Candle Kit',
          'Best budget soy kit: Lone Star Candle Supply Beginner’s Kit',
          'Best beeswax kit: Betterbee Candle Making Beginner Kit'
        ]
      },
      {
        heading: 'What a Good Beginner Candle Kit Includes',
        items: [
          'Wax: soy, coconut-soy or beeswax. Soy and coconut blends are the easiest for beginners',
          'Pre-tabbed wicks and something to hold them straight while the wax sets',
          'Containers: tins or glass jars, ideally with lids for gifting',
          'Fragrance oils made for candles, with clear amounts',
          'A pouring pitcher and a thermometer: temperature matters for a smooth top and good scent throw',
          'Clear instructions. If a kit has no thermometer, plan to buy one'
        ]
      },
      {
        heading: '1. CandleScience Starter+ Candle Making Kit',
        text: 'Named the best overall beginner kit in Google’s AI summary for “best candle making kit for beginners” (November 2026). Listed at about $74.99, it makes six candles and includes coconut apricot wax, six tumbler jars with lids, three fragrance oils, pre-tabbed wicks, wick bars and a digital thermometer. CandleScience sells it directly; check Amazon too.',
        shop: { label: 'Check price on Amazon', query: 'CandleScience candle making kit' }
      },
      {
        heading: '2. Makesy Candle Making Starter Kit',
        text: 'Named best overall in a 2026 hands-on roundup of candle kits (Life Between Weekends), at about $48 to $60. Soy wax and stylish reusable vessels make it a strong gift that looks good on the shelf afterwards.',
        shop: { label: 'Check price on Amazon', query: 'Makesy candle making starter kit' }
      },
      {
        heading: '3. Hearth & Harbor Natural Soy Candle Making Kit',
        text: 'Picked as the best all-in-one value kit in Google’s 2026 summary, at about $32 to $34. It includes about 2 lb of soy wax, a melting pot, cotton and wooden wicks, tins, a thermometer and dried flowers, so you can start without buying extra tools.',
        shop: { label: 'Check price on Amazon', query: 'Hearth Harbor soy candle making kit' }
      },
      {
        heading: '4. Banter & Bliss DIY Candle Kit',
        text: 'Named best for groups in the same 2026 roundup, at about $46. Coconut-soy wax and four six-ounce candles make it a good pick for a craft night, a couple or a family gift.',
        shop: { label: 'Check price on Amazon', query: 'Banter Bliss candle making kit' }
      },
      {
        heading: '5. Bramble Berry Serenity Candle Kit',
        text: 'Rated 4.5 stars from 32 reviews in Google Shopping (November 2026), at about $42.99. Bramble Berry is a long-standing soap and candle supplier, so this is a good choice if the person you are buying for might move on to soap making too.',
        shop: { label: 'Check price on Amazon', query: 'Bramble Berry candle making kit' }
      },
      {
        heading: '6. Lone Star Candle Supply Beginner’s DIY Candle Making Kit',
        text: 'A 100% soy wax beginner kit listed at about $29.95, ranking on Google’s first page for beginner kits. Good value if you want real candle-supply materials rather than a toy-style kit.',
        shop: { label: 'Check price on Amazon', query: 'Lone Star Candle Supply beginner candle making kit' }
      },
      {
        heading: '7. Betterbee Candle Making Beginner Kit',
        text: 'A beeswax kit rated 4.9 stars from 10 reviews, listed at about $133.89. It makes 30 beeswax tealights and 12 votives. A premium pick for anyone who prefers beeswax over soy.',
        shop: { label: 'Check price on Amazon', query: 'Betterbee beeswax candle making kit' }
      },
      {
        heading: 'Candle Making Safety',
        items: [
          'Never heat wax directly over a flame. Use a double boiler or a dedicated melting pot',
          'Use a thermometer and stay with melting wax at all times',
          'If wax catches fire, never use water: turn off the heat and smother it with a lid',
          'Hot wax burns. Children should only help with adult supervision and should not pour hot wax',
          'Trim wicks before lighting, and never leave a burning candle unattended',
          'Let candles cure as the kit instructions say before judging the scent; many soy candles smell stronger after a few days'
        ]
      },
      {
        heading: 'Gift Tips',
        items: [
          'Order early in November and December, as popular kits sell out and delivery slows down',
          'Check what is included: thermometer, pitcher and containers save the recipient a trip to the shops',
          'Add a second pack of wax or extra jars so they can make another batch',
          'For a budget gift, craft stores such as Michaels sell simple kits for around $10 to $20'
        ]
      },
      {
        heading: 'Making Soap Too?',
        text: 'If the person you are buying for also loves bath and body crafts, see our soap kit guide.',
        link: { href: '/blog/best-soap-making-kits-for-beginners/', label: 'Best Soap Making Kits for Beginners: 2026 Gift Guide' }
      },
      {
        heading: 'Join LatherForge',
        text: 'LatherForge is our own app for makers of soap, candles, bath bombs and skincare, launching on 1 January 2027. It keeps your recipes, batches, stock and true cost per item in one place, so you know what every candle really costs to make. The first 300 people on the waitlist get 3 months free, with no card needed to start.',
        link: { href: '/early-access/', label: 'Join the LatherForge waitlist: first 300 get 3 months free' }
      },
      { text: 'Information only. Picks are based on the published reviews, ratings and search results named above, not our own testing. Prices, contents and availability change; check current details and reviews before you buy. Follow the kit instructions and candle safety guidance.' }
    ],
    faqs: [
      { q: 'What is the best candle making kit for beginners?', a: 'In current 2026 reviews, the CandleScience Starter+ kit is often named best overall, the Makesy Starter Kit is a popular stylish gift, and the Hearth & Harbor soy kit is a strong all-in-one value pick.' },
      { q: 'What should a candle making kit include?', a: 'Wax (soy, coconut-soy or beeswax), pre-tabbed wicks and holders, containers, candle fragrance oil, a pouring pitcher, a thermometer and clear instructions.' },
      { q: 'Are candle making kits safe for kids?', a: 'Candle making uses hot wax, so children should only help with close adult supervision and should not handle or pour hot wax themselves.' },
      { q: 'Is soy wax good for beginners?', a: 'Yes. Soy and coconut-soy waxes are the most common in beginner kits because they melt at lower temperatures and are easy to pour.' }
    ]
  },
  {
    slug: 'best-soap-making-kits-for-beginners',
    title: 'Best Soap Making Kits for Beginners: 2026 Gift Guide',
    description: 'The best soap making kits for beginners in 2026, melt and pour and cold process: Bramble Berry, Craftzee, Makesy, Hinkler and VEVOR. Which type to choose, what a good kit includes, safety, and gift tips.',
    date: '2026-11-08',
    readTime: '9 min read',
    category: 'Gift Guides',
    sections: [
      {
        text: 'A soap making kit is a brilliant gift, but there are two very different kinds. Melt and pour kits are safe and easy for almost anyone. Cold process kits make soap from scratch with lye and are for adults who want the real craft. We picked these seven from kits that appear in Google’s top shopping results with strong ratings in November 2026. We have not tested them ourselves, and prices are as listed at the time of writing, so check the current price before you buy. If you make soap to sell rather than buying a kit as a present, see our guide to soap gift sets.'
      },
      {
        heading: 'Quick picks',
        items: [
          'Best cold process kit overall: Bramble Berry Natural Soap Kit for Beginners',
          'Best value cold process kit: Bramble Berry Beginner’s Cold Process Soap Kit',
          'Best melt and pour kit: Craftzee Large Soap Making Kit',
          'Best stylish melt and pour gift: Makesy soap making kits',
          'Best budget melt and pour kit: Bramble Berry Raspberry Vanilla Soap Starter Kit',
          'Best family craft gift: Hinkler Create Your Own Deluxe Soap Kit',
          'Best budget tool set: VEVOR Soap Making Kit'
        ]
      },
      {
        heading: 'Melt and Pour or Cold Process?',
        items: [
          'Melt and pour: you melt a ready-made soap base, add colour and scent, and pour. No lye handling, ready to use once it sets. Best for children (with adult help), quick gifts and total beginners',
          'Cold process: you make soap from oils and lye. More creative control and a true handmade bar, but it needs safety gear, accurate weighing and a 4 to 6 week cure. Adults only',
          'Not sure? Start with melt and pour. You can always move on to cold process later'
        ]
      },
      {
        heading: '1. Bramble Berry Natural Soap Kit for Beginners',
        text: 'Rated 4.8 stars from 42 reviews in Google Shopping (November 2026), at about $99.99. A cold process kit; a reviewer on Bramble Berry’s site says it includes clear instructions, all the ingredients, a mould, a scale and some safety gear. Bramble Berry sells it directly; check Amazon too.',
        shop: { label: 'Check price on Amazon', query: 'Bramble Berry cold process soap making kit beginners' }
      },
      {
        heading: '2. Bramble Berry Beginner’s Cold Process Soap Kit',
        text: 'Rated 4.7 stars from 41 reviews, at about $69.99. Reviewers mention an easy-to-follow recipe and easy-to-measure ingredients. A lower-cost way into cold process soap.',
        shop: { label: 'Check price on Amazon', query: 'Bramble Berry beginner cold process soap kit' }
      },
      {
        heading: '3. Craftzee Large Soap Making Kit',
        text: 'A melt and pour kit with a shea butter soap base, rated 4.6 stars from 73 reviews, at about $99.99. Reviewers say it comes with everything needed to get started. A generous gift for someone who wants to make lots of bars.',
        shop: { label: 'Check price on Amazon', query: 'Craftzee soap making kit shea butter' }
      },
      {
        heading: '4. Makesy Soap Making Kits',
        text: 'Makesy ranks on Google’s first page for beginner melt and pour kits, with premium bases, colours and fragrances. Like Makesy’s candle kits, they are designed to look good, which makes them a strong gift.',
        shop: { label: 'Check price on Amazon', query: 'Makesy soap making kit melt and pour' }
      },
      {
        heading: '5. Bramble Berry Raspberry Vanilla Soap Starter Kit',
        text: 'A budget melt and pour kit at about $29.99, rated 5 stars from 3 reviews. A reviewer notes you do not need a scale. A simple, affordable first try.',
        shop: { label: 'Check price on Amazon', query: 'Bramble Berry melt and pour soap starter kit' }
      },
      {
        heading: '6. Hinkler Create Your Own Deluxe Soap Kit',
        text: 'A craft-style soap kit at about $38.99, rated 4.8 stars from 6 reviews. A fun family or teen gift; check the box for the recommended age and what is included.',
        shop: { label: 'Check price on Amazon', query: 'Hinkler Create Your Own Deluxe Soap Kit' }
      },
      {
        heading: '7. VEVOR Soap Making Kit',
        text: 'A budget tool set at about $21.76, rated 4.8 stars from 35 reviews: a bamboo cutting box, silicone mould, straight and wavy cutters, bags and stickers. It is equipment rather than ingredients, so it suits someone who already has soap base or makes cold process soap.',
        shop: { label: 'Check price on Amazon', query: 'VEVOR soap making kit cutting box silicone mold' }
      },
      {
        heading: 'Soap Making Safety',
        items: [
          'Cold process kits contain lye (sodium hydroxide): adults only, with goggles, gloves and long sleeves',
          'Always add lye to water, never water to lye, and work somewhere well ventilated',
          'If lye splashes on skin, rinse with plenty of cool running water',
          'Melt and pour base gets hot: an adult should melt and pour it for children',
          'Keep all soap making supplies away from food areas and out of reach of children and pets'
        ]
      },
      {
        heading: 'Gift Tips',
        items: [
          'Order early in November and December, as popular kits sell out',
          'Add a stick blender for a cold process soap maker, or extra soap base for a melt and pour fan',
          'Pair the kit with our free printable soap batch journal so they can record every batch'
        ],
        link: { href: '/free-soap-journal/', label: 'Download the free printable soap batch journal' }
      },
      {
        heading: 'More Guides',
        items: [
          'Best stick blenders for soap making',
          '10 soap making tools you actually need',
          'Best candle making kits for beginners'
        ],
        link: { href: '/blog/best-candle-making-kits-for-beginners/', label: 'Best Candle Making Kits for Beginners: 2026 Gift Guide' }
      },
      {
        heading: 'Join LatherForge',
        text: 'LatherForge is our own app for makers of soap, candles, bath bombs and skincare, launching on 1 January 2027. It keeps your recipes, batches, stock and cost per bar in one place, and our free soap calculator works out lye for any cold process recipe. The first 300 people on the waitlist get 3 months free, with no card needed to start.',
        link: { href: '/early-access/', label: 'Join the LatherForge waitlist: first 300 get 3 months free' }
      },
      { text: 'Information only. Picks are based on published ratings, reviews and search results named above, not our own testing. Prices, contents and availability change; check current details and reviews before you buy. Always follow the kit instructions and lye safety guidance.' }
    ],
    faqs: [
      { q: 'What is the best soap making kit for beginners?', a: 'For an easy start, choose a melt and pour kit such as Craftzee or Makesy. For real from-scratch soap, Bramble Berry’s Natural Soap Kit for Beginners is one of the highest-rated cold process kits in 2026.' },
      { q: 'What is the difference between melt and pour and cold process soap kits?', a: 'Melt and pour kits use a ready-made soap base that you melt, scent and pour, with no lye handling. Cold process kits make soap from oils and lye, need safety gear and accurate weighing, and the bars must cure for 4 to 6 weeks.' },
      { q: 'Are soap making kits safe for kids?', a: 'Melt and pour kits can be a fun family activity if an adult melts and pours the hot base. Cold process kits use lye and are for adults only.' },
      { q: 'Do soap making kits make good Christmas gifts?', a: 'Yes. They are one of the most searched craft gifts in November and December. Order early, check what is included, and consider adding extra base or a stick blender.' }
    ]
  },
  {
    slug: 'soap-making-supplies-australia',
    title: 'Soap Making Supplies in Australia: Caustic Soda, Oils and Moulds',
    description: 'Where Australian soap makers buy caustic soda, oils, fragrance and moulds, what to check on the label, and why caustic soda ships differently.',
    date: '2026-11-09',
    readTime: '5 min read',
    category: 'Supplies',
    sections: [
      { text: 'Most soap-making guides are written for the US, where sodium hydroxide is called lye. In Australia it is usually sold as caustic soda, and big US suppliers often will not send it here. Buying locally is simpler and cheaper.' },
      {
        heading: 'Quick answers',
        items: [
          'Soap needs caustic soda that is 98–99%+ sodium hydroxide, with nothing added.',
          'Australian safety data sheets list sodium hydroxide as a Class 8 dangerous good, so some sellers limit shipping or offer pick-up only.',
          'Soap suppliers are the safest source; hardware-store caustic soda works only if the label says pure sodium hydroxide.'
        ]
      },
      {
        heading: '1. Caustic soda (sodium hydroxide)',
        text: 'Australian forum users report using hardware-store caustic soda (for example Diggers from Bunnings) without problems, and some supermarket brands are labelled 98% sodium hydroxide. These are personal reports, not checked specs, so always read the label or safety data sheet.',
        items: [
          'The label or safety data sheet says sodium hydroxide, 98–99%+, nothing else listed.',
          'Never use drain-cleaner blends. If there are other ingredients, it is not for soap.',
          'Buy it sealed. Caustic soda pulls moisture from the air, and damp beads weigh wrong.'
        ]
      },
      {
        heading: '2. Oils, butters, fragrance and moulds',
        text: 'Aussie Soap Supplies describes itself as Australia’s largest provider of soap bases and silicone moulds, and also sells fragrance, essential oils, colours, clays and packaging at wholesale prices for home crafters and small businesses. Specialist fragrance and essential oil sellers are also popular; check that any older recommendation is still trading before you order.'
      },
      {
        heading: '3. Supermarket oils',
        text: 'Olive, canola and coconut oil from the supermarket work for basic recipes. Check the label for pure oil, not a blend. Shea butter, cocoa butter and castor oil are usually cheaper from a soap supplier. Freight is the hidden cost in Australia, so combine heavy oils into one order.'
      },
      {
        heading: '4. Summer soaping',
        text: 'Hot weather speeds up trace and makes overheating and cracking more likely. Soap at cooler room temperatures, skip insulating the mould on hot days, and keep curing bars out of direct sun and humidity.'
      },
      {
        heading: 'Work out your recipe first',
        text: 'Run your recipe through a lye calculator before you order, so you buy the right amount of caustic soda for every batch. Across the Tasman? See our guide to soap making supplies in New Zealand.',
        link: { href: '/lye-calculator/', label: 'Open the free soap calculator' }
      },
      {
        heading: 'Join LatherForge',
        text: 'LatherForge is our own app for makers, launching on 1 January 2027. It keeps your recipes, batches, stock and cost per bar in one place. The first 300 sign-ups get 3 months free, with no card needed to start.',
        link: { href: '/early-access/', label: 'Join the LatherForge waitlist' }
      },
      { text: 'Information only. Not professional or safety advice. Supplier details come from each business’s own description or are marked as personal reports; check current details before you buy. Always follow lye safety guidance: goggles, gloves, and caustic soda into water, never water into caustic soda.' }
    ],
    faqs: [
      { q: 'What is lye called in Australia?', a: 'Usually caustic soda. Chemically it is sodium hydroxide (NaOH), the same thing US soap makers call lye.' },
      { q: 'Can I use Bunnings caustic soda for soap?', a: 'Some Australian soap makers report using hardware-store caustic soda without problems. Only use it if the label or safety data sheet says pure sodium hydroxide (98–99%+) with nothing added.' },
      { q: 'Why will some suppliers not post caustic soda?', a: 'Sodium hydroxide is classed as a dangerous good for transport in Australia, so some sellers limit shipping, charge extra or offer pick-up only.' }
    ]
  },
  {
    slug: 'soap-making-supplies-nz',
    title: 'Soap Making Supplies and Caustic Soda in New Zealand',
    description: 'Where Kiwi soap makers buy caustic soda (sodium hydroxide), what to check on the label, and why some sellers only offer pick-up.',
    date: '2026-11-09',
    readTime: '4 min read',
    category: 'Supplies',
    sections: [
      { text: 'In New Zealand the lye used for soap is usually sold as caustic soda. Chemically it is sodium hydroxide (NaOH): the one ingredient every cold process bar needs, and the one you cannot swap or guess.' },
      {
        heading: 'Quick answers',
        items: [
          'Buy caustic soda labelled 98–99%+ sodium hydroxide, with nothing else in it.',
          'Some NZ sellers offer it pick-up only, because couriers treat it as a dangerous good.',
          'Check delivery before you plan a batch around it, especially if you are rural.'
        ]
      },
      {
        heading: '1. Where to buy caustic soda in NZ',
        items: [
          'Go Native sells sodium hydroxide as 99% pure fine granules (sometimes called pearls).',
          'Pure Nature sells 1 kg of sodium hydroxide as pick-up only, explaining that it is a corrosive dangerous good that needs special handling by couriers.',
          'Bunnings NZ sells Glitz Caustic Soda 500g, which its listing describes as suitable for soap making, with sodium hydroxide as the active ingredient.'
        ]
      },
      {
        heading: '2. What to check on the label',
        items: [
          'Sodium hydroxide, 98–99%+. Nothing else listed.',
          'Never a drain-cleaner blend. If there are other ingredients, it is not for soap.',
          'A sealed container. Caustic soda pulls moisture from the air, and damp granules clump and weigh wrong.',
          'Store it in its original labelled container, lid on, away from children, pets, acids and aluminium.'
        ]
      },
      {
        heading: '3. Safety, every time',
        items: [
          'Goggles and gloves on before you open it.',
          'Add caustic soda to water, never water to caustic soda.',
          'Use stainless steel or PP5 plastic jugs. Never aluminium.'
        ]
      },
      {
        heading: 'Work out how much you need first',
        text: 'Run your recipe through a lye calculator before you buy, so you know exactly how much caustic soda each batch needs. Buying from Australia instead? See our guide to soap making supplies in Australia.',
        link: { href: '/lye-calculator/', label: 'Open the free soap calculator' }
      },
      {
        heading: 'Join LatherForge',
        text: 'LatherForge is our own app for makers, launching on 1 January 2027. It keeps your recipes, batches, stock and cost per bar in one place. The first 300 sign-ups get 3 months free, with no card needed to start.',
        link: { href: '/early-access/', label: 'Join the LatherForge waitlist' }
      },
      { text: 'Information only. Not professional or safety advice. Seller details come from each seller’s own product page; prices, stock and delivery change, so check before you buy. Always follow lye safety guidance.' }
    ],
    faqs: [
      { q: 'Is caustic soda the same as lye?', a: 'Yes. Caustic soda is sodium hydroxide (NaOH), which soap makers call lye.' },
      { q: 'Can I buy caustic soda for soap at Bunnings NZ?', a: 'Bunnings NZ lists Glitz Caustic Soda 500g as suitable for soap making. Check the label says sodium hydroxide with nothing added.' },
      { q: 'Why is caustic soda pick-up only at some shops?', a: 'It is a corrosive dangerous good for transport, so some sellers do not courier it or need special handling that can delay delivery.' }
    ]
  },
  {
    slug: 'selling-soap-in-canada',
    title: 'Selling Soap in Canada: Cosmetic Notification and Labels',
    description: 'What Canadian soap makers need to do before selling: the free Cosmetic Notification Form, the 10-day deadline, and bilingual labels with INCI ingredients.',
    date: '2026-11-09',
    readTime: '5 min read',
    category: 'Selling',
    sections: [
      { text: 'In Canada, soap sold for cleansing is treated as a cosmetic. That is different from the US, where “true soap” is mostly outside FDA cosmetic rules. Health Canada says the cosmetic rules apply to handmade products too, including ones sold at craft sales or by home-based businesses.' },
      {
        heading: 'Quick answers',
        items: [
          'File a Cosmetic Notification Form (CNF) for each product within 10 days of your first sale in Canada.',
          'There is no fee.',
          'Labels need ingredients in INCI names and the required information in English and French.'
        ]
      },
      {
        heading: '1. The Cosmetic Notification Form',
        items: [
          'Deadline: within 10 days of your first sale in Canada. You can file earlier with a predicted first-sale date.',
          'Who files: the manufacturer or importer. If you make and sell your own soap, that is you.',
          'What it asks for: brand and product name, the product form (for example a bar), what it is for, and the ingredients with their amounts.',
          'Changed a recipe, product name or contact details? File a revised notification within 10 days of the change.',
          'If a product is not notified within the 10 days, it cannot be sold after that window until it is.'
        ]
      },
      {
        heading: '2. Notification is not approval',
        text: 'Health Canada does not test or approve your soap when you notify it. The form is a record that the product exists and what is in it. Keep a list of your recipes and their notification dates in one place, so a recipe change does not slip past the 10-day rule.'
      },
      {
        heading: '3. What goes on a soap label in Canada',
        items: [
          'Ingredients in INCI names, in descending order of amount. For soap these are usually the saponified oils, such as Sodium Olivate or Sodium Cocoate.',
          'English and French for the required label information. The INCI ingredient list is the exception.',
          'Quebec has stricter French-language rules, so check them if you sell there.',
          'Product identity can be left off when it is obvious, like a bar of soap.'
        ]
      },
      {
        heading: 'A checklist before your first market',
        items: [
          'Finalise the recipe and check it in a lye calculator.',
          'Write the ingredient list in INCI names, in order of amount.',
          'Make bilingual labels (English and French).',
          'File a Cosmetic Notification Form for each product within 10 days of first sale.',
          'Keep a record of the notification date for each recipe.'
        ],
        link: { href: '/lye-calculator/', label: 'Open the free soap calculator' }
      },
      {
        heading: 'Join LatherForge',
        text: 'LatherForge is our own app for makers, launching on 1 January 2027. It keeps your recipes, batches, stock and cost per bar in one place. The first 300 sign-ups get 3 months free, with no card needed to start.',
        link: { href: '/early-access/', label: 'Join the LatherForge waitlist' }
      },
      { text: 'Information only. Not legal or professional advice. Based on Health Canada’s published guidance; rules change, so check Health Canada’s cosmetics pages before you sell. Always follow lye safety guidance when making soap.' }
    ],
    faqs: [
      { q: 'Is handmade soap a cosmetic in Canada?', a: 'Yes. Soap sold for cleansing is regulated as a cosmetic in Canada, including handmade soap sold at markets or by home businesses.' },
      { q: 'How long do I have to file a Cosmetic Notification Form?', a: 'Within 10 days of your first sale in Canada. You can also file before you start selling.' },
      { q: 'Does the Cosmetic Notification Form cost anything?', a: 'No. Health Canada does not charge a fee for cosmetic notification.' },
      { q: 'Do soap labels in Canada need French?', a: 'Yes. The required label information must be in English and French. The INCI ingredient list stays in INCI names.' }
    ]
  },
  {
    slug: 'what-is-lather-in-soap',
    title: 'What Is Lather in Soap? What Makes Soap Bubble (and What Kills It)',
    description: 'What lather in soap is, which oils make big bubbles or creamy lather, why hard water and recipe choices change it, and how to get more lather from handmade soap.',
    date: '2026-11-09',
    readTime: '5 min read',
    category: 'Soap Making Basics',
    sections: [
      { text: 'Lather is the foam you get when you rub soap with water and air. Soap molecules have one end that loves water and one end that loves oil and grease. When you work the bar, those molecules gather around tiny pockets of air and trap them, and that mass of small bubbles is lather.' },
      {
        heading: 'Quick answers',
        items: [
          'Lather is air trapped by soap molecules in water. It looks like cleaning, but bubbles are not what removes dirt.',
          'Coconut, palm kernel and babassu oils give big, fluffy bubbles. Castor oil makes lather more stable and creamy.',
          'Olive oil gives a low, creamy lather. That is why pure castile soap feels “slimy” and bubbles less.',
          'Hard water cuts lather, because minerals react with soap and form scum.'
        ]
      },
      {
        heading: '1. Big bubbles vs creamy lather',
        items: [
          'Big, fluffy bubbles: coconut oil, palm kernel oil, babassu oil.',
          'Stable, creamy lather: castor oil (usually 5–10% of the oils), plus butters such as shea and cocoa.',
          'Low, gentle lather: olive, sunflower, sweet almond and other soft oils.'
        ],
        text: 'Most recipes mix these on purpose: enough coconut for bubbles, a little castor to hold them, and conditioning oils for a mild bar.'
      },
      {
        heading: '2. Ways to boost lather in handmade soap',
        items: [
          'Add a little sugar, dissolved in the water before the lye. Many makers use a small amount; it adds heat, so watch for overheating.',
          'Keep castor oil around 5–10%. More is not better: high castor can make bars soft and sticky.',
          'Let the soap cure. Lather usually improves as bars dry and harden over 4–6 weeks.',
          'Check your superfat. A very high superfat can dampen lather.'
        ]
      },
      {
        heading: '3. What kills lather',
        items: [
          'Hard water: minerals react with soap and make scum. Distilled water in your recipe helps the bar; a chelator like sodium citrate can help in use.',
          'Lots of salt: salt bars lather less, which is why salt bar recipes use mostly coconut oil.',
          'Very soft-oil recipes: high olive or sunflower bars give a gentle, low lather by design.'
        ]
      },
      {
        heading: '4. Does more lather mean cleaner?',
        text: 'No. Lather is mostly about how a soap feels. A low-lathering castile bar still cleans. Big bubbles feel luxurious and sell well, but they are not a measure of cleaning power.'
      },
      {
        heading: 'Check the numbers before you change a recipe',
        text: 'Swapping oils to change lather also changes how much lye the recipe needs. Run every change through a lye calculator.',
        link: { href: '/lye-calculator/', label: 'Open the free soap calculator' }
      },
      {
        heading: 'Join LatherForge',
        text: 'LatherForge is our own app for makers, launching on 1 January 2027. It keeps your recipes, batches, stock and cost per bar in one place. The first 300 sign-ups get 3 months free, with no card needed to start.',
        link: { href: '/early-access/', label: 'Join the LatherForge waitlist' }
      },
      { text: 'Information only. Not professional or medical advice. Always follow lye safety guidance: goggles, gloves, and lye into water, never water into lye.' }
    ],
    faqs: [
      { q: 'What is lather in soap?', a: 'Lather is the foam made when soap molecules trap tiny pockets of air in water as you rub the bar.' },
      { q: 'What makes soap lather more?', a: 'Oils like coconut, palm kernel and babassu give big bubbles, castor oil stabilises them, and a little sugar in the water can boost lather. Soft water helps too.' },
      { q: 'Why does my handmade soap not lather?', a: 'Common reasons are a recipe high in soft oils like olive, hard water, a very high superfat, lots of salt, or soap that has not cured long enough.' },
      { q: 'Does more lather mean the soap cleans better?', a: 'No. Lather is mostly about feel. Low-lather soaps such as castile still clean well.' }
    ]
  },
  {
    slug: 'what-is-a-salt-bar',
    title: 'What Is a Salt Bar? Salt Soap Explained',
    description: 'What a salt bar is, why salt bar recipes use so much coconut oil and a high superfat, how much salt to use, and why you cut salt soap early.',
    date: '2026-11-09',
    readTime: '4 min read',
    category: 'Soap Making Basics',
    sections: [
      { text: 'A salt bar (also called salt soap or a spa bar) is cold process soap with a lot of fine salt stirred in, often half the weight of the oils or more. The result is a very hard, dense bar with a smooth, slightly silky feel.' },
      {
        heading: 'Quick answers',
        items: [
          'Salt bars use lots of fine salt, commonly 50–100% of the oil weight.',
          'Salt cuts lather, so recipes use mostly coconut oil (often 70–100%) to bring the bubbles back.',
          'Because that much coconut can feel harsh, salt bars usually have a high superfat, around 15–20%.',
          'Cut them early, within hours, before they set rock hard.'
        ]
      },
      {
        heading: '1. Why so much coconut oil?',
        text: 'Salt dampens lather. Coconut oil makes big bubbles even with a lot of salt in the bar, so it does the heavy lifting. The high superfat leaves extra oil unreacted, which balances coconut’s strong cleansing.'
      },
      {
        heading: '2. Which salt to use',
        items: [
          'Fine sea salt is the usual choice. Coarse salt can feel scratchy.',
          'Many makers avoid Dead Sea salt in high amounts, because it can pull moisture from the air and leave bars damp.',
          'Stir the salt in at light trace, once the batter has thickened a little.'
        ]
      },
      {
        heading: '3. Cut early',
        text: 'Salt bars set fast and get very hard. Many makers cut them within a few hours, or use individual moulds so there is nothing to cut. Leave a full loaf overnight and it can crumble when you slice it.'
      },
      {
        heading: 'Try a tested salt bar recipe',
        text: 'Our salt bar recipe uses 80% coconut oil with a 20% superfat and fine sea salt, with exact lye amounts from our calculator.',
        link: { href: '/soap-recipes/salt-bar-soap-recipe/', label: 'See the salt bar soap recipe' }
      },
      {
        heading: 'Join LatherForge',
        text: 'LatherForge is our own app for makers, launching on 1 January 2027. It keeps your recipes, batches, stock and cost per bar in one place. The first 300 sign-ups get 3 months free, with no card needed to start.',
        link: { href: '/early-access/', label: 'Join the LatherForge waitlist' }
      },
      { text: 'Information only. Not professional or medical advice. Always run your own recipe through a lye calculator and follow lye safety guidance.' }
    ],
    faqs: [
      { q: 'What is a salt bar?', a: 'A cold process soap with a large amount of fine salt added, giving a very hard, dense bar.' },
      { q: 'How much salt goes in a salt bar?', a: 'Commonly 50–100% of the weight of the oils. Start lower if you are new to salt bars.' },
      { q: 'Why do salt bars use so much coconut oil?', a: 'Salt cuts lather, and coconut oil still makes big bubbles with lots of salt in the bar. A high superfat balances its strong cleansing.' },
      { q: 'When should I cut a salt bar?', a: 'Early, often within a few hours, before it sets too hard to slice cleanly.' }
    ]
  },
  {
    slug: 'gel-phase-soap',
    title: 'Gel Phase in Soap: What It Is and Whether You Want It',
    description: 'What gel phase is in cold process soap, how gelled and ungelled bars differ, how to encourage or prevent gel, and what causes a partial gel ring.',
    date: '2026-11-09',
    readTime: '4 min read',
    category: 'Soap Making Basics',
    sections: [
      { text: 'As cold process soap sets, the reaction between oils and lye gives off heat. If the soap gets warm enough, it turns translucent and jelly-like for a while. That stage is called gel phase. It is normal, and the soap is fine whether it gels or not.' },
      {
        heading: 'Quick answers',
        items: [
          'Gelled soap: brighter colours, slightly glossy look, often firm enough to unmould sooner.',
          'Ungelled soap: matte, creamy, more pastel look.',
          'A darker ring in the middle means partial gel. It is cosmetic.',
          'You choose gel or no gel mainly with temperature.'
        ]
      },
      {
        heading: '1. To encourage full gel',
        items: [
          'Insulate the mould with a towel or box so heat spreads evenly.',
          'Some makers put the mould in an oven that has been warmed and then switched off.',
          'Soap at slightly warmer temperatures.'
        ]
      },
      {
        heading: '2. To prevent gel',
        items: [
          'Soap at cooler temperatures and skip insulation.',
          'Put the mould in the fridge or freezer for the first day.',
          'Milk, honey and sugar soaps heat up more, so makers often keep them cool on purpose.'
        ]
      },
      {
        heading: '3. Partial gel',
        text: 'If the middle gels and the edges do not, you get a darker circle or band. Pick one approach and commit: insulate well for full gel, or keep it cool for none. Thin moulds and cold rooms make partial gel more likely.'
      },
      {
        heading: 'Watch for overheating',
        text: 'Too much heat can crack the top or push soap up into a “volcano”. If a recipe runs hot, keep it cooler rather than insulating.',
        link: { href: '/blog/cold-process-soap-problems/', label: 'Fix common cold process soap problems' }
      },
      {
        heading: 'Join LatherForge',
        text: 'LatherForge is our own app for makers, launching on 1 January 2027. It keeps your recipes, batches, stock and cost per bar in one place. The first 300 sign-ups get 3 months free, with no card needed to start.',
        link: { href: '/early-access/', label: 'Join the LatherForge waitlist' }
      },
      { text: 'Information only. Not professional advice. Always follow lye safety guidance: goggles, gloves, and lye into water, never water into lye.' }
    ],
    faqs: [
      { q: 'What is gel phase in soap?', a: 'A warm stage during saponification when cold process soap turns translucent and jelly-like before setting.' },
      { q: 'Is gel phase necessary?', a: 'No. Gelled and ungelled soap are both fine to use. Gel changes the look, not the safety.' },
      { q: 'How do I stop my soap from gelling?', a: 'Soap cooler, skip insulation, and put the mould in the fridge or freezer for the first day.' },
      { q: 'What causes a dark ring in soap?', a: 'Partial gel: the centre heated enough to gel and the edges did not.' }
    ]
  },
  {
    slug: 'soap-gift-sets',
    title: 'Soap Gift Sets That Sell: Ideas and Pricing for Makers',
    description: 'Handmade soap gift set ideas for Christmas markets and online shops, what to put in a set, simple packaging, and how to price a set so it makes a profit.',
    date: '2026-11-09',
    readTime: '5 min read',
    category: 'Selling',
    sections: [
      { text: 'Gift sets are one of the easiest ways to sell more soap at Christmas. Buyers want something ready to give, and a set raises your average sale without making new recipes.' },
      {
        heading: 'Quick answers',
        items: [
          'Group three bars that go together: a theme, a scent family or a colour story.',
          'Add one small extra, like a wooden soap dish or cotton bag, to make it feel like a gift.',
          'Price the whole set: every bar, the extras, the packaging and your wrapping time.'
        ]
      },
      {
        heading: '1. Gift set ideas',
        items: [
          'Festive trio: a pine or fir bar, an orange-clove bar and an unscented bar.',
          'Gentle set: oatmeal, goat milk and unscented bars for sensitive-skin gift buyers.',
          'Spa set: a salt bar, a charcoal bar and a shea butter bar.',
          'Secret Santa minis: small bars wrapped and tagged, priced to a set budget.',
          '“Pick 3” bundle: buyers choose any three bars at a set price.',
          'Soap and candle pairing: a bar with a small candle in a matching scent. New to candles? See our guide to candle making kits.'
        ]
      },
      {
        heading: '2. Packaging that does not eat your margin',
        items: [
          'Kraft boxes or paper with twine look good and cost little per set.',
          'A printed band or label can double as the wrap.',
          'Keep a tester or display set so you are not unwrapping stock at the stall.'
        ]
      },
      {
        heading: '3. Price the set properly',
        text: 'Add up the cost of each bar, the extras, the box or wrap, labels and your time to assemble it. Then add your margin. A set should not be priced as just “three bars”, because the packaging and wrapping time are real costs. Listing sets online? See our Etsy shop tips.',
        link: { href: '/etsy-pricing-calculator/', label: 'Work out your price with the free pricing calculator' }
      },
      {
        heading: '4. Label every set correctly',
        text: 'Each bar still needs its own compliant label for your country, even inside a gift box. Check the rules where you sell before the Christmas rush. We also have a guide to selling soap in Canada.',
        link: { href: '/blog/selling-handmade-soap-legal-requirements/', label: 'Read: selling handmade soap legal requirements' }
      },
      {
        heading: 'Join LatherForge',
        text: 'LatherForge is our own app for makers, launching on 1 January 2027. It keeps your recipes, batches, stock and cost per bar in one place. The first 300 sign-ups get 3 months free, with no card needed to start.',
        link: { href: '/early-access/', label: 'Join the LatherForge waitlist' }
      },
      { text: 'Information only. Not legal or professional advice. Labelling and safety rules depend on where you sell.' }
    ],
    faqs: [
      { q: 'What should go in a soap gift set?', a: 'Usually three bars that go together by theme, scent or colour, plus one small extra such as a soap dish or cotton bag.' },
      { q: 'How do I price a soap gift set?', a: 'Add the cost of every bar, the extras, the packaging and your assembly time, then add your margin.' },
      { q: 'Do soaps in a gift set need labels?', a: 'Yes. Each bar still needs the labelling your country requires, even inside a gift box.' }
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
