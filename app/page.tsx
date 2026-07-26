"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer, Header } from "./site-shell";
import { sitePath } from "./site-path";

const demo = {
  attention: {
    label: "Attention",
    image: sitePath("/assets/hero-heatmap.webp"),
    alt: "Sample ad with predictive attention heatmap",
    score: "84",
    metric: "Attention clarity",
    note: "Headline wins the first seconds. Brand needs more visual weight.",
  },
  interpretation: {
    label: "Interpretation",
    image: sitePath("/assets/hero-ad.webp"),
    alt: "Sample ad ready for audience interpretation",
    score: "76",
    metric: "Message fit",
    note: "Premium and futuristic. The innovation claim needs clearer proof.",
  },
  optimise: {
    label: "Optimise",
    image: sitePath("/assets/hero-optimised.webp"),
    alt: "Sample ad after creative optimisation",
    score: "91",
    metric: "Predicted impact",
    note: "Clearer hierarchy, stronger product focus and brand entry.",
  },
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

const faqs = [
  ["What can I analyse?", "Upload an ad, social creative, landing page, website screenshot, packaging concept, product image or marketplace listing."],
  ["Do I need eye-tracking equipment?", "No. NeuroVision uses predictive models trained on behavioural, cognitive and eye-tracking data, so teams can evaluate early creative in the browser."],
  ["What are credits used for?", "One flexible wallet works across heatmaps, agentic surveys, generated variants, resizes and optimisation loops."],
  ["Can NeuroVision replace real consumer research?", "NeuroVision is an early decision layer, not a guarantee of market performance. Use it to screen, compare and improve creative before slower validation."],
];

export default function Home() {
  const [active, setActive] = useState<DemoKey>("attention");
  const view = demo[active];

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="top">
          <div className="orb orb-a" /><div className="orb orb-b" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><i /> Predictive design intelligence</p>
              <h1>Know what people <em>will see.</em><br />Understand what they&apos;ll feel.<br />Ship stronger creative.</h1>
              <p className="hero-lead">
                NeuroVision brings attention prediction, agentic audience
                research and creative optimisation into one fast SaaS workflow.
                Test before you publish—not after the budget is spent.
              </p>
              <div className="actions">
                <a className="btn primary" href="http://app.neurovision-ai.com/register">Try NeuroVision free ↗</a>
                <Link className="btn secondary" href="/how-it-works">See how it works →</Link>
              </div>
              <div className="proof"><span /><span /><span /><p>Built where <b>neuroscience</b>, behavioural science, design and AI meet.</p></div>
            </div>

            <div className="product-wrap">
              <div className="product">
                <div className="product-bar">
                  <div><img src={sitePath("/logo.webp")} alt="" /><b>NeuroVision</b></div>
                  <span>•••</span><small>Sample analysis</small>
                </div>
                <div className="product-body">
                  <aside><i className="on" /><i /><i /><i /></aside>
                  <div className="analysis">
                    <div className="analysis-head"><span><small>Zephyr campaign</small><b>Hero creative · v03</b></span><button>Export</button></div>
                    <div className="tabs" role="tablist" aria-label="Analysis views">
                      {(Object.keys(demo) as DemoKey[]).map((key, index) => (
                        <button role="tab" aria-selected={active === key} className={active === key ? "on" : ""} onClick={() => setActive(key)} key={key}>
                          <small>0{index + 1}</small>{demo[key].label}
                        </button>
                      ))}
                    </div>
                    <div className="creative">
                      <img src={view.image} alt={view.alt} />
                      <div className="score"><strong>{view.score}</strong><span><small>{view.metric}</small><b>{view.note}</b></span></div>
                    </div>
                    <div className="metrics"><span><small>Processing fluency</small><b>8.7</b></span><span><small>Brand attention</small><b>High</b></span><span><small>Recall potential</small><b>82%</b></span></div>
                  </div>
                </div>
              </div>
              <div className="float f1"><i>⌁</i><span><small>Analysis ready</small><b>in seconds</b></span></div>
              <div className="float f2"><i>A/B</i><span><small>Variant winner</small><b>Creative B</b></span></div>
            </div>
          </div>
          <div className="container signal"><span>Attention prediction</span><span>Agentic audience surveys</span><span>Creative optimisation</span><span>Digital shelf intelligence</span></div>
        </section>

        <section className="section platform" id="platform">
          <div className="container">
            <div className="section-head">
              <div><p className="kicker">One connected platform</p><h2>From visual stimulus to a better decision.</h2></div>
              <p>Most tools stop at a heatmap. NeuroVision connects what draws the eye with what the creative communicates—and turns that diagnosis into the next version.</p>
            </div>
            <div className="pillars literal-pillars">
              <article>
                <span className="num">Attention model</span>
                <div className="visual literal-heatmap"><img src={sitePath("/assets/hero-heatmap.webp")} alt="Predictive heatmap example" /><span className="visual-label">EARLY ATTENTION · 0–2 SEC</span><span className="heat-legend"><i /> Low <b /> High</span></div>
                <p className="card-kicker">Predict attention</p><h3>See what wins the first seconds.</h3>
                <p>Predict visual hierarchy, hotspots, missed elements and attention clarity—without lab equipment.</p>
                <ul><li>AI attention heatmaps</li><li>First-view hierarchy</li><li>Brand and CTA visibility</li></ul>
              </article>
              <article>
                <span className="num">Audience simulation</span>
                <div className="visual literal-survey"><div className="audience-chips"><i>25–34</i><i>Urban</i><i>New buyer</i></div><blockquote>“Premium and progressive, but I need a clearer reason to believe.”</blockquote><p><span>Message clarity</span><b style={{width:"78%"}} /></p><p><span>Brand trust</span><b style={{width:"86%"}} /></p><small>64 simulated responses synthesised</small></div>
                <p className="card-kicker">Simulate interpretation</p><h3>Understand the response behind the view.</h3>
                <p>Explore how defined audiences may interpret your message, product and brand before launch.</p>
                <ul><li>Agentic audience surveys</li><li>Demographic segmentation</li><li>Semantic and cultural signals</li></ul>
              </article>
              <article>
                <span className="num">Creative optimisation</span>
                <div className="visual literal-optimise"><div><span>Original</span><img src={sitePath("/assets/hero-ad.webp")} alt="" /></div><b>→</b><div className="winner"><span>Variant B · winner</span><img src={sitePath("/assets/hero-optimised.webp")} alt="" /></div><small>Predicted hierarchy +18%</small></div>
                <p className="card-kicker">Generate &amp; compare</p><h3>Move from insight to usable creative.</h3>
                <p>Generate variants, compare them against the original and iterate until the hierarchy works harder.</p>
                <ul><li>Optimised variants</li><li>Platform-ready resizes</li><li>Brand-guided generation</li></ul>
              </article>
            </div>
            <div className="section-actions"><Link className="btn secondary" href="/how-it-works">Explore the complete workflow →</Link><Link className="text-link dark" href="/case-studies">View the Zephyr case study ↗</Link></div>
          </div>
        </section>

        <section className="section compare">
          <div className="container compare-grid">
            <div><p className="kicker">Decisions before launch</p><h2>More than a heatmap. Less than a research marathon.</h2><p>NeuroVision is the fast, repeatable layer between intuition and expensive validation.</p></div>
            <div className="comparison">
              <div className="thead"><span>Approach</span><span>Attention</span><span>Meaning</span><span>New creative</span></div>
              <div className="best"><b>NeuroVision</b><span>✓</span><span>✓</span><span>✓</span></div>
              <div><b>Heatmap tool</b><span>✓</span><span>—</span><span>—</span></div>
              <div><b>Traditional survey</b><span>—</span><span>✓</span><span>—</span></div>
              <div><b>Creative software</b><span>—</span><span>—</span><span>✓</span></div>
            </div>
          </div>
        </section>

        <section className="section pricing" id="pricing">
          <div className="container">
            <div className="pricing-head"><p className="kicker">Pricing</p><h2>Start free. Upgrade as your team grows.</h2><p>Spend flexible credits across attention analysis, agentic surveys and creative improvement.</p></div>
            <div className="plan-grid">
              {plans.map(plan => (
                <article className={plan.featured ? "featured" : ""} key={plan.name}>
                  {plan.featured && <em>Most popular</em>}
                  <h3>{plan.name}</h3><p className="desc">{plan.description}</p>
                  <p className="price"><b>{plan.price}</b><span>/ month</span></p>
                  <p className="credits"><span>Monthly allowance</span><b>{plan.credits}</b></p>
                  <ul>{plan.features.map(f => <li key={f}><span>✓</span>{f}</li>)}</ul>
                  <a className={`btn ${plan.featured ? "primary" : "secondary"}`} href="http://app.neurovision-ai.com/register">{plan.cta} ↗</a>
                </article>
              ))}
            </div>
            <div className="credit-guide">
              <div><b>5</b><span><strong>Creative Analysis</strong><small>1 design or image · Attention heatmap + AI critique</small></span></div>
              <div><b>20</b><span><strong>Survey · 25 responses</strong><small>Small audience simulation · Fast early feedback</small></span></div>
              <div><b>35</b><span><strong>Survey · 50 responses</strong><small>Standard audience simulation · Balanced confidence</small></span></div>
              <div><b>60</b><span><strong>Survey · 100 responses</strong><small>Large audience simulation · Stronger validation</small></span></div>
            </div>
            <p className="pricing-note">Surveys over 100 responses start at 60 credits + 45 credits for each additional 100 responses.</p>
            <div className="white-label-callout"><span><small>Custom solutions</small><h3>Your platform. Your brand. Our intelligence.</h3><p>NeuroVision can power fully white-label products, branded client portals, embedded analysis, API workflows and custom enterprise deployments.</p></span><a className="btn white" href="mailto:info@neurovision-ai.com?subject=NeuroVision%20white-label%20solution">Build a white-label solution ↗</a></div>
          </div>
        </section>

        <section className="section route-teasers">
          <div className="container route-teaser-grid">
            <Link href="/use-cases"><span>Use cases</span><h2>See where visual intelligence creates an advantage.</h2><b>Explore campaigns, UX, shelf and packaging →</b></Link>
            <Link href="/how-it-works"><span>How it works</span><h2>Go deeper into the science and the creative loop.</h2><b>Understand the complete workflow →</b></Link>
          </div>
        </section>

        <section className="section faq">
          <div className="container faq-grid">
            <div><p className="kicker">The essentials</p><h2>Questions, answered.</h2><p>Still deciding how NeuroVision fits? <a href="mailto:info@neurovision-ai.com">Talk to our team.</a></p></div>
            <div>{faqs.map(([q,a], index) => <details key={q} open={index===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
          </div>
        </section>

        <section className="final-cta"><div className="container"><p className="kicker light">See your creative before your audience does</p><h2>Make the next version the stronger version.</h2><p>Upload your first visual and turn attention, interpretation and optimisation into one connected decision.</p><div className="actions center"><a className="btn white" href="http://app.neurovision-ai.com/register">Try NeuroVision free ↗</a><a className="btn ghost" href="mailto:info@neurovision-ai.com?subject=NeuroVision%20demo">Book a demo</a></div></div></section>
      </main>
      <Footer />
    </>
  );
}
