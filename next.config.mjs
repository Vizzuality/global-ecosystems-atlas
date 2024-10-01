// Import env here to validate during build. Using jiti we can import .ts files :)
import("./src/env.mjs");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/atlas/:path*",
        destination: "/coming-soon",
        permanent: false,
      },
      {
        source: "/stories/:path*",
        destination: "/coming-soon",
        permanent: false,
      },
      {
        source: "/data/:path*",
        destination: "/coming-soon",
        permanent: false,
      },
      {
        source: "/resources",
        destination: "/coming-soon",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
