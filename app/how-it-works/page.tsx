import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-shell";
import { CreativeVisual } from "../creative-visual";
import { CreativeCompare } from "../creative-compare";
import { creativeExamples } from "../creative-examples";
import { ClosingCTA } from "../closing-cta";

export const metadata: Metadata = { title:"How It Works", description:"Upload a creative, predict attention, explore audience interpretation, then improve and re-test it with NeuroVision." };

const steps = [
  ["Upload", "Add an ad, page, package, product image or interface. Set the audience and what you want the creative to achieve."],
  ["Predict", "Map likely early attention. Check the visibility of your brand, product, headline and call to action."],
  ["Interpret", "Explore how AI-simulated audiences might understand the message. Find questions to test with people."],
  ["Improve", "Create a revised version. Run the same measures again and compare it with the original."],
];

export default function HowItWorks() {
  return <><Header /><main id="main-content">
    <section className="page-hero"><div className="container"><p className="kicker">How it works</p><h1>A little more insight.<br />A much clearer next step.</h1><p className="lead">Upload an image and set your objective. NeuroVision helps you see what stands out, explore the message and develop the next version.</p><nav className="page-jump-links" aria-label="Workflow sections"><a href="#attention">Attention</a><a href="#audience">Audience</a><a href="#improvement">Improvement</a></nav></div></section>

    <section className="section soft-section"><div className="container"><div className="section-head"><p className="kicker">The creative loop</p><h2>Four connected actions.<br />Use one or run the full loop.</h2></div><ol className="simple-steps">{steps.map(([title,copy],index)=><li key={title}><span className="step-number">0{index+1}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol></div></section>

    <section className="section" id="attention"><div className="container feature-layout"><div className="feature-copy"><p className="kicker">01 / Predictive attention</p><h2>Will the right things<br />get noticed?</h2><p>See where attention is likely to go in the opening one to two seconds. Spot visual competition and check whether the product, message and call to action have enough presence.</p><p>The heatmap predicts a pattern across viewers. It does not track an individual person’s eyes.</p><details className="reading-details"><summary>What you can review<span aria-hidden="true">+</span></summary><div><ul><li>Likely attention hotspots and competing elements</li><li>Product, brand, headline and CTA visibility</li><li>Visual hierarchy across alternative designs</li></ul></div></details></div><figure className="attention-example"><CreativeVisual asset={creativeExamples[0].original} heatmap /><figcaption>Illustrative placeholder — not a NeuroVision prediction.</figcaption></figure></div></section>

    <section className="section soft-section" id="audience"><div className="container feature-layout"><div className="feature-copy"><p className="kicker">02 / AI audience surveys</p><h2>What comes through<br />after the glance?</h2><p>Ask AI-simulated profiles about clarity, trust, relevance, emotional tone and brand fit. Use consistent questions to compare concepts and explore possible differences between audience groups.</p><p>These are simulated responses. Use them to develop hypotheses and guide your next human study.</p><details className="reading-details"><summary>Shape the questions around your audience<span aria-hidden="true">+</span></summary><div><p>Define demographic and psychographic profiles, choose the survey size and compare recurring themes. The same questions across variants make the differences easier to interpret.</p></div></details></div><div className="question-preview"><p className="kicker">Example survey questions</p><ol><li><span>01</span>What is the main message?</li><li><span>02</span>Is the offer relevant to you?</li><li><span>03</span>What would you do next?</li></ol><p className="fine-print">Explore meaning, rather than relying on attention alone.</p></div></div></section>

    <section className="section" id="improvement"><div className="container"><div className="section-head"><p className="kicker">03 / Creative improvement</p><h2>Give the next version<br />a reason to exist.</h2><p>Turn findings into a creative brief. Generate within your brand and channel constraints, then re-test the new version against the original.</p></div><CreativeCompare initial="fanta" compact /><div className="improvement-notes reading-width"><details className="reading-details"><summary>Choose how much control you need<span aria-hidden="true">+</span></summary><div><p>Use quick optimisation for an initial direction, or the detailed GenAI workflow to adjust the prompt, brand constraints, channel format and creative brief. Keep the original, the findings and the rationale connected.</p></div></details><details className="reading-details"><summary>Compare concepts, or test the revision again<span aria-hidden="true">+</span></summary><div><p>Add a predictive A/B comparison when choosing between concepts. After regeneration, compare attention and interpretation with the original using the same measures. Decide what to change next, or what to validate with people.</p></div></details><Link className="text-link" href="/case-studies">Explore more creative examples →</Link></div></div></section>
    <ClosingCTA title="Your creative. A clearer direction." />
  </main><Footer /></>;
}
