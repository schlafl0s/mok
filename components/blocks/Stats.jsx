import s from '/Users/danil/mok/styles/Home.module.scss'
import Image from 'next/image'

export default function Stats () {
    return (
        <section className={s.stats}>
            <div className={s.statsBackground}></div>
            <div className={s.statsContainer}>
            <h1 className={s.Header}>Международная открытая клиника</h1>
            <div className={s.statsCards}>
                <div className={s.statsCard}>
                    <Image
                    className={s.statsImg}
                    src={'/stats1.png'}
                    width={80}
                    height={80}
                    />
                    <div className={`${s.statsNumber} ${s.statsNumBlue}`}>60</div>
                    <span className={s.statsText}>Медицинских специальностей</span>
                </div>
                <div className={s.statsCard}>
                    <Image
                    className={s.statsImg}
                    src={'/stats2.png'}
                    width={80}
                    height={80}
                    />
                    <div className={`${s.statsNumber} ${s.statsNumYellow}`}>75</div>
                    <span className={s.statsText}>Мест в стационаре госпиталя</span>
                </div>
                <div className={s.statsCard}>
                    <Image
                    className={s.statsImg}
                    src={'/stats3.png'}
                    width={80}
                    height={80}
                    />
                    <span className={`${s.statsNumber} ${s.statsNumGreen}`}>100+</span>
                    <span className={s.statsText}>Диагностических исследований</span>
                </div>
                <div className={s.statsCard}>
                    <Image
                    className={s.statsImg}
                    src={'/stats4.png'}
                    width={80}
                    height={80}
                    />
                    <span className={`${s.statsNumber} ${s.statsNumBlue}`}>24/7</span>
                    <span className={s.statsText}>Вызов «скорой помощи» круглосуточно</span>
                </div>
            </div>
            <div className={s.statsInfoContainer}>
                <div className={s.statsInfo1}>
                    <p className={s.statsInfoText}>
                        <strong>Каждая клиника поддерживает приоритеты компании</strong> – высокий уровень медицинского обслуживания, соблюдение международных стандартов оказания услуг, чуткое отношение к пациентам и забота о них
                    </p>
                </div>
                <div className={s.statsInfo2}>
                    <p className={s.statsInfoText}>
                        <strong>Наши специалисты сочетают проверенные временем 
                        и инновационные</strong> методики диагностики и лечения. Карты пациентов ведутся исключительно в электронном виде, действует система электронных очередей
                    </p>
                </div>
            </div>
            </div>
        </section>
    )
}