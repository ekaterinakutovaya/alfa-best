import {Layout} from "layout/Layout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import {CompanyProfile, Gallery, HappyPartners, OurMission, Partners} from "sections";
import {getData} from "services/data";

const About = ({
                 mainMenu,
                 servicesMenu,
                 aboutCompany,
                 mission,
                 gallery
               }) => {
  const {t} = useTranslation("");
  
  return (
      <Layout mainMenu={mainMenu.data} servicesMenu={servicesMenu.data}>
        {Object.keys(aboutCompany).length ? (
            <CompanyProfile data={aboutCompany.data[0]}/>
        ) : (
            <CompanyProfile data={{}}/>
        )}
        
        {Object.keys(mission).length &&
          Object.keys(servicesMenu).length &&
            (<OurMission
              data={mission.data[0]}
              servicesMenu={servicesMenu.data}
            />
          )}
        
        <HappyPartners
          title={t("with_our_partners_title")}
          text={t("with_our_partners_text")}
        />
        
        <Partners />
        
        {Object.keys(gallery).length && (
          <Gallery data={gallery.data} />
        )}
      </Layout>
  );
};

export default About;

export const getServerSideProps = async ({locale}) => {
  const mainMenu = await getData("main_menu", locale);
  const servicesMenu = await getData("services_menu", locale);
  const aboutCompany = await getData("about_company", locale);
  const mission = await getData("mission", locale);
  const gallery = await getData("gallery", locale);
  
  return {
    props: {
      mainMenu,
      servicesMenu,
      aboutCompany,
      mission,
      gallery,
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
};
