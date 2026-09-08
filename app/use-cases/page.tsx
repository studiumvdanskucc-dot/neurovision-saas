import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-shell";
import { CreativeVisual } from "../creative-visual";
import { creativeExamples } from "../creative-examples";
import { sitePath } from "../site-path";
import { ClosingCTA } from "../closing-cta";

export const metadata: Metadata = { title:"Use Cases", description:"Creative testing for campaigns, websites, digital shelf and packaging. See the questions NeuroVision can help your team answer." };

const useCases = [
  { id:"01", label:"Campaigns & ads", title:"Choose the creative worth backing before media spend.", copy:"Compare concepts, messages and generated variants while there is still time to change them. NeuroVision shows whether the product, headline, brand and call to action form the hierarchy you intended.", tasks:["Pre-flight a hero campaign","Compare paid-social variants","Check brand and CTA visibility","Build an evidence-backed creative review"], outputs:["Attention map","Audience interpretation","Predicted variant comparison"], art:"campaign-art" },
  { id:"02", label:"Websites & UX", title:"Find conversion friction before it becomes analytics.", copy:"Analyse full-page captures or key interface states to see what attracts the opening view, what is visually buried and where the page asks users to work too hard.", tasks:["Review landing-page hierarchy","Check CTA discoverability","Compare hero and navigation options","Trace attention across a long page"], outputs:["First-view hierarchy","Clarity risks","Prioritised UX changes"], art:"website-art" },
  { id:"03", label:"Digital shelf", title:"Win attention in the most competitive few centimetres online.", copy:"Benchmark product listings against the surrounding shelf. See which product gains presence, whether critical details survive thumbnail scale and how brand assets perform against competitors.", tasks:["Compare search-result thumbnails","Benchmark product presence","Audit titles, badges and pack visibility","Screen new listing creatives"], outputs:["Shelf ranking","Product visibility","Competitive benchmark"], art:"shelf-art" },
  { id:"04", label:"Packaging & product", title:"Test what the pack communicates before production.", copy:"Evaluate shelf presence, information order and brand recognition across early packaging concepts. Agentic audiences add a first-pass view of clarity, trust, relevance and likely misunderstanding.", tasks:["Compare pack architecture","Check claim readability","Evaluate range consistency","Test recognition at realistic scale"], outputs:["Pack attention","Message clarity","Variant comparison"], art:"packaging-art" },
];

const anchors = ["campaigns", "websites", "digital-shelf", "packaging"];
const titles = ["Choose a direction before launch.", "Make the next step easy to find.", "Stand out at thumbnail scale.", "Make the pack’s message clear."];

export default function UseCases() {
  return <><Header /><main id="main-content">
    <section className="page-hero"><div className="container"><p className="kicker">Use cases</p><h1>Every visual<br />has a job to do.</h1><p className="lead">An ad should make an impression. A page should make the next step clear. Test the visual decisions that matter to your project.</p><nav className="page-jump-links" aria-label="Choose your format">{useCases.map((item,index)=><a key={item.id} href={`#${anchors[index]}`}>{item.label}</a>)}</nav></div></section>
    {useCases.map((item,index)=><section className={`section use-case-section ${index%2?"soft-section":""}`} id={anchors[index]} key={item.id}><div className="container">
      <div className={index===0?"feature-layout":""}><div className="feature-copy"><p className="kicker">{item.id} / {item.label}</p><h2>{titles[index]}</h2><p>{item.copy}</p><details className="reading-details"><summary>What you can test<span aria-hidden="true">+</span></summary><div><ul>{item.tasks.map(task=><li key={task}>{task}</li>)}</ul><p className="output-line"><strong>Typical outputs:</strong> {item.outputs.join(" · ")}</p></div></details></div>
      {index===0&&<figure className="use-case-ad"><CreativeVisual asset={creativeExamples[1].original}/><figcaption>Creative example · no brand affiliation implied.</figcaption></figure>}
      {index===1&&<figure className="website-example"><img src={sitePath("/assets/examples/tonys-website.webp")} alt="Tony’s Chocolonely website creative with a Pop Pop Popcorn Flavour headline, product image and yellow call to action" width="1262" height="581" loading="lazy"/><figcaption>Website example: consider the headline, product and next step together. No affiliation or measured findings are implied.</figcaption></figure>}
      </div>
    </div></section>)}
    <section className="section"><div className="container"><div className="section-head"><p className="kicker">Go one step further</p><h2>Understand the response.<br />Then improve the design.</h2><p>Add AI audience simulations to explore clarity and relevance. Turn the findings into a new version, with quick optimisation or detailed control over the creative brief.</p></div><div className="start-options"><article><h3>Ask better questions.</h3><p>Choose simulated audience profiles and survey size. Compare themes, message clarity and possible segment differences.</p><Link className="text-link" href="/how-it-works#audience">Explore audience surveys →</Link></article><article><h3>Try a new direction.</h3><p>Set the prompt, brand constraints and format. Generate, resize and iterate, then re-test the variant against the original.</p><Link className="text-link" href="/how-it-works#improvement">Explore creative improvement →</Link></article></div></div></section>
    <ClosingCTA title="Start with your next visual decision." />
  </main><Footer /></>;
}
