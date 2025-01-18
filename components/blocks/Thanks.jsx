import s from '/styles/Technical.module.scss'
import Image from 'next/image'

export default function Thanks () {
    return (
        <div className={s.thanks}>
            <div className={s.thanksContainer}>
                <h1 className={s.thanksHeader}>Спасибо</h1>
                <span className={s.thanksDes}>за вашу заявку, ожидайте звонка менеджера</span>
                <button className={`${s.button0} ${s.buttonMat0} ${s.btn0}`}>Вернуться на главную</button>
            </div>
            <picture>
                <source media="(max-width: 768px)" srcSet="/thanksPhone.png" />
                <source media="(min-width: 769px)" srcSet="/thanks.png" />
                <Image className={s.thanksImg} src="/thanks.png" width={2000} height={2000} />
            </picture>
        </div>
    )
} 