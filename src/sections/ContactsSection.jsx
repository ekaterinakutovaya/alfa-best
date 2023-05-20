import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { ContactsForm } from "components";
import contactsImage from "../assets/images/contacts.jpg";

const ContactsSection = ({ contactPage, contactInfo }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");

  return (
    <section className="w-full mt-[79px] lg:mt-[158px] py-[30px] lg:py-[60px]">
      <div className="container lg:flex justify-between items-end">
        <div>
          {/* Head */}
          <div className="max-w-[651px]">
            <h2 className="text-[18px] lg:text-[36px] font-bold mb-[20px]">
              {contactPage[`title_${locale}`]}
            </h2>
            <div
              className="leading-[140%]"
              dangerouslySetInnerHTML={{
                __html: contactPage[`text_${locale}`]
              }}
            ></div>
          </div>

          {/* Form */}
          <ContactsForm />

          {/* Contacts info */}
          <div className="w-full bg-[#F2FCF9] rounded-[15px] py-[20px] px-[15px]">
            <div>
              <label
                className="text-[14px] leading-[140%] text-grey"
                htmlFor=""
              >
                {t("telephone")}
              </label>
              <div className="flex gap-x-[30px]">
                <a
                  href={`tel:${contactInfo.phone
                    .slice(-17)
                    .replace(/\s/g, "")}`}
                >
                  {contactInfo.phone.slice(-17)}
                </a>
                <a
                  href={`tel:${contactInfo.phone
                    .slice(0, 17)
                    .replace(/\s/g, "")}`}
                >
                  {contactInfo.phone.slice(0, 17)}
                </a>
              </div>
            </div>

            <div className="mt-[15px]">
              <label
                className="text-[14px] leading-[140%] text-grey"
                htmlFor=""
              >
                {t("address")}
              </label>
              <div className="flex gap-x-[30px]">
                <span>{contactInfo[`address_${locale}`]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div>
          <div className="w-full h-[380px] lg:w-[450px] lg:h-[511px] lg:rounded-[15px] overflow-hidden mt-[30px] relative">

            <Image
              className="w-full h-full object-cover"
              src={contactsImage.src}
              alt="contacts photo"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
