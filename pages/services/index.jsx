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
import Head from 'next/head'
import AppointmentPopup from '@/components/blocks/AppointmentPopup'
import Bread from '@/components/blocks/Bread'

export default function Services ({ reviewsInfo, specialsInfo, directionsInfo, specialServiceInfo, articlesInfo }) {
  const [popupOpen, setPopupOpen] = useState(false);
  
  return (
    <>
    <Head>
        <title>Услуги</title>
    </Head>
    <Layout>
      <main className={s.main}>
        <Bread first={'Услуги'} firstLink={'/services'} />
        <SpecialService setPopupOpen={setPopupOpen} specialServiceInfo={specialServiceInfo} />
        <Directions directionsInfo={directionsInfo} />
        <Specials setPopupOpen={setPopupOpen} specialsInfo={specialsInfo} />
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
  const resSpecialService = await fetch('http://mok-clinic.local/wp-json/wp/v2/pages/682');
  const dataSpecialService = await resSpecialService.json();
  const specialServiceInfo = dataSpecialService.acf;

  const resDirections = await fetch('http://mok-clinic.local/wp-json/wp/v2/pages/174');
  const dataDirections = await resDirections.json();
  const directionsInfo = dataDirections.acf;

  const resSpecials = await fetch('http://mok-clinic.local/wp-json/wp/v2/pages/263');
  const dataSpecials = await resSpecials.json();
  const specialsInfo = dataSpecials.acf;

  const resReviews = await fetch('http://mok-clinic.local/wp-json/wp/v2/posts?categories=5&per_page=100')
  const dataReviews = await resReviews.json()
  const reviewsInfo = dataReviews.map(item => ({
    text: item.acf.review.text,
    author: item.acf.review.author,
    doctor: item.acf.review.doctor,
    stars: item.acf.review.stars,
  }))

  const res = await fetch('http://mok-clinic.local/wp-json/wp/v2/posts?categories=6&per_page=100');
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

  return {
    props: {
      specialServiceInfo: specialServiceInfo,
      directionsInfo: directionsInfo,
      specialsInfo: specialsInfo,
      reviewsInfo: reviewsInfo,
      articlesInfo: articlesInfo,
    },
  };
}