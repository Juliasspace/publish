/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Disable built-in image optimization to avoid 400 errors with local placeholders
    unoptimized: true,
  },
}

module.exports = nextConfig
