# Recipe review sheet

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

- Tip: Soap at around 35–40°C to keep trace slow.
- Tip: Add fragrance at light trace, no more than 3% of oil weight for most skin-safe fragrance oils.
- Tip: Unmould after 24–48 hours once the bar is firm.

## Castile Soap (100% Olive Oil)  `/soap-recipes/castile-soap-recipe/`

- [x] Approved  ·  Beginner · NaOH · cold process · 5% superfat · cure 6 months

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Olive Oil | 100% | 1000 g |
| **NaOH** | | **128.3 g** |
| Water | | 256.5 g |

- Tip: Expect a long time to trace. A stick blender is essential.
- Tip: Leave it in the mould for 3–5 days; it stays soft for longer than most recipes.
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

- Tip: Add the lye to the frozen milk slowly, a spoonful at a time, with the jug sitting in an ice bath.
- Tip: Soap cool (around 30°C) and do not insulate; put the mould in the fridge or freezer for 24 hours to prevent overheating.
- Tip: A slight ammonia smell while mixing is normal and fades during cure.

## Salt Bar Soap  `/soap-recipes/salt-bar-soap-recipe/`

- [x] Approved  ·  Intermediate · NaOH · cold process · 20% superfat · cure 8 weeks

| Ingredient | % | per 1000 g oils |
|---|---|---|
| Coconut Oil (76°) | 80% | 800 g |
| Olive Oil | 15% | 150 g |
| Castor Oil | 5% | 50 g |
| **NaOH** | | **138.4 g** |
| Water | | 276.9 g |

- Additive: Fine sea salt: 50–100% of oil weight (not Dead Sea or Epsom salt), stirred in at light trace

- Tip: Use individual cavity moulds, or cut a loaf within 1–3 hours. Salt bars get rock hard fast and crumble if cut late.
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

- Tip: Melt the tallow completely and let it cool to about 40°C before mixing.
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

- Additive: Activated charcoal: about 1 teaspoon per 500 g of oils, dispersed in a little of the recipe oil first

- Tip: Mix the charcoal into a tablespoon of oil before adding it, to avoid clumps.
- Tip: If you sell it, avoid medical claims such as "treats acne" or "detox". Those make it a medicine, not a cosmetic.

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

## Beeswax Soap  `/soap-recipes/beeswax-soap-recipe/`

- [x] Approved  ·  Intermediate · NaOH · cold process · 5% superfat · cure 6 weeks

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

- [x] Approved  ·  Intermediate · NaOH · hot process · 5% superfat · cure 2 weeks

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

- [x] Approved  ·  Intermediate · KOH · hot process · 3% superfat · cure No cure needed

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

