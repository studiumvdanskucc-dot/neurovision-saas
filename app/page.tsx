import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "./site-shell";
import { ProductWalkthrough, UseCaseExamples } from "./product-walkthrough";
import { TokenPricing } from "./token-pricing";
import { REGISTER_URL } from "./site-links";

export const metadata: Metadata = {
  title: "Test and improve your ads before launch",
  description: "Upload an ad, website screenshot or packaging design. Predict attention, explore AI audience feedback and create a version you can re-test. Simple pay-as-you-go tokens.",
};

const questions = [
  ["Is this real eye-tracking?", "No. The heatmap is a model prediction of where people are likely to look, not an eye-tracking recording of your campaign. Use it to screen ideas and compare visual hierarchy. Our Science page explains the evidence and validation approach."],
  ["Are the survey respondents real people?", "No. They are AI-simulated audience profiles. Their answers help you explore possible reactions and misunderstandings. Validate important decisions with real customers or campaign tests."],
  ["What can I upload?", "An ad, social post, website screenshot, package, product image or marketplace listing. Start with the visual you want to improve and the message your audience should remember."],
  ["What are tokens, and do I need a monthly plan?", "Tokens are NeuroVision usage units. An image analysis costs 5 tokens (€0.50). Comparing two images and collecting 25 AI survey responses costs 30 tokens (€3). Top up when you need more; there is no subscription. These are app credits, not AI model token counts."],
];

export default function Home() {
  return <><Header /><main id="main-content">
    <section className="hero clarity-hero" id="top"><div className="container hero-grid"><div className="hero-copy"><p className="product-category">AI testing for ads, websites &amp; packaging</p><h1>Upload a design.<br /><em>See what needs fixing.</em></h1><p className="hero-lead">NeuroVision helps you test and improve a design before launch. See where attention may go, ask an AI-simulated audience what they understand, then create and re-test a new version.</p><div className="actions"><a className="btn primary" href={REGISTER_URL}>Try NeuroVision free <span aria-hidden="true">→</span></a><a className="text-link" href="#walkthrough">See a 30-second example <span aria-hidden="true">↓</span></a></div><p className="hero-token-note">Pay as you go. No subscription.</p></div></div></section>
    <section className="section walkthrough-section"><div className="container"><div className="section-head"><h2>Here’s what happens to your design.</h2><p>Follow one example from the original image to a new version. Play the walkthrough or explore each step.</p></div><ProductWalkthrough /><div className="product-outputs"><div><h3>What gets noticed?</h3><p>A predicted attention heatmap and an explanation of what competes for the eye.</p></div><div><h3>What gets understood?</h3><p>AI audience feedback on the message, possible confusion and relevance.</p></div><div><h3>What could work better?</h3><p>Specific edits and new variants to compare with the original.</p></div></div></div></section>
    <section className="section practical-examples" id="examples"><div className="container"><div className="section-head"><h2>What would you like to check?</h2><p>The same tools help answer different questions. Start with the one that matters to your project.</p></div><UseCaseExamples /></div></section>
    <section className="section science-intro"><div className="container science-intro-grid"><h2>Our own attention model.<br />Research-grade eye-tracking data.</h2><div><p>NeuroVision combines attention science with research-grade eye-tracking data, including work at Aarhus University. Our attention model runs on servers in Europe.</p><p>AI audience feedback is a separate simulation. Our research page explains how we evaluate these tools, and where human validation is still needed.</p><Link className="text-link" href="/science">Read the science and validation methods <span aria-hidden="true">→</span></Link></div></div></section>
    <section className="section token-section" id="pricing"><div className="container"><div className="section-head"><h2>No plan to choose.<br /><em>Just tokens.</em></h2><p>Top up one balance and use it for image analysis and AI audience surveys. Every token costs €0.10, excluding VAT.</p></div><TokenPricing compact /></div></section>
    <section className="section faq"><div className="container faq-grid"><div><h2>A few things to know.</h2><p>Want to talk through your own project? <a href="mailto:info@neurovision-ai.com">Ask our team.</a></p></div><div>{questions.map(([question,answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="expert-note"><div className="container"><div><h2>Prefer us to do the work?</h2><p>One-off expert projects start at €690, excluding VAT. We analyse, help redesign and re-test your creative.</p></div><Link className="text-link" href="/pricing#agency">Explore expert services <span aria-hidden="true">→</span></Link></div></section>
    <section className="final-cta"><div className="container"><h2>Start with the design on your desk.</h2><p>An ad, a webpage or a package. One upload is enough to start asking better questions.</p><div className="actions center"><a className="btn white" href={REGISTER_URL}>Try NeuroVision free <span aria-hidden="true">→</span></a><a className="btn ghost" href="mailto:info@neurovision-ai.com?subject=NeuroVision%20demo">Book a demo</a></div></div></section>
  </main><Footer /></>;
}
