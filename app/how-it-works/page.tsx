import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-shell";
import { sitePath } from "../site-path";

export const metadata: Metadata = {
  title: "How It Works",
  description: "See the NeuroVision creative loop, predictive attention, agentic surveys, optimisation and validation approach.",
};

const loop = [
  { icon:"↑", title:"Upload", copy:"Drop in an ad, page, package, product shot or interface. Keep the original stimulus at the centre of the analysis." },
  { icon:"◉", title:"Predict", copy:"Map likely early attention, visual hierarchy, clarity and recall potential in the opening one to two seconds." },
  { icon:"◫", title:"Interpret", copy:"Ask defined agentic audiences what the creative communicates, what they trust and what they may misunderstand." },
  { icon:"✦", title:"Improve", copy:"Generate evidence-led variants, compare them with the original and export the stronger direction." },
];

export default function HowItWorks() {
  return (
    <><Header /><main>
      <section className="page-hero how-hero"><div className="container page-hero-grid"><div><p className="kicker">How it works</p><h1>From first glance to a stronger creative decision.</h1></div><p className="lead">NeuroVision connects predictive attention, audience interpretation and GenAI optimisation in one workflow—fast enough to use while the work can still change.</p></div></section>
      <section className="section creative-loop"><div className="container"><div className="section-head"><div><p className="kicker">The creative loop</p><h2>Four connected actions.<br />Use one or run the full loop.</h2></div></div><div className="loop-grid">{loop.map((step,index)=><article key={step.title}><div className="loop-icon" aria-hidden="true">{step.icon}</div><span>Step {index+1}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div></section>
      <section className="section intelligence-layers"><div className="container"><div className="section-head"><div><p className="kicker light">Three layers of intelligence</p><h2>See it. Understand it. Improve it.</h2></div><p>Each layer answers a different question. Together, they create an evidence trail from the original stimulus to the next creative direction.</p></div><div className="layer-list">
        <article><div className="layer-copy"><span>01 / Predictive attention</span><h3>What is likely to be seen first?</h3><p>NeuroVision models the opening one to two seconds, when contrast, colour, faces, text, object structure and spatial hierarchy start shaping gaze. The result is a probability-based heatmap—not a claim about one individual viewer.</p><ul><li>Locate attention hotspots and competition</li><li>Check product, brand, headline and CTA visibility</li><li>Compare hierarchy consistently across variants</li></ul></div><div className="layer-media heatmap-media"><img src={sitePath("/assets/hero-heatmap.webp")} alt="Zephyr campaign with predictive heatmap"/><span>Predicted early attention</span><div className="heat-scale"><i/><b/></div></div></article>
        <article><div className="layer-copy"><span>02 / Agentic surveys</span><h3>What could the audience understand and feel?</h3><p>Attention shows what may enter the opening view. Structured agentic audiences extend the analysis into semantic interpretation: clarity, trust, emotional tone, brand fit, purchase relevance and potential misunderstanding across defined profiles.</p><ul><li>Build demographic and psychographic audiences</li><li>Ask consistent questions across every variant</li><li>Surface segment differences and recurring themes</li></ul></div><div className="layer-media survey-media"><div className="profile-line"><i>25–34</i><i>Urban</i><i>First-time buyer</i></div><blockquote>“The product feels premium, but the benefit is still too abstract.”</blockquote><p><span>Message clarity</span><b style={{width:"74%"}}/></p><p><span>Brand fit</span><b style={{width:"88%"}}/></p><p><span>Purchase relevance</span><b style={{width:"69%"}}/></p><small>Structured synthesis across a defined agentic sample</small></div></article>
        <article><div className="layer-copy"><span>03 / GenAI optimisation &amp; A/B</span><h3>Which evidence-led variation works harder?</h3><p>Findings become a structured creative brief for generation. New variants stay connected to the diagnosis, then return through the same attention and interpretation layers for A/B comparison against the original.</p><ul><li>Generate within brand and channel constraints</li><li>Compare original and alternative on shared metrics</li><li>Repeat the loop without losing the rationale</li></ul></div><div className="layer-media ab-media"><div><small>Original · A</small><img src={sitePath("/assets/hero-ad.webp")} alt="Original Zephyr campaign"/><span>76</span></div><b>VS</b><div className="ab-winner"><small>Optimised · B</small><img src={sitePath("/assets/hero-optimised.webp")} alt="Optimised Zephyr campaign"/><span>91</span></div><em>Predicted winner</em></div></article>
      </div></div></section>
      <section className="section case-study-teaser"><div className="container compare-grid"><div><p className="kicker">See the loop in context</p><h2>One automotive creative, taken through every layer.</h2><p>Follow Zephyr Motors from the original stimulus to early-attention diagnosis, audience interpretation and an A/B-tested generated direction.</p><Link className="btn secondary" href="/case-studies">Explore the detailed case study →</Link></div><div className="case-triptych"><img src={sitePath("/assets/hero-ad.webp")} alt="Original creative"/><img src={sitePath("/assets/hero-heatmap.webp")} alt="Attention prediction"/><img src={sitePath("/assets/hero-optimised.webp")} alt="Optimised variation"/></div></div></section>
      <section className="final-cta"><div className="container"><p className="kicker light">Run the loop yourself</p><h2>Start with one visual. Leave with a clearer decision.</h2><p>Use the complete workflow or begin with the layer your project needs today.</p><div className="actions center"><a className="btn white" href="http://app.neurovision-ai.com/register">Start your first analysis ↗</a><Link className="btn ghost" href="/use-cases">Explore use cases</Link></div></div></section>
    </main><Footer /></>
  );
}
