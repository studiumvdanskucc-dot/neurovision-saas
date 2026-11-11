"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { TOKEN_PRICE_CENTS, euros, projectTokens, tokenActions } from "./token-pricing-data";
import { REGISTER_URL } from "./site-links";

export function TokenPricing({ compact = false }: { compact?: boolean }) {
  const [draft, setDraft] = useState("500");
  const id = useId();
  const amount = Number(draft);
  const valid = /^\d+$/.test(draft) && Number.isSafeInteger(amount) && amount >= 100 && amount <= 10000;
  const cost = valid ? euros(amount * TOKEN_PRICE_CENTS) : "—";
  const sampleUsage = projectTokens(2, 25);
  const email = `mailto:info@neurovision-ai.com?subject=${encodeURIComponent(`NeuroVision balance top-up: ${valid ? amount : 500} tokens`)}&body=${encodeURIComponent(`Hello NeuroVision,\n\nPlease arrange a top-up of ${valid ? amount : 500} tokens at ${euros(TOKEN_PRICE_CENTS)} per token (${cost}, excluding VAT).\n\nMy account email:\n\nPlease confirm payment details before proceeding.\n\nThank you.`)}`;
  return <div className="token-pricing">
    <div className="token-rate"><div className="token-unit"><strong>{euros(TOKEN_PRICE_CENTS)}</strong><span>per token</span></div><h3>One balance.<br />Use it at your own pace.</h3><p>Top up when you need more. Each analysis or AI survey deducts only its token cost.</p><p className="token-analysis-price">An image analysis uses <b>5 tokens · {euros(50)}</b></p><a className="text-link" href={REGISTER_URL}>Try NeuroVision free <span aria-hidden="true">→</span></a><small>Tokens are NeuroVision usage credits, not AI model token counts. No monthly subscription.</small></div>
    <div className="token-topup"><label className="token-label" htmlFor={`${id}-amount`}>How much would you like to add?</label><div className="token-amount"><input id={`${id}-amount`} type="number" min="100" max="10000" step="1" inputMode="numeric" value={draft} onChange={event => setDraft(event.target.value)} aria-invalid={!valid} aria-describedby={`${id}-help`} /><span>tokens</span></div><input className="token-range" type="range" min="100" max="10000" step="1" value={valid ? amount : 100} onChange={event => setDraft(event.target.value)} aria-label="Adjust token amount" /><div className="token-range-ends" aria-hidden="true"><span>100 tokens</span><span>10,000 tokens</span></div><p className="token-input-help" id={`${id}-help`}>{valid ? "Choose any whole-token amount. The same €0.10 rate applies throughout." : "Enter a whole number between 100 and 10,000 tokens."}</p><div className="token-total" aria-live="polite"><span>One-off top-up<small>excluding VAT</small></span><strong>{cost}</strong></div><a className="btn primary" href={valid ? email : undefined} aria-disabled={!valid} tabIndex={valid ? 0 : -1}>Top up your balance <span aria-hidden="true">→</span></a><p className="token-purchase-note">Top-ups are arranged by email. No payment is taken on this page.</p></div>
    <div className="token-burn-example"><p>How your balance is used <span>Illustrative example</span></p><div className="token-burn-flow"><span><b>{valid ? amount.toLocaleString("en-GB") : "—"}</b>tokens added</span><i aria-hidden="true">→</i><span><b>{sampleUsage}</b>tokens used</span><i aria-hidden="true">→</i><span><b>{valid ? (amount - sampleUsage).toLocaleString("en-GB") : "—"}</b>tokens remaining</span></div><small>Two image analyses (2 × 5 tokens) + 25 AI survey responses (20 tokens) use {sampleUsage} tokens, or {euros(sampleUsage * TOKEN_PRICE_CENTS)}.</small></div>
    {compact ? <div className="token-more"><Link className="text-link" href="/pricing#tokens">See all usage costs <span aria-hidden="true">→</span></Link></div> : <div className="token-costs" id="tokens"><span id="credits" /><h2>What uses tokens?</h2><div className="token-action-list">{tokenActions.map(action => <div key={action.name}><span><strong>{action.name}</strong><small>{action.detail}</small></span><b>{action.tokens} tokens</b><span>{euros(action.tokens * TOKEN_PRICE_CENTS)}</span></div>)}</div><p className="fine-print">Above 100 AI responses: 60 tokens, plus 45 tokens for each additional block of up to 100. Generated variants, resizing and expert-led work are quoted separately.</p></div>}
  </div>;
}
