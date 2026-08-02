/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable filesystem cache in dev to prevent disk space issues
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;