import React, { useState } from "react";

import { images } from "constants";
import { Button } from "components";

const HeroSlider = ({ items }) => {
  const [state, setState] = useState(0);

  const nextHandler = () => {
    setState(prevState => prevState + 1);
  };

  const prevHandler = () => {
    const newState = state - 1;
    if (newState < 0) {
      setState(prevState => items.length - 1);
    } else {
      setState(prevState => prevState - 1);
    }
  };

  const paginationHandler = (e) => {
    let idx = Number(e.currentTarget.dataset.index);
    setState(prevState => prevState = idx);
  }

  const dragHandler = (e) => {
    console.log(e);
    
  }

  return (
    <div>
      <div className="w-full text-left relative" onDrag={dragHandler}>
        <div className="w-full h-[250px] sm:h-[350px] lg:h-[780px] relative bg-black">
          <img
            className="w-full h-full object-cover opacity-60"
            src={items[state].image}
            alt="header photo"
          />

          <div className="w-full p-4 sm:px-20 absolute bottom-[60px] lg:bottom-[90px]">
            <div className="w-[50%] h-[162px] pb-5 flex items-center">
              <h1 className="w-full text-[36px] lg:text-[45px] text-white font-bold break-words">
                {items[state].title}
              </h1>
            </div>

            <Button type="round">Узнать больше</Button>
          </div>
        </div>

        <ul className="flex items-center gap-x-[15px] absolute right-[90px] bottom-[60px] z-50">
          {items &&
            items.map((_, index) => {
              if (index == state) {
                return (
                  <li
                    key={index}
                    data-index={index}
                    onClick={paginationHandler}
                    className="w-[30px] h-[30px] bg-white border-solid border-2 border-white rounded-full lg:cursor-pointer ease-in-out duration-300"
                  ></li>
                );
              }
              return (
                <li
                  key={index}
                  data-index={index}
                  onClick={paginationHandler}
                  className="w-[30px] h-[30px] bg-transparent border-solid border-2 border-white rounded-full lg:cursor-pointer ease-in-out duration-300"
                ></li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default HeroSlider;
