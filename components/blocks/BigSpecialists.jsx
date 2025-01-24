import s from '/styles/Home.module.scss'
import Image from 'next/image'
import { useState } from 'react';

export default function BigSpecialists ({ setPopupOpen }) {
    const allDoctors = [
        { name: 'Сергеева Екатерина Александровна', img: '/specialist.png', experience: '3 года', specialty: 'Гинеколог', option2: 'Ведущий врач', option3: 'Кандидат медицинских наук, врач высшей категории' },
        { name: 'Иванов Алексей Петрович', img: '/specialist.png', experience: '5 лет', specialty: 'Кардиолог', option2: 'Ведущий врач', option3: 'Кандидат медицинских наук, врач первой категории' },
        { name: 'Петрова Мария Сергеевна', img: '/specialist.png', experience: '7 лет', specialty: 'Хирург', option2: 'Врач', option3: 'Доктор медицины' },
        { name: 'Михайлова Анна Дмитриевна', img: '/specialist.png', experience: '2 года', specialty: 'Терапевт', option2: 'Врач', option3: 'Медицинский специалист' },
        { name: 'Попов Николай Викторович', img: '/specialist.png', experience: '10 лет', specialty: 'Офтальмолог', option2: 'Ведущий врач', option3: 'Заслуженный врач России' },
        { name: 'Федорова Оксана Владимировна', img: '/specialist.png', experience: '3 года', specialty: 'Андролог', option2: 'Врач высшей категории', option3: 'Специалист в области мужского здоровья' },
        { name: 'Руденко Дмитрий Александрович', img: '/specialist.png', experience: '8 лет', specialty: 'Невролог', option2: 'Кандидат медицинских наук', option3: 'Специалист по лечению головных болей' },
        { name: 'Кузнецова Елена Валерьевна', img: '/specialist.png', experience: '6 лет', specialty: 'Педиатр', option2: 'Врач', option3: 'Специалист по детским заболеваниям' },
        { name: 'Зайцева Лилия Сергеевна', img: '/specialist.png', experience: '4 года', specialty: 'Лор (отоларинголог)', option2: 'Врач', option3: 'Специалист по заболеваниям горла и носа' },
        { name: 'Белов Александр Михайлович', img: '/specialist.png', experience: '12 лет', specialty: 'Ревматолог', option2: 'Заслуженный врач России', option3: 'Специалист по лечению суставов' },
        { name: 'Дмитриева Наталья Александровна', img: '/specialist.png', experience: '3 года', specialty: 'Диетолог', option2: 'Врач', option3: 'Специалист по здоровому питанию' },
        { name: 'Сидорова Ирина Анатольевна', img: '/specialist.png', experience: '5 лет', specialty: 'Маммолог', option2: 'Ведущий врач', option3: 'Специалист по заболеваниям молочных желез' },
        { name: 'Григорьева Ирина Викторовна', img: '/specialist.png', experience: '9 лет', specialty: 'Психолог', option2: 'Врач', option3: 'Специалист по психотерапии' },
        { name: 'Шевченко Павел Валерьевич', img: '/specialist.png', experience: '7 лет', specialty: 'Онколог', option2: 'Ведущий врач', option3: 'Доктор медицинских наук' },
        { name: 'Андреева Ксения Николаевна', img: '/specialist.png', experience: '4 года', specialty: 'Терапевт', option2: 'Врач', option3: 'Специалист по лечению простудных заболеваний' },
        { name: 'Маркова Ирина Васильевна', img: '/specialist.png', experience: '5 лет', specialty: 'Невролог', option2: 'Ведущий врач', option3: 'Специалист по лечению неврозов' },
        { name: 'Головин Владимир Сергеевич', img: '/specialist.png', experience: '3 года', specialty: 'Хирург', option2: 'Врач', option3: 'Специалист по абдоминальной хирургии' },
        { name: 'Ковальчук Алексей Валерьевич', img: '/specialist.png', experience: '6 лет', specialty: 'Ортопед', option2: 'Врач первой категории', option3: 'Специалист по лечению заболеваний суставов' },
        { name: 'Егорова Людмила Васильевна', img: '/specialist.png', experience: '7 лет', specialty: 'Акушер', option2: 'Кандидат медицинских наук', option3: 'Специалист по женскому здоровью' },
        { name: 'Анисимов Павел Владимирович', img: '/specialist.png', experience: '10 лет', specialty: 'Кардиолог', option2: 'Ведущий врач', option3: 'Специалист по лечению аритмий' },
        { name: 'Тимофеева Екатерина Михайловна', img: '/specialist.png', experience: '4 года', specialty: 'Педиатр', option2: 'Врач', option3: 'Специалист по детской гастроэнтерологии' },
        { name: 'Морозов Олег Иванович', img: '/specialist.png', experience: '12 лет', specialty: 'Хирург', option2: 'Доктор медицинских наук', option3: 'Специалист по трансплантации органов' },
        { name: 'Иванова Наталья Григорьевна', img: '/specialist.png', experience: '8 лет', specialty: 'Офтальмолог', option2: 'Кандидат медицинских наук', option3: 'Специалист по лечению катаракты' },
        { name: 'Фролов Дмитрий Игоревич', img: '/specialist.png', experience: '3 года', specialty: 'Невролог', option2: 'Специалист', option3: 'Специалист по лечению головных болей' },
        { name: 'Смирнова Алла Александровна', img: '/specialist.png', experience: '5 лет', specialty: 'Терапевт', option2: 'Врач', option3: 'Специалист по дыхательной системы' },
        { name: 'Курникова Дарина Валерьевна', img: '/specialist.png', experience: '6 лет', specialty: 'Психолог', option2: 'Ведущий врач', option3: 'Специалист по семейным консультациям' },
        { name: 'Панова Нина Евгеньевна', img: '/specialist.png', experience: '7 лет', specialty: 'Акушер-гинеколог', option2: 'Ведущий врач', option3: 'Специалист по лечению бесплодия' },
        { name: 'Жуков Илья Дмитриевич', img: '/specialist.png', experience: '4 года', specialty: 'Гастроэнтеролог', option2: 'Врач', option3: 'Специалист по лечению заболеваний ЖКТ' },
        { name: 'Левина Оксана Борисовна', img: '/specialist.png', experience: '8 лет', specialty: 'Онколог', option2: 'Кандидат медицинских наук', option3: 'Специалист по лечению опухолей' },
        { name: 'Кузнецов Павел Ярославович', img: '/specialist.png', experience: '12 лет', specialty: 'Пластический хирург', option2: 'Врач высшей категории', option3: 'Специалист по эстетической хирургии' },
        { name: 'Воронова Галина Викторовна', img: '/specialist.png', experience: '3 года', specialty: 'Психотерапевт', option2: 'Ведущий врач', option3: 'Специалист по стрессам и депрессиям' },
        { name: 'Ткаченко Дмитрий Владимирович', img: '/specialist.png', experience: '9 лет', specialty: 'Невролог', option2: 'Доктор медицинских наук', option3: 'Специалист по нервным заболеваниям' },
        { name: 'Шмидт Ирина Артемовна', img: '/specialist.png', experience: '6 лет', specialty: 'Лор (отоларинголог)', option2: 'Врач первой категории', option3: 'Специалист по лечению заболеваний носа' },
        { name: 'Гаврилова Ирина Александровна', img: '/specialist.png', experience: '7 лет', specialty: 'Педиатр', option2: 'Специалист по инфекционным заболеваниям', option3: 'Специалист по заболеваниям' },
        { name: 'Беляев Виктор Анатольевич', img: '/specialist.png', experience: '11 лет', specialty: 'Кардиолог', option2: 'Ведущий врач', option3: 'Специалист по лечению гипертонии' },
        { name: 'Семенова Валентина Петровна', img: '/specialist.png', experience: '10 лет', specialty: 'Онколог', option2: 'Врач', option3: 'Доктор медицинских наук' },
        { name: 'Колесникова Екатерина Николаевна', img: '/specialist.png', experience: '6 лет', specialty: 'Логопед', option2: 'Врач', option3: 'Специалист по коррекции речи' },
        { name: 'Максимова Елена Александровна', img: '/specialist.png', experience: '4 года', specialty: 'Гинеколог', option2: 'Врач первой категории', option3: 'Специалист по женским заболеваниям' },
        { name: 'Никитина Светлана Сергеевна', img: '/specialist.png', experience: '8 лет', specialty: 'Психотерапевт', option2: 'Ведущий врач', option3: 'Специалист по кризисным ситуациям' },
        { name: 'Киселева Екатерина Ивановна', img: '/specialist.png', experience: '9 лет', specialty: 'Кардиолог', option2: 'Врач первой категории', option3: 'Специалист по лечению атеросклероза' },
        { name: 'Яковлева Ирина Валерьевна', img: '/specialist.png', experience: '5 лет', specialty: 'Диетолог', option2: 'Врач', option3: 'Специалист по диетологии' },
        { name: 'Горшкова Ирина Александровна', img: '/specialist.png', experience: '7 лет', specialty: 'Психолог', option2: 'Ведущий врач', option3: 'Специалист по детской психологии' },
        { name: 'Барсукова Татьяна Петровна', img: '/specialist.png', experience: '10 лет', specialty: 'Ревматолог', option2: 'Врач высшей категории', option3: 'Специалист по суставам' },
        { name: 'Чистова Елена Артемовна', img: '/specialist.png', experience: '8 лет', specialty: 'Педиатр', option2: 'Ведущий врач', option3: 'Специалист по лечению аллергий' },
        { name: 'Мищенко Михаил Игоревич', img: '/specialist.png', experience: '6 лет', specialty: 'Ортопед', option2: 'Врач первой категории', option3: 'Специалист по травмам' },
    ];
    

    const [page, setPage] = useState(1);
    const specialistsPerPage = 12;
    const currentDoctors = allDoctors.slice(0, page * specialistsPerPage);
    const handleShowMore = () => {
        setPage(page + 1);
    };
    const hasMoreDoctors = currentDoctors.length < allDoctors.length;
    const groupedSpecialties = allDoctors.reduce((acc, doctor) => {
        const firstLetter = doctor.specialty[0].toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        // Добавляем специальность в массив, если её ещё нет
        if (!acc[firstLetter].includes(doctor.specialty)) {
            acc[firstLetter].push(doctor.specialty);
        }
        return acc;
    }, {});

    const sortedLetters = Object.keys(groupedSpecialties).sort();

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
            <button onClick={() => setPopupOpen(true)} className={`${s.button1} ${s.buttonMat1} ${s.btn1}`}>Записаться на прием</button>
          </div>
        )
    }

    function Letter ({letter, specialties}) {
        return (
            <div className={s.letter}>
                <div className={s.letterLetter}>{letter}</div>
                <div className={s.letterDoctors}>
                    {specialties && specialties.map((specialty, index) => (
                        <span key={index} className={s.letterDoctor}>{specialty}</span>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <>
        <section className={s.doctors}>
            <h1 className={s.Header}>Врачи</h1>
            <div className={s.doctorsType}>
                <button className={`${s.button12} ${s.buttonMat12} ${s.btn12} ${s.btn12Active}`}>Взрослые врачи</button>
                <button className={`${s.button12} ${s.buttonMat12} ${s.btn12}`}>Детские врачи</button>
            </div>
            <div className={s.letters}>
                {sortedLetters.map(letter => (
                    <Letter 
                        key={letter}
                        letter={letter}
                        specialties={groupedSpecialties[letter]}
                    />
                ))}
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
                {currentDoctors.map((doctor, index) => (
                <Specialist
                    key={index}
                    name={doctor.name}
                    img={doctor.img}
                    experience={doctor.experience}
                    specialty={doctor.specialty}
                    option2={doctor.option2}
                    option3={doctor.option3}
                    />
                ))}
            </div>
            {hasMoreDoctors && (
                <button onClick={handleShowMore} className={`${s.button8} ${s.buttonMat8} ${s.btn8}`}>Показать еще</button>
            )}
        </section>
        </>
        
    )
}