import React from "react";

import SvgSelector from "../../assets/icons/SvgSelector";

const ControlButton = (props) => {  
  const {onClick, disabled, type} = props;
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      // className="w-[48px] h-[48px] rounded-full border-solid border-2 border-[#E7E5EA] flex justify-center items-center
      // ease-in-out duration-300 hover:border-green"
      className={`${type}-button w-[48px] h-[48px] rounded-full border-solid border-2 border-[#E7E5EA] flex justify-center items-center
      ease-in-out duration-300 hover:border-green`}
    >
      <SvgSelector
        id={type}
        className={`${disabled == true ? "fill-[#E7E5EA]" : "fill-black"}`}
      />
    </button>
  );
};

export default ControlButton;
