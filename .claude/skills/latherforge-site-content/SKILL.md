---
name: latherforge-site-content
description: Add or update latherforge.com blog content (list articles, gift guides, Amazon affiliate shop buttons, YouTube video embeds and playlist links), verify it is live, and schedule matching Metricool social posts. Use for any LatherForge website article, affiliate link, video embed or social scheduling task.
---

# LatherForge site content workflow

## Working with Noel
- Before starting, say in plain English what you are about to do and why. Short, step by step.
- Do not use Base44 credits for website work. The site is the Next.js repo, not Base44.
- Never edit existing Metricool posts unless Noel explicitly asks in that conversation. Create new posts instead.
- Never claim products were tested, reviewed or recommended by a named expert. No guessed ASINs, ratings or prices.
- Every article ends with the standard disclaimer line, and every soap article mentions lye safety.

## Where things live
- Blog data: `src/lib/posts.ts` (`posts` array). Each post has `sections` and `faqs`.
- Section fields: `heading`, `text`, `items`, `link {href,label}`, `shop {label,query}`, `videos [{id,title}]`.
  - `link` with an `http` href renders as an external link in a new tab; internal hrefs use Next `Link`.
  - `shop` builds an Amazon search link with tag `latherforge-20` (`amazonSearchUrl`). The affiliate disclosure shows automatically when a post has any `shop`.
  - `videos` renders lazy, privacy-enhanced youtube-nocookie embeds with a "watch on YouTube" link.
- Renderer: `src/app/blog/[slug]/page.tsx`.
- Auto internal links: `src/lib/autolink.ts` (first mention per page, never self-links). Add a rule when a new article becomes the best target for a phrase. The test checks every target is a real page.
- Sitemap, footer and tests: `src/app/sitemap.ts`, `src/components/Footer.tsx`, `src/lib/__tests__/`.

## Standard article pattern
1. Short intro, then a "Quick answer(s)" list.
2. Numbered sections, each answering one problem or product type. Add a `shop` button only where a product genuinely helps.
3. A LatherForge waitlist section near the end: "first 300 sign-ups get 3 months free, no card needed to start", linking `/early-access/`.
4. Final disclaimer: "Information only. Not professional or medical advice. Always follow lye safety guidance..."
5. 3-5 FAQs (these become FAQ schema).

## Check, ship, verify
1. Work on a new branch from `origin/main`. Never push to main.
2. Run `npm test`, `npx tsc --noEmit` and `npm run build`. Grep `out/blog/<slug>/index.html` for the new content.
   - The `reading 'os'` TypeError in build output already happens on main. Ignore it.
   - Discard the `next-env.d.ts` comment change the build makes (`git checkout -- next-env.d.ts`). Do not commit it.
3. Commit, push, open a PR. If the stop hook says "no remote branch" after a successful push, add a fetch refspec for the branch, fetch, then `git branch -u origin/<branch>`.
4. After Noel merges, check the live page. Plain curl to latherforge.com and YouTube is blocked from the cloud container, so use `mcp__Vercel__web_fetch_vercel_url` and grep the saved output.

## Verifying YouTube IDs
- `serp_youtube_organic_live_advanced` (DataForSEO) with the channel or playlist name returns real video and playlist IDs.
- LatherForge playlists use short 13-character IDs. These are real, not truncated:
  - Soap Problems Fixed: `PLQTus9z849YQ`
  - Start Here: Beginner Soap Making: `PLGjHBpRtE2og`
- Video IDs are 11 characters. A test enforces this for `videos`.

## Metricool scheduling (brand 7161016, Europe/Dublin)
- Pinterest: board `1112178139169391595`, 20:00, image from `public/pins/`, `pinLink` set to the article URL.
- Facebook and Bluesky: 12:30. Bluesky text must be 300 characters or fewer.
- Add an affiliate note on any post that links to an article with Amazon links.
- When updating a post, send the full original content and change only the link or text asked for. The post id changes after each update; the uuid does not.
- Check for drafts (`draft: true`): they will not publish on their own. Tell Noel.

## Amazon
- SiteStripe works on Noel's browser. ChatGPT's Amazon access often returns 503 errors.
- For product photos or specific products, ask Noel for product page links, then check them. Until then, keep search-link buttons.
