# Recipe review sheet

> **Status (Nov 2026):** 13 recipes approved after an AI desk review (ChatGPT, prompted as a soap maker and safety editor) and published with its text fixes. Oatmeal Soap was added later on the same basis (see its note). None of these were test-batched or reviewed by a practising soap maker. Still hidden: Honey Oatmeal Soap (needs a test batch for honey heat), Beeswax Soap and Hot Process Soap (temperatures and cooking need a test batch) and Liquid Soap (needs a full method checked by a liquid-soap maker).

Every recipe below is built into the site but hidden from Google, the sitemap and the menus until it is approved.
To approve one, change `reviewed: false` to `reviewed: true` for that recipe in `src/lib/recipes.ts` (or ask Claude to do it).
Once at least one recipe is approved, the Recipes page and menu link appear automatically.

Check for each recipe: the oil percentages, superfat, cure time and tips. The lye and water amounts are calculated automatically from the SAP values in `src/lib/soap.ts` (SoapCalc values), 2:1 water to lye.

## Easy Beginner Soap  `/soap-recipes/beginner-soap-recipe/`

- [x] Approved  ·  Beginner · NaOH · cold process · 5% superfat · cure 5 weeks

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Olive Oil | 50% | 500 g |
| Coconut Oil (76°) | 30% | 300 g |
| Shea Butter | 15% | 150 g |
| Castor Oil | 5% | 50 g |
| **NaOH** | | **140.6 g** |
| Water | | 281.2 g |

- Tip: Around 35–40°C is a good starting temperature, as long as the oils stay fully melted. Blend in short bursts; fragrance and heat can both speed up trace.
- Tip: Add fragrance at light trace. Use only fragrance made for rinse-off soap and follow the supplier’s soap usage rate and IFRA Category 9 limit; there is no single safe percentage for every fragrance.
- Tip: Unmould after 24–48 hours once the bar is firm.

## Castile Soap (100% Olive Oil)  `/soap-recipes/castile-soap-recipe/`

- [x] Approved  ·  Beginner · NaOH · cold process · 5% superfat · cure 6 months

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Olive Oil | 100% | 1000 g |
| **NaOH** | | **128.3 g** |
| Water | | 256.5 g |

- Tip: Olive-only soap is slow to trace. A stick blender is strongly recommended; stirring by hand can take a very long time.
- Tip: Unmould when it is firm enough to release without damage. This can take several days, so check firmness rather than going by the clock.
- Tip: Cure for at least 6 months. The lather is low and slightly slippery; that is normal for castile.

## Bastille Soap  `/soap-recipes/bastille-soap-recipe/`

- [x] Approved  ·  Beginner · NaOH · cold process · 5% superfat · cure 8 weeks

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Olive Oil | 75% | 750 g |
| Coconut Oil (76°) | 20% | 200 g |
| Castor Oil | 5% | 50 g |
| **NaOH** | | **137 g** |
| Water | | 274.1 g |

- Tip: Trace is still fairly slow, which makes this a good recipe for simple swirls.
- Tip: Cure for at least 8 weeks for the best bar.

## Shea Butter Soap  `/soap-recipes/shea-butter-soap-recipe/`

- [x] Approved  ·  Beginner · NaOH · cold process · 5% superfat · cure 5 weeks

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Olive Oil | 35% | 350 g |
| Coconut Oil (76°) | 25% | 250 g |
| Shea Butter | 25% | 250 g |
| Sweet Almond Oil | 10% | 100 g |
| Castor Oil | 5% | 50 g |
| **NaOH** | | **138 g** |
| Water | | 276.1 g |

- Tip: Melt the shea butter fully and stir well so it does not leave grainy spots.
- Tip: Shea speeds trace slightly, so have your colours and fragrance ready.

## Goat Milk Soap  `/soap-recipes/goat-milk-soap-recipe/`

