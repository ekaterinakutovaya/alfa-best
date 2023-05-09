import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { images } from "constants";
import styles from "styles/styles";
import Logo from "assets/icons/Logo";
import { ControlButton } from "components";

const PeopleSlider = ({ items }) => {
  const { year, image, text } = items[0];

  const pagination = {
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
    // renderBullet: function(index, className) {
    //   return '<span class="' + className + '">' + (items[index].year + 1) + "</span>";
    // }
    renderBullet: function(index, className) {
      return `<button className="text-[24px] lg:text-[45px] text-gray-400 font-bold lg:cursor-pointer">${items[
        index
      ].year + 1}</button>`;
    }
  };

  return (
    <>
      <div className="w-full my-[50px]">
        {/* Header */}
        <div className="flex justify-between items-end">
          {/* Title */}
          <div>
            <div className="w-[44px]">
              <Logo type="dark" className="w-full" />
            </div>

            <h2 className={`${styles.heading2} py-[20px] lgpy-[10px]`}>
              История
            </h2>
          </div>

          <div className="hidden controls lg:flex items-center gap-x-[20px]">
            <ControlButton type="prev" />
            <ControlButton type="next" />
          </div>
        </div>
      </div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="lg:py-[30px] border-dotted border border-red-600"
      >
       
            <SwiperSlide>
             
            </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PeopleSlider;
