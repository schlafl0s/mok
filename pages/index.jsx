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
import { useState } from 'react'

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <Layout>
      <main className={s.main}>
        <Slider setPopupOpen={setPopupOpen} />
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
  )
}
