import React from 'react';

import { Layout } from "../../layout/Layout";
import { CooperationSection, Advantages } from "sections";
import { ApplicationForm, ServicesPageWrapper } from "components";


const Household = () => {
    return (
      <Layout>
        <ServicesPageWrapper title="Сервисное и бытовое обслуживание" text='Мы предоставляем услуги по сервисному и бытовому обслуживанию административных и производственных зданий, сооружений и прилегающей территории объектов Заказчика.'/>
      </Layout>
    );
};

export default Household;