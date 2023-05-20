/** @type {import('next-i18next').UserConfig} */
const HttpBackend = require("i18next-http-backend/cjs");
const ChainedBackend = require("i18next-chained-backend").default;
const LocalStorageBackend = require("i18next-localstorage-backend").default;
const path = require("path");

module.exports = {
  // backend: {
  //   backendOptions: [
  //     { expirationTime: 60 * 60 * 1000 },
  //     {
  //       /* loadPath: 'https:// somewhere else' */
  //     }
  //   ], // 1 hour
  //   backends:
  //     typeof window !== "undefined" ? [LocalStorageBackend, HttpBackend] : []
  // },
  i18n: {
    locales: ["ru", "uz"],
    defaultLocale: "ru",
    localeDetection: false,
    localePath: path.resolve("./src/locales")
  },
  // serializeConfig: false,
  // use: typeof window !== "undefined" ? [ChainedBackend] : []
};
