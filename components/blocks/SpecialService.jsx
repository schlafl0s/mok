import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function SpecialService () {
    return (
        <div className={s.specialService}>
            <div className={s.specialServiceInfo}>
                <h1 className={s.specialServiceHeader}>Месяц репродуктивного здоровья</h1>
                <span className={s.specialServiceDes}>Бесплатная консультация репродуктолога и уролога-андролога</span>
                <button className={`${s.button7} ${s.buttonMat7} ${s.btn7}`}>Записаться на прием</button>
            </div>
            <picture>
            <source media="(max-width: 768px)" srcSet="/specialServiceBackgroundPhone.png" />
            <source media="(min-width: 769px)" srcSet="/specialServiceBackground.png" />
            <Image className={s.specialServiceBackground} src="/specialServiceBackground.png" width={2000} height={2000} />
            </picture>
            <Image className={s.VUHservice} src={'/V.png'} width={100} height={100} />
        </div>
    )
}