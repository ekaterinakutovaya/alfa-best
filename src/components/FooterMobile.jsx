import React from "react";
import Link from "next/link";

import { images } from "constants";
import styles from "styles/styles";
import Logo from "assets/icons/Logo";
import { navigation } from "constants/constants";
import { AccordeonDark, SocialBar } from "components";
import SvgSelector from "assets/icons/SvgSelector";

const FooterMobile = () => {
  const nestedList = [
    { index: 0, label: "Инженерно-техническая эксплуатация" },
    { index: 1, label: "Сервисное и бытовое обслуживание" },
    { index: 2, label: "Корпоративное питание" },
    { index: 3, label: "Транспортные и пассажирские перевозки" }
  ];

  return (
    <footer className="bg-[#001836]">
      {/* Main */}
      <div className="container">
        <div className="w-full flex-col gap-y-[30px] py-[43px] border-solid border-b border-[rgba(255,255,255,0.1)]">
          <div className="head">
            <div className="">
              <Logo type="light-full" className="w-full" />
            </div>
          </div>

          <div className="flex lg:hidden flex-col gap-y-[20px] py-[30px]">
            <AccordeonDark label={"Услуги"} items={nestedList} />
            {navigation &&
              navigation.map((item, index) => (
                <div className="font-arimo font-bold text-[18px] text-white">
                  <Link href={item.path}>{item.title}</Link>
                </div>
              ))}
          </div>

          <div className="follow">
            <div className="font-arimo font-bold text-[18px] text-white pb-[20px]">
              Следите в телеграмме
            </div>

            <SocialBar color="white" />
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full py-[30px]">
          <ul className="flex gap-x-[16px] pb-[20px]">
            <li className="font-arimo font-bold text-[16px] text-white">
              <Link href="/">Помощь</Link>
            </li>
            <li className="font-arimo font-bold text-[16px] text-white">
              <Link href="/">Стань частью команды</Link>
            </li>
          </ul>

          <SvgSelector id="napa" />
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
