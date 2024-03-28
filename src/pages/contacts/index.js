import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout } from "layout/Layout";
import { ContactsSection } from "sections";
import { getData } from "services/data";

const Contacts = ({ mainMenu, servicesMenu, contactPage }) => {
  
  return (
    <Layout mainMenu={mainMenu.data} servicesMenu={servicesMenu.data}>
      {contactPage && (<ContactsSection
          contactPage={contactPage.data}
      />)}
    </Layout>
  );
};

export default Contacts;

export const getServerSideProps = async ({ locale }) => {
  const mainMenu = await getData("main_menu", locale);
  const servicesMenu = await getData("services_menu", locale);
  const contactPage = await getData("company_contacts", locale);

  return {
    props: {
      mainMenu,
      servicesMenu,
      contactPage,
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
};
