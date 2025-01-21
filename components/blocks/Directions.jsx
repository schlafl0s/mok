import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function Directions () {
    return (
        <section className={s.directions}>
            <h1 className={s.Header}>Основные направления клиники</h1>
            <div className={s.directionsContainer}>
            <div className={`${s.direction} ${s.blueBack}`}>
                <h2 className={`${s.directionName} ${s.whitePick}`}>ПОЛИКЛИНИКИ, ЛАБОРАТОРИИ </h2>
                <p className={`${s.directionDes} ${s.whitePick}`}>
                Более 60 врачебных специальностей,
                современная диагностика
                </p>
                <svg className={s.directionsArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="white"/>
                </svg>
                <picture>
                    <source media="(max-width: 728px)" srcSet="/dirPhone1.png" />
                    <source media="(min-width: 729px)" srcSet="/dir1.png" />
                    <Image
                    className={s.dirImg}
                    width={1000}
                    height={1000}
                    />
                </picture>
            </div>
            <div className={s.direction}>
                <h2 className={s.directionName}>ГОСПИТАЛЬНЫЙ ЦЕНТР</h2>
                <p className={s.directionDes}>
                Хирургия, урология, гинекология, травматология и ортопедия, сердечно-сосудистая хирургия, кардиология, онкохирургия 
                </p>
                <svg className={s.directionsArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="#5BE146"/>
                </svg>
                <picture>
                    <source media="(max-width: 728px)" srcSet="/dirPhone2.png" />
                    <source media="(min-width: 729px)" srcSet="/dir2.png" />
                    <Image
                    className={s.dirImg}
                    width={1000}
                    height={1000}
                    />
                </picture>
            </div>
            <div className={s.direction}>
                <h2 className={s.directionName}>ДЕТСКИЙ ЦЕНТР</h2>
                <p className={s.directionDes}>
                Самые добрые и заботливые врачи для наших маленьких пациентов, которые знают, что 
                к врачу можно идти с радостью
                </p>
                <svg className={s.directionsArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="#FEDF43"/>
                </svg>
                <picture>
                    <source media="(max-width: 728px)" srcSet="/dirPhone3.png" />
                    <source media="(min-width: 729px)" srcSet="/dir3.png" />
                    <Image
                    className={s.dirImg}
                    width={1000}
                    height={1000}
                    />
                </picture>
            </div>
            <div className={s.direction}>
                <h2 className={s.directionName}>ПЛАСТИЧЕСКАЯ ХИРУРГИЯ</h2>
                <p className={s.directionDes}>
                Блефаропластика, липосакция, отопластика, риносептопластика, СМАС-лифтинг, пересадка волос, пластика груди
                </p>
                <svg className={s.directionsArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="#391FCF"/>
                </svg>
                <picture>
                    <source media="(max-width: 728px)" srcSet="/dirPhone4.png" />
                    <source media="(min-width: 729px)" srcSet="/dir4.png" />
                    <Image
                    className={s.dirImg}
                    width={1000}
                    height={1000}
                    />
                </picture>
            </div>
            <div className={s.direction}>
                <h2 className={s.directionName}>ЦЕНТР ЖЕНСКОГО НАПРАВЛЕНИЯ </h2>
                <p className={s.directionDes}>
                Сопровождение беременности,анализы, процедуры, наблюдение
                </p>
                <svg className={s.directionsArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="#5BE146"/>
                </svg>
                <picture>
                    <source media="(max-width: 728px)" srcSet="/dirPhone5.png" />
                    <source media="(min-width: 729px)" srcSet="/dir5.png" />
                    <Image
                    className={s.dirImg}
                    width={1000}
                    height={1000}
                    />
                </picture>
            </div>
            <div className={s.direction}>
                <h2 className={s.directionName}>СТОМАТОЛОГИЯ ДЛЯ ВЗРОСЛЫХ И ДЕТЕЙ</h2>
                <p className={s.directionDes}>
                Диагностика, лечение, хирургия, имплантация, протезирование,
                гигиена полости рта
                </p>
                <svg className={s.directionsArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="#391FCF"/>
                </svg>
                <picture>
                    <source media="(max-width: 728px)" srcSet="/dirPhone6.png" />
                    <source media="(min-width: 729px)" srcSet="/dir6.png" />
                    <Image
                    className={s.dirImg}
                    width={1000}
                    height={1000}
                    />
                </picture>
            </div>
            <div className={s.direction}>
                <h2 className={`${s.directionName} ${s.whitePick}`}>ЦЕНТР ОФТАЛЬМОЛОГИИ И ХИРУРГИИ</h2>
                <p className={`${s.directionDes} ${s.whitePick}`}>
                ​Офтальмолог​, микрохирургия глаза,​медицинская диагностика
                </p>
                <svg className={s.directionsArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="white"/>
                </svg>
                <picture>
                    <source media="(max-width: 728px)" srcSet="/dirPhone7.png" />
                    <source media="(min-width: 729px)" srcSet="/dir7.png" />
                    <Image
                    className={s.dirImg}
                    width={1000}
                    height={1000}
                    />
                </picture>
            </div>
            <div className={s.direction}>
                <h2 className={s.directionName}>ЦЕНТР КОСМЕТОЛОГИИ</h2>
                <p className={s.directionDes}>
                Наша цель подчеркнуть вашу природную красоту, оздоровить кожу и убрать дефекты, делая кожу сияющей и молодой
                </p>
                <svg className={s.directionsArrow} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6777 0.5C20.5062 0.5 21.1777 1.17157 21.1777 2L21.1777 15.5C21.1777 16.3284 20.5062 17 19.6777 17C18.8493 17 18.1777 16.3284 18.1777 15.5L18.1777 3.5L6.17773 3.5C5.34931 3.5 4.67773 2.82843 4.67773 2C4.67773 1.17157 5.34931 0.5 6.17773 0.5L19.6777 0.5ZM0.939405 18.617L18.6171 0.93934L20.7384 3.06066L3.06073 20.7383L0.939405 18.617Z" fill="#FEDF43"/>
                </svg>
                <picture>
                    <source media="(max-width: 728px)" srcSet="/dirPhone8.png" />
                    <source media="(min-width: 729px)" srcSet="/dir8.png" />
                    <Image
                    className={s.dirImg}
                    width={1000}
                    height={1000}
                    />
                </picture>
            </div>
            </div>
        </section>
    )
}