// Import env here to validate during build. Using jiti we can import .ts files :)
import("./src/env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   missingSuspenseWithCSRBailout: false,
  // },
  images: {
    unoptimized: true,
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/:path*{/}?",
  //       headers: [
  //         {
  //           key: "X-Accel-Buffering",
  //           value: "no",
  //         },
  //       ],
  //     },
  //   ];
  // },
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
