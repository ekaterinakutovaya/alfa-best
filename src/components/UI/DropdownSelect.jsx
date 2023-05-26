import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const DropdownSelect = ({ items, onClick, visible, setVisible, label }) => {
  const { locale } = useRouter();
  const ref = useRef(null);

  const variants = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
        delay: 1.2
      }
    }
  };

  const toggleList = e => {
    setVisible(prevVisible => !prevVisible);
  };

  useEffect(() => {
    document.addEventListener("click", globalClickListener);

    return () => {
      document.removeEventListener("click", globalClickListener);
    };
  }, [visible]);

  const globalClickListener = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setVisible(false);
    }
  };

  return (
    <div className="w-full relative" ref={ref}>
      {/* Input */}
      <div
        className="w-full flex items-center justify-between min-h-[48px] py-[13.5px] px-[15px] bg-transparent border-solid border  rounded-[15px] lg:cursor-pointer"
        onClick={e => toggleList(e)}
      >
        {label}
        {visible ? (
          <BsCaretUpFill pointerEvents="none" />
        ) : (
          <BsCaretDownFill pointerEvents="none" className="mt-[4px]" />
        )}
      </div>

      <AnimatePresence>
        {visible ? (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{
              opacity: 0,
              transition: {
                ease: "easeInOut",
                duration: 0.3
              }
            }}
            className="w-full py-[10px] mt-[10px] bg-[#F2FCF9] border-solid border border-black rounded-[15px] absolute top-[100%] left-0 z-10"
          >
            {items &&
              items.map((item, index) => (
                <li
                  className="p-[20px] ease duration-100 hover:bg-green hover:text-white focus:bg-green focus:text-white lg:cursor-pointer"
                  key={index}
                  data-index={index}
                  onClick={onClick}
                >
                  {item[`title_${locale}`]}
                </li>
              ))}
          </motion.ul>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownSelect;
