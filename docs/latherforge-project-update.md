# LatherForge project update — 27 September 2026

Add this file to the "LatherForge.com Platform Design" Claude project (Files → Add) so future chats start with the current picture.

## 1. Corrections to the project description
- **latherforge.com is NOT the Base44 app.** DNS points to Vercel (76.76.21.21). The Vercel project "latherforge" serves latherforge.com and www.latherforge.com from the GitHub repo Noel-Culleton/latherforge (Next.js static site). Production deploys from `main`; every branch gets a preview URL.
- **Base44 app** ("Lather Forge", app id 6a087e8f851b3b060a1fd07e) is the full paid product. Its public address still needs confirming (plan: app.latherforge.com).
- **Pricing decided 27 Sep: Craft free / Artisan €29 / Studio €79 a month**, 14-day Artisan trial. INCI label generator moved from Studio to Artisan (it's the hook from the free app's sample label). Base44 updated (plans page, sidebar, server checks). **Stripe still has the old €39/€99 prices**: create new €29 and €79 monthly EUR prices and paste their IDs into base44/functions/createCheckout/entry.ts. Until then checkout refuses to start rather than charge the wrong amount.
- Base44 `EARLY_ACCESS_MODE = true` until launch on 1 January 2027 (src/lib/launchConfig.js).

## 2. Product structure (agreed)
| Layer | Where | Role | Price |
|---|---|---|---|
| Website | latherforge.com (Vercel, this repo) | Get found: calculator, recipes, SAP chart, guides | Free |
| Free app | latherforge.com/app/ → Google Play | Downloads and daily use: calculator, saved recipes, cure countdown, sample label, cost per bar | Free forever |
| Full app | Base44 (app.latherforge.com planned) | Revenue: batches, costing, compliant labels, traceability, Etsy, AI | €0 / €39 / €99 |

- Users buy LatherForge directly on the web (Stripe). **Nothing is sold inside the Play app**, so Google takes no cut. The Play app shows no prices or buy buttons, only "learn more" / "get early access".
- The Base44 app is not wrapped for Google Play: it needs a login first, it's built for desktop, and its Stripe subscriptions would fall under Google Play's billing rules.

## 3. Built this session (branch `claude/keen-edison-5q3cdt`, not yet merged)
- **Free app** at /app/: installable, works offline. Tabs: Calculate, My Soaps (saved recipes + cure countdown), Selling (cost per bar, locked pricing preview, printable **sample label** with a SAMPLE watermark and draft INCI names).
- **Calculator page** retargeted to "soap calculator" (8,100 US searches/month vs 1,600 for "lye calculator"), grams/ounces, 7 FAQs, correct canonical.
- **46 oils** with SoapCalc SAP values. Fixed a safety bug: palm kernel was 0.190 (correct 0.156) and coconut 0.190 (correct 0.183).
- **16 soap recipes** at /soap-recipes/, hidden until approved (see docs/recipe-review.md).
- **SAP value chart** at /sap-values/.
- **Guides:** cure times, hot process, liquid soap, selling soap legally (Ireland/UK/EU).
- **SEO fixes:** the blog index inherited the homepage canonical; canonicals now match; auto-generated sitemap; OG image added.
- **Docs:** Play Store listing, 5 short-video scripts, recipe review sheet.

## 4. Keyword data (DataForSEO, US monthly searches)
soap calculator 8,100 (difficulty 9) · soapcalc 4,400 · how to make soap 12,100 · cold process soap recipes 4,400 (difficulty 0) · soap recipes 2,900 · lye calculator 1,600 · soap lye calculator 1,000 · soap math formula 590 · sap values 320 · soap making software ~0 · soap pricing calculator ~50.
UK "soap calculator" is only 480, so the audience is mainly US.
Takeaway: search brings soap makers (recipes, calculators), not software buyers. They convert through the free app and email.

## 5. Competitor
"Soap Lye Calculator – Trace" (iOS) does calculation, batch logging and cure tracking. Check whether it's on Android before launch. LatherForge's difference: the Selling tab, and the path to the full business platform.

## 6. Open decisions
1. Which waitlist is real: the website's Zoho form or Base44's EarlyAccess page? One list only.
2. ~~Artisan price~~ Decided: €29 / €79. To do: new Stripe prices (see above); optional annual prices (€290 / €790).
3. ~~Align the Base44 oil data with the website's~~ Done 27 Sep: Base44 now has the same 46 oils and SAP values as the website, and liquid soap allows for 90% KOH (it was about 11% short). Base44 checkpoint "Align oil data with website (46 oils), KOH 90% purity fix". Still to do: publish Base44, and add soap-quality figures (hardness, lather etc.) for the 31 new oils.
4. Base44 public URL (app.latherforge.com?).
5. Approve recipes in docs/recipe-review.md.
6. Later: a "Send to LatherForge" button that moves saved recipes from the free app into Base44's Recipe Builder.

## 6b. Found in Base44 (needs a decision before launch)
- ~~Several Artisan features were open to free users~~ Fixed 27 Sep: Inventory, Products (incl. label printing), Suppliers, Costing, Fragrance planner, Curing tracker, Batch calendar, Ingredient lots, Purchase orders, Stock requirements, Traceability and Reorder reports, and Recipe generator are now locked to Artisan. The trial still unlocks everything in Artisan for 14 days. Free users see an "Artisan" tag on those menu items. The public Etsy pricing calculator, mould calculator and safety pages stay free.
- Launch offer decided 27 Sep: **14 days free** (Base44 trial). Website copy changed from "3 months free" to 14 days. People who joined the waitlist before this change were promised 3 months; honour it with a Stripe coupon emailed at launch. "Founding member pricing, locked for life" is still promised on the website but isn't set up in Stripe/Base44 yet.

## 7. Dates
- 4 Dec 2026: Google Play developer account ($25) and identity check; recruit 12+ testers (reminder set)
- 25 Dec 2026: deploy, package with PWABuilder, add assetlinks.json, start the 14-day closed test (reminder set)
- 1 Jan 2027: Base44 launch (flip EARLY_ACCESS_MODE); app buttons change to "learn more"
- Early Jan 2027: app public on Google Play
