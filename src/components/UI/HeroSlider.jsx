import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { images } from "constants";
import { Button } from "components";

const HeroSlider = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    // dotsClass: "hero-slider-dots"
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          right: "0"
          // borderRadius: "10px",
          // padding: "10px"
        }}
      >
        <ul style={{
          display: "flex",
          columnGap: "25px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          height: "30px",
          color: "transparent",
          border: "1px red solid",
          bgColor: "transparent",
          borderRadius: "50%"
        }}
      >
        {i + 1}
      </div>
    )
  };

  return (
      <Slider {...settings}>
        {[...Array(4).keys()].map((item, index) => (
          <div key={index}>
            <div className="w-full text-left">
              <div className="w-full h-[250px] sm:h-[350px] lg:h-[780px] relative bg-black">
                <img
                  className="w-full h-full object-cover opacity-60"
                  src={images.image001.src}
                  alt="header photo"
                />

                <div className="w-full p-4 sm:px-20 absolute bottom-[60px] lg:bottom-[90px]">
                  <div className="w-[50%] h-[162px] pb-5 flex items-center">
                    <h1 className="w-full text-[36px] lg:text-[45px] text-white font-bold break-words">
                      Корпоративное питание
                    </h1>
                  </div>

                  <Button type="round">Узнать больше</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
  );
};

export default HeroSlider;
