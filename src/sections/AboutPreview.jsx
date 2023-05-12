import React from "react";
import Image from "next/image";

import { images } from "constants";
import styles from "styles/styles";
import Logo from "assets/icons/Logo";
import { Button } from "components";
// import aboutCompany from "../assets/images/about_company.png";

const AboutPreview = () => {
  // console.log(images);

  return (
    <section className="container">
      <div className="sm:w-full my-[50px] lg:flex justify-center lg:item-center lg:gap-[80px]">
        <div className="w-full sm:flex justify-center items-center lg:max-w-[445px] h-auto px-[17px] py-[20px] sm:px-0 sm:py-0 lg:p-0">
          <img src={images.aboutCompany.src} alt="about company picture" />
        </div>

        <div className="lg:flex lg:items-center sm:my-[30px]">
          <div className="">
            <div className="">
              <Logo type="dark" />
            </div>

            <h2 className={`${styles.heading2} pb-[20px]`}>О нашей компании</h2>

            <div className="content flex flex-col gap-[15px] lg:max-w-[689px] pb-[30px]">
              {[...Array(4).keys()].map((p, i) => (
                <p key={i} className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  quisquam saepe corporis est iste, eos id magni similique
                  aperiam ex!
                </p>
              ))}
            </div>

            <Button type="round">Узнать больше</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
