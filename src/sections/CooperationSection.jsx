import React from "react";

import { images } from "../constants";
import { SectionHeading } from "components";
import Logo from "assets/icons/Logo";

const CooperationSection = () => {
  return (
    <section className="w-full mt-[79px] lg:mt-[158px] pt-[25px] lg:pt-[50px] lg:my-[80px]">
      <div className="container relative">
        <div className="w-full h-[220px] lg:h-[500px] overflow-hidden rounded-[15px] relative">
          <img
            className="w-full h-full object-cover"
            src={images.cooperation001.src}
            alt="company profile photo"
          />

          <div className="w-full h-full top-0 bottom-0 left-0 right-0 absolute flex flex-col justify-end p-[20px] lg:p-[40px] gradient">
            <div className="pb-[10px]">
              <Logo type="light" />
            </div>

            <h2 className="text-[18px] lg:text-[36px] text-white font-bold">
              Сотрудничество
            </h2>
          </div>
        </div>

        <div className="content pt-[20px]">
          <p className="">
            Компания Альфа-бест будет рада сотрудничеству с промышленными
            предприятиями, торговыми центрами, компаниями крупного и среднего
            бизнеса в области комплексного оказания услуг.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CooperationSection;
