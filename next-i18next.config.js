/** @type {import('next-i18next').UserConfig} */
const path = require("path");

module.exports = {
  i18n: {
    locales: ["ru", "uz"],
    defaultLocale: "ru",
    localeDetection: false,
    localePath: path.resolve("./src/locales")
  },
  
};
