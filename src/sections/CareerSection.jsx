import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { images } from "../constants";
import Logo from "assets/icons/Logo";

const CareerSection = ({ career, vacancy, vacancyCategory }) => {
  
  const { locale } = useRouter();
  const { t } = useTranslation("");
  const { image } = career;

  console.log(image);
  

  return (
    <section className="w-full mt-[79px] lg:mt-[158px] py-[25px] lg:py-[50px]">
      <div className="container relative">
        <div className="w-full h-[220px] lg:h-[500px] overflow-hidden rounded-[15px] relative">
          <Image
            className="w-full h-full object-cover"
            src={process.env.NEXT_APP_STORAGE_URL + image}
            fill
            alt="career photo"
          />

          <div className="w-full h-full top-0 bottom-0 left-0 right-0 absolute flex flex-col justify-end p-[20px] lg:p-[40px] gradient">
            <div className="pb-[10px]">
              <Logo type="light" />
            </div>

            <h2 className="text-[18px] lg:text-[36px] text-white font-bold">
              {career[`image_title_${locale}`]}
            </h2>
          </div>
        </div>

        <div className=" pt-[30px] lg:pt-[60px]">
          <Logo type="dark" />
        </div>
        <div className="content pt-[10px] lg:flex lg:w-full gap-x-[150px]">
          <div className="lg:w-[40%]">
            <div>
              <h2 className="text-[18px] lg:text-[34px] font-bold pb-[20px]">
                {career[`title_${locale}`]}
              </h2>
            </div>
          </div>

          <div className="content__text lg:w-[60%]">
            <p className="text-[17px] pt-[10px]">
              {career[`content_${locale}`]}
            </p>

            <div className="my-[30px]">
              <div className="text-[16px] font-bold leading-[140%]">
                {t("our_vacancy")}
              </div>
              {vacancy &&
                vacancy.map((item, index) => (
                  <a
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                    className="text-[#3D62E3] visited:text-purple-700"
                  >
                    {item.link}
                  </a>
                ))}
            </div>

            <div className="pb-[5px]">
              <div className="text-[16px] font-bold leading-[140%]">
                {vacancy[0][`title_${locale}`]}
              </div>
            </div>

            <ul className="w-full">
              {vacancyCategory &&
                vacancyCategory.map((item, index) => (
                  <li
                    key={index}
                    className="flex py-[15px] gap-x-[20px] border-solid border-b border-b-[#D9D9D9] last:border-b-0"
                  >
                    <div className="text-[18px] font-semibold text-green leading-[140%]">
                      {`0${item.vacancy_id}`}
                    </div>
                    <div>
                      <div className="text-[16px] font-bold leading-[140%] pb-[5px]">
                        {item[`title_${locale}`]}
                      </div>
                      <div className="text-[16px] text-[#8B8B8B] leading-[140%]">
                        {item[`text_${locale}`]}
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
