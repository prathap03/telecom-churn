/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify:false,
    rewrites: async () => {
      return [
        {
          source: "/api/:path*",
          destination:
            process.env.NODE_ENV === "development"
              ? "https://joeprathappj-lstmchurn.hf.space/api/:path*"
              : "https://joeprathappj-lstmchurn.hf.space/api/:path*",
        },
        {
          source: "/docs",
          destination:
            process.env.NODE_ENV === "development"
              ? "https://joeprathappj-lstmchurn.hf.space/"
              : "https://joeprathappj-lstmchurn.hf.space/docs",
        },
        {
          source: "/openapi.json",
          destination:
            process.env.NODE_ENV === "development"
              ? "http://127.0.0.1:8000/openapi.json"
              : "https://joeprathappj-lstmchurn.hf.space/openapi.json",
        },
      ];
    },
  };
  
  module.exports = nextConfig;