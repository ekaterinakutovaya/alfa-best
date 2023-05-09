import React from "react";

import { images } from "constants";
import styles from "styles/styles";
import Logo from "assets/icons/Logo";
import ServicesOverviewCard from "components/ServicesOverviewCard";

const OurTeam = () => {
  return (
    <section className="w-full my-[50px]">
      <div className="mission__inner container">
        <div>
          <div className="w-[44px]">
            <Logo type="dark" className="w-full" />
          </div>

          <h2 className={`${styles.heading2} py-[20px] lgpy-[10px]`}>
            Наша команда
            </h2>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
