// @ts-check

const { withPlausibleProxy } = require("next-plausible");

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  compiler: {
    reactRemoveProperties: true,
    removeConsole: true,
  },
  poweredByHeader: false,
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = withPlausibleProxy()(nextConfig);
