import React from "react";
import Link from "next/link";

import Figure from "../assets/icons/Figure";
import { Accordeon } from "components";
import { navigation } from "../constants/constants";

const Navbar = () => {
  const nestedList = [
    { index: 0, label: "Инженерно-техническая эксплуатация" },
    { index: 1, label: "Сервисное и бытовое обслуживание" },
    { index: 2, label: "Корпоративное питание" },
    { index: 3, label: "Транспортные и пассажирские перевозки" }
  ];

  return (
    <nav className="w-full sm:w-60% fixed right-0 bottom-0 z-50 bg-white h-[calc(100vh_-_78px)]">
      <ul className="w-full h-full relative p-7 overflow-hidden flex flex-col gap-y-8">
        <li className="font-arimo font-bold text-2xl">
          <Accordeon label={"Услуги"} items={nestedList} />
        </li>

        {navigation &&
          navigation.map((item, index) => (
            <li className="font-arimo font-bold text-2xl">
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
      </ul>
      <Figure className="absolute bottom-[10%] right-[-8%]" />
    </nav>
  );
};

export default Navbar;
