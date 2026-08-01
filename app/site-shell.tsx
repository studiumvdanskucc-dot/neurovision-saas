import Link from "next/link";
import { sitePath } from "./site-path";

export function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" href="/" aria-label="NeuroVision home">
          <img src={sitePath("/logo.webp")} alt="" />
          <span><strong>NeuroVision</strong><small>Predictive design intelligence</small></span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/use-cases">What it does</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/science">Science</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className="nav-actions">
          <a className="btn secondary compact sign-in" href="http://app.neurovision-ai.com/login">Sign in</a>
          <a className="btn primary compact" href="http://app.neurovision-ai.com/register">Try for free ↗</a>
        </div>
        <details className="mobile-nav">
          <summary aria-label="Open menu">Menu</summary>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/use-cases">What it does</Link>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/science">Science</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/about">About</Link>
            <a className="btn secondary" href="http://app.neurovision-ai.com/login">Sign in</a>
            <a className="btn primary" href="http://app.neurovision-ai.com/register">Try for free</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-main">
          <Link className="brand" href="/">
            <img src={sitePath("/logo.webp")} alt="" />
            <span><strong>NeuroVision</strong><small>Predictive design intelligence</small></span>
          </Link>
          <p>Predict attention. Simulate interpretation. Generate stronger creative—all before launch.</p>
          <a href="mailto:info@neurovision-ai.com">info@neurovision-ai.com</a>
        </div>
        <div><strong>Product</strong><Link href="/">Home</Link><Link href="/how-it-works">How it works</Link><Link href="/use-cases">What it does</Link><Link href="/science">Science &amp; validation</Link><Link href="/#pricing">Pricing</Link></div>
        <div><strong>Company</strong><Link href="/about">About</Link><Link href="/case-studies">Case study</Link><a href="mailto:info@neurovision-ai.com">Contact</a></div>
        <div><strong>Legal</strong><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} NeuroVision Technologies</span>
        <span>Built on science. Designed for business.</span>
      </div>
    </footer>
  );
}
