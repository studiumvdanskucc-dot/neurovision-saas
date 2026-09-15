import type { Metadata } from "next";
import { Footer, Header } from "../site-shell";
import { sitePath } from "../site-path";
import { CreativeVisual } from "../creative-visual";
import { creativeExamples } from "../creative-examples";

export const metadata: Metadata = {
  title: "Use Cases",
  description: "Explore how NeuroVision supports campaigns, websites, digital shelf, packaging and product decisions.",
};

const useCases = [
  { id:"01", label:"Campaigns & ads", copy:"Compare ads before you commit to media spend. Check whether the product, headline, logo and call to action stand out as intended.", tasks:["Review a campaign concept","Compare social ads","Check brand and CTA visibility","Share clear findings with the team"], art:"campaign-art" },
  { id:"02", label:"Websites & UX", copy:"Upload a page screenshot to review its visual hierarchy. Check whether the main message and next action are easy to find.", tasks:["Review landing-page hierarchy","Check whether key buttons stand out","Compare hero and navigation options","Review the order of information"], art:"website-art" },
  { id:"03", label:"Digital shelf", copy:"Compare your product with the listings around it. Check what stands out and whether important details remain readable in a thumbnail.", tasks:["Compare search-result thumbnails","Compare products with their competitors","Check titles, badges and product images","Review new listing images"], art:"shelf-art" },
  { id:"04", label:"Packaging & product", copy:"Compare packaging concepts before production. Check brand visibility and information order, then explore whether the claims are clear with AI audience feedback.", tasks:["Compare packaging layouts","Check claim readability","Check consistency across a product range","Test recognition at realistic scale"], art:"packaging-art" },
];

function UseCaseArt({ type }: { type: string }) {
  if (type === "campaign-art") return <figure className="use-case-art supplied-use-case"><CreativeVisual asset={creativeExamples[0].recreated} /><figcaption>Supplied Adidas creative example</figcaption></figure>;
  if (type === "website-art") return <figure className="use-case-art supplied-website"><img src={sitePath("/assets/examples/tonys-website.webp")} alt="Supplied Tony’s Chocolonely website screenshot" loading="lazy" /><figcaption>Website screenshot supplied for illustration</figcaption></figure>;
  if (type === "shelf-art") return <div className="use-case-art shelf-art amazon-shelf"><header><b>shop</b><span className="static-search">sparkling water</span><span>Search</span></header><section>{["LIME","PURE","BERRY","CITRUS"].map((name,index)=><div className={index===1?"winner":""} key={name}><i/><strong>{name}</strong><small>12-pack · 4.6 ★</small>{index===1&&<><em>SELECTED</em><u/></>}</div>)}</section><aside>Illustrative shelf layout</aside></div>;
  if (type === "packaging-art") return <div className="use-case-art packaging-art soda-pack"><span><small>NV / SPARK</small><b>VOLT</b><em>YUZU + LIME</em><u>330 ml</u></span><i/><div><b>Brand</b><span>Check visibility</span><b>Flavour</b><span>Check readability</span></div></div>;
  return null;
}

export default function UseCases() {
  return (
    <><Header /><main id="main-content">
      <section className="page-hero use-cases-hero"><div className="container page-hero-grid"><div><p className="kicker">Use cases</p><h1>Test the designs your audience will see.</h1></div><p className="lead">Use NeuroVision to check ads, websites, product listings and packaging before they reach your audience.</p></div></section>
      <section className="use-case-list"><div className="container">{useCases.map((item,index)=><article className={`use-case-row ${index%2?"reverse":""}`} key={item.id}><UseCaseArt type={item.art}/><div className="use-case-copy"><h2>{item.label}</h2><p>{item.copy}</p><ul className="use-case-tasks">{item.tasks.map(task=><li key={task}>{task}</li>)}</ul></div></article>)}</div></section>
      <section className="final-cta"><div className="container"><h2>Try it with your own design.</h2><p>Start with an image, a page screenshot or a packaging concept.</p><div className="actions center"><a className="btn white" href="https://app.neurovision-ai.com/register">Try NeuroVision free ↗</a><a className="btn ghost" href="mailto:info@neurovision-ai.com?subject=NeuroVision%20use%20case">Discuss your use case</a></div></div></section>
    </main><Footer /></>
  );
}
