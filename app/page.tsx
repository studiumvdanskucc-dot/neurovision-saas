"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer, Header } from "./site-shell";
import { creativeExamples } from "./creative-examples";
import { CreativeVisual } from "./creative-visual";
import { AbTestArt, AttentionArt, ShelfArt, StudioArt, SurveyArt } from "./feature-art";
import { ChecklistIcon, CoinsIcon, EyesIcon, GlassesIcon } from "./brand-icons";
import { ToolRail, type ToolKey } from "./tool-rail";
import { PricingComparison } from "./pricing-comparison";
import { TokenPricing } from "./token-pricing";
import { ANALYSIS_TOKENS, MIN_TOPUP_TOKENS, REVISION_TOKENS, STUDIO_GENERATE_TOKENS, STUDIO_OPTIMISE_TOKENS, SURVEY_QUESTIONS, TOKEN_PRICE_CENTS, euros, surveyTokens } from "./token-pricing-data";

const price = (tokens: number) => euros(tokens * TOKEN_PRICE_CENTS);

const example = creativeExamples[1];
const demo = {
  original: { label: "Original", title: "Start with an idea.", asset: example.original, heatmap: false, note: "Start with the original ad and the message you want people to remember." },
  attention: { label: "Attention", title: "What catches the eye?", asset: example.original, heatmap: true, note: "A heatmap helps you compare what stands out. This overlay is a placeholder, not a prediction." },
  audience: { label: "Audience", title: "How do people read it?", asset: example.original, heatmap: false, note: "Ask AI-simulated audience profiles what the ad says and whether anything feels off. An illustrative answer: “I notice the orange first. I’m less sure which drink the ad is for.”" },
  optimise: { label: "Recreated", title: "Give it a new direction.", asset: example.recreated, heatmap: false, note: "Compare the new headline and larger logo. Re-test to find out whether the changes help." },
} as const;

type DemoKey = keyof typeof demo;

const toolIds: Record<ToolKey, string> = { attention: "attention", audience: "audience", studio: "studio", ab: "ab-testing", shelf: "shelf" };

const reasonIcons = [CoinsIcon, EyesIcon, ChecklistIcon, GlassesIcon];

const reasons = [
  ["Pay only when you test.", `No plans, no monthly fee and no annual licence. A token costs ${euros(TOKEN_PRICE_CENTS)}, and a month without testing costs nothing.`],
  ["Meaning, not only attention.", "A heatmap shows what is seen. AI audience surveys show how it is read: the wrong language for a market, a joke that misses, a message nobody can repeat."],
  ["Every check in one place.", "Attention analysis, audience surveys, A/B Testing, Digital Shelf and Generative Studio share one workspace and one token balance."],
  ["Built on research.", "Our own attention model draws on eye-tracking data and runs on European servers. We say plainly what a prediction can and cannot show."],
] as const;

const faqs = [
  ["What can I analyse?", "Upload an ad, social creative, landing page, website screenshot, packaging concept, product image or marketplace listing."],
  ["Do I need eye-tracking equipment?", "No. NeuroVision uses predictive models trained on behavioural, cognitive and eye-tracking data, so teams can evaluate early creative in the browser."],
  ["How do tokens work?", `Top up one token balance and spend it as you use NeuroVision. Each token costs ${euros(TOKEN_PRICE_CENTS)}, excluding VAT. An image analysis uses ${ANALYSIS_TOKENS} tokens (${price(ANALYSIS_TOKENS)}); a survey of 25 AI audience profiles, with up to ${SURVEY_QUESTIONS} questions each, uses ${surveyTokens(25)} tokens (${price(surveyTokens(25))}). In Generative Studio, optimising a design uses ${STUDIO_OPTIMISE_TOKENS} tokens (${price(STUDIO_OPTIMISE_TOKENS)}) and generating a new one uses ${STUDIO_GENERATE_TOKENS} (${price(STUDIO_GENERATE_TOKENS)}); both include a re-analysis, and each extra revision uses ${REVISION_TOKENS} (${price(REVISION_TOKENS)}). Your balance reduces with each action. Resizing is quoted separately.`],
  ["Is there a subscription or a minimum term?", `No. You top up a token balance when you choose, from ${MIN_TOPUP_TOKENS} tokens (${price(MIN_TOPUP_TOKENS)}), and spend it as you work. There is no monthly plan and no licence.`],
  ["How is NeuroVision different from other attention-testing tools?", "Most are sold as a monthly subscription or an annual licence, often after a demo or a quote. NeuroVision is pay as you go, and one balance covers attention analysis, AI audience surveys, A/B Testing, Digital Shelf and Generative Studio."],
  ["Can NeuroVision replace real consumer research?", "Use NeuroVision to compare ideas and improve designs early. For important launch decisions, follow up with real customers or campaign testing."],
];

