import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function HowIsItGoing () {
    return (
        <div className={s.how}>
            <h1 className={s.Header}>Как проходит процедура</h1>
            <div className={s.howContainer}>
                <div className={s.howInfo}>
                    <Hidden num={'01'} header={'Получите направление (или назначение) на лабораторное исследование'} text={'Назначить стандартное лабораторное исследование может врач любой специализации при наличии показаний, так как всем специалистам системы столичного здравоохранения доступен один и тот же перечень возможных лабораторных тестов.'} />
                    <Hidden num={'02'} header={'Подготовка к проведению анализа и сдача'} text={'Назначить стандартное лабораторное исследование может врач любой специализации при наличии показаний, так как всем специалистам системы столичного здравоохранения доступен один и тот же перечень возможных лабораторных тестов.'} />
                    <Hidden num={'03'} header={'Получение результатов лабораторных исследований'} text={'Назначить стандартное лабораторное исследование может врач любой специализации при наличии показаний, так как всем специалистам системы столичного здравоохранения доступен один и тот же перечень возможных лабораторных тестов.'} />
                    <Hidden num={'04'} header={'Получение результатов лабораторных исследований'} text={'Назначить стандартное лабораторное исследование может врач любой специализации при наличии показаний, так как всем специалистам системы столичного здравоохранения доступен один и тот же перечень возможных лабораторных тестов.'} />
                </div>
                <Image className={s.howImg} src="/how.png" width={2000} height={2000} />
            </div>
        </div>
    )
}

function Hidden ({num, header, text}) {
    return (
        <button className={s.howHidden}>
            <div className={s.howLeftHidden}>
                 <div className={s.howNum}>{num}</div>
                <h2 className={s.howHeader}>{header}</h2>
            </div>
            <div className={s.howStatus}>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.7041 0.870117V18.1757" stroke="#5BE146" stroke-width="1.73056"/>
                    <path d="M0.0512695 9.52246L17.3568 9.52246" stroke="#5BE146" stroke-width="1.73056"/>
                </svg>
                {/* <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.0512695 9.06836L17.3568 9.06836" stroke="#391FCF" stroke-width="1.73056"/>
                </svg> */}
            </div>
            {/* <p className={s.howText}>{text}</p> */}
        </button>
    )
}