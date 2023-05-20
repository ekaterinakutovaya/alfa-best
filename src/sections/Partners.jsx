import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper";

import { images } from "constants";
import SvgSelector from "../assets/icons/SvgSelector";

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
    <section className="w-full my-[50px] select-none">
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
            partnersIcons.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-[150px] h-[60px] lg:w-[250px] lg:h-[86px] flex justify-center items-center">
                  <div className="w-full px-[10px] flex justify-center items-center">
                    <SvgSelector
                      id={item.iconId}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
