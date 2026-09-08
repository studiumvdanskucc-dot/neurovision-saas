import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./ux.css";
import { sitePath } from "./site-path";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "NeuroVision — AI Creative Testing Before Launch",
    template: "%s — NeuroVision",
  },
  description:
    "Test ads, websites and packaging before launch with attention prediction, AI audience simulations and creative improvement.",
  other: { "codex-preview": "development" },
  icons: { icon: sitePath("/logo.webp"), shortcut: sitePath("/logo.webp") },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable}`}><a className="skip-link" href="#main-content">Skip to content</a>{children}</body>
    </html>
  );
}
