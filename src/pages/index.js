import Image from 'next/image'
import { Inter } from 'next/font/google'


import { Layout } from '../layout/Layout';
import { Statistics, OurAimSection } from 'components';
import { AboutPreview, HappyPartners, History, Hero } from "sections";


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <Layout>
      <Hero />

      <AboutPreview />

      <Statistics/>

      <OurAimSection/>

      <HappyPartners/>

      <History/>

    </Layout>
  );
}
