import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { Button } from "components";
import { Gallery } from "sections";
import { fade, fadeIn, staggerContainer } from "utils/motions";

const PurchaseSection = ({ purchase, purchasePost }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  const [images, setImages] = useState([]);
  const isDesktop = useMediaQuery({ query: `(min-width: 1280px` });

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
    <section 
      
    className="w-full mt-[79px] lg:mt-[158px] py-[30px] lg:py-[60px]">
      <motion.div 
        variants={staggerContainer}
        initial={isDesktop ? "hidden" : "show"}
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      className="container lg:flex justify-between items-end">
        <div>
          {/* Head */}
          <div className="max-w-[1000px]">
            <motion.h2 
              variants={fadeIn("down", "tween", 0.2, 1)}
            className="text-[18px] lg:text-[36px] font-bold mb-[20px]"
            >
              {purchase[`title_${locale}`]}
            </motion.h2>
            <motion.p 
              variants={fadeIn("down", "tween", 0.3, 1)}
            className="leading-[140%]">{purchase[`text_${locale}`]}</motion.p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial={isDesktop ? "hidden" : "show"}
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
      >
        <Gallery data={images} />
  
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
        className="flex justify-center mt-[-20px] lg:mt-[-50px]">
          
            <Link href={`/${locale}/cooperation`} locale={locale}>
              <Button type="round">{t("cooperation")}</Button>
            </Link>
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PurchaseSection;
