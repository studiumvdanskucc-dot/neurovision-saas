import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-shell";
import { CreativeCompare } from "../creative-compare";
import { ClosingCTA } from "../closing-cta";

export const metadata: Metadata = { title:"Creative Examples", description:"Explore original and recreated Adidas, Fanta, Adobe and McDonald’s creative examples, with clear edit intentions and illustrative placeholder heatmaps." };

export default function Examples() {
  return <><Header /><main id="main-content">
    <section className="page-hero"><div className="container"><p className="kicker">Creative examples</p><h1>Same idea.<br />A different view.</h1><p className="lead">Explore four original and recreated ads. Look at what changed, then consider the question each new version should answer.</p></div></section>
    <section className="examples-gallery"><div className="container"><CreativeCompare gallery /></div></section>
    <section className="section"><div className="reading-width"><p className="kicker">From a redesign to evidence</p><h2>A new version is<br />the start of the test.</h2><p className="large-copy">A bigger headline or a more visible logo is an edit — not proof that the creative performs better. The next step is to compare both versions with the same attention measures and clarity questions.</p><p>These supplied examples illustrate possible creative directions. Their heatmap overlays are placeholders and no performance scores are presented. A measured case study needs real model outputs and, where appropriate, a human or live campaign test.</p><Link className="text-link" href="/science#aarhus-study">How we evaluate improvement →</Link></div></section>
    <ClosingCTA title="What could your next version do?" />
  </main><Footer /></>;
}
