import Image from 'next/image'
import { Inter } from 'next/font/google'

import { Layout } from '../layout/Layout';
import Hero from "../components/Hero";


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Hero/>
    </Layout>
  )
}
