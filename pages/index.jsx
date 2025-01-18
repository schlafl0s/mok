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

export default function Home() {
  return (
    <Layout>
      <main className={s.main}>
        <Slider />
        <Sale />
        <Directions />
        <Specials />
        <Stats />
        <Specialists />
        <Technologies />
        <WhyUs />
        <Trust />
        <Reviews />
        <License />
        <Appointment />
        <News />
      </main>
    </Layout>
  )
}