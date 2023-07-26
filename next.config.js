/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",
      "pbs.twimg.com",
      "www.coliseugeek.com.br",
      "placeimg.com",
      "cdn1.iconfinder.com",
      "i.ebayimg.com",
      "www.pratik.com.ua",
    ],
  },
};

module.exports = nextConfig;
