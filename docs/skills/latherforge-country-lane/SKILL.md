---
name: latherforge-country-lane
description: Plan, write, render and schedule LatherForge's daily country posts - a Facebook hook-image post plus a 5-slide TikTok photo carousel aimed at one country a day (Canada, US, Australia, UK, New Zealand, Ireland) - in Metricool, and keep the queue filled to January. Use whenever Noel asks for country posts, picture posts, TikTok carousels/photos, Facebook image posts, "next batch", "keep posting", "fill the gap", the weekly Monday run, or anything about reaching soap makers in a specific country without paid ads. Not for video Shorts (that is latherforge-shorts-studio).
---

# LatherForge country lane

Free reach in the target countries, every day, with zero back-and-forth. Noel wants it done, not discussed: if the gap exists, fill it. Only stop to ask when something genuinely needs his decision.

## What runs every day
| Lane | What | When (local evening of the target country) |
|---|---|---|
| Country post | Facebook image post (1080x1350 hook image, no links) | rotation below |
| TikTok carousel | Same topic, 5 slides 1080x1920, auto-music | 30 min after the Facebook post |
| Video Short (not this skill) | 19:00 Dublin daily, all networks | latherforge-shorts-studio |

Never schedule country content within an hour of 19:00 Dublin - it competes with the video for first-hour views.

