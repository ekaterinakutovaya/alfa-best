import React from "react";
import { getData } from "services/data";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout } from "layout/Layout";
import { PurchaseSection } from "sections";

const Purchase = ({ homeMenu, homeService, purchase }) => {
  return (
    <Layout homeMenu={homeMenu.datas} homeService={homeService.datas}>
      {Object.keys(purchase).length && (
        <PurchaseSection
          purchase={purchase.datas[0]}
        />
      )}
    </Layout>
  );
};

export default Purchase;

export const getServerSideProps = async ({ locale }) => {
  const homeMenu = await getData("home_menu", locale);
  const homeService = await getData("home_service", locale);
  const purchase = await getData("purchase", locale);

  return {
    props: {
      homeMenu,
      homeService,
      purchase,
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
};
