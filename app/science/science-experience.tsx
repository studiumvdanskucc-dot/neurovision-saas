"use client";

import { useState } from "react";

const stages = [
  { name:"See", title:"Find the attention pattern.", copy:"Predict where viewers are likely to look first. Check the brand, product, headline and call to action, then identify which elements compete with the intended message.", output:"An attention map and a prioritised edit plan." },
  { name:"Understand", title:"Explore what the message means.", copy:"Ask AI-simulated audience profiles the same questions about clarity, relevance and trust. Use recurring themes to identify possible misunderstandings and questions for human research.", output:"Structured feedback across your chosen audience profiles." },
  { name:"Improve", title:"Give the next version a clear brief.", copy:"Turn the findings into a new creative direction. Define what can change and keep essential brand elements, product imagery and legal copy within the agreed constraints.", output:"A recreated variant with a record of the intended changes." },
  { name:"Re-test", title:"Compare like with like.", copy:"Run the revised creative through the same attention and interpretation measures. Compare it with the original, look at what changed and decide whether another iteration or a human test is needed.", output:"A before-and-after comparison tied to the original objective." },
] as const;

export function ScienceLoop() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  return <section className="section science-workflow soft-section" id="closed-loop"><div className="container">
    <div className="section-head"><p className="kicker">The creative loop</p><h2>Learn from each version.</h2><p>Analysis becomes a creative decision. The new version goes back through the same process, so you can see what changed.</p></div>
    <div className="loop-explainer">
      <div className="evidence-loop" role="group" aria-label="Select a stage in the four-step creative loop">
        <svg viewBox="0 0 340 340" aria-hidden="true"><circle cx="170" cy="170" r="130" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="m262 65 8 12-14-1" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
        <p className="loop-center">One creative.<br /><strong>Keep learning.</strong></p>
        {stages.map((item,index)=><button type="button" className={`loop-stop loop-stop-${index}`} aria-pressed={active===index} aria-controls="loop-explanation" onClick={()=>setActive(index)} key={item.name}><small>0{index+1}</small><span>{item.name}</span></button>)}
      </div>
      <div className="loop-explanation" id="loop-explanation" aria-live="polite"><p className="kicker">0{active+1} / {stage.name}</p><h3>{stage.title}</h3><p>{stage.copy}</p><p className="loop-output"><strong>You get</strong>{stage.output}</p></div>
    </div>
    <div className="loop-options"><details className="reading-details"><summary>Before you begin: set the brief<span aria-hidden="true">+</span></summary><div><p>Upload the original image, define the campaign objective and audience, and mark the areas that matter: brand, product, headline, offer and call to action. Keep this brief consistent across variants.</p></div></details><details className="reading-details"><summary>Choosing between concepts? Add an A/B comparison.<span aria-hidden="true">+</span></summary><div><p>Compare two or more concepts using the same measures before moving on to audience simulations or regeneration. This is an optional predictive comparison; a live A/B test is a separate way to measure actual campaign behaviour.</p></div></details></div>
  </div></section>;
}
