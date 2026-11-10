/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['maplibre-gl'],
  async redirects() {
    return [
      { source: '/services', destination: '/experience', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
