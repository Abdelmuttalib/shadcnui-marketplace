const PRODUCTION_URL = "https://shadcnmarketplace.com";
const LOCAL_URL = "http://localhost:3000";

export function getSiteRegistryUrl(): string {
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  // Local development
  if (process.env.NODE_ENV === "development") {
    return LOCAL_URL;
  }

  // Vercel Preview deployments
  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`.replace(/\/+$/, "");
  }

  // Production and fallback
  return PRODUCTION_URL;
}
