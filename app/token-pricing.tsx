"use client";

import { useId, useState } from "react";
import Link from "next/link";
import {
  ANALYSIS_TOKENS,
  MAX_TOPUP_TOKENS,
  MIN_TOPUP_TOKENS,
  OWN_KEYS_DISCOUNT,
  OWN_KEYS_TOKEN_PRICE_CENTS,
  REVISION_TOKENS,
  STUDIO_GENERATE_TOKENS,
  STUDIO_OPTIMISE_TOKENS,
  TOKEN_PRICE_CENTS,
  euros,
  planTokens,
  surveySizes,
  surveyTokens,
  tokenActions,
  tokenRate,
  type UsagePlan,
} from "./token-pricing-data";
import { REGISTER_URL } from "./site-links";
import { CheckIcon, CoinsIcon, EyeIcon, KeyIcon, StudioIcon, SurveyIcon } from "./brand-icons";

// The calculator opens on the same example the page used before:
// two image analyses and one 25-response survey.
const startingPlan: UsagePlan = { images: 2, surveys: 1, responses: 25, optimisations: 0, newDesigns: 0, revisions: 0 };
const MAX_COUNT = 999;
const whole = (value: number) => value.toLocaleString("en-GB");

function Stepper({ id, label, value, onChange }: { id: string; label: string; value: number; onChange: (value: number) => void }) {
  const set = (next: number) => onChange(Number.isFinite(next) ? Math.min(MAX_COUNT, Math.max(0, Math.trunc(next))) : 0);
  return <div className="calc-stepper">
    <button type="button" onClick={() => set(value - 1)} disabled={value <= 0} aria-label={`One fewer: ${label}`}>−</button>
    <input id={id} type="text" inputMode="numeric" pattern="[0-9]*" autoComplete="off" value={String(value)} onChange={event => set(Number(event.target.value.replace(/\D/g, "")))} />
    <button type="button" onClick={() => set(value + 1)} disabled={value >= MAX_COUNT} aria-label={`One more: ${label}`}>+</button>
  </div>;
}

