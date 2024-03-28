import Image from "next/image";
import { motion } from "framer-motion";
import process from "../../next.config";

import { fadeIn } from "utils/motions";

const TeamCard = ({ item }) => {
  const { full_name, photo } = item;
  
  return (
    <motion.div
      className="w-[200px] lg:w-[250px] select-none"
      variants={fadeIn("right", "spring", item.id * 0.2, 0.75)}
    >
      <div className="w-full h-[270px] lg:h-[340px] overflow-hidden mb-[15px] rounded-[15px] relative">
        {photo && (
          <Image
            className="w-full h-full object-cover"
            src={process.env.NEXT_APP_STORAGE_URL + photo}
            fill
            alt="our team photo"
          />
        )}
      </div>

      <div className="text-[16px] font-bold pb-[8px] text-left">
        {full_name}
      </div>

      <div className="text-grey text-[14px] text-left">
        {item.position}
      </div>
    </motion.div>
  );
};

export default TeamCard;
