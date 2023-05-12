import React from "react";
import SvgSelector from "assets/icons/SvgSelector";

const SocialBar = ({ color, size }) => {
  return (
    <ul className="flex gap-x-[24px]">
      <li
        className={`fill-${color} lg:ease-in-out lg:duration-300 lg:hover:fill-green cursor-pointer`}
      >
        <SvgSelector
          id="telegram"
          fill={color}
          className={`w-[${size}px] h-[${size}px]`}
        />
      </li>
      <li
        className={`fill-${color} lg:ease-in-out lg:duration-300 lg:hover:fill-green cursor-pointer`}
      >
        <SvgSelector id="instagram" fill={color} className={`w-[${size}px]`} />
      </li>
      <li
        className={`fill-${color} lg:ease-in-out lg:duration-300 lg:hover:fill-green cursor-pointer`}
      >
        <SvgSelector id="facebook" fill={color} className={`w-[${size}px]`} />
      </li>
    </ul>
  );
};

export default SocialBar;
