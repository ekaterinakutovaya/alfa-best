import Head from "next/head";
import { Header, Footer, FooterMobile } from "../components";
import NoSSR from "utils/NoSSR";
import { useMediaQuery } from "react-responsive";

export const Layout = ({ children }) => {
  const isMobileorTablet = useMediaQuery({ query: "(max-width: 1279px)" });


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content="" />
        <title>Alfa Best</title>
      </Head>

      <NoSSR>
        <Header />
      </NoSSR>

      <NoSSR>
        <main>{children}</main>
      </NoSSR>

      <NoSSR>
        {isMobileorTablet ? <FooterMobile /> : <Footer />}
        
      </NoSSR>
    </>
  );
};
