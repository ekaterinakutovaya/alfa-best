import { HeroSlider, HeroSliderMobile } from "components";

const Hero = ({ data }) => {
  return (
    <section className="w-full mt-[79px] lg:h-screen lg:mt-0">
      <div className="hidden lg:block">
        <HeroSlider items={data} />
      </div>
      <div className="block lg:hidden">
        <HeroSliderMobile items={data} />
      </div>
    </section>
  );
};

export default Hero;
