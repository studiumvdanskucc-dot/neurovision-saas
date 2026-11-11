import type { Metadata } from "next";
import { Footer, Header } from "../site-shell";
export const metadata: Metadata = { title: "Pricing", description: "Pay-as-you-go NeuroVision tokens, usage costs and one-off expert creative services." };

import { agencyPackages } from "../pricing-data";
import { TokenPricing } from "../token-pricing";

export default function Pricing() {
  return <><Header /><main id="main-content"><section className="page-hero"><div className="container page-hero-grid"><div><p className="kicker">Pricing &amp; services</p><h1>Use the platform.<br />Or let us do the work.</h1></div><p className="lead">Top up your token balance for the platform, or choose a one-off project with our specialists.</p></div></section>
        <section className="section pricing" id="pricing">
          <div className="container">
            <div className="pricing-head"><h2>One balance. Pay as you go.</h2><p>Add the amount you need. Analyses and AI surveys deduct tokens from the same balance as you use them. Every token has the same price.</p></div>
            <TokenPricing />
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
                  <a className={`btn ${pkg.featured ? "primary" : "white"}`} href={`mailto:info@neurovision-ai.com?subject=NeuroVision%20${encodeURIComponent(pkg.name)}`}>Choose {pkg.name} →</a>
                  <details className="package-details"><summary>What’s included<span aria-hidden="true">+</span></summary><ul>{pkg.features.map(feature => <li key={feature}><span>✓</span>{feature}</li>)}</ul></details>
                </article>
              ))}
            </div>
          </div>
        </section>

</main><Footer /></>;
}
