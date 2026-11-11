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
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>See your creative<br />through <em>fresh eyes.</em></h1>
              <p className="hero-lead">Test ads, websites and packaging before launch.<br className="desktop-break" /> Find what gets noticed, what feels unclear, and what to try next.</p>
              <div className="actions">
                <a className="btn primary" href="https://app.neurovision-ai.com/register">Try NeuroVision free <span aria-hidden="true">→</span></a>
                <Link className="text-link" href="/how-it-works">Take a closer look <span aria-hidden="true">→</span></Link>
              </div>

            </div>

            <div className="product-wrap stimulus-product">
              <div className="product">
                <div className="product-bar"><strong>A small change. A different reading.</strong><span>Fanta · creative example</span></div>
                <div className="analysis">
                  <div className="demo-visual"><CreativeVisual asset={view.asset} heatmap={view.heatmap} priority /></div>
                  <div className="demo-copy">
                    <div className="tabs" role="group" aria-label="Explore the creative example">
                      {(Object.keys(demo) as DemoKey[]).map(key=><button type="button" aria-pressed={active===key} className={active===key?"on":""} onClick={()=>setActive(key)} key={key}>{demo[key].label}</button>)}
                    </div>
                    <h2>{active==="original"?"Start with an idea.":active==="attention"?"What catches the eye?":"Give it a new direction."}</h2>
                    <p className="demo-note" aria-live="polite">{view.note}</p>
                    <Link className="text-link" href="/case-studies">Explore all four examples <span aria-hidden="true">→</span></Link>
                    <p className="demo-disclosure">Illustrative example. The heatmap is a placeholder, not a measured result. No brand affiliation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="section platform" id="platform">
          <div className="container feature-list">
            <article className="feature-row">
              <div className="feature-copy"><h2>Find what gets noticed.</h2><p>Check whether the product, headline and logo stand out. Our attention model helps you review visual hierarchy without eye-tracking equipment.</p><Link className="text-link" href="/how-it-works#attention">Explore attention prediction <span aria-hidden="true">→</span></Link></div>
              <figure className="feature-media attention-paper"><CreativeVisual asset={creativeExamples[0].original} heatmap /><figcaption>Illustrative heatmap placeholder</figcaption></figure>
            </article>
            <article className="feature-row reverse">
              <div className="feature-copy"><h2>Look beyond the first glance.</h2><p>Ask AI-simulated audience profiles about clarity, trust and relevance. Find possible misunderstandings and decide what to explore with real people.</p><Link className="text-link" href="/how-it-works#audience">Explore audience surveys <span aria-hidden="true">→</span></Link></div>
              <div className="feature-media survey-paper"><div className="question-sheet"><p>Let’s talk about the message.</p><ol><li>What is this ad trying to say?</li><li>Is anything unclear?</li><li>Does it feel relevant to you?</li></ol><small>Example questions · AI-simulated feedback</small></div></div>
            </article>
            <article className="feature-row">
              <div className="feature-copy"><h2>Make the next version count.</h2><p>Turn the findings into a new design. Keep your brand rules, resize for your channels, then compare the result with the original using the same checks.</p><Link className="text-link" href="/how-it-works#improve">Explore creative improvement <span aria-hidden="true">→</span></Link></div>
              <figure className="feature-media revision-paper"><div><span>Original</span><img src={sitePath(creativeExamples[2].original.src)} alt={creativeExamples[2].original.alt} loading="lazy" /></div><b aria-hidden="true">→</b><div><span>Recreated</span><img src={sitePath(creativeExamples[2].recreated.src)} alt={creativeExamples[2].recreated.alt} loading="lazy" /></div><figcaption>Illustrative redesign · re-test before choosing</figcaption></figure>
            </article>
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
                  <a className={`btn ${plan.featured ? "primary" : "secondary"}`} href="https://app.neurovision-ai.com/register">{plan.cta} →</a>
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

        <section className="final-cta"><div className="container"><h2>Try it with your own creative.</h2><p>Upload a visual, explore the findings and create a version you can test.</p><div className="actions center"><a className="btn white" href="https://app.neurovision-ai.com/register">Try NeuroVision free →</a><a className="btn ghost" href="mailto:info@neurovision-ai.com?subject=NeuroVision%20demo">Book a demo</a></div></div></section>
      </main>
      <Footer />
    </>
  );
}
