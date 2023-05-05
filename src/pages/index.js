import Image from 'next/image'
import { Inter } from 'next/font/google'

import { Layout } from '../layout/Layout';
import Hero from "../components/Hero";
import { AboutPreview, Statistics, OurAimSection } from 'components';
import { HappyPartners, History } from "sections";


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Hero suppressHydrationWarning />

      <AboutPreview />

      <Statistics/>

      <OurAimSection/>

      <HappyPartners/>

      <History/>

      <div className='mb-[1000px]'></div>

    </Layout>
  );
}
