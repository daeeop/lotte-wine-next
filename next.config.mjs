/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['styles'],
    prependData:
      "@import'public/styles/base/_variables.scss'; @import'public/styles/abstract/_mixin.scss'; @import'public/styles/abstract/_typograph.scss';",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
