/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",
      "pbs.twimg.com",
      "www.coliseugeek.com.br",
      "placeimg.com",
    ],
  },
};

module.exports = nextConfig;
