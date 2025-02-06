import BigReviews from '@/components/blocks/BigReviews'
import s from '/styles/Home.module.scss'
import Appointment from '@/components/blocks/Appointment'
import License from '@/components/blocks/License'
import News from '@/components/blocks/News'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Bread from '@/components/blocks/Bread'

export default function AboutUsPage ({ reviewsInfo, articlesInfo }) {
  return (
    <>
    <Head>
      <title>Отзывы</title>
    </Head>
    <Layout>
      <main className={s.main}>
            <Bread first={'Отзывы'} firstLink={'/reviews'}/>
            <BigReviews reviewsInfo={reviewsInfo} />
            <License />
            <Appointment />
            <News articlesInfo={articlesInfo} />
      </main>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const resReviews = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?categories=5&per_page=100`)
  const dataReviews = await resReviews.json()
  const reviewsInfo = dataReviews.map(item => ({
    text: item.acf.review.text,
    author: item.acf.review.author,
    doctor: item.acf.review.doctor,
    stars: item.acf.review.stars,
  }))

  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?categories=6&per_page=100`);
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
      reviewsInfo: reviewsInfo,
      articlesInfo: articlesInfo,
    },
  };
}