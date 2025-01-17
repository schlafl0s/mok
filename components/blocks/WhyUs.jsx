import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function WhyUs () {
    return (
        <section className={s.whyUs}>
            <div className={s.whyUsBackground}></div>
            <div className={s.specialsUp}>
                <h1 className={s.Header}>Почему выбирают нас</h1>
                <div className={s.switcher}>
                    <button className={`${s.switchBtnLeft} ${s.switchInactive}`}>
                      <svg className={s.switchBtnLeftArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                      </svg>
                    </button>
                    <button className={s.switchBtnRight}>
                      <svg className={s.switchBtnRightArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                      </svg>
                    </button>
                </div>
            </div>
            <div className={s.whyUsContainer}>
                <WhyUsCard1 img={'/whyUs1.png'} header={'Профессионализм'} text={'В клинике работает более 3500 квалифицированных врачей различных специальностей, среди которых 202 кандидата медицинских наук, 26 докторов медицинских наук, 17 профессоров, 2 академика РАМН, 9 доцентов и старших научных сотрудников'} />
                <WhyUsCard2 img={'/whyUs2.png'} header={'Широкий спектр услуг'} text={'Наш формат - универсальная семейная клиника, в которой взрослым и детям оказываются различные виды медицинской помощи. Диагностика, лечение и профилактика заболеваний практически по всем направлениям современной медицины'}/>
            </div>
            <div className={s.switcherPhone}>
                <button className={`${s.switchBtnLeft} ${s.switchInactive}`}>
                <svg className={s.switchBtnLeftArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                </svg>
                </button>
                <button className={s.switchBtnRight}>
                <svg className={s.switchBtnRightArrow} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM27 10.5H2V13.5H27V10.5Z" fill="white"/>
                </svg>
                </button>
            </div>
        </section>
    )
}

function WhyUsCard1 ({img, header, text}) {
    return (
      <div className={s.whyUsCard1}>
        <Image
        className={s.whyUsImg}
        src={img}
        width={1000}
        height={1000}
        />
        <Image
        className={s.whyUsArrow1}
        src={'/specialsArrowYellow.png'}
        width={65}
        height={65}
        />
        <h2 className={s.whyUsHeader}>{header}</h2>
        <p className={s.whyUsText}>{text}</p>
      </div>
    )
  }
  
  function WhyUsCard2 ({img, header, text}) {
    return (
      <div className={s.whyUsCard2}>
        <Image
        className={s.whyUsImg}
        src={img}
        width={1000}
        height={1000}
        />
        <Image
        className={s.whyUsArrow2}
        src={'/specialsArrowBlue.png'}
        width={65}
        height={65}
        />
        <h2 className={s.whyUsHeader}>{header}</h2>
        <p className={s.whyUsText}>{text}</p>
      </div>
    )
  }