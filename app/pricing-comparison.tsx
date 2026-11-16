import { ANALYSIS_TOKENS, MIN_TOPUP_TOKENS, TOKEN_PRICE_CENTS, euros, planTokens } from "./token-pricing-data";

// How NeuroVision's offer differs from other attention-testing platforms.
// The right-hand column summarises the public websites of three established
// platforms, checked in November 2026. No platform is named. Re-check the
// facts before changing the wording.
const rows = [
  {
    topic: "How you pay",
    us: "Pay as you go. Top up one token balance when you choose.",
    them: "A monthly subscription or an annual licence.",
  },
  {
    topic: "Published prices",
    us: `${euros(TOKEN_PRICE_CENTS)} per token, and every action has a listed cost.`,
    them: "Two of the three publish no prices. You ask for a quote.",
  },
  {
    topic: "Where it starts",
    us: `A ${euros(MIN_TOPUP_TOKENS * TOKEN_PRICE_CENTS)} top-up (${MIN_TOPUP_TOKENS} tokens).`,
    them: "From €29 a month where a price is published.",
  },
  {
    topic: "A month without testing",
    us: "Costs nothing.",
    them: "The subscription or licence fee still applies.",
  },
  {
    topic: "Getting started",
    us: "Create an account and upload a design.",
    them: "A demo call for two of the three, a 14-day trial for the other.",
  },
  {
    topic: "What you can run",
    us: "Attention analysis, AI audience surveys, A/B Testing, Digital Shelf and Generative Studio, on one balance.",
    them: "Attention maps and scores with AI recommendations. Some add shelf testing or generated suggestions.",
  },
] as const;

const example = { images: 10, surveys: 1, responses: 25, optimisations: 0, newDesigns: 0 };

export function PricingComparison() {
  const exampleTokens = planTokens(example);
  return <div className="offer-compare" id="compare">
    <div className="offer-compare-head">
      <h3>Pay for the tests you run, not the months in between.</h3>
      <p>Most attention-testing platforms are sold as a subscription or a licence. Here is how that differs from a token balance.</p>
    </div>
    <div className="offer-compare-scroll" role="region" aria-label="NeuroVision compared with other attention-testing platforms" tabIndex={0}>
      <table>
        <thead>
          <tr><td /><th scope="col" className="us">NeuroVision</th><th scope="col">Other attention-testing platforms</th></tr>
        </thead>
        <tbody>
          {rows.map(row => <tr key={row.topic}><th scope="row">{row.topic}</th><td className="us" data-label="NeuroVision">{row.us}</td><td data-label="Other platforms">{row.them}</td></tr>)}
        </tbody>
      </table>
    </div>
    <p className="offer-compare-example"><b>A worked example.</b> Analysing {example.images} images ({example.images} × {ANALYSIS_TOKENS} tokens) and asking {example.responses} AI audience profiles uses {exampleTokens} tokens: {euros(exampleTokens * TOKEN_PRICE_CENTS)} for the month. On a subscription, the same month costs the full monthly fee.</p>
    <p className="fine-print">The right-hand column summarises the public websites of three established attention-testing platforms, checked in November 2026. Their offers change, so check before you decide.</p>
  </div>;
}
