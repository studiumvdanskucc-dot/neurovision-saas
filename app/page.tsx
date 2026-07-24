"use client";

import { useState } from "react";
import { Footer, Header } from "./site-shell";

const demo = {
  attention: {
    label: "Attention",
    image: "/assets/hero-heatmap.webp",
    alt: "Sample ad with predictive attention heatmap",
    score: "84",
    metric: "Attention clarity",
    note: "Headline wins the first seconds. Brand needs more visual weight.",
  },
  interpretation: {
    label: "Interpretation",
    image: "/assets/hero-ad.webp",
    alt: "Sample ad ready for audience interpretation",
    score: "76",
    metric: "Message fit",
    note: "Premium and futuristic. The innovation claim needs clearer proof.",
  },
  optimise: {
    label: "Optimise",
    image: "/assets/hero-optimised.webp",
    alt: "Sample ad after creative optimisation",
    score: "91",
    metric: "Predicted impact",
    note: "Clearer hierarchy, stronger product focus and brand entry.",
  },
} as const;

type DemoKey = keyof typeof demo;

const plans = [
  {
    name: "Free",
    price: "$0",
    credits: "20 credits",
    description: "Explore predictive attention with your own creative.",
    features: ["Attention heatmaps", "Core visual metrics", "Single workspace", "Shareable results"],
    cta: "Try for free",
  },
  {
    name: "Starter",
    price: "$20",
    credits: "120 credits / month",
    description: "For individual creators and focused projects.",
    features: ["Typically 1 standard creative loop", "AI attention heatmaps", "Basic agentic interpretation", "1 optimised creative variant", "PDF summary export"],
    cta: "Choose Starter",
  },
  {
    name: "Pro",
    price: "$300",
    credits: "3,000 credits / month",
    description: "For teams testing campaigns, audiences and variants.",
    features: ["Full agentic audience surveys", "GenAI creative optimisation", "A/B comparison", "Brand asset memory", "PDF, PowerPoint and CSV downloads", "3 team seats"],
    cta: "Start with Pro",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$1,500",
    credits: "18,000 credits / month",
    description: "For multi-brand teams with high-volume workflows.",
    features: ["Premium GenAI workflows", "Multiple brand workspaces", "API access", "White-label reports", "Priority support", "Custom onboarding"],
    cta: "Talk to us",
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
                <a className="btn secondary" href="#workflow">See how it works ↓</a>
              </div>
              <div className="proof"><span /><span /><span /><p>Built where <b>neuroscience</b>, behavioural science, design and AI meet.</p></div>
            </div>

            <div className="product-wrap">
              <div className="product">
                <div className="product-bar">
                  <div><img src="/logo.webp" alt="" /><b>NeuroVision</b></div>
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
            <div className="pillars">
              <article>
                <span className="num">01</span>
                <div className="visual heat"><div className="wire"><i /><b /><em /><small /></div><u className="hot h1" /><u className="hot h2" /></div>
                <p className="card-kicker">Predict attention</p><h3>See what wins the first seconds.</h3>
                <p>Predict visual hierarchy, hotspots, missed elements and attention clarity—without lab equipment.</p>
                <ul><li>AI attention heatmaps</li><li>First-view hierarchy</li><li>Brand and CTA visibility</li></ul>
              </article>
              <article>
                <span className="num">02</span>
                <div className="visual survey"><div><i>25–34</i><i>Urban</i><i>New buyer</i></div><p><span>Trust</span><b style={{width:"84%"}} /></p><p><span>Clarity</span><b style={{width:"72%"}} /></p><p><span>Intent</span><b style={{width:"67%"}} /></p></div>
                <p className="card-kicker">Simulate interpretation</p><h3>Understand the response behind the view.</h3>
                <p>Model how defined audiences may interpret your message, product and brand before launch.</p>
                <ul><li>Agentic audience surveys</li><li>Demographic segmentation</li><li>Semantic and cultural signals</li></ul>
              </article>
              <article>
                <span className="num">03</span>
                <div className="visual generate"><div><span>Before</span></div><b>→</b><div className="after"><span>After</span></div></div>
                <p className="card-kicker">Generate &amp; adapt</p><h3>Move from insight to usable creative.</h3>
                <p>Generate variants, resize for channels and run a feedback loop until the hierarchy works harder.</p>
                <ul><li>Optimised variants</li><li>Platform-ready resizes</li><li>Brand-guided generation</li></ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section workflow" id="workflow">
          <div className="container workflow-grid">
            <div><p className="kicker light">The creative loop</p><h2>Four steps. One place. Better work before launch.</h2><p>NeuroVision fits between the first creative idea and the moment it reaches your audience. Use one module or run the complete loop.</p><a className="text-link" href="http://app.neurovision-ai.com/register">Start your first analysis ↗</a></div>
            <ol>
              <li><span>01</span><div><b>Upload</b><p>Drop in an ad, page, package, product shot or interface.</p></div></li>
              <li><span>02</span><div><b>Predict</b><p>Map attention, hierarchy, clarity and recall potential.</p></div></li>
              <li><span>03</span><div><b>Interpret</b><p>Ask defined agentic audiences what the design communicates.</p></div></li>
              <li><span>04</span><div><b>Improve</b><p>Generate, compare and export stronger creative variations.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section use-cases" id="use-cases">
          <div className="container">
            <div className="section-head"><div><p className="kicker">Made for visual decisions</p><h2>One intelligence layer across your creative stack.</h2></div><p>Run the same science-backed evaluation wherever customers meet your brand.</p></div>
            <div className="case-grid">
              <article><div className="case-art campaign"><i>MOVE<br/>DIFFERENT.</i><i>BUILT<br/>TO MOVE.</i></div><h3>Campaigns &amp; ads</h3><p>Compare concepts, messages and variants before media spend.</p></article>
              <article><div className="case-art web"><span /><i /><b /><u /></div><h3>Websites &amp; UX</h3><p>Find buried actions, unclear hierarchy and conversion friction.</p></article>
              <article><div className="case-art shelf"><i /><i /><i /><b>#1</b></div><h3>Digital shelf</h3><p>Benchmark listings, product presence and competitive visibility.</p></article>
              <article><div className="case-art pack"><span><small>NO. 04</small><b>FORM</b><em>daily essentials</em></span><i /></div><h3>Packaging &amp; product</h3><p>Test shelf presence, information order and brand recognition.</p></article>
            </div>
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
            <div className="pricing-head"><p className="kicker">Simple monthly plans</p><h2>One wallet. Every NeuroVision workflow.</h2><p>Spend flexible credits across heatmaps, surveys, variants, resizes and full optimisation loops.</p></div>
            <div className="plan-grid">
              {plans.map(plan => (
                <article className={plan.featured ? "featured" : ""} key={plan.name}>
                  {plan.featured && <em>Most popular</em>}
                  <h3>{plan.name}</h3><p className="desc">{plan.description}</p>
                  <p className="price"><b>{plan.price}</b><span>/ month</span></p>
                  <p className="credits">{plan.credits}</p>
                  <ul>{plan.features.map(f => <li key={f}><span>✓</span>{f}</li>)}</ul>
                  <a className={`btn ${plan.featured ? "primary" : "secondary"}`} href={plan.name === "Enterprise" ? "mailto:info@neurovision-ai.com?subject=NeuroVision%20Enterprise" : "http://app.neurovision-ai.com/register"}>{plan.cta} ↗</a>
                </article>
              ))}
            </div>
            <p className="pricing-note">Credits are usage-based, not fixed feature bundles. Need more volume? <a href="mailto:info@neurovision-ai.com">Let&apos;s build your plan.</a></p>
          </div>
        </section>

        <section className="section science">
          <div className="container science-grid">
            <div className="science-art"><div className="orbit o1" /><div className="orbit o2" /><strong>NV</strong><span className="n1">Behaviour</span><span className="n2">Attention</span><span className="n3">Design</span><span className="n4">AI</span></div>
            <div><p className="kicker light">Scientific by design</p><h2>Built to make complex evidence useful.</h2><p>NeuroVision combines predictive visual modelling, behavioural research and generative systems in a workflow creative teams can actually use. Every score is a decision aid—not a promise of real-world performance.</p><ul><li><b>Model</b><span>predict likely attention and visual decoding</span></li><li><b>Simulate</b><span>explore response across defined audience profiles</span></li><li><b>Iterate</b><span>turn findings into measurable creative changes</span></li></ul><a className="text-link" href="/about">Meet the team behind NeuroVision ↗</a></div>
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
