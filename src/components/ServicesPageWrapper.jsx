import React from "react";

import { images } from "constants";
import Logo from "assets/icons/Logo";
import { ServicesDescription, WithOurPartners } from "sections";
import Advantages from "sections/Advantages";
import Gallery from "sections/Gallery";

const ServicesPageWrapper = ({title, text}) => {
  return (
    <section className="w-full mt-[79px] lg:mt-[158px] py-[25px] lg:py-[50px] mb-[50px]">
      <div className="container relative">
        <div className="w-full h-[220px] lg:h-[500px] overflow-hidden rounded-[15px] relative">
          <img
            className="w-full h-full object-cover"
            src={images.cooperation001.src}
            alt="company profile photo"
          />

          <div className="w-full h-full top-0 bottom-0 left-0 right-0 absolute flex flex-col justify-end p-[20px] lg:p-[40px] gradient">
            <div className="pb-[10px]">
              <Logo type="light" />
            </div>

            <h2 className="text-[18px] lg:text-[36px] text-white font-bold">
              {title}
            </h2>
          </div>
        </div>

        <div className="pt-[20px]">
          <p className="text-[17px]">
            {text}
          </p>
        </div>

        <div className='mt-[60px]'>
          <ServicesDescription/>
        </div>
      </div>

      <WithOurPartners />

      <div className='py-[30px]'>
        <Advantages/>
      </div>

      <Gallery/>
    </section>
  );
};

export default ServicesPageWrapper;
