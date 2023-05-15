import React, { useState, } from 'react';
import { useMediaQuery } from "react-responsive";


import {
  SliderMobile,
  Button,
  Slider,
  HeroSlider,
  HeroSliderMobile
} from "components";
import { images} from "constants";
import { heroItems } from "constants/constants";

const Hero = () => {
  console.log(heroItems);
 
  
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

    return (
      <section className="w-full mt-[79px] lg:mt-0">
        {/* {isMobile ? <SliderMobile /> : <Slider/>} */}
        {isMobile ? (
          <HeroSliderMobile items={heroItems} />
        ) : (
          <HeroSlider items={heroItems} />
        )}

        {/* <HeroSlider items={heroItems} /> */}
      </section>
    );
};

export default Hero;
