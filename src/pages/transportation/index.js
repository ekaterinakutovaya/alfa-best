import React from 'react';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import {Layout} from "layout/Layout";
import {ServicesPageWrapper} from "components";
import {getData} from "services/data";
import {useTranslation} from "next-i18next";


const Transportation = ({
                          mainMenu, servicesMenu, servicesPage
                        }) => {
  const {t} = useTranslation("");
  
  return (
      <Layout mainMenu={mainMenu.data} servicesMenu={servicesMenu.data}>
        {servicesPage && (<ServicesPageWrapper
            title={servicesPage.data[3].title}
            text={servicesPage.data[3].text}
            image={servicesPage.data[3].image}
            servicesDescription={servicesPage.data[3].features}
            advantages={{title: t('advantages'), advantages: servicesPage.data[3].advantages}}
            gallery={servicesPage.data[3].gallery}
        />)}
      </Layout>
  );
};

export default Transportation;

export const getServerSideProps = async ({locale}) => {
  const mainMenu = await getData("main_menu", locale);
  const servicesMenu = await getData("services_menu", locale);
  const servicesPage = await getData("services_page", locale);
  
  return {
    props: {
      mainMenu,
      servicesMenu,
      servicesPage,
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
};