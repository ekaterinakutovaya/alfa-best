import React, { useState, useEffect, useRef } from "react";

import { DropdownSelect } from "components";
import { images } from "constants";
import Button from "./UI/Button";

const types = [
  { index: 0, label: "Корпоративное питание" },
  { index: 1, label: "Инженерно-техническая эксплуатация" },
  { index: 2, label: "Сервисное и бытовое обслуживание" },
  { index: 3, label: "Транспортные и пассажирские перевозки" }
];

const ApplicationForm = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownLabel, setDropdownLabel] = useState(0);

    

  const selectType = e => {
    let idx = Number(e.currentTarget.dataset.index);
    setDropdownLabel(
      prevState => types.filter(type => type.index === idx)[0].label
    );
    dispatch(setSelectedType(idx));
    setDropdownOpen(false);
  };

  return (
    <section className="w-full my-[40px] lg:my-[80px]">
      <div className="container w-full">
        <div className="w-full bg-[#F2FCF9] rounded-[20px] py-[20px] lg:py-[40px] px-[15px] lg:px-[60px] flex flex-col lg:flex-row gap-y-[30px] items-center">
          {/* Form */}
          <form className="w-full flex flex-col gap-y-[15px]">
            <div className="w-full lg:w-[396px]">
              <label
                htmlFor="serviceType"
                className="block text-[15px] leading-[140%]"
              >
                Выберите тип услуги
              </label>
              <div className="mt-[10px]">
                <DropdownSelect
                  items={types}
                  onClick={selectType}
                  visible={dropdownOpen}
                  setVisible={setDropdownOpen}
                  label={types[dropdownLabel].label}
                />
              </div>
            </div>

            <div className="w-full lg:w-[396px]">
              <label
                htmlFor="serviceType"
                className="block text-[15px] leading-[140%]"
              >
                Введите свое полное имя
              </label>
              <div className="mt-[10px]">
                <input
                  type="text"
                  className="w-full flex items-center justify-between min-h-[48px] py-[13.5px] px-[15px] bg-transparent border-solid border border-black rounded-[15px]"
                  placeholder="Имя, фамилия"
                />
              </div>
            </div>

            <div className="w-full lg:w-[396px]">
              <label
                htmlFor="serviceType"
                className="block text-[15px] leading-[140%]"
              >
                Введите свой номер телефона
              </label>
              <div className="mt-[10px]">
                <input
                  type="text"
                  className="w-full flex items-center justify-between min-h-[48px] py-[13.5px] px-[15px] bg-transparent border-solid border border-black rounded-[15px]"
                  placeholder="+998"
                />
              </div>
            </div>

            <div>
              <Button type="square">Отправить</Button>
            </div>
          </form>

          {/* Picture */}
          <div className="pb-[10px] lg:pb-[0] lg:pr-[60px]">
            <div className="w-[285px] lg:w-[400px] text-center">
              <img
                className="w-full h-full object-cover"
                src={images.application.src}
                alt="application photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
