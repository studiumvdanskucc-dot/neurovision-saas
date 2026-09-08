import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-shell";
import { REGISTER_URL } from "../site-links";

export const metadata: Metadata = { title: "Pricing", description: "Compare NeuroVision software plans, understand credits and explore expert-led creative services." };

const plans = [
  {
    name: "FREE",
    price: "€0",
    credits: "40 credits / month",
    description: "Explore before committing.",
    features: ["Predictive attention heatmaps", "AI creative critique", "AI surveys · up to 25 simulated responses", "1 seat"],
    cta: "Start free",
  },
  {
    name: "STANDARD",
    price: "€25",
    credits: "200 credits / month",
    description: "For freelancers and solo marketers.",
    features: ["Everything in Free", "AI surveys · up to 50 simulated responses", "1 seat"],
    cta: "Get started",
  },
  {
    name: "PRO",
    price: "€79",
    credits: "800 credits / month",
    description: "For small teams.",
    features: ["Everything in Standard", "AI surveys · 100+ simulated responses", "PDF report download", "2 seats"],
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

export default function Pricing() {
  return <><Header /><main id="main-content">
    <section className="page-hero"><div className="container"><p className="kicker">Pricing</p><h1>Start free.<br />Grow from there.</h1><p className="lead">Use the platform for everyday creative decisions, or bring us a project for hands-on analysis and design support.</p><nav className="page-jump-links" aria-label="Pricing sections"><a href="#pricing">Software plans</a><a href="#credits">How credits work</a><a href="#agency">Expert services</a></nav></div></section>
    <section className="software-section" id="pricing"><div className="container"><h2 className="small-section-title">Software plans</h2><div className="plan-grid">{plans.map(plan=><article key={plan.name} className={plan.featured?"featured-plan":""}><h3>{plan.name.charAt(0)+plan.name.slice(1).toLowerCase()}</h3><p className="plan-description">{plan.description}</p><p className="plan-price"><strong>{plan.price}</strong><span>/ month</span></p><p className="plan-allowance">{plan.credits}</p><a className={`btn ${plan.featured?"primary":"secondary"}`} href={REGISTER_URL}>{plan.cta} ↗</a><p className="plan-analysis">Up to {parseInt(plan.credits.replaceAll(",", ""))/5} image analyses if all credits go to analysis.</p><details className="reading-details plan-features"><summary>What’s included<span aria-hidden="true">+</span></summary><div><ul>{plan.features.map(feature=><li key={feature}>{feature}</li>)}</ul></div></details></article>)}</div></div></section>
    <section className="section soft-section" id="credits"><div className="reading-width"><p className="kicker">How credits work</p><h2>One allowance.<br />Use it your way.</h2><p className="large-copy">A single-image analysis uses 5 credits. Use your 40 Free credits for up to 8 analyses, or mix analysis with audience simulations.</p><table className="credit-table"><caption>Credits per action</caption><thead><tr><th scope="col">Action</th><th scope="col">Credits</th></tr></thead><tbody><tr><th scope="row">1 image analysis<small>Attention heatmap + AI creative critique</small></th><td>5</td></tr><tr><th scope="row">AI survey · 25 simulated responses</th><td>20</td></tr><tr><th scope="row">AI survey · 50 simulated responses</th><td>35</td></tr><tr><th scope="row">AI survey · 100 simulated responses</th><td>60</td></tr></tbody></table><details className="reading-details"><summary>Larger surveys and simulated responses<span aria-hidden="true">+</span></summary><div><p>Surveys over 100 simulated responses start at 60 credits, plus 45 credits for each additional 100. These are AI simulations. Increasing the response count does not establish validity as human research.</p></div></details></div></section>
    <section className="section services-section" id="agency"><div className="container"><div className="section-head"><p className="kicker">Expert services</p><h2>Prefer a partner<br />on the project?</h2><p>We run the analysis, develop the creative and help your team use the findings. Choose a focused review or a complete creative sprint.</p></div><div className="service-list">{agencyPackages.map(pkg=><article key={pkg.name}><div className="service-top"><div><p className="kicker">{pkg.label}</p><h3>{pkg.name}</h3><p>{pkg.description}</p></div><div className="service-price"><strong>{pkg.price}</strong><span>per campaign · excl. VAT</span><a className="text-link" href={`mailto:info@neurovision-ai.com?subject=NeuroVision%20${encodeURIComponent(pkg.name)}`}>Discuss this package →</a></div></div><details className="reading-details service-details"><summary>See everything included<span aria-hidden="true">+</span></summary><div><ul>{pkg.features.map(feature=><li key={feature}>{feature}</li>)}</ul></div></details></article>)}</div></div></section>
    <section className="closing-cta"><div className="container"><h2>Find your starting point.</h2><p>Tell us what you want to test. We can help you choose the right plan or scope.</p><div className="actions center"><a className="btn primary" href="mailto:info@neurovision-ai.com?subject=NeuroVision%20pricing%20question">Ask about pricing →</a><Link className="text-link" href="/case-studies">Explore an example</Link></div></div></section>
  </main><Footer /></>;
}
