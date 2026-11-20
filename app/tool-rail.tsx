// The tool colour system from the new design: each tool has a colour, an icon
// and a vertical rail on its card. Below the rail, small icons link to the
// tools that follow it, so a reader can jump along the workflow.
import type { ComponentType } from "react";
import { AbIcon, EyeIcon, ShelfIcon, StudioIcon, SurveyIcon } from "./brand-icons";

export type ToolKey = "attention" | "audience" | "studio" | "ab" | "shelf";

export const tools: { key: ToolKey; name: string; rail: string; Icon: ComponentType<{ size?: number }> }[] = [
  { key: "attention", name: "Attention prediction", rail: "Attention", Icon: EyeIcon },
  { key: "audience", name: "AI audience surveys", rail: "Survey", Icon: SurveyIcon },
  { key: "studio", name: "Generative Studio", rail: "Generate", Icon: StudioIcon },
  { key: "ab", name: "A/B Testing", rail: "A/B testing", Icon: AbIcon },
  { key: "shelf", name: "Digital Shelf", rail: "Digital shelf", Icon: ShelfIcon },
];

export function ToolRail({ tool, ids }: { tool: ToolKey; ids: Record<ToolKey, string> }) {
  const index = tools.findIndex(item => item.key === tool);
  const { Icon, rail } = tools[index];
  return <div className="tool-rail">
    <div className="tool-rail-bar" aria-hidden="true"><Icon size={18} /><span>{rail}</span></div>
    <div className="tool-rail-next">
      {tools.slice(index + 1).map(next => <a key={next.key} href={`#${ids[next.key]}`} className={`tool-dot tool-${next.key}`} aria-label={`Go to ${next.name}`} title={next.name}><next.Icon size={16} /></a>)}
    </div>
  </div>;
}