export function TokenPricing({ compact = false }: { compact?: boolean }) {
  const [draft, setDraft] = useState("500");
  const [plan, setPlan] = useState<UsagePlan>(startingPlan);
  const [ownKeys, setOwnKeys] = useState(false);
  const id = useId();
  const rate = ownKeys ? OWN_KEYS_TOKEN_PRICE_CENTS : TOKEN_PRICE_CENTS;
  const rateLabel = tokenRate(rate);
  const price = (tokens: number) => euros(tokens * rate);
  const amount = Number(draft);
  const valid = /^\d+$/.test(draft) && Number.isSafeInteger(amount) && amount >= MIN_TOPUP_TOKENS && amount <= MAX_TOPUP_TOKENS;
  const cost = valid ? price(amount) : "—";
  const email = `mailto:info@neurovision-ai.com?subject=${encodeURIComponent(`NeuroVision balance top-up: ${valid ? amount : 500} tokens`)}&body=${encodeURIComponent(`Hello NeuroVision,\n\nPlease arrange a top-up of ${valid ? amount : 500} tokens at ${rateLabel} per token${ownKeys ? ", using my own API keys" : ""} (${cost}, excluding VAT).\n\nMy account email:\n\nPlease confirm payment details before proceeding.\n\nThank you.`)}`;

  const surveyUnit = surveyTokens(plan.responses);
  const used = planTokens(plan);
  const tooLarge = used > MAX_TOPUP_TOKENS;
  const suggested = Math.min(MAX_TOPUP_TOKENS, Math.max(MIN_TOPUP_TOKENS, used));
  const short = valid ? used - amount : 0;
  const change = (key: keyof UsagePlan) => (value: number) => setPlan(current => ({ ...current, [key]: value }));
  const rows = [
    { key: "images", tool: "attention", Icon: EyeIcon, label: "Images to analyse", detail: "Attention heatmap + AI critique", unit: ANALYSIS_TOKENS, count: plan.images },
    { key: "surveys", tool: "audience", Icon: SurveyIcon, label: "AI audience surveys", detail: "", unit: surveyUnit, count: plan.surveys },
    { key: "optimisations", tool: "studio", Icon: StudioIcon, label: "Designs to optimise", detail: "One revised image, re-analysed", unit: STUDIO_OPTIMISE_TOKENS, count: plan.optimisations },
    { key: "newDesigns", tool: "studio", Icon: StudioIcon, label: "New designs to generate", detail: "One refined version, re-analysed", unit: STUDIO_GENERATE_TOKENS, count: plan.newDesigns },
    { key: "revisions", tool: "studio", Icon: StudioIcon, label: "Extra design revisions", detail: "One more edited image, re-analysed", unit: REVISION_TOKENS, count: plan.revisions },
  ] as const;
  const note = used === 0
    ? "Nothing planned yet. A month without tests costs nothing."
    : tooLarge
      ? `This work needs ${whole(used)} tokens, more than a single top-up of ${whole(MAX_TOPUP_TOKENS)}.`
      : !valid
        ? `Enter a top-up between ${whole(MIN_TOPUP_TOKENS)} and ${whole(MAX_TOPUP_TOKENS)} tokens to see what would remain.`
        : short > 0
          ? `A top-up of ${whole(amount)} tokens is ${whole(short)} short of this work.`
          : `A top-up of ${whole(amount)} tokens covers this work and leaves ${whole(amount - used)} on your balance.`;

  const discount = Math.round(OWN_KEYS_DISCOUNT * 100);
  const dealExamples = [
    { label: "Image analysis", tokens: ANALYSIS_TOKENS },
    { label: "Survey, 25 AI profiles", tokens: surveyTokens(25) },
    { label: "500-token top-up", tokens: 500 },
  ];

  return <>
  <section className={ownKeys ? "keys-deal is-on" : "keys-deal"} id="own-keys" aria-labelledby={`${id}-deal`}>
    <span className="keys-sticker" aria-hidden="true">Save<b>{discount}%</b></span>
    <div className="keys-deal-copy">
      <p className="keys-kicker"><KeyIcon size={18} />Bring your own API keys</p>
      <h3 id={`${id}-deal`}>The same tests for {discount}% less.</h3>
      <p>Connect your own AI provider keys for reports. Report data stays in your own accounts instead of being sent elsewhere, and every price on NeuroVision drops by {discount}%.</p>
      <ul>
        <li><CheckIcon size={16} />All five tools, one token balance</li>
        <li><CheckIcon size={16} />Runs on European servers</li>
        <li><CheckIcon size={16} />Switch on or off at any time</li>
      </ul>
    </div>
    <div className="keys-deal-offer">
      <p className="keys-rate"><s>{tokenRate(TOKEN_PRICE_CENTS)}</s><strong>{tokenRate(OWN_KEYS_TOKEN_PRICE_CENTS)}</strong><span>per token</span></p>
      <dl>{dealExamples.map(item => <div key={item.label}><dt>{item.label}</dt><dd><s>{euros(item.tokens * TOKEN_PRICE_CENTS)}</s><b>{euros(item.tokens * OWN_KEYS_TOKEN_PRICE_CENTS)}</b></dd></div>)}</dl>
      <button type="button" role="switch" aria-checked={ownKeys} className="keys-switch" onClick={() => setOwnKeys(on => !on)}>
        <span className="keys-switch-track" aria-hidden="true"><i /></span>
        <span>{ownKeys ? `Prices below include your ${discount}% saving` : "Show my prices with my own keys"}</span>
      </button>
    </div>
  </section>
  <div className="token-pricing">
    <div className="token-rate"><div className="token-unit"><strong>{rateLabel}</strong><span>per token</span>{ownKeys && <s aria-label={`was ${tokenRate(TOKEN_PRICE_CENTS)}`}>{tokenRate(TOKEN_PRICE_CENTS)}</s>}</div>
      {ownKeys
        ? <p className="keys-active"><KeyIcon size={16} />With your own API keys: {Math.round(OWN_KEYS_DISCOUNT * 100)}% off every price</p>
        : <a className="keys-hint" href="#own-keys"><KeyIcon size={16} />Using your own API keys? Pay {Math.round(OWN_KEYS_DISCOUNT * 100)}% less</a>}<h3>One balance.<br />Use it at your own pace.</h3><p>Top up when you need more. Each analysis, AI survey or Generative Studio run deducts only its token cost.</p><p className="token-analysis-price">An image analysis uses <b>{ANALYSIS_TOKENS} tokens · {price(ANALYSIS_TOKENS)}</b></p><a className="text-link" href={REGISTER_URL}>Try NeuroVision free <span aria-hidden="true">→</span></a><small>Tokens are NeuroVision customer credits, shown as credits in the app. They are separate from the API tokens billed by model providers. No monthly subscription.</small></div>
    <div className="token-topup"><label className="token-label" htmlFor={`${id}-amount`}>How much would you like to add?</label><div className="token-amount"><input id={`${id}-amount`} type="number" min={MIN_TOPUP_TOKENS} max={MAX_TOPUP_TOKENS} step="1" inputMode="numeric" value={draft} onChange={event => setDraft(event.target.value)} aria-invalid={!valid} aria-describedby={`${id}-help`} /><span>tokens</span></div><input className="token-range" type="range" min={MIN_TOPUP_TOKENS} max={MAX_TOPUP_TOKENS} step="1" value={valid ? amount : MIN_TOPUP_TOKENS} onChange={event => setDraft(event.target.value)} aria-label="Adjust token amount" /><div className="token-range-ends" aria-hidden="true"><span>100 tokens</span><span>10,000 tokens</span></div><p className="token-input-help" id={`${id}-help`}>{valid ? `Choose any whole-token amount. The same ${rateLabel} rate applies throughout.` : "Enter a whole number between 100 and 10,000 tokens."}</p><div className="token-total" aria-live="polite"><span>One-off top-up<small>excluding VAT</small></span><strong>{cost}</strong></div><a className="btn primary" href={valid ? email : undefined} aria-disabled={!valid} tabIndex={valid ? 0 : -1}>Top up your balance <span aria-hidden="true">→</span></a><p className="token-purchase-note">Top-ups are arranged by email. No payment is taken on this page.</p></div>

    <div className="token-calc" id={compact ? undefined : "calculator"}>
      <div className="token-calc-head">
        <div><h3>Work out what you need.</h3>
        <p>Set what you plan to run. Each card shows its cost in tokens and in euros.</p></div>
        <span className="token-pill" aria-hidden="true"><CoinsIcon size={18} />{whole(used)}</span>
      </div>
      <div className="token-calc-cards">
        {rows.map(row => {
          const lineTokens = row.count * row.unit;
          return <article className={`calc-card tool-${row.tool}`} key={row.key}>
            <span className="calc-card-icon"><row.Icon size={20} /></span>
            <div className="token-calc-what">
              <label htmlFor={`${id}-${row.key}`}>{row.label}</label>
              {row.key === "surveys"
                ? <select className="token-calc-size" aria-label="Responses per survey" value={plan.responses} onChange={event => change("responses")(Number(event.target.value))}>{surveySizes.map(size => <option value={size} key={size}>{size} responses each</option>)}</select>
                : <small>{row.detail}</small>}
            </div>
            <span className="token-calc-unit">{whole(row.unit)} tokens · {price(row.unit)} each</span>
            <Stepper id={`${id}-${row.key}`} label={row.label} value={row.count} onChange={change(row.key)} />
            <span className="token-calc-line"><b>{whole(lineTokens)} tokens</b>{price(lineTokens)}</span>
          </article>;
        })}
      </div>
      <div className="token-calc-total" aria-live="polite">
        <span>This work uses<small>excluding VAT</small></span>
        <b>{whole(used)} tokens</b>
        <strong>{price(used)}</strong>
      </div>
      <div className="token-burn-flow"><span><b>{valid ? whole(amount) : "—"}</b>tokens added</span><i aria-hidden="true">→</i><span><b>{whole(used)}</b>tokens used</span><i aria-hidden="true">→</i><span><b>{valid ? whole(Math.abs(amount - used)) : "—"}</b>{short > 0 ? "tokens short" : "tokens remaining"}</span></div>
      <p className="token-calc-note" aria-live="polite">
        {note}
        {used > 0 && !tooLarge && (!valid || suggested !== amount) && <button type="button" className="token-calc-apply" onClick={() => setDraft(String(suggested))}>{used < MIN_TOPUP_TOKENS ? `Use the smallest top-up: ${whole(suggested)} tokens (${price(suggested)})` : `Top up exactly ${whole(suggested)} tokens (${price(suggested)})`}</button>}
        {tooLarge && <a className="token-calc-apply" href="mailto:info@neurovision-ai.com?subject=NeuroVision%20larger%20volume">Ask about larger volumes</a>}
      </p>
    </div>

    {compact ? <div className="token-more"><Link className="text-link" href="/pricing#tokens">See all usage costs <span aria-hidden="true">→</span></Link></div> : <div className="token-costs" id="tokens"><span id="credits" /><h2>What uses tokens?</h2><div className="token-action-list">{tokenActions.map(action => <div key={action.name}><span><strong>{action.name}</strong><small>{action.detail}</small></span><b>{action.tokens} tokens</b><span>{price(action.tokens)}</span></div>)}</div><p className="fine-print">Surveys include up to eight questions per profile. Above 100 profiles: 65 tokens for the first 100, then 60 tokens for each additional block of up to 100. For example, 250 profiles use {surveyTokens(250)} tokens ({price(surveyTokens(250))}).{ownKeys && " Prices shown with your own API keys."} A/B Testing and Digital Shelf draw on the same balance. Resizing and expert-led work are quoted separately.</p></div>}
  </div>
  </>;
}
