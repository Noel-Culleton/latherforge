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
