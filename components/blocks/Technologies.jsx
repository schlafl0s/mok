import s from '/Users/danil/mok/styles/Home.module.scss'
import Image from 'next/image'

export default function Technologies () {
    return (
        <section className={s.technologies}>
            <h1 className={s.Header}>Технологии и оборудование</h1>
            <div className={s.technologiesContainer}>
            <div className={s.technologiesMiniContainer}>
                <div className={s.technology}>
                    <Image
                    className={s.technologyImg}
                    src={'/technology1.png'}
                    width={1000}
                    height={1000}
                    />
                    <div className={s.technologyInfo}>
                        <h2 className={s.technologyName}>МРТ</h2>
                        <ul className={s.technologyText}>
                        <li>1,5 тесла / до 200 кг</li>
                        <li>3D / 4D запись исследования</li>
                        <li>МР маммография</li>
                        <li>МРТ всего тела за 1,5 часа</li>
                        <li>МРТ суставов</li>
                        </ul>
                    </div>
                </div>
                <div className={s.technology}>
                    <Image
                    className={s.technologyImg}
                    src={'/technology2.png'}
                    width={1000}
                    height={1000}
                    />
                    <div className={s.technologyInfo}>
                        <h2 className={s.technologyName}>КТ</h2>
                        <ul className={s.technologyText}>
                        <li>122 срезов / до 200 кг</li>
                        <li>3D / 4D запись исследования</li>
                        <li>Виртуальная колоноскопия</li>
                        <li>МСКТ антиография сердца</li>
                        <li>МСКТ коронарного кальция</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={s.technologiesMiniContainer}>
                <div className={s.technology}>
                    <Image
                    className={s.technologyImg}
                    src={'/technology3.png'}
                    width={1000}
                    height={1000}
                    />
                    <div className={s.technologyInfo}>
                        <h2 className={s.technologyName}>РЕНТГЕН</h2>
                        <ul className={s.technologyText}>
                        <li>3D робот-рентген Multitom Rax</li>
                        <li>Трехмерное сканирование в онлайн-режиме</li>
                        <li>Цифровая сшивка снимков позвоночника</li>
                        <li>Урография</li>
                        <li>Ирригоскопия</li>
                        </ul>
                    </div>
                </div>
                <div className={s.technology}>
                    <Image
                    className={s.technologyImg}
                    src={'/technology4.png'}
                    width={1000}
                    height={1000}
                    />
                    <div className={s.technologyInfo}>
                        <h2 className={s.technologyName}>УЗИ</h2>
                        <ul className={s.technologyText}>
                        <li>1,5 тесла / до 200 кг</li>
                        <li>3D / 4D запись исследования</li>
                        <li>МР маммография</li>
                        <li>МРТ всего тела за 1,5 часа</li>
                        <li>МРТ суставов</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}