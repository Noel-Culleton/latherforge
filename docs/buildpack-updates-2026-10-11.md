# LatherForge — Build Pack Updates, 11 Oct 2026

Addendum to `claude/latherforge-procurement-traceability-buildpack.md` and `claude/latherforge-stock-etsy-label-buildpack.md`. Read alongside them; where this conflicts, this wins.

# Part A — Procurement & traceability build pack

---

## Snap & fill (Lyla) for suppliers and catalogue

**Decided 11 Oct 2026, starts Monday 12 Oct.** Full context in `claude/latherforge-ask-lyla-project-brief.md` (sections 6, 6b).

**What:** user drops a screenshot, invoice or photo → Lyla drafts a `Supplier` and its `SupplierItem` rows → user reviews every field → taps Approve. Nothing is written until Approve.

**Why now:** this is the fastest way to close outstanding input #4 above (supplier item codes and real pack sizes on the 18 `SupplierItem` rows), and it gives every user the same shortcut.

**Fields Lyla may fill (draft only):**
- `Supplier`: name, address, email, phone, website, `default_currency`
- `SupplierItem`: `supplier_item_name`, `supplier_item_code`, `purchase_uom`, `purchase_uom_description`, `pack_size`, `unit_quantity`, `unit_uom`, `base_price`, `currency`

**Rules that must hold:**
- Draft → review → Approve. No auto-save, no auto-update of an existing `base_price` (same rule as W6: never silently overwrite price history). If the item already exists in that supplier's catalogue, show old vs new and let the user choose.
- `conversion_factor` stays **derived**, never read from the image. Volume → mass still needs a real `density_g_per_ml`; never default one from an invoice.
- Highlight low-confidence fields and anything unit/currency-sensitive (5 kg vs 0.5 kg, € vs £ vs $, ml vs g).
- `InventoryItem` link: Lyla proposes a match by name; ambiguous matches go to the user, same pattern as W9.
- Uploaded image is sent to the AI provider to be read and not stored unless the user saves it. Privacy policy needs this line.

**Monday steps (discuss-first protocol):**
1. `read_file` the current `Supplier.jsonc` and `SupplierItem.jsonc` (never `update_entity_schema` on this app)
2. Agree the field list above with Noel
3. Staged build prompts: (1) upload + draft + review screen, (2) UX polish, (3) edge cases
4. Test on Noel's real supplier invoices

**Later (not this pass):** snap & fill for goods receipts (invoice → GRN draft lines with actual prices and lot numbers), customer orders and batch sheets.

**Change to NOT IN SCOPE:** "Any external channel sync" stays out of this build, but is now on the Lyla roadmap as "connect my platforms" (Etsy first via its own API approval, then Shopify), replacing Make.com later.

**Exports:** PO and GRN print stay as built. Branded PDFs and traceability/recall report exports follow the plan-tier table in the Lyla brief (section 6d).

# Part B — Stock pools / Etsy / label build pack

---

## direction for Etsy sync

- The Make.com scenario above remains the **interim** route, for Noel's own shop and early users.
- Long-term direction (Lyla roadmap, `claude/latherforge-ask-lyla-project-brief.md` section 6b): a native **"Connect Etsy"** sign-in inside LatherForge so users never touch API keys or Make.com, then Shopify and others.
- **Action now:** apply for Etsy API (Open API v3) commercial access early. Approval can take weeks and is outside our control. Build the native connection after launch.
- The "customer imports the Make.com template and pastes their Base44 API key" Studio plan above is superseded by the native connection once Etsy approves the app. Do not build customer-facing Make.com onboarding.
- Label generator (section 3): branded label and INCI PDF exports are Business Pack and up, per the export table in the Lyla brief (section 6d). Still never claims compliance.

# Part C — Automatic orders and customers (decided 11 Oct 2026)

**Screenshots are out for orders** (people forget). Orders must arrive with no daily effort from the maker.

## How orders arrive
1. **Order email forwarding (launch target):** each user gets their own LatherForge order address. They add it once to their Etsy / Shopify / website order notifications. Works for any platform that emails order notifications. No platform approvals needed.
2. **File upload:** CSV/Excel export, for catching up on past orders and bulk history.
3. **Direct connections (later):** "Connect Etsy" after Etsy API approval; Shopify / WooCommerce only when paying users ask.

