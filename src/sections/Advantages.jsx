import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import Logo from "assets/icons/Logo";
import SvgSelector from "assets/icons/SvgSelector";
import { fade, fadeIn, staggerContainer } from "utils/motions";
import { TypingText } from "components";

const Advantages = ({ data }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  const isDesktop = useMediaQuery({ query: `(min-width: 1280px` });

  return (
    <section className="w-full my-[30px] lg:my-[0]">
      <motion.div
        variants={staggerContainer}
        initial={isDesktop ? "hidden" : "show"}
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
        className="container"
      >
        {/* Heading */}
        <div>
          <div>
            <motion.div variants={fade(0.2, 1)}>
              <Logo type="dark" />
            </motion.div>

            <h2 className="w-[240px] lg:w-auto text-[18px] lg:text-[34px] font-bold pt-[10px] pb-[20px] lg:py-[10px]">
              <TypingText
                title={t("advantages")}
                textStyles="w-[240px] lg:w-auto text-[18px] lg:text-[34px] font-bold pt-[10px] pb-[20px] lg:py-[10px]"
              />
            </h2>
          </div>
        </div>

        {/* Content */}
        <ul className="w-full lg:grid lg:grid-cols-2 lg:gap-x-[60px] lg:gap-y-[30px] lg:my-[30px]">

          {data &&
            data.map((item, i) => {
              if (i & 1) {
                return (
                  <motion.li
                    variants={fadeIn("left", "tween", 0.5, 1)}
                    key={i}
                    className="w-full flex items-start gap-x-[20px] mb-[20px] lg:mb-0"
                  >
                    <div>
                      <SvgSelector
                        id="certified"
                        className="fill-green w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] mt-[6px]"
                      />
                    </div>
                    <div className="font-medium">{item[`text_${locale}`]}</div>
                  </motion.li>
                );
              } else {
                return (
                  <motion.li
                    variants={fadeIn("right", "tween", 0.5, 1)}
                    key={i}
                    className="w-full flex items-start gap-x-[20px] mb-[20px] lg:mb-0"
                  >
                    <div>
                      <SvgSelector
                        id="certified"
                        className="fill-green w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] mt-[6px]"
                      />
                    </div>
                    <div className="font-medium">{item[`text_${locale}`]}</div>
                  </motion.li>
                );
              }
            })}
        </ul>
      </motion.div>
    </section>
  );
};

export default Advantages;
