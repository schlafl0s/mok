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

// На будущее - используй TypeScript, App Routes

// Скорей всего после сборки приложения и при изменении данных в админке у тебя не перерисуется страница
// https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration

// По факту у тебя все компоненты клиентские, а не серверные. Смысла было использовать NextJs нет

// https://liderpoiska.ru/blog/tegi-zagolovkov-dlya-seo-optimizatsii/
// Полностью отсувтует понимаение работы с SEO и базовой SEO разметки, на страницах заказжику даже нет возможности
// поменять заголовки/описание/ключевые слова

// Очевидно, что львинную долю кода писал за тебя AI, ты даже не захотел удалять комментарии, ты просто во вред себе
// же его используешь. По факту твой проект - выдержка компонентов, архитектура отсутвует полностью, нет понимания
// компонентного подхода к разработке, полностью отсутвуют общие компоненты. Куча лишних запросов, которые можно
// было бы решить при помощи добавления нужных тебе данных либо в самой админке Wordpress, либо через добавление
// кастомных полей. Проект мелкий, но поддерживать его в текущих реалиях невозможно.
// Это не тот проект, где на фронтенде должна быть куча логики. Задача фронтенда на таком проекте - получить данные
// и отрисовать используя UI-кит, который собирается и переиспользуется.

// Использовать prettier и eslint тоже было бы полезно

export default function Home({ slideInfo, saleInfo, directionsInfo, specialsInfo, statsInfo, technologiesInfo, whyUsInfo, specialistsInfo, reviewsInfo, articlesInfo }) {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <>
    <Head>
      {/*SEO записи должны быть не захадкоженными, а управляться с админки, так же нехватает description и кучи полей*/}
      {/*https://nextjs.org/docs/app/api-reference/functions/generate-metadata для получения и установки метаданных лучше использовать*/}
      <title>Главная</title>
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
        {/*// Чем этот попап отличается от попапа в лэйауте?*/}
        <AppointmentPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
      </main>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  // Используй константы для маршрутов API, если у тебя меняется домен, тебе придется вручную менять во всех местах данные
  const res = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/posts?categories=6&per_page=100`);
  const posts = await res.json();

  // Обработка данных статей
  const articlesInfo = posts.map((post) => {
    const article = post.acf?.article?.miniArticle || {};
    return {
      id: post.id,
      miniHeader: article.miniHeader,
      miniDate: article.miniData,
      miniImg: article.miniImg,
    };
  });

  const resSlide = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/pages/51`);
  const dataSlide = await resSlide.json();
  const slideInfo = dataSlide.acf;

  const resSale = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/pages/160`);
  const dataSale = await resSale.json();
  const saleInfo = dataSale.acf;

  const resDirections = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/pages/174`);
  const dataDirections = await resDirections.json();
  const directionsInfo = dataDirections.acf;

  const resSpecials = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/pages/263`);
  const dataSpecials = await resSpecials.json();
  const specialsInfo = dataSpecials.acf;

  const resStats = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/pages/370`);
  const dataStats = await resStats.json();
  const statsInfo = dataStats.acf;

  const resTechnologies = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/pages/409`);
  const dataTechnologies = await resTechnologies.json();
  const technologiesInfo = dataTechnologies.acf;

  const resWhyUs = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/pages/462`);
  const dataWhyUs = await resWhyUs.json();
  const whyUsInfo = dataWhyUs.acf;

  const resTrust = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/pages/506`);
  const dataTrust = await resTrust.json();
  const trustInfo = dataTrust.acf;

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
