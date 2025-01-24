import Layout from '@/components/Layout'
import s from '/styles/Home.module.scss'
import Service from '@/components/blocks/Service'
import Sale from '@/components/blocks/Sale'
import WhyUs from '@/components/blocks/WhyUs'
import Appointment from '@/components/blocks/Appointment'
import Specialists from '@/components/blocks/Specialists'
import ServiceDirections from '@/components/blocks/serviceDirections'
import HowIsItGoing from '@/components/blocks/HowIsItGoing'
import Prices from '@/components/blocks/Prices'
import License from '@/components/blocks/License'
import Consultation from '@/components/blocks/Consultation'
import AppointmentPopup from '@/components/blocks/AppointmentPopup'
import Head from 'next/head'
import { useState } from 'react'

export default function ServicePage () {
    const [popupOpen, setPopupOpen] = useState(false);

    return (
      <>
      <Head>
          <title>Детальное описание услуги</title>
      </Head>
      <Layout>
        <main className={s.main}>
            <Service setPopupOpen={setPopupOpen} />
            <Sale />
            <ServiceDirections setPopupOpen={setPopupOpen} />
            <WhyUs />
            <Appointment />
            <HowIsItGoing />
            <Prices />
            <Consultation />
            <Specialists setPopupOpen={setPopupOpen} />
            <License />
            <AppointmentPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
        </main>
      </Layout>
      </>
    )
}