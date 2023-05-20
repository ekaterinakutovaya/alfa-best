import React from "react";
import { getData } from "../api/data";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout } from "../../layout/Layout";
import { PurchaseSection } from "sections";

const Purchase = ({ homeMenu, homeService, purchase, purchasePost }) => {
  return (
    <Layout homeMenu={homeMenu.datas} homeService={homeService.datas}>
      <PurchaseSection purchase={purchase.datas[0]} purchasePost={purchasePost.datas}/>
    </Layout>
  );
};

export default Purchase;

export const getServerSideProps = async ({ locale }) => {
  const homeMenu = await getData("home_menu", locale);
  const homeService = await getData("home_service", locale);
  const purchase = await getData("purchase", locale);
  const purchasePost = await getData("purchase_post", locale);

  return {
    props: {
      homeMenu,
      homeService,
      purchase,
      purchasePost,
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
};
