import s from '/Users/danil/mok/styles/Home.module.scss'
import Image from 'next/image'

export default function Sale () {
    return (
        <section className={s.sale}>
            <picture>
                <source media="(max-width: 768px)" srcSet="/saleBackgroundPhone.png" />
                <source media="(min-width: 769px)" srcSet="/saleBackground.png" />
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