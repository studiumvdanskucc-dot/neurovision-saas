"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer, Header } from "./site-shell";
import { creativeExamples } from "./creative-examples";
import { CreativeVisual } from "./creative-visual";
import { CoinsIcon, EyesIcon, GlassesIcon, ShieldIcon, ChecklistIcon, KeyIcon, SurveyIcon } from "./brand-icons";
import { ToolShowcase } from "./tool-showcase";
import { SurveyIllustration } from "./survey-illustration";
import { tools } from "./tools";
import { PricingComparison } from "./pricing-comparison";
import { ANALYSIS_TOKENS, FREE_TOKENS, MIN_TOPUP_TOKENS, OWN_KEYS_DISCOUNT, OWN_KEYS_TOKEN_PRICE_CENTS, REVISION_TOKENS, STUDIO_GENERATE_TOKENS, STUDIO_OPTIMISE_TOKENS, SURVEY_QUESTIONS, TOKEN_PRICE_CENTS, euros, surveyTokens, tokenRate } from "./token-pricing-data";
import { sitePath } from "./site-path";

const price = (tokens: number) => euros(tokens * TOKEN_PRICE_CENTS);

const example = creativeExamples[1];
const demo = {
  original: { label: "Original", title: "Start with an idea.", asset: example.original, heatmap: false, note: "Start with the original ad and the message you want people to remember." },
  attention: { label: "Attention", title: "What catches the eye?", asset: example.original, heatmap: true, note: "A heatmap helps you compare what stands out. This overlay is a placeholder, not a prediction." },
  audience: { label: "Audience", title: "How do people read it?", asset: example.original, heatmap: false, note: "Ask AI-simulated audience profiles what the ad says and whether anything feels off. An illustrative answer: “I notice the orange first. I’m less sure which drink the ad is for.”" },
  optimise: { label: "Recreated", title: "Give it a new direction.", asset: example.recreated, heatmap: false, note: "Compare the new headline and larger logo. Re-test to find out whether the changes help." },
} as const;

type DemoKey = keyof typeof demo;

