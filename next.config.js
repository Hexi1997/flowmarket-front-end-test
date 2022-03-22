/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
