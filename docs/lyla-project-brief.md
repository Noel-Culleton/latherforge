# Ask Lyla — Project Brief

LatherForge's AI assistant for handmade soap makers.
Status: decided 11 Oct 2026. Build starts Monday 12 Oct 2026.

---

## 1. What Lyla is

- **Name:** Lyla, named after lye, the one ingredient every bar of soap needs.
- **Spelling:** always **Lyla**. Never Lila or Leila.
- **Where she lives:** inside the LatherForge Base44 app (the agent already exists).
- **Who she is for:** handmade soap makers, from first batch to first sale.
- **What she covers:** recipes, oils, fragrance and flavourings, troubleshooting, pricing, Etsy and market selling, marketing and UK/EU compliance.

## 2. Decisions already made

| Decision | Choice | Why |
|---|---|---|
| Scope | **Soap only** for now | Keeps the LatherForge brand focused, and soap expertise is the edge over ChatGPT |
| Other crafts | Later, candles first, as an add-on to the same Lyla | Same buyers, similar maths. Only after soap users are paying |
| Name | **Lyla** | Instantly reads as soap. Doubles as a story hook |
| Launch offer | **14 days free** from launch day (1 Jan 2027) | Matches the pricing doc. "3 months free" has been removed everywhere |
| Claim in marketing | "The AI built only for soap makers" | Defensible. Do **not** say "the only AI agent" (untrue, and Meta ads reject unprovable "only" claims) |

## 3. Positioning lines

- **Main:** "Ask Lyla: the AI built only for soap makers. From your first batch to your first sale."
- **Versus ChatGPT:** "ChatGPT knows soap. Lyla knows your soap business."
- **Intro line:** "Meet Lyla, named after lye, the one ingredient every bar needs."

## 4. Lyla's core rules

Paste these into the Lyla agent instructions in Base44.

1. Only answer questions about soap making and running a handmade soap business. Politely decline anything else.
2. **Never invent lye or water amounts.** For any lye calculation, send the user to the LatherForge Soap Calculator (latherforge.com/lye-calculator) or use the app's calculator data.
3. Always include a short safety note on any answer involving lye: gloves, goggles, ventilation, add lye to water, keep away from children and pets.
4. For compliance (CPSR, labelling, INCI, US rules), give general guidance and say it is not legal advice. Point to the official regulation or a qualified safety assessor.
5. For marketing questions, give output the user can use straight away: Etsy listing copy, a Facebook post, a market-stall sign, a call to action.
6. For pricing questions, use the user's real costs and the LatherForge Etsy Pricing Calculator.
7. Keep answers short and practical. Use steps and lists.
8. If unsure, say so. Never guess on safety.
9. End every answer about lye or compliance with: "Double-check this before you make soap. Lyla can get things wrong."

### Mistakes disclaimer (decided 11 Oct 2026)

Lyla can give wrong answers. The disclaimer is a backup to rule 2 and testing, not a replacement.

- **Under the Ask Lyla box (always visible):** "Lyla is an AI assistant and can make mistakes. Always check lye and water amounts with the LatherForge Soap Calculator and wear gloves and goggles. Compliance answers are general guidance, not legal advice."
- **First use (one-tap acknowledgement):** "I understand Lyla is an AI assistant and can make mistakes."
- **Report button:** thumbs-down / "Report a wrong answer" on every reply. Log reports and fix weekly.
- **Terms of Service:** add the same disclaimer.
- Marketing copy still avoids "AI-powered", but the disclaimer must say Lyla is an AI assistant (honesty and EU AI Act transparency; confirm current timing before launch).

## 5. What to load into Lyla (knowledge)

