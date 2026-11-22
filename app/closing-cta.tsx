import { REGISTER_URL } from "./site-links";
import { FREE_TOKENS } from "./token-pricing-data";

export function ClosingCTA({ title = "Start with one image.", copy = "Find what stands out. See what could be clearer. Decide what to try next." }: { title?: string; copy?: string }) {
  return <section className="final-cta"><div className="container"><h2>{title}</h2><p>{copy}</p><div className="actions center"><a className="btn white" href={REGISTER_URL}>Start free <span aria-hidden="true">→</span></a><a className="btn ghost" href="mailto:info@neurovision-ai.com?subject=NeuroVision%20demo">Book a demo <span aria-hidden="true">→</span></a></div><small>Start with {FREE_TOKENS} free tokens. One token system for every tool. No subscription.</small></div></section>;
}
