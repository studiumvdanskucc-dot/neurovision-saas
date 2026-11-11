// NeuroVision usage units. Keep money in integer cents, rather than floats.
export const TOKEN_PRICE_CENTS = 10;
export const ANALYSIS_TOKENS = 5;

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

export function euros(cents: number) {
  return new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(cents / 100);
}

export const tokenActions = [
  { name: "Analyse one image", detail: "Predicted attention heatmap + AI critique", tokens: ANALYSIS_TOKENS },
  { name: "Ask 25 AI audience profiles", detail: "Simulated responses to your survey", tokens: 20 },
  { name: "Ask 50 AI audience profiles", detail: "Simulated responses to your survey", tokens: 35 },
  { name: "Ask 100 AI audience profiles", detail: "Simulated responses to your survey", tokens: 60 },
] as const;