export default function Home() {
  const [active, setActive] = useState<DemoKey>("original");
  const view = demo[active];

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>See your creative<br />through <em>fresh eyes.</em></h1>
              <p className="hero-lead">Test ads, websites and packaging before launch.<br className="desktop-break" /> Find what gets noticed, what feels unclear, and what to try next.</p>
              <div className="actions">
                <a className="btn primary" href="https://app.neurovision-ai.com/register">Try NeuroVision free <span aria-hidden="true">→</span></a>
                <Link className="text-link" href="/how-it-works">Take a closer look <span aria-hidden="true">→</span></Link>
              </div>
              <p className="hero-proof">Pay as you go at {euros(TOKEN_PRICE_CENTS)} per token. No subscription, no minimum term.</p>
            </div>

            <div className="product-wrap stimulus-product">
              <div className="product">
                <div className="product-bar"><strong>A small change. A different reading.</strong><span>Fanta · creative example</span></div>
                <div className="analysis">
                  <div className="demo-visual"><CreativeVisual asset={view.asset} heatmap={view.heatmap} priority /></div>
                  <div className="demo-copy">
                    <div className="tabs" role="group" aria-label="Explore the creative example">
                      {(Object.keys(demo) as DemoKey[]).map(key=><button type="button" aria-pressed={active===key} className={active===key?"on":""} onClick={()=>setActive(key)} key={key}>{demo[key].label}</button>)}
                    </div>
                    <h2>{view.title}</h2>
                    <p className="demo-note" aria-live="polite">{view.note}</p>
                    <Link className="text-link" href="/case-studies">Explore all four examples <span aria-hidden="true">→</span></Link>
                    <p className="demo-disclosure">Illustrative example. The heatmap and the audience answer are placeholders, not measured results. No brand affiliation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="section value" id="why">
          <div className="container">
            <div className="section-head"><div><h2>One place to check a creative.<br />Paid for only when you use it.</h2></div><p>We built NeuroVision so that any team can test every piece of creative, not only the big launches.</p></div>
            <div className="loop-grid value-grid">
              {reasons.map(([title, copy], index) => { const Icon = reasonIcons[index]; return <article className={`reason-${index + 1}`} key={title}><Icon size={30} /><h3>{title}</h3><p>{copy}</p></article>; })}
            </div>
          </div>
        </section>

        <section className="section platform" id="platform">
          <div className="container feature-list">
            <article className="feature-row tool-attention" id={toolIds.attention}>
              <ToolRail tool="attention" ids={toolIds} />
              <div className="feature-copy"><h2>Find what gets <em>noticed.</em></h2><p>Check whether the product, headline and logo stand out. Our attention model helps you review visual hierarchy without eye-tracking equipment.</p><p className="feature-cost"><b>{ANALYSIS_TOKENS} tokens</b> per image, {price(ANALYSIS_TOKENS)}</p><div className="feature-actions"><Link className="text-link" href="/how-it-works#attention">Explore attention prediction <span aria-hidden="true">→</span></Link></div></div>
              <AttentionArt />
            </article>
            <article className="feature-row reverse tool-audience" id={toolIds.audience}>
              <ToolRail tool="audience" ids={toolIds} />
              <div className="feature-copy"><h2>Look beyond the first <em>glance.</em></h2><p>Ask AI-simulated audience profiles about clarity, trust and relevance. Catch what a heatmap cannot show: the wrong language for a market, a joke that misses, a message nobody can repeat. Then decide what to explore with real people.</p><p className="feature-cost"><b>From {surveyTokens(25)} tokens</b> for 25 profiles, {price(surveyTokens(25))}, with up to {SURVEY_QUESTIONS} questions each</p><div className="feature-actions"><Link className="text-link" href="/how-it-works#audience">Explore audience surveys <span aria-hidden="true">→</span></Link></div></div>
              <SurveyArt />
            </article>
            <article className="feature-row tool-studio" id={toolIds.studio}>
              <ToolRail tool="studio" ids={toolIds} />
              <div className="feature-copy"><h2>Make the next version <em>count.</em></h2><p>Turn the findings into a new design in Generative Studio. Optimise the creative you have, or generate a new one from a brief. Keep your brand rules and resize for your channels. Every run ends with a re-analysis, so you can compare the result with the original on the same checks.</p><p className="feature-cost"><b>{STUDIO_OPTIMISE_TOKENS} tokens</b> to optimise a design, {price(STUDIO_OPTIMISE_TOKENS)}. <b>{STUDIO_GENERATE_TOKENS} tokens</b> to generate a new one, {price(STUDIO_GENERATE_TOKENS)}</p><div className="feature-actions"><Link className="text-link" href="/how-it-works#improve">Explore creative improvement <span aria-hidden="true">→</span></Link></div></div>
              <StudioArt />
            </article>
            <article className="feature-row reverse tool-ab" id={toolIds.ab}>
              <ToolRail tool="ab" ids={toolIds} />
              <div className="feature-copy"><h2>Pick the stronger <em>version.</em></h2><p>Put two creatives side by side with the goal you care about. NeuroVision checks both on the same measures and names the stronger one for that goal, so you know which to develop.</p><div className="feature-actions"><Link className="text-link" href="/how-it-works#compare">Explore A/B Testing <span aria-hidden="true">→</span></Link></div></div>
              <AbTestArt />
            </article>
            <article className="feature-row tool-shelf" id={toolIds.shelf}>
              <ToolRail tool="shelf" ids={toolIds} />
              <div className="feature-copy"><h2>See it where it <em>competes.</em></h2><p>Your product never appears alone. Compare it with the listings it has to beat, or place it in a marketplace, store-shelf, out-of-home or mall layout and see what its position changes.</p><div className="feature-actions"><Link className="text-link" href="/how-it-works#shelf">Explore Digital Shelf <span aria-hidden="true">→</span></Link></div></div>
              <ShelfArt />
            </article>
          </div>
        </section>

        <section className="section pricing" id="pricing">
          <div className="container">
            <div className="pricing-head"><h2>Top up once. Spend as you work.</h2><p>One token balance for image analysis, AI audience surveys and Generative Studio. Every token costs {euros(TOKEN_PRICE_CENTS)}, excluding VAT. No plans or monthly subscriptions.</p></div>
            <TokenPricing compact />
            <PricingComparison />
          </div>
        </section>

        <section className="section agency-pricing agency-teaser" id="agency">
          <div className="container"><h2>Prefer us to do the work?</h2><p>Our specialists can analyse your campaign, improve the design and test it again. One-off projects start at €690, excluding VAT.</p><Link className="btn primary" href="/pricing#agency">Explore expert services <span aria-hidden="true">→</span></Link></div>
        </section>

        <section className="section faq">
          <div className="container faq-grid">
            <div><h2>Common questions.</h2><p>Still deciding how NeuroVision fits? <a href="mailto:info@neurovision-ai.com">Talk to our team.</a></p></div>
            <div>{faqs.map(([q,a], index) => <details key={q} open={index===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
          </div>
        </section>

        <section className="final-cta"><div className="container"><h2>Try it with your own creative.</h2><p>Upload a visual, explore the findings and create a version you can test.</p><div className="actions center"><a className="btn white" href="https://app.neurovision-ai.com/register">Try NeuroVision free →</a><a className="btn ghost" href="mailto:info@neurovision-ai.com?subject=NeuroVision%20demo">Book a demo</a></div><small>Pay as you go. No subscription.</small></div></section>
      </main>
      <Footer />
    </>
  );
}
