import React from "react";

import { images } from "constants";
import styles from "styles/styles";
import Logo from "assets/icons/Logo";
import { ControlButton } from "components";

const CustomSlider = () => {
  return (
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

      {/* Main */}
      <div className="lg:py-[30px]">
        <div className="lg:flex gap-x-[120px]">
          <div className="w-full h-[210px] mb-[20px] lg:mb-0 lg:w-[500px] lg:min-w-[500px] lg:h-[320px] overflow-hidden rounded-[20px]">
            <img
              className="w-full object-cover"
              src={images.image003.src}
              alt="history photo"
            />
          </div>

          <div className="flex flex-col gap-y-[20px]">
            <span className="text-[24px] lg:text-[45px] font-bold">2019</span>

            <div className="flex flex-col gap-y-[20px] text-[16px] lg:text-[17px]">
              <p>
                Начало осуществления деятельности корпоративного питания и
                инженерно-технической эксплуатации
              </p>

              <p>
                По требованиям контролирующих инстанций, техобслуживание зданий
                начинается с момента введения объекта в эксплуатации. В качестве
                управляющей компании может выступать любая организация, имеющая
                лицензию и соответствующие возможности для проведения
                измерительных, ремонтных работ.
              </p>
            </div>

            <div className="pagination pt-[20px] flex justify-between">
              <button className="text-[24px] lg:text-[45px] text-gray-400 font-bold lg:cursor-pointer ease-in-out duration-300 hover:text-green">
                2018
              </button>
              <button className="text-[24px] lg:text-[45px] text-green font-bold lg:cursor-pointer">
                2019
              </button>
              <button className="text-[24px] lg:text-[45px] text-gray-400 font-bold lg:cursor-pointer ease-in-out duration-300 hover:text-green">
                2020
              </button>
              <button className="text-[24px] lg:text-[45px] text-gray-400 font-bold lg:cursor-pointer ease-in-out duration-300 hover:text-green">
                2021
              </button>
              {/* <button className="text-[24px] lg:text-[45px] text-gray-400 font-bold cursor-pointer ease-in-out duration-300 hover:text-green">
                2022
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
