import React from 'react';
import { Layout } from "../../layout/Layout";
import CompanyProfile from 'sections/CompanyProfile';
import { OurMission, Partners } from 'sections';
import OurTeam from 'sections/OurTeam';
import WithOurPartners from 'sections/WithOurPartners';

const About = () => {
    return (
        <Layout>
            <CompanyProfile/>
            <OurMission/>
            <OurTeam/>
            <WithOurPartners/>
            <Partners/>
        </Layout>
    );
};

export default About;