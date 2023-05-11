import React from 'react';
import { Layout } from "../../layout/Layout";
import {
  CompanyProfile,
  OurMission,
  Partners,
  OurTeam,
  WithOurPartners,
  Gallery,
    AboutHistory
} from "sections";


const About = () => {
    return (
        <Layout>
            <CompanyProfile/>
            <OurMission/>
            <OurTeam/>
            <WithOurPartners/>
            <Partners/>
            <Gallery/>
            <AboutHistory/>
        </Layout>
    );
};

export default About;