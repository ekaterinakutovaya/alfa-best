import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { images } from "constants";
import { Button } from "components";

const HeroSlider = ({ items }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnDotsHover,
    pauseOnFocus,
    appendDots: dots => (
      <div>
        <ul className="flex items-center gap-x-[15px] absolute right-[90px] bottom-[90px] z-50">
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] bg-transparent border-solid border-[1.5px] border-white rounded-full lg:cursor-pointer ease-in-out duration-300"></div>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          fade: true
        }
      },
      {
        breakpoint: 375,
        settings: {
          fade: false
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {items &&
        items.map((item, index) => (
          <div key={index} className="w-full text-left relative">
            <div className="w-full h-[250px] sm:h-[350px] lg:h-[780px] relative bg-black">
              <img
                className="w-full h-full object-cover opacity-60"
                src={item.image}
                alt="header photo"
              />

              <div className="w-full p-4 sm:px-20 absolute bottom-[60px] lg:bottom-[90px]">
                <div className="w-[50%] h-[162px] pb-5 flex items-center">
                  <h1 className="w-full text-[36px] lg:text-[45px] text-white font-bold break-words">
                    {item.title}
                  </h1>
                </div>

                <Button type="round">Узнать больше</Button>
              </div>
            </div>
          </div>
        ))}
    </Slider>
  );
};

export default HeroSlider;
