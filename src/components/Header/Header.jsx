import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiGlobe } from "react-icons/bi";
import { motion } from "framer-motion";

// import {images} from "./constants";
import { navigation, subNavigation } from "constants/constants";
import Logo from "assets/icons/Logo";
import Navbar from "components";

const Header = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [textColor, setTextColor] = useState("text-white");
  const [bgColor, setBgColor] = useState("");
  const [borderBottomColor, setBorderBottomColor] = useState('');
  const [shadow, setShadow] = useState('');
  const [divider, setDivider] = useState('bg-white');
  const [logoType, setLogoType] = useState('light-full');

  const handleScroll = (e) => {
    setClientWindowHeight(window.scrollY);
  }

  useEffect(() => {
    if (clientWindowHeight > 0) {
      setTextColor('');
      setBgColor('bg-white')
      setBorderBottomColor("border-b-[#ECECEC]");
      setShadow('drop-shadow-md');
      setDivider("bg-black");
      setLogoType('dark-full');
    } else {
      setTextColor('text-white');
      setBgColor('');
      setBorderBottomColor("border-b");
      setShadow("");
      setDivider("bg-white");
      setLogoType("light-full");
    }
  }, [clientWindowHeight]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
      
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`w-full h-[141px] fixed top-0 z-50 ${textColor} ${bgColor}`}
    >
      {/***** Nav main *****/}
      <div
        className={`flex items-center border-solid border-b ${borderBottomColor}`}
      >
        <div className="w-full flex items-center justify-between h-[79px] lg:px-[90px] p-4 lg:py-[20px] border-solid border-red-500">
          <div className="grow">
            <div className="max-w-[110px]">
              <Logo
                type={logoType}
                className="w-full"
              />
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
              <span className="ru cursor-pointer">Ru</span>
              <span className={`mx-[8px] w-[1px] h-[16px] ${divider}`}></span>
              <span className="uz text-[#DBDBDB] cursor-pointer">Uz</span>
            </li>
          </ul>
        </div>
      </div>

      {/* SubNav */}
      <div
        className={`lg:w-full flex justify-between items-center h-[79px] px-[90px] py-[20px] border-solid border-b ${textColor} ${bgColor} ${borderBottomColor} ${shadow}`}
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