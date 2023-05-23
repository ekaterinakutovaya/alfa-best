import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import Logo from "assets/icons/Logo";
import {
  Gallery,
  Advantages,
  ServicesDescription,
  HappyPartners
} from "sections";
import { fade, fadeIn, staggerContainer } from "utils/motions";

const ServicesPageWrapper = ({
  title,
  text,
  image,
  servicesDescription,
  advantages,
  gallery
}) => {
  const { locale, pathname } = useRouter();
  const { t } = useTranslation("");
  const [imagePath, setImagePath] = useState("");
  const [formattedText, setFormattedText] = useState("");
  const isDesktop = useMediaQuery({ query: `(min-width: 1280px` });

  useEffect(() => {
    if (
      text &&
      locale === "uz" &&
      pathname === "/engineering" &&
      typeof window !== "undefined"
    ) {
      const data = document.createElement("div");
      data.innerHTML = text;
      let targetText = data.querySelector("#tw-target-text");
      setFormattedText(targetText.innerText);
    } else {
      setFormattedText(text.slice(3, -4));
    }
  }, [text]);

  useEffect(() => {
    let str = process.env.NEXT_APP_STORAGE_URL + image;
    setImagePath(str.replace(/\\/g, "/"));
  }, []);

  return (
    <motion.section
      variants={staggerContainer}
      initial={isDesktop ? "hidden" : "show"}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full mt-[79px] lg:mt-[158px] pt-[25px] lg:py-[50px]"
    >
      <div className="container relative">
        <motion.div
          variants={fade(0.2, 1)}
          className="w-full h-[220px] lg:h-[500px] overflow-hidden rounded-[15px] relative"
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
              className="text-[18px] lg:text-[34px] text-white font-bold"
            >
              {title}
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
        className="pt-[20px] text-[17px]">
          <p>{formattedText}</p>
        </motion.div>

        {servicesDescription.length ? (
          <div className="lg:mt-[60px]">
            <ServicesDescription data={servicesDescription} />
          </div>
        ) : (
          ""
        )}
      </div>

      <HappyPartners
        title={t("with_our_partners_title")}
        text={t("with_our_partners_text")}
      />

      <div className="lg:my-[30px]">
        <Advantages data={advantages} />
      </div>

      <Gallery data={gallery} />
    </motion.section>
  );
};

export default ServicesPageWrapper;
