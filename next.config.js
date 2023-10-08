/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify:false,
    rewrites: async () => {
      return [
        {
          source: "/api/:path*",
          destination:
            process.env.NODE_ENV === "development"
              ? "https://lstmchurn-e4k8.onrender.com/api/:path*"
              : "https://lstmchurn-e4k8.onrender.com/api/:path*",
        },
        {
          source: "/docs",
          destination:
            process.env.NODE_ENV === "development"
              ? "https://lstmchurn-e4k8.onrender.com/docs"
              : "https://lstmchurn-e4k8.onrender.com/docs",
        },
        {
          source: "/openapi.json",
          destination:
            process.env.NODE_ENV === "development"
              ? "https://lstmchurn-e4k8.onrender.com/openapi.json"
              : "https://lstmchurn-e4k8.onrender.com/openapi.json",
        },
        {
          source: "/api",
          destination:
            process.env.NODE_ENV === "development"
              ? "https://lstmchurn-e4k8.onrender.com/api"
              : "https://lstmchurn-e4k8.onrender.com/api",
        },
      ];
    },
  };
  
  module.exports = nextConfig;