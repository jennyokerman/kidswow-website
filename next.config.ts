import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resources/english",
        destination: "/english",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
