import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

const Accordeon = ({ label, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <input
        id="expandCollapse"
        type="checkbox"
        checked={open}
        // onChange={e => setOpen(!open)}
        className="peer sr-only"
      />
      <label
        htmlFor="expandCollapse"
        className="w-full flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span
          className={
            open
              ? "font-arimo font-bold text-2xl text-green"
              : "font-arimo font-bold text-2xl"
          }
        >
          Услуги
        </span>
        <FiPlus
          onClick={() => setOpen(!open)}
          // className='text-grey font-bold'
          className={
            open ? "text-grey font-bold rotate-180" : "text-grey font-bold"
          }
        />
      </label>
      <div className="hidden bg-white peer-checked:block peer-checked:overflow-scroll">
        <ul className="text-grey font-bold flex flex-col gap-y-3.5 py-3.5">
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
      </div>
    </div>
  );
};

export default Accordeon;
