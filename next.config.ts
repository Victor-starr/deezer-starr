import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TODO: This configuration currently includes a list of image domains for development purposes.
  // Once the UI design is complete and images are fetched and placed from the API,
  // consider removing these external image domains to enhance security and maintain control over image sources.
  images: {
    domains: ["i1.sndcdn.com"],
  },
};

export default nextConfig;
