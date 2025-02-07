import Link from 'next/link'
import s from '../styles/Footer.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Footer ({ footerCut = false }) {
    const [contactInfo, setContactInfo] = useState('');
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Функция загрузки данных
        const fetchServices = async () => {
          try {
            const response = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/posts?categories=7&per_page=100`);
            if (!response.ok) throw new Error('Ошибка загрузки данных');
            const data = await response.json();
    
            // Фильтруем и мапим только опубликованные услуги
            const mappedServices = data
              .filter(item => item.status === 'publish')
              .map(item => ({
                title: item.acf.title,
                id: item.id,
              }));
    
            setServices(mappedServices);
          } catch (error) {
            console.error('Ошибка загрузки услуг:', error);
          }
        };
    
        fetchServices();
    }, []);

    useEffect(() => {
        const fetchContactInfo = async () => {
            const res = await fetch(`https://clinic.traff-agency.ru/wp-json/wp/v2/pages/16`);
            const data = await res.json();
            setContactInfo(data.acf); // Сохраняем данные
        };
        
        fetchContactInfo();
    }, []);

    return (
        <footer className={s.footer}>
            <div className={s.footerBackground}> {contactInfo.phone} </div>
            {!footerCut &&
            <section className={s.contacts}>
                <h1 className={s.contactsHeader}>Контакты</h1>
                <div className={s.contactsContainer}>
                    <div className={s.contact}>
                        <svg className={s.contactArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="white"/>
                        </svg>
                        <span className={s.contactInfoType}>Телефон:</span>
                        <span className={s.contactInfo}>{contactInfo.phone}</span>
                    </div>
                    <div className={`${s.contact} ${s.contactColorBlue}`}>
                        <svg className={s.contactArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="white"/>
                        </svg>
                        <span className={s.contactInfoType}>Электронная почта:</span>
                        <span className={s.contactInfo}>{contactInfo.email}</span>
                    </div>
                    <div className={`${s.contact} ${s.contactColorYellow}`}>
                        <svg className={s.contactArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="white"/>
                        </svg>
                        <span className={s.contactInfoType}>График:</span>
                        <span className={s.contactInfo}>Круглосуточно</span>
                    </div>
                    <div className={s.contact}>
                        <svg className={s.contactArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="white"/>
                        </svg>
                        <span className={s.contactInfoType}>Адрес:</span>
                        <span className={s.contactInfo}>{contactInfo.address}</span>
                    </div>
                </div>
                <div className={s.map}>
                    <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
                        Москва
                    </a>
                    <a href="https://yandex.ru/maps/213/moscow/house/moskovskaya_ulitsa_1/Z04YcgRpSUMPQFtvfXpzdXpgYw==/?ll=37.439068%2C55.624637&utm_medium=mapframe&utm_source=maps&z=16" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
                        Московская улица, 1 на карте Москвы, ближайшее метро Саларьево — Яндекс Карты
                    </a>
                    <iframe
                        className={s.mapContainer} 
                        src="https://yandex.ru/map-widget/v1/?ll=37.439068%2C55.624637&mode=whatshere&whatshere%5Bpoint%5D=37.439068%2C55.624637&whatshere%5Bzoom%5D=17&z=16"
                        width="100%"
                        height="500"
                        frameBorder="1"
                        allowFullScreen="true"
                        style={{ position: 'relative' }}
                    />
                </div>
            </section>
            }
            <section className={s.links}>
                <div className={s.logoPhone1}>
                    <Image
                    className={s.logoImg}
                    src={'/logo.png'}
                    width={1000}
                    height={1000}
                    />
                </div>
                <div className={s.logo}>
                    <Image
                    className={s.logoImg}
                    src={'/logo.png'}
                    width={1000}
                    height={1000}
                    />
                    <div className={s.infoContainer}>
                        <span className={s.info}>Лицензия № Л041-01137-77/00368259 от 19.09.2019 г.</span>
                        <span className={s.info}>Сайт не является публичной офертой Первичное посещение пациентов до 18 лет осуществляется только в присутствии законного представителя</span>
                    </div>
                </div>
                <nav className={s.navLinksServices2}>
                    <h2 className={s.linksHeader}>УСЛУГИ</h2>
                    <div className={s.navLinksServicesFooter}>
                        {services.map((service, index) => (
                            <>
                            <Link key={index} className={s.link} href={`/services/${service.id}`}>
                                {service.title}
                            </Link>
                            </>
                        ))}
                    </div>
                </nav>
                <nav className={s.navLinks}>
                    <h2 className={s.linksHeader}>ПАЦИЕНТАМ</h2>
                    <Link href={'/about-us'} className={s.link}>О клинике</Link>
                    <Link href={'/doctors'} className={s.link}>Врачи</Link>
                    <Link href={'/reviews'} className={s.link}>Отзывы</Link>
                    <Link href={'/contacts'} className={s.link}>Контакты</Link>
                    <Link href={'/privacy-policy'} className={s.link}>Политика конфиденциальности</Link>
                    <Link href={'/user-agreement'} className={s.link}>Пользовательское соглашение</Link>
                </nav>
                <nav className={s.navLinks}>
                    <h2 className={s.linksHeader}>КОНТАКТЫ</h2>
                    <span className={s.contactsLinks}>
                        Телефон: 
                        <span className={s.contactsLinksInfo}>{contactInfo.phone}</span>
                    </span>
                    <span className={s.contactsLinks}>
                        Электронная почта: 
                        <span className={s.contactsLinksInfo}>{contactInfo.email}</span>
                    </span>
                    <span className={s.contactsLinks}>
                        График: 
                        <span className={s.contactsLinksInfo}>круглосуточно</span>
                    </span>
                    <span className={s.contactsLinks}>
                        Адрес:
                        <span className={s.contactsLinksInfo}>{contactInfo.address}</span>
                    </span>
                </nav>
                <div className={s.logoPhone2}>
                    <div className={s.infoContainer}>
                        <span className={s.info}>Лицензия № Л041-01137-77/00368259 от 19.09.2019 г.</span>
                        <span className={s.info}>Сайт не является публичной офертой Первичное посещение пациентов до 18 лет осуществляется только в присутствии законного представителя</span>
                    </div>
                </div>
            </section>
            <section className={s.siteInfo}>
                <span className={s.siteInfoText}>2025 © Международная открытая клиника. Все права защищены</span>
                <div className={s.siteInfoAndLogo}>
                    <span className={s.siteInfoText}>Сайт разработан</span>
                    <Link href={'https://traff-agency.ru/'} className={s.traffLogoLink}>
                        <Image
                        className={s.traffLogo}
                        src={'/traffLogo.png'}
                        width={500}
                        height={500}
                        />
                    </Link>
                </div>
            </section>
        </footer>
    )
}