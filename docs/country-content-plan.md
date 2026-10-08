# Country content plan: 9 Oct 2026 to 31 Jan 2027

Goal: reach soap makers in Canada, Australia, the UK, New Zealand, Ireland and the US for free (no paid ads), so they know LatherForge before the January launch.

## Two lanes
| Lane | What | When | Who makes it |
|---|---|---|---|
| Video lane (existing) | Daily Short on TikTok, YouTube, Facebook/Instagram Reels and Pinterest | 19:00 Dublin | Shorts studio workflow (clips on Noel's PC) |
| **Country lane (new)** | One post a day aimed at one country, posted at that country's evening | See times below | Claude writes and schedules in Metricool every week |
| Blog lane (new) | One country blog post a week | Published on latherforge.com | Claude drafts, Noel reviews |

## Country rotation (country lane)
| Day | Country | Post time (Dublin) | Local time |
|---|---|---|---|
| Mon | Canada | 00:00 (Tue) | 19:00 Eastern |
| Tue | United Kingdom | 12:30 | 12:30 |
| Wed | New Zealand | 07:00 until 25 Oct, then 06:00 | 19:00 NZ |
| Thu | US and Canada | 00:00 (Fri) | 19:00 Eastern |
| Fri | Ireland | 12:30 | 12:30 |
| Sat | US and Canada | 00:00 (Sun) | 19:00 Eastern |
| Sun | Australia | 09:00 until 25 Oct, then 08:00 | 19:00 Sydney |

North America gets 3 days a week because it is the biggest market (about 83% of English-language calculator searches).

## Platforms
- **Facebook Page: now.** Text posts work without an image.
- **Pinterest: from the first blog post.** Best free channel for the US, Canada and Australia (people search it like Google), but every pin needs an image and should link to a blog post.
- **Instagram and TikTok** stay in the video lane (they need media).
- Threads is not connected. Connecting it would allow real country targeting (Threads lets a post be limited to chosen countries).

## Local wording
| Country | Lye is called | Spelling | Season Oct–Jan |
|---|---|---|---|
| Canada | lye / sodium hydroxide | colour, mould (Canadian), grams | Cold houses, Christmas craft fairs |
| US | lye | color, mold, ounces and grams | Holiday markets, New Year hobby peak |
| Australia | caustic soda | colour, mould | Summer heat, Christmas markets |
| New Zealand | caustic soda | colour, mould | Summer heat, Christmas markets |
| UK | sodium hydroxide / lye | colour, mould | Christmas markets, CPSR rules |
| Ireland | caustic soda / lye | colour, mould | Christmas markets, EU rules |

## Topic bank (rotate; no unverified claims)
**All countries:** cure time before Christmas markets · grams not cups · superfat explained · trace stages · soda ash · gel or no gel · costing a bar · pricing for markets · labels basics · gift packaging · New Year soap-making goals (January) · first batch checklist (January).

**Canada:** soaping in a cold house · Christmas craft-fair timeline · Health Canada cosmetic notification (point to official source) · bilingual labels (point to official source) · where to buy supplies (blog).

**US:** holiday market timeline · "true soap" vs cosmetic (point to FDA) · where to buy lye (blog) · pricing for craft fairs.

**Australia / NZ:** caustic soda purity (99%+, no additives) · soaping in summer heat · overheating and cracks · storing soap in humidity · where to buy supplies (blog).

**UK / Ireland:** CPSR, Responsible Person and SCPN (UK) · EU/Irish rules · Christmas market prep · soap supplies (blog).

## Blog schedule (needs latherforge.com publishing from GitHub again)
| Week of | Post | Main search |
|---|---|---|
| 12 Oct | Soap Making Supplies in Canada | soap making supplies canada (720/mo) |
| 19 Oct | Where to Buy Lye for Soap Making (US) | where to buy lye (1,600/mo) |
| 26 Oct | Soap Making Supplies in Australia | soap making supplies australia (390/mo) + cities |
| 2 Nov | Soap Making Supplies and Caustic Soda in NZ | caustic soda nz (210/mo) + supplies nz (170/mo) |
| 9 Nov | Selling Soap in Canada: Cosmetic Notification and Labels | cosmetic notification form canada (110/mo) |
| 16 Nov | Selling Soap in the US: FDA and "True Soap" Labels | soap labeling requirements (70/mo, high value) |
| 23 Nov | Soap Making Supplies in the UK and Ireland | supplies uk (170/mo) + ireland (100/mo) |
| Dec–Jan | Beginner and New Year posts, one per country | how to make soap (each country) |

Supplier names and legal rules are checked against real sources before publishing. Nothing is invented.

## Links: none on Facebook
Facebook cuts reach for posts with links (the Page gets about 2 link posts a month). Country posts say "Free soap calculator on our profile 👆" (or "Free pricing calculator" for business topics) and never include a URL. Links belong on Pinterest pins and blog posts.

## Scheduled so far
Country lane: 9–31 Oct (23 posts, all with hook images, no links). The Monday routine fills each next week from 1 Nov.

## Weekly routine
- Every Monday: Claude writes and schedules the next 7 country-lane posts in Metricool, and reports last week's Facebook reach per country.
- Every 2 weeks: drop topics with low reach and repeat the winners.
- Mid-December: switch topics to New Year beginners (January is the peak search month).

## Hook images (every post)
Every country-lane post gets a 1080×1350 hook image: brown and gold LatherForge style, country chip, big hook line, one-line subhead, "Free soap calculator · latherforge.com" footer.
- Made with `social/make_hooks.py` (edit the `posts` list, run `python3 social/make_hooks.py social/country-lane`).
- Images are pushed to `social/country-lane/` and linked by commit (raw.githubusercontent.com). Metricool copies each image to its own storage when the post is saved.
