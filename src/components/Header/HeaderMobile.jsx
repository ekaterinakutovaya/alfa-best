import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BiGlobe } from "react-icons/bi";
import { motion } from "framer-motion";

import Logo from "assets/icons/Logo";
import {DropdownMenu, LanguageToggler} from "components";

const HeaderMobile = ({ navigation, subNavigation }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { locale } = useRouter();
  

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
    <div className="block lg:hidden w-full h-[79px] bg-white fixed top-0 z-40 drop-shadow-md">
      {/* **** Nav main */}
      <div className="flex items-center">
        <div className="w-full flex items-center justify-between h-[79px] lg:px-[90px] p-[25px] sm:px-[40px] lg:py-[20px] ">
          <div className="grow">
            <div className="max-w-[110px]">
              <Logo type="color-dark-full" className="w-full" />
            </div>
          </div>

          <div className="flex items-center sm:gap-x-[10px] lg:none">
            {/* <div className="w-[45px] h-[45px] border border-solid border-lightGrey rounded-full flex justify-center items-center">
              <BiGlobe className="fill-grey" />
            </div> */}

            <LanguageToggler divider={"bg-black"} />

            <div className="px-3"></div>

            <button
              className="flex justify-center items-center"
              onClick={openMenuHandler}
            >
              <div className={openMenu ? "toggle active" : "toggle"}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      {openMenu && <DropdownMenu items={{ navigation, subNavigation }} />}
    </div>
  );
};

export default HeaderMobile;
