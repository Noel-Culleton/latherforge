---
name: "latherforge-shorts-studio"
description: "Plan, build, package and schedule LatherForge YouTube Shorts, long-form videos and thumbnails (Noel's PC clip library, Google Flow clips, Azure Irish voice, local ffmpeg, Clipkit, Metricool). Use for any LatherForge video, Short, long-form, thumbnail or social scheduling request."
---

# LatherForge Shorts Studio

Noel wants finished, ready-to-post video with minimal back-and-forth and minimal credit use. Build in BIG BATCHES on his own PC, preview once, then SCHEDULE everything in Metricool. One question max.

## 0. LEARNING LOOP (always)

- Before building, read section 10 (Results log & lessons) and apply every lesson.
- Whenever Noel shares analytics (views, "stayed to watch" %, avg view duration, traffic source) or a posting/build problem appears, diagnose it, then ALWAYS propose an updated full SKILL.md (propose_skills, kind improvement) adding the result to the log and turning it into a rule. Keep the log to one line per video/batch + the rule it produced.

## 0b. Which Claude session can do what (check first)

- Claude Code on the web / cloud sessions CANNOT reach Noel's PC. They can write scripts, prompts and topics, and commit them to the latherforge repo (docs/). Say so up front. Don't spend turns on PowerShell workarounds.
- Rendering, clip sorting and anything in Downloads/Videos needs the desktop chat with his PC connected (laptop icon next to the chat title, then allow folder access). Hand-off line: "Open a New chat in the Claude desktop app, pick Project or folder > Videos\LatherForge Longform, and paste: <one-line build request with script path + clip folder + voice>".
- Noel is not technical. If he must run a command, give ONE line only (no multi-line paste warning), explain in plain English, and ask for a screenshot of the result.

## 1. Topics

