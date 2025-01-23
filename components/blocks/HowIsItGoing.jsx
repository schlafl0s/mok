import { useState } from 'react'
import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function HowIsItGoing () {
    const data = [
        { num: '01', header: 'Получите направление (или назначение) на лабораторное исследование', text: 'Назначить стандартное лабораторное исследование может врач любой специализации при наличии показаний, так как всем специалистам системы столичного здравоохранения доступен один и тот же перечень возможных лабораторных тестов.' },
        { num: '02', header: 'Подготовка к проведению анализа и сдача', text: 'Назначить стандартное лабораторное исследование может врач любой специализации при наличии показаний, так как всем специалистам системы столичного здравоохранения доступен один и тот же перечень возможных лабораторных тестов.' },
        { num: '03', header: 'Получение результатов лабораторных исследований', text: 'Назначить стандартное лабораторное исследование может врач любой специализации при наличии показаний, так как всем специалистам системы столичного здравоохранения доступен один и тот же перечень возможных лабораторных тестов.' },
        { num: '04', header: 'Получение результатов лабораторных исследований', text: 'Назначить стандартное лабораторное исследование может врач любой специализации при наличии показаний, так как всем специалистам системы столичного здравоохранения доступен один и тот же перечень возможных лабораторных тестов.' }
    ];

    return (
        <div className={s.how}>
            <h1 className={s.Header}>Как проходит процедура</h1>
            <div className={s.howContainer}>
                <div className={s.howInfo}>
                    {data.map((item) => (
                        <Hidden 
                        key={item.num} 
                        num={item.num} 
                        header={item.header} 
                        text={item.text} 
                        />
                    ))}
                </div>
                <Image className={s.howImg} src="/how.png" width={2000} height={2000} />
            </div>
        </div>
    )
}

function Hidden ({num, header, text}) {
    const [hidden, setHidden] = useState(false)

    return (
        <button onClick={() => setHidden(!hidden)} className={s.howHidden}>
            <div className={s.upSide}>
                <div className={s.howLeftHidden}>
                    <div className={`${s.howNum} ${hidden ? s.howNumBlue : ''}`}>{num}</div>
                    <h2 className={s.howHeader}>{header}</h2>
                </div>
                <div className={s.howStatus}>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={hidden ? s.line : s.unactiveLine} d="M8.7041 0.870117V18.1757" stroke="#5BE146" stroke-width="1.73056"/>
                        <path className={hidden ? s.line2 : s.unactiveLine2} d="M0.0512695 9.52246L17.3568 9.52246" stroke="#5BE146" stroke-width="1.73056"/>
                    </svg>
                </div>
            </div>
            <p className={`${hidden ? s.howText : s.howTextUnactive}`}>{text}</p>
        </button>
    )
}