- [x] Approved  ·  Intermediate · NaOH · cold process · 5% superfat · cure 5 weeks

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Olive Oil | 40% | 400 g |
| Coconut Oil (76°) | 25% | 250 g |
| Shea Butter | 15% | 150 g |
| Sweet Almond Oil | 15% | 150 g |
| Castor Oil | 5% | 50 g |
| **NaOH** | | **138.9 g** |
| Goat milk, frozen into cubes (use the same weight as the water shown) | | 277.8 g |

- Tip: Add the lye to the frozen milk slowly, a spoonful at a time, with the jug sitting in an ice bath. Keep stirring until all the lye has dissolved; milk is opaque, so melted cubes do not prove it. Do not carry on with undissolved granules.
- Tip: Keep the milk and lye mixture cool to stop it scorching, but keep the oils fully melted and fluid; do not let them go cloudy. Do not insulate; put the mould in the fridge or freezer for 24 hours to prevent overheating.
- Tip: A slight ammonia-like smell while mixing is normal and fades during cure. Work with good ventilation and do not lean over the jug.

## Salt Bar Soap  `/soap-recipes/salt-bar-soap-recipe/`

- [x] Approved  ·  Intermediate · NaOH · cold process · 20% superfat · cure 8 weeks

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Coconut Oil (76°) | 80% | 800 g |
| Olive Oil | 15% | 150 g |
| Castor Oil | 5% | 50 g |
| **NaOH** | | **138.4 g** |
| Water | | 276.9 g |

- Additive: Fine sea salt: 50% of oil weight (500 g per 1000 g oils), stirred in at light trace. Up to 100% is a variation that changes handling and lather. Avoid coarse sharp crystals, Dead Sea salt and Epsom salt

- Tip: Individual cavity moulds are easiest. For a loaf, check often and cut as soon as it holds its shape, before it turns brittle; timing varies. Wear gloves and eye protection when handling fresh soap.
- Tip: Cure for at least 8 weeks; salt bars keep improving for months.

## Traditional Lard Soap  `/soap-recipes/lard-soap-recipe/`

- [x] Approved  ·  Beginner · NaOH · cold process · 5% superfat · cure 4 weeks

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Lard | 60% | 600 g |
| Coconut Oil (76°) | 20% | 200 g |
| Olive Oil | 15% | 150 g |
| Castor Oil | 5% | 50 g |
| **NaOH** | | **140.5 g** |
| Water | | 280.9 g |

- Tip: Use rendered, odour-free lard.
- Tip: This recipe traces moderately fast; blend in short bursts.

## Beef Tallow Soap  `/soap-recipes/tallow-soap-recipe/`

- [x] Approved  ·  Beginner · NaOH · cold process · 5% superfat · cure 4 weeks

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Tallow (Beef) | 60% | 600 g |
| Olive Oil | 20% | 200 g |
| Coconut Oil (76°) | 15% | 150 g |
| Castor Oil | 5% | 50 g |
| **NaOH** | | **139.3 g** |
| Water | | 278.6 g |

- Tip: Melt the tallow completely and keep the oils fully fluid before adding the lye. About 40°C usually works, but go by the oils, not the thermometer: cloudy or setting fat can look like false trace.
- Tip: Tallow can trace quickly; keep additives simple for your first batch.

## Vegan Palm-Free Soap  `/soap-recipes/vegan-palm-free-soap-recipe/`

- [x] Approved  ·  Beginner · NaOH · cold process · 5% superfat · cure 5 weeks

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Olive Oil | 40% | 400 g |
| Coconut Oil (76°) | 25% | 250 g |
| Cocoa Butter | 15% | 150 g |
| Shea Butter | 10% | 100 g |
| Avocado Oil | 5% | 50 g |
| Castor Oil | 5% | 50 g |
| **NaOH** | | **139 g** |
| Water | | 278 g |

- Tip: Use deodorised cocoa butter if you do not want a chocolate scent.
- Tip: Cocoa butter speeds trace a little; soap at 35–40°C.

## Avocado Oil Soap  `/soap-recipes/avocado-soap-recipe/`

