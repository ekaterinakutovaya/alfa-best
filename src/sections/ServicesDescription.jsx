import React from "react";

import { images } from "constants";

const ServicesDescription = () => {
  return (
    <div className="w-full my-[30px] lg:my-[80px] lg:my-[0] p-[20px] lg:p-[40px] bg-[#F2FCF9] rounded-[20px]">
      <ul className="w-full lg:grid lg:grid-cols-2 lg:gap-[60px] lg:my-[30px]">
        {[...Array(6).keys()].map((item, index) => (
          <li
            className="w-full flex items-start gap-[20px] mb-[30px] last:mb-0 lg:mb-0"
            key={index}
          >
            <div className="w-[40px] min-w-[40px] lg:w-[40px] lg:h-[40px]">
              <img
                className="w-full h-full"
                src={images.icon003.src}
                alt="services icon"
              />
            </div>

            <div className="font-medium text-[15px]">
              Дезинсекция, дезинфекция и дератизация зданий, помещений и
              территории Заказчика
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesDescription;
