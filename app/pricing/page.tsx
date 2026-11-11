import type { Metadata } from "next";
import { Footer, Header } from "../site-shell";
import { TokenPricing, ProjectCalculator } from "../token-pricing";
import { agencyPackages } from "../pricing-data";

export const metadata: Metadata = { title: "Pay-as-you-go pricing", description: "NeuroVision costs €0.10 per token. An image analysis costs 5 tokens (€0.50). Top up when needed, with no subscription or monthly renewal." };

export default function Pricing() {
  return <><Header /><main id="main-content"><section className="page-hero token-page-hero"><div className="container"><p className="kicker">Pay-as-you-go pricing</p><h1>One balance.<br /><em>No subscription.</em></h1><p className="lead">Every token costs €0.10. Use tokens to analyse images and explore AI audience feedback. Top up when your next project needs it.</p></div></section><section className="section token-section"><div className="container"><TokenPricing /><ProjectCalculator /></div></section><section className="section expert-services" id="agency"><div className="container"><div className="section-head"><h2>Or ask our experts to run the project.</h2><p>These are one-off services, separate from your token balance. Choose the amount of expert support you need.</p></div><div className="expert-service-list">{agencyPackages.map(pkg => <details key={pkg.name}><summary><span><strong>{pkg.name}</strong><small>{pkg.label}</small></span><span>{pkg.price}<small>one-off · excl. VAT</small></span><i aria-hidden="true">+</i></summary><div className="expert-service-detail"><p>{pkg.description}</p><ul>{pkg.features.map(feature => <li key={feature}>{feature}</li>)}</ul><a className="btn secondary" href={`mailto:info@neurovision-ai.com?subject=${encodeURIComponent(`NeuroVision ${pkg.name}`)}`}>Discuss this project <span aria-hidden="true">→</span></a></div></details>)}</div></div></section></main><Footer /></>;
}
