import React from "react";

import SvgSelector from "../../assets/icons/SvgSelector";

const ControlButton = ({ type }) => {
  return (
    <button
      className="w-[48px] h-[48px] rounded-full border-solid border-2 border-[#E7E5EA] flex justify-center items-center
      ease-in-out duration-300 hover:border-green
    "
    >
      <SvgSelector id={type} />
    </button>
  );
};

export default ControlButton;
