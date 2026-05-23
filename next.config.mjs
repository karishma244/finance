/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  eslint: {
    // Skip ESLint during production builds on Vercel to avoid
    // serialization issues with custom ESLint configs.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
