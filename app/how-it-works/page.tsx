import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-shell";
import { sitePath } from "../site-path";
import { CreativeVisual } from "../creative-visual";
import { creativeExamples } from "../creative-examples";

export const metadata: Metadata = {
  title: "How It Works",
  description: "See the NeuroVision creative loop, predictive attention, agentic surveys, optimisation and validation approach.",
};

const loop = [
  { icon:"↑", title:"Upload", copy:"Upload an ad, webpage, package or product image. Tell us what you want it to communicate." },
  { icon:"◉", title:"Predict", copy:"See which parts may catch the eye first, and whether the product, brand and message stand out." },
  { icon:"◫", title:"Interpret", copy:"Ask AI-simulated audience profiles what the message means and what could be confusing." },
  { icon:"✦", title:"Improve", copy:"Create a new version from the findings, then compare it with the original using the same tests." },
];

export default function HowItWorks() {
  return (
    <><Header /><main id="main-content">
      <section className="page-hero how-hero"><div className="container page-hero-grid"><div><p className="kicker">How it works</p><h1>From first glance to a stronger creative decision.</h1></div><p className="lead">Upload a visual, predict what people may notice, explore how they could understand it, and create a version you can compare.</p></div></section>
      <section className="section creative-loop"><div className="container"><div className="section-head"><div><p className="kicker">The creative loop</p><h2>Four connected actions.<br />Use one or run the full loop.</h2></div></div><div className="loop-grid">{loop.map((step,index)=><article key={step.title}><div className="loop-icon" aria-hidden="true">{step.icon}</div><span>Step {index+1}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div></section>
      <section className="section intelligence-layers"><div className="container"><div className="section-head"><div><p className="kicker light">Three layers of intelligence</p><h2>See it. Understand it. Improve it.</h2></div><p>Each step answers a different question and helps you decide what to change next.</p></div><div className="layer-list">
        <article><div className="layer-copy"><span>01 / Predictive attention</span><h3>What is likely to be seen first?</h3><p>An attention heatmap estimates which parts of a design are likely to attract the eye. Check the headline, product, logo and call to action before launch.</p><ul><li>Locate attention hotspots and competition</li><li>Check product, brand, headline and CTA visibility</li><li>Compare hierarchy consistently across variants</li></ul></div><figure className="layer-media stimulus-layer"><CreativeVisual asset={creativeExamples[1].original} heatmap /><figcaption>Illustrative heatmap placeholder. Not a model prediction.</figcaption></figure></article>
        <article><div className="layer-copy"><span>02 / AI audience surveys</span><h3>What could the audience understand and feel?</h3><p>AI-simulated profiles answer questions about your message. Explore clarity, trust and relevance across your target audiences, then use the findings to guide further research.</p><ul><li>Choose audience profiles</li><li>Ask consistent questions across every variant</li><li>Find recurring themes and differences between groups</li></ul></div><div className="layer-media survey-media"><div className="profile-line"><i>Selected audience</i><i>Same questions for both versions</i></div><blockquote>What is the main message?</blockquote><blockquote>What feels unclear?</blockquote><blockquote>Is this relevant to you?</blockquote><small>Example questions for AI-simulated profiles</small></div></article>
        <article><div className="layer-copy"><span>03 / Redesign &amp; comparison</span><h3>What should change in the next version?</h3><p>Turn the findings into a clear brief. Set what can change, keep essential brand elements, and compare the new design with the original using the same measures.</p><ul><li>Generate within brand and channel constraints</li><li>Compare original and alternative on shared metrics</li><li>Keep a record of what changed and why</li></ul></div><div className="layer-media ab-media supplied-ab"><div><small>Original</small><img src={sitePath(creativeExamples[2].original.src)} alt={creativeExamples[2].original.alt} /></div><b aria-hidden="true">→</b><div><small>Recreated</small><img src={sitePath(creativeExamples[2].recreated.src)} alt={creativeExamples[2].recreated.alt} /></div><p>Illustrative redesign. Re-test before choosing a version.</p></div></article>
      </div></div></section>
      <section className="section case-study-teaser"><div className="container compare-grid"><div><p className="kicker">See the loop in context</p><h2>See how a different layout changes the message.</h2><p>Explore the supplied Adidas, Fanta, Adobe and McDonald’s examples. See the original and recreated designs, with a clear explanation of what to test next.</p><Link className="btn secondary" href="/case-studies">Explore the creative examples →</Link></div><div className="case-triptych supplied-triptych">{[creativeExamples[0],creativeExamples[1],creativeExamples[2]].map(item=><img key={item.id} src={sitePath(item.recreated.src)} alt={item.recreated.alt} loading="lazy" />)}</div></div></section>
      <section className="final-cta"><div className="container"><p className="kicker light">Run the loop yourself</p><h2>Start with one visual. Leave with a clearer decision.</h2><p>Use the complete workflow or begin with the layer your project needs today.</p><div className="actions center"><a className="btn white" href="https://app.neurovision-ai.com/register">Start your first analysis ↗</a><Link className="btn ghost" href="/use-cases">Explore use cases</Link></div></div></section>
    </main><Footer /></>
  );
}
