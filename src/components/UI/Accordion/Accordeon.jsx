import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@material-tailwind/react";


function Icon({ id, open }) {
  return (
    <FiPlus
      className={`${
        id === open ? "rotate-90" : ""
      } h-6 w-6 transition-transform`}
    />
  );
}

const Accordeon = ({ label, items }) => {
  const { locale } = useRouter();
  const [open, setOpen] = useState(0);

  const handleOpen = value => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
      <AccordionHeader
        onClick={() => handleOpen(1)}
        className={
          open
            ? "font-arimo font-bold text-[20px] text-green"
            : "font-arimo font-bold text-[20px]"
        }
      >
        {label}
      </AccordionHeader>

      <AccordionBody>
        <ul className="text-[17px] text-grey font-bold flex flex-col gap-y-3.5 py-3.5">
          {items &&
            items.map((item, index) => (
              <li key={index} className="text-grey">
                <Link href={`/${locale}/${item.link}`} locale={locale}>
                  {item[`title_${locale}`]}
                </Link>
              </li>
            ))}
        </ul>
      </AccordionBody>
    </Accordion>
  );
};

export default Accordeon;
