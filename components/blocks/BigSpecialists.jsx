import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function BigSpecialists () {
    const allDoctors = [
        {name: 'Сергеева Екатерина Александровна', img:'/specialist.png', experience: '3 года', specialty: 'Гинеколог', option2: 'Ведущий врач', option3: 'Кандидат медицинских наук, врач высшей категории'},
        {name: 'Сергеева Екатерина Александровна', img:'/specialist.png', experience: '3 года', specialty: 'Кардиолог', option2: 'Ведущий врач', option3: 'Кандидат медицинских наук, врач высшей категории'},
        {name: 'Сергеева Екатерина Александровна', img:'/specialist.png', experience: '3 года', specialty: 'Хирург', option2: 'Ведущий врач', option3: 'Кандидат медицинских наук, врач высшей категории'},
        {name: 'Сергеева Екатерина Александровна', img:'/specialist.png', experience: '3 года', specialty: 'Терапевт', option2: 'Ведущий врач', option3: 'Кандидат медицинских наук, врач высшей категории'},
        {name: 'Сергеева Екатерина Александровна', img:'/specialist.png', experience: '3 года', specialty: 'Офтальмолог', option2: 'Ведущий врач', option3: 'Кандидат медицинских наук, врач высшей категории'},
        {name: 'Сергеева Екатерина Александровна', img:'/specialist.png', experience: '3 года', specialty: 'Андролог', option2: 'Ведущий врач', option3: 'Кандидат медицинских наук, врач высшей категории'},
    ]

    return (
        <>
        <section className={s.doctors}>
            <h1 className={s.Header}>Врачи</h1>
            <div className={s.doctorsType}>
                <button className={`${s.button12} ${s.buttonMat12} ${s.btn12} ${s.btn12Active}`}>Взрослые врачи</button>
                <button className={`${s.button12} ${s.buttonMat12} ${s.btn12}`}>Детские врачи</button>
            </div>
            <div className={s.letters}>
                <Letter letter={'А'} />
                <Letter letter={'Б'} />
                <Letter letter={'В'} />
                <Letter letter={'Г'} />
                <Letter letter={'Д'} />
                <Letter letter={'И'} />
                <Letter letter={'К'} />
                <Letter letter={'Л'} />
            </div>
            <button className={s.moreButton}>
                Показать все
                <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.462891 0.5L5.46289 4.5L10.0933 0.5" stroke="#391FCF"/>
                </svg>
            </button>
        </section>
        <section className={s.bigReviews}>
            <div className={s.bigReviewsContainer}>
                <Specialist name={'Сергеева Екатерина Александровна'} img={'/specialist.png'} experience={'3 года'} specialty={'Гинеколог'} option2={'Ведущий врач'} option3={'Кандидат медицинских наук, врач высшей категории'} />
                <Specialist name={'Сергеева Екатерина Александровна'} img={'/specialist.png'} experience={'3 года'} specialty={'Гинеколог'} option2={'Ведущий врач'} option3={'Кандидат медицинских наук, врач высшей категории'} />
                <Specialist name={'Сергеева Екатерина Александровна'} img={'/specialist.png'} experience={'3 года'} specialty={'Гинеколог'} option2={'Ведущий врач'} option3={'Кандидат медицинских наук, врач высшей категории'} />
                <Specialist name={'Сергеева Екатерина Александровна'} img={'/specialist.png'} experience={'3 года'} specialty={'Гинеколог'} option2={'Ведущий врач'} option3={'Кандидат медицинских наук, врач высшей категории'} />
                <Specialist name={'Сергеева Екатерина Александровна'} img={'/specialist.png'} experience={'3 года'} specialty={'Гинеколог'} option2={'Ведущий врач'} option3={'Кандидат медицинских наук, врач высшей категории'} />
                <Specialist name={'Сергеева Екатерина Александровна'} img={'/specialist.png'} experience={'3 года'} specialty={'Гинеколог'} option2={'Ведущий врач'} option3={'Кандидат медицинских наук, врач высшей категории'} />
                <Specialist name={'Сергеева Екатерина Александровна'} img={'/specialist.png'} experience={'3 года'} specialty={'Гинеколог'} option2={'Ведущий врач'} option3={'Кандидат медицинских наук, врач высшей категории'} />
                <Specialist name={'Сергеева Екатерина Александровна'} img={'/specialist.png'} experience={'3 года'} specialty={'Гинеколог'} option2={'Ведущий врач'} option3={'Кандидат медицинских наук, врач высшей категории'} />
                <Specialist name={'Сергеева Екатерина Александровна'} img={'/specialist.png'} experience={'3 года'} specialty={'Гинеколог'} option2={'Ведущий врач'} option3={'Кандидат медицинских наук, врач высшей категории'} />
                <Specialist name={'Сергеева Екатерина Александровна'} img={'/specialist.png'} experience={'3 года'} specialty={'Гинеколог'} option2={'Ведущий врач'} option3={'Кандидат медицинских наук, врач высшей категории'} />
                <Specialist name={'Сергеева Екатерина Александровна'} img={'/specialist.png'} experience={'3 года'} specialty={'Гинеколог'} option2={'Ведущий врач'} option3={'Кандидат медицинских наук, врач высшей категории'} />
                <Specialist name={'Сергеева Екатерина Александровна'} img={'/specialist.png'} experience={'3 года'} specialty={'Гинеколог'} option2={'Ведущий врач'} option3={'Кандидат медицинских наук, врач высшей категории'} />
            </div>
            <button className={`${s.button8} ${s.buttonMat8} ${s.btn8}`}>Показать еще</button>
        </section>
        </>
        
    )
}

function Letter ({letter, doctors}) {
    return (
        <div className={s.letter}>
            <div className={s.letterLetter}>{letter}</div>
            <div className={s.letterDoctors}>
                <span className={s.letterDoctor}>Алголог</span>
                <span className={s.letterDoctor}>Аллерголог</span>
                <span className={s.letterDoctor}>Андролог</span>
                <span className={s.letterDoctor}>Анестезиолог</span>
            </div>
        </div>
    )
}

function Specialist ({img, experience, name, specialty, option2, option3}) {
    return (
      <div className={`${s.specialistCard} ${s.specialistCardWidth}`}>
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
              <li>{specialty}</li>
              <li>{option2}</li>
              <li>{option3}</li>
            </ul>
          </div>
        </div>
        <button className={`${s.button1} ${s.buttonMat1} ${s.btn1}`}>Записаться на прием</button>
      </div>
    )
}