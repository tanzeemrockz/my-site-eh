/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/assetslayer', destination: '/assetslayer/index.html' },
      { source: '/cybershell', destination: '/cybershell/index.html' },
      { source: '/cybertab', destination: '/cybertab/index.html' },
    ];
  },
};

module.exports = nextConfig;
