import s from '/styles/Technical.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Thanks () {
    return (
        <div className={s.thanks}>
            <div className={s.thanksContainer}>
                <h1 className={s.thanksHeader}>Спасибо</h1>
                <span className={s.thanksDes}>за вашу заявку, ожидайте звонка менеджера</span>
                {/*Обычно ссылка оборачивает кнопку*/}
                <button className={`${s.button0} ${s.buttonMat0} ${s.btn0}`}><Link href={'/'}>Вернуться на главную</Link></button>
            </div>
            <picture>
                <source media="(max-width: 728px)" srcSet="/thanksPhone.png" />
                <source media="(min-width: 729px)" srcSet="/thanks.png" />
                <Image className={s.thanksImg} src="/thanks.png" width={2000} height={2000} />
            </picture>
        </div>
    )
}
