import React from "react";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { images } from "../../constants";
import { Button } from "components";

const Slider = () => {
  const settings = {
    animationType: "fadeout",
    mouseTracking: true,
    infinite: true,
    stopAutoPlayOnHover: true,
    disableButtonsControls: true,
    disableAutoPlayOnAction: true,
    autoPlayStrategy: "default",
    animationDuration: 1000,
    autoPlayInterval: 10000
  };

  return (
    <AliceCarousel {...settings}>
      <div className="w-full">
        <div className="w-full h-[250px] sm:h-[350px] lg:h-[780px] relative bg-black">

          <img className="w-full h-full object-cover opacity-60"
            src={images.image001.src}
            alt="header photo"/>


          <div className="w-full p-4 sm:px-20 absolute bottom-[60px] lg:bottom-[90px]">
            <div className="w-[50%] h-[162px] pb-5 flex items-center">
              <h1 className="w-full text-[36px] lg:text-[45px] text-white font-bold break-words">
                Корпоративное питание
              </h1>
            </div>

            <Button>Узнать больше</Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-[250px] sm:h-[350px] lg:h-[780px] relative bg-black">

          <img className="w-full h-full object-cover opacity-60"
            src={images.image002.src}
            alt="header photo"/>


          <div className="w-full p-4 sm:px-20 absolute bottom-[60px] lg:bottom-[90px]">
            <div className="w-[50%] h-[162px] pb-5 flex items-center">
              <h1 className="w-full text-[36px] lg:text-[45px] text-white font-bold break-words">
                Транспортные перевозки
              </h1>
            </div>

            <Button>Узнать больше</Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-[250px] sm:h-[350px] lg:h-[780px] relative bg-black">

          <img className="w-full h-full object-cover opacity-60"
            src={images.image003.src}
            alt="header photo"/>


          <div className="w-full p-4 sm:px-20 absolute bottom-[60px] lg:bottom-[90px]">
            <div className="w-[50%] h-[162px] pb-5 flex items-center">
              <h1 className="w-full text-[36px] lg:text-[45px] text-white font-bold break-words">
                Сервисное и бытовое обслуживание
              </h1>
            </div>

            <Button>Узнать больше</Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-[250px] sm:h-[350px] lg:h-[780px] relative bg-black">

          <img className="w-full h-full object-cover opacity-60"
            src={images.image004.src}
            alt="header photo"/>


          <div className="w-full p-4 sm:px-20 absolute bottom-[60px] lg:bottom-[90px]">
            <div className="w-[50%] h-[162px] pb-5 flex items-center">
              <h1 className="w-full text-[36px] lg:text-[45px] text-white font-bold break-words">
                Инженерно-техническая эксплуатация
              </h1>
            </div>

            <Button>Узнать больше</Button>
          </div>
        </div>
      </div>

      
    </AliceCarousel>
  );
};

export default Slider;
