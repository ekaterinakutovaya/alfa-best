import React from "react";
import { useTranslation } from "next-i18next";

import SvgSelector from "../assets/icons/SvgSelector";

const Statistics = () => {
  const { t } = useTranslation("");

  return (
    <section className="container">
      <div className="statistics__inner w-full my-[50px] flex flex-col gap-[30px] lg:flex-row lg:justify-between">
        <div className="statistics__item">
          <div className="flex items-end gap-[10px]">
            <div className="icon w-[40px] h-[40px]">
              <SvgSelector id="map" />
            </div>

            <div>
              <span className="text-2xl font-medium">+320.000 </span>
              {t("square_meters")}
            </div>
          </div>

          <div className="text-[#8B8B8B]">{t("household_qty")}</div>
        </div>
        <div className="statistics__item">
          <div className="flex items-end gap-[10px]">
            <div className="icon w-[40px] h-[40px]">
              <SvgSelector id="flag" />
            </div>

            <div>
              <span className="text-2xl font-medium">+70.000 </span>
              {t("square_meters")}
            </div>
          </div>

          <div className="text-[#8B8B8B]">{t("cleaning_qty")}</div>
        </div>
        <div className="statistics__item">
          <div className="flex items-end gap-[10px]">
            <div className="icon w-[40px] h-[40px]">
              <SvgSelector id="bowl" />
            </div>

            <div>
              <span className="text-2xl font-medium">+1000 </span>
            </div>
          </div>

          <div className="text-[#8B8B8B]">{t("eaters_qty")}</div>
        </div>
        <div className="statistics__item">
          <div className="flex items-end gap-[10px]">
            <div className="icon w-[40px] h-[40px]">
              <SvgSelector id="person" />
            </div>

            <div>
              <span className="text-2xl font-medium">+500 </span>
            </div>
          </div>

          <div className="text-[#8B8B8B]">{t("employee_qty")}</div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