- 80% pure soap-problem content, 15% app incidental, 5% product (product videos held for the December launch countdown).
- Idea test (Trech Media): NOVELTY, REALITY (true, relevant), SIMPLICITY (a stranger gets it in 1 second).
- DONE as Shorts (Short01-63, don't repeat): cure time, 3 lye rules, trace, oils for a hard bar, when to add EOs, true cost per bar, swirls, crumbly soap, superfat, soda ash, gel phase, beginner kit, gift packing, CP vs melt & pour, cups vs grams, Etsy mistakes, sweating soap, honey, lavender buds, cutting cleanly, lather, Christmas start-now, cracked tops, glycerin rivers, saponification, castile cure, stick blender tips, seized soap, FO vs EO, clay colours, charcoal, oatmeal, goat milk, salt bars, storing curing soap, DOS, distilled water, sodium lactate, sugar for lather, silicone vs wood molds, is my soap safe, room-temp soaping, hot vs cold process, price formula, Etsy photos, UK/EU safety assessment, INCI names, batch numbers, label must-haves, selling to shops, craft fairs, Christmas gift sets, 3 swirl techniques, water discount, shelf life, coffee soap, castor oil, palm-free, unmolding, first-batch mistakes, business records, scent fading, even bar sizes.
- DONE as long-form (LF01-14, weekly Thursdays 1 Oct - 31 Dec 2026): pricing, Christmas 10-week plan, first batch for beginners, 7 mistakes, oils explained, scenting safely, Etsy, Christmas markets, soap problems fixed, gift sets, UK/EU labels & records, 10 things I wish I knew, year in review, 2027 plan. LF15 (~13-14 min): "Every Cold Process Soap Problem (And How to Fix It)" - script in repo docs/longform-soap-problems-script.md, clips in Videos\LatherForge Longform\LF15\clips.
- Next ideas: embeds, layered soap, loofah soap, shampoo bars, rebatching, mica vs natural colour, fragrance calculators, soap for sensitive skin (no medical claims), market-stall display, Etsy SEO titles, wholesale terms, subscription boxes, soap dish upsells, New Year soap-business goals, winter scents, "why the 38% water default is ruining your soap" (seen 3x in FB groups on 30 Sep), "why is my soap still soft after 2 days".
- Soap facts are safety-critical. Only standard, true facts. Never invent stats; never medical claims; compliance = facts only (safety assessment, CPNP/SCPN notification, product file, batch number, net weight, INCI list) and say "not legal advice, check current rules".

## 2. Hook rules (the first second decides everything)

- Frame 1 fully formed: hook overlay at full opacity from t=0 - NO fade on scene 1.
- Frame 1 visual = a motion-rich shot (loaf wire-cut, batter pour, stick blending), never static.
- Hook readable by a STRANGER in the Shorts feed; no insider shorthand ("DAY 3" failed). Plain warning or question, 3-7 words, 3 lines max, last line yellow.
- Shorts use the first frame as the thumbnail - another reason frame 1 must carry the full hook.

## 3. Shorts shape (1080x1920, 13.8s)

- 5 scenes: hook 3.0s -> 3 numbered points 2.8s each -> CTA 2.4s.
- Point overlay: yellow number #F2C94C (Anton 170), 1-2 line cream #F6F1E7 headline (Anton 118), DejaVuSans-Bold 46 subline #E6DCC8. Key content out of the bottom 380px.
- CTA overlay: dark scrim (14,10,8,190), 2-line cream action, yellow rule, LATHERFORGE.COM yellow, "Free soap calculator. No signup."
- CTA clip = hook clip so the loop replays cleanly. No AI mention, no "Lye-la", no competitors, no hedging.

## 4. Shorts batch pipeline - everything runs ON NOEL'S PC (cheapest)

1. Folder access: ~/Downloads (clips), ~/Videos (output). Output C:\Users\culle\Videos\LatherForge Shorts\ ; overlays\batchN\ ; files ShortNN_Title.mp4.
2. Do NOT render overlays in the cloud and commit them (70 PNG commits = huge token cost). In device_bash: curl Anton to $HOME/Anton.ttf (https://raw.githubusercontent.com/google/fonts/main/ofl/anton/Anton-Regular.ttf); PIL 12 and DejaVuSans-Bold are on the device.
3. Write a compact topics file with a heredoc straight on the device: overlays\topicsN.json = [[id,[hookCat,p1Cat,p2Cat,p3Cat],[hook lines],[p1 line1,line2,sub],[p2..],[p3..],[cta 2 lines],"lye"|"etsy"], ...]. Categories: pour, blend, oil, lye, cure, cut, fragrance, gift, business, mold.
4. gen.py (device) maps categories to rotating clip pools (section 5), avoids reusing a clip inside one Short, uses the hook clip again for the CTA, renders all overlays with PIL, writes overlays\batchN\spec.json {clips, vertical, mute:["I5"], shorts:[{id,scenes,link}]}. Tile hook + point-1 overlays into one JPG and view it.
5. render2.py BATCH idx... (device): per scene ffmpeg - horizontal: crop=ih*9/16:ih,scale=1080:1920:flags=lanczos,unsharp=5:5:0.6 (removes Veo watermark); vertical: scale=1188:2112,crop=1080:1920:0:0; overlay (scene 1 no fade, others fade=in:st=0:d=0.15:alpha=1); clip audio 0.8 (0 for muted clips) mixed with anullsrc; -preset veryfast -crf 20; concat -c copy -movflags +faststart.
6. Verify: frames at t=0/5.5/8.3 of every Short tiled into ONE JPG; stage and view. ffprobe every file - re-render any whose duration isn't ~13.82s.
7. Write POSTING_SCHEDULE.csv next to the videos (python csv, utf-8-sig): Date, Day, Time, File, YouTube title (hook title case + #shorts), YouTube description (3 points + calculator link + hashtags), Facebook caption (NO links), Pinned comment. Title-case with string.capwords but keep UK, EU, DOS, INCI, CPNP, SCPN, VS, IFRA upper.
8. Then schedule in Metricool (section 7b). Don't send the MP4s to chat.

## 4b. Device reliability (applies to everything)

- device_bash kills background jobs when a call returns, calls cap at 180s, and Noel's PC disconnects often. Make every script RESUMABLE (skip finished outputs, write to .tmp then rename), give it a time budget (~100s) and loop calls until it prints ALLDONE. Render 3-4 Shorts per call.
- Noel's home UPLOAD is slow and erratic (~70-500 KB/s). device_stage_files of 2+ videos at once times out; stage ONE file per call, or upload straight from the device (section 7b). Files over ~20 MB (long-form) cannot be moved from his PC inside a call - have him on a faster connection, or have him upload in YouTube Studio while Claude feeds him the copy.
- On disconnect: tell Noel to keep the PC awake (Settings > Power > sleep Never), open the Claude desktop app and say "continue". Nothing is lost.
- Deleting in connected folders is blocked; to redo a finished file use a FORCE env var and overwrite via rename instead of rm.
- Noel sometimes clicks stop on tool prompts to ask a question; answer, then resume where you left off without redoing finished work.

## 5. Clip pools (C:\Users\culle\Downloads) - verified shots [key: file @ start seconds]

- U = Untitled_Scene_09-03_18_25_49_202609031930.mp4: pour 1.0/4.0, wire-cut loaf 9.3/10.5 (best hook), swirled bars 13.2/15.5.
- I5 = Initial_Scene_-_2026-05-23_202605231624.mp4 (78s compilation, MUTE audio): lavender 3.5, gloved lye 13.5, butters melting 23.5, stick blend 33.5, honey drip 43.5, pour into green mold 53.5, gloved hand with bar 63.5, app screens ~73.5.
- C29 = LatherForge.com_luxury_soap_busi..._202605211229.mp4: pour 0.5, man wire-cutting 4.0, laptop dashboard 6.0-7.0. CUT30/CUT34 (..1230/..1234): pour 1.0 / lavender 1.0.
- C1/C2 = LATHERFORGE HOME\Lather Forge End Promational app info\Artisan_soap_bars_curing_shelves_202605210913/0917.mp4: curing shelves 0.5-4.
- LYE = LATHERFORGE HOME\Lather Forge Lye Prep Videos\Lather Forge Lye prep Videos.mp4 (0.8/4.0). LYEPOUR = LATHERFORGE HOME\Lather Forge Pouring & combining Lye\Pouring_lye_into_oils_202605210839.mp4: stick blender (0.5/3.5).
- OILS = LATHERFORGE HOME\Lather Forge Mixing oils\Pot_of_oils_melting_202605210834.mp4 (1.0/4.2). BUTTER = LATHERFORGE HOME\Lather Forge Mixing process videos\olive oil, coconut oil, shea butter, cocoa butter, process in mixing bowl.mp4 (1.0/4.5). LH = Luxury_handcrafted_soap_universe_202605210818.mp4: oil bowl 1.5, butters + oil pour 5.0. WA = Walnut_artisan_workshop_organized_202605231558.mp4: ingredients table 2.0 (static).
- EO = ...\Adding Fragrance and Color\Essential_oils_added_to_soap_202605210857.mp4 (1.0/4.2); FLOW = Flow_202605210858.mp4 (1.0).
- MOLD1/MOLD2 = ...\Pouring into Molds\Pouring_soap_into_wooden_molds_202605210906/0907.mp4 (1.0).
- LIFT = ...\Promotinal Videos shots\Lather Forg promational video lifting bars no voice just sound.mp4 (1.0/4.5). LS = Luxury_artisan_soap_studio_identity_202605210753.mp4: pour into branded mold 1.0, gift-box packing 4.0-4.8.
- 26 Sep 2026 batch N (1280x720, 10s, Veo; use starts 1.0/5.0): N1 Artisan_hand_tapping_Start_Batch, N2 Copper_logo_stamp_on_soap, N3 Cutting_and_packing_sandalwood_soap, N4 Gloved_hands_pouring_lye_crystals, N5 Golden_honey_soap_bar, N6 Hands_mixing_soap_batter, N7 Honey_dripping_into_ceramic_bowl, N8 Honey_drop_falling_on_soap, N9 Honey_poured_into_soap_batter, N10 Honeycomb_soap_pulled_from_mold, N11 Honeycomb_texture_on_soap, N12 Immersion_blender_creating_soap, N13 Immersion_blender_pouring_lye_so..., N14 Laptop_screen_showing_batch_trac..., N15 Lye_solution_poured_into_oils, N16 Pouring_honey_soap_batter_mold, N17 Raw_sandalwood_red_clay_oils, N18 Sage_sprig_and_tablet_dashboard, N19 Shea_butter_melting_into_oils, N20 Soap_bar_and_dashboard, N21 Soap_batter_poured_into_mold, N22 Three_soap_bars_walnut_pedestal, N23 Wire_cutter_slicing_soap_loaf (8s).
- 26 Sep batch M (files ending 20260926185xxx): 185603 creamy pour into wooden mold; 185509/185530/185541/185548/185553/185601 pour 0.5 then stacked bars on linen 5.5; 185622 green batter pour; 185613/185629 oil drop on charcoal + green clay powders; 185445/185459/185535/185448 maker with tablet dashboard in stock room (business); 185502 studio with herbs/bars.
- Vertical 5s (1076x1924): BLEND5 "Blending 5 seconds.mp4", MIX5 "mixing vidoe 5 seconds.mp4", ADD5 "add ins 5 second 2.mp4", AS2 "add in s 5 seconds.mp4", DECO5 "End decoration 5 second.mp4", ES "ending soap 5 seconds.mp4", P5 "pouring 5 seconds.mp4" (max start 2.1) - Shorts only.
- Avoid: Gentle_Nourishing_Cold_Process_Soap.mp4 (AI presenter only), Initial_Scene 06-09 clips (horse racing), 202605121220 (fireplace), PodMove, finished ad exports, AI talking-head clips.
- Noel is fine with reusing clips and keeps downloading new Flow clips/photos: before each batch, find new files with `find ~/mnt/Downloads -newermt <last batch time>`, tile frames at 1.5s/5.5s, and add them to the pools.

## 6. Clipkit text/motion Shorts (no footage)

- read_docs topic card once, set_project full source, ONE project per video. Look: radial #3A2A1F->#140E0B, Anton headlines, cream/yellow/red/sage, Cormorant Garamond brand (https://raw.githubusercontent.com/google/fonts/main/ofl/cormorantgaramond/CormorantGaramond%5Bwght%5D.ttf, 700). Hook visible at t=0. preview_still; deliver open_in_editor link. Cloud render only with a key Noel gives in chat - never store a key.

## 7. YouTube specifics

- Shorts: Audience "No, it's not made for kids"; declare AI content; category Howto & Style. Links in Shorts descriptions aren't clickable - the clickable route is Related video (set by Noel in YouTube Studio) pointing at a long-form.
- Long-form: each LFxx_UPLOAD.txt (Videos\LatherForge Longform\series\) has publish date (Thursday 18:00 Irish), title, description with chapter timestamps, calculator link, thumbnail file. Files are 23-78 MB: schedule via Metricool (youtubeData type video + videoThumbnailUrl) only when Noel is on a fast connection, otherwise he uploads in YouTube Studio and Claude feeds him the copy. Add end screens pointing to the next video. If LF01 can't go out by ~16:00 on 1 Oct, shift the series one week.
- Playlists: Soap Making for Beginners (LF03, LF04, LF05, LF12); Soap Problems Fixed (LF09 + "Why Your Cold Process Soap Is Still Soft"); Selling Soap & Pricing (LF01, LF07, LF08, LF10); Soap Business Plan (LF02, LF11, LF13, LF14).

## 7b. Metricool scheduling (the posting engine)

- Brand blogId 7161016 ("LatherForge", timezone Europe/Dublin). Connected: TikTok personal @latherforge, YouTube LatherForge, Facebook Page LatherForge, Instagram @latherforge, Pinterest latherforge. Free plan accepted 160 posts in Oct 2026.
- Cadence: 1 Short per day at 19:00 Irish on every network (keeps the library lasting to the December launch countdown). Go to 2/day only for the launch countdown if views hold 200+.
- Always check getScheduledPosts first so nothing is double-booked.
- Media must be a public URL. On the device, compress `ffmpeg -c:v libx264 -preset veryfast -crf 28 -c:a aac -b:a 96k -movflags +faststart` (~2.5-4 MB), then `curl -m 110 -F reqtype=fileupload -F time=72h -F fileToUpload=@file https://litterbox.catbox.moe/resources/internals/api.php`, one file per loop iteration, only starting a new one while $SECONDS < 60; append results to $HOME/u2.txt and re-run until done. Metricool COPIES the video to static.metricool.com when the post is created, so the 72h expiry doesn't matter. Reuse the returned static.metricool.com URL for the other networks - no re-upload. "Failed to normalize media" is transient: retry once.
- Post A - TikTok + YouTube together: caption = hook + 3 numbered points + "Free soap calculator, no signup: https://latherforge.com/lye-calculator/" (or etsy-pricing-calculator for cost/Etsy/business topics, worded "Free pricing calculator") + #soapmaking #coldprocesssoap #handmadesoap + 2 topic tags + #soaptok; firstCommentText = a topic question ending with a pointing-down emoji; tiktokData {privacyOption PUBLIC_TO_EVERYONE, title, isAigc true}; youtubeData {title "<Hook> #shorts", type short, privacy public, 5 topic tags, category HOWTO_STYLE, madeForKids false, isAiGeneratedContent true}.
- Post B - Facebook + Instagram together: same text but the link line becomes "Free soap calculator on our profile" + pointing-up emoji (NO URLs - FB penalises links), no #soaptok; facebookData {type REEL, title}; instagramData {type REEL, showReelOnFeed true, isAiGenerated true}.
- Post C - Pinterest: board "Soap Making Tutorials" = boardId 1112178139169391595 (other boards: Soap Recipes, Etsy for Soap Makers, Handmade Soap Inspire); SEO sentence-style description with 3 hashtags; pinTitle = search-style title; pinLink = matching calculator URL (clickable - Pinterest is the traffic driver).
- Rebbel stays for image/carousel posts only (it can't post video). Never auto-post to Facebook Groups (Meta API removed Apr 2024; groups ban promo) - Noel comments helpfully by hand, link only if asked.

## 7c. Continuing each month and at go-live

- "Schedule next month" = find the last scheduled Short in Metricool, take the next ShortNN files in order (build a new batch first if the library runs out), apply section 10 lessons, then do Posts A/B/C per day.
- Library status: Short01-04 posted by hand; Short05-36 scheduled 30 Sep - 31 Oct; Short37-63 are next (November).
- December = launch countdown: allow 2/day, bring in the 5% product videos, and switch CTAs from the free calculator to the January launch / early-access page only when Noel confirms the launch offer.
- Every new month: ask Noel for analytics once (stayed-to-watch, top 3 posts), log them in section 10, and propose this SKILL.md updated.

## 8. Facebook reels

- The Page gets 2 posts with links per month: NO URLs, domains or "link in bio" in captions or comments. Close Meta One pop-ups (EUR 43.99/mo), never subscribe. "Add AI label" ON for Flow/Veo footage.

## 9. Costs

- Rendering and the AI voice (piper) run free on Noel's PC; the Claude credit goes on writing scripts/topics and tool calls. Keep scripts compact, never commit images/audio, one tiled preview per stage.

## 10. Results log & lessons

- Short01 "Day 3 Soap? Don't Sell It Yet" (26 Sep 2026, 22s, hook faded in over batter pour): 122 views in ~3h (15x normal, 95.8% Shorts feed) but 10.3% stayed / 89.7% swiped; avg view 0:10. Lesson: the first second failed -> section 2 hook rules + 13.8s pacing.
- 26 Sep 2026: Short01v2-Short63 rendered; LF01-LF14 long-form rendered (1.5-3 min each, AI voice, 14 thumbnails + upload texts). ~270-word scripts only gave ~2 min - for real long-form (6-10 min) write ~900-1,300 words and ideally use Noel's recorded voice.
- 30 Sep 2026: Short01-04 live by hand. TikTok ~230-240 views each in 1-2 days; YouTube: 3 Lye Rules 646, Day 3 126, others 39-53. Lesson: safety/rule hooks outperform - favour "3 X rules" and warning hooks.
- 30 Sep 2026: Short05-36 scheduled daily 19:00, 30 Sep - 31 Oct, on TikTok, YouTube, FB Reels, IG Reels and Pinterest (160 posts) via Metricool. LF01-14 pending until Noel is on a fast connection.
- 30 Sep 2026: LF15 prepared - 2,000-word script (repo docs/), 46 Flow clips sorted into LF15\clips, Azure Irish voice chosen. Lessons: (1) cloud session can't touch the PC - hand off to the PC-connected desktop chat early; (2) Flow file names != prompts - sort by keyword; (3) Noel pasted Azure keys into chat and screenshots twice - tell him up front to click Hide Keys, use the copy icon, never screenshot the keys page, and plan a key regenerate after the build.
- Benchmark: 60%+ stayed to watch on Shorts; below 50% = change the hook style, not the topic.

## 11. Hand-over

One short message: what was made/scheduled, where to see it (Metricool > Planning), schedule summary, one next step. No process recap.

## 12. Long-form pipeline (16:9 faceless explainer)

- Length: 2-min versions are too short. Target 10-15 min = ~1,900-2,300 words, 10-13 chapters, each chapter one searchable problem/question (viewers jump by chapter). Best topics = problem compilations and "X rules" (safety hooks win).
- Footage: ~45-60 Flow clips (section 13) reused with zoom/crop/mirror variations + text slides + calculator screen recordings. A chapter whose clip doesn't clearly show the fault gets a labelled text slide over B-roll - never show the wrong thing.
- Before rendering: tile 1 frame per problem clip and check accuracy yourself; add on-screen labels for subtle faults (e.g. "orange spots = DOS").

1. Script file on the device: Videos\LatherForge Longform\series\scripts.json = [{id, date, title, thumb:[3 lines], band, bg:[clipKey,start], link:"lye"|"etsy", ch:[[label, TITLE, "key line|yellow line", category, narration], ...]}]. Chapter 0 = hook (no label). An outro chapter (free calculator + "new video every Thursday") is added automatically. Write numbers as words in narration for the TTS.
2. Voice: DEFAULT Azure AI Speech neural voice en-IE-ConnorNeural (alt en-IE-EmilyNeural), resource aet-speech-noel26, region eastus, Free F0. Chapter text -> SSML -> REST (https://eastus.tts.speech.microsoft.com/cognitiveservices/v1, header Ocp-Apim-Subscription-Key, output audio-24khz-96kbitrate-mono-mp3). Key: read from Videos\LatherForge Longform\azure_key.txt or ask Noel to paste it; never commit it, never echo it back. Remind him to Regenerate Key1+Key2 when the build is finished. Fallback voice: piper-tts on the device (pip install --break-system-packages piper-tts; voice en_GB-alan-medium from https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_GB/alan/medium/). Per chapter wav -> m4a with 0.6s pad. Offer to swap in Noel's own recorded voice.
3. lfb.py (device, resumable, time budget): per chapter, 4s shots from the category pool cycled to cover the narration; each shot scale=2074:1166,crop=1920:1080:0:0 (pushes the Veo watermark out); overlay PNG (hook: big 2-line title; points: left gradient, yellow LABEL + cream TITLE top-left, rounded key box bottom-left; outro: scrim + LATHERFORGE.COM); veryfast crf 21. Then concat, chapter timestamps, LFxx_UPLOAD.txt and a 1280x720 thumbnail (3 big Anton lines, last yellow, red band text, left dark gradient over a bg frame).
4. Verify: list durations, tile all thumbnails into one JPG and view; check every video has mp4 + thumb + upload text.

## 13. Google Flow clip production (Noel has Google AI Pro)

- Flow makes ~8s clips only; the edit happens on the PC. Put the style in Flow's Agent instructions (NOT the script): "Every video: photorealistic close-up, warm natural window light, rustic walnut workbench in a handmade cold process soap studio, shallow depth of field, slow steady camera movement, 16:9. Hands in nitrile gloves where hands appear. No faces, no text, no captions, no logos, no watermarks. Realistic soap textures only."
- Never paste the voiceover script or recording notes into Flow - its agent refuses ("can't record audio"). Give it visual prompts only, in batches of ~6 numbered lines, "2 variations each"; Fast model for most, Quality for the hook.
- Flow names downloads by its OWN short title (e.g. Hands_packing_soap_bars_1080p_2026...mp4), not the prompt. Sort by keyword into <LF>\clips as <chapter>N.mp4 (copy, never move) and list unmatched ones; map leftovers by reading the titles against the prompt order/timestamps.
- Veo is unreliable at specific soap faults (soda ash, rivers, DOS, sweating): generate 2-4 tries, keep only accurate ones, else use a photo of a real bar or a text slide.
- Keyword map that worked for LF15: Gloved_hand_turning|chalky=hook; Steam|soda|powder|crust=sodaash; seiz|Spatula|thicken=seize; Thumb|soft|dent=soft; Crack|dome=crack; streak|vein=rivers; crumbl|chip|Wire=crumble; bead|moist|sweat|handling=sweat; orange|spot|old_soap=dos; Dropper|essential|fragrance=scent; goggle|lye|scale|weigh=safety; laptop|typing|recipe=prevent; Cutting=broll_cut; textured|swirl=broll_swirl; pour, blend|mixing|making|batter, shelf|curing, wrap, melt|oil|butter, stamp, stack|linen, gift|pack|box = broll_*.
