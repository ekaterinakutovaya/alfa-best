import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { DropdownSelect } from "components";
import { images } from "constants";
import Button from "./UI/Button";

// const types = [
//   { index: 0, label: "Корпоративное питание" },
//   { index: 1, label: "Инженерно-техническая эксплуатация" },
//   { index: 2, label: "Сервисное и бытовое обслуживание" },
//   { index: 3, label: "Транспортные и пассажирские перевозки" }
// ];

const ApplicationForm = ({ types }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownLabel, setDropdownLabel] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = data => console.log(data);

  const selectType = e => {
    setDropdownLabel(e.currentTarget.dataset.index);
    setDropdownOpen(false);
  };

  return (
    <section className="w-full my-[40px] lg:my-[80px]">
      <div className="container w-full">
        <div className="w-full bg-[#F2FCF9] rounded-[20px] py-[20px] lg:py-[40px] px-[15px] lg:px-[60px] flex flex-col lg:flex-row gap-y-[30px] items-center">
          {/* Form */}
          <form
            className="w-full flex flex-col gap-y-[15px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full lg:w-[396px]">
              <label
                htmlFor="serviceType"
                className="block text-[15px] leading-[140%]"
              >
                {t("choose_type")}
              </label>
              <div className="mt-[10px]">
                <DropdownSelect
                  items={types}
                  onClick={selectType}
                  visible={dropdownOpen}
                  setVisible={setDropdownOpen}
                  label={types[dropdownLabel][`title_${locale}`]}
                />
              </div>
            </div>

            <div className="w-full lg:w-[396px]">
              <label
                htmlFor="serviceType"
                className="block text-[15px] leading-[140%]"
              >
                {t("enter_your_name")}
              </label>
              <div className="mt-[10px]">
                <input
                  type="text"
                  className={`w-full flex items-center justify-between min-h-[48px] py-[13.5px] px-[15px] bg-transparent border-solid border border-black rounded-[15px] ${errors.username &&
                    "border-red-600"}`}
                  placeholder={t("full_name_placeholder")}
                  {...register("username", { required: true })}
                />

                {errors.username && (
                  <span className="text-[14px] text-red-500">
                    {t("require_field")}
                  </span>
                )}
              </div>
            </div>

            <div className="w-full lg:w-[396px]">
              <label
                htmlFor="serviceType"
                className="block text-[15px] leading-[140%]"
              >
                {t("enter_your_phone")}
              </label>
              <div className="mt-[10px]">
                <InputMask
                  className={`w-full flex items-center justify-between min-h-[48px] py-[13.5px] px-[15px] bg-transparent border-solid border border-black rounded-[15px] ${errors.userphone &&
                    "border-red-600"}`}
                  mask="+ (\9\9\8\) 99 999 99 99"
                  name="phoneNumber"
                  placeholder="+(998) __ ___ __ __"
                  {...register("userphone", { required: true })}
                />

                {errors.userphone && (
                  <span className="text-[14px] text-red-500">
                    {t("require_field")}
                  </span>
                )}
              </div>
            </div>

            <div className='mt-[10px]'>
              <Button type="square" onClick={onSubmit}>
                {t("send")}
              </Button>
            </div>
          </form>

          {/* Picture */}
          <div className="pb-[10px] lg:pb-[0] lg:pr-[60px]">
            <div className="w-[285px] lg:w-[400px] text-center">
              <img
                className="w-full h-full object-cover"
                src={images?.application?.src}
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
