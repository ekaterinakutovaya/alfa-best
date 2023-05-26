import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import Logo from "assets/icons/Logo";
import { fadeIn, staggerContainer } from "../utils/motions";

const OurAimSection = ({ data, aimCategory }) => {
  const { locale } = useRouter();
  const [heading, setHeading] = useState([]);
  const isDesktop = useMediaQuery({ query: `(min-width: 1280px` });

  useEffect(() => {
    setHeading(data[`title_${locale}`].split(" "));
  }, [locale]);

  return (
    <section className="container my-[30px] lg:my-[100px]">
      <motion.div
        initial={isDesktop ? "hidden" : "show"}
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full  lg:flex lg:gap-[80px]"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          className="lg:w-[40%]"
        >
          <div className="left">
            <div className="">
              <Logo type="dark" />
            </div>

            <h2 className="text-[34px] font-bold py-[10px]">
              {heading[0]} <span className="text-green">{heading[1]}</span>
            </h2>
            <div className="content flex flex-col gap-[15px] lg:max-w-[689px] pb-[30px]">
              {data[`text_${locale}`]}
            </div>
          </div>
        </motion.div>

        <div className="lg:w-[60%]">
          {aimCategory &&
            aimCategory.map((item, i) => (
              <motion.div
                variants={fadeIn("up", "tween", 0.4 * i, 1)}
                key={i}
                className="w-full grid grid-cols-[0.3fr,2fr,1fr] py-[15px] border-solid border-b border-[#D9D9D9] last:border-b-0
                flex items-center"
              >
                <div className="text-green font-semibold">{`0${item.id}`}</div>
                <div className="w-[184px] sm:w-full lg:w-auto">
                  {item[`text_${locale}`]}
                </div>
                <div className="sm:justify-self-end">
                  <div className="image w-[100px] h-[70px] lg:w-[110px] lg:h-[60px] rounded-[5px] overflow-hidden">
                    <Image
                      className="w-full h-full object-cover relative"
                      src={process.env.NEXT_APP_STORAGE_URL + item.image}
                      alt="aim images"
                      width={100}
                      height={70}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurAimSection;
