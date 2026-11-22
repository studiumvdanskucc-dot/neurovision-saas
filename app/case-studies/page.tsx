import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-shell";
import { CreativeCompare } from "../creative-compare";
import { ClosingCTA } from "../closing-cta";
import { UseCaseList } from "../use-case-list";

export const metadata: Metadata = { title:"Examples & Use Cases", description:"Explore original and recreated Adidas, Fanta, Adobe and McDonald’s creative examples, and how teams use NeuroVision for campaigns, websites, digital shelf and packaging." };

export default function Examples() {
  return <><Header /><main id="main-content">
    <section className="page-hero"><div className="container page-hero-grid"><div><p className="kicker">Examples &amp; use cases</p><h1>From original idea<br />to a new direction.</h1></div><p className="lead">Explore four original and recreated ads, then see where teams use NeuroVision: campaigns, websites, product listings and packaging.</p></div></section>
    <section className="section examples-gallery"><div className="container"><CreativeCompare gallery /></div></section>
    <UseCaseList />
    <section className="case-chapter dark-chapter example-method"><div className="container case-chapter-grid"><div className="chapter-copy"><h2>How to compare the versions.</h2><p className="large-copy">A larger headline or logo changes the design. To find out whether it helps, compare both versions with the same attention measures and clarity questions.</p></div><div className="example-method-note"><p>A measured case study needs real model outputs and, where appropriate, a human or live campaign test. These examples show possible directions to explore.</p><Link className="text-link" href="/science#aarhus-study">How we evaluate improvement →</Link></div></div></section>
    <ClosingCTA title="What could your next version do?" />
  </main><Footer /></>;
}
