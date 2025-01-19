import Layout from '@/components/Layout'
import s from '/styles/Home.module.scss'
import Service from '@/components/blocks/Service'
import Sale from '@/components/blocks/Sale'
import WhyUs from '@/components/blocks/WhyUs'
import Appointment from '@/components/blocks/Appointment'
import Specialists from '@/components/blocks/Specialists'
import ServiceDirections from '@/components/blocks/serviceDirections'
import HowIsItGoing from '@/components/blocks/HowIsItGoing'
import Prices from '@/components/blocks/Prices'
import License from '@/components/blocks/License'
import Consultation from '@/components/blocks/Consultation'

export default function ServicePage () {
    return (
      <Layout>
        <main className={s.main}>
            <Service />
            <Sale />
            <ServiceDirections />
            <WhyUs />
            <Appointment />
            <HowIsItGoing />
            <Prices />
            <Consultation />
            <Specialists />
            <License />
        </main>
      </Layout>
    )
}