import { BASE_SITE_URL } from "./site-config";

export const LOCAL_DEVELOPMENT_URL = "http://localhost:3000";

function normalizeUrl(url: string) {
  return url.replace(/\/+$/, "");
}

export function getRegistryUrl() {
  // Explicit override takes priority.
  const customUrl = process.env.NEXT_PUBLIC_REGISTRY_URL;

  if (customUrl) {
    return normalizeUrl(customUrl);
  }

  // Vercel deployments.
  if (process.env.VERCEL) {
    const environment = process.env.VERCEL_ENV;

    if (environment === "production") {
      return normalizeUrl(
        `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? BASE_SITE_URL.replace(/^https?:\/\//, "")}`
      );
    }

    if (environment === "preview") {
      const deploymentUrl =
        process.env.VERCEL_BRANCH_URL ?? process.env.VERCEL_URL;

      if (deploymentUrl) {
        return normalizeUrl(`https://${deploymentUrl}`);
      }
    }
  }

  // Local development / fallback.
  return process.env.NODE_ENV === "production"
    ? normalizeUrl(BASE_SITE_URL)
    : LOCAL_DEVELOPMENT_URL;
}
