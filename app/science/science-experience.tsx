const stages = [
  { name: "See", copy: "Predict which parts of the image may attract the eye. Check the brand, product, headline and call to action against the campaign objective.", output: "An attention map and a prioritised edit plan." },
  { name: "Understand", copy: "Ask AI-simulated audience profiles consistent questions about clarity, relevance and trust. Look for recurring misunderstandings and questions to take into human research.", output: "Structured feedback across the selected audience profiles." },
  { name: "Improve", copy: "Use the findings to define what should change. Keep essential brand elements, product details and legal copy within the agreed constraints.", output: "A new variant and a record of the intended changes." },
  { name: "Re-test", copy: "Run both versions through the same attention and interpretation checks. Review what changed before deciding whether to iterate again or move to human or campaign testing.", output: "A before-and-after comparison tied to the original objective." },
] as const;

export function ScienceLoop() {
  return <section className="section research-workflow" id="closed-loop"><div className="container">
    <div className="section-head"><div><h2>From analysis to a tested revision.</h2></div><p>Begin with the original image, the intended audience and a clear campaign objective. Each step answers a different question; the revised creative returns to the same tests.</p></div>
    <ol className="research-steps">{stages.map((stage,index)=><li key={stage.name} id={`research-${stage.name.toLowerCase()}`}><h3><span aria-hidden="true">0{index+1}</span>{stage.name}</h3><p>{stage.copy}</p><p className="research-output">{stage.output}</p></li>)}</ol>
    <div className="research-optional"><h3>Choosing between concepts? Add an A/B comparison.</h3><p>Compare two or more versions using the same measures before audience simulations or regeneration. This optional predictive comparison helps you choose what to develop. A live A/B test separately measures how people respond in a real campaign.</p></div>
  </div></section>;
}
