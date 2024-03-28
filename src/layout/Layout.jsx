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

export const Layout = ({ children, mainMenu, servicesMenu }) => {
  const { locale, pathname, events } = useRouter();
  const [loading, setLoading] = useState(false);
  const [pageTitle, setPageTitle] = useState("Alfa Best");

  useEffect(() => {
    if (pathname !== "/" && mainMenu.length > 0 && servicesMenu.length > 0) {
      let allRoutes = mainMenu.concat(servicesMenu);
      let foundPath = allRoutes.find(item => item.path === pathname);

      setPageTitle(`Alfa Best | ${foundPath.title}`);
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
        <Header navigation={mainMenu} subNavigation={servicesMenu} />
        <HeaderMobile navigation={mainMenu} subNavigation={servicesMenu} />
      </div>

      <div className="main">
        <main>{children}</main>
      </div>

      <div className="footer">
        <FooterMobile navigation={mainMenu} subNavigation={servicesMenu} />
        <Footer navigation={mainMenu} subNavigation={servicesMenu} />
      </div>

      {loading && <PagePreloader />}
    </>
  );
};
