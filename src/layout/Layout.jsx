import Head from "next/head";
import { Header, Footer, FooterMobile } from "../components";
import NoSSR from "utils/NoSSR";
import { useMediaQuery } from "react-responsive";
import HeaderMobile from "components/Header/HeaderMobile";

export const Layout = ({ children }) => {
  const isMobileorTablet = useMediaQuery({ query: "(max-width: 1279px)" });

  // const headerComponent = router.pathname == '/' ? <Header type='transparent'/> : <Header type='white' />;
  // console.log(headerComponent);
  
  

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content="" />
        <title>Alfa Best</title>
      </Head>

      <NoSSR>
        <div className="header">
          {isMobileorTablet ? <HeaderMobile /> : <Header/>}
        </div>
      </NoSSR>

      <NoSSR>
        <div className="main">
          <main>{children}</main>
        </div>
      </NoSSR>

      <NoSSR>
        <div className="footer">
          {isMobileorTablet ? <FooterMobile /> : <Footer />}
        </div>
      </NoSSR>
    </>
  );
};
