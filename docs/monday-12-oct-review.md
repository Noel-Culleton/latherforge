# Monday 12 October review

Goal: leave the meeting with every launch-readiness decision made, so the Base44 work can be finished and checked.

## 1. Decisions to make (10 min)
| # | Decision | Recommendation |
|---|---|---|
| 1 | Plans | Starter (free) / Craft Pack / Business Pack (AI + wholesale sending) / Studio "coming 2027" (not buyable) |
| 2 | Prices per currency | EUR €29/€49/€89 · USD $29/$49/$89 · CAD C$39/C$65/C$119 · AUD A$45/A$75/A$139 · GBP £25/£42/£75 · NZD NZ$49/NZ$82/NZ$149 |
| 3 | Markets | US, Canada, Australia, UK, New Zealand, Ireland (South Africa dropped) |
| 4 | Waitlist | Pick one: Zoho (website) or Base44 EarlyAccess |
| 5 | Abandoned-checkout offer | 1st email no discount; 2nd email first month €15, or none |
| 6 | Free app at /app/ | Keep (close PR #2) or drop (merge PR #2) |
| 7 | January ad budget | See docs/jan-2027-ads-estimate.md (recommended €2,950 total, or lean €1,950 for US + Canada + retargeting) |

## 2. Check the Base44 work (15 min)
Saved as a checkpoint, not published; checkout still switched off.
- [ ] Upgrade page shows the right plans and the visitor's local currency price
- [ ] Studio shows "coming 2027" and can't be bought
- [ ] Settings and onboarding offer EUR, USD, CAD, AUD, GBP, NZD
- [ ] No hard-coded € left (AI Assistant, Etsy generator, ingredient lots, stock reports)
- [ ] "No VAT / sales tax" option for non-EU makers
- [ ] Labels say "EU/UK label rules"; no compliance claim for other countries
- [ ] "Manage billing" button present (works once Stripe billing page is set up)

## 3. Stripe dashboard (Noel, test mode)
- [ ] PayPal and Link switched on
- [ ] 3 prices created with 6 currencies each (Studio inactive)
- [ ] Stripe Tax on
- [ ] Smart Retries + failed-payment emails
- [ ] Receipt and invoice emails
- [ ] Customer billing page with cancellation offer and reasons

## 4. Website
- [ ] Publish latherforge.com from GitHub again (stop hand uploads)
- [ ] Merge recipes (PR #6), 14-day offer and blog posts into one release
- [ ] Meta Pixel ID + cookie consent banner

## 5. Before any money is taken
- [ ] Written OK from the grant case officer
- [ ] Accountant: UK VAT (from first sale), Stripe Tax registrations
- [ ] Full test-mode run: sign up → trial → pay → change plan → failed payment → cancel → recovery email

## 6. Next steps after the meeting
Assign owner and date for every unchecked box above.
