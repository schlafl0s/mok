import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function Specialists ({ setPopupOpen }) {
  function Specialist ({img, experience, name, option1, option2, option3}) {
    return (
      <div className={s.specialistCard}>
        <div className={s.specialistInfo}>
          <div className={s.experience}>Стаж: {experience}</div>
          <Image
            className={s.specialistImg}
            src={img}
            width={220}
            height={220}
          />
          <div className={s.specialistInfoText}>
            <span className={s.specialistName}>
              {name}
            </span>
            <ul className={s.specialistOptions}>
              <li>{option1}</li>
              <li>{option2}</li>
              <li>{option3}</li>
            </ul>
          </div>
        </div>
        <button onClick={() => setPopupOpen(true)} className={`${s.button1} ${s.buttonMat1} ${s.btn1}`}>Записаться на прием</button>
      </div>
    )
  }

    return (
        <section className={s.specialist}>
            <div className={s.specialsUp}>
                <h1 className={s.Header}>Наши специалисты</h1>
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
            <div className={s.specialistContainer}>
                <Specialist name={'Сергеева Екатерина Александровна'} img={'/specialist.png'} experience={'3 года'} option1={'Гинеколог'} option2={'Ведущий врач'} option3={'Кандидат медицинских наук, врач высшей категории'} />
                <Specialist name={'Сергеева Екатерина Александровна'} img={'/specialist.png'} experience={'3 года'} option1={'Гинеколог'} option2={'Ведущий врач'} option3={'Кандидат медицинских наук, врач высшей категории'} />
                <Specialist name={'Сергеева Екатерина Александровна'} img={'/specialist.png'} experience={'3 года'} option1={'Гинеколог'} option2={'Ведущий врач'} option3={'Кандидат медицинских наук, врач высшей категории'} />
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