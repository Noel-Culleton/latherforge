# Pricing recommendation for launch (for the Tuesday 29 Sep decision)

Keeps the agreed Brand Pricing Doctrine names and prices. The difference is what is sold on day one.

## Plans at launch

| Plan | Price | Status at launch | Includes |
|---|---|---|---|
| Starter | Free | Live | Soap and lye calculator (46 oils, NaOH and 90% KOH), unlimited saved recipes, soap quality profile, mould calculator, safety checklist |
| Craft Pack (hero) | €29/mo | Live | Everything in Starter + compliant INCI labels, true cost per bar and margins, batch records and traceability, curing tracker, inventory and suppliers, sales/expenses/P&L, customers and products, Etsy listing generator, fragrance planner |
| Business Pack | €49/mo | Live | Everything in Craft Pack + AI suite (recipe generator, oil substitution, fragrance blending, pricing and margin analysis, batch scheduling, marketing copy), wholesale research, drafting and sending, all within monthly limits |
| Studio | €89/mo | "Coming 2027 — join the list" | Unlimited wholesale, multi-channel selling, small-team accounts. Sell only once teams and multi-channel are built |

Why Studio waits: its headline features (teams, multi-channel) do not exist yet. Charging €89 for them risks refunds, bad reviews and consumer-law trouble.

## AI and wholesale limits (Business Pack)

AI costs money on every use, so €49 must cover heavy users.

| Feature | Monthly limit | Notes |
|---|---|---|
| AI generations (all AI tools combined) | 100 | Warning at 80. Resets on the 1st. Review after the first month of real usage |
| Wholesale prospects researched and drafted | 20 | |
| Wholesale emails sent | 50 | Existing server limits (one a minute, 50 a day) stay |
| INCI label generator | No limit | Part of Craft Pack. It is compliance, not an AI extra |

Needs building: a per-user monthly usage counter checked by the aiAssistant and wholesale server functions (not just the screen).

## Trial

- 14 days of Craft Pack features for new users after launch.
- Early-access users keep Craft Pack features until 15 Jan 2027 (already built).
- AI in the trial: a taster of 10 AI generations, instead of the current 7 days of unlimited AI.

## Founding members

Anyone who subscribes in January 2027 keeps their price for as long as they stay subscribed. It rewards early users and gives a reason to commit before the trial ends.

## Tester rewards (agreed 1 Oct 2026)

- **Play Store testers** (15 invited, 12+ needed for Google's 14-day closed test): Craft Pack free for 3 months from 1 Jan 2027, then the founding price.
- **Product testers** (5–10 real soap makers, testing the Base44 app in December): Business Pack free for 3 months from 1 Jan 2027, then the founding price locked for life, plus a "Founding Tester" credit and personal help setting up labels and costings.
- Rewards are earned by testing and feedback (product testers: 3 set tasks + feedback form), never by Play Store ratings or reviews (Google bans incentivised reviews).
- No cash rewards. Normal AI limits apply during the free period.
- Mention the free tester access in the email to the case officer.

## Annual (after launch, once monthly churn is known)

Two months free: Craft Pack €290/yr, Business Pack €490/yr. The €249 and €799 figures noted earlier belonged to the old tier names; €249 for Craft Pack would be a 28% discount, which is deep for a first-year product.

## Stripe (December)

Create three monthly EUR prices, €29, €49 and €89 (the €89 one inactive until Studio launches), send the price IDs for `base44/functions/createCheckout/entry.ts`, and archive the old €39/€99 prices.
