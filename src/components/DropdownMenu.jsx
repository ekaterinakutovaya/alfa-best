import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Figure from "assets/icons/Figure";
import { Accordeon, SocialBar } from "components";
import { fadeIn, slideIn, staggerContainer } from "utils/motions";

const DropdownMenu = ({ items, open }) => {
  const { t } = useTranslation("");
  const { locale } = useRouter();
  const { navigation, subNavigation } = items;

  const variants = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
        delay: 1.2
      }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          key="dropdown"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "100vh", opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{
            opacity: 0,
            height: 0,
            transition: {
              ease: "easeInOut",
              duration: 1,
              delay: 1.2
            }
          }}
          className="w-full h-[calc(100vh_-_78px)] bg-white absolute top-[78px] z-50 border-solid border-t border-t-[#ECECEC]"
        >
          <motion.ul
            className="w-full p-7 flex flex-col gap-y-8 "
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: {
                ease: "easeInOut",
                delay: 1
              }
            }}
          >
            <li>
              <Accordeon label={t("services")} items={subNavigation} />
            </li>

            {navigation &&
              navigation.map((item, index) => (
                <motion.li
                  className="font-arimo font-bold text-[20px]"
                  key={index}
                >
                  <Link href={`/${locale}${item.path}`} locale={locale}>
                    {item.title}
                  </Link>
                </motion.li>
              ))}

            <motion.li
              className="mt-[40px]"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.4
                }
              }}
            >
              <div className="font-arimo font-bold text-[18px] pb-[20px]">
                {t("follow")}
              </div>

              <SocialBar color="#1B2330" size="40" />
            </motion.li>
          </motion.ul>

          <Figure className="fixed top-[411%] right-[-8%]" />
        </motion.nav>
      ) }
      
    </AnimatePresence>
  );
};

export default DropdownMenu;
