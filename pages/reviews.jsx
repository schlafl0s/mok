import BigReviews from '@/components/blocks/BigReviews'
import s from '/styles/Home.module.scss'
import Appointment from '@/components/blocks/Appointment'
import License from '@/components/blocks/License'
import News from '@/components/blocks/News'
import Layout from '@/components/Layout'

export default function AboutUsPage () {
  return (
    <Layout>
      <main className={s.main}>
            <BigReviews />
            <License />
            <Appointment />
            <News />
      </main>
    </Layout>
  )
}