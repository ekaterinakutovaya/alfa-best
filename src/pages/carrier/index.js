import React from "react";

import { Layout } from "../../layout/Layout";
import { CareerSection } from "sections";
import { getData } from "../api/data";

const Carrier = ({
  homeMenu,
  homeService,
  career,
  vacancy,
  vacancyCategory
}) => {
  return (
    <Layout homeMenu={homeMenu.datas} homeService={homeService.datas}>
      <CareerSection
        career={career.datas[0]}
        vacancy={vacancy.datas}
        vacancyCategory={vacancyCategory.datas}
      />
    </Layout>
  );
};

export default Carrier;

export const getServerSideProps = async ({ locale }) => {
  const homeMenu = await getData("home_menu", locale);
  const homeContent = await getData("home_content", locale);
  const homeService = await getData("home_service", locale);
  const career = await getData("carrier", locale);
  const vacancy = await getData("vacancy", locale);
  const vacancyCategory = await getData("vacancy_category", locale);

  return {
    props: {
      homeMenu,
      homeContent,
      homeService,
      career,
      vacancy,
      vacancyCategory
    }
  };
};
