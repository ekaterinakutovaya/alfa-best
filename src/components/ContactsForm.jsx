import React, {useState, useEffect} from "react";


import Button from "./UI/Button";
import { Popup, QueryConfirmation } from "components";


const ContactsForm = () => {
  const [popupOpen, setPopupOpen] = useState(false);

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
        <form className="w-full flex flex-col gap-y-[15px]">

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
        </div>

      {popupOpen ? <Popup><QueryConfirmation/></Popup> : ''}
        
    </section>
  );
};

export default ContactsForm;
