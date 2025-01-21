import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function Sale () {
    return (
        <section className={s.sale}>
            <picture>
                <source media="(max-width: 728px)" srcSet="/saleBackgroundPhone.png" />
                <source media="(min-width: 729px)" srcSet="/saleBackground.png" />
                <Image
                className={s.saleBackground}
                width={2000}
                height={2000}
                />
            </picture>
            <button className={`${s.button2} ${s.buttonMat2} ${s.btn2}`}>Подробнее</button>
        </section>
    )
}