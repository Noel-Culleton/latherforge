import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

/* LatherForge homepage — Sep/Oct 2026 redesign (restored into Git from the 8 Oct 2026 deploy).
   Server component, so it ships as plain HTML: fast on mobile and fully readable by Google. */

const TITLE = "Soap Making Business Software & Free Soap Calculator | LatherForge"
const DESCRIPTION = "LatherForge runs the business behind handmade soap: batches, cure dates, true cost per bar and UK/EU compliance records in one place. Free soap calculator and Etsy pricing calculator, no signup."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['soap making software', 'soap business', 'soap calculator', 'lye calculator', 'etsy pricing calculator', 'handmade soap', 'soap maker tools'],
  alternates: { canonical: 'https://latherforge.com/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://latherforge.com/',
    siteName: 'LatherForge',
    title: "LatherForge — the business behind your soap",
    description: DESCRIPTION,
    locale: 'en_IE',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LatherForge — the business behind your soap",
    description: DESCRIPTION,
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://latherforge.com/#org",
      "name": "LatherForge",
      "url": "https://latherforge.com/",
      "email": "hello@latherforge.com"
    },
    {
      "@type": "WebSite",
      "@id": "https://latherforge.com/#website",
      "url": "https://latherforge.com/",
      "name": "LatherForge",
      "publisher": {
        "@id": "https://latherforge.com/#org"
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "LatherForge",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": "https://latherforge.com/",
      "description": "LatherForge runs the business behind handmade soap: batches, cure dates, true cost per bar and UK/EU compliance records in one place. Free soap calculator and Etsy pricing calculator, no signup.",
      "publisher": {
        "@id": "https://latherforge.com/#org"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Starter",
          "price": "0",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "name": "Craft Pack",
          "price": "29",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "name": "Business Pack",
          "price": "49",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "name": "Studio",
          "price": "89",
          "priceCurrency": "EUR"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is LatherForge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LatherForge is business software for handmade soap makers who sell. It keeps your recipes, production batches, cure dates, cost per bar, pricing and compliance records together in one dashboard, so you stop running the business from notebooks and spreadsheets."
          }
        },
        {
          "@type": "Question",
          "name": "Is the soap calculator really free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Soap Calculator (lye, water and superfat for cold and hot process soap) and the Etsy Pricing Calculator are free to use with no signup and no card. They are two of the tools inside LatherForge, open to every maker."
          }
        },
        {
          "@type": "Question",
          "name": "When does LatherForge launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LatherForge goes live on 1 January 2027. Join the waitlist and you get one email when it opens, plus 14 days free on launch day."
          }
        },
        {
          "@type": "Question",
          "name": "How much does LatherForge cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Starter is free. The Craft Pack is €29 a month and covers everything a serious soap maker needs. The Business Pack (€49 a month) and Studio (€89 a month) are for growing brands, multi-channel sellers and small teams."
          }
        },
        {
          "@type": "Question",
          "name": "Does LatherForge help with UK and EU cosmetic compliance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It keeps ingredient lists, batch numbers, safety-assessment records and label data together with the products they belong to, so your paperwork is organised before anyone asks for it. LatherForge organises your records; a qualified safety assessor still has to sign off your products."
          }
        },
        {
          "@type": "Question",
          "name": "I sell on Etsy. How does LatherForge help me price?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the free Etsy Pricing Calculator to see Etsy fees, your true cost per unit and what you actually keep, in USD, GBP or EUR. Inside LatherForge, your real cost per bar comes from your recipes and batches, so your price is a decision instead of a guess."
          }
        }
      ]
    }
  ]
}

