"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { CreativeVisual } from "./creative-visual";
import { creativeExamples, type CreativeExampleId } from "./creative-examples";

const steps = [
  { name: "Upload a design", title: "Start with the design you want to test.", copy: "Upload an ad, website screenshot or packaging image. Add your audience and the message you want them to remember.", output: "Your input", result: "One image, a target audience and a clear goal." },
  { name: "See attention", title: "Will the important parts get noticed?", copy: "A predicted attention heatmap helps you check whether the headline, product, logo and call to action stand out—or compete with each other.", output: "What you get", result: "An attention heatmap and a critique of your design." },
  { name: "Ask an AI audience", title: "What might your audience understand?", copy: "Ask AI-simulated audience profiles the same questions about your design. Explore possible confusion before investing in a real-world test.", output: "Example question", result: "What is this ad selling, and what would you remember?" },
  { name: "Improve & re-test", title: "Make a change. Check it again.", copy: "Turn the findings into a new creative brief, generate a variant and compare it with the original. Re-run the same checks to see what changed.", output: "What you compare", result: "Attention on the brand, clarity of the message and the edits you made." },
] as const;

const briefs: Record<CreativeExampleId, { goal: string; response: string; edit: string }> = {
  fanta: { goal: "Make the drink and brand easy to recognise.", response: "“I notice the orange first. I’m less sure which drink the ad is for.”", edit: "Try a larger brand mark and a straighter headline." },
  adidas: { goal: "Make the running message easy to read at a glance.", response: "“I can see the runner, but I have to work to read the headline.”", edit: "Try grouping the headline into one clear reading column." },
  adobe: { goal: "Explain that Acrobat can combine files into one PDF.", response: "“I see documents, but I’m not immediately sure what the tool does.”", edit: "Try showing several documents becoming one PDF." },
  mcdonalds: { goal: "Help the food idea and headline make sense together.", response: "“The fries furniture catches my eye. I almost miss the message below.”", edit: "Try moving the message above the central scene." },
};

