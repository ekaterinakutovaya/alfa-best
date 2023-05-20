import React from "react";
import { Layout } from "../../layout/Layout";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import {
  CompanyProfile,
  OurMission,
  Partners,
  OurTeam,
  WithOurPartners,
  Gallery,
  AboutHistory
} from "sections";
import { getData } from "../api/data";

const About = ({
  homeMenu,
  homeService,
  aboutCompany,
  mission,
  team,
  iconGallery,
  photoGallery
}) => {

  return (
    <Layout homeMenu={homeMenu.datas} homeService={homeService.datas}>
      <CompanyProfile data={aboutCompany.datas[0]} />
      <OurMission
        data={mission.datas[0]}
        homeService={homeService.datas}
        icons={iconGallery.datas}
      />
      <OurTeam data={team.datas} />
      <WithOurPartners />
      <Partners />
      <Gallery data={photoGallery.datas} />
      <AboutHistory />
    </Layout>
  );
};

export default About;

export const getServerSideProps = async ({ locale }) => {
  const homeMenu = await getData("home_menu", locale);
  const homeService = await getData("home_service", locale);
  const mission = await getData("mission", locale);
  const aboutCompany = await getData("about_company", locale);
  const team = await getData("team", locale);
  const iconGallery = await getData("gallery", locale);
  const photoGallery = await getData("photo_gallery", locale);

  return {
    props: {
      homeMenu,
      homeService,
      mission,
      aboutCompany,
      team,
      iconGallery,
      photoGallery,
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
};
