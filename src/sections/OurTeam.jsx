import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import Logo from "assets/icons/Logo";
import { TeamCard, ControlButton } from "components";
import { fade, fadeIn, staggerContainer } from "../utils/motions";

const OurTeam = ({ data }) => {
  const { t } = useTranslation("");
  const isDesktop = useMediaQuery({ query: `(min-width: 1280px` });

  const breakpoints = {
    375: {
      slidesPerView: 2,
      spaceBetween: 120
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 60
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 120
    }
  };

  const prevHandler = () => {};

  const nextHandler = () => {};

  return (
    <motion.section
      variants={staggerContainer}
      initial={isDesktop ? "hidden" : "show"}
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="w-full my-[50px] lg:my-[100px]"
    >
      <div className="mission__inner container">
        {/* Head */}
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 1)}
          className="flex justify-between items-end mb-[30px] "
        >
          <div>
            <div className="">
              <Logo type="dark" />
            </div>

            <h2 className="text-[18px] sm:text-[34px] font-bold">
              {t("our_team")}
            </h2>
          </div>

          <div className="hidden controls lg:flex items-center gap-x-[20px] pb-[8px]">
            <ControlButton type="prev" onClick={prevHandler} disabled={false} />
            <ControlButton type="next" onClick={nextHandler} disabled={false} />
          </div>
        </motion.div>

        {/* Slider */}
        <motion.div
          variants={staggerContainer}
          initial={isDesktop ? "hidden" : "show"}
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <Swiper
            slidesPerView={5}
            spaceBetween={120}
            grabCursor={true}
            breakpoints={breakpoints}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button"
            }}
            loop={true}
            rewind={true}
            modules={[Navigation]}
          >
            {data &&
              data.map((item, index) => (
                <SwiperSlide key={index}>
                  <TeamCard item={item} />
                </SwiperSlide>
              ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurTeam;
