/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  i18n,
  trailingSlash: false,
  images: {
    domains: ["alfabest.napaautomotive.uz"]
  },
  env: {
    NEXT_APP_API_URL: process.env.NEXT_APP_API_URL,
    NEXT_APP_STORAGE_URL: process.env.NEXT_APP_STORAGE_URL
  },
  basePath: "",
  async rewrites() {
    return [{ source: "/", destination: "http://localhost:3000/ru", basePath: false }];
  }
};

module.exports = nextConfig
