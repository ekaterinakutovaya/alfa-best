import React from 'react';
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Layout } from "../../layout/Layout";
import { ServicesPageWrapper } from "components";
import { getData } from "../api/data";


const Transportation = ({ homeMenu,
  homeService,
  servicesCategory,
  servicesSubCategory,
  advantage,
  gallery}) => {
  const { locale } = useRouter();
  const { t } = useTranslation("");
  const servicesCat = servicesCategory.datas.filter(
    item => item.home_service_id === 4
  )[0];
  const servicesDescription = servicesSubCategory.datas.filter(
    item => item.services_category_id === 4
  );
  const advantages = advantage.datas.filter(
    item => item.services_category_id === 4
  );
  const images = gallery.datas.filter(item => item.services_category_id === 1);


    return (
      <Layout homeMenu={homeMenu.datas} homeService={homeService.datas}>
        <ServicesPageWrapper
          title={servicesCat[`title_${locale}`]}
          text={servicesCat[`text_${locale}`]}
          image={servicesCat.image}
          servicesDescription={servicesDescription}
          advantages={advantages}
          gallery={images}
        />
      </Layout>
    );
};

export default Transportation;

export const getServerSideProps = async ({ locale }) => {
  const homeMenu = await getData("home_menu", locale);
  const homeService = await getData("home_service", locale);
  const servicesCategory = await getData("services_category", locale);
  const servicesSubCategory = await getData("services_subcategory", locale);
  const advantage = await getData("advantage", locale);
  const gallery = await getData("gallery", locale);

  return {
    props: {
      homeMenu,
      homeService,
      servicesCategory,
      servicesSubCategory,
      advantage,
      gallery
    }
  };
};