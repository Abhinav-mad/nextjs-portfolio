/** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: true,
  images: {
        remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ], // Add your allowed image domains here
  },
};

export default nextConfig;
