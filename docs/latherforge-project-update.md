# LatherForge project update — 28 September 2026

Add this file to the "LatherForge.com Platform Design" Claude project (Files → Add) so future chats start with the current picture.

## 1. Corrections to the project description
- **latherforge.com is NOT the Base44 app.** DNS points to Vercel (76.76.21.21). The Vercel project "latherforge" serves latherforge.com and www.latherforge.com from the GitHub repo Noel-Culleton/latherforge (Next.js static site). Production deploys from `main`; every branch gets a preview URL.
- **Base44 app** ("Lather Forge", app id 6a087e8f851b3b060a1fd07e) is the full paid product. Its public address still needs confirming (plan: app.latherforge.com).
- **Agreed pricing (Brand Pricing Doctrine, Sep 2026): Starter Free / Craft Pack €29 / Business Pack €49 / Studio €89 a month.** Annual €249 and €799 noted earlier, tiers not yet confirmed. Rules: one system, one price, no add-on packs; anchor €29 against Craftybase, not free calculators; lead with business and compliance, not the lye calculator. Retired names: Craft (free), Artisan, Professional, "Enter the Forge".
- **The Base44 app does not match yet (checked 28 Sep):** it shows three tiers, Craft €0 / Artisan €29 / Studio €79, using retired names, with no Business Pack and Studio at €79 instead of €89. Stripe price IDs in `base44/functions/createCheckout/entry.ts` are empty, so checkout refuses to start until they are created.
- Base44 `EARLY_ACCESS_MODE = true` until launch on 1 January 2027 (src/lib/launchConfig.js).

## 2. Product structure (agreed)
| Layer | Where | Role | Price |
|---|---|---|---|
| Website | latherforge.com (Vercel, this repo) | Get found: calculator, recipes, SAP chart, guides | Free |
| Full app | Base44 (app.latherforge.com planned) | Revenue: batches, costing, compliant labels, traceability, Etsy, AI | Free / €29 / €49 / €89 |

- Users buy LatherForge directly on the web (Stripe).

## 3. Built this session (branch `claude/keen-edison-5q3cdt`, not yet merged)
- ~~Free app at /app/ for Google Play~~ **Dropped 29 Sep:** no free app on Google Play. /app/ removed (redirects to /lye-calculator/); focus is marketing the Base44 app through the website's free tools.
- **Calculator page** retargeted to "soap calculator" (8,100 US searches/month vs 1,600 for "lye calculator"), grams/ounces, 7 FAQs, correct canonical.
- **46 oils** with SoapCalc SAP values. Fixed a safety bug: palm kernel was 0.190 (correct 0.156) and coconut 0.190 (correct 0.183).
- **16 soap recipes** at /soap-recipes/, hidden until approved (see docs/recipe-review.md).
- **SAP value chart** at /sap-values/.
- **Guides:** cure times, hot process, liquid soap, selling soap legally (Ireland/UK/EU).
- **SEO fixes:** the blog index inherited the homepage canonical; canonicals now match; auto-generated sitemap; OG image added.
- **Docs:** 5 short-video scripts, recipe review sheet.

## 4. Keyword data (DataForSEO, US monthly searches)
soap calculator 8,100 (difficulty 9) · soapcalc 4,400 · how to make soap 12,100 · cold process soap recipes 4,400 (difficulty 0) · soap recipes 2,900 · lye calculator 1,600 · soap lye calculator 1,000 · soap math formula 590 · sap values 320 · soap making software ~0 · soap pricing calculator ~50.
UK "soap calculator" is only 480, so the audience is mainly US.
Takeaway: search brings soap makers (recipes, calculators), not software buyers. They convert through the website's free tools, the waitlist and email.

## 4b. Done 28 September
- **Website:** Vercel Web Analytics (cookieless, enabled), /privacy/ and /terms/ pages, footer links, privacy link under the early-access form. Live on latherforge.com (PR #3). Contact address: latherforge@zohomail.eu.
- **Base44:** early-access users keep Artisan-level trial access until 15 Jan 2027, in both `useTier.js` and the four server functions that had their own 7-day trial checks (generateRecipeContent, exportData, generateEtsyListing, aiAssistant INCI). Checkpoint "Early access: keep Artisan trial until 15 Jan 2027". Not published.
- **TikTok:** @latherforge cleaned up (old nomad videos removed, LF logo). Personal account (Business needs company documents). First video "3 Lye Rules" posted, 77 views on day one. Plan: one video a day, captions use "latherforge.com" (no clickable bio link until 1,000 followers).
- **Search Console:** TikTok and YouTube channels added alongside latherforge.com.
- **Waitlist:** personal welcome emails sent 27 Sep to the existing sign-ups.

## 5. Competitor
"Soap Lye Calculator – Trace" (iOS) does calculation, batch logging and cure tracking. Check whether it's on Android before launch. LatherForge's difference: the Selling tab, and the path to the full business platform.

## 6. Open decisions
1. Which waitlist is real: the website's Zoho form or Base44's EarlyAccess page? One list only.
2. Pricing agreed (Free / €29 / €49 / €89). To do: decide what goes in Business Pack vs Studio, update the Base44 app to match, then create the Stripe prices before 1 Jan.
3. ~~Align the Base44 oil data with the website's~~ Done 27 Sep: Base44 now has the same 46 oils and SAP values as the website, and liquid soap allows for 90% KOH (it was about 11% short). Base44 checkpoint "Align oil data with website (46 oils), KOH 90% purity fix". Still to do: publish Base44, and add soap-quality figures (hardness, lather etc.) for the 31 new oils.
4. Base44 public URL (app.latherforge.com?).
4b. **Grant / social welfare:** confirm with the case officer (in writing) that free closed testing and pre-launch marketing are OK before publishing Base44 or taking any payment.
4c. **hello@latherforge.com** does not exist yet (latherforge.com is not a domain in Zoho Mail). Add it in Zoho Mail like podmove.ie, then switch `CONTACT_EMAIL` in `src/components/LegalPage.tsx`.
4d. **AI trial:** new users currently get the AI Assistant (Studio features) free for 7 days, although the tier notes say the trial excludes AI. Keep as a taster or remove.
4e. **Launch offer decided 27 Sep: 14 days free** (website copy changed from "3 months free"). People who joined the waitlist before 27 Sep were promised 3 months; decide whether to honour it (for example a Stripe coupon emailed at launch).
4f. **Base44 on 27 Sep (this session, not published):** plans page rewritten value-first; INCI label generator moved to the €29 plan (page and aiAssistant server check); Inventory, Products, Suppliers, Costing, Fragrance planner, Curing tracker, Batch calendar, Ingredient lots, Purchase orders, Stock requirements, Traceability/Reorder reports and Recipe generator locked to the €29 plan with an "Artisan" menu tag for free users. Tier names and the €49/€89 plans still need updating to the Brand Pricing Doctrine once pricing is final.
4g. **29 Sep:** decided no free app on Google Play. /app/, its Play Store images and listing removed; Google Play reminders (4 Dec, 25 Dec) cancelled.
5. Approve recipes in docs/recipe-review.md.

## 7. Dates
- Tue 29 Sep 2026, 3pm: pricing decision (reminder set). Recommendation: Starter / Craft Pack / Business Pack live, Studio shown as "coming soon" until teams and multi-channel exist, AI usage limits on Business Pack, founding-member price lock.
- December 2026: create the Stripe monthly EUR prices and send the price IDs for `createCheckout`; archive the old €39/€99 prices.
- 1 Jan 2027: Base44 launch (flip EARLY_ACCESS_MODE); website "early access" buttons change to sign-up
