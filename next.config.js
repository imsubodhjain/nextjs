/** @type {import('next').NextConfig} */
const nextConfig = {

  output: "export",
  basePath: "/nextjs",
  assetPrefix: "/nextjs/",
  images: {
     unoptimized: true,
  },
};

module.exports = nextConfig;
