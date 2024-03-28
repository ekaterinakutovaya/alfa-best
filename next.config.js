/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  i18n,
  trailingSlash: false,
  images: {
    domains: ["127.0.0.1"]
  },
  env: {
    NEXT_APP_API_URL: process.env.NEXT_APP_API_URL,
    NEXT_APP_STORAGE_URL: process.env.NEXT_APP_STORAGE_URL
  }
};

module.exports = nextConfig
