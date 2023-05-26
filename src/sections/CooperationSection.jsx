import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import Logo from "assets/icons/Logo";
import { fade, fadeIn, staggerContainer } from "utils/motions";

const CooperationSection = ({ data }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  const { image } = data;
  const [imagePath, setImagePath] = useState("");
  const isDesktop = useMediaQuery({ query: `(min-width: 1280px` });
  const [formattedText, setFormattedText] = useState("");
  const {text_uz, text_ru} = data;
  

  useEffect(() => {
    let str = process.env.NEXT_APP_STORAGE_URL + image;
    setImagePath(str.replace(/\\/g, "/"));
  }, []);

  useEffect(() => {
    if (data && locale === 'uz' && typeof window !== "undefined") {
      const data = document.createElement("div");
      data.innerHTML = text_uz;
      let targetText = data.querySelector("#tw-target-text");
      setFormattedText(targetText.innerText);
    } else {
      setFormattedText(text_ru.slice(3, -4));
    }
  }, [data])

  return (
    <motion.section
      variants={staggerContainer}
      initial={isDesktop ? "hidden" : "show"}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full mt-[79px] lg:mt-[158px] pt-[25px] lg:pt-[50px] lg:my-[80px]"
    >
      <div className="container relative">
        <motion.div
          variants={fade(0.2, 1)}
          className="w-full h-[220px] sm:h-[300px] lg:h-[500px] overflow-hidden rounded-[15px] relative"
        >
          <div className="w-full h-full">
            {imagePath && (
              <Image
                className="w-full h-full object-cover"
                src={imagePath}
                alt="services photo"
                fill
              />
            )}
          </div>

          <div className="w-full h-full top-0 bottom-0 left-0 right-0 absolute flex flex-col justify-end p-[20px] lg:p-[40px] gradient">
            <motion.div
              variants={fadeIn("right", "tween", 0.3, 1)}
              className="pb-[10px]"
            >
              <Logo type="light" />
            </motion.div>

            <motion.h2
              variants={fadeIn("right", "tween", 0.4, 1)}
              className="text-[18px] sm:text-[28px] lg:text-[34px] text-white font-bold"
            >
              {data[`title_${locale}`]}
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="content pt-[20px]"
        >
          {formattedText}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CooperationSection;
