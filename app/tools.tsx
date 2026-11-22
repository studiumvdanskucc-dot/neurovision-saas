// The five things NeuroVision does (named as actions on the home page, with
// their product names as labels), each with its own colour (see --t-* in brand.css)
// and icon. Used by the tool showcase on the home page and the tags on How it works.
import type { ComponentType } from "react";
import { AbIcon, EyeIcon, ShelfIcon, StudioIcon, SurveyIcon } from "./brand-icons";

export type ToolKey = "attention" | "audience" | "studio" | "ab" | "shelf";

export const tools: { key: ToolKey; name: string; label: string; tagline: string; Icon: ComponentType<{ size?: number }> }[] = [
  { key: "attention", name: "Predict attention", label: "Attention prediction", tagline: "Where eyes go first", Icon: EyeIcon },
  { key: "audience", name: "Ask your audience", label: "AI audience surveys", tagline: "What people understand", Icon: SurveyIcon },
  { key: "studio", name: "Suggest improvements", label: "Generative Studio", tagline: "A stronger next version", Icon: StudioIcon },
  { key: "ab", name: "Compare versions", label: "A/B Testing", tagline: "Which version wins", Icon: AbIcon },
  { key: "shelf", name: "Test on the shelf", label: "Digital Shelf", tagline: "How it stands out", Icon: ShelfIcon },
];

export function ToolTag({ tool }: { tool: ToolKey }) {
  const { Icon, label } = tools.find(item => item.key === tool)!;
  return <span className="tool-tag"><Icon size={16} />{label}</span>;
}
