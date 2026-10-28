import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  // Active only for explicit baseline runs: ANALYZE=true pnpm build.
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    };
    return config;
  },

  transpilePackages: ["shiki"],

  images: {
    domains: ["images.unsplash.com"],
  },
};

export default withBundleAnalyzer(nextConfig);
