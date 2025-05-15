import nextPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    optimizeCss: false, // 👈 disable Lightning CSS
  },
};

export default nextPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})(config);
