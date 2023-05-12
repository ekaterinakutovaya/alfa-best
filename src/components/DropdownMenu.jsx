import React from "react";
import Link from "next/link";

import Figure from "assets/icons/Figure";
import { Accordeon, SocialBar } from "components";
import { navigation } from "constants/constants";

const DropdownMenu = () => {
  const nestedList = [
    { index: 0, label: "Инженерно-техническая эксплуатация" },
    { index: 1, label: "Сервисное и бытовое обслуживание" },
    { index: 2, label: "Корпоративное питание" },
    { index: 3, label: "Транспортные и пассажирские перевозки" }
  ];

  return (
    <nav className="w-full h-[calc(100vh_-_78px)] bg-white absolute top-[78px] z-50 border-solid border-t border-t-[#ECECEC]">
      <ul className="w-full p-7 flex flex-col gap-y-8 ">
        <li>
          <Accordeon label={"Услуги"} items={nestedList} />
        </li>

        {navigation &&
          navigation.map((item, index) => (
            <li className="font-arimo font-bold text-[20px]">
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}

        <li className="mt-[40px]">
          <div className="font-arimo font-bold text-[18px] pb-[20px]">
            Следите в телеграмме
          </div>

          <SocialBar color="#1B2330" size="40" />
        </li>
      </ul>

      <Figure className="absolute bottom-[20%] right-[-8%]" />
    </nav>
  );
};

export default DropdownMenu;
