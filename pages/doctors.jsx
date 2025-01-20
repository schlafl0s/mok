import s from '/styles/Home.module.scss'
import Appointment from '@/components/blocks/Appointment'
import License from '@/components/blocks/License'
import Layout from '@/components/Layout'
import Reviews from '@/components/blocks/Reviews'
import BigSpecialists from '@/components/blocks/BigSpecialists'
import { useState } from 'react'
import AppointmentPopup from '@/components/blocks/AppointmentPopup'

export default function AboutUsPage () {
  const [popupOpen, setPopupOpen] = useState(false);
  
  return (
    <Layout>
      <main className={s.main}>
            <BigSpecialists setPopupOpen={setPopupOpen} />
            <Reviews />
            <Appointment />
            <License />
            <AppointmentPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
      </main>
    </Layout>
  )
}