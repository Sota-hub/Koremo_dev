/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "drive.google.com",
      "/koremo-client.vercel.app",
      "https://koremo-server.onrender.com",
    ],
    path: "/_next/images",
  },
};

module.exports = nextConfig;