- [x] Approved  ·  Beginner · NaOH · cold process · 5% superfat · cure 5 weeks

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Olive Oil | 35% | 350 g |
| Avocado Oil | 25% | 250 g |
| Coconut Oil (76°) | 25% | 250 g |
| Shea Butter | 10% | 100 g |
| Castor Oil | 5% | 50 g |
| **NaOH** | | **138.2 g** |
| Water | | 276.4 g |

- Tip: Refined avocado oil gives a paler bar; unrefined is greener.

## Hemp Seed Oil Soap  `/soap-recipes/hemp-seed-soap-recipe/`

- [x] Approved  ·  Beginner · NaOH · cold process · 5% superfat · cure 5 weeks

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Olive Oil | 35% | 350 g |
| Coconut Oil (76°) | 25% | 250 g |
| Shea Butter | 20% | 200 g |
| Hemp Seed Oil | 15% | 150 g |
| Castor Oil | 5% | 50 g |
| **NaOH** | | **138.4 g** |
| Water | | 276.8 g |

- Tip: Store hemp seed oil in the fridge and use it fresh.
- Tip: Keep finished bars out of direct sunlight and humidity during cure.

## Activated Charcoal Soap  `/soap-recipes/charcoal-soap-recipe/`

- [x] Approved  ·  Beginner · NaOH · cold process · 5% superfat · cure 5 weeks

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Olive Oil | 40% | 400 g |
| Coconut Oil (76°) | 25% | 250 g |
| Shea Butter | 15% | 150 g |
| Sweet Almond Oil | 15% | 150 g |
| Castor Oil | 5% | 50 g |
| **NaOH** | | **138.9 g** |
| Water | | 277.8 g |

- Additive: Activated charcoal: about 1 teaspoon per 500 g of oils (teaspoons are approximate), dispersed in a little of the measured recipe oil first

- Tip: Use cosmetic-grade activated charcoal and avoid breathing in the dust. Mix it into a little oil taken from the measured recipe oils (not extra oil), then add it back to the batch.
- Tip: If you sell it, do not claim it treats acne or other conditions, and avoid unsupported “detox” claims. Medical claims can change how the product is regulated.

## Mango Butter Soap  `/soap-recipes/mango-butter-soap-recipe/`

- [x] Approved  ·  Beginner · NaOH · cold process · 5% superfat · cure 5 weeks

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Olive Oil | 40% | 400 g |
| Coconut Oil (76°) | 25% | 250 g |
| Mango Butter | 20% | 200 g |
| Rice Bran Oil | 10% | 100 g |
| Castor Oil | 5% | 50 g |
| **NaOH** | | **138.8 g** |
| Water | | 277.7 g |

- Tip: Mango butter melts easily; do not overheat it.

## Oatmeal Soap  `/soap-recipes/oatmeal-soap-recipe/`

- [x] Approved  ·  Beginner · NaOH · cold process · 5% superfat · cure 6 weeks

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Rice Bran Oil | 30% | 300 g |
| Olive Oil | 30% | 300 g |
| Coconut Oil (76°) | 20% | 200 g |
| Shea Butter | 15% | 150 g |
| Castor Oil | 5% | 50 g |
| **NaOH** | | **134 g** |
| Water | | 268.1 g |

- Additive: Colloidal oatmeal: 10 g per 1000 g oils, mixed into about 20 g of the measured olive oil (not extra oil) and stirred in at light trace

- Tip: Keep the oils and lye solution at about 35–40°C, with the oils still fully melted. Blend in short bursts to light trace, then stir in the oat mixture.
- Tip: Use colloidal or very finely ground, sifted oats. Coarse oats feel scratchy and can go soggy in the bar.
- Tip: Unmould after 24–48 hours once the bar is firm, then cure for at least 6 weeks with good airflow.
- Note: Approved Nov 2026 on the same basis as the other published recipes: LatherForge calculator check (134.0 g NaOH, 268.1 g water per 1000 g oils, arithmetic verified using the supplied SAP values; no independent SAP-source verification) plus AI desk review (drafted by ChatGPT, edited by Claude). Not test-batched. Honey was removed from this version because its overheating behaviour is the part that needs a test batch; the honey version is kept below as a hidden draft.