export function ProductWalkthrough() {
  const [active, setActive] = useState<CreativeExampleId>("fanta");
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const example = creativeExamples.find(item => item.id === active)!;
  const brief = briefs[active];
  const current = steps[step];
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { setReducedMotion(query.matches); if (query.matches) setPlaying(false); };
    update(); query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      if (step === steps.length - 1) setPlaying(false);
      else setStep(value => value + 1);
    }, 7500);
    return () => window.clearTimeout(timer);
  }, [playing, step]);
  function select(index: number) { setStep(index); setPlaying(false); }
  return <div className="walkthrough" id="walkthrough">
    <div className="walk-toolbar">
      <div className="walk-example-picker"><label htmlFor={`${id}-example`}>Try an example</label><select id={`${id}-example`} value={active} onChange={event => { setActive(event.target.value as CreativeExampleId); setStep(0); setPlaying(false); }}>{creativeExamples.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}</select></div>
      {reducedMotion ? <button type="button" className="walk-play" onClick={() => select((step + 1) % steps.length)}>Next step <span aria-hidden="true">→</span></button> : <button className="walk-play" type="button" aria-pressed={playing} onClick={() => { if (!playing && step === 3) setStep(0); setPlaying(value => !value); }}><span aria-hidden="true" className={playing ? "walk-pause-icon" : "walk-play-icon"} />{playing ? "Pause walkthrough" : step === 3 ? "Replay walkthrough" : "Play 30-second walkthrough"}</button>}
    </div>
    <div className="walk-tabs" role="tablist" aria-label="Steps in the NeuroVision workflow">
      {steps.map((item, index) => <button type="button" role="tab" id={`${id}-tab-${index}`} aria-controls={`${id}-panel`} aria-selected={step === index} tabIndex={step === index ? 0 : -1} ref={element => { tabs.current[index] = element; }} onClick={() => select(index)} onKeyDown={event => {
        let next = index;
        if (event.key === "ArrowRight") next = (index + 1) % steps.length;
        else if (event.key === "ArrowLeft") next = (index + steps.length - 1) % steps.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = steps.length - 1;
        else return;
        event.preventDefault(); select(next); tabs.current[next]?.focus();
      }} key={item.name}><span className="walk-number" aria-hidden="true">{index + 1}</span>{item.name}</button>)}
    </div>
    <div className="walk-content" role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${step}`} tabIndex={0}>
      <div className={`walk-visual walk-visual-${step}`}>
        <div className="walk-image-label"><span>{step === 3 ? "Original → recreated" : step === 1 ? "Attention heatmap example" : "Example input"}</span><span>{example.name}</span></div>
        <div className="walk-scene" key={`${active}-${step}`}>
          {step === 3 ? <div className="walk-pair"><figure><CreativeVisual asset={example.original} priority /><figcaption>Original</figcaption></figure><figure><CreativeVisual asset={example.recreated} priority /><figcaption>Recreated</figcaption></figure></div> : <CreativeVisual asset={example.original} heatmap={step === 1} priority />}
          {step === 1 && <div className="walk-scan" aria-hidden="true" />}
        </div>
      </div>
      <div className="walk-explanation" key={`${active}-${step}-copy`}>
        <h3>{current.title}</h3><p>{current.copy}</p>
        {step === 0 && <div className="walk-result"><span>Example brief</span><strong>{brief.goal}</strong></div>}
        {step === 1 && <div className="walk-result"><span>{current.output}</span><strong>{current.result}</strong><small>Use it to ask: “Is the brand getting lost?”</small></div>}
        {step === 2 && <div className="walk-result walk-answer"><span>Illustrative AI response</span><blockquote>{brief.response}</blockquote><small>AI-simulated feedback, not a human survey result.</small></div>}
        {step === 3 && <div className="walk-result"><span>One edit to explore</span><strong>{brief.edit}</strong><small>Re-test both versions. A new design is not automatically a better one.</small></div>}
        <div className="walk-bottom"><span>Step {step + 1} of 4</span>{step < 3 ? <button type="button" onClick={() => select(step + 1)}>Next: {steps[step + 1].name} <span aria-hidden="true">→</span></button> : <Link href="/case-studies">Explore the designs <span aria-hidden="true">→</span></Link>}</div>
      </div>
    </div>
    <div className="walk-progress" data-playing={playing} key={`${active}-${step}-${playing}`} aria-hidden="true" />
    <p className="walk-disclosure">Illustrative walkthrough using supplied designs. Heatmaps and AI responses are examples, not model predictions or measured improvements. No brand affiliation.</p>
  </div>;
}

const scenarios = [
  { id: "ads", name: "An ad", question: "Is the logo being missed?", input: "Upload your ad and identify the brand, product and main message.", output: "See a predicted attention heatmap and ask an AI audience what the ad is for.", next: "Try a larger logo or a simpler headline. Compare the two versions." },
  { id: "websites", name: "A website", question: "Can visitors find the next step?", input: "Upload a screenshot of your landing page and say what visitors should do.", output: "Check the visual hierarchy and ask AI profiles what the page offers and where they would click.", next: "Try a clearer headline and one main call to action. Re-test the screenshots." },
  { id: "packaging", name: "Packaging", question: "Is the product benefit easy to spot?", input: "Upload the front of your package and define the benefit you want shoppers to notice.", output: "Explore which elements attract attention and what AI profiles think the product is.", next: "Try making the flavour or key benefit more prominent. Compare both designs." },
] as const;

export function UseCaseExamples() {
  const [active, setActive] = useState(0);
  const item = scenarios[active];
  const id = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  return <div className="use-example">
    <div className="use-example-tabs" role="tablist" aria-label="Choose what you want to test">{scenarios.map((scenario, index) => <button type="button" role="tab" id={`${id}-tab-${index}`} aria-controls={`${id}-panel`} aria-selected={active === index} tabIndex={active === index ? 0 : -1} ref={element => { tabs.current[index] = element; }} key={scenario.id} onClick={() => setActive(index)} onKeyDown={event => {
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % scenarios.length;
      else if (event.key === "ArrowLeft") next = (index + scenarios.length - 1) % scenarios.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = scenarios.length - 1;
      else return;
      event.preventDefault(); setActive(next); tabs.current[next]?.focus();
    }}>{scenario.name}</button>)}</div>
    <div className="use-example-panel" role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${active}`} tabIndex={0}>
      <div className={`use-example-art use-example-${item.id}`}>
        {active === 0 ? <CreativeVisual asset={creativeExamples[1].original} /> : active === 1 ? <div className="website-sample" aria-label="Illustrative landing page screenshot"><div className="sample-browser" aria-hidden="true"><i /><i /><i /></div><div className="sample-page"><span>YOUR BRAND</span><strong>A clearer offer.<br />A simpler next step.</strong><p>Tell visitors what you do and why it matters.</p><span className="sample-cta">Book a demo →</span><div className="sample-page-grid" aria-hidden="true"><i /><i /><i /></div></div></div> : <div className="packaging-sample" role="img" aria-label="Illustrative lemon sparkling water can"><div className="sample-can"><span>YOUR BRAND</span><strong>CITRUS</strong><i aria-hidden="true" /><b>Lemon</b><small>Sparkling water<br />330 ml</small></div></div>}
        <p>{active === 0 ? "Supplied creative example · no brand affiliation" : "Illustrative example, not a client project"}</p>
      </div>
      <div className="use-example-copy" key={item.id}><h3>{item.question}</h3><dl><div><dt>You upload</dt><dd>{item.input}</dd></div><div><dt>NeuroVision helps you check</dt><dd>{item.output}</dd></div><div><dt>You try next</dt><dd>{item.next}</dd></div></dl><Link className="text-link" href="/use-cases">More ways to use NeuroVision <span aria-hidden="true">→</span></Link></div>
    </div>
  </div>;
}
