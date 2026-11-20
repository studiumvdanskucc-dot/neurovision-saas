// Illustrations for the tool cards, following the new design: one campaign
// (the supplied Adidas example) carried through attention, audience, studio,
// A/B and shelf views. Every value and answer shown here is illustrative, and
// each figure says so in its caption.
import type { CSSProperties } from "react";
import { sitePath } from "./site-path";
import { creativeExamples, type CreativeAsset } from "./creative-examples";
import { CreativeVisual } from "./creative-visual";
import { CartIcon, SearchIcon } from "./brand-icons";

type Frame = "feature-media" | "layer-media";
const adidas = creativeExamples[0];

const callouts = [
  { label: "Model", value: "25.4%", x: 56, y: 38 },
  { label: "Shoes", value: "3.3%", x: 84, y: 62 },
  { label: "Logo", value: "2.7%", x: 47, y: 92 },
];

export function AttentionArt({ frame = "feature-media" }: { frame?: Frame }) {
  return <figure className={`${frame} art-attention`}>
    <CreativeVisual asset={adidas.original} heatmap heatmapClass="heatmap-runner">
      {callouts.map(item => <span className="art-callout" key={item.label} style={{ "--x": `${item.x}%`, "--y": `${item.y}%` } as CSSProperties}><b>{item.label}</b>{item.value}</span>)}
    </CreativeVisual>
    <figcaption>Illustrative heatmap and values, not a model prediction</figcaption>
  </figure>;
}

export function SurveyArt({ frame = "feature-media", asset = adidas.original, answers = ["“The text covers the runner, as if the brand mattered more than her.”", "“…because it seems to be about becoming better, not just running.”"] }: { frame?: Frame; asset?: CreativeAsset; answers?: readonly string[] }) {
  return <figure className={`${frame} art-survey`}>
    <div className="survey-setup" aria-hidden="true">
      <span className="survey-label">Questionnaire type</span>
      <span className="survey-select">Emotional response<i /></span>
      <span className="survey-chips"><span>Message clarity</span><span>Brand perception</span><span>Language and humour</span></span>
      <span className="survey-label">Total responders: 100</span>
      <span className="survey-range"><i /></span>
    </div>
    <img className="survey-poster" src={sitePath(asset.src)} alt={asset.alt} width={asset.width} height={asset.height} loading="lazy" />
    <div className="survey-answers">
      <span className="survey-label">Some of the responses</span>
      {answers.map(answer => <p key={answer}>{answer}</p>)}
    </div>
    <figcaption>Illustrative questionnaire and AI-simulated responses</figcaption>
  </figure>;
}

export function StudioArt({ frame = "feature-media", example = adidas }: { frame?: Frame; example?: (typeof creativeExamples)[number] }) {
  return <figure className={`${frame} art-studio`}>
    <div className="studio-stack">
      <div className="studio-before"><span>Original</span><img src={sitePath(example.original.src)} alt={example.original.alt} width={example.original.width} height={example.original.height} loading="lazy" /></div>
      <div className="studio-after"><span>Recreated</span><img src={sitePath(example.recreated.src)} alt={example.recreated.alt} width={example.recreated.width} height={example.recreated.height} loading="lazy" /></div>
    </div>
    <figcaption>Illustrative redesign · re-test before choosing</figcaption>
  </figure>;
}

function Gauge({ label, value }: { label: string; value: number }) {
  return <span className="ab-gauge">
    <b>{label}</b>
    <svg viewBox="0 0 48 28" aria-hidden="true"><path d="M5 24a19 19 0 0 1 38 0" pathLength={100} className="ab-gauge-track" /><path d="M5 24a19 19 0 0 1 38 0" pathLength={100} className={value >= 70 ? "ab-gauge-good" : "ab-gauge-fair"} strokeDasharray={`${value} 100`} /></svg>
    <small>{value}%</small>
  </span>;
}

const versions = [
  { tag: "A", asset: adidas.original, performance: 60, clarity: 80, layout: 40, winner: false },
  { tag: "B", asset: adidas.recreated, performance: 75, clarity: 95, layout: 45, winner: true },
] as const;

export function AbTestArt({ frame = "feature-media" }: { frame?: Frame }) {
  return <figure className={`${frame} art-ab`}>
    <div className="ab-versions">
      {versions.map(version => <div className={version.winner ? "ab-version is-winner" : "ab-version"} key={version.tag}>
        <div className="ab-shot">
          <img src={sitePath(version.asset.src)} alt={`Design ${version.tag}: ${version.asset.alt}`} width={version.asset.width} height={version.asset.height} loading="lazy" />
          <span className="ab-letter">{version.winner && <svg viewBox="0 0 20 10" aria-hidden="true"><path d="M1 9 2.5 1.5l4 4L10 1l3.5 4.5 4-4L19 9Z" /></svg>}{version.tag}</span>
        </div>
        <span className="ab-score"><b>Performance</b><strong>{version.performance}</strong><i style={{ width: `${version.performance}%` }} /></span>
        <span className="ab-gauges"><Gauge label="Clarity" value={version.clarity} /><Gauge label="Layout" value={version.layout} /></span>
      </div>)}
    </div>
    <p className="ab-goal"><span>Winner: Design B</span>Goal: more people notice the product first.</p>
    <figcaption>Illustrative A/B result, not a measured outcome</figcaption>
  </figure>;
}

const templates = ["Marketplace", "Store shelf", "Out-of-home", "Mall"];
const products = [
  { src: "/assets/brand/shoe-grey.webp", alt: "Grey running shoe", yours: false },
  { src: "/assets/brand/shoe-red.webp", alt: "Navy and red running shoe", yours: true },
  { src: "/assets/brand/shoe-black.webp", alt: "Black running shoe", yours: false },
];

export function ShelfArt({ frame = "feature-media" }: { frame?: Frame }) {
  return <figure className={`${frame} art-shelf`}>
    <div className="shelf-templates" aria-hidden="true">{templates.map((name, index) => <span className={index === 0 ? "on" : undefined} key={name}>{name}</span>)}</div>
    <div className="shelf-store">
      <div className="shelf-bar" aria-hidden="true"><span className="shelf-search"><b>Shoes</b>running shoes<SearchIcon size={14} /></span><span className="shelf-cart"><CartIcon size={14} />View cart</span></div>
      <p className="shelf-title" aria-hidden="true">“Running shoes”<small>288 results</small></p>
      <ul className="shelf-grid">
        {products.map(product => <li className={product.yours ? "is-yours" : undefined} key={product.src}>
          <img src={sitePath(product.src)} alt={product.alt} width={420} height={420} loading="lazy" />
          <b>{product.yours ? "Your product" : "Other product"}</b>
          <small>Running shoes · ★ 5.0</small>
          <strong>€200</strong>
          <span aria-hidden="true">+ Add to cart</span>
        </li>)}
      </ul>
    </div>
    <figcaption>Illustrative marketplace layout with placement templates</figcaption>
  </figure>;
}
