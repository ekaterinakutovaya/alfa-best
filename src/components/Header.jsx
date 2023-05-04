import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiGlobe } from "react-icons/bi";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

// import {images} from "./constants";
import { navigation, subNavigation } from "../constants/constants";
import Logo from "../assets/icons/Logo";
import Navbar from "./Navbar";

const Header = () => {
  const [whiteNavbar, setWhiteNavbar] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const isMobileorTablet = useMediaQuery({ query: "(max-width: 1279px)" });

  const navbarDesktopTransparent =
    "w-full h-[141px] fixed top-0 z-50 text-white";
  const navbarMobileWhite = "w-full h-[79px] bg-white";

  useEffect(() => {
    // let name = 'doni'
    // let gender = "male";
    // let result = {[name]:gender}
    // console.log(result, "result");
  }, []);

  const openMenuHandler = e => {
    e.stopPropagation();
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setWhiteNavbar(window.pageXOffset > 200)
      );
    }
  }, []);

  return (
    <header
      className={
        isMobileorTablet ? navbarMobileWhite : navbarDesktopTransparent
      }
    >
      {/* **** Nav main */}
      <div className="flex items-center border-solid border-b">
        <div className="w-full flex items-center justify-between h-[79px] lg:px-[90px] p-4 lg:py-[20px] border-solid border-red-500">
          <div className="grow">
            <div className="max-w-[110px]">
              <Logo
                type={whiteNavbar ? "dark-full" : "light-full"}
                className="w-full"
              />
            </div>
          </div>

          {isMobileorTablet && (
            <div className="flex items-center lg:none">
              <div className="w-10 h-10 border border-solid border-lightGrey rounded-full flex justify-center items-center">
                <BiGlobe className="fill-grey" />
              </div>

              <div className="px-1"></div>

              <button className="flex justify-center items-center">
                <div
                  onClick={openMenuHandler}
                  className={openMenu ? "toggle active" : "toggle"}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
          )}

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
              <span className="ru cursor-pointer">Ru</span>
              <span className="mx-[8px] w-[1px] h-[16px] bg-white"></span>
              <span className="uz text-[#DBDBDB] cursor-pointer">Uz</span>
            </li>
          </ul>
        </div>

        {openMenu && <Navbar />}
      </div>

      {/* SubNav */}
      <div className="w-full flex justify-between h-[79px] px-[90px] py-[20px]">
        <ul className="w-full flex justify-between">
          {subNavigation &&
            subNavigation.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer ease-in-out duration-300 hover:text-[#28C79E]"
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
