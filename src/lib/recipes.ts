import { OILS, calculateLye, type LyeType, type Method, type OilEntry } from './soap'

export interface SoapRecipe {
  slug: string
  name: string
  description: string
  // Set to true only after a soap maker has checked the recipe. Unreviewed
  // recipes are built but kept out of search, the sitemap and site navigation.
  reviewed: boolean
  skill: 'Beginner' | 'Intermediate'
  lyeType: LyeType
  method: Method
  superfat: number
  cureWeeks: number
  oils: { oil: string; pct: number }[]
  liquid?: string
  additives?: string[]
  why: string
  tips: string[]
}

export const recipes: SoapRecipe[] = [
  {
    slug: 'beginner-soap-recipe',
    name: 'Easy Beginner Soap',
    description: 'A forgiving, palm-free cold process soap recipe for your first batch: olive oil, coconut oil, shea butter and castor oil.',
    reviewed: false, skill: 'Beginner', lyeType: 'NaOH', method: 'cold', superfat: 5, cureWeeks: 5,
    oils: [{ oil: 'Olive Oil', pct: 50 }, { oil: 'Coconut Oil (76°)', pct: 30 }, { oil: 'Shea Butter', pct: 15 }, { oil: 'Castor Oil', pct: 5 }],
    why: 'Four easy-to-find ingredients, a slow trace that gives you time to pour, and a hard, mild bar with good lather. It is the recipe most new soap makers should start with.',
    tips: ['Soap at around 35–40°C to keep trace slow.', 'Add fragrance at light trace, no more than 3% of oil weight for most skin-safe fragrance oils.', 'Unmould after 24–48 hours once the bar is firm.']
  },
  {
    slug: 'castile-soap-recipe',
    name: 'Castile Soap (100% Olive Oil)',
    description: 'Traditional castile soap made from 100% olive oil. A very gentle bar that needs a long cure.',
    reviewed: false, skill: 'Beginner', lyeType: 'NaOH', method: 'cold', superfat: 5, cureWeeks: 26,
    oils: [{ oil: 'Olive Oil', pct: 100 }],
    why: 'Pure olive oil soap is one of the mildest bars you can make. It is slow to trace and soft at first, but after a long cure it becomes a very hard, long-lasting bar.',
    tips: ['Expect a long time to trace. A stick blender is essential.', 'Leave it in the mould for 3–5 days; it stays soft for longer than most recipes.', 'Cure for at least 6 months. The lather is low and slightly slippery; that is normal for castile.']
  },
  {
    slug: 'bastille-soap-recipe',
    name: 'Bastille Soap',
    description: 'A high olive oil bastille soap with a little coconut and castor for better lather and a shorter cure than castile.',
    reviewed: false, skill: 'Beginner', lyeType: 'NaOH', method: 'cold', superfat: 5, cureWeeks: 8,
    oils: [{ oil: 'Olive Oil', pct: 75 }, { oil: 'Coconut Oil (76°)', pct: 20 }, { oil: 'Castor Oil', pct: 5 }],
    why: 'Bastille keeps most of castile\'s mildness but lathers better and hardens faster thanks to the coconut oil.',
    tips: ['Trace is still fairly slow, which makes this a good recipe for simple swirls.', 'Cure for at least 8 weeks for the best bar.']
  },
  {
    slug: 'shea-butter-soap-recipe',
    name: 'Shea Butter Soap',
    description: 'A creamy, conditioning cold process shea butter soap recipe with olive, coconut, sweet almond and castor oil.',
    reviewed: false, skill: 'Beginner', lyeType: 'NaOH', method: 'cold', superfat: 5, cureWeeks: 5,
    oils: [{ oil: 'Olive Oil', pct: 35 }, { oil: 'Coconut Oil (76°)', pct: 25 }, { oil: 'Shea Butter', pct: 25 }, { oil: 'Sweet Almond Oil', pct: 10 }, { oil: 'Castor Oil', pct: 5 }],
    why: 'A generous amount of shea butter gives a hard bar with a creamy, conditioning feel. Sweet almond oil adds a silky touch.',
    tips: ['Melt the shea butter fully and stir well so it does not leave grainy spots.', 'Shea speeds trace slightly, so have your colours and fragrance ready.']
  },
  {
    slug: 'goat-milk-soap-recipe',
    name: 'Goat Milk Soap',
    description: 'Cold process goat milk soap recipe using frozen goat milk in place of water, with shea butter and sweet almond oil.',
    reviewed: false, skill: 'Intermediate', lyeType: 'NaOH', method: 'cold', superfat: 5, cureWeeks: 5,
    oils: [{ oil: 'Olive Oil', pct: 40 }, { oil: 'Coconut Oil (76°)', pct: 25 }, { oil: 'Shea Butter', pct: 15 }, { oil: 'Sweet Almond Oil', pct: 15 }, { oil: 'Castor Oil', pct: 5 }],
    liquid: 'Goat milk, frozen into cubes (use the same weight as the water shown)',
    why: 'Goat milk gives a creamy lather and a soft, pale bar. Freezing the milk stops the lye from scorching the sugars, which would turn the soap orange and smell of ammonia.',
    tips: ['Add the lye to the frozen milk slowly, a spoonful at a time, with the jug sitting in an ice bath.', 'Soap cool (around 30°C) and do not insulate; put the mould in the fridge or freezer for 24 hours to prevent overheating.', 'A slight ammonia smell while mixing is normal and fades during cure.']
  },
  {
    slug: 'salt-bar-soap-recipe',
    name: 'Salt Bar Soap',
    description: 'A high coconut oil salt bar soap recipe with a 20% superfat and fine sea salt. Hard, long-lasting and bubbly.',
    reviewed: false, skill: 'Intermediate', lyeType: 'NaOH', method: 'cold', superfat: 20, cureWeeks: 8,
    oils: [{ oil: 'Coconut Oil (76°)', pct: 80 }, { oil: 'Olive Oil', pct: 15 }, { oil: 'Castor Oil', pct: 5 }],
    additives: ['Fine sea salt: 50–100% of oil weight (not Dead Sea or Epsom salt), stirred in at light trace'],
    why: 'Salt normally kills lather, so salt bars use lots of coconut oil to stay bubbly. The high 20% superfat keeps all that coconut oil from being drying.',
    tips: ['Use individual cavity moulds, or cut a loaf within 1–3 hours. Salt bars get rock hard fast and crumble if cut late.', 'Cure for at least 8 weeks; salt bars keep improving for months.']
  },
  {
    slug: 'lard-soap-recipe',
    name: 'Traditional Lard Soap',
    description: 'An old-fashioned lard soap recipe with coconut, olive and castor oil. Hard, white, mild and inexpensive.',
    reviewed: false, skill: 'Beginner', lyeType: 'NaOH', method: 'cold', superfat: 5, cureWeeks: 4,
    oils: [{ oil: 'Lard', pct: 60 }, { oil: 'Coconut Oil (76°)', pct: 20 }, { oil: 'Olive Oil', pct: 15 }, { oil: 'Castor Oil', pct: 5 }],
    why: 'Lard makes a hard, white, very mild bar with a creamy lather, and it is one of the cheapest soap-making fats.',
    tips: ['Use rendered, odour-free lard.', 'This recipe traces moderately fast; blend in short bursts.']
  },
  {
    slug: 'tallow-soap-recipe',
    name: 'Beef Tallow Soap',
    description: 'A classic beef tallow soap recipe for a hard, long-lasting, mild bar with a creamy lather.',
    reviewed: false, skill: 'Beginner', lyeType: 'NaOH', method: 'cold', superfat: 5, cureWeeks: 4,
    oils: [{ oil: 'Tallow (Beef)', pct: 60 }, { oil: 'Olive Oil', pct: 20 }, { oil: 'Coconut Oil (76°)', pct: 15 }, { oil: 'Castor Oil', pct: 5 }],
    why: 'Tallow makes one of the hardest, longest-lasting bars. It is a popular choice for makers who want a traditional, palm-free soap.',
    tips: ['Melt the tallow completely and let it cool to about 40°C before mixing.', 'Tallow can trace quickly; keep additives simple for your first batch.']
  },
  {
    slug: 'vegan-palm-free-soap-recipe',
    name: 'Vegan Palm-Free Soap',
    description: 'A vegan, palm-free cold process soap recipe using cocoa butter and shea butter for hardness.',
    reviewed: false, skill: 'Beginner', lyeType: 'NaOH', method: 'cold', superfat: 5, cureWeeks: 5,
    oils: [{ oil: 'Olive Oil', pct: 40 }, { oil: 'Coconut Oil (76°)', pct: 25 }, { oil: 'Cocoa Butter', pct: 15 }, { oil: 'Shea Butter', pct: 10 }, { oil: 'Avocado Oil', pct: 5 }, { oil: 'Castor Oil', pct: 5 }],
    why: 'Cocoa and shea butter replace palm oil for hardness, so you get a firm vegan bar without palm or animal fats.',
    tips: ['Use deodorised cocoa butter if you do not want a chocolate scent.', 'Cocoa butter speeds trace a little; soap at 35–40°C.']
  },
  {
    slug: 'avocado-soap-recipe',
    name: 'Avocado Oil Soap',
    description: 'A rich avocado oil soap recipe with olive, coconut, shea butter and castor oil.',
    reviewed: false, skill: 'Beginner', lyeType: 'NaOH', method: 'cold', superfat: 5, cureWeeks: 5,
    oils: [{ oil: 'Olive Oil', pct: 35 }, { oil: 'Avocado Oil', pct: 25 }, { oil: 'Coconut Oil (76°)', pct: 25 }, { oil: 'Shea Butter', pct: 10 }, { oil: 'Castor Oil', pct: 5 }],
    why: 'Avocado oil adds a rich, conditioning feel. It behaves much like olive oil, so the recipe is easy to work with.',
    tips: ['Refined avocado oil gives a paler bar; unrefined is greener.']
  },
  {
    slug: 'hemp-seed-soap-recipe',
    name: 'Hemp Seed Oil Soap',
    description: 'A hemp seed oil soap recipe with olive, coconut, shea butter and castor oil.',
    reviewed: false, skill: 'Beginner', lyeType: 'NaOH', method: 'cold', superfat: 5, cureWeeks: 5,
    oils: [{ oil: 'Olive Oil', pct: 35 }, { oil: 'Coconut Oil (76°)', pct: 25 }, { oil: 'Shea Butter', pct: 20 }, { oil: 'Hemp Seed Oil', pct: 15 }, { oil: 'Castor Oil', pct: 5 }],
    why: 'Hemp seed oil gives a silky, conditioning bar. It is kept at 15% because oils this high in linoleic acid can go rancid (orange spots) if used heavily.',
    tips: ['Store hemp seed oil in the fridge and use it fresh.', 'Keep finished bars out of direct sunlight and humidity during cure.']
  },
  {
    slug: 'charcoal-soap-recipe',
    name: 'Activated Charcoal Soap',
    description: 'A striking black activated charcoal soap recipe with olive, coconut, shea and sweet almond oil.',
    reviewed: false, skill: 'Beginner', lyeType: 'NaOH', method: 'cold', superfat: 5, cureWeeks: 5,
    oils: [{ oil: 'Olive Oil', pct: 40 }, { oil: 'Coconut Oil (76°)', pct: 25 }, { oil: 'Shea Butter', pct: 15 }, { oil: 'Sweet Almond Oil', pct: 15 }, { oil: 'Castor Oil', pct: 5 }],
    additives: ['Activated charcoal: about 1 teaspoon per 500 g of oils, dispersed in a little of the recipe oil first'],
    why: 'Activated charcoal gives a deep black bar that looks great with a white swirl. Too much charcoal can make grey lather, so this recipe uses a moderate amount.',
    tips: ['Mix the charcoal into a tablespoon of oil before adding it, to avoid clumps.', 'If you sell it, avoid medical claims such as "treats acne" or "detox". Those make it a medicine, not a cosmetic.']
  },
  {
    slug: 'mango-butter-soap-recipe',
    name: 'Mango Butter Soap',
    description: 'A mango butter soap recipe with olive, coconut, rice bran and castor oil for a hard, creamy bar.',
    reviewed: false, skill: 'Beginner', lyeType: 'NaOH', method: 'cold', superfat: 5, cureWeeks: 5,
    oils: [{ oil: 'Olive Oil', pct: 40 }, { oil: 'Coconut Oil (76°)', pct: 25 }, { oil: 'Mango Butter', pct: 20 }, { oil: 'Rice Bran Oil', pct: 10 }, { oil: 'Castor Oil', pct: 5 }],
    why: 'Mango butter is a lighter, less greasy alternative to shea that still gives a hard bar. Rice bran oil adds a silky feel.',
    tips: ['Mango butter melts easily; do not overheat it.']
  },
  {
    slug: 'beeswax-soap-recipe',
    name: 'Beeswax Soap',
    description: 'A cold process beeswax soap recipe with a small amount of beeswax for a harder, longer-lasting bar.',
    reviewed: false, skill: 'Intermediate', lyeType: 'NaOH', method: 'cold', superfat: 5, cureWeeks: 6,
    oils: [{ oil: 'Olive Oil', pct: 45 }, { oil: 'Coconut Oil (76°)', pct: 25 }, { oil: 'Shea Butter', pct: 22 }, { oil: 'Castor Oil', pct: 5 }, { oil: 'Beeswax', pct: 3 }],
    why: 'A little beeswax makes the bar harder and longer lasting. It is kept at 3% because more beeswax makes the batter set very quickly and lowers lather.',
    tips: ['Beeswax melts at around 63°C. Soap warmer than usual (about 65–70°C) so it does not solidify when the lye goes in.', 'Pour as soon as you reach light trace; this batter thickens fast.']
  },
  {
    slug: 'hot-process-soap-recipe',
    name: 'Hot Process Soap',
    description: 'A simple hot process soap recipe cooked in a slow cooker. Usable sooner than cold process soap.',
    reviewed: false, skill: 'Intermediate', lyeType: 'NaOH', method: 'hot', superfat: 5, cureWeeks: 2,
    oils: [{ oil: 'Olive Oil', pct: 45 }, { oil: 'Coconut Oil (76°)', pct: 30 }, { oil: 'Shea Butter', pct: 20 }, { oil: 'Castor Oil', pct: 5 }],
    why: 'Cooking the soap finishes saponification in about an hour, so the bars are safe to use sooner. The texture is rustic rather than smooth.',
    tips: ['Cook on low in a slow cooker until the soap looks like translucent mashed potato, usually 45–90 minutes.', 'Add fragrance after cooking, when the soap has cooled slightly, so less of it evaporates.', 'The bars are usable after about a week, but a 2–4 week cure gives a harder, longer-lasting bar.']
  },
  {
    slug: 'liquid-soap-recipe',
    name: 'Liquid Soap',
    description: 'A liquid soap recipe made with potassium hydroxide (KOH): a soap paste you dilute into liquid hand soap.',
    reviewed: false, skill: 'Intermediate', lyeType: 'KOH', method: 'hot', superfat: 3, cureWeeks: 0,
    oils: [{ oil: 'Coconut Oil (76°)', pct: 40 }, { oil: 'Olive Oil', pct: 40 }, { oil: 'Castor Oil', pct: 20 }],
    why: 'Liquid soap uses KOH instead of NaOH. You cook it into a thick paste, then dilute the paste with water to the thickness you want. A low 3% superfat helps keep it clear.',
    tips: ['The lye amounts assume 90% pure KOH, the standard grade.', 'Many makers use more water than shown (up to 3 parts water to 1 part KOH) for an easier-to-stir paste.', 'Dilute the finished paste with roughly 1.5–2.5 times its weight in hot distilled water, adding it gradually.']
  }
]

export function getRecipeBySlug(slug: string): SoapRecipe | undefined {
  return recipes.find(r => r.slug === slug)
}

export function getReviewedRecipes(): SoapRecipe[] {
  return recipes.filter(r => r.reviewed)
}

// Oil weights for a batch of the given total oil weight (any unit)
export function recipeOilWeights(recipe: SoapRecipe, totalOil: number): OilEntry[] {
  return recipe.oils.map(o => ({ oil: o.oil, weight: String(Math.round(totalOil * o.pct / 100 * 10) / 10) }))
}

export function recipeBatch(recipe: SoapRecipe, totalOil: number) {
  const oils = recipeOilWeights(recipe, totalOil)
  return { oils, result: calculateLye(oils, recipe.lyeType, recipe.superfat)! }
}

// Guard against a recipe referencing an oil the calculator does not know
for (const r of recipes) {
  const total = r.oils.reduce((s, o) => s + o.pct, 0)
  if (total !== 100) throw new Error(`Recipe ${r.slug} oils add up to ${total}%`)
  for (const o of r.oils) if (!(o.oil in OILS)) throw new Error(`Recipe ${r.slug} uses unknown oil ${o.oil}`)
}
