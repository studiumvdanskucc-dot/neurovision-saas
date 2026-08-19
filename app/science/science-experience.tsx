"use client";

import { useState } from "react";
import { sitePath } from "../site-path";

const stages = [
  {
    id: "input",
    step: "01",
    short: "Creative in",
    title: "Lock the question before measuring.",
    copy: "Upload the original creative, define the campaign objective and mark the business-critical areas: brand, product, headline, offer and CTA.",
    outputs: ["Original creative", "Campaign brief", "AOI map"],
  },
  {
    id: "analysis",
    step: "02",
    short: "Analyse",
    title: "Predict attention and diagnose the hierarchy.",
    copy: "Estimate the opening attention pattern, identify visual competition and explain what is likely to be seen, missed or misunderstood.",
    outputs: ["Heatmap", "Attention metrics", "Ranked risks"],
  },
  {
    id: "ab",
    step: "A/B",
    short: "Compare if needed",
    title: "Compare concepts when the decision needs it.",
    copy: "Run the same measures across two or more concepts. This optional branch helps teams select a direction before deeper audience work.",
    outputs: ["Like-for-like scoring", "Variant ranking", "Decision evidence"],
  },
  {
    id: "survey",
    step: "03",
    short: "Survey",
    title: "Test what defined audiences take away.",
    copy: "Run controlled agentic surveys across selected audience profiles to assess clarity, trust, relevance, emotion and interpretation risk.",
    outputs: ["Segment views", "Clarity signals", "Human-calibrated distributions"],
  },
  {
    id: "regenerate",
    step: "04",
    short: "Regenerate",
    title: "Turn ranked evidence into a constrained variant.",
    copy: "Keep must-have brand elements locked, change only the diagnosed weak points and produce an improved, traceable creative direction.",
    outputs: ["Edit plan", "New variant", "Change log"],
  },
  {
    id: "retest",
    step: "05",
    short: "Re-test & compare",
    title: "Measure the new version against the original.",
    copy: "Repeat the same attention and interpretation tests, then report exactly what moved—such as brand visibility, CTA attention or message clarity.",
    outputs: ["Before/after delta", "Winner evidence", "Next decision"],
  },
] as const;

type StageId = (typeof stages)[number]["id"];

export function ScienceLoop() {
  const [active, setActive] = useState<StageId>("analysis");
  const selected = stages.find((stage) => stage.id === active) ?? stages[1];

  return (
    <section className="sv-loop" id="closed-loop">
      <div className="container">
        <div className="sv-loop-head">
          <div>
            <p className="kicker">The NeuroVision loop</p>
            <h2>One creative. Six connected decisions.</h2>
          </div>
          <p>
            Select any stage to explore it. Every output becomes the input to the
            next decision, and the final comparison returns the evidence to the start.
          </p>
        </div>

        <div className="sv-loop-canvas" aria-label="Interactive NeuroVision workflow">
          <span className="sv-wire sv-wire-one" aria-hidden="true" />
          <span className="sv-wire sv-wire-two" aria-hidden="true" />
          <span className="sv-wire sv-wire-three" aria-hidden="true" />
          <span className="sv-wire sv-wire-four" aria-hidden="true" />
          <span className="sv-wire sv-wire-five" aria-hidden="true" />
          <span className="sv-wire sv-wire-six" aria-hidden="true" />

          <button className={`sv-loop-card sv-input-card ${active === "input" ? "active" : ""}`} onClick={() => setActive("input")} aria-pressed={active === "input"}>
            <span className="sv-card-browser"><i /><i /><i /></span>
            <img src={sitePath("/assets/hero-ad.webp")} alt="Original campaign creative" />
            <span className="sv-card-copy"><small>01 · Original</small><b>Creative + brief</b><em>Lock objective &amp; AOIs</em></span>
          </button>

          <button className={`sv-loop-card sv-analysis-card ${active === "analysis" ? "active" : ""}`} onClick={() => setActive("analysis")} aria-pressed={active === "analysis"}>
            <span className="sv-heatmap-thumb"><img src={sitePath("/assets/hero-heatmap.webp")} alt="Attention heatmap analysis" /></span>
            <span className="sv-card-copy"><small>02 · Analysis</small><b>See what wins attention</b><em>Heatmap · AOIs · risks</em></span>
          </button>

          <button className={`sv-loop-card sv-ab-card ${active === "ab" ? "active" : ""}`} onClick={() => setActive("ab")} aria-pressed={active === "ab"}>
            <span className="sv-optional">Optional</span>
            <span className="sv-ab-thumbs"><i>A</i><i>B</i></span>
            <span className="sv-card-copy"><small>A/B · Compare</small><b>Pick the stronger route</b><em>Same measures · fair decision</em></span>
          </button>

          <button className={`sv-loop-card sv-survey-card ${active === "survey" ? "active" : ""}`} onClick={() => setActive("survey")} aria-pressed={active === "survey"}>
            <span className="sv-survey-chips"><i>25-34</i><i>Urban</i><i>New buyer</i></span>
            <span className="sv-survey-bars"><i style={{ width: "82%" }} /><i style={{ width: "68%" }} /><i style={{ width: "91%" }} /></span>
            <span className="sv-card-copy"><small>03 · Survey</small><b>Test interpretation</b><em>Clarity · trust · relevance</em></span>
          </button>

          <button className={`sv-loop-card sv-regenerate-card ${active === "regenerate" ? "active" : ""}`} onClick={() => setActive("regenerate")} aria-pressed={active === "regenerate"}>
            <span className="sv-regen-thumb"><img src={sitePath("/assets/hero-optimised.webp")} alt="Regenerated campaign variant" /></span>
            <span className="sv-card-copy"><small>04 · Regenerate</small><b>Apply only the ranked edits</b><em>Brand constraints stay locked</em></span>
          </button>

          <button className={`sv-loop-card sv-retest-card ${active === "retest" ? "active" : ""}`} onClick={() => setActive("retest")} aria-pressed={active === "retest"}>
            <span className="sv-delta"><i><small>Brand</small><b>+18%</b></i><i><small>CTA</small><b>+24%</b></i><i><small>Clarity</small><b>+13%</b></i></span>
            <span className="sv-card-copy"><small>05 · Re-test</small><b>Show exactly what changed</b><em>Original ↔ new variant</em></span>
          </button>
        </div>

        <div className="sv-loop-detail" aria-live="polite">
          <div className="sv-loop-nav" role="tablist" aria-label="Workflow stages">
            {stages.map((stage) => (
              <button key={stage.id} role="tab" aria-selected={active === stage.id} onClick={() => setActive(stage.id)}>
                <span>{stage.step}</span>{stage.short}
              </button>
            ))}
          </div>
          <div className="sv-loop-detail-copy">
            <span>{selected.step}</span>
            <div><h3>{selected.title}</h3><p>{selected.copy}</p></div>
            <ul>{selected.outputs.map((output) => <li key={output}>{output}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
