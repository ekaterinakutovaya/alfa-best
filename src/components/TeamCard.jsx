import React from 'react';

import { images } from "constants";

const TeamCard = () => {
    return (
        <div className="w-[200px] lg:w-[250px] select-none">
        <div className="w-full h-[270px] lg:h-[340px] overflow-hidden mb-[15px] rounded-[15px]">
          <img
            className="w-full h-full object-cover"
            src={images.people001.src}
            alt="our team photo"
          />
        </div>

        <div className='text-[16px] font-bold pb-[8px] text-left'>Darobov Baxodirmirzo</div>

            <div className='text-grey text-[14px] text-left'>Директор</div>
      </div>
    );
};

export default TeamCard;