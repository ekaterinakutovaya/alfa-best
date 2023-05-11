import React from "react";

import { images } from "../constants";
import { SectionHeading, ContactsForm } from "components";
import Logo from "assets/icons/Logo";

const ContactsSection = () => {
  return (
    <section className="w-full mt-[79px] lg:mt-[158px] py-[30px] lg:py-[60px]">
      <div className="container lg:flex justify-between items-end">
        <div>
          {/* Head */}
          <div className='max-w-[651px]'>
            <h2 className="text-[18px] lg:text-[36px] font-bold mb-[20px]">Контакты</h2>
            <p className="leading-[140%]">
              Вы можете написать нам через форму обратной связи. Мы адресуем ваш
              вопрос специалисту, который при необходимости свяжется с вами
              напрямую или направит ответ по электронной почте.
            </p>
          </div>

          {/* Form */}
          <ContactsForm />

          {/* Contacts info */}
          <div className="w-full bg-[#F2FCF9] rounded-[15px] py-[20px] px-[15px]">
            <div>
              <label
                className="text-[14px] leading-[140%] text-grey"
                htmlFor=""
              >
                Телефон
              </label>
              <div className="flex gap-x-[30px]">
                <a href="tel:+998990022223">+998 99 002 22 23</a>
                <a href="tel:+998932221232">+998 93 222 12 32</a>
              </div>
            </div>

            <div className="mt-[15px]">
              <label
                className="text-[14px] leading-[140%] text-grey"
                htmlFor=""
              >
                Адрес
              </label>
              <div className="flex gap-x-[30px]">
                <span href="tel:+998990022223">
                  г. Ташкент, ул. Шота Руставели 156
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div>
          <div className="w-full h-[380px] lg:w-[450px] lg:h-[511px] lg:rounded-[15px] overflow-hidden mt-[30px]">
            <img
              className="w-full h-full object-cover"
              src={images.contacts.src}
              alt="contacts photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
