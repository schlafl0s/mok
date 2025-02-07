import s from '../styles/Header.module.scss'
import sf from '../styles/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';

export default function Header ({setPopupOpen}) {
    const [uslugiOpen, setUslugiOpen] = useState(false)
    const [timeoutId, setTimeoutId] = useState(null)
    const [PhoneMenuOpen, setPhoneMenuOpen] = useState(false)
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

    const handleMouseEnter = () => {
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
        setUslugiOpen(true)
    }
    
    const handleMouseLeave = () => {
        const newTimeoutId = setTimeout(() => {
          setUslugiOpen(false)
        }, 300)
        setTimeoutId(newTimeoutId)
    }

    const handlePopupMouseEnter = () => {
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
        setUslugiOpen(true)
    }
    
    const handlePopupMouseLeave = () => {
        const newTimeoutId = setTimeout(() => {
          setUslugiOpen(false)
        }, 300)
        setTimeoutId(newTimeoutId)
    }

    function PhoneMenu () {
        return (
            <>
            <div className={`${s.phoneMenu} ${PhoneMenuOpen ? s.phoneMenuActive : ''}`}>
                <nav className={sf.navLinks}>
                    <Link href={'/services'} className={sf.linksHeader}>УСЛУГИ</Link>
                    <div className={sf.navLinksServices}>
                        {services.map((service, index) => (
                            <>
                            <Link key={index} className={sf.link} href={`/services/${service.id}`}>
                                {service.title}
                            </Link>
                            </>
                        ))}
                    </div>
                </nav>
                <nav className={sf.navLinks}>
                    <h2 className={sf.linksHeader}>ПАЦИЕНТАМ</h2>
                    <Link href={'/about-us'} className={sf.link}>О клинике</Link>
                    <Link href={'/doctors'} className={sf.link}>Врачи</Link>
                    <Link href={'/reviews'} className={sf.link}>Отзывы</Link>
                    <Link href={'/contacts'} className={sf.link}>Контакты</Link>
                    <Link href={'/privacy-policy'} className={sf.link}>Политика конфиденциальности</Link>
                    <Link href={'/user-agreement'} className={sf.link}>Пользовательское соглашение</Link>
                </nav>
                <nav className={sf.navLinks}>
                    <h2 className={sf.linksHeader}>КОНТАКТЫ</h2>
                    <span className={sf.contactsLinks}>
                        Телефон: 
                        <span className={sf.contactsLinksInfo}>{contactInfo.phone}</span>
                    </span>
                    <span className={sf.contactsLinks}>
                        Электронная почта: 
                        <span className={sf.contactsLinksInfo}>{contactInfo.email}</span>
                    </span>
                    <span className={sf.contactsLinks}>
                        График: 
                        <span className={sf.contactsLinksInfo}>круглосуточно</span>
                    </span>
                    <span className={sf.contactsLinks}>
                        Адрес:
                        <span className={sf.contactsLinksInfo}>{contactInfo.address}</span>
                    </span>
                </nav>
                <button onClick={() => setPopupOpen(true)} className={`${s.button} ${s.buttonMat} ${s.btn7} ${s.btnMenu}`}>Записаться онлайн</button>
            </div>
            <div onClick={() => setPhoneMenuOpen(!PhoneMenuOpen)} className={`${s.blackBackground} ${PhoneMenuOpen ? s.blackBackgroundActive : ''}`}></div>
            </>
        )
    }

    return (
        <>
        <header className={s.header}>
            {PhoneMenuOpen && <PhoneMenu />}
            <div className={s.headerBackground}></div>
            <div className={`${s.burgerDecoration} ${PhoneMenuOpen ? s.open : ''}`}>
                <button
                className={`${s.burgerButton} ${PhoneMenuOpen ? s.open : ''}`}
                onClick={() => setPhoneMenuOpen(!PhoneMenuOpen)}
                aria-label="Toggle menu"
                >
                <span className={s.burgerLine} />
                <span className={s.burgerLine} />
                <span className={s.burgerLine} />
                </button>
            </div>
            <Link href={'/'}>
                <Image
                className={s.logo}
                src={'/logo.png'}
                width={1000}
                height={1000}
                />
            </Link>
            <nav className={s.nav}>
                <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={'/services'} className={`${s.uslugi} ${s.navLink}`}>Услуги
                    <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.462891 0.5L5.46289 4.5L10.0933 0.5" stroke="#29292C"/>
                    </svg>
                </Link>
                <Link className={s.navLink} href={'/about-us'}>О клинике</Link>
                <Link className={s.navLink} href={'/doctors'}>Врачи</Link>
                <Link className={s.navLink} href={'/reviews'}>Отзывы</Link>
                <Link className={s.navLink} href={'/contacts'}>Контакты</Link>
                <div onMouseEnter={handlePopupMouseEnter} onMouseLeave={handlePopupMouseLeave} className={`${s.uslugiPopup} ${uslugiOpen ? s.uslugiPopupActive : ''}`}>
                    {services.map((service, index) => (
                        <>
                        <Link key={index} className={s.uslugiLink} href={`/services/${service.id}`}>
                            {service.title}
                        </Link>
                        </>
                    ))}
                </div>
            </nav>
            <div className={s.phoneNumber}>
                <span className={s.appointment}>Круглосуточная запись:</span>
                <span className={s.number}>{contactInfo.phone}</span>
            </div>
            <button onClick={() => setPopupOpen(true)} className={`${s.button} ${s.buttonMat} ${s.btn7}`}>Записаться онлайн</button>
        </header>
        </>
    )
}