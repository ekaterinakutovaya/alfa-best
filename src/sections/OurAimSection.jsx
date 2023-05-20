import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { images } from "constants";
import Logo from "assets/icons/Logo";

const OurAimSection = ({ data, aimCategory }) => {
  const { locale } = useRouter();
  const [heading, setHeading] = useState([]);

  useEffect(() => {
    setHeading(data[`title_${locale}`].split(" "));
  }, []);

  return (
    <section className="container my-[30px] lg:my-[100px]">
      <div className="w-full  lg:flex lg:gap-[80px]">
        <div className="lg:w-[40%]">
          <div className="left">
            <div className="">
              <Logo type="dark" />
            </div>

            <h2 className="text-[34px] font-bold py-[10px]">
              {heading[0]} <span className="text-green">{heading[1]}</span>
            </h2>
            <div className="content flex flex-col gap-[15px] lg:max-w-[689px] pb-[30px]">
              {data[`text_${locale}`]}
            </div>
          </div>
        </div>

        <div className="lg:w-[60%]">
          {aimCategory &&
            aimCategory.map((item, i) => (
              <div
                key={i}
                className="w-full grid grid-cols-[0.3fr,2fr,1fr] py-[15px] border-solid border-b border-[#D9D9D9] last:border-b-0
                flex items-center"
              >
                <div className="lg:font-semibold">{`0${item.id}`}</div>
                <div className="w-[184px] lg:w-auto font-semibold lg:font-normal">
                  {item[`text_${locale}`]}
                </div>
                <div className="lg:justify-self-end">
                  <div className="image w-[100px] h-[70px] lg:w-[110px] lg:h-[60px] rounded-[5px] overflow-hidden">
                    <Image
                      className="w-full h-full object-cover relative"
                      src={process.env.NEXT_APP_STORAGE_URL + item.image}
                      alt="aim images"
                      width={100}
                      height={70}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurAimSection;
