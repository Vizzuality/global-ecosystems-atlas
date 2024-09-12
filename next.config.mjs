// Import env here to validate during build. Using jiti we can import .ts files :)
import("./src/env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/data",
        destination: "/data/methodology",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
