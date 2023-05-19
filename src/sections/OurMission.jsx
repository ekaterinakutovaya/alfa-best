import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { images } from "constants";
import styles from "styles/styles";
import Logo from "assets/icons/Logo";
import Figure from "assets/icons/Figure";
import { SectionHeading, ServicesOverviewCard } from "components";

const OurMission = ({ data, homeService}) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  
  return (
    <section className="w-full my-[50px] lg:my-[80px] overflow-hidden lg:overflow-visible">
      <div className="mission__inner container">
        <div className="lg:w-full lg:flex">
          <div className="lg:w-[60%]">
            {/* Title */}

            <div>
              <div className="">
                <Logo type="dark" />
              </div>

              <h2 className="text-[18px] lg:text-[34px] font-bold pt-[10px] pb-[20px] lg:py-[10px]">
                {data[`title_${locale}`]}
              </h2>
            </div>

            <div
              className="mission__text"
              dangerouslySetInnerHTML={{
                __html: data[`text_${locale}`]
              }}
            ></div>
          </div>

          <div className="lg:w-[40%] relative">
            <div className="mission__moto w-[216px] lg:w-[273px] my-[50px] lg:pl-[60px]">
              <h2 className="text-[24px] font-bold uppercase">
                {/* <span className="text-green">ALFABEST</span> ЕДИНЫЙ СЕРВИС
                НАЦИОНАЛЬНОГО МАСШТАБА */}
                {data[`subtitle_${locale}`]}
              </h2>
            </div>

            <Figure className="w-[141px] lg:w-[196px] absolute bottom-[-50%] lg:bottom-0 right-[-20%]" />
          </div>
        </div>

        <div className="w-full lg:grid lg:grid-cols-2 lg:gap-[60px] lg:my-[30px]">
          {homeService && homeService.map((item, index) => (
            <div className="w-full mb-[20px] lg:mb-0" key={index}>
              <ServicesOverviewCard item={item}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
