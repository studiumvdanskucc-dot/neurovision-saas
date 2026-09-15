"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { sitePath } from "./site-path";
import { LOGIN_URL, REGISTER_URL } from "./site-links";

const navigation = [
  ["/how-it-works", "How it works"],
  ["/use-cases", "Use cases"],
  ["/case-studies", "Examples"],
  ["/science", "Science"],
  ["/pricing", "Pricing"],
  ["/about", "About"],
] as const;

export function Header() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (menu.current?.open && !menu.current.contains(event.target as Node)) menu.current.open = false;
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);
  const links = navigation.map(([href, label]) => (
    <Link href={href} key={href} aria-current={(href === "/" ? pathname === "/" || pathname === sitePath("/") : pathname?.replace(/\/$/, "").endsWith(href)) ? "page" : undefined}>{label}</Link>
  ));
  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" href="/" aria-label="NeuroVision home">
          <img src={sitePath("/logo.webp")} alt="" width="38" height="38" />
          <span><strong>NeuroVision</strong></span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">{links}</nav>
        <div className="nav-actions">
          <a className="btn secondary compact sign-in" href={LOGIN_URL}>Sign in</a>
          <a className="btn primary compact" href={REGISTER_URL}>Start free <span aria-hidden="true">↗</span></a>
        </div>
        <details className="mobile-nav" ref={menu}>
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation" onClick={(event) => {
            if ((event.target as HTMLElement).closest("a") && menu.current) menu.current.open = false;
          }}>
            {links}
            <a className="btn secondary" href={LOGIN_URL}>Sign in</a>
            <a className="btn primary" href={REGISTER_URL}>Start free</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Link className="footer-difference" href="/about#why-neurovision-is-different">
          <strong>Why NeuroVision is different</strong>
          <i aria-hidden="true">↗</i>
        </Link>
      </div>
      <div className="container footer-grid">
        <div className="footer-main">
          <Link className="brand" href="/" aria-label="NeuroVision home"><img src={sitePath("/logo.webp")} alt="" width="38" height="38" /><span><strong>NeuroVision</strong></span></Link>
          <p>Attention science and AI tools for testing creative before launch.</p>
          <a href="mailto:info@neurovision-ai.com">info@neurovision-ai.com</a>
        </div>
        <div><strong>Explore</strong><Link href="/how-it-works">How it works</Link><Link href="/use-cases">Use cases</Link><Link href="/case-studies">Creative examples</Link><Link href="/science">Science &amp; validation</Link></div>
        <div><strong>Work with us</strong><Link href="/pricing">Software pricing</Link><Link href="/pricing#agency">Expert services</Link><Link href="/about">About NeuroVision</Link><a href="mailto:info@neurovision-ai.com?subject=NeuroVision%20demo">Request a demo</a></div>
        <div><strong>Legal</strong><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} NeuroVision Technologies</span></div>
    </footer>
  );
}
