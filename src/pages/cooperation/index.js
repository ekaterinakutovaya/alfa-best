import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout } from "layout/Layout";
import { CooperationSection, Advantages } from "sections";
import { ApplicationForm } from "components";
import { getData } from "services/data";

const Cooperation = ({ homeMenu, homeService, cooperation, advantage }) => {
  const advantages = Object.keys(advantage).length && advantage.datas.filter(
    item => item.services_category_id === 1
  );  

  return (
    <Layout homeMenu={homeMenu.datas} homeService={homeService.datas}>
      {Object.keys(cooperation).length ? (
        <CooperationSection data={cooperation.datas[0]} />
      ) : (
        <CooperationSection data={{}} />
      )}

      {Object.keys(advantage).length ? <Advantages data={advantages} /> : ""}

      {Object.keys(homeService).length ? <ApplicationForm types={homeService.datas} /> : ''}
      
    </Layout>
  );
};

export default Cooperation;

export const getServerSideProps = async ({ locale }) => {
  const homeMenu = await getData("home_menu", locale);
  const homeService = await getData("home_service", locale);
  const cooperation = await getData("cooperation", locale);
  const advantage = await getData("advantage", locale);

  return {
    props: {
      homeMenu,
      homeService,
      cooperation,
      advantage,
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
};
