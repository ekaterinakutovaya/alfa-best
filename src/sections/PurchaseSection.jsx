import React from "react";
import Link from "next/link";

import { images } from "../constants";
import { SectionHeading, ContactsForm, Button } from "components";
import Logo from "assets/icons/Logo";
import Gallery from "./Gallery";

const PurchaseSection = () => {
  return (
    <section className="w-full mt-[79px] lg:mt-[158px] py-[30px] lg:py-[60px]">
      <div className="container lg:flex justify-between items-end">
        <div>
          {/* Head */}
          <div className="max-w-[1000px]">
            <h2 className="text-[18px] lg:text-[36px] font-bold mb-[20px]">
              Закупки
            </h2>
            <p className="leading-[140%]">
              Компания осуществляет постоянный отбор поставщиков продуктов
              питания, моющих средств, хозяйственных товаров.
            </p>
            <p className="leading-[140%]">
              Отправьте коммерческое предложение в форме на странице сайта и
              станьте нашим контрагентом
            </p>
          </div>
        </div>
      </div>

      <Gallery />

      <div className="container flex justify-center">
        <Link href='/cooperation'>
          <Button type="round">Сотрудничество</Button>
        </Link>
      </div>
    </section>
  );
};

export default PurchaseSection;
