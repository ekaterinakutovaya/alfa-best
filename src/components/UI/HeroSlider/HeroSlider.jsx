import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

import { fadeIn } from "utils/motions";
import { Button } from "components";

export const SlickDots = ({ children }) => {
  <div>
    <ul className="flex items-center gap-x-[15px] absolute right-[90px] bottom-[90px] z-40">
      {children}
    </ul>
  </div>;
};

const HeroSlider = ({ items }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  console.log(items)

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    appendDots: dots => (
      <div>
        <ul className="flex items-center gap-x-[15px] absolute right-[90px] bottom-[90px] z-40 delay-1000">
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] bg-transparent border-solid border-[1.5px] border-white rounded-full lg:cursor-pointer ease-in-out duration-300"></div>
    )
  };

  return (
    <Slider {...settings}>
      {items ? (
        items.map((item, index) => (
          <div key={index} className="w-full lg:h-screen text-left relative">
            <div className="w-full h-[250px] sm:h-[350px] lg:h-full relative bg-black">
              <Image
                className="w-full h-full object-cover opacity-60"
                // src={env.NEXT_APP_STORAGE_URL + item.img}
                  src={`https://alfabest.napaautomotive.uz/storage/${item.img}`}
                alt="services photo"
                fill
              />

              <motion.div
                className="w-full p-4 lg:px-20 absolute bottom-[60px] lg:bottom-[90px] z-40"
                variants={fadeIn("right", "tween", 0.2, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="w-[50%] h-[162px] pb-5 flex items-center">
                  <h1 className="w-full text-[36px] lg:text-[45px] text-white font-bold break-words">
                    {item[`text_${locale}`]}
                  </h1>
                </div>

                <Link
                  href={`/${locale}/${item.home_service_link}`}
                  locale={locale}
                >
                  <Button type="round">{t("main_button")}</Button>
                </Link>
              </motion.div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full lg:h-screen text-left relative">
          <div className="w-full h-[250px] sm:h-[350px] lg:h-full relative bg-black"></div>
        </div>
      )}
    </Slider>
  );
};

export default HeroSlider;
