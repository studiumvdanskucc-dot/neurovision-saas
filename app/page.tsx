"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer, Header } from "./site-shell";
import { creativeExamples } from "./creative-examples";
import { CreativeVisual } from "./creative-visual";
import { CoinsIcon, EyesIcon, GlassesIcon, ShieldIcon, ChecklistIcon, KeyIcon, SurveyIcon } from "./brand-icons";
import { ToolShowcase } from "./tool-showcase";
import { tools } from "./tools";
import { PricingComparison } from "./pricing-comparison";
import { TokenPricing } from "./token-pricing";
import { ANALYSIS_TOKENS, MIN_TOPUP_TOKENS, OWN_KEYS_DISCOUNT, OWN_KEYS_TOKEN_PRICE_CENTS, REVISION_TOKENS, STUDIO_GENERATE_TOKENS, STUDIO_OPTIMISE_TOKENS, SURVEY_QUESTIONS, TOKEN_PRICE_CENTS, euros, surveyTokens, tokenRate } from "./token-pricing-data";
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
  ["How do tokens work?", `Top up one token balance and spend it as you use NeuroVision. Each token costs ${euros(TOKEN_PRICE_CENTS)}, excluding VAT. An image analysis uses ${ANALYSIS_TOKENS} tokens (${price(ANALYSIS_TOKENS)}); a survey of 25 AI audience profiles, with up to ${SURVEY_QUESTIONS} questions each, uses ${surveyTokens(25)} tokens (${price(surveyTokens(25))}). In Generative Studio, optimising a design uses ${STUDIO_OPTIMISE_TOKENS} tokens (${price(STUDIO_OPTIMISE_TOKENS)}) and generating a new one uses ${STUDIO_GENERATE_TOKENS} (${price(STUDIO_GENERATE_TOKENS)}); both include a re-analysis, and each extra revision uses ${REVISION_TOKENS} (${price(REVISION_TOKENS)}). Your balance reduces with each action. Resizing is quoted separately.`],
  ["Is there a subscription or a minimum term?", `No. You top up a token balance when you choose, from ${MIN_TOPUP_TOKENS} tokens (${price(MIN_TOPUP_TOKENS)}), and spend it as you work. There is no monthly plan and no licence.`],
  ["Can I use my own API keys?", `Yes. Connect your own AI provider keys for reports to keep that data in your own accounts instead of sending it elsewhere. Every price then drops by ${Math.round(OWN_KEYS_DISCOUNT * 100)}%, to ${tokenRate(OWN_KEYS_TOKEN_PRICE_CENTS)} per token. NeuroVision itself runs on European servers.`],
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
              <h1>Know how your creative<br className="desktop-break" /> lands <em>before launch.</em></h1>
              <p className="hero-lead">NeuroVision brings neuroscience and AI together. See where people look,<br className="desktop-break" /> hear what they understood, and fix what isn’t working, in minutes.</p>
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
            <div className="bento">
              
              <article className="bento-card bento-heat">
                <span className="bento-icon"><EyesIcon size={22} /></span>
                <h3>See where people look first.</h3>
                <p>Our attention model predicts which parts of a design catch the eye in the first seconds: the product, the headline, the logo or the call to action.</p>
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
                <p>Ask AI audience profiles up to {SURVEY_QUESTIONS} questions each. They flag what a heatmap can’t: text that grabs the eye but can’t be read, a joke that falls flat, a claim nobody believes.</p>
                <div className="bento-visual survey-visual" aria-hidden="true">
                  <div className="sv-panel">
                    <div className="sv-panel-head"><span className="sv-avatars"><i /><i /><i /><i /></span><span>100 profiles · runners, 25–40</span></div>
                    <p className="sv-q">Q2 · Could you read the headline easily?</p>
                    <span className="sv-bar"><b>Yes, easily</b><i style={{ width: "21%" }} /><small>21%</small></span>
                    <span className="sv-bar is-bad"><b>Only with effort</b><i style={{ width: "58%" }} /><small>58%</small></span>
                    <span className="sv-bar"><b>Didn’t read it</b><i style={{ width: "21%" }} /><small>21%</small></span>
                  </div>
                  <div className="sv-flags">
                    <p><span>Readability</span>“The letters grab my attention, but spaced out like that I can’t read the headline.”</p>
                    <p><span>Tone</span>“The joke on the second line would not work in Germany. It reads as rude.”</p>
                    <p className="is-good"><span>Message</span>“It’s about becoming a better version of yourself.”</p>
                  </div>
                  <small className="bento-note">Illustrative results</small>
                </div>
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
                <p>Attention prediction, audience surveys, A/B Testing, Digital Shelf and Generative Studio, in one workspace with one token balance.</p>
                <div className="bento-visual all-tools" aria-hidden="true">{tools.map(tool => <span className={`tool-${tool.key}`} key={tool.key}><tool.Icon size={18} /></span>)}</div>
              </article>
              <article className="bento-card bento-science">
                <span className="bento-icon"><GlassesIcon size={22} /></span>
                <h3>Built on neuroscience.</h3>
                <p>Our attention model is built on the latest neuroscience and eye-tracking research. It is about 95% as accurate as an eye-tracking study, and it returns insight on a creative in seconds instead of weeks.</p>
                <div className="bento-visual science-stat" aria-hidden="true"><strong>~95%</strong><span>as accurate as eye-tracking<br />in seconds, not weeks</span></div>
              </article>
              <article className="bento-card bento-eu">
                <span className="bento-icon"><ShieldIcon size={22} /></span>
                <h3>Deployed in the EU. Your data, your choice.</h3>
                <p>NeuroVision runs on European servers. Bring your own API keys for reports to keep everything in-house instead of sending data elsewhere, and pay {Math.round(OWN_KEYS_DISCOUNT * 100)}% less for every test.</p>
                <div className="bento-visual eu-visual">
                  <span className="eu-chips" aria-hidden="true"><span><ShieldIcon size={16} />European servers</span><span><KeyIcon size={16} />Your own API keys</span></span>
                  <Link className="eu-deal" href="/pricing#own-keys"><b>−{Math.round(OWN_KEYS_DISCOUNT * 100)}%</b><span>{tokenRate(OWN_KEYS_TOKEN_PRICE_CENTS)} per token with your own keys</span><span aria-hidden="true">→</span></Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section platform" id="platform">
          <div className="container">
            <div className="section-head"><div><h2>Five tools. One token balance.</h2></div><p>Go from where people look, to what they understood, to a better version, without switching tools.</p></div>
            <ToolShowcase />
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
