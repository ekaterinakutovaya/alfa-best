import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Figure from "assets/icons/Figure";
import { Accordeon, SocialBar } from "components";
import { fadeIn, staggerContainer } from "utils/motions";

const DropdownMenu = ({ items, open }) => {
  const { t } = useTranslation("");
  const { locale } = useRouter();
  const { navigation, subNavigation } = items;
  console.log(open);

  return (
    <motion.nav
      variants={slideIn("down", "spring", 0.2, 1)}
      initial="hidden"
      className="w-full h-[calc(100vh_-_78px)] bg-white absolute top-[78px] z-50 border-solid border-t border-t-[#ECECEC]"
    >
      <ul className="w-full p-7 flex flex-col gap-y-8 ">
        <li>
          <Accordeon label={t("services")} items={subNavigation} />
        </li>

        {navigation &&
          navigation.map((item, index) => (
            <li className="font-arimo font-bold text-[20px]" key={index}>
              <Link href={`/${locale}/${item.link}`} locale={locale}>
                {item[`title_${locale}`]}
              </Link>
            </li>
          ))}

        <li className="mt-[40px]">
          <div className="font-arimo font-bold text-[18px] pb-[20px]">
            {t("follow")}
          </div>

          <SocialBar color="#1B2330" size="40" />
        </li>
      </ul>

      <Figure className="absolute bottom-[20%] right-[-8%]" />
    </motion.nav>
  );
};

export default DropdownMenu;
