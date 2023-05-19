import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "next-i18next";

import { Button } from "components";
import { STORAGE_URL } from "constants/constants";

const HeroSlider = ({ items }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");

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
        <ul className="flex items-center gap-x-[15px] absolute right-[90px] bottom-[90px] z-40">
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
      {items &&
        items.map((item, index) => (
          // <div key={index} className="w-full text-left relative">
          //   <div className="w-full h-[250px] sm:h-[350px] lg:h-[780px] relative bg-black">
          <div key={index} className="w-full lg:h-screen text-left relative">
            <div className="w-full h-[250px] sm:h-[350px] lg:h-full relative bg-black">
              <Image
                className="w-full h-full object-cover opacity-60"
                src={process.env.NEXT_APP_STORAGE_URL + item.img}
                alt="services photo"
                fill
              />

              <div className="w-full p-4 sm:px-20 absolute bottom-[60px] lg:bottom-[90px]">
                <div className="w-[50%] h-[162px] pb-5 flex items-center">
                  <h1 className="w-full text-[36px] lg:text-[45px] text-white font-bold break-words">
                    {item[`text_${locale}`]}
                  </h1>
                </div>

                <Button type="round">
                  <Link
                    href={`/${locale}/${item.home_service_link}`}
                    locale={locale}
                  >
                    {t("main_button")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
    </Slider>
  );
};

export default HeroSlider;
