import Head from "next/head";
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
  const { locale, pathname, events } = useRouter();
  const [loading, setLoading] = useState(false);
  const [pageTitle, setPageTitle] = useState("Alfa Best");
  

  useEffect(() => {
    if (pathname !== "/" && homeMenu.length > 0 && homeService.length > 0) {
      let allRoutes = homeMenu.concat(homeService);
      let title = allRoutes.find(item => item.link == pathname.substring(1))[`title_${locale}`];

      setPageTitle(`Alfa Best | ${title}`);
    } else {
      setPageTitle('Alfa Best')
    }
  });

  useEffect(() => {
    events.on("routeChangeStart", () => {
      setLoading(true);
    });

    events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content="" />
        <title>{pageTitle || 'Alfa Best'}</title>
      </Head>

      <div className="header">
        <Header navigation={homeMenu} subNavigation={homeService} />
        <HeaderMobile navigation={homeMenu} subNavigation={homeService} />
      </div>

      <div className="main">
        <main>{children}</main>
      </div>

      <div className="footer">
        <FooterMobile navigation={homeMenu} subNavigation={homeService} />
        <Footer navigation={homeMenu} subNavigation={homeService} />
      </div>

      {loading && <PagePreloader />}
    </>
  );
};
