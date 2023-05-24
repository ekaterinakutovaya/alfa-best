import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout } from "../layout/Layout";
import {
  AboutPreview,
  HappyPartners,
  History,
  Hero,
  Statistics,
  OurAimSection
} from "sections";
import { getData } from "./api/data";


export default function Home({ homeMenu,
  homeContent,
  homeService,
  aboutCompany,
  aim,
  aimCategory,
  history}) {
  const { t } = useTranslation("");

  return (
    <Layout homeMenu={homeMenu.datas} homeService={homeService.datas}>
      <Hero data={homeContent.datas} />

      <AboutPreview data={aboutCompany.datas[0]} />

      <Statistics />

      <OurAimSection data={aim.datas[0]} aimCategory={aimCategory.datas} />

      <HappyPartners title={t("happy_partners_title")} text={t("happy_partners_text")}/>

      <History data={history.datas} />
    </Layout>
   
  );
}

export const getServerSideProps = async ({ locale }) => {
  const homeMenu = await getData("home_menu", locale);
  const homeContent = await getData("home_content", locale);
  const homeService = await getData("home_service", locale);
  const aboutCompany = await getData("about_company", locale);
  const aim = await getData("aim", locale);
  const aimCategory = await getData("aim_category", locale);
  const history = await getData("history", locale);

  return {
    props: {
      homeMenu,
      homeContent,
      homeService,
      aboutCompany,
      aim,
      aimCategory,
      history,
      ...await serverSideTranslations(locale, ['common'])
    }
  };
};
