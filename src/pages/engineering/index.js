import React from 'react';

import { Layout } from "../../layout/Layout";
import { CooperationSection, Advantages } from "sections";
import { ApplicationForm, ServicesPageWrapper } from "components";


const Engineering = () => {
    return (
      <Layout>
        <ServicesPageWrapper title="Техническое обслуживание зданий и сооружений" text='Мы выполняем работы и оказываем услуги по техническому обслуживанию и ремонту зданий, сооружений, инженерных систем, бытовой техники, столового, прачечного и иного оборудования, используемых в жилых и в административно-бытовых зданиях Заказчика.'/>
      </Layout>
    );
};

export default Engineering;