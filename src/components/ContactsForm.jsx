import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { useTranslation } from "next-i18next";

import Button from "./UI/Button";
import { Popup, QueryConfirmation } from "components";


const ContactsForm = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const { t } = useTranslation("");
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = data => console.log(data);

  useEffect(() => {
    if (popupOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = "unset";
    }
  }, [popupOpen])


  return (
    <section className="w-full my-[30px]">
      <div className="w-full">
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

          <div className="w-full lg:w-[396px] mb-[10px]">
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

          <div>
            <Button type="square">
              {t("send")}
            </Button>
          </div>
        </form>
      </div>

      {popupOpen ? (
        <Popup>
          <QueryConfirmation />
        </Popup>
      ) : (
        ""
      )}
    </section>
  );
};

export default ContactsForm;