Snap & fill stays for **supplier invoices only** (occasional, sit-down tasks).

## What each order does automatically
- Records the sale: date, channel, products, quantities, prices.
- **Reduces stock** (this replaces the Sep 2026 "log sales only" importer decision). Confident product matches apply straight away and land in a "Today's orders" list with **Undo** (undo = reversing movement, never an edit). Uncertain matches (new product, unclear match, odd quantity) wait in "Orders to check" on the dashboard and in a daily email.
- Adds or updates the **customer**: new buyer = new record; repeat buyer matched by email (then name) and order added to their history.
- Feeds reports: sales by channel, best sellers, repeat customers, sales by country, monthly totals.
- Links each sale to the batch it came from where known (recall / forward traceability).

## Customer data rules (GDPR)
- The maker is the controller; LatherForge is the processor. Add a data processing agreement to the Terms and a privacy policy line.
- Store only: name, email, town/country, order history. Full postal address only when the maker needs it (e.g. wholesale).
- **No marketing use.** Order data is for records, reporting and recall. Purchasing is not newsletter consent, and Etsy's terms restrict buyer data use. No mailing lists from imported customers unless the customer opted in separately.
- Maker can delete a customer's data on request from inside LatherForge.

## Product matching (the weak point)
- Match on SKU first, then exact name, then fuzzy name (fuzzy never auto-applies).
- Onboarding step: help makers set matching SKUs/names on their shop and in LatherForge.

## Plans
- Order address included on every plan, not an add-on (buying-simplicity rule). Starter capped (~20–30 auto-imported orders/month); higher limits per tier; Business Pack+ allows several shops on one address. Final limits set after a real cost test (email receiving + AI read per order).

## Before building — check first
- [ ] Can Base44 receive inbound email? If not: an inbound email service or Make.com/Zapier mailhook passes emails in.
- [ ] Collect one real order email each from Etsy, Shopify and a website shop to test parsing.
- [ ] Decide the order address format, e.g. name@orders.latherforge.com (needs DNS/MX on a subdomain at IONOS).

# Part D — Base44 usage budget and tracking (decided 11 Oct 2026)

