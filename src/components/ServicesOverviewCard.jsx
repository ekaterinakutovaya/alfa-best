import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import SvgSelector from "assets/icons/SvgSelector";
import process from "../../next.config";

const ServicesOverviewCard = ({item}) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
 
  return (
    <Link
      href={`/${locale}${item.path}`}
      locale={locale}
      className="animated lg:cursor-pointer hover:shadow-2xl hover:text-green ease-in-out duration-300 hover:fill-green "
    >
      <div className="w-full h-[200px] lg:h-[250px] py-[20px] px-[15px] lg:py-[30px] lg:px-[30px] flex flex-col justify-between rounded-[20px] shadow-boxShadowDefault relative overflow-hidden lg:cursor-pointer hover:shadow-boxShadowGreen ease-in-out duration-300">
        <h4 className="text-[18px] lg:w-[291px] lg:text-[22px] font-semibold">
          {item.title}
        </h4>
        <div className="flex items-center gap-x-[10px] font-medium lg:text-[17px]">
          {t("more_details")}

          <div className="">
            <SvgSelector
              id="next"
              className="arrow-more fill-black w-[20px] ml-[15px] mt-[4px]"
            />
          </div>

          <img
            className="w-[176px] lg:w-[253px] absolute bottom-[30px] z-10 right-[18px]"
            src={process.env.NEXT_APP_STORAGE_URL + item.icon}
            alt="services photo"
          />
        </div>
        
        <div className="w-full absolute bottom-0 right-[-30%] lg:right-[-22%] -z-10 lg:h-full">
          <SvgSelector id="curvy-bg" className="w-full h-full" />
        </div>
      </div>
    </Link>
  );
};

export default ServicesOverviewCard;