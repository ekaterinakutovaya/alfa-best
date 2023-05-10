import React from 'react';

import Logo from "assets/icons/Logo";

const SectionHeading = ({title}) => {
    return (
        <div>
            <div className="w-[44px]">
                <Logo type="dark" className="w-full" />
            </div>

            <h2 className="text-[18px] lg:text-[34px] font-bold pt-[10px] pb-[20px] lg:py-[10px]">
                {title}
              </h2>
        </div>
    );
};

export default SectionHeading;