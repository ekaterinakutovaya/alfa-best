import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper";

import { images } from "constants";

const Partners = () => {
  const breakpoints = {
    375: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 120
    }
  };

  return (
    <section className="w-full my-[50px] select-none">
      <div className="container flex items-center">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          grabCursor={true}
          breakpoints={breakpoints}
          modules={[Autoplay]}
          autoplay={{
            delay: 6000
          }}
          loop={true}
        >
          {[...Array(10).keys()].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-[130px] h-[80px] p-[20px] flex justify-center items-center">
                <div className="">
                  <img
                    className="w-full h-full object-contain"
                    src={images.partner001.src}
                    alt="partner logo"
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
