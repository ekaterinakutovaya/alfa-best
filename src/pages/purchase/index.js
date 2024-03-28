import React from "react";
import { getData } from "services/data";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout } from "layout/Layout";
import { PurchaseSection } from "sections";

const Purchase = ({ mainMenu, servicesMenu, purchase,gallery }) => {
  return (
    <Layout mainMenu={mainMenu.data} servicesMenu={servicesMenu.data}>
      {Object.keys(purchase).length && (
        <PurchaseSection
          purchase={purchase.data[0]}
          gallery={gallery.data}
        />
      )}
    </Layout>
  );
};

export default Purchase;

export const getServerSideProps = async ({ locale }) => {
  const mainMenu = await getData("main_menu", locale);
  const servicesMenu = await getData("services_menu", locale);
  const purchase = await getData("purchase", locale);
  const gallery = await getData("gallery", locale);

  return {
    props: {
      mainMenu,
      servicesMenu,
      purchase,
      gallery,
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
};
