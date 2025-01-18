import s from '../styles/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

export default function Header () {
    const [MenuOpen, setMenuOpen] = useState(false)
    const [uslugiOpen, setUslugiOpen] = useState(false)
    const [timeoutId, setTimeoutId] = useState(null)

    const toggleBurgerMenu = () => {
        setMenuOpen(!MenuOpen);
    }

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

    return (
        <header className={s.header}>
            <div className={s.headerBackground}></div>
            <div className={`${s.burgerDecoration} ${MenuOpen ? s.open : ''}`}>
                <button
                className={`${s.burgerButton} ${MenuOpen ? s.open : ''}`}
                onClick={toggleBurgerMenu}
                aria-label="Toggle menu"
                >
                <span className={s.burgerLine} />
                <span className={s.burgerLine} />
                <span className={s.burgerLine} />
                </button>
            </div>
            <Image
            className={s.logo}
            src={'/logo.png'}
            width={1000}
            height={1000}
            />
            <nav className={s.nav}>
                <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={'/services'} className={`${s.uslugi} ${s.navLink}`}>Услуги
                    <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.462891 0.5L5.46289 4.5L10.0933 0.5" stroke="#29292C"/>
                    </svg>
                </Link>
                <Link className={s.navLink} href={'/about-us'}>О клинике</Link>
                <Link className={s.navLink} href={'/'}>Врачи</Link>
                <Link className={s.navLink} href={'/'}>Отзывы</Link>
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
            <button className={`${s.button} ${s.buttonMat} ${s.btn7}`}>Записаться онлайн</button>
        </header>
    )
}