import React from 'react';
import SvgSelector from 'assets/icons/SvgSelector';



const SocialBar = ({color}) => {
    return (
      <ul className="flex gap-x-[24px]">
        <li className=" lg:ease-in-out lg:duration-300 lg:hover:fill-green cursor-pointer">
          <SvgSelector id="telegram" fill={color} />
        </li>
        <li className=" lg:ease-in-out lg:duration-300 lg:hover:fill-green cursor-pointer">
          <SvgSelector id="instagram" fill={color} />
        </li>
        <li className=" lg:ease-in-out lg:duration-300 lg:hover:fill-green cursor-pointer">
          <SvgSelector id="facebook" fill={color} />
        </li>
      </ul>
    );
};

export default SocialBar;