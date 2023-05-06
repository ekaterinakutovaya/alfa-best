import React from "react";

import SvgSelector from "../assets/icons/SvgSelector";

const Statistics = () => {
  return (
    <section className="container">
      <div className="statistics__inner w-full my-[50px] flex flex-col gap-[30px] lg:flex-row lg:justify-between">
        <div className="statistics__item">
          <div className="flex items-end gap-[10px]">
            <div className="icon w-[40px] h-[40px] mr-[10px]">
              <SvgSelector id="map" />
            </div>

            <div>
              <span className="text-2xl font-medium">+320.000 </span>кв.м
            </div>
          </div>

          <div className="text-[#8B8B8B]">Площади объектов благоустройства</div>
        </div>
        <div className="statistics__item">
          <div className="flex items-end gap-[10px]">
            <div className="icon w-[40px] h-[40px] mr-[10px]">
              <SvgSelector id="flag" />
            </div>

            <div>
              <span className="text-2xl font-medium">+70.000 </span>кв.м
            </div>
          </div>

          <div className="text-[#8B8B8B]">Площади объектов клининга</div>
        </div>
        <div className="statistics__item">
          <div className="flex items-end gap-[10px]">
            <div className="icon w-[40px] h-[40px] mr-[10px]">
              <SvgSelector id="bowl" />
            </div>

            <div>
              <span className="text-2xl font-medium">+1000 </span>
            </div>
          </div>

          <div className="text-[#8B8B8B]">Питающихся</div>
        </div>
        <div className="statistics__item">
          <div className="flex items-end gap-[10px]">
            <div className="icon w-[40px] h-[40px] mr-[10px]">
              <SvgSelector id="person" />
            </div>

            <div>
              <span className="text-2xl font-medium">+500 </span>
            </div>
          </div>

          <div className="text-[#8B8B8B]">Сотрудников</div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
