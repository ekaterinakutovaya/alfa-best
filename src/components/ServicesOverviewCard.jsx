import React from "react";
import Link from "next/link";

import { images } from "constants";
import SvgSelector from "assets/icons/SvgSelector";

const ServicesOverviewCard = () => {
  return (
    <div className="w-full h-[200px] lg:h-[250px] py-[20px] px-[15px] lg:py-[30px] lg:px-[30px] flex flex-col justify-between rounded-[20px] shadow-boxShadowDefault relative overflow-hidden">
      <h4 className="text-[18px] lg:w-[291px] lg:text-[22px] font-semibold">
        Инженерно-техническая эксплуатация
      </h4>

      <Link
        href="/engineering"
        className="flex items-center gap-x-[10px] font-medium lg:text-[17px]"
      >
        Подробно{" "}
        <SvgSelector
          id="next"
          className="fill-black mt-[4px]"
        />
      </Link>

      <img
        className="w-[176px] lg:w-[253px] absolute bottom-[30px] z-10 right-[18px]"
        src={images.services001.src}
        alt="services photo"
      />

      <div className="w-full absolute bottom-0 right-[-30%] lg:right-[-22%] -z-10 lg:h-full">
        <SvgSelector id="curvy-bg" className="w-full h-full" />
      </div>
    </div>
  );
};

export default ServicesOverviewCard;


// absolute bottom - 0 right - [0] lg: right - [-22 %] - z - 10 w - [50 %] lg: w - full lg: h - full