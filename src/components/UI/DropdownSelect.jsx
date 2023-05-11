import React, { useState, useEffect, useRef } from "react";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

const DropdownSelect = ({ items, onClick, visible, setVisible, label }) => {
  const ref = useRef(null);

  const toggleList = () => {
    setVisible(prevVisible => !prevVisible);
  };

  useEffect(() => {
    document.addEventListener("click", globalClickListener);

    return () => {
      document.removeEventListener("click", globalClickListener);
    };
  }, [visible]);

  const globalClickListener = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setVisible(false);
    }
  };

  return (
    <div className="w-full relative" ref={ref}>
      {/* Input */}
      <div
        className="w-full flex items-center justify-between min-h-[48px] py-[13.5px] px-[15px] bg-transparent border-solid border border-black rounded-[15px]"
        onClick={() => toggleList()}
      >
        {label}
        {visible ? <BsCaretUpFill /> : <BsCaretDownFill className='mt-[4px]' />}
      </div>
    </div>
  );
};

export default DropdownSelect;
