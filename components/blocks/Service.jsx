import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function Service () {
  return (
    <section className={s.slider}>
        <div className={s.slide}>
            <div className={s.aboutUsInfo}>
            <h1 className={s.serviceHeader}>Анализы и диагностика в МОК</h1>
            <div className={s.descriptionContainer}>
                <p className={s.aboutDes}><strong>Медицинская диагностика</strong> – это комплекс мер, направленных на выявление и идентификацию состояний организма для постановки окончательного диагноза. Только проведя полноценную диагностику, специалист может назначить объективное и эффективное лечение, воздействующее на причину патологии, а не только на ее симптомы.</p>
                <p className={s.aboutDes}><strong>При этом инновационные методы исследований</strong> позволяют выявить заболевания на ранних стадиях, избежав опасных состояний и осложнений.</p>
                <p className={s.aboutDes}>МОК предлагает своим пациентам профессиональную лабораторную и аппаратную диагностику с применением новейших методик.</p>
            </div>
            <button className={`${s.button0} ${s.buttonMat0} ${s.btn0}`}>Записаться на прием</button>
            </div>
            <picture>
            <source media="(max-width: 768px)" srcSet="/servicePhone.png" />
            <source media="(min-width: 769px)" srcSet="/service.png" />
            <Image className={s.underHeaderBackground} src="/service.png" width={2000} height={2000} />
            </picture>
        </div>
    </section>
  );
}