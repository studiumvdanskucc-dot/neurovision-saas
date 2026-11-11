"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ANALYSIS_TOKENS, TOKEN_PRICE_CENTS, TOKEN_TOP_UPS, euros, projectTokens, tokenActions } from "./token-pricing-data";
import { REGISTER_URL } from "./site-links";

export function TokenPricing({ compact = false }: { compact?: boolean }) {
  const [draft, setDraft] = useState("100");
  const id = useId();
  const quantity = Number(draft);
  const valid = /^\d+$/.test(draft) && Number.isSafeInteger(quantity) && quantity >= 100 && quantity <= 100000;
  const total = valid ? euros(quantity * TOKEN_PRICE_CENTS) : "—";
  const request = `mailto:info@neurovision-ai.com?subject=${encodeURIComponent(`NeuroVision token top-up: ${valid ? quantity : 100} tokens`)}&body=${encodeURIComponent(`Hello NeuroVision,\n\nI would like to request ${valid ? quantity : 100} tokens at ${euros(TOKEN_PRICE_CENTS)} per token (${total}, excluding VAT).\n\nMy account email:\n\nPlease confirm the total and payment details.\n\nThank you.`)}`;
  return <div className={`token-pricing${compact ? " token-pricing-compact" : ""}`}>
    <div className="token-rate"><div className="token-unit"><strong>{euros(TOKEN_PRICE_CENTS)}</strong><span>per token</span></div><p>One rate, whatever you top up.<br />No subscription or monthly renewal.</p><a className="text-link" href={REGISTER_URL}>Try NeuroVision free <span aria-hidden="true">→</span></a><small>Tokens are NeuroVision usage units, not AI model token counts.</small></div>
    <div className="token-topup"><p className="token-label">Choose your top-up</p><div className="token-presets" role="group" aria-label="Choose a token amount">{TOKEN_TOP_UPS.map(amount => <button type="button" key={amount} aria-pressed={valid && quantity === amount} onClick={() => setDraft(String(amount))}>{amount.toLocaleString("en-GB")}<span>tokens</span></button>)}</div><div className="token-custom"><label htmlFor={`${id}-quantity`}>Or enter an amount</label><input id={`${id}-quantity`} type="number" min="100" max="100000" step="1" inputMode="numeric" value={draft} onChange={event => setDraft(event.target.value)} aria-invalid={!valid} aria-describedby={`${id}-help`} /><span>tokens</span></div><p className="token-input-help" id={`${id}-help`}>{valid ? "Minimum top-up: 100 tokens. Every token has the same price." : "Enter a whole number between 100 and 100,000."}</p><div className="token-total" aria-live="polite"><span>One-off total<small>excluding VAT</small></span><strong>{total}</strong></div><a className="btn primary" href={valid ? request : undefined} aria-disabled={!valid} tabIndex={valid ? 0 : -1}>Request this top-up <span aria-hidden="true">→</span></a><p className="token-purchase-note">Top-ups are arranged with our team by email. No payment is taken here.</p></div>
    {compact ? <div className="token-cost-preview"><span><b>5 tokens · {euros(5 * TOKEN_PRICE_CENTS)}</b>Analyse one image</span><span><b>30 tokens · {euros(30 * TOKEN_PRICE_CENTS)}</b>Compare two ads + 25 AI responses</span><Link className="text-link" href="/pricing#tokens">See costs and plan a project <span aria-hidden="true">→</span></Link></div> : <div className="token-costs" id="tokens"><span id="credits" /><h2>What uses tokens?</h2><div className="token-action-list">{tokenActions.map(action => <div key={action.name}><span><strong>{action.name}</strong><small>{action.detail}</small></span><b>{action.tokens} tokens</b><span>{euros(action.tokens * TOKEN_PRICE_CENTS)}</span></div>)}</div><p className="fine-print">Above 100 AI responses: 60 tokens, plus 45 tokens for each additional block of up to 100. Generated variants, resizing and expert-led work are quoted separately.</p></div>}
  </div>;
}

export function ProjectCalculator() {
  const [images, setImages] = useState("2");
  const [responses, setResponses] = useState(25);
  const id = useId();
  const count = Number(images);
  const valid = /^\d+$/.test(images) && Number.isSafeInteger(count) && count >= 1 && count <= 1000;
  const total = valid ? projectTokens(count, responses) : 0;
  return <div className="project-calculator"><div><h2>What would your project cost?</h2><p>For example, compare two ads and ask 25 AI profiles what they understand. That’s <strong>30 tokens, or {euros(30 * TOKEN_PRICE_CENTS)}.</strong></p><p className="fine-print">AI profiles are simulated respondents, not recruited people. Generation and expert services are not included in this estimate.</p></div><div className="project-fields"><div className="project-field"><label htmlFor={`${id}-images`}>Images to analyse</label><input id={`${id}-images`} type="number" min="1" max="1000" step="1" inputMode="numeric" value={images} aria-invalid={!valid} onChange={event => setImages(event.target.value)} /></div><div className="project-field"><label htmlFor={`${id}-responses`}>AI survey responses</label><select id={`${id}-responses`} value={responses} onChange={event => setResponses(Number(event.target.value))}><option value="0">No survey</option><option value="25">25 AI responses</option><option value="50">50 AI responses</option><option value="100">100 AI responses</option><option value="200">200 AI responses</option><option value="300">300 AI responses</option></select></div><div className="project-equation" aria-live="polite">{valid ? <><span>{count} × {ANALYSIS_TOKENS} analysis tokens{responses > 0 ? " + AI survey" : ""}</span><strong>{total} tokens <span>·</span> {euros(total * TOKEN_PRICE_CENTS)}</strong></> : <span>Enter between 1 and 1,000 images.</span>}</div></div></div>;
}
