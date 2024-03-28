import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import Logo from "assets/icons/Logo";
import Figure from "assets/icons/Figure";
import { ServicesOverviewCard, TypingText } from "components";
import { fade, fadeIn, staggerContainer } from "../utils/motions";

const OurMission = ({ data, servicesMenu }) => {
  const { locale } = useRouter();
  const [moto, setMoto] = useState([]);
  const isDesktop = useMediaQuery({ query: `(min-width: 1280px` });

  useEffect(() => {
    setMoto(data.moto.split(" "));
  }, [locale]);

  return (
    <section className="w-full my-[50px] lg:my-[80px] overflow-hidden lg:overflow-visible">
      <div className="mission__inner container">
        <motion.div
          variants={staggerContainer}
          initial={isDesktop ? "hidden" : "show"}
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="lg:w-full lg:flex">
            <div className="lg:w-[60%]">
              {/* Title */}

              <div>
                <motion.div variants={fade(0.2, 1)}>
                  <Logo type="dark" />
                </motion.div>

                <h2>
                  <TypingText
                    title={data.title}
                    textStyles="text-[18px] sm:text-[34px] font-bold pt-[10px] pb-[20px]"
                  />
                </h2>
              </div>

              <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="mission__text"
                dangerouslySetInnerHTML={{
                  __html: data.text
                }}
              ></motion.div>
            </div>

            <div className="lg:w-[40%] relative">
              <motion.div
                variants={fadeIn("left", "tween", 0.3, 1)}
                className="mission__moto w-[216px] lg:w-[273px] my-[50px] lg:pl-[60px]"
              >
                <h2 className="text-[24px] font-bold uppercase">
                  <span className="text-green">{moto[0]}</span> <br />
                  {moto.slice(1).join(" ")}
                </h2>
              </motion.div>

              <motion.div variants={fadeIn("left", "tween", 0.4, 1)}>
                <Figure className="w-[141px] lg:w-[196px] absolute bottom-[-50%] lg:bottom-0 right-[-20%]" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:grid lg:grid-cols-2 lg:gap-[60px] lg:my-[80px]"
          variants={staggerContainer}
          initial={isDesktop ? "hidden" : "show"}
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {servicesMenu &&
            servicesMenu.map((item, i) => {
              if (i & 1) {
                return (
                  <motion.div
                    variants={fadeIn("left", "tween", 0.4 * i, 0.6)}
                    className="w-full mb-[20px] lg:mb-0"
                    key={i}
                  >
                    <ServicesOverviewCard item={item} />
                  </motion.div>
                );
              } else {
                return (
                  <motion.div
                    variants={fadeIn("right", "tween", 0.4 * i, 0.6)}
                    className="w-full mb-[20px] lg:mb-0"
                    key={i}
                  >
                    <ServicesOverviewCard item={item} />
                  </motion.div>
                );
              }
            })}
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;
