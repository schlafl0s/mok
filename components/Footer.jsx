import Link from 'next/link'
import s from '../styles/Footer.module.scss'
import Image from 'next/image'

export default function Footer ({ footerCut = false }) {
    return (
        <footer className={s.footer}>
            <div className={s.footerBackground}></div>
            {!footerCut &&
            <section className={s.contacts}>
                <h1 className={s.contactsHeader}>Контакты</h1>
                <div className={s.contactsContainer}>
                    <div className={s.contact}>
                        <svg className={s.contactArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="white"/>
                        </svg>
                        <span className={s.contactInfoType}>Телефон:</span>
                        <span className={s.contactInfo}>+7 495 411 28 41</span>
                    </div>
                    <div className={`${s.contact} ${s.contactColorBlue}`}>
                        <svg className={s.contactArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="white"/>
                        </svg>
                        <span className={s.contactInfoType}>Электронна почта:</span>
                        <span className={s.contactInfo}>mok_klinik@gmail.com</span>
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
                        <span className={s.contactInfo}>г. Москва, ул. Московская, 1</span>
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
                        <span className={s.info}>Сайт не является публичной офертойПервичное посещение пациентов до 18 лет осуществляется только в присутствии законного представителя</span>
                    </div>
                </div>
                <nav className={s.navLinks}>
                    <h2 className={s.linksHeader}>УСЛУГИ</h2>
                    <Link href={'/'} className={s.link}>Поликлиники, лаборатория</Link>
                    <Link href={'/'} className={s.link}>Госпитальный центр</Link>
                    <Link href={'/'} className={s.link}>Детский центр</Link>
                    <Link href={'/'} className={s.link}>Пластическая хирургия</Link>
                    <Link href={'/'} className={s.link}>Центр женского здоровья </Link>
                    <Link href={'/'} className={s.link}>Стоматология для взрослых и детей</Link>
                    <Link href={'/'} className={s.link}>Центр офтальмологии и хирургии</Link>
                    <Link href={'/'} className={s.link}>Центр косметологии</Link>
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
                        <span className={s.contactsLinksInfo}>+7 495 411 28 41</span>
                    </span>
                    <span className={s.contactsLinks}>
                        Электронная почта: 
                        <span className={s.contactsLinksInfo}>mok_klinik@gmail.com</span>
                    </span>
                    <span className={s.contactsLinks}>
                        График: 
                        <span className={s.contactsLinksInfo}>круглосуточно</span>
                    </span>
                    <span className={s.contactsLinks}>
                        Адрес:
                        <span className={s.contactsLinksInfo}>г. Москва, ул. Московская, 1</span>
                    </span>
                </nav>
                <div className={s.logoPhone2}>
                    <div className={s.infoContainer}>
                        <span className={s.info}>Лицензия № Л041-01137-77/00368259 от 19.09.2019 г.</span>
                        <span className={s.info}>Сайт не является публичной офертойПервичное посещение пациентов до 18 лет осуществляется только в присутствии законного представителя</span>
                    </div>
                </div>
            </section>
            <section className={s.siteInfo}>
                <span className={s.siteInfoText}>2025 © Международная открытая клиника. Все права защищены</span>
                <div className={s.siteInfoAndLogo}>
                    <span className={s.siteInfoText}>Сайт разработан</span>
                    <Image
                    className={s.traffLogo}
                    src={'/traffLogo.png'}
                    width={500}
                    height={500}
                    />
                </div>
            </section>
        </footer>
    )
}