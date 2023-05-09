import React from 'react';

import { CustomSlider, HistorySlider  } from "components";
import { history } from "../constants/constants";

const History = () => {
    
    return (
      <section className="container lg:my-[100px]">
        <CustomSlider items={history} />

        {/* <HistorySlider items={history} />. */}
      </section>
    );
};

export default History;