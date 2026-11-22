import { ANALYSIS_TOKENS, MIN_TOPUP_TOKENS, TOKEN_PRICE_CENTS, euros, planTokens } from "./token-pricing-data";
import { sitePath } from "./site-path";
import { CheckIcon, DashIcon } from "./brand-icons";

// How NeuroVision's offer differs from other attention-testing platforms.
// The “Other attention-testing platforms” card summarises the public websites of three established
// platforms, checked in November 2026. No platform is named. Re-check the
// facts before changing the wording.
const rows = [
  {
    topic: "How you pay",
    us: "Pay as you go. Top up one token balance when you choose.",
    them: "A monthly or yearly subscription, an annual licence or a quoted package.",
  },
  {
    topic: "Published prices",
    us: `${euros(TOKEN_PRICE_CENTS)} per token, with a public price list.`,
    them: "Two of the three publish no prices. You ask for a quote.",
  },
  {
    topic: "Where it starts",
    us: `A ${euros(MIN_TOPUP_TOKENS * TOKEN_PRICE_CENTS)} top-up (${MIN_TOPUP_TOKENS} tokens).`,
    them: "From about €30 a month, where a price is published.",
  },
  {
    topic: "A month without testing",
    us: "Costs nothing.",
    them: "The subscription or licence fee still applies.",
  },
  {
    topic: "Getting started",
    us: "Create an account and upload a design.",
    them: "A demo or a quote request for two of the three, a 14-day free trial for the other.",
  },
  {
    topic: "What you can run",
    us: "Attention analysis, AI audience surveys, A/B Testing, Digital Shelf and Generative Studio, on one balance.",
    them: "Attention maps and scores with AI recommendations. Some add shelf testing or generated suggestions.",
  },
] as const;

const example = { images: 10, surveys: 1, responses: 25, optimisations: 0, newDesigns: 0, revisions: 0 };

export function PricingComparison() {
  const exampleTokens = planTokens(example);
  return <div className="offer-compare" id="compare">
    <div className="offer-compare-head">
      <h3>Pay for the tests you run, not the months in between.</h3>
      <p>Most attention-testing platforms are sold as a subscription or a licence. Here is how that differs from a token balance.</p>
    </div>
    <div className="offer-cards">
      <section className="offer-card offer-us" aria-labelledby="offer-us-title">
        <img className="offer-mark" src={sitePath("/assets/brand/mark-white.png")} alt="" width={200} height={196} />
        <h4 id="offer-us-title"><span>NeuroVision</span>Pay as you go</h4>
        <p className="offer-rate"><b>{euros(TOKEN_PRICE_CENTS)}</b> per token</p>
        <dl>{rows.map(row => <div key={row.topic}><dt><CheckIcon size={18} />{row.topic}</dt><dd>{row.us}</dd></div>)}</dl>
      </section>
      <section className="offer-card offer-them" aria-labelledby="offer-them-title">
        <h4 id="offer-them-title"><span>Other attention-testing platforms</span>Pay for access</h4>
        <p className="offer-rate">Subscription, licence or quote</p>
        <dl>{rows.map(row => <div key={row.topic}><dt><DashIcon size={18} />{row.topic}</dt><dd>{row.them}</dd></div>)}</dl>
      </section>
    </div>
    <p className="offer-compare-example"><b>A worked example.</b> Analysing {example.images} images ({example.images} × {ANALYSIS_TOKENS} tokens) and asking {example.responses} AI audience profiles uses {exampleTokens} tokens: {euros(exampleTokens * TOKEN_PRICE_CENTS)} for the month. On a subscription, the same month costs the full monthly fee.</p>
    <p className="fine-print">The “Other attention-testing platforms” card summarises the public websites of three established attention-testing platforms, checked in November 2026. Their offers change, so check before you decide.</p>
  </div>;
}
