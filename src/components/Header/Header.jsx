import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { BiGlobe } from "react-icons/bi";
import { motion } from "framer-motion";

// import {images} from "./constants";
import { navigation, subNavigation } from "constants/constants";
import Logo from "assets/icons/Logo";

const Header = () => {
  const router = useRouter();
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [navbarStyles, setNavbarStyles] = useState({
    textColor: "text-white",
    bgColor: "bg-transparent",
    borderBottomColor: "",
    shadow: "",
    divider: "bg-white",
    logoType: "light-full"
  });

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
        logoType: "light-full"
      });

      return;
    }

    setNavbarStyles({
      textColor: "",
      bgColor: "bg-white",
      borderBottomColor: "border-b-[#ECECEC]",
      shadow: "drop-shadow-md",
      divider: "bg-black",
      logoType: "dark-full"
    });
  }, []);

  useEffect(() => {
    if (clientWindowHeight > 0) {
      setNavbarStyles({
        textColor: "",
        bgColor: "bg-white",
        borderBottomColor: "border-b-[#ECECEC]",
        shadow: "drop-shadow-md",
        divider: "bg-black",
        logoType: "dark-full"
      });

      return;
    }

    /* Need to fix!!!!! */
    // setNavbarStyles({
    //   textColor: "text-white",
    //   bgColor: "bg-transparent",
    //   borderBottomColor: "",
    //   shadow: "",
    //   divider: "bg-white",
    //   logoType: "light-full"
    // });
  }, [clientWindowHeight]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full h-[141px] fixed top-0 z-50 ${navbarStyles.textColor} ${navbarStyles.bgColor}`}
      // className={`w-full h-[141px] ${navbarStyles.textColor} ${navbarStyles.bgColor}`} /* For my Laptop view dev */
    >
      {/***** Nav main *****/}
      <div
        className={`flex items-center border-solid border-b ${navbarStyles.borderBottomColor}`}
      >
        <div className="w-full flex items-center justify-between h-[79px] lg:px-[90px] p-4 lg:py-[20px] border-solid border-red-500">
          <div className="grow">
            <div className="max-w-[110px]">
              <Logo type={navbarStyles.logoType} className="w-full" />
            </div>
          </div>

          <ul className="hidden lg:flex item-center gap-x-[30px]">
            {navigation &&
              navigation.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center ease-in-out duration-300 hover:text-[#28C79E]"
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}

            <li className="language-toggler flex justify-between items-center">
              <span className="ru cursor-pointer ease-in-out duration-300">
                Ru
              </span>
              <span
                className={`mx-[8px] w-[1px] h-[16px] ${navbarStyles.divider} ease-in-out duration-300`}
              ></span>
              <span className="uz text-[#DBDBDB] cursor-pointer ease-in-out duration-300">
                Uz
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* SubNav */}
      <div
        className={`lg:w-full flex justify-between items-center h-[79px] px-[90px] py-[20px] border-solid border-b ${navbarStyles.textColor} ${navbarStyles.bgColor} ${navbarStyles.borderBottomColor} ${navbarStyles.shadow}`}
      >
        <ul className="w-full flex justify-between">
          {subNavigation &&
            subNavigation.map((item, index) => (
              <li
                key={index}
                className="text-[18px] font-bold cursor-pointer ease-in-out duration-300 hover:text-[#28C79E]"
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
