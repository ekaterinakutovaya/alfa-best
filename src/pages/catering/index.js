import React from 'react';

import { Layout } from "../../layout/Layout";
import { CooperationSection, Advantages } from "sections";
import { ApplicationForm, ServicesPageWrapper } from "components";


const Catering = () => {
    return (
      <Layout>
        <ServicesPageWrapper title="Корпоративное питание" text='Мы предоставляем услуги по организации корпоративного питания, включая организацию праздничного питания, и организации кофе-брейков на объектах Заказчика. Также мы предлагаем услуги по организации выездного (полевого) питания для персонала Заказчика. Наша компания специализируется на создании высококачественной системы питания для персонала любых производственных и офисных комплексов от крупных предприятий до небольших цехов и офисов.'/>
      </Layout>
    );
};

export default Catering;