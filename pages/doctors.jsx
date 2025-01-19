import s from '/styles/Home.module.scss'
import Appointment from '@/components/blocks/Appointment'
import License from '@/components/blocks/License'
import Layout from '@/components/Layout'
import Reviews from '@/components/blocks/Reviews'
import BigSpecialists from '@/components/blocks/BigSpecialists'

export default function AboutUsPage () {
  return (
    <Layout>
      <main className={s.main}>
            <BigSpecialists />
            <Reviews />
            <Appointment />
            <License />
      </main>
    </Layout>
  )
}