import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./ux.css";
import "./product.css";
import { sitePath } from "./site-path";

const editorial = Fraunces({ variable: "--font-editorial", subsets: ["latin"], display: "swap" });
const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "NeuroVision — AI Creative Testing Before Launch",
    template: "%s — NeuroVision",
  },
  description:
    "Upload an ad, website screenshot or packaging design. Predict attention, explore AI audience feedback and improve your creative before launch.",
  icons: { icon: sitePath("/logo.webp"), shortcut: sitePath("/logo.webp") },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} ${editorial.variable}`}><a className="skip-link" href="#main-content">Skip to content</a>{children}</body>
    </html>
  );
}
