import React from "react";
import { CgClose } from "react-icons/cg";
import { images } from "constants";

const QueryConfirmation = () => {
  return (
    <div className="w-full max-w-[700px] bg-white rounded-[20px] px-[15px] lg:px-[30px] pt-[15px] lg:pt-[30px] pb-[68px] lg:pb-[30px] flex flex-col gap-y-[12px] lg:relative">

      <div className="w-[42px] h-[42px] bg-[rgba(0,44,99,0.25)] lg:hover:bg-green ease-in-out duration-300 rounded-full flex justify-center items-center self-end lg:cursor-pointer lg:absolute top-[30px] right-[30px] z-50">
        <CgClose className="text-[26px] text-white" />
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="text-[16px] font-bold leading-[140%] text-center">
          Ваша заявка успешно отправлена.
        </div>
        <div className="text-[16px] text-green font-bold leading-[140%] text-center">
          Мы свяжемся с вами в ближайшее время
        </div>

        <div className="mt-[20px]">
          <img src={images.popup.src} alt="popup photo" />
        </div>
      </div>
    </div>
  );
};

export default QueryConfirmation;
