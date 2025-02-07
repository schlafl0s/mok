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
import Bread from '@/components/blocks/Bread'

export default function AboutUsPage ({ statsInfo, whyUsInfo, specialistsInfo, aboutInfo }) {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
    <Head>
        <title>О нас</title>
    </Head>
    <Layout>
      <main className={s.main}>
          <Bread first={'О компании'} firstLink={'/about-us'}/>
          <AboutUs setPopupOpen={setPopupOpen} aboutInfo={aboutInfo} />
          <StatsMini statsInfo={statsInfo} />
          <Specialists setPopupOpen={setPopupOpen} specialistsInfo={specialistsInfo} />
          <WhyUs whyUsInfo={whyUsInfo} />
          <Appointment />
          <License />
          <AppointmentPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
      </main>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const resAbout = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/pages/665`);
  const dataAbout = await resAbout.json();
  const aboutInfo = dataAbout.acf;

  const resStats = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/pages/370`);
  const dataStats = await resStats.json();
  const statsInfo = dataStats.acf;
  
  const resWhyUs = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/pages/462`);
  const dataWhyUs = await resWhyUs.json();
  const whyUsInfo = dataWhyUs.acf;
  
  const resSpecialists = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/posts?categories=4&per_page=100`)
  const dataSpecialists = await resSpecialists.json()
  const specialistsInfo = dataSpecialists.map(item => ({
    experience: item.acf.doctor.experience,
    name: item.acf.doctor.name,
    specialty: item.acf.doctor.specialty,
    option1: item.acf.doctor.description1,
    option2: item.acf.doctor.description2,
    imgId: item.acf.doctor.img,  // Здесь храним только ID изображения
  }))

  return {
    props: {
      statsInfo: statsInfo,
      whyUsInfo: whyUsInfo,
      specialistsInfo: specialistsInfo,
      aboutInfo: aboutInfo,
    },
  };
}