## Rotation and times (Dublin clock)
| Day | Country | Facebook time |
|---|---|---|
| Mon | Canada | 19:00 Eastern = 00:00 Tue Dublin (23:00 Mon between Dublin's 25 Oct and the US 1 Nov clock change) |
| Tue | UK | 12:30 |
| Wed | New Zealand | 19:00 NZ = 07:00 Dublin in summer time, 06:00 after Dublin's clocks go back |
| Thu | US & Canada | 19:00 Eastern (as Monday) |
| Fri | Ireland | 12:30 |
| Sat | US & Canada | 19:00 Eastern (as Monday) |
| Sun | Australia | 19:00 Sydney = 09:00 Dublin summer time, 08:00 after |

Work out every time from the actual date: Dublin moves to GMT on the last Sunday of October and back to IST on the last Sunday of March; US clocks change first Sunday of November / second Sunday of March; Sydney and NZ are on daylight time Oct-Apr. Always write the Dublin UTC offset into fb_when/tt_when.

North America gets 3 days because it is ~83% of English-language soap-calculator searches (US 14,100/mo, Canada 2,560, Australia 1,210, UK 1,070, NZ 290, Ireland 150). South Africa was dropped (Noel, 8 Oct 2026). The US has no paid ads but does get organic posts.

## The workflow (repo Noel-Culleton/latherforge, work on the session's branch)
1. `getBrandSettings` (brand 7161016, Europe/Dublin), then `getScheduledPosts` for the coming weeks so nothing is double-booked. Find the first day with no country post.
2. `python3 social/country_lane.py used` - every hook already posted. Never repeat a topic.
3. Write `social/batches/<first-date>_<last-date>.json` (7-14 days) - field reference at the top of `social/country_lane.py`. Bundled copy in this skill's `scripts/` if the repo lacks it.
4. `python3 social/country_lane.py render <batch>` - it refuses batches with URLs in Facebook text or hooks promising "4 things" with 3 slides. Tile one carousel and one Facebook image and look at them before going on.
5. Commit + push (images in `social/country-lane/` and `social/tiktok/<YYYY-MM>/`). Get the SHA: `git rev-parse HEAD`.
6. `python3 social/country_lane.py check <batch> <sha>` - every image must return 200 (repo is public; raw.githubusercontent.com links by commit never change).
7. `python3 social/country_lane.py payloads <batch> <sha>` - one line per post with `date` and `info`. For each line call `createScheduledPost(blogId "7161016", date, info)`. Metricool copies every image to static.metricool.com, so posts survive later repo changes.
8. Keep the queue at least 7 days ahead; make the batch run to the end of a week.
9. Report in one short message: what was scheduled (table of date / country / hook), anything that failed, the next date the queue runs out.

## Writing the posts
- Country voice: lye vs caustic soda (Australia, NZ, Ireland say caustic soda), mould vs mold (US uses mold), grams first, local season (Oct-Feb is summer in Australia/NZ, winter in Canada/UK/Ireland), local events (Christmas markets, holiday craft fairs, Thanksgiving, Valentine's, Mother's Day - UK/Ireland Mothering Sunday is in March, US/Canada/Australia/NZ is May).
- Hooks: plain warning, question or deadline, 3-8 words, readable by a stranger in one second. Safety and rule hooks perform best.
- Facebook text: hook line + 1-2 sentence why + 3-5 ✅ bullets + "Free soap calculator on our profile 👆" (or "Free pricing calculator" for cost/Etsy/business, set `pricing: true`) + a question ending 👇 + 5 hashtags (one country tag). NO URLs and no "latherforge.com" - Facebook cuts reach on link posts (~2 link posts a month allowed).
- TikTok caption is built automatically (TikTok links aren't clickable, so latherforge.com as text is fine).
- Soap facts are safety-critical: only standard, true facts. No invented stats, no medical/skin-treatment claims. Legal topics (UK CPSR/SCPN, EU CPSR/CPNP/HPRA, Health Canada Cosmetic Notification + bilingual labels, US FDA "true soap") name the official regulator and say "not legal advice, check current rules". Supplier names only if verified on the web that week.
- Topic mix per week: ~2 craft/troubleshooting, ~2 selling/business, ~1 legal/labels, ~1 seasonal, ~1 beginner. From mid-December lean into New Year beginners and Valentine's timelines (January is peak search month).

## Topic bank (unused ideas; check `used` first)
All: superfat explained, trace stages, soda ash, gel or no gel, costing a bar, market pricing, gift packaging, New Year goals, first-batch checklist, Valentine's timeline, Mother's Day timeline, wholesale basics, Etsy photos, batch records, label must-haves per country.
Canada: winter shipping, craft-fair season, Health Canada CNF follow-ups, bilingual label tips. US: holiday markets, Thanksgiving gift sets, FDA soap vs cosmetic follow-ups, where to buy lye (blog). Australia/NZ: summer heat and overheating, humidity and DOS, Christmas-in-summer markets, caustic soda purity. UK/Ireland: CPSR and Responsible Person, damp and sweating soap, Christmas markets, January sales.

## Facts and settings to keep
- Metricool brand 7161016, timezone Europe/Dublin. Networks: Facebook Page, Instagram, TikTok (personal @latherforge), YouTube, Pinterest, Bluesky. Threads is not connected (if Noel connects it, threadsData.allowedCountryCodes gives true country targeting - suggest it).
- TikTok carousel payload: providers tiktok, 5 media, tiktokData {privacyOption PUBLIC_TO_EVERYONE, title = hook, autoAddMusic true, photoCoverIndex 0}. Confirmed accepted by Metricool 8 Oct 2026; first publish 9 Oct 13:00 - if a later run finds carousels failing on the personal account, switch TikTok to a single-image post or ask Noel about a Business account.
- Live site pages (for blogs/Pinterest, never in Facebook text): /lye-calculator/, /etsy-pricing-calculator/, /early-access/.
- Plan docs: docs/country-content-plan.md (rotation, blog schedule), social/shorts/VIDEO_PLAN.md (video gap and PC session).

## Also check every run
- Video lane: if fewer than 10 days of 19:00 Shorts are scheduled ahead, tell Noel at once with the PC-session instruction from social/shorts/VIDEO_PLAN.md. This skill cannot make the video Shorts (clips live on Noel's PC).
- After 31 Jan 2027, ask Noel whether to continue the country lane past launch and with what call to action.

## Results log (add one line per week when Noel shares numbers, and turn it into a rule)
- 8 Oct 2026: lane started. 23 Facebook posts + 23 TikTok carousels scheduled 9-31 Oct; batch 1-14 Nov (14 + 14) booked with social/country_lane.py. No results yet.
