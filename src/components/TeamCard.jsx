import React from 'react';
import { useRouter } from "next/router";

import { images } from "constants";

const TeamCard = ({ item}) => {
  const { locale } = useRouter();
  const {full_name, photo} = item;
  
    return (
      <div className="w-[200px] lg:w-[250px] select-none">
        <div className="w-full h-[270px] lg:h-[340px] overflow-hidden mb-[15px] rounded-[15px]">
          <img
            className="w-full h-full object-cover"
            // src={images.people001.src}
            src={`/${photo}`}
            alt="our team photo"
          />
        </div>

        <div className="text-[16px] font-bold pb-[8px] text-left">
          {full_name}
        </div>

        <div className="text-grey text-[14px] text-left">
          {item[`position_${locale}`]}
        </div>
      </div>
    );
};

export default TeamCard;