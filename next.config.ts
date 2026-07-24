import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = githubPages
  ? {
      output: "export",
      trailingSlash: true,
      typescript: {
        // The Vinext checkout includes Cloudflare Worker-only globals that the
        // standard Next.js type checker cannot resolve during a static export.
        // The application itself is type-checked by the verified Sites build.
        ignoreBuildErrors: true,
      },
    }
  : {};

export default nextConfig;
