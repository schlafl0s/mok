import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function License () {
    return (
        <section className={s.license}>
            <div className={s.licenseBackground}></div>
            <div className={s.licenseContainer}>
            <h1 className={s.Header}>Лицензии</h1>
            <div className={s.licenseCard}>
                <picture>
                    <source media="(max-width: 768px)" srcSet="/licenseBackgroundPhone.png" />
                    <source media="(min-width: 769px)" srcSet="/licenseBackground.png" />
                    <Image
                    className={s.licenseBackgroundImg}
                    width={2000}
                    height={2000}
                    />
                </picture>
                <Image
                className={s.licenseX}
                src={'/X.png'}
                width={77}
                height={77}
                />
                <div className={s.licenseInfo}>
                <p className={s.licenseText}>
                Мы осуществляем деятельность на основании медицинских лицензий в соответствии 
                с рекомендациями Минздрава
                </p>
                <div className={s.licenseBtns}>
                    <button className={`${s.button6} ${s.buttonMat6} ${s.btn6}`}>Посмотреть лицензии</button>
                    <button className={`${s.button4} ${s.buttonMat4} ${s.btn4}`}>Правовая информация</button>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}