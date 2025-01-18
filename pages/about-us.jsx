import StatsMini from '@/components/blocks/StatsMini'
import s from '/styles/Home.module.scss'
import Specialists from '@/components/blocks/Specialists'
import WhyUs from '@/components/blocks/WhyUs'
import Appointment from '@/components/blocks/Appointment'
import License from '@/components/blocks/License'
import AboutUs from '@/components/blocks/AboutUs'

export default function AboutUsPage () {
  return (
    <main className={s.main}>
        <AboutUs />
        <StatsMini />
        <Specialists />
        <WhyUs />
        <Appointment />
        <License />
    </main>
  )
}