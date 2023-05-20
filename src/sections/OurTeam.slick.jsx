import React, {useRef} from "react";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { images } from "constants";
import styles from "styles/styles";
import Logo from "assets/icons/Logo";
import { TeamCard, ControlButton } from "components";


const OurTeam = ({data}) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 7000,
    cssEase: "linear",
    adaptiveHeight: true
  };

  const prevHandler = () => {};

  const nextHandler = () => {};

  return (
    <section className="w-full my-[50px] lg:my-[100px]">
      <div className="mission__inner container">
        {/* Head */}
        <div className="flex justify-between items-end mb-[30px] ">
          <div>
            <div className="">
              <Logo type="dark" />
            </div>

            <h2 className="text-[18px] lg:text-[34px] font-bold">
              {t("our_team")}
            </h2>
          </div>

          <div className="hidden controls lg:flex items-center gap-x-[20px] pb-[8px]">
            <ControlButton
              type="prev"
              onClick={() => sliderRef?.current?.slickPrev()}
              disabled={false}
            />
            <ControlButton
              type="next"
              onClick={() => sliderRef?.current?.slickNext()}
              disabled={false}
            />
          </div>
        </div>

        {/* Slider */}
        <div>
          <Slider ref={sliderRef} {...settings}>
            {data && data.map((item, index) => <TeamCard item={item} />)}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
