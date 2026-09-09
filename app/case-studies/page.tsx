import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-shell";
import { CreativeCompare } from "../creative-compare";
import { ClosingCTA } from "../closing-cta";

export const metadata: Metadata = { title:"Creative Examples", description:"Explore original and recreated Adidas, Fanta, Adobe and McDonald’s creative examples, with clear edit intentions and illustrative placeholder heatmaps." };

export default function Examples() {
  return <><Header /><main id="main-content">
    <section className="page-hero"><div className="container page-hero-grid"><div><p className="kicker">Creative examples</p><h1>From original idea<br />to a new direction.</h1></div><p className="lead">Explore four original and recreated ads. Look at what changed, then consider the question each new version should answer.</p></div></section>
    <section className="section examples-gallery"><div className="container"><CreativeCompare gallery /></div></section>
    <section className="case-chapter dark-chapter example-method"><div className="container case-chapter-grid"><div className="chapter-copy"><p className="kicker">From a redesign to evidence</p><h2>What changed?<br />What should we test?</h2><p className="large-copy">A larger headline or logo changes the design. To find out whether it helps, compare both versions with the same attention measures and clarity questions.</p></div><div className="example-method-note"><p>These supplied examples illustrate possible creative directions. Their heatmap overlays are placeholders and no performance scores are presented. A measured case study needs real model outputs and, where appropriate, a human or live campaign test.</p><Link className="text-link" href="/science#aarhus-study">How we evaluate improvement →</Link></div></div></section>
    <ClosingCTA title="What could your next version do?" />
  </main><Footer /></>;
}