| Source | OK to load? | Priority |
|---|---|---|
| Soap FAQ written from real Facebook group questions (target 50) | ✅ Ours | **1st** |
| LatherForge blog posts, recipes, SAP value chart, calculator logic | ✅ Ours | 2nd |
| EU/UK cosmetics rules (CPSR, labelling, INCI) | ✅ Public law | 3rd |
| Pricing, Etsy and marketing playbooks we write | ✅ Ours | 4th |
| Supplier data sheets and oil properties | ✅ Check each supplier's terms | 5th |
| Published soap-making books | ❌ **Do not upload** (copyright risk) | Read them, then write our own notes |

A small, well-organised knowledge base beats a large pile of text.

## 6. Monday build (12 Oct 2026)

### Before building
- [ ] Merge branch `claude/stoic-dijkstra-wfz9d8` so the 14-day fix is live
- [ ] Test Lyla with 20–30 real soap questions (lye, superfat, labelling). Log wrong answers
- [ ] Get the Lyla link from Base44 and confirm whether logged-out visitors can use her

### Early-access page (`latherforge.com/early-access`)
- [ ] "Ask Lyla" box at the **top** of the page
- [ ] **3 free questions**, then: "Join the waitlist to keep asking Lyla"
- [ ] Waitlist form directly underneath
- [ ] Safety disclaimer under the box

### App
- [ ] Small "Ask Lyla" square at the top of the app
- [ ] Same rules and disclaimer as above

### Build options
- **A (preferred if possible):** embed the Base44 Lyla, if Base44 allows public, logged-out access
- **B (fallback):** a small chat built directly on the LatherForge site using the same rules. More work, but full control over the 3-question cap and cost

## 7. Facebook launch (after Lyla is live and tested)

| Step | Action |
|---|---|
| 1 | Intro post: "Meet Lyla, named after lye…" with a link to /early-access |
| 2 | Weekly "Ask Lyla" post: a real soap question plus a screenshot of Lyla's answer |
| 3 | Add "Ask Lyla" to the daily country posts already running |
| 4 | Track: questions asked, waitlist sign-ups from Lyla, and cost per answer |

## 8. Risks and how we handle them

| Risk | Handling |
|---|---|
| Wrong lye answer goes public | Lye amounts only from the calculator. Test before promoting |
| AI credit costs from free Facebook traffic | 3-question cap from day one |
| Copyright | No published books in her knowledge |
| Compliance liability | "Not legal advice" note, and point to the official rules |
| Misspelling (Lila, Leila) | Always write "Lyla". Use the lye intro line |
| Brand stretch to other crafts | Soap only until soap users are paying |

## 9. Phase 2: Lyla reads your own data (after launch)

Decided 11 Oct 2026. Built step by step as real users start using the app, not before launch.

**Why:** a general soap Q&A box is easy to copy, and ChatGPT already does it for free. Lyla that uses the user's own recipes, costs and batches is something ChatGPT and the free calculators can't do. This is the line that matters: "ChatGPT knows soap. Lyla knows your soap business."

| Step | Lyla can answer | Uses the user's |
|---|---|---|
| 1 | "What does each bar of this recipe cost me?" | Recipes + ingredient costs |
| 2 | "Lavender oil went up 20%. What happens to my margin?" | Costs + prices |
| 3 | "Which batches are ready to sell this week?" | Batches + cure dates |
| 4 | "What am I running low on?" | Inventory |
| 5 | "Is this label right for the UK/EU?" | Recipe + compliance rules |

**Rules for Phase 2**
- Free 3-question demo on /early-access stays general (no user data).
- Data-connected Lyla is for logged-in users only, and only ever reads that user's own records.
- Add one step at a time, in the order users actually ask for. Log what paying users ask Lyla most and build the next step from that.
- Lye amounts still come only from the calculator, even with user data.

**Positioning:** "the soap business system with a built-in soap expert", not "an AI chatbot".

## 10. Success check (first 30 days live)

- Share of visitors who ask Lyla at least one question
- Share of Lyla users who join the waitlist after 3 questions
- Number of wrong or unsafe answers found (target: zero on lye)
- Average cost per conversation

If people use Lyla but don't join the waitlist, fix the waitlist offer before spending more on Lyla.
