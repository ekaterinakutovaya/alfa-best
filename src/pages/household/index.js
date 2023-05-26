import React from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout } from "layout/Layout";
import { ServicesPageWrapper } from "components";
import { getData } from "services/data";

const Household = ({
  homeMenu,
  homeService,
  servicesCategory,
  servicesSubCategory,
  advantage,
  gallery
}) => {
  const { locale } = useRouter();

  const servicesCat = Object.keys(servicesCategory).length
    ? servicesCategory.datas.filter(item => item.home_service_id === 2)[0]
    : {};

  const servicesDescription = Object.keys(servicesSubCategory).length
    ? servicesSubCategory.datas.filter(item => item.services_category_id === 2)
    : [];


  const advantages = Object.keys(advantage).length ? advantage.datas.filter(
    item => item.services_category_id === 2
  ) : [];


  const images = Object.keys(gallery).length ? gallery.datas.filter(item => item.services_category_id === 1) : [];
  
  return (
    <Layout homeMenu={homeMenu.datas} homeService={homeService.datas}>
      <ServicesPageWrapper
        title={servicesCat[`title_${locale}`] || ''}
        text={servicesCat[`text_${locale}`] || ''}
        image={servicesCat.image}
        servicesDescription={servicesDescription}
        advantages={advantages}
        gallery={images}
      />
    </Layout>
  );
};

export default Household;

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
      gallery,
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
};
