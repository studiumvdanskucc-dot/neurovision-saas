"use client";

import { useRef, useState } from "react";
import { creativeExamples, type CreativeExampleId } from "./creative-examples";
import { CreativeVisual } from "./creative-visual";
import { sitePath } from "./site-path";

export function CreativeCompare({ initial = "adidas", gallery = false, compact = false }: { initial?: CreativeExampleId; gallery?: boolean; compact?: boolean }) {
  const [active, setActive] = useState<CreativeExampleId>(initial);
  const [heatmap, setHeatmap] = useState(false);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const item = creativeExamples.find(example => example.id === active) ?? creativeExamples[0];
  return <div className={`creative-compare${compact ? " compact-example" : ""}`}>
    {gallery && <div className="example-tabs" role="tablist" aria-label="Choose a creative example">{creativeExamples.map((example, index) => <button key={example.id} type="button" role="tab" id={`creative-tab-${example.id}`} aria-selected={active === example.id} aria-controls="creative-panel" tabIndex={active === example.id ? 0 : -1} ref={element => { buttons.current[index] = element; }} onClick={() => { setActive(example.id); setHeatmap(false); }} onKeyDown={event => {
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % creativeExamples.length;
      else if (event.key === "ArrowLeft") next = (index + creativeExamples.length - 1) % creativeExamples.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = creativeExamples.length - 1;
      else return;
      event.preventDefault(); setActive(creativeExamples[next].id); setHeatmap(false); buttons.current[next]?.focus();
    }}>{example.name}</button>)}</div>}
    <div id={gallery ? "creative-panel" : undefined} role={gallery ? "tabpanel" : undefined} aria-labelledby={gallery ? `creative-tab-${active}` : undefined} tabIndex={gallery ? 0 : undefined}>
      <div className="creative-pair">
        {([ ["Original", item.original], ["Recreated", item.recreated] ] as const).map(([label, asset]) => <figure key={`${active}-${label}`}>
          <figcaption><span>{label}</span><a href={sitePath(asset.src)} target="_blank" rel="noreferrer" aria-label={`View full-size ${label.toLowerCase()} ${item.name} creative`}>View full size <span aria-hidden="true">↗</span></a></figcaption>
          <CreativeVisual asset={asset} heatmap={heatmap} priority={compact} />
        </figure>)}
      </div>
      {!compact && <div className="example-controls"><button className="heatmap-toggle" type="button" aria-pressed={heatmap} onClick={() => setHeatmap(value => !value)}><span className="toggle-track" aria-hidden="true"><i /></span>Illustrative heatmaps</button><p className="fine-print">{heatmap ? "Placeholder overlays — not NeuroVision predictions or measured results." : "Explore the supplied designs, or preview a placeholder heatmap overlay."}</p></div>}
      <p className="example-summary" aria-live="polite">{item.summary}</p>
      {!compact && <details className="reading-details" key={active}><summary>What changed, and what should be tested?<span aria-hidden="true">+</span></summary><div><p>{item.changes}</p><p>{item.question}</p></div></details>}
    </div>
    <p className="example-disclosure">Independent creative examples. No brand affiliation or measured improvement is implied.</p>
  </div>;
}
