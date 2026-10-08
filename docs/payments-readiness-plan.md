# Payments readiness plan (6 Oct 2026)

Goal: everything ready to sell at launch, nothing buyable yet. `EARLY_ACCESS_MODE` stays on in Base44 until launch and the grant officer's written OK.

## Findings (checked 6 Oct)
- **Base44 checkout** (`base44/functions/createCheckout/entry.ts`): price IDs empty; card-only (`payment_method_types: ['card']`) blocks Link, PayPal, Apple/Google Pay; no 14-day trial; plans still Artisan €29 / Studio €79.
- **Webhook** (`stripeWebhook`): only handles paid and cancelled; no plan changes, past-due or failed payments.
- **No customer billing page** (cancel / change plan / update card).
- **Meta Pixel** ID is a placeholder in Base44 (`src/lib/metaPixel.js`); the website has no pixel and no cookie banner.
- **Two waitlists**: Zoho form on the website and Base44 EarlyAccess page.
- **Live website** is a hand-uploaded Vercel deploy (30 Sep), not `main`: /app/ and recipe pages return 404.
- **AI bots**: not blocked. Domain DNS is IONOS (not Cloudflare); no Vercel firewall rules; robots.txt allows all.
- **Meta Muse** pays via Stripe Link, saved card, Shop Pay or PayPal; US and Canada only so far.

## Stripe dashboard (Noel, test mode first)
1. Payment methods: turn on PayPal and Link.
2. Stripe Tax on; EU prices shown VAT-inclusive.
3. Smart Retries plus failed-payment and expiring-card emails.
4. Receipt and invoice emails with business details.
5. Customer billing page, with a cancellation offer (e.g. 50% off 2 months) and cancellation reasons.
6. December: create €29 / €49 / €89 monthly EUR prices (€89 inactive), archive old €39/€99.

## Base44 changes (Claude, checkpoint only, not published)
1. Plans: Starter (free) / Craft Pack €29 / Business Pack €49 (AI + wholesale sending) / Studio €89 "coming 2027", not buyable. Recommended: keep the hidden plan codes and add one for Business Pack.
2. Checkout: drop card-only, add 14-day trial, collect consent for offer emails, tick-box for the EU withdrawal waiver.
3. "Manage billing" button (Stripe customer billing page).
4. Webhook: handle plan changes, past-due and failed payments.
5. Abandoned checkout: on `checkout.session.expired`, email the recovery link (no discount). Optional 2nd email after 2 days with a small offer (suggested first month €15) via Zapier/email tool, only to people who ticked consent.

## Emails and wording (Claude to draft)
Checkout recovery, welcome, trial ends in 3 days, cancellation / win-back; refund and 14-day withdrawal section for the terms.

## Still to decide
1. Confirm the plan setup above.
2. Discount for the 2nd recovery email (suggested first month €15). Never below the founding-member price lock; one-off coupons with an end date.
3. Which waitlist is the real one.
4. Business Pack vs Studio feature split.

## Also pending
- Re-publish the website from GitHub; settle PR #2 (free app) and merge the open branches.
- Grant officer written OK before taking real payments.

## Countries and currencies (decided 8 Oct, target Mon 12 Oct)
Markets: US, Canada, Australia, UK, New Zealand, Ireland. South Africa dropped.

Proposed prices (awaiting Noel's OK):

| Currency | Craft Pack | Business Pack | Studio (coming 2027) |
|---|---|---|---|
| EUR | €29 | €49 | €89 |
| USD | $29 | $49 | $89 |
| CAD | C$39 | C$65 | C$119 |
| AUD | A$45 | A$75 | A$139 |
| GBP | £25 | £42 | £75 |
| NZD | NZ$49 | NZ$82 | NZ$149 |

Scope for Monday: (1) Stripe multi-currency prices + upgrade page shows local price; (2) in-app currencies add CAD/AUD/NZD, replace hard-coded € (AI Assistant, Etsy generator, lots, stock reports), add "no VAT / sales tax" option; (3) label note "rules: EU/UK" — country label rules later.
Tax: UK VAT from first sale for non-UK sellers; others above thresholds. Stripe Tax on; accountant before launch.
