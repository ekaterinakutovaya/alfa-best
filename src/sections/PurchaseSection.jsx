import Link from "next/link";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {motion} from "framer-motion";
import {useMediaQuery} from "react-responsive";

import {Button} from "components";
import {fadeIn, staggerContainer} from "utils/motions";
import Gallery from "./Gallery";

const PurchaseSection = ({purchase, gallery}) => {
  const {locale} = useRouter();
  const {t} = useTranslation("");
  const isDesktop = useMediaQuery({query: `(min-width: 1280px`});
  
  return (
      <section
          
          className="w-full mt-[79px] lg:mt-[158px] py-[30px] lg:py-[60px]">
        <motion.div
            variants={staggerContainer}
            initial={isDesktop ? "hidden" : "show"}
            whileInView="show"
            viewport={{once: true, amount: 0.5}}
            className="container lg:flex justify-between items-end">
          <div>
            {/* Head */}
            <div className="max-w-[1000px]">
              <motion.h2
                  variants={fadeIn("down", "tween", 0.2, 1)}
                  className="text-[18px] sm:text-[36px] font-bold mb-[20px]"
              >
                {purchase && purchase.title}
              </motion.h2>
              {purchase && (<motion.p
                  variants={fadeIn("down", "tween", 0.3, 1)}
                  className="leading-[140%]"
                  dangerouslySetInnerHTML={{
                    __html: purchase.text
                  }}
              ></motion.p>)}
            
            </div>
          </div>
        </motion.div>
        
        <motion.div
            variants={staggerContainer}
            initial={isDesktop ? "hidden" : "show"}
            whileInView="show"
            viewport={{once: true, amount: 0.1}}
        >
          {gallery && <Gallery data={gallery}/>}
          <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="flex justify-center mt-[-20px] lg:mt-[-50px]">
            
            <Link href={`/${locale}/cooperation`} locale={locale}>
              <Button type="round">{t("cooperation")}</Button>
            </Link>
          
          </motion.div>
        </motion.div>
      </section>
  );
};

export default PurchaseSection;
