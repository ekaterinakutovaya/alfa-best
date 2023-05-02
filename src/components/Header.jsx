import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BiGlobe } from "react-icons/bi";
import { motion } from "framer-motion";

// import {images} from "./constants";
import logoBlack from "../assets/images/logo_black.png";
import Logo from "../assets/icons/Logo";
import Figure from "../assets/icons/Figure";
import { Accordeon } from ".";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [vh, setVh] = useState("");

  const openMenuHandler = e => {
    console.log(e.target);

    e.stopPropagation();
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setVh(window.innerHeight);
    }
  }, []);

  useEffect(() => {
    const hadnleResize = e => {
      setVh(e.target.innerHeight);
    };

    window.addEventListener("resize", hadnleResize);

    return () => {
      window.removeEventListener("resize", hadnleResize);
    };
  }, []);

  return (
    <header className="w-full h-[79px] p-4">
      <nav className="w-full flex justify-between">
        <div className="">
          <div className="max-w-[110px]">
            <Logo type="dark" className="w-full" />
          </div>
        </div>

        <div className='flex'>
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

        
      </nav>

      {openMenu && (
        <motion.div
          // whileInView={{ x: [100, 0] }}
          initial={{ height: 0 }}
          animate={{ height: `${vh - 79}px` }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <div
            className="w-full fixed right-0 bottom-0 z-50 bg-white"
            style={{ height: `${vh - 79}px` }}
          >
            <div className="w-full h-full relative p-5">
              <Accordeon />
              <Figure className="absolute bottom-[20%] right-[-8%]" />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