**Budget assumption:** ~20,000 Base44 interactions for ~€100/month (Noel's plan figure). Confirm exactly which actions count (AI calls, emails sent, file uploads, inbound email) on the current Base44 plan.

## Estimated monthly use per paying customer (estimates, test after launch)

| What | Typical | Busy |
|---|---|---|
| Lyla questions | 40 | 100 |
| Order emails read by AI | 50 | 200 |
| "Orders to check" emails | 20 | 30 |
| Supplier invoice snap & fill | 5 | 15 |
| Other AI tools (recipes, listings, pricing) | 20 | 50 |
| Reminder emails (cure, low stock) | 10 | 20 |
| **Total** | **~150** | **~400** |

**Planning rule:** ~200 interactions per paying customer per month. 100 customers ≈ 20,000 (at the limit). Free Starter users and the early-access Lyla demo come on top (est. +2,000–5,000). Move up a Base44 tier at ~120–150 paying customers or if demo traffic spikes.

## Track usage from day one (must build)
- New entity **`UsageLog`**: `user_id`, `date`, `action_type` (enum: `lyla_question`, `order_email_ai_read`, `order_email_pattern_read`, `invoice_snap`, `ai_tool`, `email_sent`, `demo_question`), `plan`, `credits_used` (number, default 1).
- Write one row every time an AI call or email is made (backend function, not the frontend).
- **Admin usage page (Noel only):** credits this month vs budget, by action type, by plan, top 10 heaviest users, demo questions this week, projected month-end total.
- **Alerts:** email Noel at 70% and 90% of the monthly budget.
- **Per-user caps by plan,** enforced from `UsageLog` counts: Lyla questions per month and auto-imported orders per month (Starter lowest). Demo: 3 questions per visitor.

## Keep usage down
1. Read Etsy / Shopify order emails with fixed pattern rules first (no AI credit); use AI only when the pattern fails. Biggest saving.
2. Send "orders to check" only when something needs checking, never a daily empty email.
3. Review usage weekly for the first 8 weeks after launch, then monthly. Set final plan caps from real data, not these estimates.

# Part E — Usage limits and top-ups (decided 11 Oct 2026)

## Limits (build for launch, using `UsageLog` counts from Part D)
- **80%:** in-app notice + email: "You've used most of this month's Lyla and auto-import allowance."
- **100%:** pause AI extras only: Lyla questions, AI reading of non-standard order emails, invoice snap & fill.
- **Never pause:** recording sales, stock updates, batches, recipes, the lye calculator, order emails read by pattern rules (no AI credit). Stopping these would corrupt the maker's records.
- Orders that need AI after the cap go to "Orders to check" for manual confirmation. Nothing is dropped.
- Allowance resets on the 1st of each month.

## At the limit, offer
1. **Upgrade (launch):** "Move to Business Pack for 3× the allowance." Primary path, consistent with the one-plan rule.
2. **Top-up (after launch):** one option only: "Extra 500 credits — €5, this month only." Stripe one-off payment. Shown only at the limit, never listed as a product on the pricing page (keeps the buying-simplicity rule: no packs).
3. **Wait** for the monthly reset.

## Economics
- Cost ≈ €0.005 per credit (€100 / 20,000). 500 credits ≈ €2.50 cost, sold at €5.

## Hospitality
- First time a paying customer hits the limit: automatic one-off free boost of 200 credits ("added on us this month"). Cost ≈ €1. Once per customer.

## Admin
- Usage page (Part D) shows who is at 80% / 100%, top-ups bought and free boosts given.

# Part F — Morning check and substitutes (decided 11 Oct 2026)

## Morning check (rule-based, no AI credits)
- Scheduled daily run (confirm Base44 scheduled automations on current plan; else Make.com/Zapier schedule calls a backend function).
- Checks: (1) stock vs planned batches and open orders, reusing the W10 shortage logic; (2) items below reorder level; (3) finished bars vs open orders.
- Sends ONE summary email/in-app notice only when something needs attention. No empty emails.
- Logs to `UsageLog` as `email_sent` (confirm whether Base44 counts it).

## Substitutes — rules by type (safety-critical)
| Short item | Substitute offer | Rule |
|---|---|---|
| Packaging, labels, boxes | Yes | Approve → deduct substitute stock, record on the order/batch |
| Oils and butters | Only via recalculation | Swap creates a NEW RecipeVersion through the lye calculator before the batch. Never a plain stock swap (different SAP values = wrong lye = caustic soap) |
| Fragrance / essential oils | Only from a maker-approved list per product | Fragrance changes allergens, labels and the safety assessment. Offer only swaps the maker has marked as covered by that product's assessment (EU/UK) |
| Finished bars for a customer order | Suggest only | Maker contacts the customer first; no automatic swap |

## On approval
- Original item's stock untouched; substitute's stock reduced via normal movements.
- `BatchIngredientUsage` records the actual substitute item, lot and a `substitution_reason`; batch links to the new RecipeVersion for oil swaps.
- Cost per bar and label data follow the actual ingredients used.
- Nothing is swapped without approval.

## Data needed
- `InventoryItem`: optional `approved_substitutes` (list of item ids) set by the maker.
- `Product`: `approved_fragrance_substitutes` (list) — only items covered by its safety assessment.
- `BatchIngredientUsage`: add `is_substitute` (boolean), `substituted_for_item_id`, `substitution_reason`.

## Later
- Connected Google Drive folder: maker drops order export files in; LatherForge imports them automatically (rule-based, no AI credit). Build after the email route works.

# Part F — Morning check (decided 11 Oct 2026)

**No substitutes.** LatherForge does not offer or apply ingredient, fragrance, packaging or product substitutes. It reports shortages; the maker decides what to do.

## Morning check (rule-based, no AI credits)
- Scheduled daily run (confirm Base44 scheduled automations on current plan; else a Make.com/Zapier schedule calls a backend function).
- Checks: (1) stock vs planned batches and open orders, reusing the W10 shortage logic; (2) items below reorder level; (3) finished bars vs open orders.
- Sends ONE summary email/in-app notice only when something needs attention. No empty emails.
- Each shortage links to the existing review-then-commit purchase order flow (W10), so the maker can reorder in a few taps. Nothing is ordered or sent automatically.
- Logs to `UsageLog` as `email_sent` (confirm whether Base44 counts it).

## Later
- Connected Google Drive folder: maker drops order export files in; LatherForge imports them automatically (rule-based, no AI credit). Build after the email route works.

# Part G — "Needs attention" orders (decided 11 Oct 2026)

LatherForge never suggests other stock. The maker resolves each problem order by hand.

## One list: Needs attention
- Every problem order goes here: short stock, product not recognised, unclear quantity.
- Visible on the dashboard and in Orders, with a count badge.
- Stays out of the customer file, sales reports and stock until resolved.
- Orders with no problem flow through automatically as before.

## Three buttons per problem line (each line approved one at a time)
| Button | Result |
|---|---|
| **Wait** | Becomes a back order and stays on the list. Stock deducted when the maker marks it made |
| **Cancel** | Nothing recorded, no stock change |
| **Change to…** | Maker picks the new product from their own list. That product's stock is deducted; the line shows "Changed: [original] → [new]" on the order, the customer's history and the stock movement |

On approve, customer file, sales and stock update together.

On Cancel or Change, show: "Remember to also update or refund this order in Etsy / Shopify / your website."

## Customer message: copy, don't send (launch)
- After each choice, show a ready-written message (back order / cancellation / product change) with a **Copy** button.
- Maker pastes it into Etsy Messages, Shopify or their own email. Works for every channel, respects Etsy's buyer-contact rules, no email setup, no credits. The maker sending it is the approval.
- Later: Approve & send from LatherForge for website and Shopify orders only.

## Morning triage
- Morning check (Part F) opens with "Needs attention: X orders", oldest first, with days waiting. Sent only when the list isn't empty.
- Prevention line in the same check: "Low stock — reduce the quantity on your Etsy/Shopify listing for [product] ([n] left)." Reminder only. Automatic shop updates come later with direct connections.

## Data
- Order `status`: `needs_attention`, `complete`, `back_order`, `cancelled`.
- Order line: `line_status` (`ok`, `short`, `unmatched`, `back_order`, `cancelled`, `changed`), `original_product_id`, `changed_to_product_id`, `resolved_at`.
- Stock never pushed below zero by an order.

# Part H — Lye calculator fundamentals (Monday 12 Oct, before any new feature)

Checked 11 Oct 2026 against the website calculator (`src/lib/soap.ts`):
- SAP table (46 oils) matches an independent published supplier table within ±2–3% (normal batch variation, covered by superfat). Palm kernel 0.156 NaOH confirmed.
- Formula correct; 6 reference recipes (NaOH and KOH, 0–20% superfat) correct to 0.1 g; KOH 90% purity correct; superfat limited to 0–20%.

## Must fix
1. **Website and Base44 app disagree.** Lavender Oatmeal (200 olive / 125 coconut / 75 shea / 50 sweet almond / 50 castor, 5% SF): website 69.2 g NaOH, Base44 stored recipe 68.6 g. Find the cause (superfat or SAP table) and use ONE shared SAP table and formula everywhere (website, app, Lyla, snap & fill, oil-swap recipe versions).
2. **Unknown oil name silently counts as 0 g lye.** Must stop with "Oil not recognised — choose from the list." Never calculate with a missing SAP value. Map inventory names (e.g. "Olive Oil (Extra Virgin)", "Coconut Oil (76°F)") to SAP entries explicitly.
3. **Negative weights accepted.** Reject any weight ≤ 0 (except an empty row, which is ignored).

## Daily automatic check (after fixes)
- Reference recipes (the 6 above + Lavender Oatmeal) run through BOTH calculators daily and after every code change. No AI credits.
- Email Noel immediately if any result changes or the two calculators differ by more than 0.1 g.
- Public wording only once the check is running: "Every lye calculation uses published SAP values and is tested automatically against reference recipes every day." Keep the safety note: the check proves the maths, not the maker's scale.
