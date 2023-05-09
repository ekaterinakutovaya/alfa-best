import React from 'react';
import { Layout } from "../../layout/Layout";
import CompanyProfile from 'sections/CompanyProfile';
import { OurMission } from 'sections';
import OurTeam from 'sections/OurTeam';

const About = () => {
    return (
        <Layout>
            <CompanyProfile/>
            <OurMission/>
            <OurTeam/>
        </Layout>
    );
};

export default About;