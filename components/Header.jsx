import s from '../styles/Header.module.scss'
import sf from '../styles/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

export default function Header ({setPopupOpen}) {
    const [uslugiOpen, setUslugiOpen] = useState(false)
    const [timeoutId, setTimeoutId] = useState(null)
    const [PhoneMenuOpen, setPhoneMenuOpen] = useState(false)

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
                        <h2 className={sf.linksHeader}>УСЛУГИ</h2>
                        <Link href={'/'} className={sf.link}>Поликлиники, лаборатория</Link>
                        <Link href={'/'} className={sf.link}>Госпитальный центр</Link>
                        <Link href={'/'} className={sf.link}>Детский центр</Link>
                        <Link href={'/'} className={sf.link}>Пластическая хирургия</Link>
                        <Link href={'/'} className={sf.link}>Центр женского здоровья </Link>
                        <Link href={'/'} className={sf.link}>Стоматология для взрослых и детей</Link>
                        <Link href={'/'} className={sf.link}>Центр офтальмологии и хирургии</Link>
                        <Link href={'/'} className={sf.link}>Центр косметологии</Link>
                    </nav>
                    <nav className={sf.navLinks}>
                        <h2 className={sf.linksHeader}>ПАЦИЕНТАМ</h2>
                        <Link href={'/'} className={sf.link}>О клинике</Link>
                        <Link href={'/'} className={sf.link}>Врачи</Link>
                        <Link href={'/'} className={sf.link}>Отзывы</Link>
                        <Link href={'/'} className={sf.link}>Контакты</Link>
                        <Link href={'/privacy-policy'} className={sf.link}>Политика конфиденциальности</Link>
                        <Link href={'/user-agreement'} className={sf.link}>Пользовательское соглашение</Link>
                    </nav>
                    <nav className={sf.navLinks}>
                        <h2 className={sf.linksHeader}>КОНТАКТЫ</h2>
                        <span className={sf.contactsLinks}>
                            Телефон: 
                            <span className={sf.contactsLinksInfo}>+7 495 411 28 41</span>
                        </span>
                        <span className={sf.contactsLinks}>
                            Электронная почта: 
                            <span className={sf.contactsLinksInfo}>mok_klinik@gmail.com</span>
                        </span>
                        <span className={sf.contactsLinks}>
                            График: 
                            <span className={sf.contactsLinksInfo}>круглосуточно</span>
                        </span>
                        <span className={sf.contactsLinks}>
                            Адрес:
                            <span className={sf.contactsLinksInfo}>г. Москва, ул. Московская, 1</span>
                        </span>
                    </nav>
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
                    <Link className={s.uslugiLink} href={'/'}>Поликлиники, лаборатория</Link>
                    <Link className={s.uslugiLink} href={'/'}>Госпитальный центр</Link>
                    <Link className={s.uslugiLink} href={'/'}>Детский центр</Link>
                    <Link className={s.uslugiLink} href={'/'}>Пластическая хирургия</Link>
                    <Link className={s.uslugiLink} href={'/'}>Центр женского здоровья </Link>
                    <Link className={s.uslugiLink} href={'/'}>Стоматология для взрослых и детей</Link>
                    <Link className={s.uslugiLink} href={'/'}>Центр офтальмологии и хирургии</Link>
                    <Link className={s.uslugiLink} href={'/'}>Центр косметологии</Link>
                </div>
            </nav>
            <div className={s.phoneNumber}>
                <span className={s.appointment}>Круглосуточная запись:</span>
                <span className={s.number}>+7 495 411 28 41</span>
            </div>
            <button onClick={() => setPopupOpen(true)} className={`${s.button} ${s.buttonMat} ${s.btn7}`}>Записаться онлайн</button>
        </header>
        </>
    )
}