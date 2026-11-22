// The five NeuroVision tools, each with its own colour (see --t-* in brand.css)
// and icon. Used by the tool showcase on the home page and the tags on How it works.
import type { ComponentType } from "react";
import { AbIcon, EyeIcon, ShelfIcon, StudioIcon, SurveyIcon } from "./brand-icons";

export type ToolKey = "attention" | "audience" | "studio" | "ab" | "shelf";

export const tools: { key: ToolKey; name: string; tagline: string; Icon: ComponentType<{ size?: number }> }[] = [
  { key: "attention", name: "Attention prediction", tagline: "Where eyes go first", Icon: EyeIcon },
  { key: "audience", name: "AI audience surveys", tagline: "What people understand", Icon: SurveyIcon },
  { key: "studio", name: "Generative Studio", tagline: "A stronger next version", Icon: StudioIcon },
  { key: "ab", name: "A/B Testing", tagline: "Which version wins", Icon: AbIcon },
  { key: "shelf", name: "Digital Shelf", tagline: "How it stands out", Icon: ShelfIcon },
];

export function ToolTag({ tool }: { tool: ToolKey }) {
  const { Icon, name } = tools.find(item => item.key === tool)!;
  return <span className="tool-tag"><Icon size={16} />{name}</span>;
}
