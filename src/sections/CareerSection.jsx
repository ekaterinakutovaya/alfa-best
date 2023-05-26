import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import Logo from "assets/icons/Logo";
import { fade, fadeIn, staggerContainer } from "utils/motions";

const CareerSection = ({ career, vacancy, vacancyCategory }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  const { image } = career;
  const [imagePath, setImagePath] = useState("");
  const isDesktop = useMediaQuery({ query: `(min-width: 1280px` });

  useEffect(() => {
    let str = process.env.NEXT_APP_STORAGE_URL + image;
    setImagePath(str.replace(/\\/g, "/"));
  }, []);

  return (
    <section className="w-full mt-[79px] lg:mt-[158px] py-[25px] lg:py-[50px]">
      <div className="container relative">
        <motion.div
          variants={staggerContainer}
          initial={isDesktop ? "hidden" : "show"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            variants={fade(0.2, 1)}
            className="w-full h-[220px] sm:h-[300px] lg:h-[500px] overflow-hidden rounded-[15px] relative"
          >
            <div className="w-full h-full">
              {imagePath && (
                <Image
                  className="w-full h-full object-cover"
                  src={imagePath}
                  fill
                  alt="career photo"
                />
              )}
            </div>

            <div className="w-full h-full top-0 bottom-0 left-0 right-0 absolute flex flex-col justify-end p-[20px] lg:p-[40px] gradient">
              <motion.div
                variants={fadeIn("right", "tween", 0.3, 1)}
                className="pb-[10px]"
              >
                <Logo type="light" />
              </motion.div>

              <motion.h2
                variants={fadeIn("right", "tween", 0.4, 1)}
                className="text-[18px] sm:text-[36px] text-white font-bold"
              >
                {career[`image_title_${locale}`]}
              </motion.h2>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial={isDesktop ? "hidden" : "show"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="pt-[30px] lg:pt-[60px]"
          >
            <Logo type="dark" />
          </motion.div>

          <div className="content pt-[10px] lg:flex lg:w-full gap-x-[150px]">
            {/* Left */}
            <div className="lg:w-[40%]">
              <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
                <div>
                  <h2 className="text-[18px] sm:text-[28px] lg:text-[34px] font-bold pb-[20px]">
                    {career[`title_${locale}`]}
                  </h2>
                </div>
              </motion.div>
            </div>

            {/* Right */}

            <div className="content__text lg:w-[60%]">
              <motion.p
                variants={fadeIn("down", "tween", 0.3, 1)}
                className="text-[17px] pt-[10px]"
              >
                {career[`content_${locale}`]}
              </motion.p>

              <motion.div
                variants={fadeIn("down", "tween", 0.4, 1)}
                className="my-[30px]"
              >
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
              </motion.div>

              <motion.div 
                variants={fadeIn("down", "tween", 0.5, 1)}
              className="pb-[5px]">
                <div className="text-[16px] font-bold leading-[140%]">
                  {vacancy[0][`title_${locale}`]}
                </div>
              </motion.div>

              <ul className="w-full">
                {vacancyCategory &&
                  vacancyCategory.map((item, index) => (
                    <motion.li
                    variants={fadeIn("down", "tween", 0.6 * index, 1)}
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
                    </motion.li>
                  ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerSection;