const faqs = [
  ["What can I analyse?", "Upload an ad, social creative, landing page, website screenshot, packaging concept, product image or marketplace listing."],
  ["Do I need eye-tracking equipment?", "No. NeuroVision uses predictive models built on neuroscience research and trained on behavioural, cognitive and eye-tracking data, so teams can evaluate early creative in the browser."],
  ["How do tokens work?", `New accounts start with ${FREE_TOKENS} free tokens. After that, top up one token balance and spend it as you use NeuroVision. Each token costs ${euros(TOKEN_PRICE_CENTS)}, excluding VAT. An image analysis uses ${ANALYSIS_TOKENS} tokens (${price(ANALYSIS_TOKENS)}); a survey of 25 AI audience profiles, with up to ${SURVEY_QUESTIONS} questions each, uses ${surveyTokens(25)} tokens (${price(surveyTokens(25))}). In Generative Studio, optimising a design uses ${STUDIO_OPTIMISE_TOKENS} tokens (${price(STUDIO_OPTIMISE_TOKENS)}) and generating a new one uses ${STUDIO_GENERATE_TOKENS} (${price(STUDIO_GENERATE_TOKENS)}); both include a re-analysis, and each extra revision uses ${REVISION_TOKENS} (${price(REVISION_TOKENS)}). Your balance reduces with each action. Resizing is quoted separately.`],
  ["Is there a subscription or a minimum term?", `No. You top up a token balance when you choose, from ${MIN_TOPUP_TOKENS} tokens (${price(MIN_TOPUP_TOKENS)}), and spend it as you work. There is no monthly plan and no licence.`],
  ["Can I use my own API keys?", `Yes. Connect your own AI provider keys for reports to keep that data in your own accounts instead of sending it elsewhere. Every price then drops by ${Math.round(OWN_KEYS_DISCOUNT * 100)}%, to ${tokenRate(OWN_KEYS_TOKEN_PRICE_CENTS)} per token. NeuroVision itself runs on European servers.`],
  ["How is NeuroVision different from other attention-testing tools?", "We are independent and open about our method. Our attention model builds on state-of-the-art published models, refined with our specific research data. It is deployed in Europe and validated in university studies, with full results published in early 2027. Beyond where people look, NeuroVision shows how they read a creative and helps you decide what to change. And you pay per action, not per month."],
  ["Can Generative Studio make production-ready designs?", "Not yet, but that’s where we’re heading. Generative Studio already suggests revisions and re-checks them against the original, so you can see what is likely to work better. Image generation is getting better every month, but today’s technology can’t yet guarantee production-ready artwork, so your designers should finish the final version. We’re working to push it further, and as soon as it can deliver production-ready designs, we’ll let you know."],
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
              <h1>Know how your creative<br className="desktop-break" /> lands <em>before launch.</em></h1>
              <p className="hero-lead">NeuroVision brings neuroscience and AI together to predict what people notice and how they read your creative. See where they look, hear what they understand, and decide with confidence before you commit to a design.</p>
              <div className="actions">
                <a className="btn primary" href="https://app.neurovision-ai.com/register">Try NeuroVision free <span aria-hidden="true">→</span></a>
                <Link className="text-link" href="/how-it-works">Take a closer look <span aria-hidden="true">→</span></Link>
              </div>
              <p className="hero-proof">Start with {FREE_TOKENS} free tokens. Deployed in Europe, validated in university research, pay as you go.</p>
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
            <div className="section-head"><div><h2>Evidence you can check.<br />Paid for only when you use it.</h2></div><p>We help marketers and designers make confident creative decisions on every piece of work, not only the big launches.</p></div>
            <div className="bento">
              
              <article className="bento-card bento-heat">
                <span className="bento-icon"><EyesIcon size={22} /></span>
                <h3>See where people look first.</h3>
                <p>Our attention model builds on state-of-the-art published research, combining established attention models with our specific research data. It predicts which parts of a design catch the eye in the first seconds: the product, the headline, the logo or the call to action.</p>
                <div className="bento-visual heat-visual" aria-hidden="true">
                  <span className="heat-shot"><img src={sitePath(creativeExamples[0].original.src)} alt="" width={creativeExamples[0].original.width} height={creativeExamples[0].original.height} loading="lazy" /><i /></span>
                  <span className="heat-aois">
                    <span><b>Runner</b><i style={{ width: "86%" }} /><small>25.4%</small></span>
                    <span><b>Headline</b><i style={{ width: "48%" }} /><small>11.2%</small></span>
                    <span><b>Shoes</b><i style={{ width: "16%" }} /><small>3.3%</small></span>
                    <span><b>Logo</b><i style={{ width: "13%" }} /><small>2.7%</small></span>
                    <small className="bento-note">Share of predicted attention · illustrative</small>
                  </span>
                </div>
              </article>
              <article className="bento-card bento-survey">
                <span className="bento-icon"><SurveyIcon size={22} /></span>
                <h3>Hear what people understood.</h3>
                <p>Ask AI audience profiles, grounded in behavioural and cognitive research, up to {SURVEY_QUESTIONS} questions each. They flag what a heatmap can’t: text that grabs the eye but can’t be read, a joke that falls flat, a claim nobody believes.</p>
                <div className="bento-visual survey-visual"><SurveyIllustration /></div>
              </article>
              <article className="bento-card bento-pay">
                <span className="bento-icon"><CoinsIcon size={22} /></span>
                <h3>Pay only when you test.</h3>
                <p>No plans, no monthly fee and no annual licence. A token costs {euros(TOKEN_PRICE_CENTS)}, and a month without testing costs nothing.</p>
                <div className="bento-visual pay-feed" aria-hidden="true">
                  <span className="pay-balance"><CoinsIcon size={16} />470 tokens</span>
                  <span><b>Image analysed</b><i>−{ANALYSIS_TOKENS}</i></span>
                  <span><b>Survey, 25 profiles</b><i>−{surveyTokens(25)}</i></span>
                  <span><b>Design optimised</b><i>−{STUDIO_OPTIMISE_TOKENS}</i></span>
                </div>
              </article>
              <article className="bento-card bento-all">
                <span className="bento-icon"><ChecklistIcon size={22} /></span>
                <h3>All the analysis you need, in one place.</h3>
                <p>Attention, audience feedback, version comparison, shelf placement and design suggestions, in one workspace with one token balance.</p>
                <div className="bento-visual all-tools" aria-hidden="true">{tools.map(tool => <span className={`tool-${tool.key}`} key={tool.key}><tool.Icon size={18} /></span>)}</div>
              </article>
              <article className="bento-card bento-science">
                <span className="bento-icon"><GlassesIcon size={22} /></span>
                <h3>Built on neuroscience. Validated in the open.</h3>
                <p>The attention model is based on state-of-the-art neuroscience and eye-tracking research, and it returns insight in seconds instead of weeks. Our university validation studies have been positive so far, and the full results will be published in early 2027.</p>
                <div className="bento-visual science-stat" aria-hidden="true"><strong>Seconds,<br />not weeks</strong><span>Full results published<br />early 2027</span></div>
              </article>
              <article className="bento-card bento-eu">
                <span className="bento-icon"><ShieldIcon size={22} /></span>
                <h3>Deployed in the EU. Your data, your choice.</h3>
                <p>NeuroVision runs on European servers. Bring your own API keys for reports to keep everything in-house instead of sending data elsewhere.</p>
                <div className="bento-visual eu-visual">
                  <span className="eu-chips" aria-hidden="true"><span><ShieldIcon size={16} />European servers</span><span><KeyIcon size={16} />Your own API keys</span></span>
                  
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section platform" id="platform">
          <div className="container">
            <div className="section-head"><div><h2>One workflow. One token balance.</h2></div><p>Predict what people notice, understand how they read it, and decide what to change, all from the same balance.</p></div>
            <ToolShowcase />
          </div>
        </section>

        <section className="section pricing" id="pricing">
          <div className="container">
            <div className="pricing-head"><h2>Top up once. Spend as you work.</h2><p>One token balance for every tool. New accounts start with {FREE_TOKENS} free tokens, worth {euros(FREE_TOKENS * TOKEN_PRICE_CENTS)} of testing. After that, every token costs {euros(TOKEN_PRICE_CENTS)}, excluding VAT. No plans or monthly subscriptions.</p></div><PricingComparison />
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

        <section className="final-cta"><div className="container"><h2>Try it with your own creative.</h2><p>Upload a visual, see what people notice and understand, and decide what to change next.</p><div className="actions center"><a className="btn white" href="https://app.neurovision-ai.com/register">Try NeuroVision free →</a><a className="btn ghost" href="mailto:info@neurovision-ai.com?subject=NeuroVision%20demo">Book a demo</a></div><small>Start with {FREE_TOKENS} free tokens. One token system for every tool. No subscription.</small></div></section>
      </main>
      <Footer />
    </>
  );
}
