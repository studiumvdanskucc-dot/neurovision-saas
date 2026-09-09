"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer, Header } from "./site-shell";
import { sitePath } from "./site-path";
import { creativeExamples } from "./creative-examples";
import { CreativeVisual } from "./creative-visual";

const example = creativeExamples[1];
const demo = {
  original: { label: "Original", asset: example.original, heatmap: false, note: "Start with the original ad and the message you want people to remember." },
  attention: { label: "Attention", asset: example.original, heatmap: true, note: "A heatmap helps you compare what stands out. This overlay is a placeholder, not a prediction." },
  optimise: { label: "Recreated", asset: example.recreated, heatmap: false, note: "Compare the new headline and larger logo. Re-test to find out whether the changes help." },
} as const;

type DemoKey = keyof typeof demo;

const plans = [
  {
    name: "FREE",
    price: "€0",
    credits: "40 credits / month",
    description: "Explore before committing.",
    features: ["Predictive attention heatmaps", "AI creative critique", "Surveys up to 25 responses", "1 seat"],
    cta: "Start free",
  },
  {
    name: "STANDARD",
    price: "€25",
    credits: "200 credits / month",
    description: "For freelancers and solo marketers.",
    features: ["Everything in Free", "Surveys up to 50 responses", "1 seat"],
    cta: "Get started",
  },
  {
    name: "PRO",
    price: "€79",
    credits: "800 credits / month",
    description: "For small teams.",
    features: ["Everything in Standard", "Surveys with 100+ responses", "PDF report download", "2 seats"],
    cta: "Get started",
    featured: true,
  },
  {
    name: "PREMIUM",
    price: "€249",
    credits: "2,500 credits / month",
    description: "For agencies, e-commerce brands, and high-volume creative teams.",
    features: ["Everything in Pro", "Priority support", "5 seats"],
    cta: "Get started",
  },
];

const agencyPackages = [
  {
    label: "Diagnose and improve",
    name: "Signal Review",
    description: "A focused scientific evaluation of one campaign direction, with practical improvements your team can use immediately.",
    price: "€690",
    features: [
      "Up to 3 static assets or 1 landing page",
      "NeuroVision heatmaps & design psychology",
      "What is seen, missed and misunderstood",
      "Agentic audience pulse for 1 target profile",
      "Prioritized GenAI recommendations",
      "2 generated optimization variants",
      "Up to 3 platform-ready resizes",
      "Annotated report + A/B comparison",
      "30-minute expert readout",
      "Human-led production redesign",
    ],
  },
  {
    label: "The complete diagnostic",
    name: "Performance Deep Dive",
    description: "Our strongest analysis package for teams deciding between concepts or preparing a campaign for meaningful media spend.",
    price: "€1,390",
    features: [
      "Up to 6 assets or 2 creative concepts",
      "Full NeuroVision analysis stack",
      "NeuroVision Digital Shelf snapshot",
      "Agentic survey across 3 audience profiles",
      "Semantic, cultural & geographic risk review",
      "A/B comparison across concepts",
      "3 generated optimization variants",
      "Up to 6 platform-ready resizes",
      "Executive report + 60-minute workshop",
      "One recommendation feedback round",
      "Human-led production redesign",
    ],
    featured: true,
  },
  {
    label: "Analysis, redesign, proof",
    name: "Creative Lab",
    description: "A full optimization sprint: diagnose the campaign, redesign its most important moments and test the improved directions again.",
    price: "€2,790",
    features: [
      "Up to 10 assets or 3 creative concepts",
      "Everything in Performance Deep Dive",
      "Full NeuroVision Digital Shelf benchmark",
      "2 expert-designed creative directions",
      "Brand, copy, hierarchy and UX redesign",
      "Re-test against the original creative",
      "Campaign-ready files and required resizes",
      "90-minute creative workshop",
    ],
  },
];

const faqs = [
  ["What can I analyse?", "Upload an ad, social creative, landing page, website screenshot, packaging concept, product image or marketplace listing."],
  ["Do I need eye-tracking equipment?", "No. NeuroVision uses predictive models trained on behavioural, cognitive and eye-tracking data, so teams can evaluate early creative in the browser."],
  ["What are credits used for?", "Credits pay for each analysis, AI audience survey, generated variant or resize. All plans use the same credit costs."],
  ["Can NeuroVision replace real consumer research?", "Use NeuroVision to compare ideas and improve designs early. For important launch decisions, follow up with real customers or campaign testing."],
];

