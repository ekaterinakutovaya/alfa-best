import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, MotionConfig, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "next-i18next";

import Logo from "assets/icons/Logo";
import { Button } from "components";
import { fadeIn } from "../utils/motions";
import aboutCompany from "assets/images/about_company.png";

const AboutPreview = ({ data }) => {
  const animation = useAnimation();
  const scrollRef = useRef(null);
  const [ref, inView, entry] = useInView({ threshold: 0.1 });
  const { locale } = useRouter();
  const { t } = useTranslation("");

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  return (
    <section className="container">
      <div className="sm:w-full my-[50px] lg:flex justify-center lg:item-center lg:gap-[80px]">
        {/* <MotionConfig transition={{ duration: 1.2 }}>
          <motion.div
            ref={ref}
            animate={animation}
            variants={{
              hidden: { opacity: 0, x: "-200px" },
              visible: { opacity: 1, x: 0 }
            }}
          > */}

        <div className="sm:flex justify-center items-center w-full lg:w-[445px] h-auto px-[17px] py-[20px] sm:px-0 sm:py-0 lg:p-0">
          <Image
            className="w-full h-full object-contain"
            src={aboutCompany}
            width={445}
            height={600}
            alt="about company picture"
          />
        </div>

        {/* </motion.div>
        </MotionConfig> */}

        {/* <MotionConfig transition={{ duration: 1 }}>
          <motion.div

        variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: "200px" }
            }}
            ref={ref}
            animate={animation}
          > */}
        <div className="lg:flex lg:items-center sm:my-[30px]">
          <div className="">
            <div className="">
              <Logo type="dark" />
            </div>

            <h2 className="text-lg font-bold text-[#1B2330] pb-[20px]">
              {data[`home_title_${locale}`]}
            </h2>

            <div
              className="content flex flex-col gap-[15px] lg:max-w-[689px] pb-[30px]"
              dangerouslySetInnerHTML={{
                __html: data[`home_text_${locale}`]
              }}
            ></div>

            <Link href={`/${locale}/about`} locale={locale}>
              <Button type="round">{t("main_button")}</Button>
            </Link>
          </div>
        </div>
        {/* </motion.div>
        </MotionConfig> */}
      </div>
    </section>
  );
};

export default AboutPreview;
