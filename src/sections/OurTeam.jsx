import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { images } from "constants";
import styles from "styles/styles";
import Logo from "assets/icons/Logo";
import { TeamCard, ControlButton } from "components";

const OurTeam = () => {
  const breakpoints = {
    375: {
      slidesPerView: 2,
      spaceBetween: 120
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 120
    }
  };

  const prevHandler = () => {};

  const nextHandler = () => {};

  return (
    <section className="w-full my-[50px]">
      <div className="mission__inner container">
        {/* Head */}
        <div className="flex justify-between items-end mb-[30px] ">
          <div>
            <div className="">
              <Logo type="dark" />
            </div>

            <h2 className="text-[18px] lg:text-[34px] font-bold">
              Наша команда
            </h2>
          </div>

          <div className="hidden controls lg:flex items-center gap-x-[20px] pb-[8px]">
            <ControlButton type="prev" onClick={prevHandler} disabled={false} />
            <ControlButton type="next" onClick={nextHandler} disabled={false} />
          </div>
        </div>

        {/* Slider */}
        <div>
          <Swiper
            slidesPerView={2}
            spaceBetween={120}
            grabCursor={true}
            breakpoints={breakpoints}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button"
            }}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <TeamCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
