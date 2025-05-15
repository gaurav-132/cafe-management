<<<<<<< HEAD
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
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
  };
  
  export default nextConfig;
  
>>>>>>> 045606bf9a3e49cb86e7ecf7fcbb1c5fe91ffaab
