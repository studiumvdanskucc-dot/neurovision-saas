import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { sitePath } from "./site-path";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "NeuroVision — Predictive Design Intelligence",
    template: "%s — NeuroVision",
  },
  description:
    "Predict attention, simulate audience interpretation and generate stronger creative before launch.",
  other: { "codex-preview": "development" },
  icons: { icon: sitePath("/logo.webp"), shortcut: sitePath("/logo.webp") },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
