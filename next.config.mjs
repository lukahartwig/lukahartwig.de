// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
	experimental: {
		reactCompiler: true,
		ppr: true,
	},
	poweredByHeader: false,
	reactStrictMode: true,
};

export default nextConfig;
