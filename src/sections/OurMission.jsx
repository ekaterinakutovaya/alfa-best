import React from "react";

import { images } from "constants";
import styles from "styles/styles";
import Logo from "assets/icons/Logo";
import ServicesOverviewCard from "components/ServicesOverviewCard";
import { SectionHeading } from "components";

const OurMission = () => {
  return (
    <section className="w-full my-[50px]">
      <div className="mission__inner container">
        <div className="lg:w-full lg:flex">
          <div className="lg:w-[60%]">
            {/* Title */}
            {/* <div>
              <div className="w-[44px]">
                <Logo type="dark" className="w-full" />
              </div>

              <h2 className="text-[18px] lg:text-[34px] font-bold pt-[10px] pb-[20px] lg:py-[10px]">
                Наша миссия
              </h2>
            </div> */}

            <SectionHeading title={"Наша миссия"} />
            <div className="mission__text">
              <p>
                Альфабест — предлагает комплексные решения по содержанию,
                клинингу, эксплуатации и техническому обслуживанию промышленных
                предприятий, объектов общественного питания, торговых и
                бизнес-центров, складских комплексов и технопарков. Мы
                поддерживаем высокие стандарты обслуживания и внедряем
                инновационные решения, применяя современные природосберегающие
                технологии.
              </p>
            </div>
          </div>

          <div className="lg:w-[40%]">
            <div className="mission__moto w-[216px] lg:w-[273px] my-[50px] lg:pl-[60px]">
              <h2 className="text-[24px] font-bold uppercase">
                <span className="text-green">ALFABEST</span> ЕДИНЫЙ СЕРВИС
                НАЦИОНАЛЬНОГО МАСШТАБА
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full lg:grid lg:grid-cols-2 lg:gap-[60px] lg:my-[30px]">
          {[...Array(4).keys()].map((item, index) => (
            <div className="w-full mb-[20px] lg:mb-0" key={index}>
              <ServicesOverviewCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
