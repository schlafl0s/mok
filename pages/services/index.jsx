import Directions from '@/components/blocks/Directions'
import s from '/styles/Home.module.scss'
import Specials from '@/components/blocks/Specials'
import Reviews from '@/components/blocks/Reviews'
import License from '@/components/blocks/License'
import Appointment from '@/components/blocks/Appointment'
import News from '@/components/blocks/News'
import SpecialService from '@/components/blocks/SpecialService'
import Layout from '@/components/Layout'

export default function Services () {
  return (
    <Layout>
      <main className={s.main}>
        <SpecialService />
        <Directions />
        <Specials />
        <Reviews />
        <License />
        <Appointment />
        <News />
      </main>
    </Layout>
  )
}