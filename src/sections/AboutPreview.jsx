import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

import Logo from "assets/icons/Logo";
import { Button, TypingText } from "components";
import { fadeIn, staggerContainer } from "utils/motions";
import aboutCompany from "assets/images/about_company.png";

const AboutPreview = ({ data }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");

  return (
    <>
      <section className="container hidden lg:block">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="sm:w-full my-[20px] lg:my-[50px] lg:flex justify-center lg:item-center lg:gap-[80px]">
            <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
              <div className="sm:flex justify-center items-center w-full lg:w-[445px] h-auto px-[17px] py-[20px] sm:px-0 sm:py-0 lg:p-0">
                <Image
                  className="w-full h-full object-contain"
                  src={aboutCompany}
                  width={445}
                  height={600}
                  alt="about company picture"
                />
              </div>
            </motion.div>

            <div className="lg:flex lg:items-center sm:my-[30px]">
              <div className="">
                <div className="">
                  <Logo type="dark" />
                </div>

                <h2 className="text-[18px] md:text-[34px] font-bold text-[#1B2330] pb-[4px] lg:pb-[20px]">
                  <TypingText
                    title={data[`home_title_${locale}`]}
                    textStyles="text-[18px] md:text-[34px] font-bold text-[#1B2330] pb-[20px]"
                  />
                </h2>

                <motion.div
                  variants={fadeIn("up", "tween", 0.2, 1)}
                  className="content flex flex-col gap-[15px] lg:max-w-[689px] pb-[30px]"
                  dangerouslySetInnerHTML={{
                    __html: data[`home_text_${locale}`]
                  }}
                ></motion.div>

                <motion.div variants={fadeIn("up", "tween", 0.4, 1)}>
                  <Link href={`/${locale}/about`} locale={locale}>
                    <Button type="round">{t("main_button")}</Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="container block lg:hidden">
        <div className="sm:w-full my-[20px] sm:my-[10px] lg:my-[50px] lg:flex justify-center lg:item-center lg:gap-[80px]">
          <div className="w-full sm:w-[300px] lg:w-[445px] h-auto sm:my-0 sm:mx-auto sm:flex justify-center items-center px-[17px] py-[20px] sm:px-0 sm:py-0 lg:p-0">
            <Image
              className="w-full h-full object-contain"
              src={aboutCompany}
              width={445}
              height={600}
              alt="about company picture"
            />
          </div>

          <div className="lg:flex lg:items-center sm:my-[30px]">
            <div>
              <div>
                <Logo type="dark" />
              </div>

              <h2>
                <TypingText
                  title={data[`home_title_${locale}`]}
                  textStyles="text-[18px] sm:text-[34px] md:text-[34px] font-bold text-[#1B2330] pb-[20px]"
                />
              </h2>

              <div
                className="content flex flex-col gap-[15px] lg:max-w-[689px] pb-[30px]"
                dangerouslySetInnerHTML={{
                  __html: data[`home_text_${locale}`]
                }}
              ></div>

              <div variants={fadeIn("up", "tween", 0.6, 1)}>
                <Link href={`/${locale}/about`} locale={locale}>
                  <Button type="round">{t("main_button")}</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPreview;
