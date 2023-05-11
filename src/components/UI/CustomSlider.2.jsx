import React, { useState, useEffect } from "react";

import { images } from "constants";
import styles from "styles/styles";
import Logo from "assets/icons/Logo";
import { ControlButton, Pagination } from "components";

let PageSize = 5;

const CustomSlider = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeYear, setActiveYear] = useState(2023);
  const [yearRange, setYearRange] = useState([]);
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(false);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const { year, image, text } = items.find(item => item.year == activeYear);


  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return items.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);


  console.log(items);
  // console.log(yearRange);

  useEffect(() => {
    items && setYearRange(items.slice(-5));
  }, []);

  useEffect(() => {
    if (activeYear == items[0].year) {
      setPrevButtonDisabled(true);
    } else {
      setPrevButtonDisabled(false);
    }
    if (activeYear == items[items.length - 1].year) {
      setNextButtonDisabled(true);
    } else {
      setNextButtonDisabled(false);
    }
  }, [activeYear]);

  useEffect(() => {
    // if (yearRange.length > 0) {    
    //   if (yearRange[0].year == activeYear - 2) {        
    //     let start = items.findIndex(item => item.year == activeYear) - 3;
    //     let end = start + 5;
    //     console.log(items.slice(start, end));
        
        
    //     setYearRange(items.slice(start, end));
    //   }
    // }
  }, [activeYear]);

  

  const yearButtonHandler = e => {
    setActiveYear(e.target.dataset.index);
  };

  const prevHandler = () => {
    setActiveYear(prevState => prevState - 1);
  };

  const nextHandler = () => {
    setActiveYear(prevState => prevState + 1);
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
      <div className="lg:py-[30px]">
        <div className="lg:flex items-start gap-x-[120px]">
          <div className="w-full h-[210px] mb-[20px] lg:mb-0 lg:w-[500px] lg:min-w-[500px] lg:h-[320px] overflow-hidden rounded-[20px]">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="history photo"
            />
          </div>

          <div className="flex flex-col gap-y-[20px]">
            <span className="text-[24px] lg:text-[45px] font-bold">{year}</span>

            <div className="lg:h-[275px] flex flex-col gap-y-[20px] text-[16px] lg:text-[17px]">
              {text.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* <div className="pagination pt-[20px] flex justify-between">
              {yearRange &&
                yearRange.map((item, index) => {
                  if (item.year == activeYear) {
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
            </div> */}

            <div className="pt-[20px]">
              <Pagination
                currentPage={activeYear}
                totalCount={items.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