const CSS = "\n.lf{--w:#3B2A20;--wd:#1C1511;--g:#F2C94C;--gs:#E9CF97;--s:#4F5E45;--c:#F6F1E7;--ink:#2A1E16;--mut:#6E5B4C;--line:#E4D9C6;\n  font-family:'Jost',system-ui,-apple-system,'Segoe UI',sans-serif;color:var(--ink);background:var(--c)}\n.lf *{box-sizing:border-box}\n.lf a{color:inherit}\n.lf .wrap{max-width:1120px;margin:0 auto;padding:0 20px}\n.lf h1,.lf h2,.lf h3{font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;line-height:1.08;margin:0}\n.lf p{margin:0}\n.lf .kick{font-size:.78rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase}\n.lf .btn{display:inline-block;background:var(--g);color:var(--wd);font-weight:600;padding:15px 26px;border-radius:8px;text-decoration:none;font-size:1rem;transition:transform .15s,background .15s}\n.lf .btn:hover{background:#FFD95E;transform:translateY(-1px)}\n.lf .btn.ghost{background:transparent;border:1.5px solid currentColor;color:inherit}\n.lf .btn.ghost:hover{background:rgba(255,255,255,.08)}\n.lf .ul{text-decoration:underline;text-underline-offset:3px}\n\n/* replaces band */\n.lf .rep{background:var(--wd);color:#D8C9B3;padding:84px 0 14px}\n.lf .rep .wrap{display:flex;flex-wrap:wrap;align-items:center;gap:10px 18px;justify-content:center}\n.lf .rep .kick{color:var(--g)}\n.lf .rep s{text-decoration-color:#E0463B;text-decoration-thickness:2px;font-size:.92rem;white-space:nowrap}\n\n/* hero */\n.lf .hero{background:radial-gradient(120% 90% at 20% 0%,#3A2A1F 0%,var(--wd) 70%);color:var(--c);padding:44px 0 72px}\n.lf .hero .grid{display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:center}\n.lf .hero .kick{color:var(--gs)}\n.lf .hero h1{font-size:clamp(2.5rem,5.4vw,4.3rem);margin:14px 0 20px;color:#fff}\n.lf .hero h1 em{font-style:italic;color:var(--g)}\n.lf .hero .lede{font-size:1.15rem;line-height:1.65;color:#E6DACB;max-width:560px}\n.lf .hero .note{margin-top:14px;font-size:.95rem;color:#CDBBA5}\n.lf .hero .ctas{display:flex;flex-wrap:wrap;gap:12px;margin-top:26px}\n.lf .hero .small{margin-top:12px;font-size:.85rem;color:#A8927C}\n.lf .dash{background:#FBF8F2;color:var(--ink);border-radius:18px;padding:22px;box-shadow:0 30px 80px rgba(0,0,0,.45)}\n.lf .dash .top{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px}\n.lf .dash .top b{font-family:'Cormorant Garamond',Georgia,serif;font-size:1.35rem}\n.lf .dash .top span{font-size:.72rem;color:var(--mut);text-transform:uppercase;letter-spacing:.1em}\n.lf .card{background:#fff;border:1px solid var(--line);border-radius:12px;padding:14px 16px;margin-top:10px}\n.lf .card .kick{color:var(--s);font-size:.7rem}\n.lf .row{display:flex;justify-content:space-between;font-size:.92rem;padding:5px 0;border-top:1px dashed var(--line)}\n.lf .row:first-of-type{border-top:0}\n.lf .ok{color:var(--s);font-weight:600}\n.lf .big{font-family:'Cormorant Garamond',Georgia,serif;font-size:2.3rem;font-weight:700;line-height:1;margin:4px 0}\n.lf .two{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n.lf .two .card{margin-top:10px}\n.lf .tiny{font-size:.78rem;color:var(--mut)}\n\n/* sections */\n.lf section.sec{padding:80px 0}\n.lf .head{max-width:680px;margin-bottom:36px}\n.lf .head h2{font-size:clamp(2rem,4vw,3rem);margin:10px 0 12px}\n.lf .head p{font-size:1.08rem;line-height:1.65;color:var(--mut)}\n.lf .comp{background:#EEF0E8}\n.lf .comp .kick{color:var(--s)}\n.lf .comp .grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start}\n.lf .ticks{list-style:none;padding:0;margin:0;display:grid;gap:12px}\n.lf .ticks li{background:#fff;border:1px solid #D8DDCE;border-radius:12px;padding:14px 16px 14px 48px;position:relative;font-size:1rem}\n.lf .ticks li:before{content:'';position:absolute;left:16px;top:50%;width:20px;height:20px;margin-top:-10px;border-radius:50%;background:var(--s)}\n.lf .ticks li:after{content:'';position:absolute;left:22px;top:50%;width:8px;height:4px;margin-top:-4px;border-left:2px solid #fff;border-bottom:2px solid #fff;transform:rotate(-45deg)}\n\n.lf .tools .kick{color:#9A6B12}\n.lf .tgrid{display:grid;grid-template-columns:1fr 1fr;gap:20px}\n.lf .tool{display:block;background:#fff;border:1px solid var(--line);border-radius:16px;padding:28px;text-decoration:none;transition:transform .15s,box-shadow .15s}\n.lf .tool:hover{transform:translateY(-3px);box-shadow:0 14px 40px rgba(59,42,32,.12)}\n.lf .tool h3{font-size:1.9rem;margin:6px 0 10px}\n.lf .tool p{color:var(--mut);line-height:1.6}\n.lf .tool .go{display:inline-block;margin-top:18px;font-weight:600;color:var(--w);border-bottom:2px solid var(--g);padding-bottom:2px}\n\n.lf .feat{background:#fff}\n.lf .feat .kick{color:#9A6B12}\n.lf .fgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}\n.lf .f{border-top:3px solid var(--g);padding-top:18px}\n.lf .f h3{font-size:1.6rem;margin-bottom:8px}\n.lf .f p{color:var(--mut);line-height:1.6}\n\n.lf .vid{display:grid;grid-template-columns:1.2fr .8fr;gap:32px;align-items:center;margin-top:56px}\n.lf .vid .frame{position:relative;aspect-ratio:16/9;border-radius:14px;overflow:hidden;background:var(--wd);box-shadow:0 14px 40px rgba(59,42,32,.18)}\n.lf .vid iframe{position:absolute;inset:0;width:100%;height:100%;border:0}\n.lf .vid h3{font-size:2rem;margin:8px 0 10px}\n.lf .vid p{color:var(--mut);line-height:1.6}\n.lf .vid .go{display:inline-block;margin-top:16px;font-weight:600;color:var(--w);border-bottom:2px solid var(--g);padding-bottom:2px;text-decoration:none}\n\n.lf .founder{background:var(--c);text-align:center}\n.lf .founder blockquote{margin:0 auto;max-width:820px}\n.lf .founder blockquote p{font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(1.6rem,3vw,2.3rem);font-style:italic;line-height:1.35;color:var(--w)}\n.lf .founder footer{margin-top:18px;font-size:.9rem;letter-spacing:.08em;text-transform:uppercase;color:var(--mut)}\n\n.lf .price .kick{color:#9A6B12}\n.lf .pgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;align-items:stretch}\n.lf .p{background:#fff;border:1px solid var(--line);border-radius:16px;padding:28px;display:flex;flex-direction:column}\n.lf .p.hot{background:var(--w);color:var(--c);border-color:var(--w);position:relative}\n.lf .p .tag{position:absolute;top:-12px;left:28px;background:var(--g);color:var(--wd);font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:5px 10px;border-radius:999px}\n.lf .p h3{font-size:1.7rem}\n.lf .p .amt{font-family:'Cormorant Garamond',Georgia,serif;font-size:3rem;font-weight:700;margin:8px 0}\n.lf .p .amt small{font-family:'Jost',sans-serif;font-size:.9rem;font-weight:400;opacity:.75}\n.lf .p p{line-height:1.6;opacity:.85;flex:1}\n.lf .p .btn{margin-top:22px;text-align:center}\n.lf .p:not(.hot) .btn{background:transparent;border:1.5px solid var(--w);color:var(--w)}\n\n.lf .faq{background:#fff}\n.lf .faq details{border-bottom:1px solid var(--line);padding:18px 0}\n.lf .faq summary{cursor:pointer;font-family:'Cormorant Garamond',Georgia,serif;font-size:1.45rem;font-weight:600;list-style:none;display:flex;justify-content:space-between;gap:16px}\n.lf .faq summary::-webkit-details-marker{display:none}\n.lf .faq summary:after{content:'+';color:#9A6B12;font-family:'Jost',sans-serif;font-weight:400}\n.lf .faq details[open] summary:after{content:'–'}\n.lf .faq details p{margin-top:10px;color:var(--mut);line-height:1.7;max-width:760px}\n\n.lf .final{background:var(--wd);color:var(--c);text-align:center;padding:90px 0}\n.lf .final h2{font-size:clamp(2.2rem,5vw,3.6rem);color:#fff;margin-bottom:14px}\n.lf .final p{color:#CDBBA5;font-size:1.1rem;margin-bottom:28px}\n\n@media (max-width:860px){\n  .lf .hero .grid,.lf .comp .grid,.lf .tgrid,.lf .fgrid,.lf .pgrid,.lf .vid{grid-template-columns:1fr}\n  .lf .hero{padding-top:28px}\n  .lf section.sec{padding:60px 0}\n  .lf .pgrid{gap:28px}\n}\n@media (prefers-reduced-motion:reduce){.lf *{transition:none!important}}\n"

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
    <Nav />
    <main className="lf">
      <div data-strip="promise" style={{"background": "var(--g)", "color": "var(--wd)", "textAlign": "center", "padding": "9px 20px", "fontSize": "0.78rem", "fontWeight": 600, "letterSpacing": "0.14em", "textTransform": "uppercase", "margin": "68px 0 -56px", "position": "relative", "zIndex": 1, "lineHeight": "20px"}}>
        Always more than you pay for.
      </div>
      <div className="rep" aria-label="What LatherForge replaces">
        <div className="wrap">
          <span className="kick">
            What it replaces
          </span>
          <s>
            Scrap-paper recipes
          </s>
          <s>
            Five spreadsheets
          </s>
          <s>
            Guessed margins
          </s>
          <s>
            Cure dates on masking tape
          </s>
          <s>
            A folder of loose safety paperwork
          </s>
        </div>
      </div>
      <section className="hero">
        <div className="wrap grid">
          <div>
            <p className="kick">
              Soap making business software · for makers who sell
            </p>
            <h1>
              {"Your soap is handmade. "}
              <em>
                Your business shouldn't be held together by hand.
              </em>
            </h1>
            <p className="lede">
              LatherForge runs the business behind your soap — batches, cure dates, true cost per bar and compliance records in one dashboard. Priced for makers, not manufacturers.
            </p>
            <p className="note">
              {"Live 1 January 2027. Join the waitlist and get "}
              <strong>
                14 days free
              </strong>
              {" on launch day."}
            </p>
            <div className="ctas">
              <Link href="/early-access/" className="btn">
                Get launch access
              </Link>
              <Link href="/lye-calculator/" className="btn ghost">
                Free Soap Calculator
              </Link>
            </div>
            <p className="small">
              One email at launch. No spam, unsubscribe any time. The calculators need no signup.
            </p>
          </div>
          <div className="dash" aria-label="Example LatherForge dashboard">
            <div className="top">
              <b>
                Today at the Forge
              </b>
              <span>
                Example dashboard
              </span>
            </div>
            <div className="card">
              <p className="kick">
                Cure-Lock Tracking · 3 batches curing
              </p>
              <div className="row">
                <span>
                  Lavender & Oat
                </span>
                <span className="ok">
                  Ready Fri
                </span>
              </div>
              <div className="row">
                <span>
                  Charcoal Mint
                </span>
                <span>
                  16 days
                </span>
              </div>
              <div className="row">
                <span>
                  Goat Milk Honey
                </span>
                <span>
                  5 weeks
                </span>
              </div>
            </div>
            <div className="two">
              <div className="card">
                <p className="kick">
                  True cost per bar
                </p>
                <p className="big">
                  €1.18
                </p>
                <p className="tiny">
                  Oils, lye, fragrance, packaging and your time
                </p>
              </div>
              <div className="card">
                <p className="kick">
                  Compliance records
                </p>
                <p className="big">
                  4 of 5
                </p>
                <p className="tiny">
                  Products with safety file and label data ready
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec tools" id="free-tools">
        <div className="wrap">
          <div className="head">
            <p className="kick">
              Free tools · no signup · no card
            </p>
            <h2>
              Use them today. Keep them forever.
            </h2>
            <p>
              Two of the tools inside LatherForge, open to every maker right now.
            </p>
          </div>
          <div className="tgrid">
            <Link href="/lye-calculator/" className="tool">
              <p className="kick">
                Free soap calculator
              </p>
              <h3>
                Soap Calculator
              </h3>
              <p>
                Lye, water and superfat for cold and hot process soap recipes, checked to the Lye Safety Standard.
              </p>
              <span className="go">
                Open the Soap Calculator →
              </span>
            </Link>
            <Link href="/etsy-pricing-calculator/" className="tool">
              <p className="kick">
                Free Etsy pricing calculator
              </p>
              <h3>
                Etsy Pricing Calculator
              </h3>
              <p>
                Find the price per bar that still pays you after Etsy's fees, shipping and your materials. USD, GBP and EUR.
              </p>
              <span className="go">
                Price my bars →
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="sec comp" id="compliance">
        <div className="wrap grid">
          <div className="head">
            <p className="kick">
              UK & EU sellers
            </p>
            <h2>
              Compliance paperwork, organised before anyone asks for it.
            </h2>
            <p>
              Keep ingredient lists, safety-assessment records and label data together with the batches they belong to. LatherForge organises your records; your safety assessor still signs them off.
            </p>
          </div>
          <ul className="ticks">
            <li>
              INCI ingredient list generated from the recipe
            </li>
            <li>
              Batch numbers linked to the products you sell
            </li>
            <li>
              Safety-assessment records stored per product
            </li>
            <li>
              Product and label data kept in one place
            </li>
          </ul>
        </div>
      </section>
      <section className="sec feat" id="how-it-works">
        <div className="wrap">
          <div className="head">
            <p className="kick">
              Came from the video?
            </p>
            <h2>
              The fix you just watched, built into your week.
            </h2>
            <p>
              Every video on the channel solves one soap problem. LatherForge is where that fix lives afterwards, so you never solve it twice.
            </p>
          </div>
          <div className="fgrid">
            <div className="f">
              <h3>
                Batch Precision
              </h3>
              <p>
                Every production run logged against its recipe, checked to the Lye Safety Standard, traceable when a customer asks.
              </p>
            </div>
            <div className="f">
              <h3>
                Cure-Lock Tracking
              </h3>
              <p>
                Every bar knows its cure date. Nothing leaves the rack early, nothing gets forgotten behind the door.
              </p>
            </div>
            <div className="f">
              <h3>
                True cost per bar
              </h3>
              <p>
                Oils, lye, fragrance, packaging and your hours in one number, so your price is a decision instead of a guess.
              </p>
            </div>
          </div>
          <div className="vid">
            <div className="frame">
              <iframe src="https://www.youtube-nocookie.com/embed/48wGq_vfmM0?rel=0" title="How to Price Handmade Soap (Simple Formula That Pays You)" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true} />
            </div>
            <div>
              <p className="kick">
                Watch · 2 minutes
              </p>
              <h3>
                How to price handmade soap
              </h3>
              <p>
                A simple formula that actually pays you: materials, packaging, your time, then the margin. Run your own numbers in the free Etsy Pricing Calculator.
              </p>
              <Link href="/etsy-pricing-calculator/" className="go">
                Price my bars →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sec price" id="pricing">
        <div className="wrap">
          <div className="head">
            <p className="kick">
              Pricing
            </p>
            <h2>
              One system. One login. One fair price.
            </h2>
            <p>
              Business-software control at a maker's price. Start free, step up when the orders get real.
            </p>
            <p style={{"fontFamily": "'Cormorant Garamond', Georgia, serif", "fontStyle": "italic", "fontSize": "1.5rem", "lineHeight": 1.35, "marginTop": "20px", "color": "var(--w)", "borderLeft": "3px solid var(--g)", "paddingLeft": "16px"}}>
              Every Craft Pack should be worth more than its €29. If it isn't, we haven't done our job.
            </p>
          </div>
          <div className="pgrid">
            <div className="p">
              <h3>
                Starter
              </h3>
              <p className="amt">
                Free
              </p>
              <p>
                Get organised. Recipes, first batches and cure dates out of the notebook.
              </p>
              <Link href="/early-access/" className="btn">
                Start free at launch
              </Link>
            </div>
            <div className="p hot">
              <span className="tag">
                Most makers start here
              </span>
              <h3>
                Craft Pack
              </h3>
              <p className="amt">
                {"€29 "}
                <small>
                  /month
                </small>
              </p>
              <p>
                Everything a serious soap maker needs to run the business behind their soap.
              </p>
              <Link href="/early-access/" className="btn">
                Get the Craft Pack
              </Link>
            </div>
            <div className="p">
              <h3>
                Business Pack & Studio
              </h3>
              <p className="amt">
                {"€49 · €89 "}
                <small>
                  /month
                </small>
              </p>
              <p>
                For growing artisan brands, multi-channel sellers and small teams.
              </p>
              <Link href="/early-access/" className="btn">
                Get launch access
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{"background": "radial-gradient(120% 90% at 20% 0%, #3A2A1F 0%, var(--wd) 70%)", "color": "var(--c)"}}>
        <div className="wrap">
          <p className="kick" style={{"color": "var(--gs)"}}>
            Value over volume
          </p>
          <div style={{"width": "64px", "height": "3px", "background": "var(--g)", "margin": "16px 0 22px"}} />
          <h2 style={{"fontSize": "clamp(2.4rem, 6vw, 4.6rem)", "color": "#fff", "maxWidth": "820px"}}>
            <em style={{"fontStyle": "italic", "color": "var(--g)"}}>
              Always
            </em>
            {" more than you pay for."}
          </h2>
          <div className="fgrid" style={{"marginTop": "48px"}}>
            <div className="f">
              <p style={{"fontFamily": "'Cormorant Garamond', Georgia, serif", "fontSize": "2.6rem", "fontWeight": 600, "lineHeight": 1, "color": "var(--g)", "marginBottom": "10px"}}>
                01
              </p>
              <h3 style={{"color": "#fff"}}>
                Start free.
              </h3>
              <p style={{"color": "#D8C9B3", "lineHeight": 1.65}}>
                Starter costs nothing, and the soap and Etsy pricing calculators need no signup.
              </p>
            </div>
            <div className="f">
              <p style={{"fontFamily": "'Cormorant Garamond', Georgia, serif", "fontSize": "2.6rem", "fontWeight": 600, "lineHeight": 1, "color": "var(--g)", "marginBottom": "10px"}}>
                02
              </p>
              <h3 style={{"color": "#fff"}}>
                One fair price.
              </h3>
              <p style={{"color": "#D8C9B3", "lineHeight": 1.65}}>
                One system, one login. The Craft Pack is €29 a month and should be worth more than that.
              </p>
            </div>
            <div className="f">
              <p style={{"fontFamily": "'Cormorant Garamond', Georgia, serif", "fontSize": "2.6rem", "fontWeight": 600, "lineHeight": 1, "color": "var(--g)", "marginBottom": "10px"}}>
                03
              </p>
              <h3 style={{"color": "#fff"}}>
                Built around your week.
              </h3>
              <p style={{"color": "#D8C9B3", "lineHeight": 1.65}}>
                Batches, cure dates, true cost per bar and compliance records, so every feature earns its place.
              </p>
            </div>
          </div>
          <div style={{"marginTop": "44px"}}>
            <a className="btn" href="/early-access/">
              Get launch access
            </a>
          </div>
        </div>
      </section>
      <section className="sec faq" id="faq">
        <div className="wrap">
          <div className="head">
            <p className="kick" style={{"color": "#9A6B12"}}>
              Questions
            </p>
            <h2>
              Soap business questions, answered
            </h2>
          </div>
          <details>
            <summary>
              What is LatherForge?
            </summary>
            <p>
              LatherForge is business software for handmade soap makers who sell. It keeps your recipes, production batches, cure dates, cost per bar, pricing and compliance records together in one dashboard, so you stop running the business from notebooks and spreadsheets.
            </p>
          </details>
          <details>
            <summary>
              Is the soap calculator really free?
            </summary>
            <p>
              Yes. The Soap Calculator (lye, water and superfat for cold and hot process soap) and the Etsy Pricing Calculator are free to use with no signup and no card. They are two of the tools inside LatherForge, open to every maker.
            </p>
          </details>
          <details>
            <summary>
              When does LatherForge launch?
            </summary>
            <p>
              LatherForge goes live on 1 January 2027. Join the waitlist and you get one email when it opens, plus 14 days free on launch day.
            </p>
          </details>
          <details>
            <summary>
              How much does LatherForge cost?
            </summary>
            <p>
              Starter is free. The Craft Pack is €29 a month and covers everything a serious soap maker needs. The Business Pack (€49 a month) and Studio (€89 a month) are for growing brands, multi-channel sellers and small teams.
            </p>
          </details>
          <details>
            <summary>
              Does LatherForge help with UK and EU cosmetic compliance?
            </summary>
            <p>
              It keeps ingredient lists, batch numbers, safety-assessment records and label data together with the products they belong to, so your paperwork is organised before anyone asks for it. LatherForge organises your records; a qualified safety assessor still has to sign off your products.
            </p>
          </details>
          <details>
            <summary>
              I sell on Etsy. How does LatherForge help me price?
            </summary>
            <p>
              Use the free Etsy Pricing Calculator to see Etsy fees, your true cost per unit and what you actually keep, in USD, GBP or EUR. Inside LatherForge, your real cost per bar comes from your recipes and batches, so your price is a decision instead of a guess.
            </p>
          </details>
        </div>
      </section>
      <section className="sec founder">
        <div className="wrap">
          <blockquote>
            <p>
              “Soap makers are brilliant at the craft and badly served by software. I built LatherForge to give a one-person soap business the same control a factory has, at a price a maker can actually afford.”
            </p>
            <footer>
              Noel Culleton, founder · Co. Wicklow, Ireland
            </footer>
          </blockquote>
          <div style={{"width": "48px", "height": "3px", "background": "var(--g)", "margin": "48px auto 0"}} />
          <blockquote style={{"marginTop": "40px"}}>
            <p>
              “We'd rather give 100 makers more than they pay for than sell 10,000 something they don't use.”
            </p>
            <footer>
              — Noel Culleton, Founder
            </footer>
          </blockquote>
        </div>
      </section>
      <section className="final">
        <div className="wrap">
          <h2>
            Stop running a real business on scrap paper.
          </h2>
          <p>
            Live 1 January 2027. Waitlist members get 14 days free on launch day.
          </p>
          <Link href="/early-access/" className="btn">
            Get launch access
          </Link>
        </div>
      </section>
    </main>
      <Footer />
    </>
  )
}
