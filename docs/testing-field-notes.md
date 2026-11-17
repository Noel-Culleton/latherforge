# LatherForge — confidence in your craft, control of your business

Four promotional article drafts grounded in historical development records. Image concepts use staged promotional photography.

## Your soap deserves a calculator that gets challenged

**Confidence in every calculation starts with asking difficult questions.** You spend money on ingredients and time on every batch. LatherForge takes the figures behind your craft seriously. Our development process includes checking expected results and deliberately introducing an error to see whether the tests catch it.

A calculator can return a precise-looking answer even when someone has copied a number incorrectly. We wanted to know whether the LatherForge tests would notice that mistake before a software change reached a maker.

The team deliberately changed one olive-oil SAP value in the code from 0.190 to 0.109. Eight tests failed. Those numbers describe an edit to the software's reference data. They are not mixing instructions.

Why did the tests catch it? Part of the suite used reference figures entered separately from the calculator's own data. Other checks exercised complete recipes with expected results. An edit could therefore break both a reference check and a recipe calculation. Eight failures describe the effect of one deliberate change, not eight defects found in production.

For a maker choosing a calculator, a fair question is “Would its tests still pass if a developer mistyped an oil value?” For this particular edit, the historical answer is clear. The original pull request records 50 passes with the intended data and eight failures with the altered value. Physical batch performance is a separate question.

[Original test record](https://github.com/Noel-Culleton/latherforge/pull/9) · [Explore the oil reference chart](https://latherforge.com/sap-values/)


**Give your soap business the attention your craft deserves.** Join early access to follow the development of LatherForge's business tools for makers.

[Explore LatherForge](https://latherforge.com/) · [Join early access](https://latherforge.com/early-access/)

## Your next batch starts with LatherForge

**Choose a recipe. Open the calculator. Keep creating.** LatherForge brings published recipes into its calculator so you can move from inspiration to working with a formula. We tested that connection because the small details matter when you are planning your next batch.

Opening a saved formula should save a maker the trouble of typing the oils again. It also creates a handoff worth testing. A recipe page can look right while passing the wrong preset to the calculator.

For one LatherForge release, a browser test opened the calculator using each of the 13 approved recipe identifiers. All 13 prefilled the expected sodium hydroxide result. The team also tried hidden draft identifiers and checked that they did not load a preset. This exercised the route a visitor actually takes, beyond checking the calculation in isolation.

The review uncovered a second issue. Although the draft pages were hidden, their recipe data still travelled to the browser. The site was changed to pass only reviewed presets, and the team searched the generated files for draft-specific text. A regression test was added to catch code changes that would pull the full list back into browser components.

For makers, this history answers two practical questions about that release. The reviewed presets opened with their expected results, and an unpublished formula stayed out of the generated site. Neither check assessed a cured bar.

[Browser and build checks](https://github.com/Noel-Culleton/latherforge/pull/10) · [Open the calculator](https://latherforge.com/lye-calculator/)


**Give your soap business the attention your craft deserves.** Join early access to follow the development of LatherForge's business tools for makers.

[Explore LatherForge](https://latherforge.com/) · [Join early access](https://latherforge.com/early-access/)

## Beautiful soap deserves a price that respects your work

**You make beautiful soap. Are you making a profit?** Ingredients, packaging and selling fees all have to come out of the price you charge. LatherForge's pricing tools help you examine the numbers behind a sale. The history below shows why we keep reviewing those numbers.

Take a €12 sale with €5 shipping. Before a November 2026 correction, the LatherForge Etsy calculator estimated €2.27 in fees for the Irish example. After the correction, it estimated €2.79. That 52-cent difference comes straight out of the amount a seller might think is available for ingredients, packaging and their own time.

The team compared the same example across markets. The estimate for a UK shop without VAT registration moved from £2.15 to £2.67. The US example stayed at $2.07. Holding the order values steady made the effect of changing the country-specific fee assumptions visible.

For a maker using a pricing tool, this is a simple check to repeat. Keep an order receipt, enter the same item price and shipping charge, then compare individual fees against the estimate. A mismatch is easier to investigate when you can identify the fee line and the country setting.

These are historical example outputs from the November change. A current estimate depends on the applicable fee schedule and shop settings.

[Original before-and-after figures](https://github.com/Noel-Culleton/latherforge/pull/15)


**Give your soap business the attention your craft deserves.** Join early access to follow the development of LatherForge's business tools for makers.

[Explore LatherForge](https://latherforge.com/) · [Join early access](https://latherforge.com/early-access/)

## Crafted with care. Reviewed with purpose. Meet LatherForge

**A growing soap business deserves care behind the scenes as well as at the workbench.** LatherForge's recipe library is developed with recorded review decisions. Here is how one familiar ingredient, honey, changed a publishing decision and prompted further questions.

Two recipes can share an oil blend and still need different evidence. During review of LatherForge's oatmeal and honey formula, the arithmetic could be checked against the supplied oil values. That calculation could not tell us how the honey version would behave in the mould.

The editorial decision was to publish an oatmeal-only version on the same AI desk-review basis as the existing recipes. The honey version remained a draft pending a physical batch. The review record identifies the observations still needed, including heat, texture, unmoulding and the result after cure.

There was also a publishing check. The build produced the oatmeal recipe page, included it among the calculator presets and listed 14 recipes in the sitemap. A search of the generated output found none of the honey draft's identifying text.

This gives a maker a way to read our evidence. A calculator check answers a question about the formula as entered. A build check shows which recipe a visitor can reach. A batch record would answer what happened in the workshop. For this release we have the first two records, and the honey decision remains documented for follow-up.

[Editorial decision and build results](https://github.com/Noel-Culleton/latherforge/pull/11)


**Give your soap business the attention your craft deserves.** Join early access to follow the development of LatherForge's business tools for makers.

[Explore LatherForge](https://latherforge.com/) · [Join early access](https://latherforge.com/early-access/)
