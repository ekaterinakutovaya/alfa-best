import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { images } from "constants";
import { Button } from "components";

const HeroSliderMobile = ({ items }) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
    touchThreshold: 100,
    appendDots: dots => (
      <div>
        <ul className="flex items-center gap-x-[15px] absolute right-[50%] translate-x-[50%] bottom-[200px] z-50">
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-[20px] h-[20px] bg-transparent border-solid border-[1.5px] border-white rounded-full lg:cursor-pointer ease-in-out duration-300"></div>
    )
  };

  return (
    <Slider {...settings}>
      {items &&
        items.map((item, index) => (
          <div key={index} className="w-full text-left relative">
            <div className="w-full h-[250px] sm:h-[350px] lg:h-[780px] relative bg-black">
              <img
                className="w-full h-full object-cover opacity-70"
                src={item.image}
                alt="header photo"
              />
            </div>

          <div className="w-full p-4">
            <div className="w-[239px] h-[66px] pb-5 flex items-center">
              <h1 className="w-full text-[18px] font-bold break-words">
                {item.title}
              </h1>
            </div>

            <Button type="round">Узнать больше</Button>
          </div>
          </div>
        ))}
    </Slider>
  );
};

export default HeroSliderMobile;
