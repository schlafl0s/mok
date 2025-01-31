import Layout from '@/components/Layout'
import s from '/styles/Home.module.scss'
import Service from '@/components/blocks/Service'
import Sale from '@/components/blocks/Sale'
import WhyUs from '@/components/blocks/WhyUs'
import Appointment from '@/components/blocks/Appointment'
import Specialists from '@/components/blocks/Specialists'
import ServiceDirections from '@/components/blocks/serviceDirections'
import Prices from '@/components/blocks/Prices'
import HowIsItGoing from '@/components/blocks/HowIsItGoing'
import License from '@/components/blocks/License'
import Consultation from '@/components/blocks/Consultation'
import AppointmentPopup from '@/components/blocks/AppointmentPopup'
import Head from 'next/head'
import { useState } from 'react'

export default function ServicePage ({ saleInfo, specialistsInfo, whyUsInfo, servicePageInfo }) {
    const [popupOpen, setPopupOpen] = useState(false);

    return (
      <>
      <Head>
          <title>Детальное описание услуги</title>
      </Head>
      <Layout>
        <main className={s.main}>
            <Service setPopupOpen={setPopupOpen} servicePageInfo={servicePageInfo} />
            <Sale saleInfo={saleInfo} />
            <ServiceDirections setPopupOpen={setPopupOpen} servicePageInfo={servicePageInfo} />
            <WhyUs whyUsInfo={whyUsInfo} />
            <Appointment />
            <HowIsItGoing servicePageInfo={servicePageInfo} />
            <Prices servicePageInfo={servicePageInfo} />
            <Consultation />
            <Specialists setPopupOpen={setPopupOpen} specialistsInfo={specialistsInfo} />
            <License />
            <AppointmentPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
        </main>
      </Layout>
      </>
    )
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const resOne = await fetch(`http://mok-clinic.local/wp-json/wp/v2/posts/${id}`);
  const post = await resOne.json();

  const servicePageInfo = {
    id: post.id,
    title: post.acf?.title || '',
    bannerService: post.acf?.bannerService || {},
    directions: post.acf?.directions || {},
    howIsItGoing: post.acf?.howIsItGoing || {},
    prices: post.acf?.prices || {},
  };

  const resSale = await fetch('http://mok-clinic.local/wp-json/wp/v2/pages/160');
  const dataSale = await resSale.json();
  const saleInfo = dataSale.acf;
  
  const resWhyUs = await fetch('http://mok-clinic.local/wp-json/wp/v2/pages/462');
  const dataWhyUs = await resWhyUs.json();
  const whyUsInfo = dataWhyUs.acf;
  
  const resSpecialists = await fetch('http://mok-clinic.local/wp-json/wp/v2/posts?categories=4&per_page=100')
  const dataSpecialists = await resSpecialists.json()
  const specialistsInfo = dataSpecialists.map(item => ({
    experience: item.acf.doctor.experience,
    name: item.acf.doctor.name,
    specialty: item.acf.doctor.specialty,
    option1: item.acf.doctor.description1,
    option2: item.acf.doctor.description2,
    imgId: item.acf.doctor.img,  // Здесь храним только ID изображения
  }))

  return {
    props: {
      servicePageInfo: servicePageInfo,
      saleInfo: saleInfo,
      whyUsInfo: whyUsInfo,
      specialistsInfo: specialistsInfo,
    },
  };
}