"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer, Header } from "./site-shell";
import { sitePath } from "./site-path";
import { creativeExamples } from "./creative-examples";
import { CreativeVisual } from "./creative-visual";
import { plans } from "./pricing-data";

const example = creativeExamples[1];
const demo = {
  original: { label: "Original", asset: example.original, heatmap: false, note: "Start with the original ad and the message you want people to remember." },
  attention: { label: "Attention", asset: example.original, heatmap: true, note: "A heatmap helps you compare what stands out. This overlay is a placeholder, not a prediction." },
  optimise: { label: "Recreated", asset: example.recreated, heatmap: false, note: "Compare the new headline and larger logo. Re-test to find out whether the changes help." },
} as const;

type DemoKey = keyof typeof demo;

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
                See what <em className="hero-blue">stands out.</em><br />
                Find what’s <em className="hero-violet">unclear.</em><br />
                Make it <em className="hero-pink">better.</em>
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

            </div>

            <div className="product-wrap stimulus-product">
              <div className="product">
                <div className="product-bar"><div><img src={sitePath("/logo.webp")} alt="" /><b>NeuroVision</b></div><small>Interactive example</small></div>
                <div className="analysis">
                  <div className="analysis-head"><span><b>Explore the Fanta redesign</b></span><Link href="/case-studies">All examples ↗</Link></div>
                  <div className="tabs" role="group" aria-label="Explore the creative example">
                    {(Object.keys(demo) as DemoKey[]).map((key)=><button type="button" aria-pressed={active===key} className={active===key?"on":""} onClick={()=>setActive(key)} key={key}>{demo[key].label}</button>)}
                  </div>
                  <div className="hero-stimulus" key={active}><CreativeVisual asset={view.asset} heatmap={view.heatmap} priority /></div>
                  <p className="demo-note" aria-live="polite">{view.note}</p>
                  <p className="demo-disclosure">Illustrative example. Placeholder heatmap; no measured results or brand affiliation.</p>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="section platform" id="platform">
          <div className="container">
            <div className="section-head">
              <div><h2>Three ways to improve your creative.</h2></div>
              <p>Use them together, or start with the question your project needs to answer.</p>
            </div>
            <div className="pillars literal-pillars">
              <article>
                <div className="visual literal-heatmap example-thumbnail"><CreativeVisual asset={example.original} heatmap /><span className="visual-label">PLACEHOLDER HEATMAP</span></div>
                <h3>Predict attention.</h3>
                <p>Check whether the headline, product and logo get noticed, without eye-tracking equipment.</p>

              </article>
              <article>
                <div className="visual literal-survey"><span className="sample-label">Example survey questions</span><blockquote>What is the main message?<br />What feels unclear?<br />Is this relevant to you?</blockquote><small>AI-simulated feedback</small></div>
                <h3>Explore audience responses.</h3>
                <p>Explore how defined audiences may interpret your message, product and brand before launch.</p>

              </article>
              <article>
                <div className="visual literal-optimise"><div><span>Original</span><img src={sitePath(creativeExamples[2].original.src)} alt={creativeExamples[2].original.alt} /></div><b aria-hidden="true">→</b><div><span>Recreated</span><img src={sitePath(creativeExamples[2].recreated.src)} alt={creativeExamples[2].recreated.alt} /></div><small>Illustrative redesign</small></div>
                <h3>Create and compare.</h3>
                <p>Generate a new version within your brand rules, resize it for your channels, and compare it with the original.</p>

              </article>
            </div>
            <div className="section-actions"><Link className="btn secondary" href="/how-it-works">Explore the complete workflow →</Link><Link className="text-link dark" href="/case-studies">Explore original and recreated examples ↗</Link></div>
          </div>
        </section>

        <section className="section pricing" id="pricing">
          <div className="container">
            <div className="pricing-head"><h2>Start free. Grow when you need to.</h2><p>Use one credit balance for attention analysis, AI audience surveys and creative improvement.</p></div>
            <div className="plan-grid">
              {plans.map(plan => (
                <article className={plan.featured ? "featured" : ""} key={plan.name}>
                  {plan.featured && <em>Most popular</em>}
                  <h3>{plan.name}</h3><p className="desc">{plan.description}</p>
                  <p className="price"><b>{plan.price}</b><span>/ month</span></p>
                  <p className="credits"><b>{plan.credits}</b></p>
                  <ul>{plan.features.map(f => <li key={f}><span>✓</span>{f}</li>)}</ul>
                  <a className={`btn ${plan.featured ? "primary" : "secondary"}`} href="https://app.neurovision-ai.com/register">{plan.cta} ↗</a>
                </article>
              ))}
            </div>
            <p className="pricing-detail-link">An image analysis uses 5 credits. <Link className="text-link" href="/pricing#credits">See all credit costs →</Link></p>
          </div>
        </section>

        <section className="section agency-pricing agency-teaser" id="agency">
          <div className="container"><h2>Prefer us to do the work?</h2><p>Our specialists can analyse your campaign, improve the design and test it again. One-off projects start at €690, excluding VAT.</p><Link className="btn white" href="/pricing#agency">Explore expert services →</Link></div>
        </section>

        <section className="section faq">
          <div className="container faq-grid">
            <div><h2>Common questions.</h2><p>Still deciding how NeuroVision fits? <a href="mailto:info@neurovision-ai.com">Talk to our team.</a></p></div>
            <div>{faqs.map(([q,a], index) => <details key={q} open={index===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
          </div>
        </section>

        <section className="final-cta"><div className="container"><h2>Try it with your own creative.</h2><p>Upload a visual, explore the findings and create a version you can test.</p><div className="actions center"><a className="btn white" href="https://app.neurovision-ai.com/register">Try NeuroVision free ↗</a><a className="btn ghost" href="mailto:info@neurovision-ai.com?subject=NeuroVision%20demo">Book a demo</a></div></div></section>
      </main>
      <Footer />
    </>
  );
}
