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
        source: "/atlas",
        destination: "/coming-soon",
        permanent: true,
      },
      {
        source: "/stories/:path*",
        destination: "/coming-soon",
        permanent: true,
      },
      {
        source: "/data/:path*",
        destination: "/coming-soon",
        permanent: true,
      },
      {
        source: "/resources",
        destination: "/coming-soon",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
