import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { fade, fadeIn, staggerContainer } from "utils/motions";

const ServicesDescription = ({ data }) => {
  const { locale } = useRouter();
  const isDesktop = useMediaQuery({ query: `(min-width: 1280px` });

  return (
    <motion.div
      variants={staggerContainer}
      initial={isDesktop ? "hidden" : "show"}
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.div
        variants={fade(0.2, 1)}
        className="w-full my-[30px] lg:my-[80px] lg:my-[0] p-[20px] lg:p-[40px] bg-[#F2FCF9] rounded-[20px]"
      >
        <ul className="w-full lg:grid lg:grid-cols-2 lg:gap-[60px] lg:my-[30px]">
          {data && data.map((item, i) => {
            if (i & 1) {
              return (
                <motion.li
                  variants={fadeIn("left", "tween", 0.4 * i, 0.6)}
                  className="w-full flex items-start gap-[20px] mb-[30px] last:mb-0 lg:mb-0"
                  key={i}
                >
                  <div className="w-[40px] min-w-[40px] h-[40px]">
                    <img
                      className="w-full h-full object-contain"
                      src={process.env.NEXT_APP_STORAGE_URL + item.icon}
                      alt="services icon"
                    />
                  </div>

                  <div className="font-medium text-[15px]">
                    {item[`text_${locale}`]}
                  </div>
                </motion.li>
              )
            } else {
              return (
                <motion.li
                  variants={fadeIn("right", "tween", 0.4 * i, 0.6)}
                  className="w-full flex items-start gap-[20px] mb-[30px] last:mb-0 lg:mb-0"
                  key={i}
                >
                  <div className="w-[40px] min-w-[40px] h-[40px]">
                    <img
                      className="w-full h-full object-contain"
                      src={process.env.NEXT_APP_STORAGE_URL + item.icon}
                      alt="services icon"
                    />
                  </div>

                  <div className="font-medium text-[15px]">
                    {item[`text_${locale}`]}
                  </div>
                </motion.li>
              );
            }
          })}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default ServicesDescription;
