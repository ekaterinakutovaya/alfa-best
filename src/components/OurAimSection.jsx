import React from "react";

import { images } from "../constants";
import styles from "../styles/styles";
import Logo from "../assets/icons/Logo";
import { Button } from ".";

const OurAimSection = () => {
  return (
    <section className="container my-[30px]">
      <div className="w-[44px]">
        <Logo type="dark" className="w-full" />
      </div>

      <h2 className={`${styles.heading2} py-[10px]`}>Наша цель</h2>

      <div className="w-full  lg:flex lg:items-center lg:gap-[80px]">
        <div className="lg:w-[40%]">
          <div className="left">
            <div className="content flex flex-col gap-[15px] lg:max-w-[689px] pb-[30px]">
              {[...Array(4).keys()].map((p, i) => (
                <p key={i} className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  quisquam saepe corporis est iste, eos id magni similique
                  aperiam ex!
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-[60%]">
          {[...Array(4).keys()].map((item, i) => (
            <div className="w-full grid grid-cols-[0.3fr,2fr,1fr] py-[15px] border-solid border-b border-[#D9D9D9] last:border-b-0">
              <div className="lg:font-semibold">01</div>
              <div className="w-[184px] lg:w-auto font-semibold lg:font-normal">
                Сокращение издержек за счет оптимизации процессов
              </div>
              <div className="lg:justify-self-end">
                <div className="image w-full min-w-[100px] max-w-[100px] h-[70px] lg:w-[110px] lg:h-[60px] rounded-[5px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={images.image002.src}
                    alt="aim images"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAimSection;
