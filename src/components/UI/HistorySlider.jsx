import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { motion } from "framer-motion";

import Logo from "assets/icons/Logo";
import { ControlButton } from "components";
import { fadeIn, staggerContainer } from "utils/motions";

const HistorySlider = ({ items }) => {
  const { year, image, text } = items[0];

  const pagination = {
    clickable: true,
    renderBullet: function(index, className) {
      return (
        '<span class="' + className + '">' + (index + 1) + "</span>"
      );
    }
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        variants={fadeIn("down", "tween", 0.2, 1)}
      className="w-full my-[50px]">
        {/* Header */}
        <div className="flex justify-between items-end">
          {/* Title */}
          <div>
            <div className="">
              <Logo type="dark" />
            </div>

            <h2
              className="text-[20px] lg:text-[34px] font-bold py-[20px] lgpy-[10px]"
            >
              История
            </h2>
          </div>

          <div className="hidden controls lg:flex items-center gap-x-[20px]">
            <ControlButton type="prev" />
            <ControlButton type="next" />
          </div>
        </div>
      </motion.div>

      <Swiper
        modules={[Pagination]}
        pagination={pagination}
        // className="lg:py-[30px] border-dotted border border-red-600"
        className="swiper"
      >
        {items &&
          items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="lg:py-[30px]">
                <div className="lg:flex gap-x-[120px]">
                  <div className="w-full h-[210px] mb-[20px] lg:mb-0 lg:w-[500px] lg:min-w-[500px] lg:h-[320px] overflow-hidden rounded-[20px]">
                    <img
                      className="w-full h-full object-cover"
                      src={image}
                      alt="history photo"
                    />
                  </div>

                  <div className="flex flex-col gap-y-[20px]">
                    <span className="text-[24px] lg:text-[45px] font-bold">
                      {item.year}
                    </span>

                    <div className="flex flex-col gap-y-[20px] text-[16px] lg:text-[17px]">
                      {item.text.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </motion.div>
  );
};

export default HistorySlider;
