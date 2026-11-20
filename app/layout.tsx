import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import "./ux.css";
import "./tokens.css";
import "./additions.css";
import "./brand.css";
import { sitePath } from "./site-path";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

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
      <body className={`${sans.variable} ${mono.variable}`} style={brandImages}><a className="skip-link" href="#main-content">Skip to content</a>{children}</body>
    </html>
  );
}
