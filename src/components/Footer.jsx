import React from "react";
import Link from "next/link";

import { images } from "constants";
import styles from "styles/styles";
import Logo from "assets/icons/Logo";
import { navigation, subNavigation } from "constants/constants";
import { AccordeonDark, SocialBar } from "components";
import SvgSelector from "assets/icons/SvgSelector";

const Footer = () => {
  const nestedList = [
    { index: 0, label: "Инженерно-техническая эксплуатация" },
    { index: 1, label: "Сервисное и бытовое обслуживание" },
    { index: 2, label: "Корпоративное питание" },
    { index: 3, label: "Транспортные и пассажирские перевозки" }
  ];

  return (
    <footer className="bg-[#1B2330]">
      {/* Main */}
      <div className="container">
        <div className="py-[60px] w-full flex gap-x-[40px] border-solid border-b border-[rgba(255,255,255,0.1)]">
          <div className="w-[80%] flex gap-x-[80px]">
            <div className="">
              <Logo type="color-light-full" />
            </div>

            <div>
              {navigation &&
                navigation.map((item, index) => (
                  <div className="font-semibold text-[15px] text-white pb-[16px] last:pb-0 ease-in-out duration-300 hover:text-green" key={index}>
                    <Link href={item.path}>{item.title}</Link>
                  </div>
                ))}
            </div>

            <div>
              {subNavigation &&
                subNavigation.map((item, index) => (
                  <div className="font-semibold text-[15px] text-white pb-[16px] last:pb-0 ease-in-out duration-300 hover:text-green" key={index}>
                    <Link href={item.path}>{item.title}</Link>
                  </div>
                ))}
            </div>
          </div>

          <div className="follow w-[20%]">
            <div className="font-semibold text-[15px] text-white pb-[20px]">
              Подписывайтесь на нас
            </div>

            <SocialBar color="white" size='30'/>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full flex justify-between py-[30px]">
          <SvgSelector id="napa" />
          <ul className="flex gap-x-[16px] pb-[20px]">
            <li className="font-semibold text-[15px] text-white ease-in-out duration-300 hover:text-green cursor-pointer">
              <Link href="/">Помощь</Link>
            </li>
            <li className="font-semibold text-[15px] text-white ease-in-out duration-300 hover:text-green cursor-pointer">
              <Link href="/">Стань частью команды</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
