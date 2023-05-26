import React from "react";
import { useTranslation } from "next-i18next";
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence, animate } from "framer-motion";

import { images } from "constants";
import popupImage from "../assets/images/popup.png";

const QueryConfirmation = ({ setPopupOpen }) => {
  const { t } = useTranslation("");

  return (
    <AnimatePresence>
      <motion.div
        className="w-full max-w-[700px] bg-white rounded-[20px] px-[15px] lg:px-[30px] pt-[15px] lg:pt-[30px] pb-[68px] lg:pb-[30px] flex flex-col gap-y-[12px] lg:relative"
        initial={{ y: "-100", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{
          opacity: 0,
          y: "-100",
          transition: {
            ease: "easeInOut",
            duration: 1,
            delay: 1.2
          }
        }}
      >
        <button
          onClick={e => setPopupOpen(false)}
          className="w-[42px] h-[42px] bg-[rgba(0,44,99,0.25)] lg:hover:bg-green active:bg-green focus:bg-green ease-in-out duration-300 rounded-full flex justify-center items-center self-end lg:cursor-pointer lg:absolute top-[30px] right-[30px] z-50"
        >
          <CgClose className="text-[26px] text-white" />
        </button>

        <div className="w-full flex flex-col items-center">
          <div className="text-[16px] font-bold leading-[140%] text-center">
            {t("query_success")}
          </div>
          <div className="text-[16px] text-green font-bold leading-[140%] text-center">
            {t("we_will_connect")}
          </div>

          <div className="mt-[20px]">
            <img src={popupImage.src} alt="popup photo" />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QueryConfirmation;
