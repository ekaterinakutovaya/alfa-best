import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { images } from "constants";
import styles from "styles/styles";
import Logo from "assets/icons/Logo";
import { ControlButton } from "components";

const CustomSlider = ({ items }) => {
  const { year, image, text } = items[items.length - 1];

  const pagination = {
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 4,
    // renderBullet: function(index, className) {
    //   return '<span class="' + className + '">' + (items[index].year) + "</span>";
    // }
    renderCustom: function(index, className) {
      return `<button className="${className}">${items[index].year}</button>`;
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
        // style={{
        //   "--swiper-pagination-color": "#FFBA08",
        //   "--swiper-pagination-bullet-inactive-color": "#8D9197",
        //   "--swiper-pagination-bullet-inactive-opacity": "1",
        //   "--swiper-pagination-bullet-size": "45px",
        //   "--swiper-pagination-bullet-horizontal-gap": "35px"
        // }}
      >
        {items &&
          items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="lg:py-[30px]">
                <div className="lg:flex gap-x-[120px]">
                  <div className="w-full h-[210px] mb-[20px] lg:mb-0 lg:w-[500px] lg:min-w-[500px] lg:h-[320px] overflow-hidden rounded-[20px]">
                    <img
                      className="w-full h-full object-cover"
                      src={item.image}
                      alt="history photo"
                    />
                  </div>

                  <div className="flex flex-col gap-y-[20px]">
                    <span className="text-[24px] lg:text-[45px] font-bold text-left">
                      {item.year}
                    </span>

                    <div className="flex flex-col gap-y-[20px] text-[16px] lg:text-[17px]">
                      {item.text.map((p, i) => (
                        <p key={i} className="text-left">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default CustomSlider;
