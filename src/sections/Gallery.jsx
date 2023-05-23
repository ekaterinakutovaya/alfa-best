import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { images } from "constants";
import Logo from "assets/icons/Logo";
import { ControlButton } from "components";
import { fade, fadeIn, staggerContainer } from "../utils/motions";

const Gallery = ({ data }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  const isDesktop = useMediaQuery({ query: `(min-width: 1280px` });

  const breakpoints = {
    375: {
      slidesPerView: 2,
      spaceBetween: 260
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 350
    }
  };

  const prevHandler = () => {};

  const nextHandler = () => {};

  return (
    <motion.section
      variants={staggerContainer}
      initial={isDesktop ? "hidden" : "show"}
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      className="w-full my-[50px] lg:my-[80px] select-none"
    >
      <div className="gallery-container">
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 1)}
          className="flex justify-between items-end"
        >
          <div>
            <div className="">
              <Logo type="dark" />
            </div>

            <h2 className="text-[18px] lg:text-[34px] font-bold pt-[10px]">
              {t("photo_gallery")}
            </h2>
          </div>

          <div className="hidden controls lg:flex items-center gap-x-[20px] pb-[8px]">
            <ControlButton type="prev" onClick={prevHandler} disabled={false} />
            <ControlButton type="next" onClick={nextHandler} disabled={false} />
          </div>
        </motion.div>

        {/* Swiper */}
        {/* <div className="pl-[25px] lg:pl-[0] lg:py-[0] lg:px-[90px] lg:my-[0] lg:mx-[auto] lg:max-w-[1440px] mt-[20px]"> */}
        <motion.div
          variants={staggerContainer}
          initial={isDesktop ? "hidden" : "show"}
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          className=" mt-[20px]"
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={150}
            grabCursor={true}
            breakpoints={breakpoints}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button"
            }}
            autoplay={{
              delay: 7000
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
          >
            {data &&
              data.map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    variants={fadeIn("right", "spring", item.id * 0.5, 0.75)}
                    className="w-[280px] lg:w-[500px] h-[172px] lg:h-[320px] overflow-hidden rounded-[10px]"
                  >
                    <img
                      src={process.env.NEXT_APP_STORAGE_URL + item.image}
                      alt="gallery photo"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery;
