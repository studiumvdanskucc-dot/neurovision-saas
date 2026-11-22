// NeuroVision usage units. Keep money in integer cents, rather than floats.
// Every price on the site is derived from the numbers in this file.
export const TOKEN_PRICE_CENTS = 10;
export const ANALYSIS_TOKENS = 5;
// Price list confirmed by NeuroVision, November 2026. All prices exclude VAT.
// Generative Studio: optimising assesses the original, produces one revised
// image and re-analyses it; generating makes an initial image, assesses it,
// produces one refined version and re-analyses it.
export const STUDIO_OPTIMISE_TOKENS = 40;
export const STUDIO_GENERATE_TOKENS = 70;
// One further edited image plus re-analysis, on request.
export const REVISION_TOKENS = 40;
// Surveys include up to eight questions per profile.
export const SURVEY_QUESTIONS = 8;
export const SURVEY_FIRST_100_TOKENS = 65;
export const SURVEY_EXTRA_BLOCK_TOKENS = 60;
export const MIN_TOPUP_TOKENS = 100;
export const MAX_TOPUP_TOKENS = 10000;

export function surveyTokens(responses: number) {
  if (responses <= 0) return 0;
  if (responses <= 25) return 25;
  if (responses <= 50) return 35;
  if (responses <= 100) return SURVEY_FIRST_100_TOKENS;
  // Above 100: 65 for the first 100, then 60 for each additional block of up to 100.
  return SURVEY_FIRST_100_TOKENS + Math.ceil((responses - 100) / 100) * SURVEY_EXTRA_BLOCK_TOKENS;
}

export function projectTokens(images: number, responses: number) {
  return images * ANALYSIS_TOKENS + surveyTokens(responses);
}

// Survey sizes offered in the calculator. Any size works with surveyTokens().
export const surveySizes = [25, 50, 100, 200, 250, 300, 500] as const;

// What someone plans to run. Used by the calculator on the pricing pages.
export type UsagePlan = {
  images: number;
  surveys: number;
  responses: number;
  optimisations: number;
  newDesigns: number;
  revisions: number;
};

export function planTokens(plan: UsagePlan) {
  return (
    plan.images * ANALYSIS_TOKENS +
    plan.surveys * surveyTokens(plan.responses) +
    plan.optimisations * STUDIO_OPTIMISE_TOKENS +
    plan.newDesigns * STUDIO_GENERATE_TOKENS +
    plan.revisions * REVISION_TOKENS
  );
}

export function euros(cents: number) {
  return new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(Math.round(cents) / 100);
}

// With their own API keys for reports, customers pay 35% less for everything.
export const OWN_KEYS_DISCOUNT = 0.35;
export const OWN_KEYS_TOKEN_PRICE_CENTS = TOKEN_PRICE_CENTS * (1 - OWN_KEYS_DISCOUNT);

// The per-token rate needs a third decimal with own keys (€0.065).
export function tokenRate(cents: number) {
  return new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 3 }).format(cents / 100);
}

export const tokenActions = [
  { name: "Analyse one image", detail: "Predicted attention heatmap + AI critique", tokens: ANALYSIS_TOKENS },
  { name: "Ask 25 AI audience profiles", detail: "Simulated survey responses + summary report", tokens: surveyTokens(25) },
  { name: "Ask 50 AI audience profiles", detail: "Simulated survey responses + summary report", tokens: surveyTokens(50) },
  { name: "Ask 100 AI audience profiles", detail: "Simulated survey responses + summary report", tokens: surveyTokens(100) },
  { name: "Each additional block of up to 100 profiles", detail: "Additional responses within the same survey + updated combined report", tokens: SURVEY_EXTRA_BLOCK_TOKENS },
  { name: "Optimise an existing design", detail: "Assess the original, produce one revised image, then re-analyse it", tokens: STUDIO_OPTIMISE_TOKENS },
  { name: "Generate a new design", detail: "Generate an initial image, assess it, produce one refined version, then re-analyse it", tokens: STUDIO_GENERATE_TOKENS },
  { name: "Additional requested design revision", detail: "One further edited image + re-analysis", tokens: REVISION_TOKENS },
] as const;
