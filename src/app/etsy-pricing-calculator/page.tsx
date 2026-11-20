import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import EtsyCalculator from './EtsyCalculator'

export const metadata: Metadata = {
  title: { absolute: "Etsy Pricing Calculator for Handmade Sellers — Fees, Cost & Real Profit | LatherForge" },
  description: "Free Etsy pricing calculator. Enter your materials, labour and listing price — get Etsy fees, true cost per unit and what you actually keep. US, UK and EUR. No signup.",
  keywords: ["etsy pricing calculator", "etsy fee calculator", "etsy profit calculator", "etsy fees uk", "etsy seller fees uk", "etsy fee calculator uk", "etsy calculator uk", "craft pricing calculator", "handmade pricing calculator", "soap pricing calculator"],
  alternates: { canonical: 'https://latherforge.com/etsy-pricing-calculator/' },
  openGraph: {
    title: "Etsy Pricing Calculator — Fees, Cost & Real Profit",
    description: "Every other Etsy calculator asks what your product costs to make. This one works it out. Free, no signup, US/UK/EUR rates.",
    url: 'https://latherforge.com/etsy-pricing-calculator/',
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "LatherForge Etsy Pricing Calculator",
  "description": "Free Etsy pricing calculator for handmade sellers — builds your true cost per unit from materials, labour and packaging, then runs it through current Etsy fees to show real profit and margin.",
  "url": "https://latherforge.com/etsy-pricing-calculator/",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
}

export default function EtsyPricingCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How much does Etsy take from a $100 sale?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"On a $100 item with free shipping, sold by a US seller with Offsite Ads off: a $0.20 listing fee, a 6.5% transaction fee of $6.50, and payment processing of 3% plus $0.25, which is $3.25. Total fees $9.95, so you keep $90.05. That is before what the item cost you to make, which is the number this page exists to work out. Add Offsite Ads at 15% and the fee total becomes $24.95, leaving $75.05.\"}},{\"@type\":\"Question\",\"name\":\"How to calculate Etsy fees?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Add the listing fee, the transaction fee and the payment processing fee, plus Offsite Ads if the sale came through one. Written out: total fees = listing fee + 6.5% of (item price + shipping you charge) + (your country processing percentage of that same total, plus the flat per-transaction fee) + any Offsite Ads percentage of that total. Subtract the result from what the buyer paid you to get net revenue, then subtract what the item cost you to make and what the shipping actually cost you to get real profit.\"}},{\"@type\":\"Question\",\"name\":\"How much do Etsy take in fees?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"For a typical handmade sale with no Offsite Ads, roughly 10% to 11% of what the buyer pays, once the listing fee, the 6.5% transaction fee and payment processing are added together. If the sale is attributed to Offsite Ads, add another 12% or 15% and the total lands nearer 22% to 26%. Percentages alone will not tell you whether a listing is worth making, because they say nothing about what the item cost you.\"}},{\"@type\":\"Question\",\"name\":\"Does Etsy charge a $29 fee?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"There is no $29 fee in Etsy’s published fee schedule. A charge around that size is usually one of three things: several months of listing and renewal fees settling at once, a one-off shop set-up fee that Etsy charges new sellers in some countries at an amount that varies by country, or an optional subscription you have turned on. Open your Payment account and read the fee lines individually rather than trusting a single total.\"}},{\"@type\":\"Question\",\"name\":\"How do I price handmade soap for Etsy?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Start at the cost, not at the price. Work out what one bar actually costs you: the oils, lye and fragrance for the batch divided by how many bars the batch yields, plus packaging, plus your time at a real hourly rate. Then add the Etsy fees on top and set a price that leaves a margin you can grow on. Pricing by looking at what other sellers charge tells you what the market looks like, not whether your bar makes money at that number. Work out your batch first in the free LatherForge soap calculator, then bring the cost here.\"}},{\"@type\":\"Question\",\"name\":\"What is a good profit margin on handmade products?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Under 20% is a hobby with extra steps — it will not survive a supplier price rise or a slow month. Between 20% and 40% is a real business that cannot yet fund its own growth. Over 40% is where a handmade product has room to absorb a bad batch, a fee change and a wholesale order without falling over. Wholesale is usually priced at roughly half retail, so a retail margin under 50% often means there is no wholesale version of your product at all.\"}}]}" }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://latherforge.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Etsy Pricing Calculator\",\"item\":\"https://latherforge.com/etsy-pricing-calculator/\"}]}" }} />
    <Nav />
    <main style={{"paddingTop": "68px"}}>
      <section style={{"background": "linear-gradient(160deg, #FAF7F2 0%, #EBF2EC 100%)", "padding": "4rem 0 3rem"}}>
        <div className="container">
          <nav style={{"fontSize": "0.8rem", "color": "#9A8878", "marginBottom": "1.5rem"}}>
            <a href="/" style={{"color": "#9A8878"}}>
              Home
            </a>
            <span style={{"margin": "0 0.5rem"}}>
              →
            </span>
            <span style={{"color": "#5C3D2E"}}>
              Etsy Pricing Calculator
            </span>
          </nav>
          <h1 style={{"fontSize": "clamp(2rem, 5vw, 3.5rem)", "color": "#3E2820", "marginBottom": "1rem"}}>
            Etsy Pricing Calculator
          </h1>
          <p style={{"color": "#3E2820", "maxWidth": "620px", "lineHeight": 1.6, "fontSize": "1.15rem", "fontWeight": 500, "marginBottom": "1.5rem"}}>
            Every other Etsy calculator asks what your product costs to make. This one works it out.
          </p>
          <div style={{"maxWidth": "620px", "display": "flex", "flexDirection": "column", "gap": "1rem"}}>
            <p style={{"color": "#5C4A3A", "lineHeight": 1.75, "fontSize": "0.95rem", "fontWeight": 300}}>
              Etsy fee calculators are easy to find and most of them do the same job. Enter a price, get your fees back. The trouble is the line they all skip: what the thing actually cost you to make. They ask you to type that in, as if you already had it to hand.
            </p>
            <p style={{"color": "#5C4A3A", "lineHeight": 1.75, "fontSize": "0.95rem", "fontWeight": 300}}>
              You do not. That is the whole problem. The oils, the lye, the fragrance, the packaging, the weight you lose over a six-week cure, and the hour you stood at the counter — that is the number that decides whether a listing makes money, and it is the number nobody calculates for you.
            </p>
            <p style={{"color": "#5C4A3A", "lineHeight": 1.75, "fontSize": "0.95rem", "fontWeight": 300}}>
              So this one does both. Build your cost from what you actually put in the pot, then run it through Etsy’s fees and see what lands in your account.
            </p>
          </div>
        </div>
      </section>
      <EtsyCalculator />
      <section style={{"background": "#F0EAE0", "padding": "5rem 0"}}>
        <div className="container" style={{"maxWidth": "760px"}}>
          <h2 style={{"fontSize": "clamp(1.8rem, 4vw, 2.5rem)", "color": "#3E2820", "marginBottom": "2rem"}}>
            How Etsy Fees Actually Work
          </h2>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "1.5rem"}}>
            <div>
              <h3 style={{"fontSize": "1.05rem", "color": "#3E2820", "marginBottom": "0.4rem"}}>
                The listing fee is $0.20 USD per listing, and it renews.
              </h3>
              <p style={{"fontSize": "0.9rem", "color": "#5C4A3A", "lineHeight": 1.75}}>
                A listing runs for four months, then Etsy charges you again to keep it up. Sellers read “twenty cents” as a one-off. It is not — a shop with 60 listings pays that 60 times, three times a year, whether anything sells or not. Sell two of an item and you are charged again to relist the second one.
              </p>
            </div>
            <div>
              <h3 style={{"fontSize": "1.05rem", "color": "#3E2820", "marginBottom": "0.4rem"}}>
                The transaction fee is 6.5%, and it applies to your shipping too.
              </h3>
              <p style={{"fontSize": "0.9rem", "color": "#5C4A3A", "lineHeight": 1.75}}>
                Not just the item price — Etsy takes 6.5% of the price you display plus whatever you charge for shipping and gift wrapping. This is the one that catches people out. Charging €5 postage to cover a €5 postage cost leaves you short, because Etsy takes its cut of that €5 as well.
              </p>
            </div>
            <div>
              <h3 style={{"fontSize": "1.05rem", "color": "#3E2820", "marginBottom": "0.4rem"}}>
                Payment processing depends on where your bank account is, not where your buyer is.
              </h3>
              <p style={{"fontSize": "0.9rem", "color": "#5C4A3A", "lineHeight": 1.75}}>
                A US account is charged 3% plus $0.25 per transaction. A UK account is charged 4% plus £0.20. An Irish account is charged 4% plus €0.30. UK and Irish sellers pay a percentage a third higher than US sellers on every single order, which is exactly why a US-rate calculator flatters your numbers.
              </p>
            </div>
            <div>
              <h3 style={{"fontSize": "1.05rem", "color": "#3E2820", "marginBottom": "0.4rem"}}>
                Offsite Ads is 15%, or 12%, and above a threshold it stops being optional.
              </h3>
              <p style={{"fontSize": "0.9rem", "color": "#5C4A3A", "lineHeight": 1.75}}>
                Etsy advertises your listings on other platforms and charges a fee when a sale is attributed to one of those ads. Shops with under $10,000 USD in sales over the prior 365 days pay 15% and can opt out entirely. Once a shop crosses that threshold the rate drops to 12% — but participation becomes mandatory, for the lifetime of the shop, even if sales later fall back below it. The fee is capped at $100 USD on any single attributed order.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={{"background": "#FAF7F2", "padding": "5rem 0"}}>
        <div className="container" style={{"maxWidth": "760px"}}>
          <h2 style={{"fontSize": "clamp(1.8rem, 4vw, 2.5rem)", "color": "#3E2820", "marginBottom": "1.5rem"}}>
            The Cost Line Nobody Calculates
          </h2>
          <p style={{"fontSize": "0.95rem", "color": "#5C4A3A", "lineHeight": 1.8, "marginBottom": "1rem"}}>
            Ask ten handmade sellers what a unit costs them and nine will give you the material cost. That is not the cost. That is the ingredients.
          </p>
          <p style={{"fontSize": "0.95rem", "color": "#5C4A3A", "lineHeight": 1.8, "marginBottom": "1rem"}}>
            The cost is the ingredients, plus the packaging, plus the share of the fragrance bottle you used, plus the batch you lost to a seized pour, plus the water that left during cure so the bar you priced at 120 g ships at 105 g, plus your time. Miss those and every listing looks profitable while the bank account says otherwise.
          </p>
          <p style={{"fontSize": "1.05rem", "color": "#3E2820", "lineHeight": 1.7, "fontWeight": 500, "borderLeft": "3px solid #C9A84C", "paddingLeft": "1.25rem"}}>
            This is why “just double your materials cost” is the single most expensive piece of advice in handmade selling.
          </p>
        </div>
      </section>
      <section style={{"background": "#EBF2EC", "padding": "5rem 0"}}>
        <div className="container" style={{"maxWidth": "760px"}}>
          <h2 style={{"fontSize": "clamp(1.8rem, 4vw, 2.5rem)", "color": "#3E2820", "marginBottom": "1.5rem"}}>
            Etsy Fees for UK and EU Sellers
          </h2>
          <p style={{"fontSize": "0.95rem", "color": "#5C4A3A", "lineHeight": 1.8, "marginBottom": "1rem"}}>
            Most Etsy fee calculators are built on US rates, and the difference is not cosmetic. Payment processing for a UK bank account is 4% plus £0.20 per transaction; for an Irish account it is 4% plus €0.30. A US seller pays 3% plus $0.25. On a £12 order that gap is small. Across a year of orders it is a line item.
          </p>
          <p style={{"fontSize": "0.95rem", "color": "#5C4A3A", "lineHeight": 1.8, "marginBottom": "1rem"}}>
            The 6.5% transaction fee applies to the shipping you charge, and UK and Irish sellers tend to charge more shipping than US sellers do, because more of their orders cross a border. Every pound of postage you pass to the buyer hands Etsy another 6.5p. Switch the currency selector above to your own before you trust any number on this page.
          </p>
          <p style={{"fontSize": "0.95rem", "color": "#5C4A3A", "lineHeight": 1.8, "marginBottom": "1rem"}}>
            Selling cross-border adds a currency conversion on top, applied when Etsy converts the buyer’s payment into your shop currency. It is not in the fee list above because the rate moves — but it is real, and it lands on every order priced in a currency that is not yours.
          </p>
          <p style={{"fontSize": "0.95rem", "color": "#5C4A3A", "lineHeight": 1.8}}>
            <strong style={{"color": "#3E2820"}}>
              On VAT:
            </strong>
            {" whether you charge VAT depends on your turnover and where your buyers are — that is a question for your accountant, not a calculator. Nothing on this page adds or removes VAT. If you are VAT registered, put your figures in excluding VAT and read the result the same way."}
          </p>
        </div>
      </section>
      <section style={{"background": "#FAF7F2", "padding": "5rem 0"}}>
        <div className="container" style={{"maxWidth": "760px"}}>
          <h2 style={{"fontSize": "clamp(1.8rem, 4vw, 2.5rem)", "color": "#3E2820", "marginBottom": "2.5rem"}}>
            Etsy Pricing FAQ
          </h2>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "1.5rem"}}>
            <div style={{"borderBottom": "1px solid #E8DFD0", "paddingBottom": "1.5rem"}}>
              <h3 style={{"fontSize": "1.05rem", "color": "#3E2820", "marginBottom": "0.5rem"}}>
                How much does Etsy take from a $100 sale?
              </h3>
              <p style={{"fontSize": "0.9rem", "color": "#5C4A3A", "lineHeight": 1.7}}>
                On a $100 item with free shipping, sold by a US seller with Offsite Ads off: a $0.20 listing fee, a 6.5% transaction fee of $6.50, and payment processing of 3% plus $0.25, which is $3.25. Total fees $9.95, so you keep $90.05. That is before what the item cost you to make, which is the number this page exists to work out. Add Offsite Ads at 15% and the fee total becomes $24.95, leaving $75.05.
              </p>
            </div>
            <div style={{"borderBottom": "1px solid #E8DFD0", "paddingBottom": "1.5rem"}}>
              <h3 style={{"fontSize": "1.05rem", "color": "#3E2820", "marginBottom": "0.5rem"}}>
                How to calculate Etsy fees?
              </h3>
              <p style={{"fontSize": "0.9rem", "color": "#5C4A3A", "lineHeight": 1.7}}>
                Add the listing fee, the transaction fee and the payment processing fee, plus Offsite Ads if the sale came through one. Written out: total fees = listing fee + 6.5% of (item price + shipping you charge) + (your country processing percentage of that same total, plus the flat per-transaction fee) + any Offsite Ads percentage of that total. Subtract the result from what the buyer paid you to get net revenue, then subtract what the item cost you to make and what the shipping actually cost you to get real profit.
              </p>
            </div>
            <div style={{"borderBottom": "1px solid #E8DFD0", "paddingBottom": "1.5rem"}}>
              <h3 style={{"fontSize": "1.05rem", "color": "#3E2820", "marginBottom": "0.5rem"}}>
                How much do Etsy take in fees?
              </h3>
              <p style={{"fontSize": "0.9rem", "color": "#5C4A3A", "lineHeight": 1.7}}>
                For a typical handmade sale with no Offsite Ads, roughly 10% to 11% of what the buyer pays, once the listing fee, the 6.5% transaction fee and payment processing are added together. If the sale is attributed to Offsite Ads, add another 12% or 15% and the total lands nearer 22% to 26%. Percentages alone will not tell you whether a listing is worth making, because they say nothing about what the item cost you.
              </p>
            </div>
            <div style={{"borderBottom": "1px solid #E8DFD0", "paddingBottom": "1.5rem"}}>
              <h3 style={{"fontSize": "1.05rem", "color": "#3E2820", "marginBottom": "0.5rem"}}>
                Does Etsy charge a $29 fee?
              </h3>
              <p style={{"fontSize": "0.9rem", "color": "#5C4A3A", "lineHeight": 1.7}}>
                There is no $29 fee in Etsy’s published fee schedule. A charge around that size is usually one of three things: several months of listing and renewal fees settling at once, a one-off shop set-up fee that Etsy charges new sellers in some countries at an amount that varies by country, or an optional subscription you have turned on. Open your Payment account and read the fee lines individually rather than trusting a single total.
              </p>
            </div>
            <div style={{"borderBottom": "1px solid #E8DFD0", "paddingBottom": "1.5rem"}}>
              <h3 style={{"fontSize": "1.05rem", "color": "#3E2820", "marginBottom": "0.5rem"}}>
                How do I price handmade soap for Etsy?
              </h3>
              <p style={{"fontSize": "0.9rem", "color": "#5C4A3A", "lineHeight": 1.7}}>
                Start at the cost, not at the price. Work out what one bar actually costs you: the oils, lye and fragrance for the batch divided by how many bars the batch yields, plus packaging, plus your time at a real hourly rate. Then add the Etsy fees on top and set a price that leaves a margin you can grow on. Pricing by looking at what other sellers charge tells you what the market looks like, not whether your bar makes money at that number. Work out your batch first in the free LatherForge soap calculator, then bring the cost here.
              </p>
              <a href="/lye-calculator/" style={{"display": "inline-block", "marginTop": "0.6rem", "fontSize": "0.88rem", "fontWeight": 600, "color": "#7A9E7E"}}>
                Open the free soap calculator →
              </a>
            </div>
            <div style={{"borderBottom": "1px solid #E8DFD0", "paddingBottom": "1.5rem"}}>
              <h3 style={{"fontSize": "1.05rem", "color": "#3E2820", "marginBottom": "0.5rem"}}>
                What is a good profit margin on handmade products?
              </h3>
              <p style={{"fontSize": "0.9rem", "color": "#5C4A3A", "lineHeight": 1.7}}>
                Under 20% is a hobby with extra steps — it will not survive a supplier price rise or a slow month. Between 20% and 40% is a real business that cannot yet fund its own growth. Over 40% is where a handmade product has room to absorb a bad batch, a fee change and a wholesale order without falling over. Wholesale is usually priced at roughly half retail, so a retail margin under 50% often means there is no wholesale version of your product at all.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={{"background": "#5C3D2E", "padding": "5rem 0", "textAlign": "center"}}>
        <div className="container" style={{"maxWidth": "620px"}}>
          <h2 style={{"fontSize": "clamp(1.8rem, 4vw, 2.8rem)", "color": "#FAF7F2", "marginBottom": "1.25rem"}}>
            You Priced One Listing. Now Do It For Every Batch.
          </h2>
          <p style={{"color": "#C9B49A", "lineHeight": 1.75, "marginBottom": "1rem", "fontSize": "0.95rem"}}>
            This page costs you nothing and it will still be here after launch. But you just typed your material costs in by hand, and you will type them again next month, and the month after, and the figures will be a little more out of date each time.
          </p>
          <p style={{"color": "#C9B49A", "lineHeight": 1.75, "marginBottom": "1rem", "fontSize": "0.95rem"}}>
            LatherForge holds them. Every recipe costed from live ingredient prices, every batch tracked to its cure date, every product priced off what it genuinely cost to make that week — not what it cost the last time you checked.
          </p>
          <p style={{"color": "#C9B49A", "lineHeight": 1.75, "marginBottom": "2rem", "fontSize": "0.95rem"}}>
            {"Live 1 January 2027. Waitlist members get "}
            <strong style={{"color": "#F5EDD6"}}>
              14 days free
            </strong>
            {" on launch day."}
          </p>
          <a href="/early-access/" className="btn-primary">
            Join the Early Access Inner Circle
          </a>
        </div>
      </section>
    </main>
      <Footer />
    </>
  )
}
