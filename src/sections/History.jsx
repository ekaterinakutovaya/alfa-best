import React from 'react';

import { CustomSlider, HistorySlider  } from "components";
import { history } from "../constants/constants";

const History = ({data}) => {
    
    return (
      <section className="container lg:my-[100px]">
        <CustomSlider items={data} />

        {/* <HistorySlider items={history} />. */}
      </section>
    );
};

export default History;