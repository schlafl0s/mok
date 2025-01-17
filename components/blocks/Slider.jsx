import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function Slider () {
    return (
        <section className={s.slider}>
            <div className={s.slideInfo}>
            <h1 className={s.sliderHeader}>Центр хирургии<br />МОК клиники</h1>
            <div className={s.descriptionContainer}>
                <div className={s.description}>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11.6692" cy="11.6101" r="10.3887" stroke="#391FCF" stroke-width="0.865725"/>
                    <path d="M11.6689 6.84814V16.3711" stroke="#391FCF" stroke-width="0.865725"/>
                    <path d="M6.9082 11.6094H16.4312" stroke="#391FCF" stroke-width="0.865725"/>
                </svg>
                <span className={s.des}>7 хирургических центров: экстренная и плановая хирургия</span>
                </div>
                <div className={s.description}>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11.6692" cy="11.6101" r="10.3887" stroke="#391FCF" stroke-width="0.865725"/>
                    <path d="M11.6689 6.84814V16.3711" stroke="#391FCF" stroke-width="0.865725"/>
                    <path d="M6.9082 11.6094H16.4312" stroke="#391FCF" stroke-width="0.865725"/>
                </svg>
                <span className={s.des}>Стационары для взрослых и детей</span>
                </div>
                <div className={s.description}>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11.6692" cy="11.6101" r="10.3887" stroke="#391FCF" stroke-width="0.865725"/>
                    <path d="M11.6689 6.84814V16.3711" stroke="#391FCF" stroke-width="0.865725"/>
                    <path d="M6.9082 11.6094H16.4312" stroke="#391FCF" stroke-width="0.865725"/>
                </svg>
                <span className={s.des}>Собственная служба скорой помощи</span>
                </div>
                <div className={s.description}>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11.6692" cy="11.6101" r="10.3887" stroke="#391FCF" stroke-width="0.865725"/>
                    <path d="M11.6689 6.84814V16.3711" stroke="#391FCF" stroke-width="0.865725"/>
                    <path d="M6.9082 11.6094H16.4312" stroke="#391FCF" stroke-width="0.865725"/>
                </svg>
                <span className={s.des}>Консультация хирурга по поводу операции – бесплатно </span>
                </div>
            </div> 
            <button className={`${s.button0} ${s.buttonMat0} ${s.btn0}`}>Записаться на прием</button>
            </div>
            <picture>
                <source media="(max-width: 768px)" srcSet="/underHeaderBackgroundPhone.png" />
                <source media="(min-width: 769px)" srcSet="/underHeaderBackground.png" />
                <Image
                className={s.underHeaderBackground}
                src={'/underHeaderBackground.png'}
                width={2000}
                height={2000}
                />
            </picture>
            <Image
            className={s.XUH}
            src={'/X.png'}
            width={100}
            height={100}
            />
            <Image
            className={s.VUH}
            src={'/V.png'}
            width={100}
            height={100}
            />
            <div className={s.slideCount}>
                <div className={s.slideCounterActive}></div>
                <div className={s.slideCounter}></div>
                <div className={s.slideCounter}></div>
            </div>
        </section>
    )
}