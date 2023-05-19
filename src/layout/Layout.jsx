import Head from "next/head";
import NoSSR from "utils/NoSSR";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

import {
  Header,
  HeaderMobile,
  Footer,
  FooterMobile,
  PagePreloader
} from "../components";
import { useState, useEffect } from "react";

export const Layout = ({ children, homeMenu, homeService }) => {
  const router = useRouter();
  const isMobileorTablet = useMediaQuery({ query: "(max-width: 1279px)" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content="" />
        <title>Alfa Best</title>
      </Head>

      <div className="header">
        <Header navigation={homeMenu} subNavigation={homeService} />
        <HeaderMobile navigation={homeMenu} subNavigation={homeService} />
      </div>

      <NoSSR>
        <div className="main">
          <main>{children}</main>
        </div>
      </NoSSR>

      <NoSSR>
        <div className="footer">
          {isMobileorTablet ? (
            <FooterMobile navigation={homeMenu} subNavigation={homeService} />
          ) : (
            <Footer navigation={homeMenu} subNavigation={homeService} />
          )}
        </div>
      </NoSSR>

      {loading && <PagePreloader />}
      
    </>
  );
};
