/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  experimental: {
    appDir: true,
  },
  images: {
    domains:[
      'res.cloudinary.com', 
      "avatars.githubusercontent.com",
      'lh3.googleusercontent.com'
    ]
  }
}

module.exports = nextConfig
