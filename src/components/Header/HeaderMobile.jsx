import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiGlobe } from "react-icons/bi";
import { motion } from "framer-motion";

import { navigation, subNavigation } from "constants/constants";
import Logo from "assets/icons/Logo";
import {DropdownMenu} from "components";

const HeaderMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openMenu]);

  const openMenuHandler = e => {
    e.stopPropagation();
    setOpenMenu(!openMenu);
  };

  return (
    <header className="lg:hidden w-full h-[79px] bg-white fixed top-0 z-40 drop-shadow-md">
      {/* **** Nav main */}
      <div className="flex items-center">
        <div className="w-full flex items-center justify-between h-[79px] lg:px-[90px] p-[25px] sm:px-[40px] lg:py-[20px] ">
          <div className="grow">
            <div className="max-w-[110px]">
              <Logo type="color-dark-full" className="w-full" />
            </div>
          </div>

          <div className="flex items-center sm:gap-x-[10px] lg:none">
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

        {openMenu && <DropdownMenu />}
      </div>
    </header>
  );
};

export default HeaderMobile;
