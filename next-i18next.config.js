/** @type {import('next-i18next').UserConfig} */
const path = require("path");

module.exports = {
  i18n: {
    locales: ["default", "ru", "uz"],
    defaultLocale: "default",
    localeDetection: true,
    localePath: path.resolve("./src/locales")
  }
};
