const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      },
      {
        source: '/collections',
        destination: '/collections/all',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
