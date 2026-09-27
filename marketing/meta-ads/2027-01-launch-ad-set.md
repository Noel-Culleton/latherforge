# LatherForge — January 2027 launch ad set (Meta: Facebook + Instagram)

**Status: DRAFT ONLY. Nothing has been created, published, scheduled or budgeted in Meta.**
No Meta Ads connection exists in this session. All account, pixel and event facts below are *unverified*.

---

## 0. Decisions (confirmed by Noel) and what's still open

**Confirmed**
- Live site (deployed to Vercel by direct upload) says: *"Live 1 January 2027, waitlist members get 14 days free."* The GitHub repo is out of date and doesn't deploy. Noel will sync it separately.
- The 5 existing waitlist sign-ups keep what they were promised (3 months free). New sign-ups get 14 days. Ads mention 14 days only.
- Founding member pricing: never in ads. Noel will remove it from the live site if it's still there.
- Geo: Ireland + UK first. US, CA and AU are added in round 2 only if round-1 cost per sign-up is **under €3**.
- Budget plan approved: 5 waitlist ads + the calculator ad first, the rest in round 2.
- Waitlist ads run **27–31 Dec only**. From 1 Jan, trial versions ("Start your 14-day free trial") point to the sign-up page.

**Still open. Each one blocks the ad(s) noted.**

| # | Open item | Blocks | Needed |
|---|---|---|---|
| 1 | Waitlist Lead tracking | Round 1 Leads objective, and the €3 gate | Deploy /thank-you/ + Zoho redirect, per `tracking/SETUP.md`. Test one sign-up end to end. |
| 2 | Privacy policy | Round 1 (the pixel needs it) | Publish one. Put its URL in the thank-you page. |
| 3 | Sign-up page URL | All trial ads (4B) | `[FILL IN: sign-up URL]` |
| 4 | Trial terms shown on the sign-up page: price after trial (amount, currency, period), card required or not, auto-billing, how to cancel, what happens at day 14 | All trial ads (4B) | Confirm, and the sign-up page must display them. Until then, trial ads say nothing about billing or cards. |
| 5 | Sign-up event in the app (`CompleteRegistration` or `StartTrial`) | Round 2 optimising for sign-ups | If missing, run round 2 on Landing page views and judge by sign-ups in the app. |
| 6 | Meta Business account / ad account / Page / pixel exist? | Everything | Confirm. |
| 7 | Live site read-through | Final sign-off | This environment can't reach latherforge.com. Do a last word-for-word check of the offer line on the live homepage and /early-access. |

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

**Offer line**, used verbatim in 9 of 10 ads (Noel confirmed the live site now carries it; do a final word-for-word check):

> Live 1 January 2027, waitlist members get 14 days free.

---

## 2. Campaign structure (draft; build everything PAUSED)

### Round 1: waitlist, 27–31 Dec 2026 (5 days), Ireland + UK

