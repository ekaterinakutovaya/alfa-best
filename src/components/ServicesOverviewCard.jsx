import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { images } from "constants";
import SvgSelector from "assets/icons/SvgSelector";

const ServicesOverviewCard = ({item}) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");

 
  return (
    <Link
      href={`/${locale}/${item.link}`}
      locale={locale}
      
    >
      <div className="w-full h-[200px] lg:h-[250px] py-[20px] px-[15px] lg:py-[30px] lg:px-[30px] flex flex-col justify-between rounded-[20px] shadow-boxShadowDefault relative overflow-hidden lg:cursor-pointer">
        <h4 className="text-[18px] lg:w-[291px] lg:text-[22px] font-semibold">
          {item[`title_${locale}`]}
        </h4>
        <div className="flex items-center gap-x-[10px] font-medium lg:text-[17px]">
          Подробно <SvgSelector id="next" className="fill-black mt-[4px]" />
          <img
            className="w-[176px] lg:w-[253px] absolute bottom-[30px] z-10 right-[18px]"
            src={images.services001.src}
            alt="services photo"
          />
        </div>
        {/* <ImageS
          className="w-[176px] lg:w-[253px] absolute bottom-[30px] z-10 right-[18px]"
          src={images.services001.src}
          alt="services photo"
          layout="responsive"
          objectFit="cover"
        /> */}
        <div className="w-full absolute bottom-0 right-[-30%] lg:right-[-22%] -z-10 lg:h-full">
          <SvgSelector id="curvy-bg" className="w-full h-full" />
        </div>
      </div>
    </Link>
  );
};

export default ServicesOverviewCard;