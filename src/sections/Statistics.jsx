import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { fadeIn, staggerContainer } from "utils/motions";
import SvgSelector from "assets/icons/SvgSelector";


const Statistics = () => {
  const { t } = useTranslation("");
  const isDesktop = useMediaQuery({ query: `(min-width: 1280px` });


  return (
    <section className="container">
      <motion.div 
        variants={staggerContainer}
        initial={isDesktop ? "hidden" : "show"}
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      className="statistics__inner w-full my-[50px] flex flex-col gap-[30px] lg:flex-row lg:justify-between"
      >
        <motion.div 
        className="statistics__item"
          variants={fadeIn("left", "tween", 0.2, 1)}
        >
          <div className="flex items-end gap-[10px]">
            <div className="icon w-[40px] h-[40px]">
              <SvgSelector id="map" />
            </div>

            <div>
              <span className="text-2xl font-medium">+320.000 </span>
              {t("square_meters")}
            </div>
          </div>

          <div className="text-[#8B8B8B]">{t("household_qty")}</div>
        </motion.div>

        <motion.div 
          variants={fadeIn("left", "tween", 0.3, 1)}
        className="statistics__item"
        >
          <div className="flex items-end gap-[10px]">
            <div className="icon w-[40px] h-[40px]">
              <SvgSelector id="flag" />
            </div>

            <div>
              <span className="text-2xl font-medium">+70.000 </span>
              {t("square_meters")}
            </div>
          </div>

          <div className="text-[#8B8B8B]">{t("cleaning_qty")}</div>
        </motion.div>

        <motion.div 
          variants={fadeIn("left", "tween", 0.4, 1)}
        className="statistics__item"
        >
          <div className="flex items-end gap-[10px]">
            <div className="icon w-[40px] h-[40px]">
              <SvgSelector id="bowl" />
            </div>

            <div>
              <span className="text-2xl font-medium">+1000 </span>
            </div>
          </div>

          <div className="text-[#8B8B8B]">{t("eaters_qty")}</div>
        </motion.div>

        <motion.div 
          variants={fadeIn("left", "tween", 0.5, 1)}
        className="statistics__item"
        >
          <div className="flex items-end gap-[10px]">
            <div className="icon w-[40px] h-[40px]">
              <SvgSelector id="person" />
            </div>

            <div>
              <span className="text-2xl font-medium">+500 </span>
            </div>
          </div>

          <div className="text-[#8B8B8B]">{t("employee_qty")}</div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Statistics;
