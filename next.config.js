/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // your existing setting
  images: {
    unoptimized: true,  // <-- disables the default Image Optimization API
  },
};

module.exports = nextConfig;
