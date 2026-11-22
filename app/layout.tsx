import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import "./ux.css";
import "./tokens.css";
import "./additions.css";
import "./brand.css";
import { sitePath } from "./site-path";

// Type uses the system fonts: San Francisco on Apple devices, Segoe UI on
// Windows (see brand.css), so no web fonts are downloaded.

export const metadata: Metadata = {
  title: {
    default: "NeuroVision — AI Creative Testing Before Launch",
    template: "%s — NeuroVision",
  },
  description:
    "Test ads, websites, packaging and product listings before launch with attention prediction, AI audience surveys, A/B Testing, Digital Shelf and Generative Studio. Pay as you go, with no subscription.",
  icons: { icon: sitePath("/logo.webp"), shortcut: sitePath("/logo.webp") },
};

// Background images for brand.css. Set here so the paths include the GitHub Pages base path.
const brandImages = {
  "--grain-gradient": `url(${sitePath("/assets/brand/grain-gradient.webp")})`,
  "--grain-noise": `url(${sitePath("/assets/brand/grain-noise.webp")})`,
} as CSSProperties;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={brandImages}><a className="skip-link" href="#main-content">Skip to content</a>{children}</body>
    </html>
  );
}
