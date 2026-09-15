import type { Metadata } from "next";
import { Footer, Header } from "../site-shell";
export const metadata: Metadata = { title: "Pricing", description: "NeuroVision software plans, credit costs and expert creative services." };

import { plans, agencyPackages } from "../pricing-data";

export default function Pricing() {
  return <><Header /><main id="main-content"><section className="page-hero"><div className="container page-hero-grid"><div><p className="kicker">Pricing &amp; services</p><h1>Use the platform.<br />Or let us do the work.</h1></div><p className="lead">Choose a monthly plan for your team, or a one-off project with our specialists.</p></div></section>
        <section className="section pricing" id="pricing">
          <div className="container">
            <div className="pricing-head"><h2>Software plans</h2><p>Use one credit balance for attention analysis, AI audience surveys and creative improvement.</p></div>
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
            <div className="credit-explainer" id="credits">
              <div className="credit-explainer-head">
                <div><h2>How credits work</h2></div>
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
              <h2>Expert services</h2>
              <p>Choose a one-off project. Our team runs the analysis and helps you turn the findings into a design you can use.</p>
            </div>
            <div className="agency-grid">
              {agencyPackages.map(pkg => (
                <article className={pkg.featured ? "agency-card featured" : "agency-card"} key={pkg.name}>
                  <div className="agency-labels">
                    {pkg.featured && <em>Most popular</em>}
                  </div>
                  <h3>{pkg.name}</h3>
                  <p className="agency-description">{pkg.description}</p>
                  <p className="agency-price"><b>{pkg.price}</b><span>per campaign<small>excl. VAT</small></span></p>
                  <a className={`btn ${pkg.featured ? "primary" : "white"}`} href={`mailto:info@neurovision-ai.com?subject=NeuroVision%20${encodeURIComponent(pkg.name)}`}>Choose {pkg.name} ↗</a>
                  <details className="package-details"><summary>What’s included<span aria-hidden="true">+</span></summary><ul>{pkg.features.map(feature => <li key={feature}><span>✓</span>{feature}</li>)}</ul></details>
                </article>
              ))}
            </div>
          </div>
        </section>

</main><Footer /></>;
}
