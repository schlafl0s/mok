import s from '../styles/Home.module.scss'
import Slider from '@/components/blocks/Slider'
import Sale from '@/components/blocks/Sale'
import Directions from '@/components/blocks/Directions'
import Specials from '@/components/blocks/Specials'
import Stats from '@/components/blocks/Stats'
import Specialists from '@/components/blocks/Specialists'
import Technologies from '@/components/blocks/Technologies'
import WhyUs from '@/components/blocks/WhyUs'
import Trust from '@/components/blocks/Trust'
import Reviews from '@/components/blocks/Reviews'
import License from '@/components/blocks/License'
import Appointment from '@/components/blocks/Appointment'
import News from '@/components/blocks/News'
import Layout from '@/components/Layout'
import AppointmentPopup from '@/components/blocks/AppointmentPopup'
import Head from 'next/head'
import { useState } from 'react'

export default function Home({ slideInfo, saleInfo, directionsInfo, specialsInfo, statsInfo }) {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <>
    <Head>
      <title>Главная</title>
    </Head>
    <Layout>
      <main className={s.main}>
        <Slider setPopupOpen={setPopupOpen} slideInfo={slideInfo} />
        <Sale saleInfo={saleInfo} />
        <Directions directionsInfo={directionsInfo} />
        <Specials setPopupOpen={setPopupOpen} specialsInfo={specialsInfo} />
        <Stats statsInfo={statsInfo} /> 
        <Specialists setPopupOpen={setPopupOpen} />
        <Technologies />
        <WhyUs />
        <Trust />
        <Reviews />
        <License />
        <Appointment />
        <News />
        <AppointmentPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
      </main>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const resSlide = await fetch('http://mok-clinic.local/wp-json/wp/v2/pages/51');
  const dataSlide = await resSlide.json();
  const slideInfo = dataSlide.acf;

  const resSale = await fetch('http://mok-clinic.local/wp-json/wp/v2/pages/160');
  const dataSale = await resSale.json();
  const saleInfo = dataSale.acf;

  const resDirections = await fetch('http://mok-clinic.local/wp-json/wp/v2/pages/174');
  const dataDirections = await resDirections.json();
  const directionsInfo = dataDirections.acf;

  const resSpecials = await fetch('http://mok-clinic.local/wp-json/wp/v2/pages/263');
  const dataSpecials = await resSpecials.json();
  const specialsInfo = dataSpecials.acf;
  
  const resStats = await fetch('http://mok-clinic.local/wp-json/wp/v2/pages/370');
  const dataStats = await resStats.json();
  const statsInfo = dataStats.acf;

  return {
    props: {
      slideInfo: slideInfo,
      saleInfo: saleInfo,
      directionsInfo: directionsInfo,
      specialsInfo: specialsInfo,
      statsInfo: statsInfo
    },
  };
}