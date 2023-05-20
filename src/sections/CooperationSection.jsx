import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Logo from "assets/icons/Logo";

const CooperationSection = ({ data }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  const { image } = data;

  return (
    <section className="w-full mt-[79px] lg:mt-[158px] pt-[25px] lg:pt-[50px] lg:my-[80px]">
      <div className="container relative">
        <div className="w-full h-[220px] lg:h-[500px] overflow-hidden rounded-[15px] relative">
          <Image
            className="w-full h-full object-cover"
            src={process.env.NEXT_APP_STORAGE_URL + image}
            alt="services photo"
            fill
          />

          <div className="w-full h-full top-0 bottom-0 left-0 right-0 absolute flex flex-col justify-end p-[20px] lg:p-[40px] gradient">
            <div className="pb-[10px]">
              <Logo type="light" />
            </div>

            <h2 className="text-[18px] lg:text-[36px] text-white font-bold">
              {data[`title_${locale}`]}
            </h2>
          </div>
        </div>

        {/* <div
          className="content pt-[20px]"
          dangerouslySetInnerHTML={{
            __html: data[`text_${locale}`]
          }}
        ></div> */}
      </div>
    </section>
  );
};

export default CooperationSection;
