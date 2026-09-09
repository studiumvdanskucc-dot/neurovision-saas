import type { Metadata } from "next";
import { Footer, Header } from "../site-shell";
export const metadata: Metadata = { title: "Pricing", description: "NeuroVision software plans, credit costs and expert creative services." };

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

export default function Pricing() {
  return <><Header /><main id="main-content"><section className="page-hero"><div className="container page-hero-grid"><div><p className="kicker">Pricing &amp; services</p><h1>Use the platform.<br />Or let us do the work.</h1></div><p className="lead">Choose a monthly plan for your team, or a one-off project with our specialists.</p></div></section>
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

</main><Footer /></>;
}
