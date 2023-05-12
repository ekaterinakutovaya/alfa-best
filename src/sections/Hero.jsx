import React from 'react';
import { useMediaQuery } from "react-responsive";


import { SliderMobile, Button, Slider } from "components";
import { images } from "constants";
import HeroSlider from 'components/UI/HeroSlider';

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

    return (
      <section className="w-full mt-[79px] lg:mt-0">
        {isMobile ? <SliderMobile /> : <Slider/>}

        {/* <HeroSlider/> */}
       
      </section>
    );
};

export default Hero;
