/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.ghibli.jp',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig
