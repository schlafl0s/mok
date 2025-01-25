import License from '@/components/blocks/License'
import s from '/styles/Home.module.scss'
import Appointment from '@/components/blocks/Appointment'
import Layout from '@/components/Layout'
import sf from '/styles/Footer.module.scss'
import Head from 'next/head'

export default function Contacts ({ contactInfo }) {
    return (
        <>
        <Head>
        <title>Контакты</title>
        </Head>
        <Layout footerCut={true}>
            <main className={s.main}>
                <section className={`${sf.contacts} ${sf.contactsPadding}`}>
                <h1 className={`${sf.contactsHeader} ${sf.contactsBlackColor}`}>Контакты</h1>
                <div className={sf.contactsContainer}>
                    <div className={sf.contact}>
                        <svg className={sf.contactArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="white"/>
                        </svg>
                        <span className={`${sf.contactInfoType} ${sf.contactsBlackColor}`}>Телефон:</span>
                        <span className={`${sf.contactInfo} ${sf.contactsBlackColor}`}>{contactInfo.phone}</span>
                    </div>
                    <div className={`${sf.contact} ${sf.contactColorBlue}`}>
                        <svg className={sf.contactArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="white"/>
                        </svg>
                        <span className={`${sf.contactInfoType} ${sf.contactsBlackColor}`}>Электронная почта:</span>
                        <span className={`${sf.contactInfo} ${sf.contactsBlackColor}`}>{contactInfo.email}</span>
                    </div>
                    <div className={`${sf.contact} ${sf.contactColorYellow}`}>
                        <svg className={sf.contactArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="white"/>
                        </svg>
                        <span className={`${sf.contactInfoType} ${sf.contactsBlackColor}`}>График:</span>
                        <span className={`${sf.contactInfo} ${sf.contactsBlackColor}`}>Круглосуточно</span>
                    </div>
                    <div className={sf.contact}>
                        <svg className={sf.contactArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="white"/>
                        </svg>
                        <span className={`${sf.contactInfoType} ${sf.contactsBlackColor}`}>Адрес:</span>
                        <span className={`${sf.contactInfo} ${sf.contactsBlackColor}`}>{contactInfo.adress}</span>
                    </div>
                </div>
                <div className={sf.map}>
                    <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
                        Москва
                    </a>
                    <a href="https://yandex.ru/maps/213/moscow/house/moskovskaya_ulitsa_1/Z04YcgRpSUMPQFtvfXpzdXpgYw==/?ll=37.439068%2C55.624637&utm_medium=mapframe&utm_source=maps&z=16" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
                        Московская улица, 1 на карте Москвы, ближайшее метро Саларьево — Яндекс Карты
                    </a>
                    <iframe
                        className={sf.mapContainer} 
                        src="https://yandex.ru/map-widget/v1/?ll=37.439068%2C55.624637&mode=whatshere&whatshere%5Bpoint%5D=37.439068%2C55.624637&whatshere%5Bzoom%5D=17&z=16"
                        width="100%"
                        height="500"
                        frameBorder="1"
                        allowFullScreen="true"
                        style={{ position: 'relative' }}
                    />
                </div>
                </section>
                <License />
                <Appointment />
            </main>
        </Layout>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://mok-clinic.local/wp-json/wp/v2/pages/16');
  
    // Извлекаем данные из ответа
    const data = await res.json();
  
    // Получаем ACF поля, если они есть
    const contactInfo = data.acf
    return {
      props: {
        pageData: data,
        contactInfo: contactInfo,
      },
    };
}