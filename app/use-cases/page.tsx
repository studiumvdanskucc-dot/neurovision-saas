import type { Metadata } from "next";
import Link from "next/link";
import { sitePath } from "../site-path";

// Use cases now live on the Examples page. This page forwards old links there.
export const metadata: Metadata = { title: "Use cases have moved", robots: { index: false } };

export default function UseCasesMoved() {
  const target = sitePath("/case-studies/#use-cases");
  return <main id="main-content" className="legal"><div className="container legal-shell">
    <meta httpEquiv="refresh" content={`0; url=${target}`} />
    <h1>Use cases have moved.</h1>
    <p className="legal-date">They are now part of the Examples page.</p>
    <Link className="btn primary" href="/case-studies#use-cases">Go to examples and use cases <span aria-hidden="true">→</span></Link>
  </div></main>;
}
