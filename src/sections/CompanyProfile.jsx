import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import Logo from "assets/icons/Logo";
import { fade, fadeIn, staggerContainer } from "utils/motions";

const CompanyProfile = ({ data = {} }) => {
  const { locale } = useRouter();
  const { image } = data;
  const isDesktop = useMediaQuery({ query: `(min-width: 1280px` });
  
  return (
    <motion.section
      variants={staggerContainer}
      initial={isDesktop ? "hidden" : "show"}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full mt-[79px] lg:mt-[158px] pt-[25px] lg:pt-[50px] lg:my-[50px]"
    >
      <div className="profile__inner container relative">
        <motion.div
          className="w-full h-[220px] sm:h-[250px] lg:h-[500px] overflow-hidden rounded-[15px] relative"
          variants={fade(0.2, 1)}
        >
          <div className="w-full h-full">
            <Image
              className="w-full h-full object-cover"
              src={process.env.NEXT_APP_STORAGE_URL + image}
              layout="fill"
              objectFit="cover"
              alt="about company photo"
            />
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
              className="text-[18px] sm:text-[28px] lg:text-[34px] text-white font-bold"
            >
              {data[`home_title_${locale}`]}
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="content pt-[20px]"
          dangerouslySetInnerHTML={{
            __html: data[`text_${locale}`]
          }}
        ></motion.div>
      </div>
    </motion.section>
  );
};

export default CompanyProfile;
