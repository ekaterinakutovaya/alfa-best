import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { DropdownSelect, Popup, QueryConfirmation, Spinner } from "components";
import Button from "./UI/Button";
import applicationImage from "../assets/images/application.png";
import { fade, fadeIn, staggerContainer } from "../utils/motions";
import { postCustomerService } from "services/data";

const ApplicationForm = ({ types }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  const isDesktop = useMediaQuery({ query: `(min-width: 1280px` });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownLabel, setDropdownLabel] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  

  const onSubmit = data => {
    setLoading(true);

    const postData = {
      service_id: dropdownLabel,
      full_name: data.username,
      phone: data.userphone
    };

    postCustomerService(postData).then(res => {

      setTimeout(() => {
        setLoading(false);
        if (res.status === 200) {
          setPopupOpen(true);
          reset({ username: '', userphone: '' })
        }
      }, 1500);

    });
  };
  const selectType = e => {
    setDropdownLabel(e.currentTarget.dataset.index);
    setDropdownOpen(false);
  };

  return (
    <section className="w-full my-[40px] lg:my-[80px]">
      <motion.div
        variants={staggerContainer}
        initial={isDesktop ? "hidden" : "show"}
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
        className="container w-full"
      >
        <motion.div
          variants={fade(0.2, 1)}
          className="w-full bg-[#F2FCF9] rounded-[20px] py-[20px] sm:py-[40px] px-[15px] sm:px-[60px] flex flex-col lg:flex-row gap-y-[30px] items-center justify-between"
        >
          {/* Form */}
          <motion.form
            variants={fadeIn("right", "tween", 0.3, 1)}
            className="w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full h-[400px] my-0 mx-auto flex flex-col gap-y-[15px]">
              <div className="w-full sm:w-[396px] ">
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

              <div className="w-full sm:w-[396px] ">
                <label
                  htmlFor="serviceType"
                  className="block text-[15px] leading-[140%]"
                >
                  {t("enter_your_name")}
                </label>
                <div className="mt-[10px]">
                  <input
                    type="text"
                    className={`w-full flex items-center justify-between min-h-[48px] py-[13.5px] px-[15px] bg-transparent border-solid border border-black rounded-[15px] focus:border-green ease-in-out duration-300 ${errors.username &&
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

              <div className="w-full sm:w-[396px]">
                <label
                  htmlFor="serviceType"
                  className="block text-[15px] leading-[140%]"
                >
                  {t("enter_your_phone")}
                </label>
                <div className="mt-[10px]">
                  <InputMask
                    className={`w-full flex items-center justify-between min-h-[48px] py-[13.5px] px-[15px] bg-transparent border-solid border border-black rounded-[15px] focus:border-green ease-in-out duration-300 ${errors.userphone &&
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

              <div className="mt-[10px]">
                <Button
                  type="square"
                  onClick={onSubmit}
                  disabled={Object.entries(errors).length || loading ? true: false}
                >
                  {loading ? (
                    <>
                      <Spinner color={"text-white"} />
                      {t("sending")}
                    </>
                  ) : (
                    <>{t("send")}</>
                  )}
                </Button>
              </div>
            </div>
          </motion.form>

          {/* Picture */}
          <motion.div
            variants={fadeIn("left", "tween", 0.3, 1)}
            className="pb-[10px] lg:pb-[0] lg:pr-[60px]"
          >
            <div className="w-[285px] lg:w-[400px] text-center">
              <img
                className="w-full h-full object-cover"
                src={applicationImage.src}
                alt="application photo"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {popupOpen ? (
        <Popup>
          <QueryConfirmation setPopupOpen={setPopupOpen} />
        </Popup>
      ) : (
        ""
      )}
    </section>
  );
};

export default ApplicationForm;
