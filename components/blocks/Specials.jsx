import s from '/Users/danil/mok/styles/Home.module.scss'
import Image from 'next/image'

export default function Specials () {
    return (
        <section className={s.specials}>
            <div className={s.specialsUp}>
                <h1 className={s.Header}>Акции и специальные предложения</h1>
                <div className={s.switcher}>
                    <button className={`${s.switchBtnLeft} ${s.switchInactive}`}>
                    <svg className={s.switchBtnLeftArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                    </svg>
                    </button>
                    <button className={s.switchBtnRight}>
                    <svg className={s.switchBtnRightArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                    </svg>
                    </button>
                </div>
            </div>
            <div className={s.specialsBlocks}>
                <div className={s.specialsLeft}>
                    <h2 className={s.specialsLeftHeader}>БЕСПЛАТНАЯ<br /> КОНСУЛЬТАЦИЯ ВРАЧА</h2>
                    <span className={s.specialsLeftText}>по поводу операции для взрослых и детей c 1 по 30 ноября</span>
                    <button className={`${s.button3} ${s.buttonMat3} ${s.btn3}`}>Получить консультацию</button>
                    <Image
                    className={s.specialsLeftArrow}
                    src={'/specialsArrowBlue.png'}
                    width={100}
                    height={100}
                    />
                    <Image
                    className={s.specialsBackground}
                    src={'/specialsLeftBackground.png'}
                    width={2000}
                    height={2000}
                    />
                </div>
                <div className={s.specialsRight}>
                    <div className={s.specialsSmallBlock1}>
                    <h2 className={s.specialsSmallName}>СКИДКА 20%</h2>
                    <span className={s.specialsSmallText}>на гастроскопию и колоноскапию</span>
                    <Image
                    className={s.specialsBackground}
                    src={'/specialsRightBackground1.png'}
                    width={2000}
                    height={2000}
                    />
                    <Image
                    className={s.specialsRightArrow1}
                    src={'/V.png'}
                    width={100}
                    height={100}
                    />
                    </div>
                    <div className={s.specialsSmallBlock2}>
                    <h2 className={s.specialsSmallName}>СКИДКА 20%</h2>
                    <span className={s.specialsSmallText}>на компьютерную томографию</span>
                    <Image
                    className={s.specialsBackground}
                    src={'/specialsRightBackground2.png'}
                    width={2000}
                    height={2000}
                    />
                    <Image
                    className={s.specialsRightArrow2}
                    src={'/specialsArrowBlue.png'}
                    width={100}
                    height={100}
                    />
                    </div>
                </div>
            </div>
            <div className={s.switcherPhone}>
                <button className={`${s.switchBtnLeft} ${s.switchInactive}`}>
                <svg className={s.switchBtnLeftArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                </svg>
                </button>
                <button className={s.switchBtnRight}>
                <svg className={s.switchBtnRightArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                </svg>
                </button>
            </div>
        </section>
    )
}