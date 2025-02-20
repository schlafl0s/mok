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

export default function Home({ pageInfo, slideInfo, saleInfo, directionsInfo, specialsInfo, statsInfo, technologiesInfo, whyUsInfo, specialistsInfo, reviewsInfo, articlesInfo }) {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <>
    <Head>
      <title>{pageInfo.acf?.home?.title || 'Главная'}</title>
      <meta name="description" content={pageInfo.acf?.home?.description || ''} />
      <meta name="keywords" content={pageInfo.acf?.home?.keywords || ''} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://doctor-mok.ru" />
      <meta property="og:title" content={pageInfo.acf?.home?.title || 'Главная'} />
      <meta property="og:description" content={pageInfo.acf?.home?.description || ''} />
      <meta property="og:image" content="/mokfavicon.png" />
    </Head>
    <Layout>
      <main className={s.main}>
        <Slider setPopupOpen={setPopupOpen} slideInfo={slideInfo} />
        <Sale saleInfo={saleInfo} setPopupOpen={setPopupOpen} />
        <Directions directionsInfo={directionsInfo} />
        <Specials setPopupOpen={setPopupOpen} specialsInfo={specialsInfo} />
        <Stats statsInfo={statsInfo} /> 
        <Specialists setPopupOpen={setPopupOpen} specialistsInfo={specialistsInfo} />
        <Technologies technologiesInfo={technologiesInfo} />
        <WhyUs whyUsInfo={whyUsInfo} />
        <Trust />
        <Reviews reviewsInfo={reviewsInfo} />
        <License />
        <Appointment />
        <News articlesInfo={articlesInfo} />
        <AppointmentPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
      </main>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const resPage = await fetch('https://wp.doctor-mok.ru/wp-json/wp/v2/pages/1382');
  const pageInfo = await resPage.json();

  const res = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/posts?categories=6&per_page=100`);
  const posts = await res.json();

  const articlesInfo = posts.map((post) => {
    const article = post.acf?.article?.miniArticle || {};
    return {
      id: post.id,
      miniHeader: article.miniHeader,
      miniDate: article.miniData,
      miniImg: article.miniImg,
    };
  });

  const resSlide = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/pages/51`);
  const dataSlide = await resSlide.json();
  const slideInfo = dataSlide.acf;

  const resSale = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/pages/160`);
  const dataSale = await resSale.json();
  const saleInfo = dataSale.acf;

  const resDirections = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/pages/174`);
  const dataDirections = await resDirections.json();
  const directionsInfo = dataDirections.acf;

  const resSpecials = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/pages/263`);
  const dataSpecials = await resSpecials.json();
  const specialsInfo = dataSpecials.acf;
  
  const resStats = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/pages/370`);
  const dataStats = await resStats.json();
  const statsInfo = dataStats.acf;

  const resTechnologies = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/pages/409`);
  const dataTechnologies = await resTechnologies.json();
  const technologiesInfo = dataTechnologies.acf;
  
  const resWhyUs = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/pages/462`);
  const dataWhyUs = await resWhyUs.json();
  const whyUsInfo = dataWhyUs.acf;

  const resTrust = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/pages/506`);
  const dataTrust = await resTrust.json();
  const trustInfo = dataTrust.acf;
  
  const resSpecialists = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/posts?categories=4&per_page=100`)
  const dataSpecialists = await resSpecialists.json()
  const specialistsInfo = dataSpecialists.map(item => ({
    experience: item.acf.doctor.experience,
    name: item.acf.doctor.name,
    specialty: item.acf.doctor.specialty,
    option1: item.acf.doctor.description1,
    option2: item.acf.doctor.description2,
    imgId: item.acf.doctor.img,  // Здесь храним только ID изображения
  }))

  const resReviews = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/posts?categories=5&per_page=100`)
  const dataReviews = await resReviews.json()
  const reviewsInfo = dataReviews.map(item => ({
    text: item.acf.review.text,
    author: item.acf.review.author,
    doctor: item.acf.review.doctor,
    stars: item.acf.review.stars,
  }))

  return {
    props: {
      pageInfo: pageInfo,
      slideInfo: slideInfo,
      saleInfo: saleInfo,
      directionsInfo: directionsInfo,
      specialsInfo: specialsInfo,
      statsInfo: statsInfo,
      technologiesInfo: technologiesInfo,
      whyUsInfo: whyUsInfo,
      trustInfo: trustInfo,
      specialistsInfo: specialistsInfo,
      reviewsInfo: reviewsInfo,
      articlesInfo: articlesInfo,
    },
  };
}