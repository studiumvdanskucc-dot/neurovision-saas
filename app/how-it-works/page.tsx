import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-shell";
import { sitePath } from "../site-path";
import { CreativeVisual } from "../creative-visual";
import { creativeExamples } from "../creative-examples";
import { ProductWalkthrough } from "../product-walkthrough";

export const metadata: Metadata = {
  title: "How It Works",
  description: "See how to upload a design, predict attention, explore AI audience feedback and compare a revised version.",
};


export default function HowItWorks() {
  return (
    <><Header /><main id="main-content">
      <section className="page-hero how-hero"><div className="container page-hero-grid"><div><p className="kicker">How it works</p><h1>Upload. Analyse. Improve. Re-test.</h1></div><p className="lead">Upload an ad, website screenshot or package. NeuroVision predicts attention, explores how an AI audience interprets the message, and helps you create and compare a new version.</p></div></section>
      <section className="section how-walkthrough"><div className="container"><div className="section-head"><h2>Four connected actions.<br />Use one or run the full loop.</h2><p>See what you upload, what NeuroVision returns and how to use the findings.</p></div><ProductWalkthrough /></div></section>
      <section className="section intelligence-layers"><div className="container"><div className="layer-list">
        <article id="attention"><div className="layer-copy"><h2>See a predicted attention heatmap.</h2><p>An attention heatmap estimates which parts of a design are likely to attract the eye. Check the headline, product, logo and call to action before launch.</p><ul><li>Locate attention hotspots and competition</li><li>Check product, brand, headline and CTA visibility</li><li>Compare hierarchy consistently across variants</li></ul></div><figure className="layer-media stimulus-layer"><CreativeVisual asset={creativeExamples[1].original} heatmap /><figcaption>Illustrative heatmap placeholder. Not a model prediction.</figcaption></figure></article>
        <article id="audience"><div className="layer-copy"><h2>Ask an AI audience what the message means.</h2><p>AI-simulated profiles answer questions about your message. Explore clarity, trust and relevance across your target audiences, then use the findings to guide further research.</p><ul><li>Choose audience profiles</li><li>Ask consistent questions across every variant</li><li>Find recurring themes and differences between groups</li></ul></div><div className="layer-media survey-media"><div className="profile-line"><i>Selected audience</i><i>Same questions for both versions</i></div><blockquote>What is the main message?</blockquote><blockquote>What feels unclear?</blockquote><blockquote>Is this relevant to you?</blockquote><small>Example questions for AI-simulated profiles</small></div></article>
        <article id="improve"><div className="layer-copy"><h2>Create a new version. Test it again.</h2><p>Turn the findings into a clear brief. Set what can change, keep essential brand elements, and compare the new design with the original using the same measures.</p><ul><li>Generate within brand and channel constraints</li><li>Compare original and alternative on shared metrics</li><li>Keep a record of what changed and why</li></ul></div><div className="layer-media ab-media supplied-ab"><div><small>Original</small><img src={sitePath(creativeExamples[2].original.src)} alt={creativeExamples[2].original.alt} /></div><b aria-hidden="true">→</b><div><small>Recreated</small><img src={sitePath(creativeExamples[2].recreated.src)} alt={creativeExamples[2].recreated.alt} /></div><p>Illustrative redesign. Re-test before choosing a version.</p></div></article>
      </div></div></section>
      <section className="section case-study-teaser"><div className="container compare-grid"><div><h2>See the creative examples.</h2><p>Explore the supplied Adidas, Fanta, Adobe and McDonald’s examples. See the original and recreated designs, with a clear explanation of what to test next.</p><Link className="btn secondary" href="/case-studies">Explore the creative examples →</Link></div><div className="case-triptych supplied-triptych">{[creativeExamples[0],creativeExamples[1],creativeExamples[2]].map(item=><img key={item.id} src={sitePath(item.recreated.src)} alt={item.recreated.alt} loading="lazy" />)}</div></div></section>
      <section className="final-cta"><div className="container"><h2>Start with one visual.</h2><p>Use the complete workflow or begin with the layer your project needs today.</p><div className="actions center"><a className="btn white" href="https://app.neurovision-ai.com/register">Start your first analysis →</a><Link className="btn ghost" href="/use-cases">Explore use cases</Link></div></div></section>
    </main><Footer /></>
  );
}
