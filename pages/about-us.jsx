import StatsMini from '@/components/blocks/StatsMini'
import s from '/styles/Home.module.scss'
import Specialists from '@/components/blocks/Specialists'
import WhyUs from '@/components/blocks/WhyUs'
import Appointment from '@/components/blocks/Appointment'
import License from '@/components/blocks/License'
import AboutUs from '@/components/blocks/AboutUs'
import Layout from '@/components/Layout'
import { useState } from 'react'
import AppointmentPopup from '@/components/blocks/AppointmentPopup'
import Head from 'next/head'

export default function AboutUsPage () {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
    <Head>
        <title>О нас</title>
    </Head>
    <Layout>
      <main className={s.main}>
          <AboutUs setPopupOpen={setPopupOpen} />
          <StatsMini />
          <Specialists setPopupOpen={setPopupOpen} />
          <WhyUs />
          <Appointment />
          <License />
          <AppointmentPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
      </main>
    </Layout>
    </>
  )
}