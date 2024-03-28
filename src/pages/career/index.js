import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import {Layout} from "layout/Layout";
import {getData} from "services/data";
import {CareerSection} from "../../sections";

const Career = ({
                   mainMenu,
                   servicesMenu,
                   career,
                   vacancy
                 }) => {
  return (
      <Layout mainMenu={mainMenu.data} servicesMenu={servicesMenu.data}>
        {Object.keys(career).length &&
          Object.keys(vacancy).length && (
            <CareerSection
              career={career.data[0]}
              vacancy={vacancy.data}
            />
          )}
      </Layout>
  );
};

export default Career;

export const getServerSideProps = async ({locale}) => {
  const mainMenu = await getData("main_menu", locale);
  const servicesMenu = await getData("services_menu", locale);
  const career = await getData("career", locale);
  const vacancy = await getData("vacancy", locale);
  
  return {
    props: {
      mainMenu,
      servicesMenu,
      career,
      vacancy,
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
};
