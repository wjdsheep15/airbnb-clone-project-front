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
    domains: ['a0.muscache.com'],
  }
  
}

export default nextConfig;
