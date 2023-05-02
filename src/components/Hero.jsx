import React from 'react';
import { Slider, Button } from "../components";

import { images } from "../constants";

const Hero = () => {

    return (
        <section className='w-full'>
            <Slider />

            <div className='w-full p-4 sm:px-20'>
                <div className='w-[240px] pb-5'>
                    <h1 className='w-full text-lg font-bold break-words'>
                        Корпоративное питание
                    </h1>
                </div>

                <Button>
                    Узнать больше
                </Button>
            </div>
        </section>
    );
};

export default Hero;
