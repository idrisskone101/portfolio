/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['maplibre-gl'],
  async redirects() {
    return [
      { source: '/services', destination: '/about', permanent: false },
      { source: '/experience', destination: '/about', permanent: false },
      { source: '/news/:path*', destination: '/blog', permanent: false },
      { source: '/news', destination: '/blog', permanent: false },
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
