import React from 'react';

import { Layout } from "../../layout/Layout";
import { CooperationSection, Advantages } from "sections";
import { ApplicationForm } from "components";

const Cooperation = () => {
    return (
      <Layout>
        <CooperationSection />
        <Advantages/>

        <ApplicationForm/>
      </Layout>
    );
};

export default Cooperation;