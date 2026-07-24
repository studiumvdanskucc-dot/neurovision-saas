import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("out");
const basePath =
  (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

if (!basePath.startsWith("/")) {
  throw new Error(
    "NEXT_PUBLIC_BASE_PATH must start with / when validating GitHub Pages.",
  );
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(entryPath)));
    else files.push(entryPath);
  }

  return files;
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

const htmlFiles = (await walk(outputDirectory)).filter((file) =>
  file.endsWith(".html"),
);
const failures = [];

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, "utf8");
  const references = html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g);

  for (const [, reference] of references) {
    if (!reference.startsWith("/")) continue;

    if (
      reference !== basePath &&
      !reference.startsWith(`${basePath}/`)
    ) {
      failures.push(
        `${path.relative(outputDirectory, htmlFile)} uses an unprefixed URL: ${reference}`,
      );
      continue;
    }

    const withoutBasePath = reference.slice(basePath.length);
    const cleanPath = decodeURIComponent(
      withoutBasePath.split(/[?#]/, 1)[0],
    );
    let artifactPath = path.join(outputDirectory, cleanPath);

    if (cleanPath.endsWith("/")) {
      artifactPath = path.join(artifactPath, "index.html");
    }

    if (!(await exists(artifactPath))) {
      failures.push(
        `${path.relative(outputDirectory, htmlFile)} references a missing artifact: ${reference}`,
      );
    }
  }
}

if (failures.length > 0) {
  throw new Error(`GitHub Pages export validation failed:\n${failures.join("\n")}`);
}

console.log(
  `Validated ${htmlFiles.length} HTML files for GitHub Pages at ${basePath}/`,
);
