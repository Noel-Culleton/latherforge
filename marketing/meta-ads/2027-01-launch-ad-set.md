# LatherForge — January 2027 launch ad set (Meta: Facebook + Instagram)

**Status: DRAFT ONLY. Nothing has been created, published, scheduled or budgeted in Meta.**
No Meta Ads connection exists in this session. All account, pixel and event facts below are *unverified*.

---

## 0. Blockers — resolve before any ad goes live

| # | Blocker | Why it matters | What's needed |
|---|---|---|---|
| 1 | **Offer mismatch.** The site currently says *"Join the waitlist and get 3 months free at launch"* and *"Early members receive 3 months free access and founding member pricing"* (homepage banner, homepage final CTA, /early-access hero + perks). The requested ad wording is *"Live 1 January 2027, waitlist members get 14 days free."* | Ad and landing page must match exactly, or it's a misleading-ad rejection risk. Worse: people already on the waitlist were promised 3 months. Quietly cutting that to 14 days is a trust problem and a consumer-law risk (Irish/EU). | Decide the offer. Recommended: existing sign-ups keep 3 months (honour it, email them); new ad-driven sign-ups get 14 days. Then update the homepage + /early-access to state the new wording **exactly** before 27 Dec. |
| 2 | **"Founding member pricing — locked-in rate for life"** is on /early-access with no price. | Implies a discount/price claim with no amount, currency, period or renewal terms. | Either publish the founding price with full terms, or remove the claim. Ads below do **not** mention it. |
| 3 | **No prices anywhere on the site.** | Nothing to quote; ads contain **no prices**. | Before any post-launch trial ad: price, currency, billing period, card required or not, auto-billing, what happens after 14 days, how to cancel. |
| 4 | **Live site not read.** latherforge.com is blocked from this build environment; claims were taken from the repo source (last commit 18 Jun 2026). | Live copy may differ from the repo. | Open latherforge.com and /early-access/ and confirm the wording matches this doc. Also confirm whether www redirects to non-www. |
| 5 | **Lead tracking.** The waitlist form is a Zoho iframe (forms.zohopublic.eu). A Meta Pixel on latherforge.com can't see iframe submits. | You can't optimise for or measure Lead without it. | Set the Zoho form's thank-you redirect to a page on latherforge.com (e.g. `/early-access/thanks/`) that fires Pixel `Lead`. Confirm the form actually records entries. |
| 6 | **The flight crosses launch day.** Ads run 27 Dec → 9 Jan; product goes live 1 Jan. | From 1 Jan "join the waitlist" no longer makes sense. The offer is for *waitlist members*, so it's unclear what a new person clicking on 3 Jan gets. | Decide the post-1-Jan offer. Until trial terms (#3) are confirmed, stop the waitlist ads on 31 Dec 23:59 and don't run trial copy. |
| 7 | Meta Business account / ad account / Page / Pixel exist? | Unknown. | Confirm. |

---

## 1. Source claims used (from site source — verify on live site)

Only these claims are used in the copy below:

- "The Business OS Built for Soap Makers"
- AI recipe generator: cold process, hot process and melt & pour recipes with full ingredient lists, SAP values and safety guidance
- Batch & inventory tracking: "Track every production batch from pour to cure. Monitor stock levels for oils, butters, fragrances and packaging in real time."
- Costing & pricing: "Know your exact cost per bar. Set profitable retail, wholesale and Etsy prices with built-in margin calculators."
- Etsy listing generator: "SEO-optimised Etsy titles, descriptions and tags for every product in seconds"
- Business dashboard: "revenue, production output, margins and inventory health at a glance"
- "No more switching between five different tools and spreadsheets"
- Free lye calculator: NaOH & KOH, cold and hot process, superfat, "Free, instant, no signup required"
- Waitlist perks: early access, "Your feedback directly influences what we build next"
- Launch: January 2027

**Not used (unverified or risky):** any price, "3 months free", "founding member pricing / locked-in for life", customer counts, time-saved numbers, profit outcomes, testimonials.

