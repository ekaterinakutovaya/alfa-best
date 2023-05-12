import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

import { images } from "constants";
import Logo from "assets/icons/Logo";
import { ControlButton } from "components";

const Gallery = () => {
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
    <section className="w-full my-[50px] lg:my-[80px] select-none">
      <div className="gallery-container">
        <div className="flex justify-between items-end">
          <div>
            <div className="">
              <Logo type="dark" />
            </div>

            <h2 className="text-[18px] lg:text-[34px] font-bold pt-[10px]">
              Фотогалерея
            </h2>
          </div>

          <div className="hidden controls lg:flex items-center gap-x-[20px] pb-[8px]">
            <ControlButton type="prev" onClick={prevHandler} disabled={false} />
            <ControlButton type="next" onClick={nextHandler} disabled={false} />
          </div>
        </div>

        {/* Swiper */}
        {/* <div className="pl-[25px] lg:pl-[0] lg:py-[0] lg:px-[90px] lg:my-[0] lg:mx-[auto] lg:max-w-[1440px] mt-[20px]"> */}
        <div className=" mt-[20px]">
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
            {[...Array(10).keys()].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-[280px] lg:w-[500px] h-[172px] lg:h-[320px] overflow-hidden rounded-[10px]">
                  <img src={images.image004.src} alt="gallery photo" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
