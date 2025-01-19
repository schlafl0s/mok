import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function AboutUs () {
  return (
    <section className={s.slider}>
        <div className={s.slide}>
            <div className={s.aboutUsInfo}>
            <h1 className={s.slideHeader}>Международная открытая клиника</h1>
            <div className={s.descriptionContainer}>
                <p className={s.aboutDes}><strong>Многопрофильный клинический госпитальный центр</strong>, осуществляющий консервативное и оперативное лечение.</p>
                <p className={s.aboutDes}><strong>Пациентам предоставляется возможность решить большинство</strong> проблем в одном центре – благодаря комплексному подходу и слаженному взаимодействию специалистов с применением высокотехнологичных и малоинвазивных методов</p>
                <p className={s.aboutDes}><strong>К нам обращаются пациенты</strong> в непростых ситуациях за консультациями или хирургической помощью высокой степени сложности.</p>
            </div>
            <button className={`${s.button0} ${s.buttonMat0} ${s.btn0}`}>Записаться на прием</button>
            </div>
            <picture>
              <source media="(max-width: 768px)" srcSet="/aboutUsPhone.png" />
              <source media="(min-width: 769px)" srcSet="/aboutUs.png" />
              <Image className={s.underHeaderBackground} src="/aboutUs.png" width={2000} height={2000} />
            </picture>
        </div>
    </section>
  );
}