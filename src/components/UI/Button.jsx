import React from "react";

const Button = ({ children, type }) => {
  switch (type) {
    case "round":
      return (
        <button className="min-w-[164px] px-6 py-3 bg-green  rounded-[45px] text-white font-semibold ease-in-out duration-300 hover:shadow-lg raise active:shadow-lg">
          {children}
        </button>
      );

    case "square":
      return (
        <button className="min-w-[164px] px-[1.875rem] py-[0.875rem] bg-green rounded-[15px] text-white font-semibold ease-in-out duration-300 hover:shadow-lg raise active:shadow-lg flex item-center justify-center"
        >
          {children}
        </button>
      );
  }
};

export default Button;
