# December 2026 launch ads: LatherForge

Three 15-second vertical (1080×1920) video ads for Meta (Facebook and Instagram Reels) and TikTok. They run during the December launch countdown, ahead of the January 2027 launch.

**Status: ready as drafts. Nothing is published, scheduled or budgeted.** Every live change needs Noel's approval.

## The videos

| File | Hook (0–3.5s) | Middle (3.5–10.5s) | End card (10.5–15s) |
|---|---|---|---|
| `LatherForge_Ad_v1_CostPerBar.mp4` | "Soap makers: what does one bar really cost you?" | Cost-per-bar card: ingredients add up to €1.37, "Sell at €6.50 = €5.13 profit" | 14-day free trial · Join early access · latherforge.com |
| `LatherForge_Ad_v2_Pricing.mp4` | "Soap makers: are you pricing your soap too low?" | Pricing card: cost €1.37, wholesale €3.25, market €6.50, Etsy €7.25, 79% margin | same |
| `LatherForge_Ad_v3_BatchTracker.mp4` | "Soap makers: which batch is ready to sell?" | Batch card: 2 ready, 3 curing with days left | same |

All figures are example data and are labelled "illustrative figures" on screen. The video has sound for the first 3.5s only, so add a licensed track from the platform music library when you create each ad.

## Ad copy (Meta)

**Primary text, v1 (cost):**
> Know exactly what every bar of soap costs to make: oils, lye, fragrance and packaging, worked out for you. LatherForge is the app built for soap businesses. Join the early-access list for a 14-day free trial when we launch.

**Primary text, v2 (pricing):**
> Price your soap for every channel (wholesale, craft markets and Etsy) from your real cost per bar. LatherForge is the app built for soap businesses. Join the early-access list for a 14-day free trial when we launch.

**Primary text, v3 (batches):**
> Track every batch from pour to cure, and see at a glance which bars are ready to sell. LatherForge is the app built for soap businesses. Join the early-access list for a 14-day free trial when we launch.

**Headline (all):** The app for soap businesses
**Description:** 14-day free trial at launch
**Button:** Sign Up
**Destination:** https://latherforge.com/early-access/ (check the www vs non-www redirect first)

## Suggested structure (draft only, not set up)

- **Campaign:** Leads / early-access sign-ups, launch countdown (1–31 Dec)
- **1 ad set:** Ireland + UK to start, ages 25–65, interests to check in Ads Manager: soap making, handmade soap, cold process soap, craft business, Etsy sellers, cosmetic formulation, essential oils, craft fairs
- **3 ads:** v1, v2 and v3 in the same ad set with equal treatment. After 3–4 days, keep the one with the lowest cost per sign-up.
- **Optimise for:** Lead or CompleteRegistration, but only if that event is confirmed to fire on the early-access form. Otherwise use landing-page views as a proxy and say so.
- **Budget:** Noel decides. Nothing is spent without explicit approval.

## Must be confirmed before going live

1. **Trial terms:** whether a card is required, whether it auto-bills after 14 days, the price and currency after the trial, and how to cancel. Until this is confirmed, ads must not say anything about billing.
2. **Meta Business account, ad account and Page** exist and are connected.
3. **Pixel / Conversions API** is installed, and the sign-up event fires.
4. **The early-access form** submits and records entries.
5. **Features shown are live:** only run v3 if batch and cure tracking works in the app by December, and v2 only if multi-channel pricing works.
6. **The landing page matches the ad:** it says "14-day free trial" with no founding price. Updated on branch `claude/dreamy-cerf-40qx4j`, which must be merged before ads run.
7. **AI-content label** is ticked (the billboard hook clip is AI-generated).

## Compliance notes

- **v2 hook, "are you pricing your soap too low?":** a direct question about the viewer's business is close to Meta's personal-attributes guidance. If v2 gets rejected, or to be safe, re-render the hook as **"How should you price a bar of soap?"**
- **v1, "€5.13 PROFIT":** shown as a labelled example, not a promise. If a reviewer flags it as a profit claim, change it to "€5.13 margin per bar (example)".
- No testimonials, user counts, "free forever" claims or fake urgency are used anywhere.

## Source

The ads are rendered from a billboard clip (Google Flow) plus generated cards in the brand colours: cream #FAF7F2, dark brown #3E2820, gold #C9A84C, sage #7A9E7E. The fonts are Anton, Cormorant Garamond and Inter.
