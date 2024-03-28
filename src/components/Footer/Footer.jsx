import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Logo from "assets/icons/Logo";
import { SocialBar } from "components";
import SvgSelector from "assets/icons/SvgSelector";

const Footer = ({ navigation, subNavigation }) => {
  const { t } = useTranslation("");
  const { locale } = useRouter();

  return (
    <footer className="bg-[#1B2330] hidden lg:block">
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
                  <div
                    className="font-semibold text-[15px] text-white pb-[16px] last:pb-0 ease-in-out duration-300 hover:text-green"
                    key={index}
                  >
                    <Link href={`/${locale}${item.path}`} locale={locale}>
                      {item.title}
                    </Link>
                  </div>
                ))}
            </div>

            <div>
              {subNavigation &&
                subNavigation.map((item, index) => (
                  <div
                    className="font-semibold text-[15px] text-white pb-[16px] last:pb-0 ease-in-out duration-300 hover:text-green"
                    key={index}
                  >
                    <Link href={`/${locale}${item.path}`} locale={locale}>
                      {item.title}
                    </Link>
                  </div>
                ))}
            </div>
          </div>

          <div className="follow w-[20%]">
            <div className="font-semibold text-[15px] text-white pb-[20px]">
              {t("follow")}
            </div>

            <SocialBar color="white" size="30" />
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full flex justify-between py-[30px]">
          <SvgSelector id="napa" />
          <ul className="flex gap-x-[16px] pb-[20px]">
            <li className="font-semibold text-[15px] text-white ease-in-out duration-300 hover:text-green cursor-pointer">
              <Link href="/">{t("help")}</Link>
            </li>
            <li className="font-semibold text-[15px] text-white ease-in-out duration-300 hover:text-green cursor-pointer">
              <Link href="/">{t("be_part_of_the_team")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
