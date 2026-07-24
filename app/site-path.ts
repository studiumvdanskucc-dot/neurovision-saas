const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

/**
 * Prefix files from /public when the static site is hosted below a repository
 * path on GitHub Pages. Next.js handles basePath for <Link>, but plain <img>
 * elements and metadata URLs need the prefix explicitly.
 */
export function sitePath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
