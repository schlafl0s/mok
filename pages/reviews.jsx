import BigReviews from '@/components/blocks/BigReviews'
import s from '/styles/Home.module.scss'
import Appointment from '@/components/blocks/Appointment'
import License from '@/components/blocks/License'
import News from '@/components/blocks/News'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Bread from '@/components/blocks/Bread'

export default function reviewsPage ({ pageInfo, reviewsInfo, articlesInfo }) {
  return (
    <>
    <Head>
      <title>{pageInfo.acf?.reviews?.title || 'Отзывы'}</title>
      <meta name="description" content={pageInfo.acf?.reviews?.description || ''} />
      <meta name="keywords" content={pageInfo.acf?.reviews?.keywords || ''} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://doctor-mok.ru/reviews" />
      <meta property="og:title" content={pageInfo.acf?.reviews?.title || 'Отзывы'} />
      <meta property="og:description" content={pageInfo.acf?.reviews?.description || ''} />
      <meta property="og:image" content="/mokfavicon.png" />
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
  const resPage = await fetch('https://wp.doctor-mok.ru/wp-json/wp/v2/pages/1382');
  const pageInfo = await resPage.json();

  const resReviews = await fetch(`https://wp.doctor-mok.ru/wp-json/wp/v2/posts?categories=5&per_page=100`)
  const dataReviews = await resReviews.json()
  const reviewsInfo = dataReviews.map(item => ({
    text: item.acf.review.text,
    author: item.acf.review.author,
    doctor: item.acf.review.doctor,
    stars: item.acf.review.stars,
  }))

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

  return {
    props: {
      pageInfo: pageInfo,
      reviewsInfo: reviewsInfo,
      articlesInfo: articlesInfo,
    },
  };
}