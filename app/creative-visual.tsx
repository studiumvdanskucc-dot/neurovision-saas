import { sitePath } from "./site-path";
import type { CreativeAsset } from "./creative-examples";
import type { CSSProperties, ReactNode } from "react";

export function CreativeVisual({ asset, heatmap = false, priority = false, heatmapClass, children }: { asset: CreativeAsset; heatmap?: boolean; priority?: boolean; heatmapClass?: string; children?: ReactNode }) {
  return <div className="creative-stage"><div className="creative-canvas" style={{ aspectRatio: `${asset.width} / ${asset.height}`, "--asset-ratio": asset.width / asset.height } as CSSProperties}>
    <img src={sitePath(asset.src)} alt={asset.alt} width={asset.width} height={asset.height} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} />
    {heatmap && <div className={heatmapClass ? `placeholder-heatmap ${heatmapClass}` : "placeholder-heatmap"} aria-hidden="true" />}
    {children}
  </div></div>;
}
