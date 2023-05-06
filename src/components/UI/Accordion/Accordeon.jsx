import React, { useState } from "react";
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
            ? "font-arimo font-bold text-2xl text-green"
            : "font-arimo font-bold text-2xl"
        }
      >
        {label}
      </AccordionHeader>

      <AccordionBody>
        <ul className="text-[17px] text-grey font-bold flex flex-col gap-y-3.5 py-3.5">
          <li>
            <a href="#">Инженерно-техническая эксплуатация</a>
          </li>
          <li>
            <a href="#">Сервисное и бытовое обслуживание</a>
          </li>
          <li>
            <a href="#">Корпоративное питание</a>
          </li>
          <li>
            <a href="#">Транспортные и пассажирские перевозки</a>
          </li>
        </ul>
      </AccordionBody>

    </Accordion>
  );
};

export default Accordeon;
