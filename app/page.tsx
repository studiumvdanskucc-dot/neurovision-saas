import Link from "next/link";
import { Footer, Header } from "./site-shell";
import { REGISTER_URL } from "./site-links";
import { CreativeCompare } from "./creative-compare";
import { ClosingCTA } from "./closing-cta";

const questions = [
  ["What do I upload?", "Start with an image: an ad, website screenshot, packaging concept, product image or marketplace listing. Tell NeuroVision what you want viewers to notice and understand."],
  ["What will I get back?", "An attention heatmap and a prioritised creative critique. You can also compare alternatives, explore AI audience feedback, generate a revised version and test it again."],
  ["Are the survey respondents real people?", "No. Surveys use AI-simulated audience profiles. They help you explore possible interpretations and decide what to test with people; they are not a recruited consumer panel."],
  ["How much can I do for free?", "The Free plan includes 40 credits each month. At 5 credits per single-image analysis, that is up to 8 analyses if you use the whole allowance for analysis. Other actions use different amounts."],
  ["How is my creative data handled?", "Our proprietary attention model runs on European infrastructure. You can connect supported providers with your own API keys. Processing and retention depend on the providers and configuration you choose."],
  ["Does a better prediction guarantee a better campaign?", "No. NeuroVision helps you screen and improve creative before launch. Real results also depend on the audience, placement, offer and context. Use human research or a live A/B test for final validation."],
];

export default function Home() {
  return <><Header /><main id="main-content">
    <section className="home-hero"><div className="container home-hero-grid">
      <div className="home-hero-copy">
        <p className="kicker">AI creative testing for marketing teams</p>
        <h1>Make your creative clearer.<br /><span>Before you launch.</span></h1>
        <p className="lead">Upload an ad, website or packaging design. Predict what gets noticed, explore how your audience might understand it, and create a better next version.</p>
        <div className="actions"><a className="btn primary" href={REGISTER_URL}>Start free <span aria-hidden="true">↗</span></a><Link className="btn hero-secondary" href="/how-it-works">See how it works <span aria-hidden="true">→</span></Link></div>
        <p className="home-allowance">40 free credits each month · Up to 8 image analyses</p>
      </div>
      <div className="hero-example" aria-label="An illustrative creative redesign">
        <div className="hero-example-title"><span>From original to next version</span><small>Creative example</small></div>
        <CreativeCompare compact />
        <Link className="text-link" href="/case-studies">Explore all four examples <span aria-hidden="true">→</span></Link>
      </div>
    </div></section>
    <nav className="home-section-nav" aria-label="Explore NeuroVision"><div className="container"><span>Explore NeuroVision</span><a href="#capabilities">What it does</a><a href="#why-neurovision">Why NeuroVision</a><a href="#get-started">Ways to get started</a><a href="#questions">Common questions</a></div></nav>

    <section className="section home-capabilities" id="capabilities"><div className="container">
      <div className="section-head"><p className="kicker">01 / What NeuroVision does</p><h2>Three questions.<br />One connected workflow.</h2><p>Start with attention analysis. Add audience feedback and creative improvement when your decision needs them.</p></div>
      <div className="open-columns">
        <article><span className="step-number">01 / Attention</span><h3>Will it get noticed?</h3><p>Predict where attention is likely to go. Check whether the brand, message and next step stand out.</p><div className="card-output"><span>You get</span><strong>An attention map + prioritised fixes</strong></div><Link className="text-link" href="/how-it-works#attention">Explore attention analysis →</Link></article>
        <article><span className="step-number">02 / Audience</span><h3>Will it be understood?</h3><p>Explore clarity and relevance with AI-simulated audiences. Find the questions to ask real customers.</p><div className="card-output"><span>You get</span><strong>Feedback by audience profile</strong></div><Link className="text-link" href="/how-it-works#audience">Explore audience insights →</Link></article>
        <article><span className="step-number">03 / Improvement</span><h3>What should change?</h3><p>Create a new direction from the findings. Re-test it with the same measures and compare what changed.</p><div className="card-output"><span>You get</span><strong>A new version + a clear comparison</strong></div><Link className="text-link" href="/how-it-works#improvement">Explore creative improvement →</Link></article>
      </div>
      <div className="format-links"><span>For your next project</span><Link href="/use-cases#campaigns">Ads &amp; campaigns →</Link><Link href="/use-cases#websites">Websites &amp; UX →</Link><Link href="/use-cases#digital-shelf">Digital shelf →</Link><Link href="/use-cases#packaging">Packaging →</Link></div>
    </div></section>

    <section className="section home-foundation" id="why-neurovision"><div className="container">
      <div className="section-head"><p className="kicker">02 / Why NeuroVision</p><h2>Built on research.<br />Built for your team.</h2><p>Our own attention model, deployed in Europe. Millions of research-grade data points. The option to use your own API keys.</p><Link className="text-link" href="/about#why-neurovision-is-different">What makes us different →</Link></div>
      <div className="quiet-routes"><Link href="/science"><span>The science</span><b>Understand the evidence <i aria-hidden="true">→</i></b></Link><Link href="/use-cases"><span>Your next project</span><b>Ads, websites, shelf &amp; packaging <i aria-hidden="true">→</i></b></Link></div>
    </div></section>

    <section className="section home-start" id="get-started"><div className="container">
      <div className="section-head"><p className="kicker">03 / Two ways to get started</p><h2>Your team runs it.<br />Or we run it with you.</h2></div>
      <div className="start-options"><article><p className="kicker">Self-service software</p><h3>The platform.</h3><p>For everyday creative decisions. Start free, with paid plans from €25 per month.</p><Link className="btn primary" href="/pricing">Compare software plans →</Link></article><article><p className="kicker">Hands-on creative support</p><h3>Expert support.</h3><p>Analysis, creative direction and hands-on design. Project packages from €690, excluding VAT.</p><Link className="btn secondary" href="/pricing#agency">Explore expert services →</Link></article></div>
    </div></section>

    <section className="section home-questions" id="questions"><div className="reading-width"><div className="section-head"><p className="kicker">04 / Before you start</p><h2>Common questions.</h2></div><div className="question-list">{questions.map(([question,answer]) => <details className="reading-details" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><div><p>{answer}</p></div></details>)}</div></div></section>
    <ClosingCTA />
  </main><Footer /></>;
}
