import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";


const ServicesDescription = ({data}) => {
  const { locale } = useRouter();
 
  return (
    <div className="w-full my-[30px] lg:my-[80px] lg:my-[0] p-[20px] lg:p-[40px] bg-[#F2FCF9] rounded-[20px]">
      <ul className="w-full lg:grid lg:grid-cols-2 lg:gap-[60px] lg:my-[30px]">
        {data &&
          data.map((item, index) => (
            <li
              className="w-full flex items-start gap-[20px] mb-[30px] last:mb-0 lg:mb-0"
              key={index}
            >
              <div className="w-[40px] min-w-[40px] h-[40px]">
                {/* <Image
                  src={process.env.NEXT_APP_STORAGE_URL + item.icon}
                  layout='fill'
                  width={40}
                  height={40}
                  objectFit="contain"
              
                /> */}
                <img
                  className="w-full h-full object-contain"
                  src={process.env.NEXT_APP_STORAGE_URL + item.icon}
                  alt="services icon"
                />
              </div>

              <div className="font-medium text-[15px]">
                {item[`text_${locale}`]}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ServicesDescription;
