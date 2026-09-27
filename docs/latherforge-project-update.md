# LatherForge project update — 27 September 2026

Add this file to the "LatherForge.com Platform Design" Claude project (Files → Add) so future chats start with the current picture.

## 1. Corrections to the project description
- **latherforge.com is NOT the Base44 app.** DNS points to Vercel (76.76.21.21). The Vercel project "latherforge" serves latherforge.com and www.latherforge.com from the GitHub repo Noel-Culleton/latherforge (Next.js static site). Production deploys from `main`; every branch gets a preview URL.
- **Base44 app** ("Lather Forge", app id 6a087e8f851b3b060a1fd07e) is the full paid product. Its public address still needs confirming (plan: app.latherforge.com).
- **Pricing in the Base44 code is Craft €0 / Artisan €39 / Studio €99 a month** (src/pages/Upgrade.jsx, useTier.js), with a 14-day Artisan trial. The project description says Artisan €29 — decide which is right and fix the other.
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
2. Artisan price: €29 or €39?
3. Align the Base44 oil data with the website's (Base44: 15 oils, coconut 0.178, mango 0.128; website: 46 oils, 0.183 and 0.136).
4. Base44 public URL (app.latherforge.com?).
5. Approve recipes in docs/recipe-review.md.
6. Later: a "Send to LatherForge" button that moves saved recipes from the free app into Base44's Recipe Builder.

## 7. Dates
- 4 Dec 2026: Google Play developer account ($25) and identity check; recruit 12+ testers (reminder set)
- 25 Dec 2026: deploy, package with PWABuilder, add assetlinks.json, start the 14-day closed test (reminder set)
- 1 Jan 2027: Base44 launch (flip EARLY_ACCESS_MODE); app buttons change to "learn more"
- Early Jan 2027: app public on Google Play
