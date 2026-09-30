export interface Post {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  youtubeId?: string
  sections: Array<{ heading?: string; text?: string; items?: string[]; link?: { href: string; label: string } }>
}

export const posts: Post[] = [
  {
    slug: 'cold-process-soap-problems',
    title: 'Every Cold Process Soap Problem (And How to Fix It)',
    description: 'Soda ash, seized batter, soft soap, cracks, glycerin rivers, sweating, DOS and scent fade: what causes each cold process soap problem, whether the soap is still usable, and how to prevent it.',
    date: '2026-10-01',
    readTime: '12 min read',
    category: 'Soap Problems Fixed',
    sections: [
      {
        text: 'Most soap problems look far worse than they are. Some are purely cosmetic and the bars are fine to use and sell. A few mean the soap is unsafe. This guide covers ten of the most common cold process soap problems: what each looks like, why it happens, whether the soap is still usable, and how to stop it happening again.'
      },
      {
        heading: '1. Soda Ash',
        text: 'Soda ash is a white, powdery or crystal-like film on the top of your bars, usually a day or two after pouring. It forms when lye near the surface meets carbon dioxide in the air before it has fully reacted with the oils. It is cosmetic, not dangerous, and does not mean your soap is lye heavy. To remove it, hold the bar in steam for a few seconds, rinse it under warm water, or plane off a thin layer.',
        items: [
          'Spritz the top with 99% isopropyl alcohol straight after pouring',
          'Cover the mold with cling film pressed onto the surface, or a lid',
          'Use a water discount so the soap sets up faster',
          'Pour at a slightly thicker trace'
        ]
      },
      {
        heading: '2. Seized Soap',
        text: 'Seizing is when the batter goes from custard to lumpy mashed potato within seconds, usually straight after adding fragrance. Some fragrance oils, especially floral, spice and some vanilla-type scents, speed up the reaction dramatically, and working too hot makes it worse. Put the stick blender down, stir by hand with a spatula, glop the batter into the mold and tap it on the bench to knock out air pockets. The top will be rustic, but the soap is usually fine once cured.',
        items: [
          'Read the supplier notes on every fragrance: many say whether it accelerates trace',
          'Test new fragrances in a small batch first',
          'Add fragrance at thin trace and stir it in by hand',
          'Soap a little cooler'
        ]
      },
      {
        heading: '3. Soap Still Soft After Two Days',
        text: 'Soft soap after two days is normal for many recipes. Recipes high in olive oil or other soft oils can take a week or more to firm up, and pure castile is famously slow. Too much water, a high superfat, a cold room or skipping gel phase all slow things down too. Give it another three to five days somewhere warm. If the soap is soft and also greasy, has pockets of liquid oil or is separating, that points to a measuring problem, usually too little lye or lye that absorbed moisture from the air. Put your exact recipe back through a lye calculator and check your weights.',
        link: { href: '/lye-calculator/', label: 'Check your recipe in the free soap calculator' }
      },
      {
        heading: '4. Cracked Tops and Overheating',
        text: 'A crack down the middle of the loaf, sometimes with a domed top or liquid coming up through it, is overheating. Honey, milks, sugars, beer and some fragrances add heat, and a warm room plus heavy insulation can push the soap too far. A cosmetic crack is usually fine: cure the bars and trim the top. If liquid came up through the crack, wear gloves and wait a day, since it is often reabsorbed. If wet pockets remain after a couple of days, treat the batch as suspect and do not sell it. To prevent it, soap cooler, skip insulation for milk, honey or sugar recipes, and put those molds in the fridge or freezer for the first day.'
      },
      {
        heading: '5. Glycerin Rivers',
        text: 'Glycerin rivers are translucent, vein-like streaks through coloured soap, often most visible where titanium dioxide was used. They are cosmetic and the soap is completely safe. They are linked to excess heat, partial gel and higher water amounts. Use a water discount, disperse titanium dioxide in oil rather than water, and either keep the soap consistently cool or insulate it fully so it gels evenly.'
      },
      {
        heading: '6. Crumbly or Brittle Soap',
        text: 'Crumbly soap has two very different causes. The harmless one is cutting too late: recipes high in coconut oil, palm or stearic acid harden fast and chip if left for days, so cut within about 24 hours next time. The serious one is lye-heavy soap, with white chalky lumps inside the bar and a harsh or burning feel on skin. That comes from a measuring mistake, a wrong calculator setting, or false trace from butters that were not fully melted. If you suspect lye-heavy soap, do not use or sell it, and re-check the recipe first.'
      },
      {
        heading: '7. Sweating Soap',
        text: 'Tiny beads of liquid on your bars are glycerin pulling moisture out of humid air. It is harmless and very common in damp climates like Ireland and the UK. Wipe the bars dry, improve airflow with a fan or dehumidifier, and do not wrap bars in plastic while they are still curing. Once fully cured, wrap them in something breathable or shrink wrap them for sale, and store them away from bathrooms and kitchens.'
      },
      {
        heading: '8. DOS (Dreaded Orange Spots)',
        text: 'Small orange or brown spots, often weeks or months later and sometimes with an old, crayon-like smell, are rancidity: the free oils in the bar are oxidising. You cannot reverse it. A couple of small spots can be cut out for personal use, but if the spots are widespread or the bar smells off, do not sell it.',
        items: [
          'Use fresh oils and note the purchase date on every container',
          'Keep fast-oxidising oils like sunflower, grapeseed and hemp to a small share of the recipe',
          'Stick to a sensible superfat',
          'Use distilled water',
          'Add an antioxidant such as rosemary oleoresin extract to your oils',
          'Cure and store in a cool, dry, dark place'
        ]
      },
      {
        heading: '9. Scent Fading',
        text: 'Some scent fade is normal, and citrus essential oils fade fastest. Heat from gel phase can also drive off lighter notes. Blend light top notes with heavier base notes, consider concentrated (folded) citrus oils, try anchoring fragrance with a little clay, and store cured bars wrapped in a cool, dark place. Never fix fading by simply adding more: every essential oil and fragrance oil has a maximum safe usage rate for soap. Check your supplier\'s IFRA documentation and stay within it.'
      },
      {
        heading: '10. Is My Soap Safe?',
        text: 'Everything above is mostly cosmetic. What actually makes soap unsafe is excess lye. Watch for these warning signs:',
        items: [
          'Pockets of clear liquid that do not reabsorb after a day or two (handle with gloves)',
          'White, hard, chalky lumps inside the bar, not just on the surface',
          'Soap that stings, burns or leaves skin red',
          'A bar that is crumbly and harsh right through, not just at the cut edges'
        ]
      },
      {
        text: 'The first step is always the same: go back to your recipe. Put the exact oils and weights through a lye calculator, compare the lye amount to what you actually weighed, check the calculator was set to sodium hydroxide (NaOH) for bar soap rather than potassium hydroxide (KOH), and check your scale. If the numbers show too much lye, or you cannot confirm what went wrong, do not use or sell the batch.'
      },
      {
        heading: 'Five Habits That Prevent Most Problems',
        items: [
          'Run every recipe through a lye calculator, every time',
          'Weigh everything in grams on a digital scale, never by volume',
          'Keep lye sealed and oils fresh',
          'Test every new fragrance in a small batch first',
          'Keep a record of every batch: recipe, temperatures, water amount, fragrance and results'
        ]
      },
      {
        text: 'If you sell soap in the UK or EU you need batch records anyway, and they turn every mistake into a lesson instead of a mystery. This guide is general information, not legal or safety advice for your specific products.',
        link: { href: '/lye-calculator/', label: 'Open the free soap calculator (no signup)' }
      }
    ]
  },
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
          'Product Information File (PIF): keep the CPSR, product description, manufacturing method and any evidence for claims, for 10 years after the last batch is sold',
          'CPNP notification: notify every product on the EU Cosmetic Products Notification Portal before you sell it. It is free',
          'Good Manufacturing Practice: make your soap in clean, organised conditions and keep batch records. ISO 22716 is the recognised standard',
          'Allergens: the EU has extended its list of fragrance allergens that must be named on labels. New products must comply from 31 July 2026, and all products on sale from 31 July 2028'
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
        text: 'US rules are different. Soap that is made mostly of fats and lye and is sold only as soap is regulated by the Consumer Product Safety Commission. If you make cosmetic claims such as "moisturising", the FDA treats it as a cosmetic under the Modernization of Cosmetics Regulation Act (MoCRA), which has some exemptions for small businesses.'
      },
      {
        heading: 'How LatherForge Helps',
        text: 'Most of this comes down to good records: exact recipes, batch numbers, ingredient lot numbers and correct labels. LatherForge is being built to keep those records for you and generate labels from your recipes. It launches in January 2027.',
        link: { href: '/early-access/', label: 'Register for early access' }
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
