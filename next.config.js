/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify:false,
    rewrites: async () => {
      return [
        {
          source: "/api/:path*",
          destination:
            process.env.NODE_ENV === "development"
              ? "http://127.0.0.1:8000/api/:path*"
              : "https://joeprathappj-lstmchurn.hf.space/",
        },
        {
          source: "/docs",
          destination:
            process.env.NODE_ENV === "development"
              ? "http://127.0.0.1:8000/docs"
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