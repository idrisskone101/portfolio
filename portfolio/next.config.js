/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['maplibre-gl'],
  async redirects() {
    return [
      { source: '/services', destination: '/about', permanent: false },
      { source: '/experience', destination: '/about', permanent: false },
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
