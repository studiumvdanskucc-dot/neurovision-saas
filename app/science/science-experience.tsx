const stages = [
  { name: "See", copy: "Predict what catches the eye. Check the brand, product, headline and call to action against your goal.", output: "An attention map and a prioritised edit plan." },
  { name: "Understand", copy: "Ask AI audience profiles the same questions about clarity, relevance and trust. Look for repeated misunderstandings.", output: "Structured feedback across the selected audience profiles." },
  { name: "Improve", copy: "Decide what should change, keeping logos, product details and legal text fixed. Get a suggested revision.", output: "A suggested revision and a record of the intended changes." },
  { name: "Re-test", copy: "Run both versions through the same checks, then decide whether to refine again or move to real-world testing.", output: "A before-and-after comparison tied to the original objective." },
] as const;

export function ScienceLoop() {
  return <section className="section research-workflow" id="closed-loop"><div className="container">
    <div className="section-head"><div><h2>From first look to a tested revision.</h2></div><p>Start with your image, your audience and a clear goal. Each step answers one question, and the revised version goes through the same tests.</p></div>
    <ol className="research-steps">{stages.map((stage,index)=><li key={stage.name} id={`research-${stage.name.toLowerCase()}`}><h3><span aria-hidden="true">0{index+1}</span>{stage.name}</h3><p>{stage.copy}</p><p className="research-output">{stage.output}</p></li>)}</ol>
    <div className="research-optional"><h3>Comparing concepts? Add A/B Testing.</h3><p>Compare versions on the same measures before you develop one. It predicts which is stronger; a live campaign test measures what real people do.</p></div>
  </div></section>;
}
