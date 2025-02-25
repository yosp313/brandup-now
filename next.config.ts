import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placeholder.pics",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
