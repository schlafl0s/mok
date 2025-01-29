import BigReviews from '@/components/blocks/BigReviews'
import s from '/styles/Home.module.scss'
import Appointment from '@/components/blocks/Appointment'
import License from '@/components/blocks/License'
import News from '@/components/blocks/News'
import Layout from '@/components/Layout'
import Head from 'next/head'

export default function AboutUsPage ({ reviewsInfo }) {
  return (
    <>
    <Head>
      <title>Отзывы</title>
    </Head>
    <Layout>
      <main className={s.main}>
            <BigReviews reviewsInfo={reviewsInfo} />
            <License />
            <Appointment />
            <News />
      </main>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const resReviews = await fetch('http://mok-clinic.local/wp-json/wp/v2/posts?categories=5&per_page=100')
  const dataReviews = await resReviews.json()
  const reviewsInfo = dataReviews.map(item => ({
    text: item.acf.review.text,
    author: item.acf.review.author,
    doctor: item.acf.review.doctor,
    stars: item.acf.review.stars,
  }))

  return {
    props: {
      reviewsInfo: reviewsInfo,
    },
  };
}