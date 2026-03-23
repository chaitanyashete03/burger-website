/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // required for static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig;
