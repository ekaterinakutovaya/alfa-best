import React from "react";

import { images } from "constants";
import { SectionHeading } from "components";

const AboutHistory = () => {
  return (
    <section className="w-full my-[50px] select-none">
      <div className="container">
        <SectionHeading title={"История"} />

        <div className="lg:py-[30px] select-none">
          <div className="lg:flex items-center gap-x-[45px]">
            <div className="w-full h-[210px] mb-[20px] lg:mb-0 lg:w-[500px] lg:min-w-[500px] lg:h-[320px] overflow-hidden rounded-[20px]">
              <img
                className="w-full h-full object-cover"
                src={images.image004.src}
                alt="history photo"
              />
            </div>

            <div>
              <div className="flex flex-col gap-y-[20px]">
                <h3 className='text-[18px] font-bold leading-[140%]'>Начало осуществления деятельности</h3>
                <div className="flex flex-col gap-y-[20px] text-[16px] lg:text-[17px]">
                  <p>
                    Начало осуществления деятельности корпоративного питания и
                    инженерно-технической эксплуатации
                  </p>
                  <p>
                    По требованиям контролирующих инстанций, техобслуживание
                    зданий начинается с момента введения объекта в эксплуатации.
                    В качестве управляющей компании может выступать любая
                    организация, имеющая лицензию и соответствующие возможности
                    для проведения измерительных, ремонтных работ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
