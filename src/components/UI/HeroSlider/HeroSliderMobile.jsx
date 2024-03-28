import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "next-i18next";

import { Button } from "components";

const HeroSliderMobile = ({ items }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
    touchThreshold: 100,
    appendDots: dots => (
      <div>
        <ul className="flex items-center gap-x-[15px] absolute right-[50%] translate-x-[50%] bottom-[200px] sm:bottom-[220px] z-30">
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
          <div key={index} className="w-full text-left relative">
            <div className="w-full h-[250px] sm:h-[350px] lg:h-[780px] relative bg-black">
              <Image
                className="w-full h-full object-cover opacity-60"
                src={process.env.NEXT_APP_STORAGE_URL + item.image}
                alt="services photo"
                fill
              />
            </div>

            <div className="w-full p-4 sm:px-[60px]">
              <div className="w-[239px] h-[66px] pb-5 flex items-center">
                <h1 className="w-full text-[18px] font-bold break-words">
                  {item.title}
                </h1>
              </div>

              <Link
                href={`/${locale}${item.path}`}
                locale={locale}
              >
                <Button type="round">{t("main_button")}</Button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full text-left relative">
          <div className="w-full h-[250px] sm:h-[350px] lg:h-[780px] relative bg-black"></div>
        </div>
      )}
    </Slider>
  );
};

export default HeroSliderMobile;
