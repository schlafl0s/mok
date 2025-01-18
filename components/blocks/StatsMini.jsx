import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function StatsMini () {
    return (
        <section className={s.statsMini}>
            <div className={s.statsContainer}>
                <div className={s.statsCards}>
                    <div className={`${s.statsCard} ${s.statsCardMini}`}>
                        <Image
                        className={s.statsImg}
                        src={'/statsWhite1.png'}
                        width={80}
                        height={80}
                        />
                        <div className={`${s.statsNumber} ${s.statsNumBlue}`}>60</div>
                        <span className={s.statsText}>Медицинских специальностей</span>
                    </div>
                    <div className={`${s.statsCard} ${s.statsCardMini}`}>
                        <Image
                        className={s.statsImg}
                        src={'/statsWhite2.png'}
                        width={80}
                        height={80}
                        />
                        <div className={`${s.statsNumber} ${s.statsNumYellow}`}>75</div>
                        <span className={s.statsText}>Мест в стационаре госпиталя</span>
                    </div>
                    <div className={`${s.statsCard} ${s.statsCardMini}`}>
                        <Image
                        className={s.statsImg}
                        src={'/statsWhite3.png'}
                        width={80}
                        height={80}
                        />
                        <span className={`${s.statsNumber} ${s.statsNumGreen}`}>100+</span>
                        <span className={s.statsText}>Диагностических исследований</span>
                    </div>
                    <div className={`${s.statsCard} ${s.statsCardMini}`}>
                        <Image
                        className={s.statsImg}
                        src={'/statsWhite4.png'}
                        width={80}
                        height={80}
                        />
                        <span className={`${s.statsNumber} ${s.statsNumBlue}`}>24/7</span>
                        <span className={s.statsText}>Вызов «скорой помощи» круглосуточно</span>
                    </div>
                </div>
            </div>
        </section>
    )
}