**Offer line**, used verbatim in 9 of 10 ads (only after blocker #1 is fixed on the site):

> Live 1 January 2027, waitlist members get 14 days free.

---

## 2. Campaign structure (draft)

| Item | Recommendation |
|---|---|
| Flight | 27 Dec 2026 → 9 Jan 2027 (14 days). Waitlist ads end 31 Dec 23:59 unless blocker #6 is resolved. |
| Budget | €800 total ≈ €57/day |
| Campaign A — Waitlist | Objective **Leads** (website, `Lead` event) *if* blocker #5 is fixed. Otherwise use **Traffic → Landing page views**, and say so in reporting. Round 1: €45/day. |
| Campaign B — Free calculator | Objective **Traffic → Landing page views** to /lye-calculator/. €12/day. Builds a warm retargeting pool of soap makers. |
| Geo | Start with Ireland + UK (site locale is en_IE, currency €). Add US only if CPMs are acceptable after day 3. **Confirm.** |
| Audience | 25–65+, all genders. Interests to **verify exist in Ads Manager**: soap making, handmade soap, cold process soap, craft business, Etsy, Shopify, cosmetic formulation, essential oils, craft fairs. Advantage+ audience expansion off in round 1. |
| Exclusions | Existing waitlist (Zoho export as custom audience, only if your privacy notice covers it). Employees/friends. |
| Placements | Advantage+ placements, with a 4:5 feed asset and a 9:16 Stories/Reels asset per ad. |
| Status | Build everything **PAUSED**. Nothing goes live without your per-change approval. |

**Test plan (not all 10 at once).** €57/day can't give 10 ads enough delivery to learn. Meta's guidance is ~50 optimisation events per ad set per week to exit learning, which this budget probably won't reach on `Lead`. Treat these two weeks as a creative test, not an optimised campaign.

- **Round 1 (27–31 Dec):** Campaign A with V01, V04, V05, V06, V10. Campaign B with V02.
- **Round 2 (1–9 Jan, only once the post-launch offer is decided):** keep the 2 best by cost per landing-page view / cost per lead, and add V03, V07, V08, V09 with the copy updated for the live product.
- **Kill rule:** after ~€40 spend, pause any ad with a CTR (link) below half the ad-set average.

**UTM template** (append to every destination):
`?utm_source=meta&utm_medium=paid_social&utm_campaign=launch_2027_01&utm_content=v01_pricing`

**Default destination:** `https://latherforge.com/early-access/` (trailing slash matches the site config).

---

## 3. Creative system (all variants)

- **Palette:** walnut `#5C3D2E` / deep walnut `#3E2820`, gold `#C9A84C`, sage `#7A9E7E`, cream `#FAF7F2`
- **Type:** Cormorant Garamond for on-image headlines (keep to 7 words max). Clean sans for small labels.
- **Imagery:** real soap, real hands, real workbench, real curing racks. Use your own photos or footage. No stock "spa" imagery, no AI-generated people.
- **Logo:** small LF mark bottom corner. No Etsy logo anywhere (we mention Etsy descriptively; LatherForge isn't affiliated).
- **Formats:** 1080×1350 (4:5) feed, 1080×1920 (9:16) Stories/Reels. Keep text out of the top 14% and bottom 20% on 9:16.
- **Product screens:** only show real LatherForge screens. If a screen isn't built yet, don't mock it up as if it is.

---

## 4. The 10 variants

Character counts: first line of primary text ≤125, headline ≤40 (checked).

---

### V01 — Pricing pain
*(The brief's "are you undercharging for your bars?" was rewritten. The skill's guardrails bar wording that implies the reader's financial situation, as in "are you losing money…". This version asks about the method, not the person.)*

**Primary text**
> How do you set the price on a bar of handmade soap?
>
> Oils, butters, lye, fragrance, packaging, fees, your time. LatherForge helps you know your exact cost per bar, then set retail, wholesale and Etsy prices with built-in margin calculators.
>
> Live 1 January 2027, waitlist members get 14 days free.

**Headline:** Price your bars from real costs
**Description:** Costing & pricing for soap makers
**CTA:** Sign Up
**Destination:** /early-access/ · `utm_content=v01_pricing`

**Creative brief:** Static 4:5. Overhead shot of a single bar on a cream board. Hand-lettered-style list of ingredients down the side in Cormorant, each ending in a gold "?". Overlay: *"What goes into the price of one bar?"* 9:16: same list builds line by line (5–7s), ending on the LatherForge mark.

---

### V02 — Lye safety / calculation errors (free calculator)

**Primary text**
> Lye maths is the one part of soap making you can't eyeball.
>
> The free LatherForge lye calculator works out exact NaOH or KOH amounts for cold process and hot process recipes, with superfat. Free, instant, no signup required.
>
> Always double-check your recipe and wear proper protection when handling lye.

**Headline:** Free lye calculator for soap makers
**Description:** NaOH & KOH · no signup
**CTA:** Learn More
**Destination:** `https://latherforge.com/lye-calculator/` · `utm_content=v02_lye`

**Creative brief:** 9:16 screen recording of the real calculator: pick NaOH → add 3 oils by weight → set 5% superfat → result appears (8–10s). Feed 4:5: goggles and gloves beside a scale, overlay *"Exact lye. Every batch."*
**Note:** no offer line, because the calculator page doesn't carry the 14-day offer. No safety-outcome claims (e.g. "prevents burns").

---

### V03 — Etsy fees eating margin

**Primary text**
> Etsy fees come out of every sale. Your bar price should account for them.
>
> LatherForge sets Etsy prices alongside retail and wholesale, with built-in margin calculators. The listing generator writes titles, descriptions and tags for each product.
>
> Live 1 January 2027, waitlist members get 14 days free.

**Headline:** Price for Etsy with margins in view
**Description:** Pricing + listings for soap makers
**CTA:** Sign Up
**Destination:** /early-access/ · `utm_content=v03_etsy`

**Creative brief:** Static 4:5. A kraft-wrapped bar with a price tag. Three stacked tags in gold/sage/walnut read *Retail · Wholesale · Etsy*. Overlay: *"One bar. Three prices."* Don't quote real Etsy fee percentages (they change, and it adds a factual claim to verify).

---

### V04 — Spreadsheet chaos → one dashboard

**Primary text**
> One spreadsheet for recipes. One for stock. One for costs. And a notebook for batches.
>
> LatherForge puts recipes, batches, inventory, costing and Etsy listings in one place, with a dashboard for revenue, production output, margins and inventory health.
>
> Live 1 January 2027, waitlist members get 14 days free.

**Headline:** Retire the soap spreadsheets
**Description:** One place for your soap business
**CTA:** Sign Up
**Destination:** /early-access/ · `utm_content=v04_spreadsheets`

**Creative brief:** 9:16 video (6–8s). A messy desk with laptop spreadsheet tabs, a notebook and sticky notes cuts to one clean LatherForge dashboard screen (real screen only). Feed 4:5: split image, "before" desk on the left, dashboard on the right, divided by a gold line.

---

### V05 — Founder story

**Primary text**
> I'm Noel. I'm building LatherForge, software for people who make and sell handmade soap.
>
> [FILL IN: one true sentence on why you started it. Your own experience, or what soap makers told you. Don't invent a backstory.] It covers recipes, lye calculations, batch and cure tracking, inventory, cost per bar and pricing, and waitlist members help shape what comes next.
>
> Live 1 January 2027, waitlist members get 14 days free.

**Headline:** Help shape LatherForge
**Description:** Built for soap makers
**CTA:** Sign Up
**Destination:** /early-access/ · `utm_content=v05_founder`

**Creative brief:** 9:16 selfie-style video, 20–30s, filmed on a phone in natural light. Script: (1) "I'm Noel, I'm building LatherForge." (2) The one true reason. (3) "It does [3 features]." (4) "It goes live on 1 January. Waitlist members get 14 days free, link below." Burn in captions (Cormorant headline card, sans captions). This is usually the strongest pre-launch format. Film 2 takes.

---

### V06 — Cost-per-bar reveal

**Primary text**
> What does one bar of handmade soap actually cost to make?
>
> Oils, butters, lye, fragrance, packaging, divided across the batch. It's easy to miss something. LatherForge helps you know your exact cost per bar, then price it with a margin you choose.
>
> Live 1 January 2027, waitlist members get 14 days free.

**Headline:** Know your exact cost per bar
**Description:** Costing built for soap makers
**CTA:** Sign Up
**Destination:** /early-access/ · `utm_content=v06_costperbar`

**Creative brief:** 4:5 "receipt" graphic on cream, a line per ingredient, totalling to a cost per bar in gold. **Use the real numbers from one of your own recipes, labelled "Example batch".** [FILL IN: real figures.] No invented figures. 9:16: the receipt prints line by line, and the total lands last.

---

### V07 — Batch / cure tracking

**Primary text**
> Which batch comes off the curing rack this week?
>
> LatherForge tracks every production batch from pour to cure, and monitors stock of oils, butters, fragrances and packaging in real time.
>
> Live 1 January 2027, waitlist members get 14 days free.

**Headline:** Every batch, from pour to cure
**Description:** Batch & inventory tracking
**CTA:** Sign Up
**Destination:** /early-access/ · `utm_content=v07_batches`

**Creative brief:** 4:5 photo of a real curing rack with handwritten masking-tape labels. Overlay a clean batch card: *Batch name · Poured · Ready*, with [FILL IN] real dates from your rack. 9:16: slow pan along the rack, ending on the batch card.

---

### V08 — Beginner → first sale

**Primary text**
> Going from making soap for friends to selling your first bars?
>
> LatherForge brings the business side together: recipes with SAP values and safety guidance, cost per bar, pricing for retail, wholesale and Etsy, and listing copy for your shop.
>
> Live 1 January 2027, waitlist members get 14 days free.

**Headline:** The business side of soap, sorted
**Description:** From recipe to listing
**CTA:** Sign Up
**Destination:** /early-access/ · `utm_content=v08_firstsale`

**Creative brief:** 4:5 carousel, 4 cards: *Recipe → Cost → Price → Listing*, one per card, each with a real product screen or a real photo of that stage. Card 5 is the offer card.
**Compliance:** no promise of sales, income or "your first sale guaranteed". Selling cosmetics in the EU/UK has safety-assessment rules. Don't imply LatherForge covers compliance, because the site doesn't claim that.

---

### V09 — Time saved

**Primary text**
> Less time on admin, more time at the pot.
>
> LatherForge writes Etsy titles, descriptions and tags in seconds, and keeps recipes, batches, stock and costs in one place. No more switching between five different tools and spreadsheets.
>
> Live 1 January 2027, waitlist members get 14 days free.

**Headline:** Less admin, more soap
**Description:** Your soap business in one place
**CTA:** Sign Up
**Destination:** /early-access/ · `utm_content=v09_time`

**Creative brief:** 9:16, 8s. Hands pouring batter (slow, satisfying) with a small inset of a listing being generated (real screen). Feed 4:5: pour shot, overlay *"More time at the pot."*
**Note:** no "save X hours". There's no verified number.

---

### V10 — Early access / waitlist
*(The brief said "Founding Makers". The site uses "founding member" and ties it to an unpriced "locked-in for life" rate (blocker #2), so this draft sticks to what's verifiable. Swap to Founding Member wording once the offer and price are settled on the page.)*

**Primary text**
> LatherForge opens on 1 January 2027. The waitlist is open now.
>
> Recipes, lye calculations, batch and cure tracking, inventory, cost per bar, pricing and Etsy listings, built for soap makers. Waitlist members get in early and help shape what we build next.
>
> Live 1 January 2027, waitlist members get 14 days free.

**Headline:** Join the LatherForge waitlist
**Description:** Built for soap makers
**CTA:** Sign Up
**Destination:** /early-access/ · `utm_content=v10_waitlist`

**Creative brief:** 4:5 walnut background, gold Cormorant *"Opening 1 January 2027"*, small sage line *"Waitlist open now"*. 9:16 version counts down (use only while it's true, and swap it out on 1 Jan).

---

## 5. Compliance checklist (run before approving each ad)

- [ ] Offer line matches the live landing page **word for word**
- [ ] No price mentioned (none is on the site yet)
- [ ] Nothing says or denies automatic billing / "no card needed" for the trial, until terms are confirmed. The site's "No credit card" currently refers to the *waitlist*, not the trial.
- [ ] No "free forever", no invented numbers, no testimonials, no profit/sales promises
- [ ] No wording that asserts the reader's finances or personal traits
- [ ] No fake urgency ("only 10 spots left") unless true and shown on the page
- [ ] Etsy mentioned descriptively only, no Etsy logo
- [ ] Every product screen shown is real
- [ ] Destination URL resolves (check www vs non-www) and UTMs are attached
- [ ] Built as PAUSED, approved by Noel per ad

## 6. Before 27 Dec — your to-do (in order)

1. Decide the offer (blocker #1) and what existing waitlist members get. Update homepage + /early-access to the exact wording.
2. Remove or price "founding member pricing" (blocker #2).
3. Zoho thank-you redirect + Pixel `Lead` (blocker #5). Test one sign-up end to end.
4. Decide what the ads say from 1 January (blocker #6).
5. Shoot V05 (founder video) and gather real photos/figures for V06 and V07.
6. Confirm the ad account, Page, Pixel and geo. Then I can turn this into a PAUSED build list for your approval.
