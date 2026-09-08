import Link from "next/link";
import { Footer, Header } from "./site-shell";

export default function NotFound() {
  return <><Header /><main id="main-content"><section className="page-hero"><div className="container">
    <p className="kicker">Page not found</p>
    <h1>Let’s get you back<br />to the right place.</h1>
    <p className="lead">This page may have moved. Explore NeuroVision or find the plan you were looking for.</p>
    <div className="actions"><Link className="btn primary" href="/">Go to the homepage</Link><Link className="btn secondary" href="/pricing">View pricing</Link></div>
  </div></section></main><Footer /></>;
}
