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

export default nextConfig;
