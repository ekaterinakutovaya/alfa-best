import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { images } from "../constants";
import { Button } from "components";
import { Gallery } from "sections";

const PurchaseSection = ({ purchase, purchasePost }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  const [images, setImages] = useState([]);

  // Array comes from backend as a string
  useEffect(() => {
    let str = purchase.images.slice(1, -1);
    let arr = str.split(",");
    let newArr = arr.map((el, i) => {
      return { image: el.trim().slice(1, -1) };
    });

    setImages(newArr);
  }, [purchase]);

  return (
    <section className="w-full mt-[79px] lg:mt-[158px] py-[30px] lg:py-[60px]">
      <div className="container lg:flex justify-between items-end">
        <div>
          {/* Head */}
          <div className="max-w-[1000px]">
            <h2 className="text-[18px] lg:text-[36px] font-bold mb-[20px]">
              {purchase[`title_${locale}`]}
            </h2>
            <p className="leading-[140%]">{purchase[`text_${locale}`]}</p>
          </div>
        </div>
      </div>

      <Gallery data={images} />

      <div className="flex justify-center mt-[-20px] lg:mt-[-50px]">
        
          <Link href={`/${locale}/cooperation`} locale={locale}>
            <Button type="round">{t("cooperation")}</Button>
          </Link>
        
      </div>
    </section>
  );
};

export default PurchaseSection;