export default function Home() {
  const [active, setActive] = useState<DemoKey>("original");
  const view = demo[active];

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero" id="top">
          <div className="orb orb-a" /><div className="orb orb-b" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><i /> Creative testing before launch</p>
              <h1>
                Know what people <em className="hero-blue">will see.</em><br />
                Understand what they&apos;ll <em className="hero-violet">feel.</em><br />
                Ship <em className="hero-pink">stronger creative.</em>
              </h1>
              <p className="hero-lead">
                Upload an ad, website or packaging design. See what may catch
                the eye, explore how audiences could understand it, and create
                a better version before launch.
              </p>
              <div className="actions">
                <a className="btn primary" href="https://app.neurovision-ai.com/register">Try NeuroVision free ↗</a>
                <Link className="btn secondary" href="/how-it-works">See how it works →</Link>
              </div>
              <div className="proof"><span /><span /><span /><p>Built where <b>neuroscience</b>, behavioural science, design and AI meet.</p></div>
            </div>

            <div className="product-wrap stimulus-product">
              <div className="product">
                <div className="product-bar"><div><img src={sitePath("/logo.webp")} alt="" /><b>NeuroVision</b></div><span aria-hidden="true">•••</span><small>Creative example</small></div>
                <div className="analysis">
                  <div className="analysis-head"><span><small>Fanta · supplied example</small><b>From original to new direction</b></span><Link href="/case-studies">All examples ↗</Link></div>
                  <div className="tabs" role="group" aria-label="Explore the creative example">
                    {(Object.keys(demo) as DemoKey[]).map((key,index)=><button type="button" aria-pressed={active===key} className={active===key?"on":""} onClick={()=>setActive(key)} key={key}><small>0{index+1}</small>{demo[key].label}</button>)}
                  </div>
                  <div className="hero-stimulus"><CreativeVisual asset={view.asset} heatmap={view.heatmap} priority /></div>
                  <p className="demo-note" aria-live="polite">{view.note}</p>
                  <p className="demo-disclosure">Illustrative example. Placeholder heatmap; no measured results or brand affiliation.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container signal"><span>Attention prediction</span><span>AI audience surveys</span><span>Creative optimisation</span><span>Digital shelf intelligence</span></div>
        </section>

        <section className="section platform" id="platform">
          <div className="container">
            <div className="section-head">
              <div><p className="kicker">One connected platform</p><h2>Understand your creative. Then improve it.</h2></div>
              <p>See where attention may go, ask how audiences could understand the message, and use the findings to create the next version.</p>
            </div>
            <div className="pillars literal-pillars">
              <article>
                <span className="num">Attention model</span>
                <div className="visual literal-heatmap example-thumbnail"><CreativeVisual asset={example.original} heatmap /><span className="visual-label">PLACEHOLDER HEATMAP</span></div>
                <p className="card-kicker">Predict attention</p><h3>See what wins the first seconds.</h3>
                <p>Check whether the headline, product and logo get noticed, without eye-tracking equipment.</p>
                <ul><li>AI attention heatmaps</li><li>First-view hierarchy</li><li>Brand and CTA visibility</li></ul>
              </article>
              <article>
                <span className="num">Audience simulation</span>
                <div className="visual literal-survey"><span className="sample-label">Example survey questions</span><blockquote>What is the main message?<br />What feels unclear?<br />Is this relevant to you?</blockquote><small>AI-simulated feedback</small></div>
                <p className="card-kicker">Simulate interpretation</p><h3>Explore what the message means.</h3>
                <p>Explore how defined audiences may interpret your message, product and brand before launch.</p>
                <ul><li>AI audience surveys</li><li>Defined audience profiles</li><li>Clarity, relevance and trust</li></ul>
              </article>
              <article>
                <span className="num">Creative optimisation</span>
                <div className="visual literal-optimise"><div><span>Original</span><img src={sitePath(creativeExamples[2].original.src)} alt={creativeExamples[2].original.alt} /></div><b aria-hidden="true">→</b><div><span>Recreated</span><img src={sitePath(creativeExamples[2].recreated.src)} alt={creativeExamples[2].recreated.alt} /></div><small>Illustrative redesign</small></div>
                <p className="card-kicker">Generate &amp; compare</p><h3>Move from insight to usable creative.</h3>
                <p>Create a new version from the findings, then run the same checks on both designs.</p>
                <ul><li>Optimised variants</li><li>Platform-ready resizes</li><li>Brand-guided generation</li></ul>
              </article>
            </div>
            <div className="section-actions"><Link className="btn secondary" href="/how-it-works">Explore the complete workflow →</Link><Link className="text-link dark" href="/case-studies">Explore original and recreated examples ↗</Link></div>
          </div>
        </section>

        <section className="section compare">
          <div className="container compare-grid">
            <div><p className="kicker">Decisions before launch</p><h2>Three useful answers. One connected workflow.</h2><p>Start with attention. Add audience feedback and redesign when your project needs them.</p></div>
            <div className="comparison output-comparison">
              <div><b>Attention</b><span>What is likely to get noticed?</span></div>
              <div><b>Understanding</b><span>How might the audience read the message?</span></div>
              <div><b>Improvement</b><span>What should change in the next version?</span></div>
            </div>
          </div>
        </section>

        <section className="section pricing" id="pricing">
          <div className="container">
            <div className="pricing-head"><p className="kicker">Pricing</p><h2>Start free. Upgrade as your team grows.</h2><p>Use one credit balance for attention analysis, AI audience surveys and creative improvement.</p></div>
            <div className="plan-grid">
              {plans.map(plan => (
                <article className={plan.featured ? "featured" : ""} key={plan.name}>
                  {plan.featured && <em>Most popular</em>}
                  <h3>{plan.name}</h3><p className="desc">{plan.description}</p>
                  <p className="price"><b>{plan.price}</b><span>/ month</span></p>
                  <p className="credits"><span>Monthly allowance</span><b>{plan.credits}</b></p>
                  <ul>{plan.features.map(f => <li key={f}><span>✓</span>{f}</li>)}</ul>
                  <a className={`btn ${plan.featured ? "primary" : "secondary"}`} href="https://app.neurovision-ai.com/register">{plan.cta} ↗</a>
                </article>
              ))}
            </div>
            <div className="credit-explainer">
              <div className="credit-explainer-head">
                <div><p className="kicker">How credits are used</p><h3>One credit wallet. Different actions.</h3></div>
                <p>Each action uses credits from your monthly balance. The same costs apply to every plan.</p>
              </div>
              <div className="credit-guide">
                <div><b>5</b><span><strong>Creative Analysis</strong><small>1 design or image · Attention heatmap + AI critique</small></span></div>
                <div><b>20</b><span><strong>Survey · 25 responses</strong><small>Small audience simulation · Fast early feedback</small></span></div>
                <div><b>35</b><span><strong>Survey · 50 responses</strong><small>Standard audience simulation · Compare audience responses</small></span></div>
                <div><b>60</b><span><strong>Survey · 100 responses</strong><small>Large audience simulation · Explore more simulated responses</small></span></div>
              </div>
              <p className="pricing-note">Surveys over 100 responses start at 60 credits + 45 credits for each additional 100 responses.</p>
            </div>
          </div>
        </section>

        <section className="section agency-pricing" id="agency">
          <div className="container">
            <div className="agency-head">
              <p className="kicker">Done-for-you agency services</p>
              <h2>Don&apos;t want to get your hands dirty? No problem.</h2>
              <p>NeuroVision can also work as your agency partner. We run the analysis, improve the creative and ship the final results—ready for your team to use.</p>
            </div>
            <div className="agency-grid">
              {agencyPackages.map(pkg => (
                <article className={pkg.featured ? "agency-card featured" : "agency-card"} key={pkg.name}>
                  <div className="agency-labels">
                    <span>{pkg.label}</span>
                    {pkg.featured && <em>Most popular</em>}
                  </div>
                  <h3>{pkg.name}</h3>
                  <p className="agency-description">{pkg.description}</p>
                  <p className="agency-price"><b>{pkg.price}</b><span>per campaign<small>excl. VAT</small></span></p>
                  <a className={`btn ${pkg.featured ? "primary" : "white"}`} href={`mailto:info@neurovision-ai.com?subject=NeuroVision%20${encodeURIComponent(pkg.name)}`}>Choose {pkg.name} ↗</a>
                  <ul>{pkg.features.map(feature => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section route-teasers">
          <div className="container route-teaser-grid">
            <Link href="/use-cases"><span>Use cases</span><h2>Explore ads, websites and packaging.</h2><b>Explore campaigns, UX, shelf and packaging →</b></Link>
            <Link href="/how-it-works"><span>How it works</span><h2>See how each step works.</h2><b>Understand the complete workflow →</b></Link>
          </div>
        </section>

        <section className="section faq">
          <div className="container faq-grid">
            <div><p className="kicker">The essentials</p><h2>Questions, answered.</h2><p>Still deciding how NeuroVision fits? <a href="mailto:info@neurovision-ai.com">Talk to our team.</a></p></div>
            <div>{faqs.map(([q,a], index) => <details key={q} open={index===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
          </div>
        </section>

        <section className="final-cta"><div className="container"><p className="kicker light">See your creative before your audience does</p><h2>Make the next version the stronger version.</h2><p>Upload a visual, explore the findings and create a version you can test.</p><div className="actions center"><a className="btn white" href="https://app.neurovision-ai.com/register">Try NeuroVision free ↗</a><a className="btn ghost" href="mailto:info@neurovision-ai.com?subject=NeuroVision%20demo">Book a demo</a></div></div></section>
      </main>
      <Footer />
    </>
  );
}
