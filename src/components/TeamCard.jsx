import React, {useState, useEffect} from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import { fadeIn } from "utils/motions";

const TeamCard = ({ item }) => {
  const { locale } = useRouter();
  const { full_name, photo } = item;
  const [imagePath, setImagePath] = useState("");
  
  useEffect(() => {
    let str = process.env.NEXT_APP_STORAGE_URL + photo;
    setImagePath(str.replace(/\\/g, "/"));
  }, []);
  

  return (
    <motion.div
      className="w-[200px] lg:w-[250px] select-none"
      variants={fadeIn("right", "spring", item.id * 0.2, 0.75)}
    >
      <div className="w-full h-[270px] lg:h-[340px] overflow-hidden mb-[15px] rounded-[15px] relative">
        {imagePath && (
          <Image
            className="w-full h-full object-cover"
            src={imagePath}
            fill
            alt="our team photo"
          />
        )}
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
