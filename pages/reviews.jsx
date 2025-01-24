import BigReviews from '@/components/blocks/BigReviews'
import s from '/styles/Home.module.scss'
import Appointment from '@/components/blocks/Appointment'
import License from '@/components/blocks/License'
import News from '@/components/blocks/News'
import Layout from '@/components/Layout'
import Head from 'next/head'

export default function AboutUsPage () {
  return (
    <>
    <Head>
      <title>Отзывы</title>
    </Head>
    <Layout>
      <main className={s.main}>
            <BigReviews />
            <License />
            <Appointment />
            <News />
      </main>
    </Layout>
    </>
  )
}