import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

const nextConfig: NextConfig = githubPages
  ? {
      output: "export",
      trailingSlash: true,
      basePath,
      typescript: {
        // The Vinext checkout includes Cloudflare Worker-only globals that the
        // standard Next.js type checker cannot resolve during a static export.
        // The application itself is type-checked by the verified Sites build.
        ignoreBuildErrors: true,
      },
    }
  : {};

export default nextConfig;
