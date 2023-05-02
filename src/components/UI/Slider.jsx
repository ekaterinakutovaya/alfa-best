import React from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { images } from "../../constants";

const Slider = () => {

    const settings = {
        animationType: "fadeout",
        mouseTracking: true,
        // autoPlay: true,
        infinite: true,
        stopAutoPlayOnHover: true,
        disableButtonsControls: true,
        disableAutoPlayOnAction: true,
        autoPlayStrategy: "default",
        animationDuration: 1000,
        autoPlayInterval: 10000,
    };

    return (
        <AliceCarousel {...settings}>
            
            <div className='w-full h-[250px]'>
                <img className='w-full h-full object-cover' src={images.image001.src} alt="header photo" />
            </div>
            <div className='w-full h-[250px]'>
                <img className='w-full h-full object-cover' src={images.image002.src} alt="header photo" />
            </div>
            <div className='w-full h-[250px]'>
                <img className='w-full h-full object-cover' src={images.image003.src} alt="header photo" />
            </div>
            <div className='w-full h-[250px]'>
                <img className='w-full h-full object-cover' src={images.image004.src} alt="header photo" />
            </div>
        </AliceCarousel>
    );
};

export default Slider;