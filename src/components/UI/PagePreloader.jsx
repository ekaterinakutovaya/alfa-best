import React from "react";

import Logo from "../../assets/icons/Logo";

const PagePreloader = () => {
  return (
    <div className="preloader w-screen h-screen fixed top-0 left-0 z-50 overflow-hidden bg-white px-[25px] flex justify-center items-center pointer-events-none">
      <Logo type="color-dark-full" className="animate-pulse" />
    </div>
  );
};

export default PagePreloader;