## Honey Oatmeal Soap  `/soap-recipes/honey-oatmeal-soap-recipe/`

- [ ] Approved  ·  Intermediate · NaOH · cold process · 5% superfat · cure 6 weeks

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Rice Bran Oil | 30% | 300 g |
| Olive Oil | 30% | 300 g |
| Coconut Oil (76°) | 20% | 200 g |
| Shea Butter | 15% | 150 g |
| Castor Oil | 5% | 50 g |
| **NaOH** | | **134 g** |
| Water | | 268.1 g |

- Additive: Colloidal oatmeal: 10 g per 1000 g oils, mixed into about 20 g of the measured olive oil (not extra oil) and stirred in at light trace
- Additive: Plain honey: 10 g per 1000 g oils, dissolved in 10 g of the measured water (not extra water) once it is cool, and stirred in at light trace. Never add honey to the hot lye solution

- Tip: Keep the oils and lye solution at about 35–38°C, with the oils still fully melted. Blend in short bursts to light trace, then stir in the oats and diluted honey.
- Tip: Honey makes soap heat up. Use individual cavity moulds, do not insulate, and put the mould in the fridge for the first 24 hours. This lowers the risk of cracking and dark spots but does not remove it.
- Tip: Let the soap come back to room temperature and unmould when it is firm; this can take 48–72 hours. Cure for at least 6 weeks with good airflow.
- Note: Drafted by ChatGPT from the LatherForge recipe prompt (Nov 2026); lye recalculated with the site calculator. Not test-batched. Publish only after a 500 g test batch passes the 2–4 h, 24 h and 48 h heat, surface and unmoulding checks.

## Beeswax Soap  `/soap-recipes/beeswax-soap-recipe/`

- [ ] Approved  ·  Intermediate · NaOH · cold process · 5% superfat · cure 6 weeks

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Olive Oil | 45% | 450 g |
| Coconut Oil (76°) | 25% | 250 g |
| Shea Butter | 22% | 220 g |
| Castor Oil | 5% | 50 g |
| Beeswax | 3% | 30 g |
| **NaOH** | | **135.9 g** |
| Water | | 271.8 g |

- Tip: Beeswax melts at around 63°C. Soap warmer than usual (about 65–70°C) so it does not solidify when the lye goes in.
- Tip: Pour as soon as you reach light trace; this batter thickens fast.

## Hot Process Soap  `/soap-recipes/hot-process-soap-recipe/`

- [ ] Approved  ·  Intermediate · NaOH · hot process · 5% superfat · cure 2 weeks

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Olive Oil | 45% | 450 g |
| Coconut Oil (76°) | 30% | 300 g |
| Shea Butter | 20% | 200 g |
| Castor Oil | 5% | 50 g |
| **NaOH** | | **140.3 g** |
| Water | | 280.5 g |

- Tip: Cook on low in a slow cooker until the soap looks like translucent mashed potato, usually 45–90 minutes.
- Tip: Add fragrance after cooking, when the soap has cooled slightly, so less of it evaporates.
- Tip: The bars are usable after about a week, but a 2–4 week cure gives a harder, longer-lasting bar.

## Liquid Soap  `/soap-recipes/liquid-soap-recipe/`

- [ ] Approved  ·  Intermediate · KOH · hot process · 3% superfat · cure No cure needed

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Coconut Oil (76°) | 40% | 400 g |
| Olive Oil | 40% | 400 g |
| Castor Oil | 20% | 200 g |
| **KOH (90%)** | | **231.5 g** |
| Water | | 463 g |

- Tip: The lye amounts assume 90% pure KOH, the standard grade.
- Tip: Many makers use more water than shown (up to 3 parts water to 1 part KOH) for an easier-to-stir paste.
- Tip: Dilute the finished paste with roughly 1.5–2.5 times its weight in hot distilled water, adding it gradually.

