// @ts-check

import { withPlausibleProxy } from "next-plausible";

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  poweredByHeader: false,
  swcMinify: true,
  reactStrictMode: true,
};

export default withPlausibleProxy()(nextConfig);
