import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@material-tailwind/react";


import { subNavigation } from "constants/constants";

function Icon({ id, open }) {
  
  return (
    <div className="w-[40px] h-[40px] rounded-full bg-[#002c6340] opacity-70 backdrop-blur-[102.579px] flex justify-center items-center absolute top-[50%] translate-y-[-50%] right-0">

    {id === open ? (
        <FiMinus
          className={`${
            id === open ? "" : ""
            } h-7 w-7 transition-transform`}
        />
    ) : (
          <FiPlus
            className={`${
              id === open ? "rotate-90" : ""
              } h-7 w-7 transition-transform`}
          />
    )}
    </div>
  );
}

const AccordeonDark = ({ label, items }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  const [open, setOpen] = useState(0);

  const handleOpen = value => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
      <AccordionHeader
        onClick={() => handleOpen(1)}
        className="text-white font-arimo font-bold text-[18px] relative"
      >
        {label}
      </AccordionHeader>

      <AccordionBody>
        <ul className="text-grey text-[17px] font-bold flex flex-col gap-y-3.5 py-3.5">
          {items && items.map((item, index) => (
            <li key={index}>
              <Link href={`/${locale}${item.path}`} locale={locale}>
                {item.title}
              </Link>
            </li>
          ))}
          
        </ul>
      </AccordionBody>
    </Accordion>
  );
};

export default AccordeonDark;
