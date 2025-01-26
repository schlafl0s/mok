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

export default function Home({ slideInfo }) {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
    <Head>
      <title>Главная</title>
    </Head>
    <Layout>
      <main className={s.main}>
        <Slider setPopupOpen={setPopupOpen} slideInfo={slideInfo} />
        <Sale />
        <Directions />
        <Specials setPopupOpen={setPopupOpen} />
        <Stats /> 
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
  const res = await fetch('http://mok-clinic.local/wp-json/wp/v2/pages/51');

  // Извлекаем данные из ответа
  const data = await res.json();

  // Получаем ACF поля, если они есть
  const slideInfo = data.acf
  return {
    props: {
      pageData: data,
      slideInfo: slideInfo,
    },
  };
}