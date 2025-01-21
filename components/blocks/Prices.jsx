import s from '/styles/Home.module.scss'

export default function Prices () {
    return (
        <section className={s.prices}>
            <div className={s.pricesBackground}></div>
            <div className={s.pricesInfo}>
                <h1 className={s.Header}>Цены на диагностику и анализы</h1>
                <div className={s.pricesContainer}>
                    <Price header={'Аллергология'} price={'от 2300'}/>
                    <Price header={'Иммуноферментный анализ'} price={'2300'}/>
                    <Price header={'Гистологические и иммуногистохимические исследования'} price={'2300'}/>
                    <Price header={'Аллергология'} price={'2300'}/>
                    <Price header={'Аллергология'} price={'от 3200'}/>
                </div>
            </div>
        </section>
    )
}

function Price ({header, price, names, prices}) {
    return (
        <div className={s.price}>
            <h2 className={s.priceHeader}>{header}</h2>
            <div className={s.priceRight}>
                <span className={s.pricePrice}>{price} ₽</span>
                <div className={s.priceOpen}>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.7041 0.870117V18.1757" stroke="white" stroke-width="1.73056"/>
                        <path d="M0.0512695 9.52246L17.3568 9.52246" stroke="white" stroke-width="1.73056"/>
                    </svg>
                    {/* <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.0512695 9.06836L17.3568 9.06836" stroke="#391FCF" stroke-width="1.73056"/>
                    </svg> */}
                </div>
            </div>
        </div>
    )
}