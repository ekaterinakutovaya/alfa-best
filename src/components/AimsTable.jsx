import React from "react";

import { images } from "../constants";
import styles from "../styles/styles";

const AimsTable = () => {
  return (
    <div className="w-full grid grid-cols-[0.5fr,2fr,1fr] gap-x-[20px] gap-y-[15px]">
      {[...Array(4).keys()].map((item, i) => (
        <>
          <div className="text-[18px] text-black font-semibold">01</div>

          <div className="text-[15px] leading-[138%]">
            Lorem ipsum dolor sit amet
          </div>

                  <div className='justify-end'>
              <div className="image w-full w-[100px] h-[70px] rounded-[5px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={images.image002.src}
                  alt="aim images"
                />
              </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default AimsTable;
