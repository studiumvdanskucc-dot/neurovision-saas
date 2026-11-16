// NeuroVision usage units. Keep money in integer cents, rather than floats.
// Every price on the site is derived from the numbers in this file.
export const TOKEN_PRICE_CENTS = 10;
export const ANALYSIS_TOKENS = 5;
// Generative Studio, as shown in the app: Mode A works from an existing
// design (15), Mode B generates a new one from a brief (20).
export const STUDIO_OPTIMISE_TOKENS = 15;
export const STUDIO_GENERATE_TOKENS = 20;
export const MIN_TOPUP_TOKENS = 100;
export const MAX_TOPUP_TOKENS = 10000;

export function surveyTokens(responses: number) {
  if (responses <= 0) return 0;
  if (responses <= 25) return 20;
  if (responses <= 50) return 35;
  if (responses <= 100) return 60;
  return 60 + Math.ceil((responses - 100) / 100) * 45;
}

export function projectTokens(images: number, responses: number) {
  return images * ANALYSIS_TOKENS + surveyTokens(responses);
}

// Survey sizes offered in the calculator. Any size works with surveyTokens().
export const surveySizes = [25, 50, 100, 200, 300, 500] as const;

// What someone plans to run. Used by the calculator on the pricing pages.
export type UsagePlan = {
  images: number;
  surveys: number;
  responses: number;
  optimisations: number;
  newDesigns: number;
};

export function planTokens(plan: UsagePlan) {
  return (
    plan.images * ANALYSIS_TOKENS +
    plan.surveys * surveyTokens(plan.responses) +
    plan.optimisations * STUDIO_OPTIMISE_TOKENS +
    plan.newDesigns * STUDIO_GENERATE_TOKENS
  );
}

export function euros(cents: number) {
  return new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(cents / 100);
}

export const tokenActions = [
  { name: "Analyse one image", detail: "Predicted attention heatmap + AI critique", tokens: ANALYSIS_TOKENS },
  { name: "Ask 25 AI audience profiles", detail: "Simulated responses to your survey", tokens: 20 },
  { name: "Ask 50 AI audience profiles", detail: "Simulated responses to your survey", tokens: 35 },
  { name: "Ask 100 AI audience profiles", detail: "Simulated responses to your survey", tokens: 60 },
  { name: "Optimise an existing design", detail: "Generative Studio · a new version of your creative", tokens: STUDIO_OPTIMISE_TOKENS },
  { name: "Generate a new design", detail: "Generative Studio · a new creative from your brief", tokens: STUDIO_GENERATE_TOKENS },
] as const;
