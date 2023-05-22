import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion} from "framer-motion";

import Logo from "assets/icons/Logo";
import { LanguageToggler } from "components";
import { navVariants } from "../../utils/motions";

const Header = ({navigation, subNavigation}) => {  
  const router = useRouter();
  const { locale } = useRouter();
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  

  const [navbarStyles, setNavbarStyles] = useState({
    textColor: "text-white",
    bgColor: "bg-transparent",
    borderBottomColor: "",
    shadow: "",
    divider: "bg-white",
    logoType: "color-light-full"
  });

  const idleLink =
    "flex items-center ease-in-out duration-300 font-semibold hover:text-[#28C79E]";
  const activeLink =
    "flex items-center ease-in-out duration-300 font-semibold text-green";

  const subNavLinkIdle = 'text-[18px] font-bold cursor-pointer ease-in-out duration-300 hover:text-[#28C79E]';
  const subNavLinkActive = 'text-[18px] font-bold cursor-pointer ease-in-out duration-300 text-[#28C79E]';

  const handleScroll = e => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    if (router.pathname == "/") {
      setNavbarStyles({
        textColor: "text-white",
        bgColor: "bg-transparent",
        borderBottomColor: "",
        shadow: "",
        divider: "bg-white",
        logoType: "color-light-full"
      });

      return;
    }

    setNavbarStyles({
      textColor: "",
      bgColor: "bg-white",
      borderBottomColor: "border-b-[#ECECEC]",
      shadow: "drop-shadow-md",
      divider: "bg-black",
      logoType: "color-dark-full"
    });
  }, []);

  useEffect(() => { 
    if (router.pathname === "/") {
      if (clientWindowHeight > 0) {
        setNavbarStyles({
          textColor: "",
          bgColor: "bg-white",
          borderBottomColor: "border-b-[#ECECEC]",
          shadow: "drop-shadow-md",
          divider: "bg-black",
          logoType: "color-dark-full"
        });

        return;
      }

      setNavbarStyles({
      textColor: "text-white",
      bgColor: "bg-transparent",
      borderBottomColor: "",
      shadow: "",
      divider: "bg-white",
      logoType: "color-light-full"
    });
    }
    
  }, [clientWindowHeight]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`hidden lg:block sm:w-full h-[141px] lg:fixed top-0 z-50 ${navbarStyles.textColor} ${navbarStyles.bgColor}`}
    >
        {/***** Nav main *****/}
        <div
          className={`flex items-center border-solid border-b ${navbarStyles.borderBottomColor}`}
        >
          <div className="w-full flex items-center justify-between h-[79px] lg:px-[90px] p-4 lg:py-[20px] border-solid border-red-500">
            <div className="grow">
              <div className="max-w-[153px] ">
                <Logo
                  type={navbarStyles.logoType}
                  className="w-full ease-in-out duration-300 hover:drop-shadow-xl"
                />
              </div>
            </div>

            <div className="hidden lg:flex item-center gap-x-[30px]">
              {navigation &&
                navigation.map((item, index) => (
                  <div
                    key={index}
                    className={
                      router.pathname == `/${item.link}` ? activeLink : idleLink
                    }
                  >
                    <Link href={`/${locale}/${item.link}`} locale={locale}>
                      {item[`title_${locale}`]}
                    </Link>
                  </div>
                ))}

              <LanguageToggler divider={navbarStyles.divider} />
            </div>
          </div>
        </div>

        {/* SubNav */}
        <div
          className={`lg:w-full flex justify-between items-center h-[79px] px-[90px] py-[20px] border-solid border-b ${navbarStyles.textColor} ${navbarStyles.bgColor} ${navbarStyles.borderBottomColor} ${navbarStyles.shadow}`}
        >
          <div className="w-full flex justify-between">
            {subNavigation &&
              subNavigation.map((item, index) => (
                <div
                  key={index}
                  className={
                    router.pathname == `/${item.link}`
                      ? subNavLinkActive
                      : subNavLinkIdle
                  }
                >
                  <Link href={`/${locale}/${item.link}`} locale={locale}>
                    {item[`title_${locale}`]}
                  </Link>
                </div>
              ))}
          </div>
        </div>
    </motion.header>
  );
};

export default Header;

