import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { fadeIn } from "utils/motions";

const TeamCard = ({ item }) => {
  const { locale } = useRouter();
  const { full_name, photo } = item;
  

  return (
    <motion.div 
    className="w-[200px] lg:w-[250px] select-none"
      variants={fadeIn('right', 'spring', item.id * 0.2, 0.75)}
    >
      <div className="w-full h-[270px] lg:h-[340px] overflow-hidden mb-[15px] rounded-[15px] relative">
        {/* <img
          className="w-full h-full object-cover"
          src={process.env.NEXT_APP_STORAGE_URL + photo}
          alt="our team photo"
        /> */}

        <Image
          className="w-full h-full object-cover"
          src={process.env.NEXT_APP_STORAGE_URL + photo}
          alt="our team photo"
          fill
        />
      </div>

      <div className="text-[16px] font-bold pb-[8px] text-left">
        {full_name}
      </div>

      <div className="text-grey text-[14px] text-left">
        {item[`position_${locale}`]}
      </div>
    </motion.div>
  );
};

export default TeamCard;
