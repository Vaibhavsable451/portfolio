/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static HTML export
    output: 'export',

    // Enable React strict mode
    reactStrictMode: true,

    // Configure page extensions
    pageExtensions: ["tsx", "ts", "jsx", "js"],

    // Optimize images
    images: {
        unoptimized: true, // Required for static export
        domains: [],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Configure webpack
    webpack: (config) => {
        // Important: return the modified config
        return config;
    },

    // Configure headers for better security

};

module.exports = nextConfig;