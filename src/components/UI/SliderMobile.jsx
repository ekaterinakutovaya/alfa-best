import React from "react";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { images } from "constants";
import { Button } from "components";

const SliderMobile = () => {
  const settings = {
      animationType: "slide",
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
        <div className="w-full h-[250px] sm:h-[350px] position-relative">
          <img
            className="w-full h-full object-cover"
            src={images.image001.src}
            alt="header photo"
          />
        </div>
        <div className="w-full p-4 sm:px-20">
          <div className="w-[240px] pb-5">
            <h1 className="w-full h-[45px] text-lg font-bold break-words">
              Корпоративное питание
            </h1>
          </div>

          <Button type="round">Узнать больше</Button>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full h-[250px] sm:h-[350px] position-relative">
          <img
            className="w-full h-full object-cover"
            src={images.image001.src}
            alt="header photo"
          />
        </div>
        <div className="w-full p-4 sm:px-20">
          <div className="w-[240px] pb-5">
            <h1 className="w-full h-[45px] text-lg font-bold break-words">
              Транспортные и пассажирские перевозки
            </h1>
          </div>

          <Button type="round">Узнать больше</Button>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-[250px] sm:h-[350px] position-relative">
          <img
            className="w-full h-full object-cover"
            src={images.image001.src}
            alt="header photo"
          />
        </div>
        <div className="w-full p-4 sm:px-20">
          <div className="w-[240px] pb-5">
            <h1 className="w-full h-[45px] text-lg font-bold break-words">
              Сервисное и бытовое обслуживание
            </h1>
          </div>

          <Button type="round">Узнать больше</Button>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-[250px] sm:h-[350px] position-relative">
          <img
            className="w-full h-full object-cover"
            src={images.image001.src}
            alt="header photo"
          />
        </div>
        <div className="w-full p-4 sm:px-20">
          <div className="w-[240px] pb-5">
            <h1 className="w-full h-[45px] text-lg font-bold break-words">
              Инженерно-техническая эксплуатация
            </h1>
          </div>

          <Button type="round">Узнать больше</Button>
        </div>
      </div>
    </AliceCarousel>
  );
};

export default SliderMobile;
