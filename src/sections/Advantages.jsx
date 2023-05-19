import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Logo from "assets/icons/Logo";
import SvgSelector from "assets/icons/SvgSelector";

const Advantages = ({data}) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  
  return (
    <section className="w-full my-[30px] lg:my-[0]">
      <div className="container">
        {/* Heading */}
        <div>
          <div>
            <div className="">
              <Logo type="dark" />
            </div>

            <h2 className="w-[240px] lg:w-auto text-[18px] lg:text-[34px] font-bold pt-[10px] pb-[20px] lg:py-[10px]">
              {t("advantages")}
            </h2>
          </div>
        </div>

        {/* Content */}
        <ul className="w-full lg:grid lg:grid-cols-2 lg:gap-x-[60px] lg:gap-y-[30px] lg:my-[30px]">
          {data &&
            data.map((item, index) => (
              <li
                key={index}
                className="w-full flex items-start gap-x-[20px] mb-[20px] lg:mb-0"
              >
                <div>
                  <SvgSelector
                    id="certified"
                    className="fill-green w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] mt-[6px]"
                  />
                </div>
                <div className="font-medium">
                  {item[`text_${locale}`]}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
