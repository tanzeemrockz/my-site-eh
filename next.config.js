/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/club',
        destination: 'https://club.cyberslayercorpz.dev',
        permanent: false,
      },
      {
        source: '/club/:path*',
        destination: 'https://club.cyberslayercorpz.dev/:path*',
        permanent: false,
      },
      {
        source: '/demo',
        destination: 'https://demo.cyberslayercorpz.dev',
        permanent: false,
      },
      {
        source: '/demo/:path*',
        destination: 'https://demo.cyberslayercorpz.dev/:path*',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      { source: '/assetslayer', destination: '/assetslayer/index.html' },
      { source: '/cybershell', destination: '/cybershell/index.html' },
      { source: '/cybertab', destination: '/cybertab/index.html' },
    ];
  },
};

module.exports = nextConfig;
