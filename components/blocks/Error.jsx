import s from '/styles/Technical.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Error () {
    return (
        <div className={s.error}>
            <div className={s.errorContainer}>
                <span className={s.errorDes1}>Упс, кажется что-то пошло не так ...</span>
                <h1 className={s.errorHeader}>
                    404
                    <Image className={s.VUH1} src={'/V.png'} width={100} height={100} />
                    <Image className={s.VUH2} src={'/V.png'} width={100} height={100} />
                </h1>
                <span className={s.errorDes2}>Страница не найдена, проверьте адрес ссылки или вернитесь на главную страницу</span>
                <button className={`${s.button0} ${s.buttonMat0} ${s.btn0}`}>
                    <Link href={'/'}>
                        Вернуться на главную
                    </Link>
                </button>
            </div>
            <picture>
                <source media="(max-width: 768px)" srcSet="/thanksPhone.png" />
                <source media="(min-width: 769px)" srcSet="/thanks.png" />
                <Image className={s.thanksImg} src="/thanks.png" width={2000} height={2000} />
            </picture>
        </div>
    )
} 