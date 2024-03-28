import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Logo from "assets/icons/Logo";
import { AccordeonDark, SocialBar } from "components";
import SvgSelector from "assets/icons/SvgSelector";

const FooterMobile = ({ navigation, subNavigation }) => {
  const { t } = useTranslation("");
  const { locale } = useRouter();

  return (
    <footer className="bg-[#001836] block lg:hidden">
      {/* Main */}
      <div className="container">
        <div className="w-full flex-col gap-y-[30px] py-[30px] border-solid border-b border-[rgba(255,255,255,0.1)]">
          <div className="head">
            <div className="flex justify-center">
              <Logo type="light-full" className="w-full" />
            </div>
          </div>

          <div className="flex lg:hidden flex-col gap-y-[20px] py-[30px]">
            <AccordeonDark label={t("services")} items={subNavigation} />
            {navigation &&
              navigation.map((item, index) => (
                <div
                  className="font-arimo font-bold text-[18px] text-white"
                  key={index}
                >
                  <Link href={`/${locale}${item.path}`} locale={locale}>
                    {item.title}
                  </Link>
                </div>
              ))}
          </div>

          <div className="follow mt-[30px]">
            <div className="font-arimo font-bold text-[18px] text-white pb-[20px]">
              {t("follow")}
            </div>

            <SocialBar color="white" size="32" />
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full py-[30px]">
          <ul className="flex gap-x-[16px] pb-[20px]">
            <li className="font-arimo font-bold text-[16px] text-white">
              <Link href="/">{t("help")}</Link>
            </li>
            <li className="font-arimo font-bold text-[16px] text-white">
              <Link href="/">{t("be_part_of_the_team")}</Link>
            </li>
          </ul>

          <SvgSelector id="napa" />
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
