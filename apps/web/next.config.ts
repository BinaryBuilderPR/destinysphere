import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: [
    "localhost:3000",
    "127.0.0.1:3000",
    "192.168.1.105",
    "192.168.1.105:3000",
    "192.168.56.1:3000",
    "*.local",
  ],
};

export default nextConfig;
