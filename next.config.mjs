// @ts-check

import { withPlausibleProxy } from "next-plausible";

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

export default withPlausibleProxy()(nextConfig);
