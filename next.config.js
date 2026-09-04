/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: '/js/:path*',
        headers: [
          { key: 'Content-Type', value: 'text/javascript; charset=UTF-8' },
          { key: 'Access-Control-Allow-Origin', value: '*' }
        ]
      },
      {
        source: '/assets/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
