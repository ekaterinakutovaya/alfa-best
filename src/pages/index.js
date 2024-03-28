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
import { getData } from "services/data";


export default function Home({ mainMenu, servicesMenu, heroContent, aboutCompany, ourAim, ourAimItems,  history}) {
  const { t } = useTranslation("");

  return (
    <Layout mainMenu={mainMenu.data} servicesMenu={servicesMenu.data}>

      <Hero data={heroContent.data} />
      
      {Object.keys(aboutCompany).length ? <AboutPreview data={aboutCompany.data[0]} /> : ''}
      
      <Statistics />
      
      {Object.keys(ourAim).length ? <OurAimSection data={ourAim.data[0]} aimItems={ourAimItems.data} /> : ''}
      
      <HappyPartners
        title={t("happy_partners_title")}
        text={t("happy_partners_text")}
      />
      
      {Object.keys(history).length ? <History data={history.data} /> : ''}

    </Layout>
  );
}

export const getServerSideProps = async ({ locale }) => {
  const mainMenu = await getData("main_menu", locale);
  const servicesMenu = await getData("services_menu", locale);
  const heroContent = await getData("hero_content", locale);
  const aboutCompany = await getData("about_company", locale);
  const ourAim = await getData("our_aim", locale);
  const ourAimItems = await getData("our_aim_items", locale);
  const history = await getData("history", locale);

  return {
    props: {
      mainMenu,
      servicesMenu,
      heroContent,
      aboutCompany,
      ourAim,
      ourAimItems,
      history,
      ...await serverSideTranslations(locale, ['common'])
    }
  };
};
