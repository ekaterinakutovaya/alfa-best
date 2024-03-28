import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";


import SvgSelector from "../assets/icons/SvgSelector";
import { fadeIn } from "utils/motions";

const partnersIcons = [
  { index: 0, iconId: "hyundai" },
  { index: 1, iconId: "lukoil" },
  { index: 2, iconId: "hyundai" },
  { index: 3, iconId: "lukoil" },
  { index: 4, iconId: "hyundai" },
  { index: 5, iconId: "lukoil" },
  { index: 6, iconId: "hyundai" },
  { index: 7, iconId: "lukoil" }
];

const Partners = () => {
  const isDesktop = useMediaQuery({ query: `(min-width: 1280px` });

  const breakpoints = {
    375: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 120
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 120
    }
  };

  return (
    <motion.section 
      initial={isDesktop ? "hidden" : "show"}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    className="w-full my-[50px] select-none"
    >
      <div className="container w-full flex items-center">
        <Swiper
          slidesPerView={4}
          spaceBetween={310}
          grabCursor={true}
          breakpoints={breakpoints}
          modules={[Autoplay]}
          autoplay={{
            delay: 7000
          }}
          loop={true}
        >
          {partnersIcons &&
            partnersIcons.map((item, i) => (
              <SwiperSlide key={i}>
                <motion.div
                variants={fadeIn("left", "tween", 0.2 * i, 1)}
                key={i}
                className="w-[150px] h-[60px] lg:w-[250px] lg:h-[86px] flex justify-center items-center">
                  <div className="w-full px-[10px] flex justify-center items-center">
                    <SvgSelector
                      id={item.iconId}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Partners;
