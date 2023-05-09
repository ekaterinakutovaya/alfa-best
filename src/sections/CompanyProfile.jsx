import React from 'react';

import { images } from "../constants";
import Logo from 'assets/icons/Logo';

const CompanyProfile = () => {
    return (
      <section className="w-full mt-[79px] lg:mt-[158px] py-[25px] lg:py-[50px] mb-[50px]">
        <div className="profile__inner container relative">
          <div className="w-full h-[220px] lg:h-[500px] overflow-hidden rounded-[15px] relative">
            <img
              className="w-full h-full object-cover"
              src={images.image001.src}
              alt="company profile photo"
            />

            <div className="w-full h-full top-0 bottom-0 left-0 right-0 absolute flex flex-col justify-end p-[20px] lg:p-[40px] gradient">
              <div className="pb-[10px]">
                <Logo type="light" />
              </div>

              <h2 className="text-[18px] lg:text-[36px] text-white font-bold">
                О нашей компании
              </h2>
            </div>
          </div>

          <div className="content pt-[20px]">
            <p className='text-[17px]'>
              Компания Альфа бест —оператор комплексного обслуживания вахтовых
              поселков на территории Республики Узбекистан.
            </p>
            <p className='text-[17px]'>
              Глубокие знания, разносторонний опыт и профессионализм наших
              сотрудников — это гарантия успехов во всех сферах деятельности,
              которыми занимается компания.. Наши задачи — обеспечить сервис
              высокого качества , снизить издержки, дать необходимый комфорт.
            </p>
          </div>
        </div>
      </section>
    );
};

export default CompanyProfile;