import React from 'react';
import { useMediaQuery } from "react-responsive";


import { SliderMobile, Button, Slider } from "../components";
import { images } from "../constants";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

    return (
      <section className="w-full">
        {isMobile ? <SliderMobile /> : <Slider/>}
       
      </section>
    );
};

export default Hero;
