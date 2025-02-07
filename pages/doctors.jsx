import s from '/styles/Home.module.scss'
import Appointment from '@/components/blocks/Appointment'
import License from '@/components/blocks/License'
import Layout from '@/components/Layout'
import Reviews from '@/components/blocks/Reviews'
import BigSpecialists from '@/components/blocks/BigSpecialists'
import { useState } from 'react'
import AppointmentPopup from '@/components/blocks/AppointmentPopup'
import Head from 'next/head'
import Bread from '@/components/blocks/Bread'

export default function AboutUsPage ({ reviewsInfo, specialistsInfo }) {
  const [popupOpen, setPopupOpen] = useState(false);
  
  return (
    <>
    <Head>
      <title>Врачи</title>
    </Head>
    <Layout>
      <main className={s.main}>
            <Bread first={'Врачи'} firstLink={'/doctors'}/>
            <BigSpecialists setPopupOpen={setPopupOpen} specialistsInfo={specialistsInfo} />
            <Reviews reviewsInfo={reviewsInfo} />
            <Appointment />
            <License />
            <AppointmentPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
      </main>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const resSpecialists = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/posts?categories=4&per_page=100`);
  const dataSpecialists = await resSpecialists.json();

  const specialistsInfo = await Promise.all(dataSpecialists.map(async (item) => {
    // Получаем данные врача
    const specialist = {
      experience: item.acf.doctor.experience,
      name: item.acf.doctor.name,
      specialty: item.acf.doctor.specialty,
      option1: item.acf.doctor.description1,
      option2: item.acf.doctor.description2,
      imgId: item.acf.doctor.img,  // ID изображения
      isChild: item.acf.doctor.isChild,
    };

    // Получаем изображение для врача по его imgId
    const imgResponse = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/media/${specialist.imgId}`);
    const imgData = await imgResponse.json();
    specialist.img = imgData.source_url;  // URL изображения

    return specialist;
  }));

  const resReviews = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/posts?categories=5&per_page=100`)
  const dataReviews = await resReviews.json()
  const reviewsInfo = dataReviews.map(item => ({
    text: item.acf.review.text,
    author: item.acf.review.author,
    doctor: item.acf.review.doctor,
    stars: item.acf.review.stars,
  }))

  return {
    props: {
      specialistsInfo: specialistsInfo,
      reviewsInfo: reviewsInfo,
    },
  };
}