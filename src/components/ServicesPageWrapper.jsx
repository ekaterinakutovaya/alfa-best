import React from "react";
import { useRouter } from "next/router";

import Logo from "assets/icons/Logo";
import { ServicesDescription, WithOurPartners } from "sections";
import Advantages from "sections/Advantages";
import Gallery from "sections/Gallery";

const ServicesPageWrapper = ({
  title,
  text,
  image,
  servicesDescription,
  advantages,
  gallery
}) => {
  const { locale } = useRouter();
  console.log(text);
  
  

  return (
    <section className="w-full mt-[79px] lg:mt-[158px] pt-[25px] lg:py-[50px]">
      <div className="container relative">
        <div className="w-full h-[220px] lg:h-[500px] overflow-hidden rounded-[15px] relative">
          <img
            className="w-full h-full object-cover"
            src={process.env.NEXT_APP_STORAGE_URL + image}
            alt="company profile photo"
          />

          <div className="w-full h-full top-0 bottom-0 left-0 right-0 absolute flex flex-col justify-end p-[20px] lg:p-[40px] gradient">
            <div className="pb-[10px]">
              <Logo type="light" />
            </div>

            <h2 className="text-[18px] lg:text-[36px] text-white font-bold">
              {title}
            </h2>
          </div>
        </div>

        {/* {locale == "ru" ? (
          <div
            className="pt-[20px] text-[17px]"
            dangerouslySetInnerHTML={{
              __html: text
            }}
          ></div>
        ) : (
          <div className="pt-[20px] text-[17px]">
            Biz Buyurtmachining turar-joy va ma'muriy binolarida
            foydalaniladigan binolar, inshootlar, muhandislik tizimlari, maishiy
            texnika, oshxona, kir yuvish va boshqa jihozlarga texnik xizmat
            ko'rsatish va ta'mirlash bo'yicha ishlarni bajaramiz va xizmatlar
            ko'rsatamiz
          </div>
        )} */}

        <div className="w-[1440px]">
          <div
            className="pt-[20px] text-[17px] break-words"
            dangerouslySetInnerHTML={{
              __html: text
            }}
          ></div>
        </div>

        {servicesDescription.length ? (
          <div className="lg:mt-[60px]">
            <ServicesDescription data={servicesDescription} />
          </div>
        ) : (
          ""
        )}
      </div>

      <WithOurPartners />

      <div className="lg:my-[30px]">
        <Advantages data={advantages} />
      </div>

      <Gallery data={gallery} />
    </section>
  );
};

export default ServicesPageWrapper;
