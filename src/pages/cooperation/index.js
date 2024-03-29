import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout } from "layout/Layout";
import { CooperationSection, Advantages } from "sections";
import { ApplicationForm } from "components";
import { getData } from "services/data";

const Cooperation = ({ mainMenu, servicesMenu, cooperation, advantage }) => {

  return (
    <Layout mainMenu={mainMenu.data} servicesMenu={servicesMenu.data}>
      {cooperation.data && <CooperationSection data={cooperation.data[0]} />}
      {advantage.data && <Advantages data={advantage.data} />}
      {servicesMenu.data && <ApplicationForm types={servicesMenu.data} />}
    </Layout>
  );
};

export default Cooperation;

export const getServerSideProps = async ({ locale }) => {
  const mainMenu = await getData("main_menu", locale);
  const servicesMenu = await getData("services_menu", locale);
  const cooperation = await getData("cooperation", locale);
  const advantage = await getData("outsourcing_advantages", locale);

  return {
    props: {
      mainMenu,
      servicesMenu,
      cooperation,
      advantage,
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
};
