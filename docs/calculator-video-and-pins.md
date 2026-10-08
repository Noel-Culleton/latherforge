# Calculator video, Short and Pinterest pins

Target page: https://latherforge.com/lye-calculator/
Target keyword: "soap calculator" (8,100 US searches/month, difficulty 9, from the 28 Sep keyword data).

## Who makes what

| Piece | Made by | Why |
|---|---|---|
| Screen recording of the calculator | Recorded automatically by Claude from the real site (headless browser, 1080p, no filming) | AI video garbles UI text and numbers. A tutorial has to show the real tool. |
| Voiceover | ElevenLabs, from docs/calculator-voiceover.txt (one clip per section, placed at its start time) | Spoken-form text, numbers written out. |
| Presenter intro (optional) | HeyGen avatar, 15 to 20 seconds, using the 0:00 hook | Keeps the video human without filming. Label it AI-generated. |
| Bench b-roll (weighing oils, pouring) | Optional. Noel's clip library, or Google Flow clips | Soap makers spot fake pours, so keep it short. |
| Thumbnail background and pin backgrounds | Google Flow (images) | Hero shots are where AI is safest. Text is added in Canva, never by the AI. |
| Script, title, description, pinned comment, Short, pin copy | This doc | Done. |

Google Flow does NOT make the main video.

## Verified demo numbers (run through src/lib/soap.ts)

- 700 g olive oil + 300 g coconut oil (76°), NaOH, 5% superfat: **141.9 g lye, 283.9 g water, 1000 g total oil**.
- 1000 g olive oil only, NaOH, 5% superfat: **128.3 g lye**.
- Water is fixed at 2 x the lye amount in this calculator.
- The Method buttons (cold/hot) are labels only. They do not change the lye amount.
- KOH uses 90% purity.

## Long video: "How to Use a Free Soap Calculator (Step by Step)"

Length target: 6 to 7 minutes. Screen recording at 1080p, browser zoomed to 125%.

**0:00 Hook (15s)**
"If you've ever looked at a soap recipe and wondered how much lye to use, this is for you. In the next six minutes I'll show you, step by step, how to use a free soap calculator to get your lye and water right, and the three mistakes that catch beginners out."
Screen: calculator page, empty.

**0:15 What a soap calculator does (30s)**
"Every oil needs a different amount of lye to turn into soap. Coconut oil needs more than olive oil. A soap calculator does that maths for you. You give it your oils and weights, and it gives you the lye and water."

**0:45 Safety first (30s)**
"Lye is caustic. Wear gloves and eye protection, work somewhere ventilated, and always add lye to water, never water to lye. Keep kids and pets out of the room."
Screen: the safety reminder box on the results panel.

**1:15 Step 1: pick your lye (40s)**
"Step one. Lye type. NaOH is sodium hydroxide, for solid bars. KOH is potassium hydroxide, for liquid soap. For bar soap, choose NaOH."
Screen: click NaOH, then KOH, then back to NaOH.
"Method says cold or hot process. In this calculator it only labels your result. The lye amount is the same either way."

**1:55 Step 2: units (20s)**
"Pick grams or ounces. I recommend grams. They are more precise, and you should always weigh your ingredients, never measure by volume."

**2:15 Step 3: superfat (50s)**
"Superfat is the percentage of oil left unreacted, so your soap is milder and you have a safety margin. Five percent is standard for most bars."
Screen: drag the slider 0, 5, 20.
"Zero is a full cleanse and can be harsh. Twenty is very mild and can be soft. Stay at five if you're unsure."

**3:05 Step 4: add your oils (60s)**
"Now your oils. Pick the oil, then type the weight. I'll use 700 grams of olive oil and 300 grams of coconut oil. Need more oils? Click Add Another Oil."
Screen: select Olive Oil, type 700. Select Coconut Oil (76°), type 300.

**4:05 Step 5: calculate and read the result (60s)**
"Click Calculate Lye. Here's the result: 141.9 grams of NaOH, 283.9 grams of water, from 1000 grams of oil at 5% superfat."
Screen: highlight lye and water on the results panel.
"Weigh the lye and the water exactly. Add the lye to the water, stir, and let it cool before you mix it into your oils."

**5:05 Step 6: change an oil, recalculate (45s)**
"Here's the mistake that catches people. If you change an oil, you must recalculate. Watch. Same 1000 grams, but all olive oil: 128.3 grams of lye. That's different from 141.9. Use the old number and your soap will be too harsh or too soft."
Screen: remove coconut, set olive to 1000, click Calculate.

**5:50 Check before you pour (30s)**
"Before you pour, check your weights twice. If you're new, run the recipe through a second calculator and confirm the numbers match. This tool is a guide, and you're responsible for your own batch."

**6:20 Recap and outro (30s)**
"To recap: pick your lye, choose grams, set your superfat, add your oils and weights, calculate, and recalculate every time you change something. The calculator is free, with no signup, and the link is in the description. If you want to save recipes and track batches, we're building LatherForge for that. Which oils are you using? Tell me in the comments."

