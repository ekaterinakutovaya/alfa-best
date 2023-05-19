import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { images } from "../constants";
import Logo from "assets/icons/Logo";
import { Button } from "components";

const HappyPartners = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("");

  return (
    <section className="w-full h-[300px] lg:h-[500px] my-[50px] py-[20px] lg:px-[90px] lg:py-[30px] relative">
      <div className="w-full h-full overflow-hidden absolute left-0 right-0 bottom-0 -z-10">
        <img
          src={images.image003.src}
          alt="happy parnters"
          className="w-full h-full object-cover image-filter"
        />
      </div>

      <div className="container lg:py-[30px]">
        <div className="w-[70%] h-full">
          <div className="pb-5">
            <Logo type="light-full" />
          </div>

          <h2 className="text-[18px] font-bold text-white pb-[17px] lg:text-[34px]">
            {t("happy_partners_title")}
          </h2>

          <div className="w-[150px] lg:w-[386px] h-[2px] bg-white mb-[15px]"></div>

          <p className="text-[16px] font-medium text-white max-w-[536px]">
            {t("happy_partners_text")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HappyPartners;
