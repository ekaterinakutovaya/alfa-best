import React from "react";

import { images } from "../constants";
import styles from "../styles/styles";
import Logo from "../assets/icons/Logo";
import { Button } from ".";
import AimsTable from "./AimsTable";

const OurAimSection = () => {
  return (
    <section className="container">
      <div className="aim__inner my-[30px]">

        <div className="lg:flex lg:items-center">
          <div className="">
            <div className="w-[44px]">
              <Logo type="dark" className="w-full" />
            </div>

            <h2 className={`${styles.heading2} pt-[10px] pb-[20px]`}>
              Наша цель
            </h2>

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

        <AimsTable/>
      </div>
    </section>
  );
};

export default OurAimSection;
