import React from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout } from "../../layout/Layout";
import { ContactsSection, Advantages } from "sections";
import { ApplicationForm } from "components";
import { getData } from "../api/data";

const Contacts = ({ homeMenu, homeService, contactPage, contactInfo }) => {
  return (
    <Layout homeMenu={homeMenu.datas} homeService={homeService.datas}>
      <ContactsSection contactPage={contactPage.datas[0]} contactInfo={contactInfo.datas[0]} />
    </Layout>
  );
};

export default Contacts;

export const getServerSideProps = async ({ locale }) => {
  const homeMenu = await getData("home_menu", locale);
  const homeService = await getData("home_service", locale);
  const contactPage = await getData("contact_page", locale);
  const contactInfo = await getData("contact_info", locale);

  return {
    props: {
      homeMenu,
      homeService,
      contactPage,
      contactInfo,
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
};