Do not claim the soap is "safe". Say what the calculator does and tell people to double-check.

## YouTube upload text

**Title (under 70 characters):**
How to Use a Free Soap Calculator (Step by Step)

**Description** (replace the chapter times with the real ones after editing, and start with 0:00):
```
A step-by-step guide to using a free soap calculator to get your lye and water right for cold process and hot process soap. No signup needed.

Free soap calculator: https://latherforge.com/lye-calculator/

In this video:
0:00 Why you need a soap calculator
0:45 Safety first
1:15 Step 1: Choose NaOH or KOH
1:55 Step 2: Grams or ounces
2:15 Step 3: Superfat
3:05 Step 4: Add your oils
4:05 Step 5: Read your lye and water
5:05 Step 6: Change an oil and recalculate
5:50 Check before you pour
6:20 Recap

Wear gloves and eye protection, work somewhere ventilated, and always add lye to water. This video is not professional advice. Check your own recipe and the cosmetics rules where you sell.

New soap making video every Thursday.

#soapmaking #coldprocesssoap #soapcalculator
```

**Pinned comment:**
```
Free soap calculator (no signup): https://latherforge.com/lye-calculator/
Which oils are you using in your next batch? 👇
```

**Tags:** soap calculator, lye calculator, how to use a soap calculator, cold process soap, soap making for beginners, handmade soap, superfat, NaOH, soapmaking

## Short (30 to 40s), cut from the long video

Use the Step 6 segment.
- HOOK (0 to 3s): "Change one oil and your lye amount changes."
- (3 to 10s) Screen: 700 g olive + 300 g coconut, 5% superfat. "This recipe needs 141.9 grams of lye."
- (10 to 22s) Screen: remove coconut, set olive to 1000 g, Calculate. "Swap to all olive oil and it's 128.3."
- (22 to 30s) "Use the old number and your soap is too harsh. Recalculate every time."
- CTA: "Free soap calculator at latherforge.com. Link in the description." End card.

Short title: "Change one oil, change your lye #soapmaking"

## Pinterest pins

Size 1000 x 1500 (2:3). Destination for every pin: `https://latherforge.com/lye-calculator/?utm_source=pinterest&utm_medium=pin`.
Boards: "Soap Making for Beginners" and "Cold Process Soap Recipes".

**Pin 1: Free soap calculator**
- Image text: "FREE SOAP CALCULATOR" / "No signup. Grams or ounces."
- Title: Free Soap Calculator: Lye and Water for Cold Process Soap
- Description: Work out the exact lye and water for your soap recipe in seconds. Free, no signup, works in grams or ounces. For cold process, hot process and liquid soap. #soapmaking #soapcalculator #coldprocesssoap

**Pin 2: How much lye for 1 kg of oils?**
- Image text: "How much lye for 1 kg of oils?" / "Olive oil only: 128.3 g NaOH at 5% superfat"
- Title: How Much Lye for 1 kg of Oils? (Free Calculator)
- Description: The lye amount depends on which oils you use. 1 kg of olive oil needs 128.3 g of NaOH at 5% superfat, but change the oils and the number changes. Check your own recipe with the free calculator. #lyecalculator #soapmaking

**Pin 3: Fragrance calculator**
There is NO fragrance calculator on the site today. A pin to a page that doesn't exist wastes the pin and annoys visitors. Two options:
- (Recommended now) Replace it with "What is superfat?": image text "SUPERFAT EXPLAINED" / "Why 5%?", same destination.
- Or build a small fragrance calculator first (total oil weight x usage rate %). Ask first, and check search volume before building.

**Pin 4 (optional): video pin**
Upload the Short as a video pin with the same destination and the Pin 1 description.

## Google Flow prompts (backgrounds only, no text)

Thumbnail and pin background (vertical 9:16 or 2:3), generate 4 and pick one:
```
Top-down photo of a kitchen scale with a glass bowl of golden olive oil, a small jug of water, and pale handmade soap bars on a pale oak table, soft natural window light from the left, clean premium look, plenty of empty space at the top for text, no text.
```
Bench b-roll, only if you lack real clips (single 8-second clips, locked camera):
```
Locked-off top-down camera. Hands weigh olive oil into a bowl on a digital scale on an oak table, soft window light, calm, clean, premium look. No text.
```
Add every word of text in Canva, because AI misspells it.

## Checks before publishing

- "A 6-year-old video with 1,500 views ranks #5" and "a 10-year-old pin ranks #8" are your observations from the search results. I haven't verified them. Re-check the results when you publish.
- Film the screen recording AFTER the site's `/lye-calculator/` page is live on latherforge.com, so the numbers on screen match.
- Fix the chapter times in the description after editing.
- Label any AI-generated b-roll as AI-generated in the description.
