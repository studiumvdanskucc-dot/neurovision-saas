import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-shell";
import { sitePath } from "../site-path";
import { CreativeVisual } from "../creative-visual";
import { creativeExamples } from "../creative-examples";
import { AbTestArt, ShelfArt, StudioArt, SurveyArt } from "../feature-art";
import { ToolTag } from "../tools";

export const metadata: Metadata = {
  title: "How It Works",
  description: "See how to upload a design, predict attention, explore AI audience feedback and compare a revised version.",
};

const loop = [
  { href:"https://app.neurovision-ai.com/register", title:"Upload", copy:"Upload an ad, webpage, package or product image. Tell us what you want it to communicate." },
  { href:"#attention", title:"Predict", copy:"See which parts may catch the eye first, and whether the product, brand and message stand out." },
  { href:"#audience", title:"Interpret", copy:"Ask AI-simulated audience profiles what the message means and what could be confusing." },
  { href:"#improve", title:"Improve", copy:"Create a new version from the findings, then compare it with the original using the same tests." },
];

export default function HowItWorks() {
  return (
    <><Header /><main id="main-content">
      <section className="page-hero how-hero"><div className="container page-hero-grid"><div><p className="kicker">How it works</p><h1>From a first look to a better version.</h1></div><p className="lead">Upload a visual, predict what people may notice, explore how they could understand it, and create a version you can compare.</p></div></section>
      <section className="section creative-loop"><div className="container"><div className="section-head"><div><h2>Four connected actions.<br />Use one or run the full loop.</h2></div></div><div className="loop-grid">{loop.map((step,index)=><article key={step.title}><h3><span aria-hidden="true">0{index+1}</span>{step.title}</h3><p>{step.copy}</p><a className="step-link" href={step.href}>{index===0?"Upload a visual":"Explore this step"}<span aria-hidden="true">→</span></a></article>)}</div></div></section>
      <section className="section intelligence-layers"><div className="container"><div className="layer-list">
        <article id="attention" className="tool-attention"><div className="layer-copy"><ToolTag tool="attention" /><h2>Predict <em>attention.</em></h2><p>An attention heatmap estimates which parts of a design are likely to attract the eye. Check the headline, product, logo and call to action before launch.</p><ul><li>Locate attention hotspots and competition</li><li>Check product, brand, headline and CTA visibility</li><li>Compare hierarchy consistently across variants</li></ul></div><figure className="layer-media stimulus-layer"><CreativeVisual asset={creativeExamples[1].original} heatmap /><figcaption>Illustrative heatmap placeholder. Not a model prediction.</figcaption></figure></article>
        <article id="audience" className="tool-audience"><div className="layer-copy"><ToolTag tool="audience" /><h2>Explore <em>audience</em> responses.</h2><p>AI-simulated profiles answer questions about your message. Explore clarity, trust and relevance across your target audiences, then use the findings to guide further research.</p><ul><li>Choose audience profiles</li><li>Ask consistent questions across every variant</li><li>Find recurring themes and differences between groups</li><li>Catch the wrong language for a market, or a joke that misses</li></ul></div><SurveyArt frame="layer-media" asset={creativeExamples[3].original} answers={["“I noticed the visual before I really noticed the message.”", "“I like the simplicity, but I don’t think it makes me want to buy food.”"]} /></article>
        <article id="improve" className="tool-studio"><div className="layer-copy"><ToolTag tool="studio" /><h2><em>Create</em> and compare.</h2><p>Turn the findings into a clear brief. Set what can change, keep essential brand elements, and compare the new design with the original using the same measures.</p><ul><li>Optimise an existing design, or generate a new one from a brief</li><li>Generate within brand and channel constraints</li><li>Compare original and alternative on shared metrics</li><li>Keep a record of what changed and why</li></ul></div><StudioArt frame="layer-media" example={creativeExamples[2]} /></article>
        <article id="compare" className="tool-ab"><div className="layer-copy"><ToolTag tool="ab" /><h2><em>Compare</em> two versions.</h2><p>Put two creatives side by side with the goal you care about. A/B Testing checks both on the same measures and names the stronger one for that goal.</p><ul><li>State the goal in your own words</li><li>See which design is stronger for that goal</li><li>Run the loop again on the version you keep</li></ul></div><AbTestArt frame="layer-media" /></article>
        <article id="shelf" className="tool-shelf"><div className="layer-copy"><ToolTag tool="shelf" /><h2>Test it on the <em>shelf.</em></h2><p>Digital Shelf shows your product next to the ones it has to beat. Compare it with competing listings, or simulate a placement and see what its position changes.</p><ul><li>Compare with the listings or products around it</li><li>Simulate a marketplace, store shelf, out-of-home or mall placement</li><li>Test the effect of position before you commit</li></ul></div><ShelfArt frame="layer-media" /></article>
      </div></div></section>
      <section className="section case-study-teaser"><div className="container compare-grid"><div><h2>See the creative examples.</h2><p>Explore the supplied Adidas, Fanta, Adobe and McDonald’s examples. See the original and recreated designs, with a clear explanation of what to test next.</p><Link className="btn secondary" href="/case-studies">Explore the creative examples →</Link></div><div className="case-triptych supplied-triptych">{[creativeExamples[0],creativeExamples[1],creativeExamples[2]].map(item=><img key={item.id} src={sitePath(item.recreated.src)} alt={item.recreated.alt} loading="lazy" />)}</div></div></section>
      <section className="final-cta"><div className="container"><h2>Start with one visual.</h2><p>Use the complete workflow or begin with the layer your project needs today.</p><div className="actions center"><a className="btn white" href="https://app.neurovision-ai.com/register">Start your first analysis →</a><Link className="btn ghost" href="/use-cases">Explore use cases</Link></div></div></section>
    </main><Footer /></>
  );
}
