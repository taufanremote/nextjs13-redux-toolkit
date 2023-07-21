/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.org",
      },
    ],
  },
};

module.exports = nextConfig;
