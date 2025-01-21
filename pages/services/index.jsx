import Directions from '@/components/blocks/Directions'
import s from '/styles/Home.module.scss'
import Specials from '@/components/blocks/Specials'
import Reviews from '@/components/blocks/Reviews'
import License from '@/components/blocks/License'
import Appointment from '@/components/blocks/Appointment'
import News from '@/components/blocks/News'
import SpecialService from '@/components/blocks/SpecialService'
import Layout from '@/components/Layout'
import { useState } from 'react'
import AppointmentPopup from '@/components/blocks/AppointmentPopup'

export default function Services () {
  const [popupOpen, setPopupOpen] = useState(false);
  
  return (
    <Layout>
      <main className={s.main}>
        <SpecialService setPopupOpen={setPopupOpen} />
        <Directions />
        <Specials setPopupOpen={setPopupOpen} />
        <Reviews />
        <License />
        <Appointment />
        <News />
        <AppointmentPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
      </main>
    </Layout>
  )
}