import { appWithTranslation } from "next-i18next";
import nextI18nConfig from "../../next-i18next.config";

import '../styles/globals.scss';

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default appWithTranslation(App, nextI18nConfig);
