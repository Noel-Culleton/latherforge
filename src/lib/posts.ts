export interface Post {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  sections: Array<{ heading?: string; text?: string; items?: string[]; link?: { href: string; label: string } }>
  download?: { title: string; text: string }
}

export const posts: Post[] = [
  {
    slug: 'how-to-start-a-soap-business',
    title: 'How to Start a Soap Business: A Step-by-Step Guide (Ireland, UK, EU and US)',
    description: 'How to turn soap making into a real business: skills, legal requirements, registration, insurance, pricing, where to sell and the records you need from day one.',
    date: '2026-09-29',
    readTime: '9 min read',
    category: 'Soap Business',
    download: {
      title: 'Free Soap Business Startup Checklist',
      text: 'Every step in this guide as a printable checklist, plus a pricing worksheet with a worked example. Tick off each step as you go.'
    },
    sections: [
      {
        text: 'Plenty of people make lovely soap. Far fewer turn it into a business that makes money and stays on the right side of the law. This guide walks through the steps in the order you should do them. It is a practical overview, not legal or tax advice, so check the current rules with your regulator and tax office before you start selling.'
      },
      {
        heading: 'Step 1: Get Consistent Before You Sell',
        text: 'Customers come back for a bar that is the same every time. Before you think about selling, make the same recipes repeatedly until the results are predictable: the same trace, the same colour, the same hardness after cure. Most soap makers spend months at this stage, and it is time well spent.',
        items: [
          'Settle on 3 to 5 core recipes rather than dozens',
          'Use a soap calculator for every batch and never guess lye amounts',
          'Let bars cure fully (usually 4 to 6 weeks for cold process) and use them yourself',
          'Give bars to friends and family and ask for honest feedback on lather, hardness and scent',
          'Write down every batch, including what went wrong'
        ],
        link: { href: '/lye-calculator/', label: 'Use the free soap calculator' }
      },
      {
        heading: 'Step 2: Decide What You Sell and Who It Is For',
        text: '"Handmade soap" is a crowded category. A clear angle makes you easier to find and easier to remember. Pick something you can explain in one sentence.',
        items: [
          'Unscented or gentle bars for sensitive skin',
          'Goat milk, tallow or other traditional recipes',
          'Local ingredients, such as honey, oats or seaweed from your area',
          'Gift sets for weddings, corporate gifts or the Christmas market',
          'Vegan and palm-free bars'
        ]
      },
      {
        heading: 'Step 3: Make It Legal',
        text: 'This is the step most new soap businesses skip, and the one that can get them into trouble. In Ireland, the UK and the EU, soap for washing skin is a cosmetic product, so cosmetics law applies from your very first sale, including craft fairs and Etsy.',
        items: [
          'Ireland and the EU: every recipe needs a Cosmetic Product Safety Report (CPSR) from a qualified safety assessor, a Product Information File, and a free notification on the EU Cosmetic Products Notification Portal (CPNP) before you sell. The regulator in Ireland is the HPRA',
          'Great Britain: similar rules, with a UK Responsible Person and notification through the UK Submit Cosmetic Product Notification (SCPN) service',
          'Labels: Responsible Person name and address, net weight, batch number, ingredients using INCI names, fragrance allergens above the threshold, and a best-before date or period-after-opening symbol',
          'United States: soap made mostly of fats and lye and sold only as soap is regulated by the Consumer Product Safety Commission. Cosmetic claims such as "moisturising" bring it under the FDA',
          'Never make medical claims such as "treats eczema". That turns your soap into a medicine in the eyes of the law'
        ],
        link: { href: '/blog/selling-handmade-soap-legal-requirements/', label: 'Read the full legal checklist for Ireland, UK and EU' }
      },
      {
        heading: 'Step 4: Register the Business and Get Insured',
        items: [
          'Ireland: register with Revenue for income tax as a self-employed sole trader once you are trading. If you trade under a name other than your own, register the business name with the Companies Registration Office (CRO). Check Revenue\'s current VAT registration threshold for goods',
          'UK: register with HMRC for Self Assessment once you are trading',
          'US: check your state and local rules for business registration and sales tax',
          'Everywhere: get product liability and public liability insurance before your first sale. Many craft fairs will not let you trade without it',
          'Open a separate bank account for the business so your records stay clean'
        ]
      },
      {
        heading: 'Step 5: Work Out Your Costs and Prices',
        text: 'Underpricing is the most common reason soap businesses fail. Your price has to cover ingredients, packaging, labels, selling fees, a share of your overheads (insurance, safety assessments, equipment) and your own time, with profit on top. Work this out before you print a single price tag.',
        link: { href: '/blog/how-to-price-handmade-soap/', label: 'How to price handmade soap, with a worked example' }
      },
      {
        heading: 'Step 6: Choose Where to Sell',
        items: [
          'Craft fairs and markets: the best place to start. You get instant feedback and build local customers',
          'Etsy: a large audience of buyers looking for handmade products, but plenty of competition and fees on every sale',
          'Your own website: no marketplace fees and you own the customer relationship, but you have to bring the traffic yourself',
          'Local shops and cafés (wholesale): steady orders, but wholesale prices are usually around half of retail, so your costs must be low enough to still make a profit'
        ],
        link: { href: '/blog/etsy-soap-shop-tips/', label: '10 tips for selling soap on Etsy' }
      },
      {
        heading: 'Step 7: Keep Records From Day One',
        text: 'Good records are a legal requirement for cosmetics and they make every other part of the business easier. If a customer reports a reaction, you need to know exactly what went into that bar.',
        items: [
          'Batch records: date, recipe, weights, and the supplier and lot number of every ingredient',
          'A batch number on every label that links back to its batch record',
          'Stock of ingredients and finished bars',
          'Sales and expenses, for your tax return',
          'Customer complaints or reactions, and what you did about them'
        ]
      },
      {
        heading: 'How LatherForge Helps',
        text: 'LatherForge is a business platform for soap makers that keeps your recipes, batch records, costs and labels in one place, so the paperwork above does not live in notebooks and spreadsheets. It launches in January 2027. In the meantime, the free soap calculator app works on your phone, including offline.',
        link: { href: '/early-access/', label: 'Register for early access' }
      }
    ]
  },
  {
    slug: 'how-to-price-handmade-soap',
    title: 'How to Price Handmade Soap (With a Worked Example)',
    description: 'A simple method for pricing handmade soap that covers ingredients, packaging, fees, overheads and your time, with a full worked example and what it means for retail and wholesale prices.',
    date: '2026-09-29',
    readTime: '8 min read',
    category: 'Soap Business',
    download: {
      title: 'Free Soap Pricing Worksheet',
      text: 'A printable worksheet that walks you through this exact method for your own recipe, plus a startup checklist for your soap business.'
    },
    sections: [
      {
        text: 'Most new soap makers price by looking at what everyone else charges. The problem is that other sellers may be underpricing too, and you have no idea what their costs are. The only safe way to price is to start from your own costs, then check the result against the market.'
      },
      {
        heading: 'The Formula',
        text: 'Price your soap in this order. Every step is per bar.',
        items: [
          '1. Ingredients: oils, butters, lye, fragrance, colour and additives',
          '2. Packaging: wrap or box, label, and any sticker or band',
          '3. Overheads: a share of insurance, safety assessments, equipment, moulds and market stall fees',
          '4. Labour: your time, paid at a real hourly rate',
          'Total cost per bar = 1 + 2 + 3 + 4',
          'Then add profit and selling fees to get your price'
        ]
      },
      {
        heading: 'Step 1: Ingredient Cost Per Bar',
        text: 'Work out the cost of the whole batch, then divide by the number of bars. Use what you actually paid per kilo, including delivery. As an example, here is a simple beginner recipe with 1 kg of oils (50% olive, 30% coconut, 15% shea butter, 5% castor) using example prices. Your prices will differ.',
        items: [
          'Olive oil 500 g at €9/kg = €4.50',
          'Coconut oil 300 g at €6/kg = €1.80',
          'Shea butter 150 g at €14/kg = €2.10',
          'Castor oil 50 g at €9/kg = €0.45',
          'Sodium hydroxide 141 g at €6/kg = €0.85',
          'Fragrance oil 30 g at €45/kg = €1.35',
          'Batch total: about €11.05. The batch makes around 11 bars of 115 g, so ingredients cost about €1.00 per bar'
        ]
      },
      {
        heading: 'Step 2: Packaging',
        text: 'Add up everything that goes on or around one bar: the wrap or box, the printed label and anything else. For our example, say €0.45 per bar. Buying labels and boxes in larger quantities is one of the easiest ways to bring this down.'
      },
      {
        heading: 'Step 3: Overheads',
        text: 'Overheads are the costs you pay whether you sell 10 bars or 1,000: insurance, safety assessments for each recipe, equipment, moulds, website fees. Add up a year of these and divide by the number of bars you expect to sell in a year. For example, €360 of yearly overheads spread over 1,200 bars is €0.30 per bar. If you sell fewer bars, each bar carries more of the overhead.'
      },
      {
        heading: 'Step 4: Pay Yourself',
        text: 'This is the step people skip, and it is why so many soap businesses feel busy but never make money. Count all the time a batch takes: weighing, mixing, cleaning up, cutting, wrapping, labelling and the admin. Then pay yourself a fair hourly rate, at least minimum wage.',
        items: [
          'Small batch: 1 kg of oils (11 bars) takes about 2.5 hours start to finish. At €15 an hour that is €37.50, or €3.41 per bar',
          'Bigger batch: 3 kg of oils (33 bars) takes about 4 hours. At €15 an hour that is €60, or €1.82 per bar',
          'Batch size matters more than almost anything else. Making the same soap in bigger batches cuts your labour cost per bar in half'
        ]
      },
      {
        heading: 'The Worked Example: Total Cost Per Bar',
        items: [
          'Small batch (1 kg oils): €1.00 ingredients + €0.45 packaging + €0.30 overheads + €3.41 labour = €5.16 per bar',
          'Bigger batch (3 kg oils): €1.00 ingredients + €0.45 packaging + €0.30 overheads + €1.82 labour = €3.57 per bar',
          'Remember that this already includes paying yourself. Everything above this number is profit for the business'
        ]
      },
      {
        heading: 'From Cost to Price',
        text: 'Now look at where you sell. Suppose handmade bars in your area sell for €7 to €9, and you price yours at €8.',
        items: [
          'At a craft fair: €8 minus €3.57 cost leaves about €4.40 profit per bar (before the stall fee, if you have not included it in overheads)',
          'On Etsy: marketplace and payment fees take roughly €1 of an €8 sale, leaving about €3.40 profit per bar. Check Etsy\'s current fees for your country',
          'Wholesale to a shop: shops usually pay around half of retail, so about €4. That leaves only €0.43 profit per bar at €3.57 cost, and a loss at the small-batch cost of €5.16',
          'If you are VAT registered, remember the price the customer pays includes VAT, so your share is smaller'
        ]
      },
      {
        heading: 'What the Numbers Tell You',
        items: [
          'If your cost per bar is close to the market price, do not just cut your price. Make bigger batches, buy ingredients in bulk, or simplify packaging',
          'Wholesale only works once your costs are low. Get your batch sizes up before you approach shops',
          'Gift sets and bundles raise the value of each sale without adding much work',
          'Recalculate whenever an ingredient price changes. Oil prices move, and a recipe that was profitable last year may not be now'
        ]
      },
      {
        heading: 'Let the App Do the Maths',
        text: 'Doing this by hand for every recipe gets tedious. The free LatherForge app calculates cost per bar from your recipe, and the full LatherForge platform, launching in January 2027, tracks ingredient prices, batch costs and margins automatically.',
        link: { href: '/app/', label: 'Open the free soap calculator app' }
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
