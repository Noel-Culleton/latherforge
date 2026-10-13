export interface Post {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  sections: Array<{ heading?: string; text?: string; items?: string[]; link?: { href: string; label: string } }>
  faqs?: Array<{ q: string; a: string }>
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
        ]
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
      },
      {
        heading: 'Your Recipe Decides Your Cure Time',
        text: 'Cure time depends mostly on two things you choose before you start: your oils and your water. Hard oils such as coconut, palm, tallow and lard give a bar that firms up quickly. Soft oils such as olive, sunflower and rapeseed hold on to water and need longer. A lye concentration of around 33% is a common starting point; going higher means less water to evaporate, but the batter traces faster, so make small changes. A soap calculator shows you exactly how much water your recipe uses.',
        link: { href: '/lye-calculator/', label: 'Set your water and lye concentration in the free soap calculator' }
      },
      {
        text: 'Each oil also needs a different amount of lye to saponify fully. If you are swapping a hard oil for a soft one to change how your bar cures, check its SAP value first and recalculate.',
        link: { href: '/sap-values/', label: 'See SAP values for 46 soap making oils' }
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
        ]
      },
      {
        heading: 'Calculate Your Lye First',
        text: 'Hot process uses exactly the same NaOH amounts as cold process. Cooking speeds up saponification, but it does not change how much lye your oils need. Never guess or scale a recipe by eye: run every recipe through a soap calculator and weigh the lye to the gram. Many makers add a little extra water for hot process to keep the soap fluid in the cooker, and the calculator lets you set that.',
        link: { href: '/lye-calculator/', label: 'Calculate your lye and water with the free soap calculator' }
      },
      {
        text: 'The calculator works from each oil\'s saponification (SAP) value. If you want to understand why a coconut-heavy recipe needs more lye than an olive oil one, the SAP chart shows the numbers.',
        link: { href: '/sap-values/', label: 'View the SAP value chart' }
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
        link: { href: '/soap-recipes/hot-process-soap-recipe/', label: 'Get a hot process soap recipe with exact amounts' }
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
    ],
    faqs: [
      {
        q: 'Can I use a cold process recipe for hot process soap?',
        a: 'Yes. Hot process uses the same oils and exactly the same lye amount as cold process. The only common change is a little extra water, which keeps the soap fluid enough to mould after cooking. Recalculate the recipe in a soap calculator rather than adding water by eye.'
      },
      {
        q: 'How do I know when hot process soap is fully cooked?',
        a: 'The whole batch turns glossy and translucent, like petroleum jelly or smooth mashed potato, with no opaque patches left. Many makers also test a small sample with pH strips or a phenolphthalein indicator; a strong pink colour with phenolphthalein means there is still free lye, so keep cooking.'
      },
      {
        q: 'When is hot process soap safe to use?',
        a: 'Once the cook is complete and the soap has cooled and hardened, usually within a day or two. Letting the bars cure for 1–4 weeks still makes them harder, milder and longer lasting.'
      },
      {
        q: 'When should I add fragrance to hot process soap?',
        a: 'After the cook, once the soap has cooled for a few minutes. Adding fragrance at the end means less of it burns off in the heat, so you can often use the same amount as in cold process and get a stronger scent.'
      },
      {
        q: 'Why does my hot process soap look lumpy?',
        a: 'Hot process soap is thick and stiffens as it cools, so a rustic, textured top is normal. For a smoother bar, use slightly more water, stir in a little yoghurt or dissolved sugar after the cook, and press the soap into the mould quickly while it is still warm.'
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
        heading: 'Calculating KOH Is Different',
        text: 'You cannot reuse a bar soap lye amount for liquid soap. Each oil has a separate KOH saponification (SAP) value, and KOH is a heavier molecule than NaOH, so you need roughly 1.4 times as much of it by weight. Most KOH sold for soap making is also only about 90% pure, so you need more again to make up for that. Select KOH in the calculator and it does all of this for you.',
        link: { href: '/lye-calculator/', label: 'Calculate KOH for liquid soap with the free soap calculator' }
      },
      {
        text: 'Coconut oil is the most common base for liquid soap because it stays clear and lathers well, while olive oil makes a milder but thicker, less clear soap. You can compare the KOH values for every oil, including the 90% purity figures, on the SAP chart.',
        link: { href: '/sap-values/', label: 'See KOH SAP values for 46 oils' }
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
        link: { href: '/soap-recipes/liquid-soap-recipe/', label: 'Get a liquid soap recipe with exact KOH amounts' }
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
    ],
    faqs: [
      {
        q: 'Can I make liquid soap with sodium hydroxide (NaOH)?',
        a: 'Not true liquid soap. NaOH makes a hard soap, and dissolving it in water gives a cloudy gel rather than a clear liquid. Liquid soap needs potassium hydroxide (KOH), which makes a soft soap that dissolves fully in water.'
      },
      {
        q: 'Does liquid soap need to cure?',
        a: 'No. Once the paste is fully cooked and diluted, liquid soap can be used straight away. Some makers let the diluted soap rest for a week or so, which lets any cloudiness settle so it can be poured off.'
      },
      {
        q: 'Why is my liquid soap cloudy?',
        a: 'The usual causes are too much superfat, a paste that was not fully cooked, or hard tap water. Keep the superfat at 0–3%, cook until a sample dissolves clear in hot water, and dilute with distilled water.'
      },
      {
        q: 'How much water do I add to liquid soap paste?',
        a: 'A common starting point is about 1.5 to 2.5 times the weight of the paste in hot distilled water. Add it gradually, leave it overnight to dissolve, and add more only if it is still too thick. It is easier to thin soap than to thicken it.'
      },
      {
        q: 'Does homemade liquid soap need a preservative?',
        a: 'Plain liquid soap diluted with distilled water has a high pH that makes it hard for microbes to grow. If you add water-based extras such as aloe, herbal infusions or hydrosols after dilution, a preservative becomes more important. If you plan to sell it, your safety assessor will advise on this as part of the safety report.'
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
          'Safety assessment: each recipe needs a Cosmetic Product Safety Report (CPSR), signed off by a qualified safety assessor. Changing the fragrance or an ingredient usually means a new or updated assessment',
          'Product Information File (PIF): keep the CPSR, product description, manufacturing method and any evidence for claims, for 10 years after the last batch of that product was placed on the market',
          'CPNP notification: notify every product on the EU Cosmetic Products Notification Portal before you sell it. It is free',
          'Good Manufacturing Practice: make your soap in clean, organised conditions and keep batch records. ISO 22716 is the recognised standard',
          'Allergens: Regulation (EU) 2023/1545 extended the list of fragrance allergens that must be named on labels. Products placed on the market from 31 July 2026 must already comply, and products that were on the market before that date can only stay on sale until 31 July 2028 unless they are relabelled'
        ]
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
        heading: 'Your Safety Assessor Needs Your Exact Formula',
        text: 'The safety assessor bases the Cosmetic Product Safety Report on your full quantitative formula: every oil, the lye, water, fragrance and additives, with exact weights or percentages. A recipe you adjust by eye from batch to batch cannot be assessed. Calculate each recipe once, fix it, and give the assessor those numbers. If you later change an oil, a fragrance or the superfat, talk to your assessor before you sell the new version.',
        link: { href: '/lye-calculator/', label: 'Work out your exact formula in the free soap calculator' }
      },
      {
        heading: 'What Must Go on the Label',
        items: [
          'Name and address of the Responsible Person',
          // CHECK BEFORE PUBLISHING: trade-approved scale requirement comes from legal metrology rules (NSAI in Ireland), not the Cosmetics Regulation. Confirm wording.
          'Net weight (weigh on a scale approved for trade use)',
          'Batch number, so each bar can be traced back to its batch record',
          'Ingredient list using INCI names, in descending order of weight (for example Sodium Olivate, Sodium Cocoate, Aqua, Parfum)',
          'Fragrance allergens named individually when they are above the legal threshold. For rinse-off products such as soap that is 0.01% of the finished product',
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
      // CHECK BEFORE PUBLISHING: US MoCRA requirements and small-business exemptions are still being phased in by the FDA. Confirm against current FDA guidance.
      {
        heading: 'Selling in the United States',
        text: 'US rules are different. Soap that is made mostly of fats and lye and is sold only as soap is regulated by the Consumer Product Safety Commission. If you make cosmetic claims such as "moisturising", the FDA treats it as a cosmetic under the Modernization of Cosmetics Regulation Act (MoCRA), which has some exemptions for small businesses.'
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
