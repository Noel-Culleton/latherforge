# LatherForge launch emails (drafts for Noel's review)

Placeholders in [brackets] depend on Monday-review decisions (prices, trial terms, discount). Nothing here is sent until checkout is live, the grant officer has said OK, and Noel approves the final wording.

Rules for all of them: plain text feel, one link, no fake urgency, no unverifiable claims, and an unsubscribe link in every marketing email (recovery #2 and win-back go only to people who ticked marketing consent).

---

## 1. Checkout recovery #1 (1 hour after an abandoned checkout, no discount)
**Trigger:** Stripe `checkout.session.expired` (transactional, about their own unfinished order).
**Subject:** Your LatherForge sign-up is waiting

Hi [first name],

You started signing up for LatherForge [plan] but didn't finish. No problem, your spot is saved.

Pick up where you left off: [recovery link]

If something got in the way, like a payment issue or a question about the plan, just reply to this email and I'll help.

Noel
LatherForge

---

## 2. Checkout recovery #2 (2 days later, consent only, optional offer)
**Trigger:** still no subscription 48 hours after #1, AND marketing consent ticked.
**Subject:** A small thank-you if you'd still like to try LatherForge

Hi [first name],

Still thinking about LatherForge? Here's [first month for €15 / no offer] to make it easier to try.

Use it here: [recovery link with coupon]. The offer ends [date, 7 days].

LatherForge keeps your recipes, batches, cost per bar and labels in one place, so the business side of soap making takes less of your evening.

Noel
[Unsubscribe]

---

## 3. Welcome (straight after sign-up)
**Subject:** Welcome to LatherForge, here's where to start

Hi [first name],

Welcome! Three things to do first (about 10 minutes):

1. Add your first recipe. The lye calculator fills in automatically.
2. Log a batch so its cure date is tracked.
3. Check your cost per bar. Most makers are surprised by this one.

Start here: [app link]

Your [14-day free trial] runs until [date]. [You won't be charged before then / Card details: per final trial terms.]

Any questions, just reply. It comes straight to me.

Noel

---

## 4. Trial ends in 3 days
**Subject:** Your LatherForge trial ends on [date]

Hi [first name],

Your free trial ends on [date]. After that, [plan] is [price, currency, per month], and you can cancel any time from Settings → Manage billing.

So far you've added [X recipes / Y batches]. Everything you've entered stays in your account.

Keep going: [billing link]
Not for you? You don't need to do anything[ / Cancel here: link].

Noel

---

## 5. Cancellation / win-back (sent when someone cancels; consent only for the offer)
**Subject:** Sorry to see you go

Hi [first name],

Your LatherForge subscription is cancelled and won't renew. You keep access until [period end].

Could you tell me why? Just reply with one word: price, features, time, or other. I read every answer, and it shapes what I build next.

[If consent: If you'd like to come back, here's [offer, e.g. 50% off 2 months] until [date]: link]

Thanks for trying it.
Noel

---

### Before any of these go live
- [ ] Final prices, trial terms and discount from the Monday decisions
- [ ] Legal footer: business name, address, unsubscribe link on marketing emails
- [ ] Recovery #2 and the win-back offer only to people with marketing consent
- [ ] Test each one in Stripe test mode
