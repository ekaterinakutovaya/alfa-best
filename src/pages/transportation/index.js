import React from 'react';

import { Layout } from "../../layout/Layout";
import { CooperationSection, Advantages } from "sections";
import { ApplicationForm, ServicesPageWrapper } from "components";


const Transportation = () => {
    return (
      <Layout>
        <ServicesPageWrapper title="Транспортные услуги" text='Мы предоставляем услуги пассажирских перевозок с помощью нашего собственного автопарка, отвечающего самым высоким требованиям безопасности и комфорта, включающего в себя широкий спектр пассажирского автотранспорта: от микроавтобусов до 50-местных автобусов.'/>
      </Layout>
    );
};

export default Transportation;