| Campaign | Objective | Ads | Budget |
|---|---|---|---|
| A. Waitlist | **Leads** → Website → pixel `Lead` (Traffic → Landing page views if tracking isn't live by 26 Dec) | V01, V04, V05, V06, V10 (waitlist versions) | €45/day × 5 = **€225** |
| B. Free calculator | Traffic → Landing page views → /lye-calculator/ | V02 | €12/day × 5 = **€60** |

End date on Campaign A: **31 Dec 2026, 23:59 (Dublin time)**. Campaign B runs straight through.

### Round 2: trial, 1–9 Jan 2027 (9 days)

| Campaign | Objective | Ads | Budget |
|---|---|---|---|
| C. Trial | Sales/Leads → app sign-up event if it exists (item #5), else Traffic → Landing page views | Trial versions (4B) of the **2 best round-1 ads** + V03, V07, V08, V09 | €45/day × 9 = **€405** |
| B. Free calculator (continues) | as above | V02 | €12/day × 9 = **€108** |

**Total: €285 + €513 = €798** (€2 headroom).

**US/CA/AU gate (decide on 1 Jan morning):**
- Cost per sign-up = round-1 Campaign A spend ÷ **new Zoho entries from 27–31 Dec**. Use Zoho's count, not Meta's: consent means Meta undercounts. Only count entries after 27 Dec 00:00, so the 5 existing sign-ups are excluded.
- **Under €3:** split Campaign C into two ad sets: IE + UK €25/day, and US + CA + AU €20/day.
- **€3 or over:** keep all of Campaign C in IE + UK.
- At ~€225 spend, €3 means 75+ sign-ups. Be ready for the gate not to pass. That's normal for a cold pre-launch audience, not a failure.

### Targeting (both rounds)
- Age 25–65+, all genders.
- Interests to **verify exist in Ads Manager**: soap making, handmade soap, cold process soap, craft business, Etsy, Shopify, cosmetic formulation, essential oils, craft fairs. Advantage+ audience expansion off in round 1.
- Exclusions: existing waitlist (Zoho export as custom audience, only if your privacy notice covers it). Employees/friends.
- Placements: Advantage+ placements, with a 4:5 feed asset and a 9:16 Stories/Reels asset per ad.

### Reading the results
- The budget is too small to exit Meta's learning phase (~50 conversions per ad set per week). Treat it as a creative test.
- **Kill rule:** after ~€30 spend on an ad, pause it if its link CTR is below half the ad-set average.
- **Round-1 winners:** lowest cost per Zoho sign-up where the numbers let you tell ads apart, otherwise lowest cost per landing-page view.

**UTM template:** `?utm_source=meta&utm_medium=paid_social&utm_campaign=launch_2027_01&utm_content=v01_pricing`. Trial versions use `utm_content=v01t_pricing` etc.

**Waitlist destination:** `https://latherforge.com/early-access/`
**Trial destination:** `[FILL IN: sign-up URL]`

---

## 3. Creative system (all variants)

- **Palette:** walnut `#5C3D2E` / deep walnut `#3E2820`, gold `#C9A84C`, sage `#7A9E7E`, cream `#FAF7F2`
- **Type:** Cormorant Garamond for on-image headlines (keep to 7 words max). Clean sans for small labels.
- **Imagery:** real soap, real hands, real workbench, real curing racks. Use your own photos or footage. No stock "spa" imagery, no AI-generated people.
- **Logo:** small LF mark bottom corner. No Etsy logo anywhere (we mention Etsy descriptively; LatherForge isn't affiliated).
- **Formats:** 1080×1350 (4:5) feed, 1080×1920 (9:16) Stories/Reels. Keep text out of the top 14% and bottom 20% on 9:16.
- **Product screens:** only show real LatherForge screens. If a screen isn't built yet, don't mock it up as if it is.

---

## 4. The 10 variants: waitlist versions (27–31 Dec)

Round 1 runs V01, V04, V05, V06, V10 (+ V02 calculator). The waitlist versions of V03, V07, V08, V09 are kept for reference; in round 2 they run as trial versions (4B).

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
*("Founding Makers" was dropped: founding member pricing stays out of the ads, per Noel.)*

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

## 4B. Trial versions (1 Jan 2027 onward)

**Don't publish any of these until open items #3 and #4 are done:** a real sign-up URL, and a sign-up page that shows the trial terms.

**Shared rules for every trial version**
- Destination: `[FILL IN: sign-up URL]` + UTM `utm_content=vXXt_...`
- CTA button: **Sign Up**
- Offer line (verbatim, last line of primary text): **Start your 14-day free trial.**
- Terms line directly under it: `[FILL IN: after-trial terms, e.g. "Then €X/month. Cancel anytime." Only once confirmed and shown on the sign-up page. Otherwise delete this line.]`
- Never say "no card needed", "no automatic charge" or "free" beyond the 14 days unless confirmed on the sign-up page.
- Creative: reuse the round-1 asset, but swap any "waitlist" / "Opening 1 January" / countdown text for **"Now live"**. Swap any "link below to join the waitlist" voiceover line.

---

### V01T — Pricing pain
**Primary text**
> How do you set the price on a bar of handmade soap?
>
> Oils, butters, lye, fragrance, packaging, fees, your time. LatherForge helps you know your exact cost per bar, then set retail, wholesale and Etsy prices with built-in margin calculators.
>
> Start your 14-day free trial.
> [FILL IN: after-trial terms]

**Headline:** Price your bars from real costs
**Description:** Now live for soap makers
`utm_content=v01t_pricing`

### V03T — Etsy fees eating margin
**Primary text**
> Etsy fees come out of every sale. Your bar price should account for them.
>
> LatherForge sets Etsy prices alongside retail and wholesale, with built-in margin calculators. The listing generator writes titles, descriptions and tags for each product.
>
> Start your 14-day free trial.
> [FILL IN: after-trial terms]

**Headline:** Price for Etsy with margins in view
**Description:** Pricing + listings, now live
`utm_content=v03t_etsy`

### V04T — Spreadsheet chaos → one dashboard
**Primary text**
> One spreadsheet for recipes. One for stock. One for costs. And a notebook for batches.
>
> LatherForge puts recipes, batches, inventory, costing and Etsy listings in one place, with a dashboard for revenue, production output, margins and inventory health.
>
> Start your 14-day free trial.
> [FILL IN: after-trial terms]

**Headline:** Retire the soap spreadsheets
**Description:** One place for your soap business
`utm_content=v04t_spreadsheets`

### V05T — Founder story
**Primary text**
> I'm Noel. LatherForge, the software I've been building for people who make and sell handmade soap, is now live.
>
> [FILL IN: one true sentence on why you started it.] It covers recipes, lye calculations, batch and cure tracking, inventory, cost per bar and pricing, and early users help shape what comes next.
>
> Start your 14-day free trial.
> [FILL IN: after-trial terms]

**Headline:** LatherForge is live
**Description:** Built for soap makers
`utm_content=v05t_founder`
**Script change:** line 4 becomes "It's live now. Start your 14-day free trial, link below." Film this take in the same session as the waitlist version.

### V06T — Cost-per-bar reveal
**Primary text**
> What does one bar of handmade soap actually cost to make?
>
> Oils, butters, lye, fragrance, packaging, divided across the batch. It's easy to miss something. LatherForge helps you know your exact cost per bar, then price it with a margin you choose.
>
> Start your 14-day free trial.
> [FILL IN: after-trial terms]

**Headline:** Know your exact cost per bar
**Description:** Costing built for soap makers
`utm_content=v06t_costperbar`

### V07T — Batch / cure tracking
**Primary text**
> Which batch comes off the curing rack this week?
>
> LatherForge tracks every production batch from pour to cure, and monitors stock of oils, butters, fragrances and packaging in real time.
>
> Start your 14-day free trial.
> [FILL IN: after-trial terms]

**Headline:** Every batch, from pour to cure
**Description:** Batch & inventory tracking
`utm_content=v07t_batches`

### V08T — Beginner → first sale
**Primary text**
> Going from making soap for friends to selling your first bars?
>
> LatherForge brings the business side together: recipes with SAP values and safety guidance, cost per bar, pricing for retail, wholesale and Etsy, and listing copy for your shop.
>
> Start your 14-day free trial.
> [FILL IN: after-trial terms]

**Headline:** The business side of soap, sorted
**Description:** From recipe to listing
`utm_content=v08t_firstsale`

### V09T — Time saved
**Primary text**
> Less time on admin, more time at the pot.
>
> LatherForge writes Etsy titles, descriptions and tags in seconds, and keeps recipes, batches, stock and costs in one place. No more switching between five different tools and spreadsheets.
>
> Start your 14-day free trial.
> [FILL IN: after-trial terms]

**Headline:** Less admin, more soap
**Description:** Your soap business in one place
`utm_content=v09t_time`

### V10T — Now live (replaces the waitlist ad)
**Primary text**
> LatherForge is live: software built for people who make and sell handmade soap.
>
> Recipes, lye calculations, batch and cure tracking, inventory, cost per bar, pricing and Etsy listings, all in one place.
>
> Start your 14-day free trial.
> [FILL IN: after-trial terms]

**Headline:** Start your 14-day free trial
**Description:** Built for soap makers
`utm_content=v10t_live`
**Creative change:** walnut background, gold Cormorant *"Now live"*, sage line *"14-day free trial"*.

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
- [ ] Waitlist ads (Campaign A) have an end date of 31 Dec 23:59
- [ ] Trial ads: sign-up page shows price after trial, card/billing terms and cancellation before any trial ad goes live
- [ ] Built as PAUSED, approved by Noel per ad

## 6. Your to-do, in order

**Before 27 Dec (round 1)**
1. Publish a privacy policy (item #2).
2. Deploy /thank-you/ and set the Zoho redirect. Test one sign-up (`tracking/SETUP.md`).
3. Remove founding member pricing from the live site if it's still there.
4. Film V05 (both takes: waitlist + "now live"). Gather real figures for V06 and real rack dates for V07.
5. Confirm the ad account, Page and pixel. Then I can turn round 1 into a PAUSED build list for your approval.

**Before 1 Jan (round 2)**
6. Sign-up URL, trial terms on the sign-up page, and the app sign-up event (items #3–#5).
7. 1 Jan morning: pull round-1 numbers and apply the €3 gate. Pick the 2 winners to run as trial versions.
