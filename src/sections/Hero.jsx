import { useMediaQuery } from "react-responsive";


import {
  HeroSlider,
  HeroSliderMobile
} from "components";


const Hero = ({data}) => {
  
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

    return (
      <section className="w-full mt-[79px] lg:h-screen lg:mt-0">
        {isMobile ? (
          <HeroSliderMobile items={data} />
        ) : (
          <HeroSlider items={data} />
        )}
      </section>
    );
};

export default Hero;
