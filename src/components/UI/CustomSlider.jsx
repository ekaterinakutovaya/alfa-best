import React, { useState, useEffect } from "react";

import { images } from "constants";
import styles from "styles/styles";
import Logo from "assets/icons/Logo";
import { ControlButton } from "components";

const CustomSlider = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(items[items.length - 1].year);
  const [yearRange, setYearRange] = useState(items.slice(-5));
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(false);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const { year, image, text } = items.find(item => item.year == +currentPage);

  const [startIndex, setStartIndex] = useState(items.length - 5);
  const [endIndex, setEndIndex] = useState(items.length - 1);
  const [range, setRange] = useState([]);

  const getRange = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  useEffect(() => {
    setRange(getRange(startIndex, endIndex));
  }, [items, startIndex, endIndex]);

  useEffect(() => {
    items.forEach((item, index) => {
      range.forEach((num, i) => {
        if (index == num) {
          setYearRange(prevState => [...prevState, item]);
        }
      });
    });

    return () => {
      setYearRange([]);
    };
  }, [range]);

  useEffect(() => {
    if (currentPage == items[0].year) {
      setPrevButtonDisabled(true);
    } else {
      setPrevButtonDisabled(false);
    }
    if (currentPage == items[items.length - 1].year) {
      setNextButtonDisabled(true);
    } else {
      setNextButtonDisabled(false);
    }

    if (currentPage == yearRange[0].year && currentPage != items[0].year) {
      setStartIndex(prevState => prevState - 1);
      setEndIndex(prevState => prevState - 1);
    }

    if (
      currentPage == yearRange[yearRange.length - 1].year &&
      currentPage != items[items.length - 1].year
    ) {
      setStartIndex(prevState => prevState + 1);
      setEndIndex(prevState => prevState + 1);
    }
  }, [currentPage]);

  const yearButtonHandler = e => {
    setCurrentPage(Number(e.target.dataset.index));
  };

  const prevHandler = () => {
    setCurrentPage(prevState => prevState - 1);
  };

  const nextHandler = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  return (
    <div className="w-full my-[50px]">
      {/* Header */}
      <div className="flex justify-between items-end">
        {/* Title */}
        <div>
          <div className="">
            <Logo type="dark" />
          </div>

          <h2 className={`${styles.heading2} py-[20px] lg:py-[10px]`}>
            История
          </h2>
        </div>

        <div className="hidden controls lg:flex items-center gap-x-[20px]">
          <ControlButton
            type="prev"
            onClick={prevHandler}
            disabled={prevButtonDisabled}
          />
          <ControlButton
            type="next"
            onClick={nextHandler}
            disabled={nextButtonDisabled}
          />
        </div>
      </div>

      {/* Main */}
      <div className="lg:py-[30px] select-none">
        <div className="lg:flex items-start gap-x-[120px]">
          <div className="w-full h-[210px] mb-[20px] lg:mb-0 lg:w-[500px] lg:min-w-[500px] lg:h-[320px] overflow-hidden rounded-[20px]">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="history photo"
            />
          </div>

          <div>
            <div className="flex flex-col gap-y-[20px]">
              <span className="text-[24px] lg:text-[45px] font-bold">
                {year}
              </span>

              <div className="h-[450px] sm:h-[250px] lg:h-[275px] flex flex-col gap-y-[20px] text-[16px] lg:text-[17px]">
                {text.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="pagination pt-[20px] flex justify-between">
                {yearRange &&
                  yearRange.map((item, index) => {
                    if (item.year == currentPage) {
                      return (
                        <button
                          index={item.year}
                          key={item.year}
                          className="text-[24px] lg:text-[45px] text-green font-bold lg:cursor-pointer ease-in-out duration-300"
                        >
                          {item.year}
                        </button>
                      );
                    }

                    return (
                      <button
                        data-index={item.year}
                        key={item.year}
                        onClick={yearButtonHandler}
                        className="text-[24px] lg:text-[45px] text-gray-400 font-bold lg:cursor-pointer"
                      >
                        {item.year}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
