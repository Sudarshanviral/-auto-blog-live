/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['storage.googleapis.com', 'via.placeholder.com'],
    unoptimized: true,
  },
  output: 'export',
}

module.exports = nextConfig
