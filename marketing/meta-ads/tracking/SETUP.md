# Waitlist Lead tracking: Zoho redirect → latherforge.com/thank-you/ → Meta Pixel `Lead`

## How it works

1. A maker submits the Zoho waitlist form on /early-access/.
2. Zoho redirects to `https://latherforge.com/thank-you/?src=waitlist`.
3. If that page opens inside the Zoho iframe, it moves itself to the full browser window.
4. The page asks for marketing-cookie consent. Only after **Allow** does it load the Meta Pixel and send `PageView` + `Lead`, once per session.
5. It strips `?src=waitlist` from the address bar, so reloads, bookmarks and direct visits never count as a Lead.

Tested in headless Chromium (both versions): no pixel on direct visits, no pixel before consent, exactly one `Lead` after Allow, no repeat on a second visit, iframe breaks out correctly, "No thanks" is remembered.

---

## Step 1: Get your Pixel ID

1. Open **Meta Events Manager** → **Data sources** → select your pixel (create one if none exists: **Connect data** → **Web**).
2. Copy the numeric **Pixel ID**.

## Step 2: Put the page on the live site

Pick the version that matches how you build the live site.

**A. Plain file upload (simplest).** Use `thank-you/index.html` from this folder.
1. Replace `YOUR_PIXEL_ID` with your Pixel ID.
2. Replace `[FILL IN: privacy policy URL]` with your privacy policy link (see the warning below).
3. Put it in your upload folder as `thank-you/index.html`, next to `early-access/`, and deploy to Vercel as usual.

**B. Next.js source.** Use the `nextjs/` folder.
1. Copy `page.tsx` and `ThankYouClient.tsx` into `src/app/thank-you/`.
2. In `ThankYouClient.tsx`, set `PIXEL_ID` and `PRIVACY_URL`.
3. `npm run build`, then upload `out/` as usual. (A build with this page was tested against the June repo and compiled cleanly.)

**Check:** open `https://latherforge.com/thank-you/` in a browser. The page should load with no cookie prompt.

## Step 3: Set the Zoho Forms redirect

Menu names are from Zoho Forms as I know it. I couldn't open Zoho's help pages from this environment, so labels may differ slightly.

1. Log in to **Zoho Forms** → open the **LatherForge Early Access** form.
2. Top bar → **Settings**.
3. Left panel → **Thank You Page** (sometimes under "After Submission").
4. Change the option from **Splash Message** to **Redirect to URL** (may be labelled **URL**).
5. Paste exactly: `https://latherforge.com/thank-you/?src=waitlist`
   - Keep the trailing slash before `?`. The site uses trailing slashes, so this avoids an extra redirect.
   - If you've confirmed the site serves on `www`, use `https://www.latherforge.com/...` instead. Use whichever address doesn't redirect.
6. If you see an **"Open in"** / **"Redirect in"** option, choose **Parent window** / **Same tab**. If there's no such option, that's fine: the page breaks out of the iframe itself.
7. **Do NOT** turn on "append field values to URL" / "pass form data". Sending emails or names in URLs breaks GDPR and Meta's rules against personal data in URLs.
8. **Save**. If Zoho asks to **Publish** the change, publish it.

## Step 4: Test end to end (5 minutes)

1. In Events Manager → your pixel → **Test events**, enter `https://latherforge.com/early-access/` and click **Open website**.
2. Submit the form with a test email (e.g. `you+test1@gmail.com`).
3. You should land on the thank-you page with the cookie prompt → click **Allow**.
4. In Test events, within a minute you should see **PageView** and **Lead**.
5. Check the Zoho entries list: the test submission is there. Delete it so it doesn't count as a real sign-up.
6. Repeat in a private window and click **No thanks**. No events should appear.

## Step 5: Set up the campaign conversion

- In Ads Manager, Campaign A (Waitlist): **Leads** objective → conversion location **Website** → pixel → event **Lead**.
- Optional: in Events Manager, add a **Custom conversion** "Waitlist sign-up" = Lead on URL containing `/thank-you`.

---

## ⚠️ Warnings

1. **Privacy policy + site-wide consent.** The June repo has no privacy policy or cookie page. You need one (GDPR, and Meta requires it for Lead tracking). If the live site has a pixel or analytics on other pages, those also need consent under Irish/UK rules. This page asks for consent itself, but the rest of the site needs a proper cookie banner before you add the pixel anywhere else. Once you have one, set it to save the same key (`lf_marketing_consent` = `granted`/`denied`) and this page will respect it.
2. **Consent means undercounting.** Visitors who click "No thanks" won't show as Leads in Meta. Your Zoho entry count is the true number. Compare them when judging cost per sign-up (and the €3 gate for US/CA/AU).
3. **Aggregated Event Measurement.** If Events Manager asks you to verify the domain or prioritise events, verify `latherforge.com` (Business Settings → Brand safety → Domains) and put `Lead` at the top.
4. **After 1 January.** Waitlist ads stop on 31 Dec. The trial sign-up page (app) needs its own event (`CompleteRegistration` or `StartTrial`) before round 2 can optimise for sign-ups. See the ad set doc.
