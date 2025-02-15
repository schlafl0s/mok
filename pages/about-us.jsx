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

export default function AboutUsPage ({ pageInfo, statsInfo, whyUsInfo, specialistsInfo, aboutInfo }) {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
    <Head>
      <title>{pageInfo.acf?.aboutUs?.title || 'О компании'}</title>
      <meta name="description" content={pageInfo.acf?.aboutUs?.description || ''} />
      <meta name="keywords" content={pageInfo.acf?.aboutUs?.keywords || ''} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://doctor-mok.ru/about-us" />
      <meta property="og:title" content={pageInfo.acf?.aboutUs?.title || 'О компании'} />
      <meta property="og:description" content={pageInfo.acf?.aboutUs?.description || ''} />
      <meta property="og:image" content="/mokfavicon.png" />
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
  const resPage = await fetch('https://wp.doctor-mok.ru/wp-json/wp/v2/pages/1382');
  const pageInfo = await resPage.json();

  const resAbout = await fetch(`https://https://wp.doctor-mok.ru/wp-json/wp/v2/pages/665`);
  const dataAbout = await resAbout.json();
  const aboutInfo = dataAbout.acf;

  const resStats = await fetch(`https://https://wp.doctor-mok.ru/wp-json/wp/v2/pages/370`);
  const dataStats = await resStats.json();
  const statsInfo = dataStats.acf;
  
  const resWhyUs = await fetch(`https://https://wp.doctor-mok.ru/wp-json/wp/v2/pages/462`);
  const dataWhyUs = await resWhyUs.json();
  const whyUsInfo = dataWhyUs.acf;
  
  const resSpecialists = await fetch(`https://https://wp.doctor-mok.ru/wp-json/wp/v2/posts?categories=4&per_page=100`)
  const dataSpecialists = await resSpecialists.json()
  const specialistsInfo = dataSpecialists.map(item => ({
    experience: item.acf.doctor.experience,
    name: item.acf.doctor.name,
    specialty: item.acf.doctor.specialty,
    option1: item.acf.doctor.description1,
    option2: item.acf.doctor.description2,
    imgId: item.acf.doctor.img,
  }))

  return {
    props: {
      pageInfo: pageInfo,
      statsInfo: statsInfo,
      whyUsInfo: whyUsInfo,
      specialistsInfo: specialistsInfo,
      aboutInfo: aboutInfo,
    },
  };
}