import React from "react";

import { images } from "../constants";
import { SectionHeading } from "components";
import Logo from "assets/icons/Logo";

const CareerSection = () => {
  return (
    <section className="w-full mt-[79px] lg:mt-[158px] py-[25px] lg:py-[50px]">
      <div className="container relative">
        <div className="w-full h-[220px] lg:h-[500px] overflow-hidden rounded-[15px] relative">
          <img
            className="w-full h-full object-cover"
            src={images.career001.src}
            alt="career photo"
          />

          <div className="w-full h-full top-0 bottom-0 left-0 right-0 absolute flex flex-col justify-end p-[20px] lg:p-[40px] gradient">
            <div className="pb-[10px]">
              <Logo type="light" />
            </div>

            <h2 className="text-[18px] lg:text-[36px] text-white font-bold">
              Карьера
            </h2>
          </div>
        </div>

        <div className=" pt-[30px] lg:pt-[60px]">
          <Logo type="dark" />
        </div>
        <div className="content pt-[20px] lg:flex lg:w-full gap-x-[150px]">
          <div className="lg:w-[40%]">
            <div>
              <h2 className="text-[18px] lg:text-[34px] font-bold pb-[20px]">
                Продвигайте свою карьеру вместе с нами!
              </h2>
            </div>
          </div>

          <div className="content__text lg:w-[60%]">
            <p className="text-[17px] pt-[10px]">
              Альфа-бест приглашает на работу специалистов в различных сферах
              профессиональной деятельности. Открыты вакансии в области
              общественного питания, кейтеринга, клининга, технической
              эксплуатации, сервиса и пассажирских перевозок.
            </p>

            <div className="mt-[20px] mb-[30px]">
              <div className="text-[16px] font-bold leading-[140%]">
                Наши вакансии (ссылка на страницу в HH)
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://tashkent.hh.uz/employer/9252213"
                className="text-[#3D62E3] visited:text-purple-700"
              >
                https://tashkent.hh.uz/employer/9252213
              </a>
            </div>

            <div className="pb-[5px]">
              <div className="text-[16px] font-bold leading-[140%]">
                Постоянные вакансии:
              </div>
              <div className="text-[16px] font-bold leading-[140%]">
                Обязательное требование: работа по вахтовому методу- Бухара,
                Гиссар
              </div>
            </div>

            <ul className="w-full">
              {[...Array(4).keys()].map((item, index) => (
                <li key={index} className="flex py-[15px] gap-x-[20px] border-solid border-b border-b-[#D9D9D9] last:border-b-0">
                  <div className="text-[18px] font-semibold text-green leading-[140%]">
                    01
                  </div>
                  <div>
                    <div className="text-[16px] font-bold leading-[140%] pb-[5px]">
                      Технолог пищевого производства
                    </div>
                    <div className="text-[16px] text-[#8B8B8B] leading-[140%]">
                      Опыт работы не менее года и ответственность за свою работу
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
